#!/bin/sh
set -e



# Start NGINX
echo "Starting NGINX..."
exec nginx -g 'daemon off;' 