<template>
  <div>
    <navbar-component />
    <section class="authMaindiv-area">
      <div class="container middleContainer">
        <div class="authMainDiv">
          <img src="@/assets/images/user/auth-side-img.png" class="authImg" alt="image">

          <!-- Loading State -->
          <div v-if="loadingInvitation" class="authformRightPart">
            <div class="authInnerDiv text-center py-5">
              <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <p class="mt-3">Loading invitation details...</p>
            </div>
          </div>

          <!-- Error State -->
          <div v-else-if="errorMessage" class="authformRightPart">
            <div class="authInnerDiv text-center py-5">
              <div class="alert alert-danger" role="alert">
                <h5>Error</h5>
                {{ errorMessage }}
              </div>
              <p class="text-muted">Redirecting to sign in page...</p>
            </div>
          </div>

          <!-- Sign Up Form -->
          <form v-else class="authformRightPart" @submit.prevent="handleSignUp">
            <div class="authInnerDiv">
              <h1 class="headingArea2 fs-32">Join Team</h1>
              <p class="subheading">Create your account to accept the invitation</p>
              <span class="heading-underline"></span>

              <!-- Email (Pre-filled and disabled) -->
              <div>
                <div class="auth-form">
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    autocomplete="off"
                    :placeholder="form.email ? form.email : 'Email'"
                    disabled
                    class="bg-light"
                  />
                </div>
              </div>

              <!-- First Name and Last Name -->
              <div class="d-flex flex-gap-10">
                <div>
                  <div class="auth-form">
                    <input
                      type="text"
                      id="first_name"
                      v-model="form.first_name"
                      autocomplete="off"
                      :placeholder="form.first_name ? form.first_name : 'First Name'"
                      required
                    />
                  </div>
                  <label class="error fs-14 d-block text-center" v-if="errors.first_name">{{ errors.first_name }}</label>
                </div>
                <div>
                  <div class="auth-form">
                    <input
                      type="text"
                      id="last_name"
                      v-model="form.last_name"
                      autocomplete="off"
                      :placeholder="form.last_name ? form.last_name : 'Last Name'"
                      required
                    />
                  </div>
                  <label class="error fs-14 d-block text-center" v-if="errors.last_name">{{ errors.last_name }}</label>
                </div>
              </div>

              <!-- Phone Number -->
              <div>
                <div class="auth-form">
                  <input
                    type="tel"
                    id="phone"
                    v-model="form.phone_number"
                    autocomplete="off"
                    :placeholder="form.phone_number ? form.phone_number : 'Phone'"
                    required
                  />
                </div>
                <label class="error fs-14 d-block text-center" v-if="errors.phone_number">{{ errors.phone_number }}</label>
              </div>

              <!-- Password -->
              <div>
                <div class="auth-form">
                  <input
                    :type="showPassword ? 'text' : 'password'"
                    id="password"
                    v-model="form.password"
                    autocomplete="off"
                    :placeholder="form.password ? form.password : 'Password'"
                    required
                  />
                  <button
                    type="button"
                    class="password-toggle-btn"
                    @click="showPassword = !showPassword"
                  >
                    <svg v-if="!showPassword" width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5C7 5 2.73 8.11 1 12.5 2.73 16.89 7 20 12 20s9.27-3.11 11-7.5C21.27 8.11 17 5 12 5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor"/>
                    </svg>
                    <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" fill="currentColor"/>
                    </svg>
                  </button>
                </div>
                <label class="error fs-14 d-block text-center" v-if="errors.password">{{ errors.password }}</label>
                <PasswordRequirements
                  v-if="cognitoEnabled"
                  :password="form.password"
                  :show-requirements="true"
                  @validation-change="handlePasswordValidation"
                />
              </div>

              <!-- Confirm Password -->
              <div>
                <div class="auth-form">
                  <input
                    :type="showConfirmPassword ? 'text' : 'password'"
                    id="confirmPassword"
                    v-model="form.confirm_password"
                    autocomplete="off"
                    :placeholder="form.confirm_password ? form.confirm_password : 'Confirm Password'"
                    required
                  />
                  <button
                    type="button"
                    class="password-toggle-btn"
                    @click="showConfirmPassword = !showConfirmPassword"
                  >
                    <svg v-if="!showConfirmPassword" width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5C7 5 2.73 8.11 1 12.5 2.73 16.89 7 20 12 20s9.27-3.11 11-7.5C21.27 8.11 17 5 12 5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor"/>
                    </svg>
                    <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" fill="currentColor"/>
                    </svg>
                  </button>
                </div>
                <label class="error fs-14 d-block text-center" v-if="errors.confirm_password">{{ errors.confirm_password }}</label>
              </div>

              <!-- Terms Checkbox -->
              <div style="margin-top: 20px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <input
                    type="checkbox"
                    id="consent"
                    v-model="form.consent"
                    style="width: 20px; height: 20px;"
                    required
                  >
                  <label for="consent" style="font-size: 14px; margin: 0;">
                    I agree to the <a href="/terms" target="_blank">Terms of Service</a> and
                    <a href="/privacy" target="_blank">Privacy Policy</a>
                  </label>
                </div>
                <label class="error fs-14 d-block text-center" v-if="errors.consent">{{ errors.consent }}</label>
              </div>

              <!-- Error Message -->
              <div v-if="submitErrorMessage" class="alert alert-danger mt-3" role="alert">
                {{ submitErrorMessage }}
              </div>

              <!-- Submit Button -->
              <div class="authButtonDiv">
                <button class="btn" type="submit" :disabled="loading || !form.consent || (cognitoEnabled && !isPasswordValid)">
                  <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                  {{ loading ? 'Creating Account...' : 'Create Account' }}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    <fotter-component />
  </div>
</template>

<script>
import NavbarComponent from "../components/common/UserNavbarComponent.vue";
import FotterComponent from "../components/common/UserFooterComponent.vue";
import PasswordRequirements from "../../components/PasswordRequirements.vue";
import { post, get } from "../../network/requests";
import { getUrl } from "../../network/url";
import authService from "../../services/authService";
import { cognitoEnabled } from "../../services/amplify-config";

export default {
  name: "TeamMemberSignUpPage",
  components: {
    NavbarComponent,
    FotterComponent,
    PasswordRequirements,
  },
  data() {
    return {
      invitationToken: null,
      invitation: null,
      loadingInvitation: true,
      form: {
        email: '',
        first_name: '',
        last_name: '',
        phone_number: '',
        password: '',
        confirm_password: '',
        consent: false,
      },
      showPassword: false,
      showConfirmPassword: false,
      errors: {},
      errorMessage: '',
      submitErrorMessage: '',
      loading: false,
      cognitoEnabled: cognitoEnabled,
      isPasswordValid: false,
    };
  },
  async mounted() {
    this.invitationToken = this.$route.params.token;
    await this.loadInvitationDetails();
  },
  methods: {
    async loadInvitationDetails() {
      try {
        this.loadingInvitation = true;

        // Fetch invitation details using the token (public endpoint)
        const response = await get(`${getUrl('invitation-detail')}${this.invitationToken}/`);

        this.invitation = response.data;

        // Pre-fill email from invitation
        this.form.email = this.invitation.email;

        // Validate invitation is still pending
        if (this.invitation.status !== 'pending') {
          this.errorMessage = `This invitation has been ${this.invitation.status}.`;
          setTimeout(() => {
            this.$router.push('/sign-in');
          }, 3000);
        }
      } catch (error) {
        console.error('Error loading invitation:', error);
        this.errorMessage = 'Invalid or expired invitation.';
        setTimeout(() => {
          this.$router.push('/sign-in');
        }, 3000);
      } finally {
        this.loadingInvitation = false;
      }
    },

    handlePasswordValidation(isValid) {
      this.isPasswordValid = isValid;
    },

    validateForm() {
      this.errors = {};
      let isValid = true;

      // Validate first name
      if (!this.form.first_name.trim()) {
        this.errors.first_name = 'First name is required';
        isValid = false;
      }

      // Validate last name
      if (!this.form.last_name.trim()) {
        this.errors.last_name = 'Last name is required';
        isValid = false;
      }

      // Validate phone
      if (!this.form.phone_number.trim()) {
        this.errors.phone_number = 'Phone number is required';
        isValid = false;
      }

      // Validate password
      if (this.form.password.length < 8) {
        this.errors.password = 'Password must be at least 8 characters';
        isValid = false;
      }

      // Validate password match
      if (this.form.password !== this.form.confirm_password) {
        this.errors.confirm_password = 'Passwords do not match';
        isValid = false;
      }

      // Validate consent
      if (!this.form.consent) {
        this.errors.consent = 'You must agree to the terms and conditions';
        isValid = false;
      }

      return isValid;
    },

    async handleSignUp() {
      if (!this.validateForm()) {
        return;
      }

      this.loading = true;
      this.submitErrorMessage = '';

      try {
        // Step 1: Register the user using dedicated team member endpoint (Cognito-aware)
        const endpoint = cognitoEnabled ? 'team-member-signup-cognito' : 'team-member-signup';
        const registerPayload = {
          email: this.form.email,
          first_name: this.form.first_name,
          last_name: this.form.last_name,
          phone_number: this.form.phone_number,
          password: this.form.password,
          confirm_password: this.form.confirm_password,
          company_name: '', // Optional
        };

        console.log(`Step 1: Registering team member via ${endpoint}...`);
        const registerResponse = await post(getUrl(endpoint), registerPayload);
        console.log('Registration response:', registerResponse.data);

        // Step 2: Login automatically using authService (handles both Cognito and Django)
        console.log('Step 2: Logging in via authService...');
        const loginResult = await authService.login({
          email: this.form.email,
          password: this.form.password,
          remember_me: false
        });

        console.log('Login result:', loginResult);

        // Check if password needs reset (for Cognito lazy migration)
        if (loginResult.passwordNeedsReset) {
          this.$toast.warning('Please set a new password after login');
        }

        // Step 3: Accept the invitation
        const accessToken = authService.getAccessToken();
        console.log('Step 3: Accepting invitation with token:', accessToken);

        if (!accessToken) {
          throw new Error('Login succeeded but no access token available');
        }

        const acceptResponse = await post(
          `${getUrl('invitation-accept')}${this.invitationToken}/accept/`,
          { accept: true },
          {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
            }
          }
        );

        console.log('Invitation accepted:', acceptResponse.data);

        if (acceptResponse.data.success) {
          // Update user role to team_member in localStorage
          const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
          currentUser.team_role = 'team_member';
          localStorage.setItem('currentUser', JSON.stringify(currentUser));

          // Show success and redirect
          this.$toast.success('Account created and invitation accepted!');

          // Redirect to dashboard after short delay
          setTimeout(() => {
            this.$router.push('/profile-details');
          }, 1500);
        }

      } catch (error) {
        console.error('Sign up error:', error);
        console.error('Error response:', error.response);

        if (error.response?.data?.email || error.response?.data?.data?.email) {
          this.submitErrorMessage = 'This email is already registered. Please contact support.';
        } else if (error.response?.data?.message) {
          this.submitErrorMessage = error.response.data.message;
        } else if (error.response?.data?.error) {
          this.submitErrorMessage = error.response.data.error;
        } else {
          this.submitErrorMessage = 'Failed to create account. Please try again.';
        }

        // Show error message as toast as well
        this.$toast.error(this.submitErrorMessage);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}

.auth-form {
  position: relative;
}

.password-toggle-btn {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  color: #666;
  z-index: 10;
}

.password-toggle-btn:hover {
  color: #333;
}

.bg-light {
  background-color: #f8f9fa !important;
  cursor: not-allowed;
  opacity: 0.6;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: #6c757d !important;
}
</style>
