#!/bin/sh
set -ex

envsubst '$ALB_URL' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

echo "---- RUNTIME VITE ENV REPLACEMENT ----"
echo "Available VITE environment variables:"
env | grep "^VITE_" || echo "No VITE_ variables found"

# Replace VITE environment variables in built JavaScript files
echo "Checking for built JavaScript files..."
ls -la /usr/share/nginx/html/ || echo "HTML directory not found"
ls -la /usr/share/nginx/html/assets/ || echo "Assets directory not found"

if [ -d "/usr/share/nginx/html/assets" ]; then
    echo "Replacing VITE_ environment variables in JavaScript files..."
    echo "Found JS files:"
    ls -la /usr/share/nginx/html/assets/*.js || echo "No JS files found"
    
    for file in /usr/share/nginx/html/assets/*.js; do
        if [ -f "$file" ]; then
            echo "Processing: $file"
            echo "File size before: $(wc -c < "$file")"
            
            # Show what we're replacing
            echo "VITE_API_BASE_URL value: '${VITE_API_BASE_URL:-EMPTY}'"
            echo "Looking for pattern __VITE_API_BASE_URL__ in file:"
            grep -n "__VITE_API_BASE_URL__" "$file" || echo "Pattern not found"
            
            # Replace VITE_ environment variables with actual values
            sed -i "s|__VITE_STRIPE_PUBLISHABLE_KEY__|${VITE_STRIPE_PUBLISHABLE_KEY:-}|g" "$file"
            sed -i "s|__VITE_API_BASE_URL__|${VITE_API_BASE_URL:-}|g" "$file"
            sed -i "s|__VITE_APP_URL__|${VITE_APP_URL:-}|g" "$file"
            sed -i "s|__VITE_ADMIN_PANEL_URL__|${VITE_ADMIN_PANEL_URL:-}|g" "$file"
            sed -i "s|__VITE_ACCESS_TOKEN_EXPIRE_IN__|${VITE_ACCESS_TOKEN_EXPIRE_IN:-}|g" "$file"
            sed -i "s|__VITE_REFRESH_TOKEN_EXPIRE_IN__|${VITE_REFRESH_TOKEN_EXPIRE_IN:-}|g" "$file"
            sed -i "s|__VITE_SENTRY_DSN_KEY__|${VITE_SENTRY_DSN_KEY:-}|g" "$file"
            
            echo "File size after: $(wc -c < "$file")"
            echo "Checking if pattern was replaced:"
            grep -n "__VITE_API_BASE_URL__" "$file" || echo "Pattern successfully replaced"
        fi
    done
    echo "Environment variable replacement completed."
else
    echo "WARNING: /usr/share/nginx/html/assets directory not found!"
    echo "Available directories:"
    find /usr/share/nginx/html -type d
fi

echo "---- NGINX CONFIG AT DEPLOY ----"
ls -l /etc/nginx/conf.d/
ls -l /etc/nginx/conf.d/default.conf
head -20 /etc/nginx/conf.d/default.conf

echo "Starting NGINX..."
sleep 1

exec nginx -g 'daemon off;' 