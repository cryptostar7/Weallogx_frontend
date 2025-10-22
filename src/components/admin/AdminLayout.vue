<template>
  <div class="admin-dashboard">
    <!-- Header -->
    <div class="admin-header">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-6">
            <h1 class="h3 mb-0">
              <img src="/logo/wlx-logo-white.png" alt="WealthLogix" height="32" class="me-2">
              Admin
            </h1>
          </div>
          <div class="col-md-6 text-end">
            <span class="me-3">Welcome, {{ currentUser?.first_name || currentUser?.email }}</span>
            <router-link to="/" class="btn btn-outline-light btn-sm me-2">
              <i class="fas fa-arrow-left me-1"></i>Back to App
            </router-link>
            <button @click="logout" class="btn btn-outline-light btn-sm">Logout</button>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <!-- Sidebar -->
        <div class="col-md-3 col-lg-2 admin-sidebar">
          <nav class="nav nav-pills flex-column sidebar-nav">
            <router-link 
              to="/admin" 
              class="nav-link"
              :class="{ active: $route.name === 'AdminDashboard' }">
              <i class="fas fa-tachometer-alt me-2"></i> Dashboard
            </router-link>
            <router-link 
              to="/admin/users" 
              class="nav-link"
              :class="{ active: $route.name?.includes('User') }">
              <i class="fas fa-users me-2"></i> Users
            </router-link>
          </nav>
        </div>

        <!-- Main Content -->
        <div class="col-md-9 col-lg-10 admin-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const currentUser = ref(null)

const loadCurrentUser = async () => {
  try {
    const token = localStorage.getItem('access_token')
    const headers = { Authorization: `Bearer ${token}` }
    const userResponse = await axios.get('/api/auth/user/', { headers })
    currentUser.value = userResponse.data
  } catch (error) {
  }
}

const logout = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
  localStorage.removeItem('currentUser')
  localStorage.removeItem('plan_active')
  router.push('/')
}

onMounted(() => {
  loadCurrentUser()
})
</script>

<style scoped>
@import '../../views/admin/admin.css';
</style>