# Build stage
FROM node:16-alpine as builder
WORKDIR /app
COPY . /app
RUN npm install && npm run build

# Production stage - overwrite the default nginx configuration with our own
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Development stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 8000
# Start nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]

# # Start NGINX and the API; TODO compare to the above CMD
# CMD service nginx start && gunicorn -b 0.0.0.0:8000 app:app
# EXPOSE 80  
# # and 443? or would the ALB handle decryption and UI/API can ignore?
