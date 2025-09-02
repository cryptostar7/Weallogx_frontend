<template>
  <AdminLayout>
          <!-- Page Title -->
          <div class="d-flex justify-content-between align-items-center page-title">
            <h2>Dashboard</h2>
            <div>
              <router-link to="/admin/users/create" class="btn btn-admin">
                <i class="fas fa-plus me-1"></i> Add User
              </router-link>
            </div>
          </div>

          <!-- Stats Cards -->
          <div v-if="loading" class="row">
            <div class="col-12 text-center py-5">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <p class="mt-3 text-muted">Loading dashboard statistics...</p>
            </div>
          </div>
          
          <div v-else class="row">
            <div class="col-md-3">
              <div class="stats-card">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 class="text-muted mb-1">Total Users</h6>
                    <div class="stats-number">{{ stats.totalUsers }}</div>
                  </div>
                  <div class="text-primary">
                    <i class="fas fa-users fa-2x"></i>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="col-md-3">
              <div class="stats-card">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 class="text-muted mb-1">New Users This Week</h6>
                    <div class="stats-number">{{ stats.newUsersWeek }}</div>
                  </div>
                  <div class="text-success">
                    <i class="fas fa-calendar-week fa-2x"></i>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="col-md-3">
              <div class="stats-card">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 class="text-muted mb-1">New Users This Month</h6>
                    <div class="stats-number">{{ stats.newUsersMonth }}</div>
                  </div>
                  <div class="text-info">
                    <i class="fas fa-calendar-alt fa-2x"></i>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="col-md-3">
              <div class="stats-card">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 class="text-muted mb-1">Monthly Revenue</h6>
                    <div class="stats-number">${{ formatRevenue(stats.monthlyRevenue) }}</div>
                  </div>
                  <div class="text-info">
                    <i class="fas fa-dollar-sign fa-2x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Subscription Breakdown -->
          <div class="row mt-3" v-if="stats.subscriptionBreakdown">
            <div class="col-12">
              <div class="stats-card">
                <h6 class="text-muted mb-3">Subscription Breakdown</h6>
                <div class="row">
                  <div class="col-md-3 text-center">
                    <div class="mb-1">
                      <i class="fas fa-clock text-warning fa-2x"></i>
                    </div>
                    <div class="stats-number">{{ stats.subscriptionBreakdown.free_trial || 0 }}</div>
                    <small class="text-muted">Free Trial</small>
                  </div>
                  <div class="col-md-3 text-center">
                    <div class="mb-1">
                      <i class="fas fa-calendar-alt text-info fa-2x"></i>
                    </div>
                    <div class="stats-number">{{ stats.subscriptionBreakdown.monthly || 0 }}</div>
                    <small class="text-muted">Monthly</small>
                  </div>
                  <div class="col-md-3 text-center">
                    <div class="mb-1">
                      <i class="fas fa-calendar text-success fa-2x"></i>
                    </div>
                    <div class="stats-number">{{ stats.subscriptionBreakdown.yearly || 0 }}</div>
                    <small class="text-muted">Yearly</small>
                  </div>
                  <div class="col-md-3 text-center">
                    <div class="mb-1">
                      <i class="fas fa-times-circle text-danger fa-2x"></i>
                    </div>
                    <div class="stats-number">{{ stats.subscriptionBreakdown.expired || 0 }}</div>
                    <small class="text-muted">Expired</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- System Health Section -->
          <div class="row mt-4">
            <div class="col-12">
              <div class="stats-card">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h6 class="text-muted mb-0">System Health Monitor</h6>
                  <button @click="refreshSystemHealth" class="btn btn-sm btn-outline-primary">
                    <i class="fas fa-sync-alt me-1"></i>Refresh
                  </button>
                </div>
                
                <div v-if="systemHealth.loading" class="text-center py-3">
                  <div class="spinner-border spinner-border-sm text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <span class="ms-2 text-muted">Checking system health...</span>
                </div>
                
                <div v-else class="row">
                  <!-- Overall Status -->
                  <div class="col-md-3 mb-3">
                    <div class="health-metric text-center">
                      <div class="mb-2">
                        <i :class="getHealthIcon(systemHealth.data?.overall?.status)" class="fa-2x"></i>
                      </div>
                      <div class="health-number">{{ systemHealth.data?.overall?.status || 'Unknown' }}</div>
                      <small class="text-muted">Overall Status</small>
                    </div>
                  </div>
                  
                  <!-- Memory Usage -->
                  <div class="col-md-3 mb-3">
                    <div class="health-metric text-center">
                      <div class="mb-2">
                        <i :class="getMemoryIcon(systemHealth.data?.memory?.status)" class="fa-2x"></i>
                      </div>
                      <div class="health-number">
                        {{ systemHealth.data?.memory?.process_mb || '0' }} MB
                      </div>
                      <div class="text-muted small">
                        of {{ systemHealth.data?.memory?.total_mb || '?' }} MB
                      </div>
                      <div class="progress mt-2" style="height: 5px;">
                        <div class="progress-bar" 
                             :class="getMemoryProgressClass(systemHealth.data?.memory?.status)"
                             :style="`width: ${systemHealth.data?.memory?.percent_used || 0}%`">
                        </div>
                      </div>
                      <small class="text-muted">
                        {{ systemHealth.data?.memory?.type || 'Memory' }}
                        <span v-if="systemHealth.data?.memory?.container" class="badge bg-info ms-1">Docker</span>
                      </small>
                    </div>
                  </div>
                  
                  <!-- Background Tasks -->
                  <div class="col-md-3 mb-3">
                    <div class="health-metric text-center">
                      <div class="mb-2">
                        <i :class="getCeleryIcon(systemHealth.data?.celery?.status)" class="fa-2x"></i>
                      </div>
                      <div class="health-number">
                        <span>{{ systemHealth.data?.celery?.active_tasks || '0' }}</span>
                        <small class="text-muted">/ {{ systemHealth.data?.celery?.scheduled_tasks || '0' }}</small>
                      </div>
                      <small class="text-muted">Active / Scheduled</small>
                      <div v-if="systemHealth.data?.celery?.worker_status" class="mt-1">
                        <span class="badge" :class="systemHealth.data?.celery?.worker_status === 'online' ? 'bg-success' : 'bg-secondary'">
                          Worker: {{ systemHealth.data?.celery?.worker_status }}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Webhook Status -->
                  <div class="col-md-3 mb-3">
                    <div class="health-metric text-center webhook-clickable" @click="viewWebhookLogs">
                      <div class="mb-2">
                        <i :class="getWebhookIcon(systemHealth.data?.webhooks?.status)" class="fa-2x"></i>
                      </div>
                      <div class="health-number">
                        <div class="d-flex justify-content-center align-items-center">
                          <span class="text-success me-2">{{ systemHealth.data?.webhooks?.successful || '0' }}</span>
                          <span class="text-muted">/</span>
                          <span class="text-danger ms-2">{{ systemHealth.data?.webhooks?.failed || '0' }}</span>
                        </div>
                        <div class="small text-muted">
                          {{ systemHealth.data?.webhooks?.attempted || '0' }} total
                        </div>
                      </div>
                      <small class="text-muted">
                        Success / Failed (24h)
                        <div v-if="systemHealth.data?.webhooks?.success_rate !== undefined" class="mt-1">
                          <span class="badge" :class="getSuccessRateBadgeClass(systemHealth.data?.webhooks?.success_rate)">
                            {{ systemHealth.data?.webhooks?.success_rate }}%
                          </span>
                        </div>
                        <div class="mt-1">
                          <i class="fas fa-external-link-alt text-primary"></i>
                          <span class="small text-primary">Click to view logs</span>
                        </div>
                      </small>
                    </div>
                  </div>
                </div>
                
                <!-- Architecture Status -->
                <div v-if="systemHealth.data?.architecture" class="row mt-3 pt-3 border-top">
                  <div class="col-12">
                    <div class="d-flex justify-content-between align-items-center">
                      <span class="text-muted">
                        <i class="fas fa-rocket text-success me-2"></i>
                        Event-Driven Architecture (96% performance improvement)
                      </span>
                      <span class="badge bg-success">Optimized</span>
                    </div>
                  </div>
                </div>
                
                <!-- Last Updated -->
                <div v-if="systemHealth.lastUpdated" class="row mt-2">
                  <div class="col-12 text-end">
                    <small class="text-muted">
                      Last updated: {{ formatDateTime(systemHealth.lastUpdated) }}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Recent Users -->
          <div class="row mt-4">
            <div class="col-12">
              <div class="table-admin">
                <div class="card-header bg-light">
                  <h5 class="mb-0">Recent Users</h5>
                </div>
                <div class="card-body p-0">
                  <div class="table-responsive">
                    <table class="table table-hover mb-0">
                      <thead class="table-light">
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Role</th>
                          <th>Plan</th>
                          <th>Status</th>
                          <th>Joined</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="user in recentUsers" :key="user.id">
                          <td>
                            <strong>{{ user.first_name }} {{ user.last_name }}</strong>
                          </td>
                          <td>{{ user.email }}</td>
                          <td>
                            <span class="badge" :class="getUserRoleBadgeClass(user)">
                              {{ getUserRoleText(user) }}
                            </span>
                          </td>
                          <td>
                            <span class="badge bg-info">
                              {{ user.plan_type || 'Free Trial' }}
                            </span>
                          </td>
                          <td>
                            <span class="badge" :class="user.is_active ? 'bg-success' : 'bg-danger'">
                              {{ user.is_active ? 'Active' : 'Inactive' }}
                            </span>
                          </td>
                          <td>{{ formatDate(user.created_at) }}</td>
                          <td>
                            <div class="btn-group" role="group">
                              <router-link 
                                :to="`/admin/users/${user.id}`" 
                                class="btn btn-sm btn-outline-primary"
                                title="View Details">
                                <i class="fas fa-eye me-1"></i>View
                              </router-link>
                              <button 
                                @click="loginAsUser(user)"
                                class="btn btn-sm btn-outline-success"
                                title="Login as this user">
                                <i class="fas fa-sign-in-alt me-1"></i>Login As
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr v-if="recentUsers.length === 0">
                          <td colspan="7" class="text-center py-4 text-muted">
                            No users found
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
  </AdminLayout>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import AdminLayout from '@/components/admin/AdminLayout.vue'
import { getUrl } from '../../../network/url'
import { getAccessToken, authHeader } from '../../../services/helper'
import { addAdminBreadcrumb } from '../../../services/sentry'

export default {
  name: 'AdminDashboard',
  components: {
    AdminLayout
  },
  setup() {
    const router = useRouter()
    
    const stats = ref({
      totalUsers: 0,
      newUsersWeek: 0,
      newUsersMonth: 0,
      activeSubscriptions: 0,
      trialUsers: 0,
      monthlyRevenue: 0,
      growthRate: 0,
      subscriptionBreakdown: null
    })
    const recentUsers = ref([])
    const loading = ref(true)
    const error = ref(null)
    
    // System Health State
    const systemHealth = ref({
      data: null,
      loading: false,
      lastUpdated: null
    })

    const loadDashboardData = async () => {
      loading.value = true
      error.value = null
      const token = getAccessToken()
      const headers = { Authorization: `Bearer ${token}` }
      
      try {
        // Load real-time admin dashboard stats
        const statsResponse = await axios.get(getUrl('admin/dashboard/stats'), { headers })
        stats.value = statsResponse.data
        
        // Load recent users (last 5 users)
        const usersResponse = await axios.get(`${getUrl('user')}?ordering=-created_at&limit=5`, { headers })
        recentUsers.value = usersResponse.data.results || usersResponse.data

      } catch (err) {
        console.error('Failed to load dashboard data:', err)
        error.value = err.response?.data?.message || 'Failed to load dashboard statistics'
        
        // Still try to load recent users even if stats fail
        try {
          const usersResponse = await axios.get(`${getUrl('user')}?ordering=-created_at&limit=5`, { headers })
          recentUsers.value = usersResponse.data.results || usersResponse.data
        } catch (userError) {
          console.error('Failed to load recent users:', userError)
        }
      } finally {
        loading.value = false
      }
    }

    // System Health Functions
    const loadSystemHealth = async () => {
      systemHealth.value.loading = true
      const token = getAccessToken()
      const headers = { Authorization: `Bearer ${token}` }
      
      try {
        const response = await axios.get(getUrl('admin/system/health'), { headers })
        systemHealth.value.data = response.data
        systemHealth.value.lastUpdated = new Date().toISOString()
      } catch (err) {
        console.error('Failed to load system health:', err)
        systemHealth.value.data = { error: 'Failed to load system health data' }
      } finally {
        systemHealth.value.loading = false
      }
    }

    const refreshSystemHealth = () => {
      addAdminBreadcrumb('System health refreshed', {})
      loadSystemHealth()
    }
    
    const getHealthIcon = (status) => {
      const icons = {
        healthy: 'fas fa-check-circle text-success',
        warning: 'fas fa-exclamation-triangle text-warning', 
        critical: 'fas fa-times-circle text-danger',
        degraded: 'fas fa-minus-circle text-info',
        error: 'fas fa-bug text-danger'
      }
      return icons[status] || 'fas fa-question-circle text-muted'
    }
    
    const getMemoryIcon = (status) => {
      const icons = {
        stable: 'fas fa-memory text-success',
        warning: 'fas fa-memory text-warning',
        critical: 'fas fa-memory text-danger'
      }
      return icons[status] || 'fas fa-memory text-muted'
    }
    
    const getCeleryIcon = (status) => {
      const icons = {
        healthy: 'fas fa-cogs text-success',
        warning: 'fas fa-cogs text-warning',
        idle: 'fas fa-pause-circle text-info',
        busy: 'fas fa-cogs text-warning',
        unknown: 'fas fa-question-circle text-muted'
      }
      return icons[status] || 'fas fa-cogs text-muted'
    }
    
    const getWebhookIcon = (status) => {
      const icons = {
        active: 'fas fa-satellite-dish text-success',
        quiet: 'fas fa-satellite-dish text-info'
      }
      return icons[status] || 'fas fa-satellite-dish text-muted'
    }
    
    const formatDateTime = (dateString) => {
      return new Date(dateString).toLocaleString()
    }
    
    const getMemoryProgressClass = (status) => {
      const classes = {
        stable: 'bg-success',
        warning: 'bg-warning',
        critical: 'bg-danger'
      }
      return classes[status] || 'bg-secondary'
    }
    
    const getSuccessRateBadgeClass = (successRate) => {
      if (successRate >= 95) return 'bg-success'
      if (successRate >= 80) return 'bg-warning'
      return 'bg-danger'
    }
    
    const viewWebhookLogs = () => {
      addAdminBreadcrumb('webhook_logs_clicked', { 
        from: 'dashboard',
        failed_count: systemHealth.value.data?.webhooks?.failed || 0
      })
      router.push('/admin/webhook-logs')
    }


    const getUserRoleBadgeClass = (user) => {
      if (user.is_superuser) return 'bg-danger'
      if (user.is_staff) return 'bg-warning'
      return 'bg-secondary'
    }

    const getUserRoleText = (user) => {
      if (user.is_superuser) return 'Superuser'
      if (user.is_staff) return 'Staff'
      return user.role_type || 'User'
    }

    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString()
    }
    
    const formatRevenue = (amount) => {
      if (!amount) return '0.00'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(amount)
    }

    const loginAsUser = async (user) => {
      if (!confirm(`Are you sure you want to login as "${user.first_name} ${user.last_name}"? This will open a new tab.`)) {
        return
      }
      
      try {
        addAdminBreadcrumb('Login as user attempted', { target_user_id: user.id, target_user_email: user.email })
        
        // Generate a login token for the target user
        const response = await axios.post(`${getUrl('user')}${user.id}/generate-login-token/`, {}, authHeader())
        const token = response.data.token
        
        addAdminBreadcrumb('Login as user successful', { target_user_id: user.id, target_user_email: user.email })
        
        // Open main app in new tab with the login token
        const frontendUrl = window.location.origin
        window.open(`${frontendUrl}/user-login-with-token?token=${token}`, '_blank')
      } catch (error) {
        console.error('Failed to login as user:', error)
        alert('Failed to login as user. Please try again.')
      }
    }

    onMounted(() => {
      loadDashboardData()
      loadSystemHealth()
    })

    return {
      stats,
      recentUsers,
      loading,
      error,
      systemHealth,
      getUserRoleBadgeClass,
      getUserRoleText,
      formatDate,
      formatRevenue,
      formatDateTime,
      loginAsUser,
      refreshSystemHealth,
      getHealthIcon,
      getMemoryIcon,
      getCeleryIcon,
      getWebhookIcon,
      getMemoryProgressClass,
      getSuccessRateBadgeClass,
      viewWebhookLogs
    }
  }
}
</script>

<style scoped>
@import '../admin.css';

.webhook-clickable {
  cursor: pointer;
  transition: all 0.2s ease;
}

.webhook-clickable:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  background-color: #f8f9fa;
}
</style>