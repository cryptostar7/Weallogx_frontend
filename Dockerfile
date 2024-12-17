# Stage 1: Clone and build the UI app with Node
FROM node:16-alpine as build-stage

WORKDIR /app
COPY . /app
RUN npm install && npm run build

# Stage 2: Serve the static files with nginx
FROM nginx:alpine as serve-stage

# Remove default nginx configuration and inject the project one
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the built static files from the build-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80 for serving the UI
EXPOSE 80

# Start nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]
