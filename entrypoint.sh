#!/bin/sh
set -ex

envsubst '$ALB_URL' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

echo "---- RUNTIME VITE ENV REPLACEMENT ----"
echo "Available VITE environment variables:"
env | grep "^VITE_" || echo "No VITE_ variables found"

# Replace VITE environment variables in built JavaScript files
if [ -d "/usr/share/nginx/html/assets" ]; then
    echo "Replacing VITE_ environment variables in JavaScript files..."
    for file in /usr/share/nginx/html/assets/*.js; do
        if [ -f "$file" ]; then
            # Replace only the Stripe key at runtime - other env vars use standard Vite handling
            sed -i "s|__VITE_STRIPE_PUBLISHABLE_KEY__|${VITE_STRIPE_PUBLISHABLE_KEY:-}|g" "$file"
        fi
    done
    echo "Environment variable replacement completed."
else
    echo "WARNING: /usr/share/nginx/html/assets directory not found!"
fi

echo "---- NGINX CONFIG AT DEPLOY ----"
ls -l /etc/nginx/conf.d/
ls -l /etc/nginx/conf.d/default.conf
head -20 /etc/nginx/conf.d/default.conf

echo "Starting NGINX..."
sleep 1

exec nginx -g 'daemon off;' 