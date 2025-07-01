#!/bin/sh
set -ex

envsubst '$ALB_URL' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

echo "---- NGINX CONFIG AT DEPLOY ----"
ls -l /etc/nginx/conf.d/
ls -l /etc/nginx/conf.d/default.conf
head -20 /etc/nginx/conf.d/default.conf

echo "Starting NGINX..."
sleep 1

exec nginx -g 'daemon off;' 