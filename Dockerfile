# Use Node.js 18 for compatibility with dependencies
FROM 196587924847.dkr.ecr.us-east-1.amazonaws.com/wlx-node18alpine as node-base
WORKDIR /app
COPY package*.json ./
RUN npm install

# Development build stage
FROM node-base as development
WORKDIR /app
COPY . .
RUN npm run build
EXPOSE 8000

# Production build stage
FROM development as production-build
WORKDIR /app
RUN npm prune --production && \
    mkdir -p /usr/share/nginx/html && \
    cp -r dist/* /usr/share/nginx/html/

# Final production stage
FROM 196587924847.dkr.ecr.us-east-1.amazonaws.com/wlx-node18alpine as production
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=production-build /usr/share/nginx/html /usr/share/nginx/html
EXPOSE 8000

# Final CMD
CMD ["nginx", "-g", "daemon off;"]
