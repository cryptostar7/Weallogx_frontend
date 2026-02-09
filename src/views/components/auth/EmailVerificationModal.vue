<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">Verify Your Email</h3>
          <button type="button" class="close-btn" @click="closeModal" aria-label="Close">
            &times;
          </button>
        </div>

        <div class="modal-body">
          <p class="mb-3">
            We've sent a 6-digit verification code to:
          </p>
          <p class="email-display">{{ email }}</p>

          <div class="verification-code-input">
            <label for="verificationCode" class="form-label">Verification Code</label>
            <input
              type="text"
              id="verificationCode"
              v-model="verificationCode"
              @input="formatCode"
              @keyup.enter="verifyCode"
              maxlength="6"
              placeholder="000000"
              class="form-control"
              :disabled="isVerifying"
              autocomplete="off"
            />
            <p class="help-text">Enter the 6-digit code from your email</p>
          </div>

          <div v-if="error" class="alert-error">
            {{ error }}
          </div>

          <div v-if="successMessage" class="alert-success">
            {{ successMessage }}
          </div>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="closeModal"
            :disabled="isVerifying"
          >
            Cancel
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="verifyCode"
            :disabled="!isCodeValid || isVerifying"
          >
            {{ isVerifying ? 'Verifying...' : 'Verify' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authService from '../../../services/authService';

export default {
  name: 'EmailVerificationModal',
  props: {
    email: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      verificationCode: '',
      isVerifying: false,
      error: '',
      successMessage: ''
    };
  },
  computed: {
    isCodeValid() {
      return this.verificationCode.length === 6 && /^\d{6}$/.test(this.verificationCode);
    }
  },
  methods: {
    formatCode() {
      // Only allow digits
      this.verificationCode = this.verificationCode.replace(/\D/g, '');
      // Clear error when user types
      this.error = '';
    },
    async verifyCode() {
      if (!this.isCodeValid) {
        this.error = 'Please enter a valid 6-digit code';
        return;
      }

      this.isVerifying = true;
      this.error = '';
      this.successMessage = '';

      try {
        const response = await authService.verifyEmail(this.email, this.verificationCode);

        if (response.data && response.data.status) {
          this.successMessage = 'Email verified successfully!';

          // Wait a moment to show success message, then emit verified event
          setTimeout(() => {
            this.$emit('verified');
          }, 500);
        } else {
          this.error = response.data?.message || 'Verification failed. Please try again.';
          this.isVerifying = false;
        }
      } catch (error) {
        this.isVerifying = false;

        if (error.response && error.response.data) {
          this.error = error.response.data.message || 'Invalid verification code. Please try again.';
        } else if (error.message) {
          this.error = error.message;
        } else {
          this.error = 'Verification failed. Please try again.';
        }
      }
    },
    closeModal() {
      if (!this.isVerifying) {
        this.$emit('close');
      }
    }
  },
  mounted() {
    // Auto-focus the input field when modal opens
    this.$nextTick(() => {
      const input = document.getElementById('verificationCode');
      if (input) {
        input.focus();
      }
    });
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
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-dialog {
  width: 90%;
  max-width: 500px;
}

.modal-content {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #e5e7eb;
}

.modal-title {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #111827;
}

.close-btn {
  background: none;
  border: none;
  font-size: 28px;
  line-height: 1;
  color: #6b7280;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
}

.close-btn:hover {
  color: #111827;
}

.modal-body {
  padding: 24px;
}

.email-display {
  font-weight: 600;
  color: #2563eb;
  background-color: #eff6ff;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 24px;
  text-align: center;
}

.verification-code-input {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-weight: 500;
  margin-bottom: 8px;
  color: #374151;
}

.form-control {
  width: 100%;
  padding: 12px;
  font-size: 18px;
  border: 2px solid #d1d5db;
  border-radius: 6px;
  text-align: center;
  letter-spacing: 8px;
  font-weight: 600;
  transition: border-color 0.2s;
}

.form-control:focus {
  outline: none;
  border-color: #2563eb;
}

.form-control:disabled {
  background-color: #f3f4f6;
  cursor: not-allowed;
}

.help-text {
  margin-top: 8px;
  font-size: 14px;
  color: #6b7280;
  text-align: center;
}

.alert-error {
  padding: 12px;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 6px;
  color: #dc2626;
  margin-top: 16px;
}

.alert-success {
  padding: 12px;
  background-color: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 6px;
  color: #16a34a;
  margin-top: 16px;
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

.mb-3 {
  margin-bottom: 12px;
}
</style>
