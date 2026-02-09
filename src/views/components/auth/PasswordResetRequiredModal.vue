<template>
  <div class="modal-overlay">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">Security Enhancement Required</h3>
        </div>

        <div class="modal-body">
          <p class="security-note">
            We have enhanced our security. Please create a new password.
          </p>

          <div class="form-group">
            <label for="newPassword" class="form-label">New Password</label>
            <div class="password-input-wrapper">
              <input
                :type="showNewPassword ? 'text' : 'password'"
                id="newPassword"
                v-model="newPassword"
                @input="validatePassword"
                class="form-control"
                :class="{ 'is-invalid': errors.newPassword }"
                placeholder="Enter new password"
                autocomplete="new-password"
              />
              <button
                type="button"
                class="pwd-toggle-btn"
                @click="showNewPassword = !showNewPassword"
              >
                {{ showNewPassword ? '👁️' : '👁️‍🗨️' }}
              </button>
            </div>
            <div v-if="errors.newPassword" class="error-text">
              {{ errors.newPassword }}
            </div>
          </div>

          <div class="form-group">
            <label for="confirmPassword" class="form-label">Confirm Password</label>
            <div class="password-input-wrapper">
              <input
                :type="showConfirmPassword ? 'text' : 'password'"
                id="confirmPassword"
                v-model="confirmPassword"
                @input="validateConfirmPassword"
                class="form-control"
                :class="{ 'is-invalid': errors.confirmPassword }"
                placeholder="Confirm new password"
                autocomplete="new-password"
              />
              <button
                type="button"
                class="pwd-toggle-btn"
                @click="showConfirmPassword = !showConfirmPassword"
              >
                {{ showConfirmPassword ? '👁️' : '👁️‍🗨️' }}
              </button>
            </div>
            <div v-if="errors.confirmPassword" class="error-text">
              {{ errors.confirmPassword }}
            </div>
          </div>

          <div class="requirements-box">
            <p class="requirements-title">Password must contain:</p>
            <ul class="requirements-list">
              <li :class="{ 'valid': validations.minLength }">✓ Minimum 8 characters</li>
              <li :class="{ 'valid': validations.hasUppercase }">✓ At least one uppercase letter</li>
              <li :class="{ 'valid': validations.hasLowercase }">✓ At least one lowercase letter</li>
              <li :class="{ 'valid': validations.hasNumber }">✓ At least one number</li>
              <li :class="{ 'valid': validations.hasSpecial }">✓ At least one special character (!@#$%^&*)</li>
            </ul>
          </div>

          <div v-if="apiError" class="alert-error">
            {{ apiError }}
          </div>

          <div v-if="successMessage" class="alert-success">
            {{ successMessage }}
          </div>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="skipForNow"
            :disabled="isSubmitting"
          >
            I'll do this later
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="submitPasswordChange"
            :disabled="!isFormValid || isSubmitting"
          >
            {{ isSubmitting ? 'Updating...' : 'Update Password' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { post } from '../../../network/requests';
import { getUrl } from '../../../network/url';
import { authHeader } from '../../../services/helper';

export default {
  name: 'PasswordResetRequiredModal',
  data() {
    return {
      newPassword: '',
      confirmPassword: '',
      showNewPassword: false,
      showConfirmPassword: false,
      isSubmitting: false,
      apiError: '',
      successMessage: '',
      errors: {
        newPassword: '',
        confirmPassword: ''
      },
      validations: {
        minLength: false,
        hasUppercase: false,
        hasLowercase: false,
        hasNumber: false,
        hasSpecial: false
      }
    };
  },
  computed: {
    isPasswordValid() {
      return Object.values(this.validations).every(v => v);
    },
    isFormValid() {
      return this.isPasswordValid &&
             this.newPassword === this.confirmPassword &&
             this.newPassword.length > 0;
    }
  },
  methods: {
    validatePassword() {
      this.errors.newPassword = '';
      const pwd = this.newPassword;

      // Update validations
      this.validations.minLength = pwd.length >= 8;
      this.validations.hasUppercase = /[A-Z]/.test(pwd);
      this.validations.hasLowercase = /[a-z]/.test(pwd);
      this.validations.hasNumber = /[0-9]/.test(pwd);
      this.validations.hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);

      // Show error if password doesn't meet requirements
      if (pwd.length > 0 && !this.isPasswordValid) {
        const missing = [];
        if (!this.validations.minLength) missing.push('8 characters');
        if (!this.validations.hasUppercase) missing.push('uppercase letter');
        if (!this.validations.hasLowercase) missing.push('lowercase letter');
        if (!this.validations.hasNumber) missing.push('number');
        if (!this.validations.hasSpecial) missing.push('special character');
        this.errors.newPassword = `Password must contain: ${missing.join(', ')}`;
      }

      // Re-validate confirm password if it's been entered
      if (this.confirmPassword) {
        this.validateConfirmPassword();
      }
    },
    validateConfirmPassword() {
      this.errors.confirmPassword = '';
      if (this.confirmPassword && this.newPassword !== this.confirmPassword) {
        this.errors.confirmPassword = 'Passwords do not match';
      }
    },
    async submitPasswordChange() {
      // Final validation
      this.validatePassword();
      this.validateConfirmPassword();

      if (!this.isFormValid) {
        return;
      }

      this.isSubmitting = true;
      this.apiError = '';
      this.successMessage = '';

      try {
        const response = await post(
          getUrl('change-password'),
          {
            new_password: this.newPassword,
            confirm_password: this.confirmPassword
          },
          authHeader()
        );

        if (response.data.status) {
          this.successMessage = 'Password updated successfully!';

          // Wait a moment then close and continue
          setTimeout(() => {
            this.$emit('continue');
          }, 1500);
        } else {
          this.apiError = response.data.message || 'Failed to update password';
          this.isSubmitting = false;
        }
      } catch (error) {
        this.isSubmitting = false;

        if (error.response && error.response.data) {
          this.apiError = error.response.data.message || 'Failed to update password';
        } else if (error.message) {
          this.apiError = error.message;
        } else {
          this.apiError = 'An error occurred while updating your password';
        }
      }
    },
    skipForNow() {
      // User chooses to skip for now
      this.$emit('continue');
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-dialog {
  width: 90%;
  max-width: 550px;
}

.modal-content {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

.modal-header {
  padding: 20px 24px;
  border-bottom: 1px solid #e5e7eb;
  background-color: #fef3c7;
}

.modal-title {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #92400e;
  text-align: center;
}

.modal-body {
  padding: 24px;
}

.security-note {
  text-align: center;
  font-size: 16px;
  color: #374151;
  margin-bottom: 24px;
  font-weight: 500;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-weight: 500;
  margin-bottom: 8px;
  color: #374151;
}

.password-input-wrapper {
  position: relative;
}

.form-control {
  width: 100%;
  padding: 12px 40px 12px 12px;
  font-size: 14px;
  border: 2px solid #d1d5db;
  border-radius: 6px;
  transition: border-color 0.2s;
}

.form-control:focus {
  outline: none;
  border-color: #2563eb;
}

.form-control.is-invalid {
  border-color: #dc2626;
}

.pwd-toggle-btn {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  padding: 4px;
}

.error-text {
  margin-top: 6px;
  font-size: 13px;
  color: #dc2626;
}

.requirements-box {
  background-color: #f9fafb;
  padding: 16px;
  border-radius: 6px;
  border-left: 4px solid #fbbf24;
  margin-bottom: 16px;
}

.requirements-title {
  font-weight: 600;
  font-size: 14px;
  color: #374151;
  margin-bottom: 10px;
}

.requirements-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.requirements-list li {
  margin-bottom: 6px;
  color: #9ca3af;
  font-size: 13px;
  transition: color 0.2s;
}

.requirements-list li.valid {
  color: #16a34a;
  font-weight: 500;
}

.alert-error {
  padding: 12px;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 6px;
  color: #dc2626;
  margin-top: 16px;
  font-size: 14px;
}

.alert-success {
  padding: 12px;
  background-color: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 6px;
  color: #16a34a;
  margin-top: 16px;
  font-size: 14px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 24px;
  border-top: 1px solid #e5e7eb;
  background-color: #f9fafb;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-secondary {
  background-color: #e5e7eb;
  color: #374151;
}

.btn-secondary:hover:not(:disabled) {
  background-color: #d1d5db;
}

.btn-primary {
  background-color: #2563eb;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background-color: #1d4ed8;
}
</style>
