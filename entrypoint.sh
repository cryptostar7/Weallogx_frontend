#!/bin/sh
set -e



# Start NGINX
echo "Starting NGINX..."
exec nginx -g 'daemon off;' -c /etc/nginx/conf.d/default.conf 