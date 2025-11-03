<template>
  <div class="password-requirements" v-if="showRequirements">
    <div class="requirements-header">
      <small class="text-muted">Password must contain:</small>
    </div>
    <ul class="requirements-list">
      <li :class="{'requirement-met': hasMinLength, 'requirement-unmet': !hasMinLength}">
        <i :class="hasMinLength ? 'fas fa-check-circle text-success' : 'far fa-circle text-muted'"></i>
        At least 8 characters
      </li>
      <li :class="{'requirement-met': hasUppercase, 'requirement-unmet': !hasUppercase}">
        <i :class="hasUppercase ? 'fas fa-check-circle text-success' : 'far fa-circle text-muted'"></i>
        One uppercase letter (A-Z)
      </li>
      <li :class="{'requirement-met': hasLowercase, 'requirement-unmet': !hasLowercase}">
        <i :class="hasLowercase ? 'fas fa-check-circle text-success' : 'far fa-circle text-muted'"></i>
        One lowercase letter (a-z)
      </li>
      <li :class="{'requirement-met': hasNumber, 'requirement-unmet': !hasNumber}">
        <i :class="hasNumber ? 'fas fa-check-circle text-success' : 'far fa-circle text-muted'"></i>
        One number (0-9)
      </li>
      <li :class="{'requirement-met': hasSpecialChar, 'requirement-unmet': !hasSpecialChar}">
        <i :class="hasSpecialChar ? 'fas fa-check-circle text-success' : 'far fa-circle text-muted'"></i>
        One special character (!@#$%^&*)
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, watch } from 'vue';

export default {
  name: 'PasswordRequirements',
  props: {
    password: {
      type: String,
      default: ''
    },
    showRequirements: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { emit }) {
    // Validation rules
    const hasMinLength = computed(() => props.password.length >= 8);
    const hasUppercase = computed(() => /[A-Z]/.test(props.password));
    const hasLowercase = computed(() => /[a-z]/.test(props.password));
    const hasNumber = computed(() => /[0-9]/.test(props.password));
    const hasSpecialChar = computed(() => /[!@#$%^&*]/.test(props.password));

    // Overall validation
    const isValid = computed(() =>
      hasMinLength.value &&
      hasUppercase.value &&
      hasLowercase.value &&
      hasNumber.value &&
      hasSpecialChar.value
    );

    // Watch password changes and emit validation status
    watch(() => props.password, () => {
      emit('validation-change', isValid.value);
    }, { immediate: true });

    return {
      hasMinLength,
      hasUppercase,
      hasLowercase,
      hasNumber,
      hasSpecialChar,
      isValid
    };
  }
};
</script>

<style scoped>
.password-requirements {
  margin-top: 10px;
  padding: 12px;
  background-color: #f8f9fa;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.requirements-header {
  margin-bottom: 8px;
}

.requirements-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.requirements-list li {
  padding: 4px 0;
  font-size: 0.875rem;
  transition: all 0.2s ease;
}

.requirements-list li i {
  margin-right: 8px;
  width: 16px;
}

.requirement-met {
  color: #198754;
}

.requirement-unmet {
  color: #6c757d;
}

.text-success {
  color: #198754 !important;
}

.text-muted {
  color: #6c757d !important;
}
</style>
