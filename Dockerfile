ARG APP_ENV=production
ARG BUILD_ENV=production
# Default to ECR images for production, override for local development
ARG NGINX_IMAGE=196587924847.dkr.ecr.us-east-1.amazonaws.com/wlx-nginx
ARG NODE_IMAGE=196587924847.dkr.ecr.us-east-1.amazonaws.com/wlx-node18alpine

FROM ${NODE_IMAGE} AS node-base
RUN echo "Using APP_ENV: ${APP_ENV}"
RUN echo "Using BUILD_ENV: ${BUILD_ENV}"
RUN echo "Using Node image: ${NODE_IMAGE}"

# pre-install dependencies and app code
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Development build stage
FROM node-base AS development
WORKDIR /app
CMD ["npm", "run", "dev"]
EXPOSE 8000 5173 5174 9229

# Production build stage
FROM node-base AS production-build
WORKDIR /app
RUN npm run build && \
    npm prune --production && \
    mkdir -p /usr/share/nginx/html && \
    cp -r dist/* /usr/share/nginx/html/
EXPOSE 8000

# Final production stage (nginx proxy forwarding)
FROM ${NGINX_IMAGE} AS production
# RUN echo "Using NGINX image: ${$NGINX_IMAGE}"
RUN apk update && apk upgrade --no-cache
COPY nginx.conf /etc/nginx/conf.d/default.conf.template
COPY entrypoint.sh /
RUN chmod +x /entrypoint.sh
COPY --from=production-build /usr/share/nginx/html /usr/share/nginx/html

# Select build and run API
# ARG BUILD_ENV=production
# FROM ${BUILD_ENV:-production} AS final
FROM production AS final
ENTRYPOINT ["/entrypoint.sh"]  
