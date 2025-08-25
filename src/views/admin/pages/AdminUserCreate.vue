<template>
  <AdminLayout>
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
                  <li class="breadcrumb-item active">Create User</li>
                </ol>
              </nav>
              <h2>Create New User</h2>
            </div>
            <div>
              <router-link to="/admin/users" class="btn btn-secondary">
                <i class="fas fa-arrow-left me-1"></i> Back to Users
              </router-link>
            </div>
          </div>

          <!-- Create User Form -->
          <div class="row">
            <div class="col-lg-8">
              <div class="card">
                <div class="card-header">
                  <h5 class="mb-0">User Information</h5>
                </div>
                <div class="card-body">
                  <form @submit.prevent="createUser">
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

                    <!-- Password -->
                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label for="password" class="form-label">Password *</label>
                          <input 
                            type="password" 
                            class="form-control" 
                            id="password"
                            v-model="form.password"
                            :class="{ 'is-invalid': errors.password }"
                            required
                          >
                          <div v-if="errors.password" class="invalid-feedback">
                            {{ errors.password }}
                          </div>
                          <div class="form-text">
                            Password must be at least 8 characters long
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label for="password_confirm" class="form-label">Confirm Password *</label>
                          <input 
                            type="password" 
                            class="form-control" 
                            id="password_confirm"
                            v-model="form.password_confirm"
                            :class="{ 'is-invalid': errors.password_confirm }"
                            required
                          >
                          <div v-if="errors.password_confirm" class="invalid-feedback">
                            {{ errors.password_confirm }}
                          </div>
                        </div>
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
                            >
                            <label class="form-check-label" for="is_superuser">
                              Superuser Access
                            </label>
                          </div>
                        </div>
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

                    <!-- General Error Display -->
                    <div v-if="errors.general || errors.error" class="alert alert-danger mb-3">
                      <i class="fas fa-exclamation-circle me-1"></i>
                      {{ errors.general || errors.error }}
                    </div>

                    <!-- Submit Buttons -->
                    <div class="d-flex justify-content-end gap-2">
                      <router-link to="/admin/users" class="btn btn-secondary">
                        Cancel
                      </router-link>
                      <button 
                        type="submit" 
                        class="btn btn-admin"
                        :disabled="loading"
                      >
                        <i v-if="loading" class="fas fa-spinner fa-spin me-1"></i>
                        <i v-else class="fas fa-user-plus me-1"></i>
                        {{ loading ? 'Creating...' : 'Create User' }}
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
                    Create User Help
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
                  
                  <div class="alert alert-info">
                    <small>
                      <i class="fas fa-lightbulb me-1"></i>
                      Users will receive a welcome email with login instructions after creation.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
  </AdminLayout>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import AdminLayout from '@/components/admin/AdminLayout.vue'
import { authHeader, getCurrentUser } from '../../../services/helper'
import { getUrl } from '../../../network/url'

const router = useRouter()
const loading = ref(false)

const form = reactive({
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
  password: '',
  password_confirm: '',
  is_active: true,
  is_staff: false,
  is_superuser: false,
  plan_type: 'FREE_TRIAL_PLAN'
})

const errors = ref({})

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
  
  if (!form.password) {
    newErrors.password = 'Password is required'
  } else if (form.password.length < 8) {
    newErrors.password = 'Password must be at least 8 characters'
  }
  
  if (form.password !== form.password_confirm) {
    newErrors.password_confirm = 'Passwords do not match'
  }
  
  errors.value = newErrors
  return Object.keys(newErrors).length === 0
}

const createUser = async () => {
  if (!validateForm()) {
    return
  }
  
  loading.value = true
  errors.value = {}
  
  try {
    const userData = {
      first_name: form.first_name,
      last_name: form.last_name,
      email: form.email,
      phone_number: form.phone_number,
      password: form.password,
      is_active: form.is_active,
      is_staff: form.is_staff,
      is_superuser: form.is_superuser,
      plan_type: form.plan_type
    }
    
    console.log('Submitting user data:', userData)
    
    const response = await axios.post(getUrl('admin/create-user'), userData, authHeader())
    console.log('User created successfully:', response.data)
    
    // Success - redirect to user list page (since detail page might not exist)
    router.push('/admin/users')
  } catch (error) {
    console.error('Failed to create user:', error)
    console.error('Error response:', error.response?.data)
    console.error('Error status:', error.response?.status)
    
    if (error.response?.data) {
      // Handle validation errors from server
      const serverErrors = error.response.data
      
      // If it's a field-specific error object
      if (typeof serverErrors === 'object' && !serverErrors.error) {
        errors.value = serverErrors
      } else {
        // If it's a general error message
        errors.value = { general: serverErrors.error || 'Failed to create user. Please try again.' }
      }
    } else if (error.response?.status === 403) {
      errors.value = { general: 'You do not have permission to create users.' }
    } else if (error.response?.status === 500) {
      errors.value = { general: 'Server error. Please try again later.' }
    } else {
      errors.value = { general: 'Network error. Please check your connection and try again.' }
    }
  } finally {
    loading.value = false
  }
}

</script>

<style scoped>
@import '../admin.css';

.form-check {
  margin-bottom: 0.5rem;
}

.alert-info {
  background-color: #e7f3ff;
  border-color: #b3d9ff;
  color: #004085;
}
</style>