<template>
  <div>
    <navbar-component />
    <section class="authMaindiv-area">
      <div class="container middleContainer">
        <header-component />
        <div class="payment-methodMain-div paymentMiddleDivMain">
          <sidebar-component />
          <div class="payment-right-card-main-div dashBoardRightDiv">
              <!-- Header -->
              <div class="profile-edit-btn-main-div">
                <div>
                  <h2 class="pro-details-name">Team Management</h2>
                  <p class="text-muted" style="padding-bottom: 1rem;">Manage your team members and invitations</p>
                </div>
                <div class="d-flex gap-2">
                  <router-link
                    to="/profile-details"
                    class="paymentCardEditButton2"
                  >
                    Back to Profile
                  </router-link>
                  <!-- Add Team Member Button (always show for owners) -->
                  <button
                    v-if="!loading && isOwner"
                    @click="openInviteModal"
                    class="paymentCardEditButton2"
                  >
                    <svg width="16" height="16" fill="currentColor" class="me-1" viewBox="0 0 16 16" style="margin-bottom: 2px;">
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                    Add Team Member
                  </button>
                </div>
              </div>

              <!-- Loading State -->
              <div v-if="loading" class="text-center py-5">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>

              <!-- Team Info Card -->
              <div v-if="!loading" class="card mb-4">
                <div class="card-body">
                  <h5 class="card-title">Team Information</h5>
                  <div class="row mt-3">
                    <div class="col-md-4">
                      <p class="text-muted mb-1">Team Owner</p>
                      <p class="fw-bold">{{ team ? team.owner.email : currentUserEmail }}</p>
                    </div>
                    <div class="col-md-4">
                      <p class="text-muted mb-1">Team Members</p>
                      <p class="fw-bold">{{ team ? `${team.current_member_count} / ${team.max_members}` : '0 / 0' }}</p>
                    </div>
                    <div class="col-md-4">
                      <p class="text-muted mb-1">Available Seats</p>
                      <p class="fw-bold" :class="team && team.is_full ? 'text-danger' : 'text-success'">
                        {{ team ? team.available_seats : '0' }}
                        <span v-if="team && team.invitations && team.invitations.length > 0" class="text-muted" style="font-size: 0.9em;">
                          ({{ team.invitations.length }} pending invites)
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Current Team Members -->
              <div v-if="!loading" class="card mb-4">
                <div class="card-header">
                  <h5 class="mb-0">Current Team Members</h5>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Email</th>
                          <th>Name</th>
                          <th>Joined</th>
                          <th v-if="isOwner && team">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <!-- When no team exists -->
                        <tr v-if="!team">
                          <td colspan="4" class="text-center text-muted">
                            No team members yet. Create a team to get started!
                          </td>
                        </tr>
                        <!-- Owner -->
                        <tr v-if="team">
                          <td>{{ team.owner.email }}</td>
                          <td>{{ team.owner.first_name }} {{ team.owner.last_name }}</td>
                          <td><span class="badge bg-primary">Owner</span></td>
                          <td v-if="isOwner">-</td>
                        </tr>
                        <!-- Members -->
                        <tr v-for="member in (team ? team.members : [])" :key="member.id">
                          <td>{{ member.user.email }}</td>
                          <td>{{ member.user.first_name }} {{ member.user.last_name }}</td>
                          <td>{{ formatDate(member.joined_at) }}</td>
                          <td v-if="isOwner">
                            <button
                              @click="removeMember(member.id)"
                              class="btn btn-sm btn-outline-danger"
                              :disabled="removingMember === member.id"
                            >
                              <span v-if="removingMember === member.id" class="spinner-border spinner-border-sm me-1"></span>
                              Remove
                            </button>
                          </td>
                        </tr>
                        <tr v-if="team && team.members.length === 0">
                          <td colspan="4" class="text-center text-muted">
                            No team members yet. Invite members to get started!
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- Pending Invitations (Owner Only) -->
              <div v-if="!loading && isOwner" class="card mb-4">
                <div class="card-header">
                  <h5 class="mb-0">Pending Invitations</h5>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Email</th>
                          <th>Expires</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <!-- No invitations -->
                        <tr v-if="!team || !team.invitations || team.invitations.length === 0">
                          <td colspan="3" class="text-center text-muted">
                            No pending invitations
                          </td>
                        </tr>
                        <!-- Invitations list -->
                        <tr v-for="invitation in (team && team.invitations ? team.invitations : [])" :key="invitation.token">
                          <td>{{ invitation.email }}</td>
                          <td>{{ formatDate(invitation.expires_at) }}</td>
                          <td>
                            <button
                              @click="revokeInvitation(invitation.token)"
                              class="btn btn-sm btn-outline-danger"
                              :disabled="revokingInvitation === invitation.token"
                            >
                              <span v-if="revokingInvitation === invitation.token" class="spinner-border spinner-border-sm me-1"></span>
                              Revoke
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- Error Message -->
              <div v-if="error" class="alert alert-danger">
                {{ error }}
              </div>
          </div>
        </div>
      </div>
    </section>
    <footer-component />

    <!-- Invite Members Modal -->
    <div
      class="modal fade"
      id="inviteMembersModal"
      tabindex="-1"
      aria-labelledby="inviteMembersModalLabel"
      aria-hidden="true"
      ref="inviteModal"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="inviteMembersModalLabel">Add Team Member</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div v-if="team && team.is_full" class="alert alert-warning">
              Team is at maximum capacity ({{ team.max_members }} members). Remove a member to invite more.
            </div>
            <div v-else>
              <p v-if="!team" class="text-muted mb-3">
                Your team will be created automatically when you send the first invitation.
              </p>
              <div class="mb-3">
                <label class="form-label">Email Address <span class="text-danger">*</span></label>
                <input
                  type="email"
                  class="form-control"
                  v-model="inviteEmail"
                  placeholder="Enter email address"
                  :disabled="sendingInvites"
                  @keyup.enter="sendInvitation"
                />
              </div>

              <!-- Invitation Result -->
              <div v-if="invitationError" class="alert alert-danger">
                {{ invitationError }}
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              :disabled="sendingInvites"
            >
              Close
            </button>
            <button
              v-if="!team || !team.is_full"
              @click="sendInvitation"
              class="btn btn-primary"
              :disabled="sendingInvites || !inviteEmail || !isValidEmail(inviteEmail)"
            >
              <span v-if="sendingInvites" class="spinner-border spinner-border-sm me-2"></span>
              {{ sendingInvites ? 'Sending...' : 'Send Invitation' }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Confirmation Modal -->
    <div
      class="modal fade"
      id="confirmationModal"
      tabindex="-1"
      aria-labelledby="confirmationModalLabel"
      aria-hidden="true"
      ref="confirmationModal"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="confirmationModalLabel">{{ confirmationTitle }}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>{{ confirmationMessage }}</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="confirmAction"
              data-bs-dismiss="modal"
            >
              {{ confirmationButtonText }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Transfer Clients Modal -->
    <div
      class="modal fade"
      id="transferClientsModal"
      tabindex="-1"
      aria-labelledby="transferClientsModalLabel"
      aria-hidden="true"
      ref="transferClientsModal"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="transferClientsModalLabel">Transfer Clients</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p class="mb-3">
              Before removing <strong>{{ memberToRemove ? memberToRemove.user.email : '' }}</strong>,
              please select which user should receive their clients:
            </p>
            <div class="form-group">
              <label for="transferToUser" class="form-label">Transfer clients to:</label>
              <select
                id="transferToUser"
                v-model="transferToUserId"
                class="form-select"
                required
              >
                <option value="" disabled>Select a user...</option>
                <!-- Team owner option -->
                <option v-if="team" :value="team.owner.id">
                  {{ team.owner.email }} (Owner)
                </option>
                <!-- Other team members (exclude the one being removed) -->
                <option
                  v-for="member in availableTransferUsers"
                  :key="member.id"
                  :value="member.user.id"
                >
                  {{ member.user.email }}
                </option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="confirmRemoveMember"
              :disabled="!transferToUserId || removingMember"
            >
              <span v-if="removingMember" class="spinner-border spinner-border-sm me-1"></span>
              {{ removingMember ? 'Removing...' : 'Remove Member' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from "../components/common/UserNavbarComponent.vue";
import HeaderComponent from "../components/user-dashboard/HeaderComponent.vue";
import SidebarComponent from "../components/user-dashboard/SidebarComponent.vue";
import FooterComponent from "../components/common/UserFooterComponent.vue";
import { get, post, remove } from "../../network/requests";
import { getUrl } from "../../network/url";
import { authHeader } from "../../services/helper";

export default {
  name: "TeamManagementPage",
  components: {
    NavbarComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  },
  data() {
    return {
      loading: true,
      team: null,
      error: null,
      isOwner: false,
      inviteEmail: '',
      sendingInvites: false,
      invitationError: null,
      removingMember: null,
      revokingInvitation: null,
      // Confirmation modal state
      confirmationTitle: '',
      confirmationMessage: '',
      confirmationButtonText: '',
      confirmationCallback: null,
      // Transfer clients modal state
      memberToRemove: null,
      transferToUserId: '',
    };
  },
  computed: {
    currentUserEmail() {
      try {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        return user ? user.email : '';
      } catch (error) {
        return '';
      }
    },
    availableTransferUsers() {
      // Return team members excluding the one being removed
      if (!this.team || !this.team.members || !this.memberToRemove) {
        return [];
      }
      return this.team.members.filter(m => m.id !== this.memberToRemove.id);
    }
  },
  async mounted() {
    await this.loadTeamData();
  },
  methods: {
    openInviteModal() {
      // Reset form
      this.inviteEmail = '';
      this.invitationError = null;

      // Open Bootstrap modal
      const modalElement = document.getElementById('inviteMembersModal');
      if (modalElement) {
        const modal = new window.bootstrap.Modal(modalElement);
        modal.show();
      }
    },
    showConfirmationModal(title, message, buttonText, callback) {
      this.confirmationTitle = title;
      this.confirmationMessage = message;
      this.confirmationButtonText = buttonText;
      this.confirmationCallback = callback;

      const modalElement = document.getElementById('confirmationModal');
      if (modalElement) {
        const modal = new window.bootstrap.Modal(modalElement);
        modal.show();
      }
    },
    confirmAction() {
      if (this.confirmationCallback) {
        this.confirmationCallback();
        this.confirmationCallback = null;
      }
    },
    async loadTeamData() {
      try {
        this.loading = true;
        this.error = null;

        // Get current user to find their team
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (!currentUser || currentUser.team_role === 'individual') {
          this.error = 'You are not part of a team. Only team owners and members can access this page.';
          this.loading = false;
          return;
        }

        this.isOwner = currentUser.team_role === 'team_owner';

        // Get user's team automatically using "my-team" endpoint
        try {
          const response = await get(`${getUrl('team-detail')}my-team/`, authHeader());
          this.team = response.data;
        } catch (teamError) {
          // If 404, it means no team exists - this is OK for team_owner (they can create one)
          if (teamError.response?.status === 404 && this.isOwner) {
            // No team exists yet, but that's fine - user can create one
            this.team = null;
            this.error = null;
          } else {
            // Other errors should be shown
            throw teamError;
          }
        }
      } catch (error) {
        console.error('Error loading team data:', error);
        this.error = error.response?.data?.error || 'Failed to load team data';
      } finally {
        this.loading = false;
      }
    },
    isValidEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    async sendInvitation() {
      try {
        this.sendingInvites = true;
        this.invitationError = null;

        if (!this.inviteEmail || !this.isValidEmail(this.inviteEmail)) {
          this.invitationError = 'Please enter a valid email address';
          return;
        }

        if (!this.team) {
          this.invitationError = 'No team found. Please purchase a team subscription first.';
          return;
        }

        // Send invitation
        const response = await post(
          `${getUrl('team-invite')}${this.team.id}/invite/`,
          { emails: [this.inviteEmail] },
          authHeader()
        );

        if (response.data.success || response.data.invitations_sent > 0) {
          // Close modal
          const modalElement = document.getElementById('inviteMembersModal');
          if (modalElement) {
            const modal = window.bootstrap.Modal.getInstance(modalElement);
            if (modal) {
              modal.hide();
            }
          }

          this.$toast.success('Invitation sent successfully!');
          this.inviteEmail = '';
          await this.loadTeamData();
        } else if (response.data.details && response.data.details.length > 0) {
          const result = response.data.details[0];
          this.invitationError = result.message || 'Failed to send invitation';
        }
      } catch (error) {
        console.error('Error sending invitation:', error);
        const errorMessage = error.response?.data?.error || error.response?.data?.message || 'Failed to send invitation';
        this.invitationError = errorMessage;
      } finally {
        this.sendingInvites = false;
      }
    },
    removeMember(memberId) {
      // Find the member to remove
      const member = this.team.members.find(m => m.id === memberId);
      if (!member) {
        this.$toast.error('Team member not found');
        return;
      }

      // Store member and reset transfer selection
      this.memberToRemove = member;
      this.transferToUserId = '';

      // Open transfer clients modal
      const modalElement = this.$refs.transferClientsModal;
      if (modalElement) {
        const modal = new window.bootstrap.Modal(modalElement);
        modal.show();
      }
    },
    async confirmRemoveMember() {
      if (!this.transferToUserId || !this.memberToRemove) {
        return;
      }

      const memberEmail = this.memberToRemove.user.email;

      try {
        this.removingMember = this.memberToRemove.id;

        // Close the modal
        const modalElement = this.$refs.transferClientsModal;
        const modal = window.bootstrap.Modal.getInstance(modalElement);
        if (modal) {
          modal.hide();
        }

        // Call API with transfer_to_user_id
        await post(
          `${getUrl('team-member-remove')}${this.team.id}/members/${this.memberToRemove.id}/remove/`,
          { transfer_to_user_id: this.transferToUserId },
          authHeader()
        );

        // Show success toast
        this.$toast.success(`${memberEmail} has been removed from the team`);

        // Reload team data
        await this.loadTeamData();
      } catch (error) {
        console.error('Error removing member:', error);
        const errorMessage = error.response?.data?.error || 'Failed to remove team member';
        this.$toast.error(errorMessage);
      } finally {
        this.removingMember = null;
        this.memberToRemove = null;
        this.transferToUserId = '';
      }
    },
    revokeInvitation(token) {
      // Find the invitation to get the email for the modal
      const invitation = this.team.invitations.find(inv => inv.token === token);
      const invitationEmail = invitation ? invitation.email : 'the invitation';

      // Show confirmation modal
      this.showConfirmationModal(
        'Revoke Invitation',
        `Are you sure you want to revoke the invitation for ${invitationEmail}?`,
        'Revoke',
        async () => {
          try {
            this.revokingInvitation = token;

            await post(
              `${getUrl('invitation-revoke')}${token}/revoke/`,
              {},
              authHeader()
            );

            // Show success toast
            this.$toast.success(`Invitation to ${invitationEmail} has been revoked`);

            // Reload team data
            await this.loadTeamData();
          } catch (error) {
            console.error('Error revoking invitation:', error);
            const errorMessage = error.response?.data?.error || 'Failed to revoke invitation';
            this.$toast.error(errorMessage);
          } finally {
            this.revokingInvitation = null;
          }
        }
      );
    },
    formatDate(dateString) {
      if (!dateString) return '-';
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    }
  }
};
</script>

<style scoped>
.card {
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card-header {
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}

.table {
  margin-bottom: 0;
}

.badge {
  padding: 0.35em 0.65em;
  font-size: 0.875rem;
}

/* Ensure button matches router-link styling */
button.paymentCardEditButton2 {
  background: white;
  color: inherit;
  border: 1px solid #dee2e6;
  text-decoration: none;
}

button.paymentCardEditButton2:hover {
  background: #f8f9fa;
}
</style>
