<template>
  <AdminLayout>
    <!-- Page Title -->
    <div class="d-flex justify-content-between align-items-center page-title">
      <h2>Webhook Logs</h2>
      <div>
        <button @click="refreshLogs" class="btn btn-admin me-2" :disabled="loading">
          <i class="fas fa-sync-alt me-1" :class="{ 'fa-spin': loading }"></i>
          Refresh
        </button>
        <button @click="showFilters = !showFilters" class="btn btn-outline-secondary">
          <i class="fas fa-filter me-1"></i>
          Filters
        </button>
      </div>
    </div>

    <!-- Summary Cards -->
    <div class="row mb-4">
      <div class="col-md-3">
        <div class="stats-card">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <h6 class="text-muted mb-1">Total Webhooks</h6>
              <div class="stats-number">{{ summary.total }}</div>
            </div>
            <div class="text-primary">
              <i class="fas fa-satellite-dish fa-2x"></i>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-md-3">
        <div class="stats-card">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <h6 class="text-muted mb-1">Successful</h6>
              <div class="stats-number text-success">{{ summary.success }}</div>
            </div>
            <div class="text-success">
              <i class="fas fa-check-circle fa-2x"></i>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-md-3">
        <div class="stats-card">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <h6 class="text-muted mb-1">Failed</h6>
              <div class="stats-number text-danger">{{ summary.failed }}</div>
            </div>
            <div class="text-danger">
              <i class="fas fa-times-circle fa-2x"></i>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-md-3">
        <div class="stats-card">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <h6 class="text-muted mb-1">Success Rate</h6>
              <div class="stats-number" :class="getSuccessRateClass(summary.success_rate)">
                {{ summary.success_rate }}%
              </div>
            </div>
            <div :class="getSuccessRateClass(summary.success_rate)">
              <i class="fas fa-chart-line fa-2x"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Filters Panel -->
    <div v-if="showFilters" class="card mb-4">
      <div class="card-body">
        <div class="row">
          <div class="col-md-3">
            <label class="form-label">Status</label>
            <select v-model="filters.status" class="form-select form-select-sm">
              <option value="">All Status</option>
              <option value="success">Success</option>
              <option value="failed">Failed</option>
              <option value="pending">Pending</option>
            </select>
          </div>
          
          <div class="col-md-3">
            <label class="form-label">Time Range</label>
            <select v-model="filters.hours" class="form-select form-select-sm">
              <option value="1">Last Hour</option>
              <option value="6">Last 6 Hours</option>
              <option value="24">Last 24 Hours</option>
              <option value="72">Last 3 Days</option>
              <option value="168">Last Week</option>
            </select>
          </div>
          
          <div class="col-md-3">
            <label class="form-label">Event Type</label>
            <input 
              v-model="filters.event_type" 
              type="text" 
              class="form-control form-control-sm"
              placeholder="e.g., customer.subscription"
            />
          </div>
          
          <div class="col-md-3">
            <label class="form-label">Search</label>
            <input 
              v-model="filters.search" 
              type="text" 
              class="form-control form-control-sm"
              placeholder="Event ID or error message"
            />
          </div>
        </div>
        
        <div class="row mt-3">
          <div class="col-12">
            <button @click="applyFilters" class="btn btn-admin btn-sm me-2">
              <i class="fas fa-filter me-1"></i>
              Apply Filters
            </button>
            <button @click="clearFilters" class="btn btn-outline-secondary btn-sm">
              <i class="fas fa-times me-1"></i>
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="text-center py-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading webhook logs...</span>
      </div>
    </div>

    <!-- Webhook Logs Table -->
    <div v-else class="table-admin">
      <div class="card-header bg-light d-flex justify-content-between align-items-center">
        <h5 class="mb-0">Webhook Logs (Last {{ summary.time_range_hours || 24 }} hours)</h5>
        <small class="text-muted">
          Showing {{ webhooks.length }} of {{ totalCount }} records
        </small>
      </div>
      
      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table table-hover mb-0">
            <thead class="table-light">
              <tr>
                <th @click="setOrdering('received_at')" class="sortable">
                  Received At
                  <i v-if="ordering === '-received_at'" class="fas fa-sort-down ms-1"></i>
                  <i v-else-if="ordering === 'received_at'" class="fas fa-sort-up ms-1"></i>
                  <i v-else class="fas fa-sort ms-1 text-muted"></i>
                </th>
                <th>Event Type</th>
                <th @click="setOrdering('status')" class="sortable">
                  Status
                  <i v-if="ordering === '-status'" class="fas fa-sort-down ms-1"></i>
                  <i v-else-if="ordering === 'status'" class="fas fa-sort-up ms-1"></i>
                  <i v-else class="fas fa-sort ms-1 text-muted"></i>
                </th>
                <th @click="setOrdering('processing_time_ms')" class="sortable">
                  Processing Time
                  <i v-if="ordering === '-processing_time_ms'" class="fas fa-sort-down ms-1"></i>
                  <i v-else-if="ordering === 'processing_time_ms'" class="fas fa-sort-up ms-1"></i>
                  <i v-else class="fas fa-sort ms-1 text-muted"></i>
                </th>
                <th>Event ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="webhook in webhooks" :key="webhook.id">
                <td>
                  <div class="small">
                    {{ formatDateTime(webhook.received_at) }}
                  </div>
                </td>
                <td>
                  <code class="small">{{ webhook.event_type }}</code>
                </td>
                <td>
                  <span class="badge" :class="getStatusBadgeClass(webhook.status)">
                    {{ webhook.status }}
                  </span>
                  <div v-if="webhook.error_message" class="small text-danger mt-1">
                    {{ webhook.error_message.substring(0, 50) }}
                    <span v-if="webhook.error_message.length > 50">...</span>
                  </div>
                </td>
                <td>
                  <span v-if="webhook.processing_time_ms">
                    {{ webhook.processing_time_ms }}ms
                    <span v-if="webhook.processing_time_ms > 5000" class="text-warning">
                      <i class="fas fa-exclamation-triangle" title="Slow processing"></i>
                    </span>
                  </span>
                  <span v-else class="text-muted">-</span>
                </td>
                <td>
                  <code class="small">{{ webhook.event_id }}</code>
                </td>
                <td>
                  <button 
                    @click="viewDetails(webhook)" 
                    class="btn btn-admin btn-sm me-2"
                    title="View Details"
                  >
                    <i class="fas fa-eye me-1"></i>
                    View
                  </button>
                  <button 
                    v-if="webhook.status === 'failed'" 
                    @click="copyErrorMessage(webhook.error_message)"
                    class="btn btn-outline-secondary btn-sm"
                    title="Copy Error Message"
                  >
                    <i class="fas fa-copy me-1"></i>
                    Copy
                  </button>
                </td>
              </tr>
              
              <tr v-if="webhooks.length === 0">
                <td colspan="6" class="text-center text-muted py-4">
                  No webhook logs found for the selected criteria.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="row mt-4">
      <div class="col-12">
        <nav>
          <ul class="pagination justify-content-center">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <button class="page-link" @click="goToPage(currentPage - 1)">Previous</button>
            </li>
            
            <li 
              v-for="page in visiblePages" 
              :key="page"
              class="page-item" 
              :class="{ active: page === currentPage }"
            >
              <button class="page-link" @click="goToPage(page)">{{ page }}</button>
            </li>
            
            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
              <button class="page-link" @click="goToPage(currentPage + 1)">Next</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- Webhook Detail Modal -->
    <WebhookDetailModal 
      v-if="selectedWebhook"
      :webhook="selectedWebhook"
      @close="selectedWebhook = null"
    />
  </AdminLayout>
</template>

<script>
import { ref, reactive, computed, onMounted } from 'vue'
import axios from 'axios'
import AdminLayout from '@/components/admin/AdminLayout.vue'
import WebhookDetailModal from '@/components/admin/WebhookDetailModal.vue'
import { getUrl } from '../../../network/url'
import { getAccessToken } from '../../../services/helper'
import { addAdminBreadcrumb } from '../../../services/sentry'

export default {
  name: 'WebhookLogs',
  components: {
    AdminLayout,
    WebhookDetailModal
  },
  setup() {
    const webhooks = ref([])
    const summary = ref({
      total: 0,
      success: 0,
      failed: 0,
      pending: 0,
      success_rate: 0,
      time_range_hours: 24
    })
    const loading = ref(true)
    const showFilters = ref(false)
    const selectedWebhook = ref(null)
    const currentPage = ref(1)
    const totalPages = ref(1)
    const totalCount = ref(0)
    const ordering = ref('-received_at')
    
    const filters = reactive({
      status: '',
      hours: '24',
      event_type: '',
      search: ''
    })

    const loadWebhookLogs = async (page = 1) => {
      loading.value = true
      const token = getAccessToken()
      const headers = { Authorization: `Bearer ${token}` }
      
      try {
        const params = {
          page,
          page_size: 20,
          ordering: ordering.value,
          ...filters
        }
        
        const response = await axios.get(getUrl('auth/admin/webhook-logs/'), { 
          headers, 
          params 
        })
        
        webhooks.value = response.data.results
        summary.value = response.data.summary
        totalCount.value = response.data.count
        totalPages.value = Math.ceil(response.data.count / 20)
        currentPage.value = page
        
        addAdminBreadcrumb('webhook_logs_loaded', { 
          total: summary.value.total,
          failed: summary.value.failed 
        })
        
      } catch (error) {
        // Handle error appropriately
      } finally {
        loading.value = false
      }
    }

    const refreshLogs = () => {
      loadWebhookLogs(currentPage.value)
    }

    const applyFilters = () => {
      currentPage.value = 1
      loadWebhookLogs(1)
    }

    const clearFilters = () => {
      Object.keys(filters).forEach(key => {
        if (key === 'hours') {
          filters[key] = '24'
        } else {
          filters[key] = ''
        }
      })
      currentPage.value = 1
      loadWebhookLogs(1)
    }

    const setOrdering = (field) => {
      if (ordering.value === field) {
        ordering.value = `-${field}`
      } else if (ordering.value === `-${field}`) {
        ordering.value = field
      } else {
        ordering.value = `-${field}`
      }
      loadWebhookLogs(currentPage.value)
    }

    const goToPage = (page) => {
      if (page >= 1 && page <= totalPages.value) {
        loadWebhookLogs(page)
      }
    }

    const viewDetails = (webhook) => {
      selectedWebhook.value = webhook
      addAdminBreadcrumb('webhook_detail_viewed', { 
        event_type: webhook.event_type,
        status: webhook.status 
      })
    }

    const copyErrorMessage = async (errorMessage) => {
      try {
        await navigator.clipboard.writeText(errorMessage)
        // Could add a toast notification here
      } catch (err) {
      }
    }

    const visiblePages = computed(() => {
      const pages = []
      const start = Math.max(1, currentPage.value - 2)
      const end = Math.min(totalPages.value, currentPage.value + 2)
      
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }
      
      return pages
    })

    const getStatusBadgeClass = (status) => {
      const classes = {
        success: 'bg-success',
        failed: 'bg-danger', 
        pending: 'bg-warning'
      }
      return classes[status] || 'bg-secondary'
    }

    const getSuccessRateClass = (rate) => {
      if (rate >= 95) return 'text-success'
      if (rate >= 80) return 'text-warning'
      return 'text-danger'
    }

    const formatDateTime = (dateString) => {
      return new Date(dateString).toLocaleString()
    }

    onMounted(() => {
      loadWebhookLogs()
    })

    return {
      webhooks,
      summary,
      loading,
      showFilters,
      selectedWebhook,
      currentPage,
      totalPages,
      totalCount,
      ordering,
      filters,
      visiblePages,
      loadWebhookLogs,
      refreshLogs,
      applyFilters,
      clearFilters,
      setOrdering,
      goToPage,
      viewDetails,
      copyErrorMessage,
      getStatusBadgeClass,
      getSuccessRateClass,
      formatDateTime
    }
  }
}
</script>

<style scoped>
@import '../admin.css';

.sortable {
  cursor: pointer;
  user-select: none;
}

.sortable:hover {
  background-color: #f8f9fa;
}

.page-link {
  cursor: pointer;
}

code {
  font-size: 0.8rem;
}
</style>