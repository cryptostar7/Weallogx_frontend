# Base nginx static server (first - changes least)
FROM nginx:alpine as nginx-base
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

# Node.js base layer with dependencies
FROM node:16-alpine as node-base
WORKDIR /app
COPY package*.json ./
RUN npm install

# Development stage - combined build and serve
FROM node-base as development
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 8000
# Mount source at runtime, build and serve through nginx
CMD ["sh", "-c", "npm run build && cp -r dist/* /usr/share/nginx/html/ && nginx -g 'daemon off;'"]

# Production build stage - separate for security
FROM node-base as production-build
WORKDIR /app
COPY . .
RUN npm run build \
    && npm prune --production

# Final production stage - minimal nginx with built assets
FROM nginx-base as production
COPY --from=production-build /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]

# Stage selection - defaults to production
ARG ENV=production
FROM ${ENV} as final