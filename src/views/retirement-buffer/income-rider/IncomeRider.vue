<template>
  <div>
    <!-- there's a ton of duplicate boilerplate code here that should be moved into a shared layout view -->
    <navbar-component />
    <section class="main-section">
      <div class="inner-section">
        <left-sidebar-component />

        <div class="right-area">
          <div class="right-area-inner">
            <div class="right-area-wrapper">
              <section class="padding_right_section">
                <div class="common_box_div">
                  <div class="common_heading_div">
                    <h1>Retirement Buffer</h1>
                  </div>
                  <!-- Form -->
                  <div class="after_heading_div">
                    <div class="accumulation_strategy_div">
                      <div class="accumulation_strategy_box">
                        <!-- <retirement-buffer-params-form ref="formRef" @setAllowSubmit="(e) => allowSubmit = e"/> -->
                        <income-rider-form ref="form" @valid="setSubmitEnabled" />
                      </div>
                      <button
                        :class="`run_btn ${isSubmitEnabled ? '' : 'disable'}`"
                        @click="onSubmit"
                      >
                        Run
                      </button>
                      <button class="reset_btn" @click="resetForm">Reset</button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import LeftSidebarComponent from '@/views/components/common/LeftSidebarComponent.vue';
import NavbarComponent from '@/views/components/common/NavbarComponent.vue';
import IncomeRiderForm from './components/IncomeRiderForm.vue';

export default {
  name: 'IncomeRider',
  components: {
    IncomeRiderForm,
    LeftSidebarComponent,
    NavbarComponent,
  },
  data() {
    return {
      isSubmitEnabled: false
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.submit();
    },
    setSubmitEnabled(value) {
      this.isSubmitEnabled = value;
    }
  }
};
</script>

<style></style>
