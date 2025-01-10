# Node.js base layer with dependencies installed
FROM node:16-alpine as node-base
WORKDIR /app
COPY package*.json ./
RUN npm install

# Development build stage (base for prod)
FROM node-base as development
WORKDIR /app
COPY . .
RUN npm run build
EXPOSE 8000

# Production build stage - separate stage for security isolation (NodeJS/npm not needed for prod)
FROM development as production-build
RUN npm prune --production && \
    mkdir -p /usr/share/nginx/html && \
    cp -r dist/* /usr/share/nginx/html/

# Final production stage - minimal nginx with built static assets
FROM nginx:alpine as production
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=production-build /app/dist /usr/share/nginx/html
EXPOSE 80

# Stage selection - defaults to production
FROM ${BUILD_ENV:-production} as final
CMD ["nginx", "-g", "daemon off;"]
# Trigger build2
