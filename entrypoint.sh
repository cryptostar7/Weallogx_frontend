#!/bin/sh
# Substitute the ALB_URL environment variable into the nginx config
envsubst '$ALB_URL' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

# Start nginx
nginx -g 'daemon off;'
