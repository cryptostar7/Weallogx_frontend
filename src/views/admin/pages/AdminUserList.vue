<template>
  <AdminLayout>
          <!-- Page Title -->
          <div class="d-flex justify-content-between align-items-center page-title">
            <h2>User Management</h2>
            <div>
              <router-link to="/admin/users/create" class="btn btn-admin">
                <i class="fas fa-plus me-1"></i> Add User
              </router-link>
            </div>
          </div>

          <!-- Search and Filters -->
          <div class="row mb-3">
            <div class="col-md-6">
              <div class="input-group">
                <span class="input-group-text">
                  <i class="fas fa-search"></i>
                </span>
                <input 
                  type="text" 
                  class="form-control" 
                  placeholder="Search users by name or email..."
                  v-model="searchQuery"
                  @input="searchUsers"
                >
              </div>
            </div>
            <div class="col-md-3">
              <select 
                class="form-select" 
                v-model="statusFilter"
                @change="filterUsers"
              >
                <option value="">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div class="col-md-3">
              <select 
                class="form-select" 
                v-model="roleFilter"
                @change="filterUsers"
              >
                <option value="">All Roles</option>
                <option value="superuser">Superuser</option>
                <option value="staff">Staff</option>
                <option value="user">User</option>
              </select>
            </div>
          </div>

          <!-- Users Table -->
          <div class="table-admin">
            <div class="card-header bg-light d-flex justify-content-between align-items-center">
              <h5 class="mb-0">All Users ({{ filteredUsers.length }})</h5>
              <div class="d-flex gap-2">
                <button 
                  @click="refreshUsers" 
                  class="btn btn-sm btn-outline-secondary"
                  :disabled="loading"
                >
                  <i class="fas fa-sync-alt" :class="{ 'fa-spin': loading }"></i>
                  Refresh
                </button>
              </div>
            </div>
            <div class="card-body p-0">
              <div class="table-responsive">
                <table class="table table-hover mb-0">
                  <thead class="table-light">
                    <tr>
                      <th>ID</th>
                      <th @click="sortBy('name')" class="sortable">
                        Name 
                        <i class="fas fa-sort" v-if="sortField !== 'name'"></i>
                        <i class="fas fa-sort-up" v-if="sortField === 'name' && sortDirection === 'asc'"></i>
                        <i class="fas fa-sort-down" v-if="sortField === 'name' && sortDirection === 'desc'"></i>
                      </th>
                      <th @click="sortBy('email')" class="sortable">
                        Email
                        <i class="fas fa-sort" v-if="sortField !== 'email'"></i>
                        <i class="fas fa-sort-up" v-if="sortField === 'email' && sortDirection === 'asc'"></i>
                        <i class="fas fa-sort-down" v-if="sortField === 'email' && sortDirection === 'desc'"></i>
                      </th>
                      <th>Role</th>
                      <th>Plan</th>
                      <th>Status</th>
                      <th @click="sortBy('created_at')" class="sortable">
                        Joined
                        <i class="fas fa-sort" v-if="sortField !== 'created_at'"></i>
                        <i class="fas fa-sort-up" v-if="sortField === 'created_at' && sortDirection === 'asc'"></i>
                        <i class="fas fa-sort-down" v-if="sortField === 'created_at' && sortDirection === 'desc'"></i>
                      </th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="user in paginatedUsers" :key="user.id">
                      <td>{{ user.id }}</td>
                      <td>
                        <strong>{{ user.first_name }} {{ user.last_name }}</strong>
                        <div v-if="user.company_name" class="text-muted small">
                          {{ user.company_name }}
                        </div>
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
                            title="View Details"
                          >
                            <i class="fas fa-eye me-1"></i>View
                          </router-link>
                          <router-link 
                            :to="`/admin/users/${user.id}/edit`" 
                            class="btn btn-sm btn-outline-secondary"
                            title="Edit User"
                          >
                            <i class="fas fa-edit me-1"></i>Edit
                          </router-link>
                          <button 
                            @click="loginAsUser(user)"
                            class="btn btn-sm btn-outline-success"
                            title="Login as this user"
                          >
                            <i class="fas fa-sign-in-alt me-1"></i>Login As
                          </button>
                          <button 
                            @click="deleteUser(user)"
                            class="btn btn-sm btn-outline-danger"
                            title="Delete User"
                            :disabled="user.is_superuser"
                          >
                            <i class="fas fa-trash me-1"></i>Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr v-if="filteredUsers.length === 0 && !loading">
                      <td colspan="8" class="text-center py-4 text-muted">
                        <i class="fas fa-users fa-2x mb-2"></i><br>
                        No users found
                      </td>
                    </tr>
                    <tr v-if="loading">
                      <td colspan="8" class="text-center py-4">
                        <i class="fas fa-spinner fa-spin me-2"></i>
                        Loading users...
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <!-- Pagination -->
            <div class="card-footer" v-if="filteredUsers.length > pageSize">
              <nav>
                <ul class="pagination justify-content-center mb-0">
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
  </AdminLayout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import AdminLayout from '@/components/admin/AdminLayout.vue'
import { authHeader, getCurrentUser } from '../../../services/helper'
import { getUrl } from '../../../network/url'
import { setSentryUser, addAdminBreadcrumb } from '../../../services/sentry'

const users = ref([])
const loading = ref(false)
const searchQuery = ref('')
const statusFilter = ref('')
const roleFilter = ref('')
const sortField = ref('created_at')
const sortDirection = ref('desc')
const currentPage = ref(1)
const pageSize = ref(20)

const loadUsers = async () => {
  loading.value = true
  try {
    console.log('🔍 Loading users...')
    console.log('🌐 Current URL:', window.location.href)
    console.log('🔑 Auth header:', authHeader())
    console.log('📡 Making request to:', getUrl('user'))
    
    // Use the getUrl helper to get the correct users endpoint
    const response = await axios.get(getUrl('user'), authHeader())
    console.log('✅ Response received:', response.status, response.data)
    console.log('📊 Response type:', typeof response.data)
    console.log('🔍 Response keys:', Object.keys(response.data || {}))
    
    users.value = response.data.results || response.data
    console.log('👥 Users set:', users.value.length, 'users')
    console.log('👤 First user:', users.value[0])
  } catch (error) {
    console.error('❌ Failed to load users:', error)
    console.error('🚨 Error status:', error.response?.status)
    console.error('🚨 Error data:', error.response?.data)
    console.error('🚨 Error config:', error.config)
    console.error('🚨 Request URL:', error.config?.url)
  } finally {
    loading.value = false
  }
}

const filteredUsers = computed(() => {
  let result = [...users.value]
  
  // Search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(user => 
      `${user.first_name} ${user.last_name}`.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      (user.company_name && user.company_name.toLowerCase().includes(query))
    )
  }
  
  // Status filter
  if (statusFilter.value) {
    result = result.filter(user => 
      statusFilter.value === 'active' ? user.is_active : !user.is_active
    )
  }
  
  // Role filter
  if (roleFilter.value) {
    result = result.filter(user => {
      if (roleFilter.value === 'superuser') return user.is_superuser
      if (roleFilter.value === 'staff') return user.is_staff && !user.is_superuser
      if (roleFilter.value === 'user') return !user.is_staff && !user.is_superuser
      return true
    })
  }
  
  // Sort
  result.sort((a, b) => {
    let aValue, bValue
    
    if (sortField.value === 'name') {
      aValue = `${a.first_name} ${a.last_name}`.toLowerCase()
      bValue = `${b.first_name} ${b.last_name}`.toLowerCase()
    } else if (sortField.value === 'email') {
      aValue = a.email.toLowerCase()
      bValue = b.email.toLowerCase()
    } else if (sortField.value === 'created_at') {
      aValue = new Date(a.created_at)
      bValue = new Date(b.created_at)
    }
    
    if (sortDirection.value === 'asc') {
      return aValue > bValue ? 1 : -1
    } else {
      return aValue < bValue ? 1 : -1
    }
  })
  
  return result
})

const totalPages = computed(() => Math.ceil(filteredUsers.value.length / pageSize.value))

const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return filteredUsers.value.slice(start, end)
})

const visiblePages = computed(() => {
  const pages = []
  const start = Math.max(1, currentPage.value - 2)
  const end = Math.min(totalPages.value, currentPage.value + 2)
  
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  
  return pages
})

const searchUsers = () => {
  currentPage.value = 1
}

const filterUsers = () => {
  currentPage.value = 1
}

const sortBy = (field) => {
  if (sortField.value === field) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortField.value = field
    sortDirection.value = 'asc'
  }
  currentPage.value = 1
}

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

const refreshUsers = () => {
  loadUsers()
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
    window.open(`http://localhost:8000/user-login-with-token?token=${token}`, '_blank')
  } catch (error) {
    console.error('Failed to generate login token:', error)
    addAdminBreadcrumb('Login as user failed', { target_user_id: user.id, error: error.message })
    alert('Failed to login as user. This feature may not be implemented yet.')
  }
}

const deleteUser = async (user) => {
  if (!confirm(`Are you sure you want to delete user "${user.first_name} ${user.last_name}"?`)) {
    return
  }
  
  try {
    await axios.delete(`${getUrl('admin/delete-user')}${user.id}/`, authHeader())
    users.value = users.value.filter(u => u.id !== user.id)
  } catch (error) {
    console.error('Failed to delete user:', error)
    alert('Failed to delete user. Please try again.')
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
  // Set Sentry user context for admin
  const user = getCurrentUser()
  if (user) {
    setSentryUser(user)
    addAdminBreadcrumb('Admin panel accessed - User List')
  }
  
  loadUsers()
})
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

.btn-group .btn {
  border-radius: 0;
}

.btn-group .btn:first-child {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.btn-group .btn:last-child {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}

.pagination .page-link {
  color: #007bff;
}

.pagination .page-item.active .page-link {
  background-color: #007bff;
  border-color: #007bff;
}
</style>