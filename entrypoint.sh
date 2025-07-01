#!/bin/sh
set -e

envsubst '$ALB_URL' < /etc/nginx/conf.d/default.conf > /etc/nginx/conf.d/default.conf

# Start NGINX
echo "Starting NGINX..."
exec nginx -g 'daemon off;' 