<template>
  <div>
    <navbar-component />
    <section class="authMaindiv-area">
      <div class="container middleContainer">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <!-- Loading State -->
            <div v-if="loading" class="card mt-5">
              <div class="card-body text-center py-5">
                <div class="spinner-border text-success" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <p class="mt-3">Loading invitation details...</p>
              </div>
            </div>

            <!-- Invitation Details -->
            <div v-if="!loading && invitation && !accepted" class="card mt-5">
              <div class="card-header bg-success text-white">
                <h4 class="mb-0">Team Invitation</h4>
              </div>
              <div class="card-body">
                <div class="text-center mb-4">
                  <svg width="64" height="64" fill="currentColor" class="text-success mb-3" viewBox="0 0 16 16">
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                  </svg>
                  <h3>You've been invited to join</h3>
                  <h2 class="text-success">{{ invitation.team_name }}</h2>
                </div>

                <div class="alert alert-info">
                  <strong>{{ invitation.invited_by }}</strong> has invited you to join their team on WealthLogix.
                </div>

                <div class="mb-3">
                  <p><strong>Your Email:</strong> {{ invitation.email }}</p>
                  <p><strong>Expires:</strong> {{ formatDate(invitation.expires_at) }}</p>
                </div>

                <!-- Not Logged In -->
                <div v-if="!isAuthenticated">
                  <div class="d-grid">
                    <router-link
                      :to="`/team/accept-invitation/${invitationToken}/signup`"
                      class="btn btn-success btn-lg rounded-pill"
                    >
                      Create Account
                    </router-link>
                  </div>
                </div>

                <!-- Logged In -->
                <div v-else>
                  <!-- Email Mismatch Warning -->
                  <div v-if="currentUserEmail && currentUserEmail !== invitation.email" class="alert alert-danger">
                    <strong>Email Mismatch!</strong><br>
                    This invitation is for <strong>{{ invitation.email }}</strong>, but you're logged in as <strong>{{ currentUserEmail }}</strong>.
                    <br>Please log in with the invited email address or request a new invitation.
                  </div>

                  <!-- Accept/Decline Buttons -->
                  <div v-else class="d-grid gap-2">
                    <button
                      @click="acceptInvitation"
                      class="btn btn-success btn-lg rounded-pill"
                      :disabled="accepting"
                    >
                      <span v-if="accepting" class="spinner-border spinner-border-sm me-2"></span>
                      {{ accepting ? 'Accepting...' : 'Accept Invitation' }}
                    </button>
                    <router-link to="/dashboard" class="btn btn-outline-secondary rounded-pill">
                      Decline
                    </router-link>
                  </div>
                </div>
              </div>
            </div>

            <!-- Success Message -->
            <div v-if="accepted" class="card mt-5">
              <div class="card-body text-center py-5">
                <svg width="64" height="64" fill="currentColor" class="text-success mb-3" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
                <h3 class="text-success">Welcome to the Team!</h3>
                <p class="lead">You've successfully joined <strong>{{ invitation.team_name }}</strong></p>
                <div class="d-grid gap-2 col-6 mx-auto mt-4">
                  <router-link to="/dashboard" class="btn btn-success btn-lg rounded-pill">
                    Go to Dashboard
                  </router-link>
                  <router-link to="/team-management" class="btn btn-outline-success rounded-pill">
                    View Team
                  </router-link>
                </div>
              </div>
            </div>

            <!-- Error Message -->
            <div v-if="error" class="card mt-5">
              <div class="card-body">
                <div class="alert alert-danger">
                  <h5>Error</h5>
                  {{ error }}
                </div>
                <router-link to="/dashboard" class="btn btn-success rounded-pill">
                  Return to Dashboard
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer-component />
  </div>
</template>

<script>
import NavbarComponent from "../components/common/UserNavbarComponent.vue";
import FooterComponent from "../components/common/UserFooterComponent.vue";
import { get, post } from "../../network/requests";
import { getUrl } from "../../network/url";
import { authHeader, getAccessToken } from "../../services/helper";

export default {
  name: "AcceptTeamInvitationPage",
  components: {
    NavbarComponent,
    FooterComponent,
  },
  data() {
    return {
      loading: true,
      invitation: null,
      error: null,
      accepting: false,
      accepted: false,
      invitationToken: null,
      isAuthenticated: false,
      currentUserEmail: null,
    };
  },
  async mounted() {
    this.invitationToken = this.$route.params.token;
    this.checkAuthentication();
    await this.loadInvitationDetails();
  },
  methods: {
    checkAuthentication() {
      const accessToken = getAccessToken();
      this.isAuthenticated = !!accessToken;

      if (this.isAuthenticated) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        this.currentUserEmail = currentUser.email;
      }
    },
    async loadInvitationDetails() {
      try {
        this.loading = true;
        this.error = null;

        // Public endpoint - no auth required
        const response = await get(`${getUrl('invitation-detail')}${this.invitationToken}/`);

        this.invitation = response.data;

        // Check if invitation is already accepted or expired
        if (this.invitation.status !== 'pending') {
          this.error = `This invitation has been ${this.invitation.status}.`;
        }
      } catch (error) {
        console.error('Error loading invitation:', error);
        this.error = error.response?.data?.error || 'Invalid or expired invitation';
      } finally {
        this.loading = false;
      }
    },
    storeInvitationToken() {
      // Store token in session storage to redirect back after login
      sessionStorage.setItem('pending_invitation_token', this.invitationToken);
    },
    async acceptInvitation() {
      try {
        this.accepting = true;
        this.error = null;

        const response = await post(
          `${getUrl('invitation-accept')}${this.invitationToken}/accept/`,
          { accept: true },
          authHeader()
        );

        if (response.data.success) {
          this.accepted = true;

          // Update current user info in localStorage
          const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
          currentUser.team_role = 'team_member';
          localStorage.setItem('currentUser', JSON.stringify(currentUser));

          // Clear pending invitation token
          sessionStorage.removeItem('pending_invitation_token');
        }
      } catch (error) {
        console.error('Error accepting invitation:', error);
        this.error = error.response?.data?.message || error.response?.data?.error || 'Failed to accept invitation';
      } finally {
        this.accepting = false;
      }
    },
    formatDate(dateString) {
      if (!dateString) return '-';
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  }
};
</script>

<style scoped>
/* Custom green color to match sidebar active state */
.text-success {
  color: #0E6651 !important;
}

.bg-success {
  background-color: #0E6651 !important;
}

.btn-success {
  background-color: #0E6651;
  border-color: #0E6651;
}

.btn-success:hover {
  background-color: #0D7C62;
  border-color: #0D7C62;
}

.btn-outline-success {
  color: #0E6651;
  border-color: #0E6651;
}

.btn-outline-success:hover {
  background-color: #0E6651;
  border-color: #0E6651;
  color: white;
}

.spinner-border.text-success {
  border-color: #0E6651;
  border-right-color: transparent;
}

.card {
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.card-header {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.btn-lg {
  padding: 12px 24px;
  font-size: 1.1rem;
}

.lead {
  font-size: 1.15rem;
}
</style>
