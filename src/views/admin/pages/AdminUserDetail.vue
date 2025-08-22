<template>
  <AdminLayout>
    <!-- Loading State -->
    <div v-if="loading" class="text-center py-5">
      <i class="fas fa-spinner fa-spin fa-2x"></i>
      <p class="mt-2">Loading user details...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="alert alert-danger">
      <i class="fas fa-exclamation-triangle me-2"></i>
      {{ error }}
    </div>

    <!-- User Details -->
    <div v-else-if="user">
            <!-- Page Title -->
            <div class="d-flex justify-content-between align-items-center page-title">
              <div>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <router-link to="/admin">Dashboard</router-link>
                    </li>
                    <li class="breadcrumb-item">
                      <router-link to="/admin/users">Users</router-link>
                    </li>
                    <li class="breadcrumb-item active">{{ user.first_name }} {{ user.last_name }}</li>
                  </ol>
                </nav>
                <h2>User Details</h2>
              </div>
              <div class="d-flex gap-2">
                <router-link 
                  :to="`/admin/users/${user.id}/edit`" 
                  class="btn btn-admin"
                >
                  <i class="fas fa-edit me-1"></i> Edit User
                </router-link>
                <router-link to="/admin/users" class="btn btn-secondary">
                  <i class="fas fa-arrow-left me-1"></i> Back to Users
                </router-link>
              </div>
            </div>

            <div class="row">
              <!-- User Information Card -->
              <div class="col-lg-8">
                <div class="card mb-4">
                  <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Personal Information</h5>
                    <div class="d-flex gap-2">
                      <span class="badge" :class="getUserRoleBadgeClass(user)">
                        {{ getUserRoleText(user) }}
                      </span>
                      <span class="badge" :class="user.is_active ? 'bg-success' : 'bg-danger'">
                        {{ user.is_active ? 'Active' : 'Inactive' }}
                      </span>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label text-muted">First Name</label>
                          <div class="fw-bold">{{ user.first_name || 'Not provided' }}</div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label text-muted">Last Name</label>
                          <div class="fw-bold">{{ user.last_name || 'Not provided' }}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label text-muted">Email Address</label>
                          <div class="fw-bold">
                            <a :href="`mailto:${user.email}`">{{ user.email }}</a>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label text-muted">Phone Number</label>
                          <div class="fw-bold">
                            {{ user.phone_number || 'Not provided' }}
                          </div>
                        </div>
                      </div>
                    </div>


                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label text-muted">Date Joined</label>
                          <div class="fw-bold">{{ formatDateTime(user.created_at) }}</div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label text-muted">Last Updated</label>
                          <div class="fw-bold">{{ formatDateTime(user.updated_at) }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Subscription Information -->
                <div class="card mb-4" v-if="subscription">
                  <div class="card-header">
                    <h5 class="mb-0">Subscription Information</h5>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label text-muted">Current Plan</label>
                          <div class="fw-bold">
                            <span class="badge bg-info">{{ user.plan_type || 'Free Trial' }}</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label text-muted">Subscription Status</label>
                          <div class="fw-bold">
                            <span class="badge" :class="getSubscriptionStatusClass(subscription)">
                              {{ subscription.subscription_status || 'Unknown' }}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="row" v-if="subscription.starting_date">
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label text-muted">Start Date</label>
                          <div class="fw-bold">{{ formatDate(subscription.starting_date) }}</div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label text-muted">End Date</label>
                          <div class="fw-bold">{{ formatDate(subscription.ending_date) }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Quick Actions Sidebar -->
              <div class="col-lg-4">
                <div class="card mb-4">
                  <div class="card-header">
                    <h6 class="mb-0">Quick Actions</h6>
                  </div>
                  <div class="card-body">
                    <div class="d-grid gap-2">
                      <router-link 
                        :to="`/admin/users/${user.id}/edit`" 
                        class="btn btn-outline-primary"
                      >
                        <i class="fas fa-edit me-2"></i> Edit User
                      </router-link>
                      
                      <button 
                        @click="toggleUserStatus"
                        class="btn"
                        :class="user.is_active ? 'btn-outline-warning' : 'btn-outline-success'"
                        :disabled="actionLoading"
                      >
                        <i v-if="actionLoading" class="fas fa-spinner fa-spin me-2"></i>
                        <i v-else :class="user.is_active ? 'fas fa-user-slash' : 'fas fa-user-check'" class="me-2"></i>
                        {{ user.is_active ? 'Deactivate User' : 'Activate User' }}
                      </button>
                      
                      <button 
                        @click="resetPassword"
                        class="btn btn-outline-secondary"
                        :disabled="actionLoading"
                      >
                        <i v-if="actionLoading" class="fas fa-spinner fa-spin me-2"></i>
                        <i v-else class="fas fa-key me-2"></i>
                        Reset Password
                      </button>
                      
                      <button 
                        @click="loginAsUser"
                        class="btn btn-outline-success"
                        :disabled="actionLoading"
                      >
                        <i v-if="actionLoading" class="fas fa-spinner fa-spin me-2"></i>
                        <i v-else class="fas fa-sign-in-alt me-2"></i>
                        Login as User
                      </button>
                      
                      <button 
                        @click="deleteUser"
                        class="btn btn-outline-danger"
                        :disabled="user.is_superuser || actionLoading"
                      >
                        <i class="fas fa-trash me-2"></i> Delete User
                      </button>
                    </div>
                  </div>
                </div>

                <!-- User Statistics -->
                <div class="card">
                  <div class="card-header">
                    <h6 class="mb-0">User Statistics</h6>
                  </div>
                  <div class="card-body">
                    <div class="mb-3">
                      <label class="form-label text-muted">Account Status</label>
                      <div class="fw-bold">
                        <span class="badge" :class="user.is_active ? 'bg-success' : 'bg-danger'">
                          {{ user.is_active ? 'Active' : 'Inactive' }}
                        </span>
                      </div>
                    </div>
                    
                    <div class="mb-3">
                      <label class="form-label text-muted">User ID</label>
                      <div class="fw-bold">#{{ user.id }}</div>
                    </div>
                    
                    <div class="mb-3">
                      <label class="form-label text-muted">Account Age</label>
                      <div class="fw-bold">{{ getAccountAge(user.created_at) }}</div>
                    </div>
                  </div>
                </div>
              </div>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
import AdminLayout from '@/components/admin/AdminLayout.vue'
import { authHeader, getCurrentUser } from '../../../services/helper'
import { getUrl } from '../../../network/url'

const router = useRouter()
const route = useRoute()
const user = ref(null)
const subscription = ref(null)
const loading = ref(true)
const actionLoading = ref(false)
const error = ref('')

const loadUser = async () => {
  try {
    const userId = route.params.id
    const response = await axios.get(`${getUrl('user')}${userId}/`, authHeader())
    user.value = response.data
    
    // Try to load subscription data
    try {
      const subResponse = await axios.get(`/api/payment/user/${userId}/subscription/`, authHeader())
      subscription.value = subResponse.data
    } catch (subError) {
      console.log('No subscription found for user')
    }
  } catch (err) {
    console.error('Failed to load user:', err)
    error.value = 'Failed to load user details'
  } finally {
    loading.value = false
  }
}

const toggleUserStatus = async () => {
  if (!confirm(`Are you sure you want to ${user.value.is_active ? 'deactivate' : 'activate'} this user?`)) {
    return
  }
  
  actionLoading.value = true
  try {
    const response = await axios.patch(
      `${getUrl('user')}${user.value.id}/`, 
      { is_active: !user.value.is_active },
      authHeader()
    )
    user.value = response.data
  } catch (err) {
    console.error('Failed to update user status:', err)
    alert('Failed to update user status')
  } finally {
    actionLoading.value = false
  }
}

const resetPassword = async () => {
  if (!confirm('Are you sure you want to reset this user\'s password? They will receive an email with instructions.')) {
    return
  }
  
  actionLoading.value = true
  try {
    await axios.post(`${getUrl('user')}${user.value.id}/reset-password/`, {}, authHeader())
    alert('Password reset email sent successfully')
  } catch (err) {
    console.error('Failed to reset password:', err)
    alert('Failed to send password reset email')
  } finally {
    actionLoading.value = false
  }
}

const deleteUser = async () => {
  if (!confirm(`Are you sure you want to delete user "${user.value.first_name} ${user.value.last_name}"? This action cannot be undone.`)) {
    return
  }
  
  actionLoading.value = true
  try {
    await axios.delete(`${getUrl('admin/delete-user')}${user.value.id}/`, authHeader())
    router.push('/admin/users')
  } catch (err) {
    console.error('Failed to delete user:', err)
    alert('Failed to delete user')
    actionLoading.value = false
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

const getSubscriptionStatusClass = (subscription) => {
  if (!subscription || !subscription.subscription_status) return 'bg-secondary'
  
  switch (subscription.subscription_status.toLowerCase()) {
    case 'active':
      return 'bg-success'
    case 'canceled':
    case 'cancelled':
      return 'bg-danger'
    case 'past_due':
      return 'bg-warning'
    case 'trialing':
      return 'bg-info'
    default:
      return 'bg-secondary'
  }
}

const formatDate = (dateString) => {
  if (!dateString) return 'Not available'
  return new Date(dateString).toLocaleDateString()
}

const formatDateTime = (dateString) => {
  if (!dateString) return 'Not available'
  return new Date(dateString).toLocaleString()
}

const getAccountAge = (createdAt) => {
  if (!createdAt) return 'Unknown'
  
  const created = new Date(createdAt)
  const now = new Date()
  const diffTime = Math.abs(now - created)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays < 30) {
    return `${diffDays} days`
  } else if (diffDays < 365) {
    return `${Math.floor(diffDays / 30)} months`
  } else {
    return `${Math.floor(diffDays / 365)} years`
  }
}

const loginAsUser = async () => {
  if (!confirm(`Are you sure you want to login as "${user.value.first_name} ${user.value.last_name}"? This will open a new tab.`)) {
    return
  }
  
  actionLoading.value = true
  try {
    // Generate a login token for the target user
    const response = await axios.post(`${getUrl('user')}${user.value.id}/generate-login-token/`, {}, authHeader())
    const token = response.data.token
    
    // Open main app in new tab with the login token
    const frontendUrl = window.location.origin
    window.open(`${frontendUrl}/user-login-with-token?token=${token}`, '_blank')
  } catch (err) {
    console.error('Failed to generate login token:', err)
    alert('Failed to login as user. This feature may not be implemented yet.')
  } finally {
    actionLoading.value = false
  }
}


onMounted(() => {
  loadUser()
})
</script>

<style scoped>
@import '../admin.css';

.form-label {
  font-size: 0.875rem;
  font-weight: 600;
}

a[href^="mailto:"] {
  color: #007bff;
  text-decoration: none;
}

a[href^="mailto:"]:hover {
  text-decoration: underline;
}
</style>