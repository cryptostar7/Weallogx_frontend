<template>
  <AdminLayout>
          <!-- Loading State -->
          <div v-if="loading" class="text-center py-5">
            <i class="fas fa-spinner fa-spin fa-2x"></i>
            <p class="mt-2">Loading user...</p>
          </div>

          <!-- Error State -->
          <div v-else-if="error" class="alert alert-danger">
            <i class="fas fa-exclamation-triangle me-2"></i>
            {{ error }}
          </div>

          <!-- Edit User Form -->
          <div v-else-if="form">
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
                    <li class="breadcrumb-item">
                      <router-link :to="`/admin/users/${$route.params.id}`">
                        {{ form.first_name }} {{ form.last_name }}
                      </router-link>
                    </li>
                    <li class="breadcrumb-item active">Edit</li>
                  </ol>
                </nav>
                <h2>Edit User</h2>
              </div>
              <div class="d-flex gap-2">
                <router-link :to="`/admin/users/${$route.params.id}`" class="btn btn-secondary">
                  <i class="fas fa-arrow-left me-1"></i> Back to Details
                </router-link>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-8">
                <div class="card">
                  <div class="card-header">
                    <h5 class="mb-0">Edit User Information</h5>
                  </div>
                  <div class="card-body">
                    <form @submit.prevent="updateUser">
                      <!-- Personal Information -->
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="first_name" class="form-label">First Name *</label>
                            <input 
                              type="text" 
                              class="form-control" 
                              id="first_name"
                              v-model="form.first_name"
                              :class="{ 'is-invalid': errors.first_name }"
                              required
                            >
                            <div v-if="errors.first_name" class="invalid-feedback">
                              {{ errors.first_name }}
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="last_name" class="form-label">Last Name *</label>
                            <input 
                              type="text" 
                              class="form-control" 
                              id="last_name"
                              v-model="form.last_name"
                              :class="{ 'is-invalid': errors.last_name }"
                              required
                            >
                            <div v-if="errors.last_name" class="invalid-feedback">
                              {{ errors.last_name }}
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Email -->
                      <div class="mb-3">
                        <label for="email" class="form-label">Email Address *</label>
                        <input 
                          type="email" 
                          class="form-control" 
                          id="email"
                          v-model="form.email"
                          :class="{ 'is-invalid': errors.email }"
                          required
                        >
                        <div v-if="errors.email" class="invalid-feedback">
                          {{ errors.email }}
                        </div>
                      </div>


                      <!-- Phone -->
                      <div class="mb-3">
                        <label for="phone_number" class="form-label">Phone Number</label>
                        <input 
                          type="tel" 
                          class="form-control" 
                          id="phone_number"
                          v-model="form.phone_number"
                          :class="{ 'is-invalid': errors.phone_number }"
                        >
                        <div v-if="errors.phone_number" class="invalid-feedback">
                          {{ errors.phone_number }}
                        </div>
                      </div>

                      <!-- Role and Permissions -->
                      <div class="mb-3">
                        <label class="form-label">Role and Permissions</label>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-check">
                              <input 
                                class="form-check-input" 
                                type="checkbox" 
                                id="is_active"
                                v-model="form.is_active"
                              >
                              <label class="form-check-label" for="is_active">
                                Active User
                              </label>
                            </div>
                            <div class="form-check">
                              <input 
                                class="form-check-input" 
                                type="checkbox" 
                                id="is_staff"
                                v-model="form.is_staff"
                              >
                              <label class="form-check-label" for="is_staff">
                                Staff Access
                              </label>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-check">
                              <input 
                                class="form-check-input" 
                                type="checkbox" 
                                id="is_superuser"
                                v-model="form.is_superuser"
                                :disabled="originalUser?.is_superuser && form.id === currentUser?.id"
                              >
                              <label class="form-check-label" for="is_superuser">
                                Superuser Access
                              </label>
                            </div>
                          </div>
                        </div>
                        <div v-if="originalUser?.is_superuser && form.id === currentUser?.id" class="form-text text-warning">
                          <i class="fas fa-exclamation-triangle me-1"></i>
                          You cannot remove your own superuser status
                        </div>
                      </div>

                      <!-- Plan Type -->
                      <div class="mb-3">
                        <label for="plan_type" class="form-label">Plan Type</label>
                        <select 
                          class="form-select" 
                          id="plan_type"
                          v-model="form.plan_type"
                          :class="{ 'is-invalid': errors.plan_type }"
                        >
                          <option value="FREE_TRIAL_PLAN">Free Trial</option>
                          <option value="MONTHLY_PLAN">Monthly Plan</option>
                          <option value="YEARLY_PLAN">Yearly Plan</option>
                        </select>
                        <div v-if="errors.plan_type" class="invalid-feedback">
                          {{ errors.plan_type }}
                        </div>
                      </div>

                      <!-- Password Change Section -->
                      <div class="card bg-light">
                        <div class="card-header">
                          <h6 class="mb-0">
                            <input 
                              type="checkbox" 
                              id="change_password"
                              v-model="changePassword"
                              class="me-2"
                            >
                            Change Password
                          </h6>
                        </div>
                        <div class="card-body" v-if="changePassword">
                          <div class="row">
                            <div class="col-md-6">
                              <div class="mb-3">
                                <label for="new_password" class="form-label">New Password</label>
                                <input 
                                  type="password" 
                                  class="form-control" 
                                  id="new_password"
                                  v-model="form.new_password"
                                  :class="{ 'is-invalid': errors.new_password }"
                                >
                                <div v-if="errors.new_password" class="invalid-feedback">
                                  {{ errors.new_password }}
                                </div>
                                <div class="form-text">
                                  Leave blank to keep current password
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="mb-3">
                                <label for="confirm_password" class="form-label">Confirm New Password</label>
                                <input 
                                  type="password" 
                                  class="form-control" 
                                  id="confirm_password"
                                  v-model="form.confirm_password"
                                  :class="{ 'is-invalid': errors.confirm_password }"
                                >
                                <div v-if="errors.confirm_password" class="invalid-feedback">
                                  {{ errors.confirm_password }}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Submit Buttons -->
                      <div class="d-flex justify-content-end gap-2 mt-3">
                        <router-link :to="`/admin/users/${$route.params.id}`" class="btn btn-secondary">
                          Cancel
                        </router-link>
                        <button 
                          type="submit" 
                          class="btn btn-admin"
                          :disabled="updateLoading"
                        >
                          <i v-if="updateLoading" class="fas fa-spinner fa-spin me-1"></i>
                          <i v-else class="fas fa-save me-1"></i>
                          {{ updateLoading ? 'Saving...' : 'Save Changes' }}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <!-- Help Panel -->
              <div class="col-lg-4">
                <div class="card">
                  <div class="card-header">
                    <h6 class="mb-0">
                      <i class="fas fa-info-circle me-1"></i>
                      Edit User Help
                    </h6>
                  </div>
                  <div class="card-body">
                    <h6>Role Permissions:</h6>
                    <ul class="list-unstyled">
                      <li><strong>Active:</strong> User can log in and access the system</li>
                      <li><strong>Staff:</strong> User can access admin panel</li>
                      <li><strong>Superuser:</strong> User has all permissions</li>
                    </ul>
                    
                    <h6 class="mt-3">Plan Types:</h6>
                    <ul class="list-unstyled">
                      <li><strong>Free Trial:</strong> 14-day trial access</li>
                      <li><strong>Monthly:</strong> Monthly subscription</li>
                      <li><strong>Yearly:</strong> Annual subscription</li>
                    </ul>
                    
                    <div class="alert alert-warning">
                      <small>
                        <i class="fas fa-exclamation-triangle me-1"></i>
                        Changes will take effect immediately. Users may need to log in again to see permission changes.
                      </small>
                    </div>
                  </div>
                </div>

                <!-- User Info -->
                <div class="card mt-3" v-if="originalUser">
                  <div class="card-header">
                    <h6 class="mb-0">User Information</h6>
                  </div>
                  <div class="card-body">
                    <p class="mb-2"><strong>User ID:</strong> #{{ originalUser.id }}</p>
                    <p class="mb-2"><strong>Joined:</strong> {{ formatDate(originalUser.created_at) }}</p>
                    <p class="mb-0"><strong>Last Updated:</strong> {{ formatDate(originalUser.updated_at) }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  </AdminLayout>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
import AdminLayout from '@/components/admin/AdminLayout.vue'
import { authHeader, getCurrentUser } from '../../../services/helper'
import { getUrl } from '../../../network/url'

const router = useRouter()
const route = useRoute()
const loading = ref(true)
const updateLoading = ref(false)
const error = ref('')
const currentUser = ref(getCurrentUser())
const originalUser = ref(null)
const changePassword = ref(false)

const form = reactive({
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
  is_active: true,
  is_staff: false,
  is_superuser: false,
  plan_type: 'FREE_TRIAL_PLAN',
  new_password: '',
  confirm_password: ''
})

const errors = ref({})

const loadUser = async () => {
  try {
    const userId = route.params.id
    const response = await axios.get(`${getUrl('user')}${userId}/`, authHeader())
    const user = response.data
    
    originalUser.value = user
    
    // Populate form with user data
    Object.keys(form).forEach(key => {
      if (user.hasOwnProperty(key)) {
        form[key] = user[key]
      }
    })
  } catch (err) {
    console.error('Failed to load user:', err)
    error.value = 'Failed to load user details'
  } finally {
    loading.value = false
  }
}

const validateForm = () => {
  const newErrors = {}
  
  if (!form.first_name.trim()) {
    newErrors.first_name = 'First name is required'
  }
  
  if (!form.last_name.trim()) {
    newErrors.last_name = 'Last name is required'
  }
  
  if (!form.email.trim()) {
    newErrors.email = 'Email is required'
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    newErrors.email = 'Email format is invalid'
  }
  
  if (changePassword.value) {
    if (!form.new_password) {
      newErrors.new_password = 'New password is required'
    } else if (form.new_password.length < 8) {
      newErrors.new_password = 'Password must be at least 8 characters'
    }
    
    if (form.new_password !== form.confirm_password) {
      newErrors.confirm_password = 'Passwords do not match'
    }
  }
  
  errors.value = newErrors
  return Object.keys(newErrors).length === 0
}

const updateUser = async () => {
  if (!validateForm()) {
    return
  }
  
  updateLoading.value = true
  errors.value = {}
  
  try {
    const updateData = {
      first_name: form.first_name,
      last_name: form.last_name,
      email: form.email,
      phone_number: form.phone_number,
      is_active: form.is_active,
      is_staff: form.is_staff,
      is_superuser: form.is_superuser,
      plan_type: form.plan_type
    }
    
    if (changePassword.value && form.new_password) {
      updateData.password = form.new_password
    }
    
    const response = await axios.patch(
      `${getUrl('user')}${route.params.id}/`, 
      updateData, 
      authHeader()
    )
    
    // Success - redirect to user detail page
    router.push(`/admin/users/${route.params.id}`)
  } catch (err) {
    console.error('Failed to update user:', err)
    
    if (err.response?.data) {
      // Handle validation errors from server
      errors.value = err.response.data
    } else {
      errors.value = { general: 'Failed to update user. Please try again.' }
    }
  } finally {
    updateLoading.value = false
  }
}

const formatDate = (dateString) => {
  if (!dateString) return 'Not available'
  return new Date(dateString).toLocaleDateString()
}


onMounted(() => {
  loadUser()
})
</script>

<style scoped>
@import '../admin.css';

.form-check {
  margin-bottom: 0.5rem;
}

.alert-warning {
  background-color: #fff3cd;
  border-color: #ffecb5;
  color: #664d03;
}

.card.bg-light {
  background-color: #f8f9fa !important;
}
</style>