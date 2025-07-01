#!/bin/sh
set -e

# Check if ALB_URL is provided
if [ -z "$ALB_URL" ]; then
  echo "ERROR: ALB_URL environment variable not set. This is required for proper operation."
  echo "Please set ALB_URL in your ECS task definition or container environment."
  exit 1
fi

echo "Frontend container starting with ALB_URL: $ALB_URL"

# Replace environment variables in the NGINX config
envsubst '${ALB_URL}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

# Log the final NGINX configuration for debugging
echo "======= NGINX Configuration ======="
cat /etc/nginx/conf.d/default.conf
echo "=================================="

# Check if the backend is reachable
echo "Testing connection to backend: $ALB_URL"
if ping -c 1 $ALB_URL > /dev/null 2>&1; then
  echo "Backend is reachable via ping"
else
  echo "WARNING: Backend is not responding to ping. This might be normal if ICMP is blocked."
fi

# Start NGINX
echo "Starting NGINX..."
exec nginx -g 'daemon off;' 