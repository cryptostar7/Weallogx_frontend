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
          <div class="row">
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
      newUsersMonth: 0
    })
    const recentUsers = ref([])

    const loadDashboardData = async () => {
      const token = localStorage.getItem('access_token')
      const headers = { Authorization: `Bearer ${token}` }
      
      try {
        // Load real-time admin dashboard stats
        const statsResponse = await axios.get(getUrl('admin/dashboard/stats'), { headers })
        stats.value = statsResponse.data
        
        // Load recent users (last 5 users)
        const usersResponse = await axios.get(`${getUrl('user')}?ordering=-created_at&limit=5`, { headers })
        recentUsers.value = usersResponse.data.results || usersResponse.data

      } catch (error) {
        console.error('Failed to load dashboard data:', error)
        console.error('Error details:', error.response?.data)
        console.error('Status:', error.response?.status)
        
        // Fallback to mock data if API fails
        console.log('Using fallback mock data for admin dashboard')
        stats.value = {
          totalUsers: 1,
          newUsersWeek: 0,
          newUsersMonth: 0
        }
        
        // Still try to load recent users
        try {
          const usersResponse = await axios.get(`${getUrl('user')}?ordering=-created_at&limit=5`, { headers })
          recentUsers.value = usersResponse.data.results || usersResponse.data
        } catch (userError) {
          console.error('Failed to load recent users:', userError)
        }
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

    onMounted(() => {
      loadDashboardData()
    })

    return {
      stats,
      recentUsers,
      getUserRoleBadgeClass,
      getUserRoleText,
      formatDate
    }
  }
}
</script>

<style scoped>
@import '../admin.css';
</style>