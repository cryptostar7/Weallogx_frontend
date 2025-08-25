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
            <div class="col-md-4">
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
            
            <div class="col-md-4">
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
            
            <div class="col-md-4">
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
          </div>
          
          <!-- Additional Stats Row -->
          <div class="row mt-3">
            <div class="col-md-3">
              <div class="stats-card">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 class="text-muted mb-1">Active Subscriptions</h6>
                    <div class="stats-number">{{ stats.activeSubscriptions || 0 }}</div>
                  </div>
                  <div class="text-success">
                    <i class="fas fa-credit-card fa-2x"></i>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="col-md-3">
              <div class="stats-card">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 class="text-muted mb-1">Trial Users</h6>
                    <div class="stats-number">{{ stats.trialUsers || 0 }}</div>
                  </div>
                  <div class="text-warning">
                    <i class="fas fa-hourglass-half fa-2x"></i>
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
            
            <div class="col-md-3">
              <div class="stats-card">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 class="text-muted mb-1">Growth Rate</h6>
                    <div class="stats-number">
                      <span :class="stats.growthRate >= 0 ? 'text-success' : 'text-danger'">
                        {{ stats.growthRate >= 0 ? '+' : '' }}{{ stats.growthRate || 0 }}%
                      </span>
                    </div>
                  </div>
                  <div :class="stats.growthRate >= 0 ? 'text-success' : 'text-danger'">
                    <i :class="stats.growthRate >= 0 ? 'fas fa-arrow-up' : 'fas fa-arrow-down'" class="fa-2x"></i>
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
                            <router-link 
                              :to="`/admin/users/${user.id}`" 
                              class="btn btn-sm btn-outline-primary me-1">
                              <i class="fas fa-eye"></i>
                            </router-link>
                            <router-link 
                              :to="`/admin/users/${user.id}/edit`" 
                              class="btn btn-sm btn-outline-secondary">
                              <i class="fas fa-edit"></i>
                            </router-link>
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
import AdminLayout from '@/components/admin/AdminLayout.vue'
import { getUrl } from '../../../network/url'

export default {
  name: 'AdminDashboard',
  components: {
    AdminLayout
  },
  setup() {
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

    const loadDashboardData = async () => {
      loading.value = true
      error.value = null
      const token = localStorage.getItem('access_token')
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

    onMounted(() => {
      loadDashboardData()
    })

    return {
      stats,
      recentUsers,
      loading,
      error,
      getUserRoleBadgeClass,
      getUserRoleText,
      formatDate,
      formatRevenue
    }
  }
}
</script>

<style scoped>
@import '../admin.css';
</style>