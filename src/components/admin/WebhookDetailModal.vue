<template>
  <div class="modal show d-block" tabindex="-1" style="background-color: rgba(0,0,0,0.5)">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            <i class="fas fa-satellite-dish me-2"></i>
            Webhook Details
          </h5>
          <button type="button" class="btn-close" @click="$emit('close')"></button>
        </div>
        
        <div class="modal-body">
          <div v-if="loadingDetails" class="text-center py-4">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading details...</span>
            </div>
          </div>
          
          <div v-else>
            <!-- Status Banner -->
            <div class="alert" :class="getStatusAlertClass(webhook.status)" role="alert">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <strong>{{ webhook.status.toUpperCase() }}</strong>
                  <span v-if="webhook.status === 'failed'" class="ms-2">
                    <i class="fas fa-exclamation-triangle"></i>
                    Processing Failed
                  </span>
                  <span v-else-if="webhook.status === 'success'" class="ms-2">
                    <i class="fas fa-check-circle"></i>
                    Successfully Processed
                  </span>
                  <span v-else class="ms-2">
                    <i class="fas fa-clock"></i>
                    Processing Pending
                  </span>
                </div>
                <div>
                  <span class="badge" :class="getStatusBadgeClass(webhook.status)">
                    {{ webhook.event_type }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Basic Information -->
            <div class="row mb-4">
              <div class="col-md-6">
                <h6 class="text-muted mb-3">Basic Information</h6>
                <div class="mb-2">
                  <strong>Event ID:</strong>
                  <div class="mt-1">
                    <code class="bg-light p-1 rounded">{{ webhook.event_id }}</code>
                    <button 
                      @click="copyToClipboard(webhook.event_id)" 
                      class="btn btn-outline-secondary btn-sm ms-2"
                      title="Copy Event ID"
                    >
                      <i class="fas fa-copy"></i>
                    </button>
                  </div>
                </div>
                
                <div class="mb-2">
                  <strong>Event Type:</strong>
                  <div class="mt-1">
                    <code class="bg-light p-1 rounded">{{ webhook.event_type }}</code>
                  </div>
                </div>
                
                <div class="mb-2">
                  <strong>Payload Size:</strong>
                  <span class="ms-2">{{ formatBytes(webhook.payload_size) }}</span>
                </div>
              </div>
              
              <div class="col-md-6">
                <h6 class="text-muted mb-3">Timing Information</h6>
                <div class="mb-2">
                  <strong>Received At:</strong>
                  <div class="mt-1">{{ formatDateTime(webhook.received_at) }}</div>
                </div>
                
                <div v-if="webhook.processed_at" class="mb-2">
                  <strong>Processed At:</strong>
                  <div class="mt-1">{{ formatDateTime(webhook.processed_at) }}</div>
                </div>
                
                <div v-if="webhook.processing_time_ms" class="mb-2">
                  <strong>Processing Time:</strong>
                  <span class="ms-2">{{ webhook.processing_time_ms }}ms</span>
                  <span v-if="details?.troubleshooting?.is_slow" class="text-warning ms-2">
                    <i class="fas fa-exclamation-triangle"></i>
                    Slow
                  </span>
                </div>
                
                <div v-if="webhook.duration_seconds" class="mb-2">
                  <strong>Total Duration:</strong>
                  <span class="ms-2">{{ webhook.duration_seconds.toFixed(2) }}s</span>
                </div>
              </div>
            </div>

            <!-- Error Information (if failed) -->
            <div v-if="webhook.status === 'failed' && webhook.error_message" class="mb-4">
              <h6 class="text-muted mb-3">Error Information</h6>
              <div class="alert alert-danger">
                <div class="d-flex justify-content-between align-items-start">
                  <div class="flex-grow-1">
                    <strong>Error Message:</strong>
                    <pre class="mt-2 mb-0 small">{{ webhook.error_message }}</pre>
                  </div>
                  <button 
                    @click="copyToClipboard(webhook.error_message)" 
                    class="btn btn-outline-danger btn-sm ms-2"
                    title="Copy Error Message"
                  >
                    <i class="fas fa-copy"></i>
                  </button>
                </div>
              </div>
            </div>

            <!-- Troubleshooting Information -->
            <div v-if="details?.troubleshooting" class="mb-4">
              <h6 class="text-muted mb-3">Troubleshooting Information</h6>
              <div class="row">
                <div class="col-md-6">
                  <div class="list-group list-group-flush">
                    <div class="list-group-item d-flex justify-content-between align-items-center">
                      <span>Recent Event</span>
                      <span :class="details.troubleshooting.is_recent ? 'text-success' : 'text-muted'">
                        <i :class="details.troubleshooting.is_recent ? 'fas fa-check' : 'fas fa-times'"></i>
                        {{ details.troubleshooting.is_recent ? 'Yes' : 'No' }}
                      </span>
                    </div>
                    <div class="list-group-item d-flex justify-content-between align-items-center">
                      <span>Slow Processing</span>
                      <span :class="details.troubleshooting.is_slow ? 'text-warning' : 'text-success'">
                        <i :class="details.troubleshooting.is_slow ? 'fas fa-exclamation-triangle' : 'fas fa-check'"></i>
                        {{ details.troubleshooting.is_slow ? 'Yes' : 'No' }}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="list-group list-group-flush">
                    <div class="list-group-item d-flex justify-content-between align-items-center">
                      <span>Timeout Error</span>
                      <span :class="details.troubleshooting.is_timeout ? 'text-danger' : 'text-success'">
                        <i :class="details.troubleshooting.is_timeout ? 'fas fa-exclamation-triangle' : 'fas fa-check'"></i>
                        {{ details.troubleshooting.is_timeout ? 'Yes' : 'No' }}
                      </span>
                    </div>
                    <div class="list-group-item d-flex justify-content-between align-items-center">
                      <span>Signature Error</span>
                      <span :class="details.troubleshooting.is_signature_error ? 'text-danger' : 'text-success'">
                        <i :class="details.troubleshooting.is_signature_error ? 'fas fa-exclamation-triangle' : 'fas fa-check'"></i>
                        {{ details.troubleshooting.is_signature_error ? 'Yes' : 'No' }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Recommendations -->
              <div v-if="getRecommendations().length > 0" class="mt-3">
                <h6 class="text-muted mb-2">Recommendations</h6>
                <div class="alert alert-info">
                  <ul class="mb-0">
                    <li v-for="recommendation in getRecommendations()" :key="recommendation">
                      {{ recommendation }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Raw Data -->
            <div class="mb-4">
              <h6 class="text-muted mb-3">Raw Data</h6>
              <div class="accordion">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button 
                      class="accordion-button collapsed" 
                      type="button" 
                      @click="showRawData = !showRawData"
                    >
                      <i class="fas fa-code me-2"></i>
                      View Raw JSON Data
                    </button>
                  </h2>
                  <div v-if="showRawData" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                      <div class="d-flex justify-content-end mb-2">
                        <button 
                          @click="copyToClipboard(JSON.stringify(details || webhook, null, 2))" 
                          class="btn btn-outline-secondary btn-sm"
                        >
                          <i class="fas fa-copy me-1"></i>
                          Copy JSON
                        </button>
                      </div>
                      <pre class="bg-light p-3 rounded small">{{ JSON.stringify(details || webhook, null, 2) }}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" @click="$emit('close')">
            <i class="fas fa-times me-1"></i>
            Close
          </button>
          <button 
            v-if="webhook.status === 'failed'" 
            type="button" 
            class="btn btn-outline-danger"
            @click="copyToClipboard(webhook.error_message)"
          >
            <i class="fas fa-copy me-1"></i>
            Copy Error
          </button>
          <button 
            type="button" 
            class="btn btn-admin"
            @click="loadDetails"
            :disabled="loadingDetails"
          >
            <i class="fas fa-sync-alt me-1" :class="{ 'fa-spin': loadingDetails }"></i>
            Refresh Details
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { getUrl } from '../../network/url'
import { getAccessToken } from '../../services/helper'

export default {
  name: 'WebhookDetailModal',
  props: {
    webhook: {
      type: Object,
      required: true
    }
  },
  emits: ['close'],
  setup(props) {
    const details = ref(null)
    const loadingDetails = ref(false)
    const showRawData = ref(false)

    const loadDetails = async () => {
      loadingDetails.value = true
      const token = getAccessToken()
      const headers = { Authorization: `Bearer ${token}` }
      
      try {
        const response = await axios.get(
          getUrl(`auth/admin/webhook-logs/${props.webhook.id}/`),
          { headers }
        )
        details.value = response.data
      } catch (error) {
        // Use the basic webhook data if detailed fetch fails
        details.value = props.webhook
      } finally {
        loadingDetails.value = false
      }
    }

    const getStatusAlertClass = (status) => {
      const classes = {
        success: 'alert-success',
        failed: 'alert-danger',
        pending: 'alert-warning'
      }
      return classes[status] || 'alert-secondary'
    }

    const getStatusBadgeClass = (status) => {
      const classes = {
        success: 'bg-success',
        failed: 'bg-danger',
        pending: 'bg-warning'
      }
      return classes[status] || 'bg-secondary'
    }

    const formatDateTime = (dateString) => {
      const date = new Date(dateString)
      return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }

    const formatBytes = (bytes) => {
      if (bytes === 0) return '0 Bytes'
      const k = 1024
      const sizes = ['Bytes', 'KB', 'MB', 'GB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    }

    const copyToClipboard = async (text) => {
      try {
        await navigator.clipboard.writeText(text)
        // Could add a toast notification here
      } catch (err) {
      }
    }

    const getRecommendations = () => {
      if (!details.value?.troubleshooting) return []
      
      const recommendations = []
      const t = details.value.troubleshooting
      
      if (t.is_timeout) {
        recommendations.push('Check network connectivity and consider increasing timeout values')
      }
      
      if (t.is_signature_error) {
        recommendations.push('Verify webhook signature configuration and endpoint secret')
      }
      
      if (t.is_slow) {
        recommendations.push('Optimize webhook processing logic to reduce response time')
      }
      
      if (t.retry_recommended) {
        recommendations.push('Consider implementing automatic retry mechanism for timeout failures')
      }
      
      if (props.webhook.status === 'failed' && !t.is_signature_error && !t.is_timeout) {
        recommendations.push('Check application logs for detailed error information')
      }
      
      return recommendations
    }

    onMounted(() => {
      loadDetails()
    })

    return {
      details,
      loadingDetails,
      showRawData,
      loadDetails,
      getStatusAlertClass,
      getStatusBadgeClass,
      formatDateTime,
      formatBytes,
      copyToClipboard,
      getRecommendations
    }
  }
}
</script>

<style scoped>
.modal {
  z-index: 1055;
}

.accordion-button {
  background-color: #f8f9fa;
}

.accordion-button:not(.collapsed) {
  background-color: #e9ecef;
}

pre {
  max-height: 300px;
  overflow-y: auto;
}

.list-group-item {
  border: none;
  padding: 0.5rem 0;
}
</style>