#!/bin/sh
# Health check script to monitor backend connectivity

BACKEND_URL="${ALB_URL:-http://internal-staginglbbackend-536880790.us-east-1.elb.amazonaws.com:80}"
MAX_RETRIES=3
RETRY_DELAY=5
LOG_FILE="/tmp/health-check.log"

log_message() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> "$LOG_FILE"
    echo "$1"
}

check_backend() {
    for i in $(seq 1 $MAX_RETRIES); do
        log_message "Checking backend health (attempt $i/$MAX_RETRIES)..."
        
        # Try to reach the backend health endpoint
        HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" --connect-timeout 5 --max-time 10 "${BACKEND_URL}/health/" 2>/dev/null)
        
        if [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "204" ]; then
            log_message "Backend is healthy (HTTP $HTTP_CODE)"
            return 0
        else
            log_message "Backend check failed with HTTP $HTTP_CODE"
            
            # If not the last attempt, wait before retrying
            if [ $i -lt $MAX_RETRIES ]; then
                log_message "Waiting ${RETRY_DELAY}s before retry..."
                sleep $RETRY_DELAY
            fi
        fi
    done
    
    log_message "ERROR: Backend is unhealthy after $MAX_RETRIES attempts"
    return 1
}

# Keep only last 100 lines of log file
if [ -f "$LOG_FILE" ]; then
    tail -n 100 "$LOG_FILE" > "${LOG_FILE}.tmp" && mv "${LOG_FILE}.tmp" "$LOG_FILE"
fi

# Run health check
check_backend
RESULT=$?

# Exit with the result
exit $RESULT