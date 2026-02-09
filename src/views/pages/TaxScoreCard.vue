<template>
  <div>
    <navbar-component />
     <section class="main-section">
      <div class="inner-section">
        <LeftSidebarComponent />
        <main class="right-area">
            <div class="right-area-inner p-relative rightInnerDarkbg">
                <div class="right-area-wrapper pt-0 pb-5">
                    <!-- Inner Content Area Start -->
                    <section class="strategy-calc-main-section mt-3 pt-4">
                        <div class="strategy-calc-main-div shadow-none">
                          <div class="index-strategy-head-div tax-scorcard" style="position: relative; display: flex; justify-content: center; align-items: center;">
                              <h1 style="margin: 0; text-align: center;">Tax Scorecard</h1>
                              <div style="position: absolute; right: 0; top: 50%; transform: translateY(-50%);" class="d-flex align-items-center gap-3">
                                <a
                                  href="javascript:void(0)"
                                  @click="showVideoModal = true"
                                  class="walkthrough-button"
                                >
                                  Walkthrough
                                </a>
                              </div>
                          </div>
                          <div class="index-strategy-content-div">
                            <div class="index-strategy-content-inner-div withBoxShadow">
                              <tax-score-card-component ref="taxScorecard" />
                            </div>
                          </div>
                          <tax-score-card-form-buttons
                             :runButtonEnabled="validation.form_valid"
                             @run="generateTaxScorecard"
                             @reset="resetForm"
                          />
                      </div>
                    </section>

                  <!-- Inner Content Area End -->
              </div>
            </div>
          </main>
      </div>
    </section>

    <!-- Video Walkthrough Modal -->
    <div
      v-if="showVideoModal"
      class="modal fade show d-block"
      tabindex="-1"
      style="background-color: rgba(0, 0, 0, 0.8)"
      @click.self="showVideoModal = false"
    >
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Tax Scorecard Walkthrough</h5>
            <button
              type="button"
              class="btn-close"
              @click="showVideoModal = false"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body p-0">
            <div style="position: relative; padding-bottom: 56.25%; height: 0;">
              <iframe
                src="https://www.loom.com/embed/1e4cf0a97ac24cdca865349c645f3865?sid=1ac44a27-646a-4ef7-89b4-8295cd9e13db"
                frameborder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from "vuex"
import NavbarComponent from "./../components/common/NavbarComponent.vue"
import LeftSidebarComponent from "./../components/common/LeftSidebarComponent.vue"
import TaxScoreCardComponent from "../components/tax_scorecard/TaxScoreCardComponent.vue"
import TaxScoreCardFormButtons from "../components/tax_scorecard/TaxScoreCardFormButtons.vue"

export default {

  components: {
    NavbarComponent,
    LeftSidebarComponent,
    TaxScoreCardComponent,
    TaxScoreCardFormButtons
  },

  data() {
    return {
      showVideoModal: false,
    };
  },

  computed: {
    ...mapState({
        validation: state => state.data.tax_scorecard.validation
    })
  },

  methods: {
    generateTaxScorecard: function () {
      this.$refs.taxScorecard.generateTaxScorecard()
    },

    resetForm: function () {
      this.$refs.taxScorecard.resetForm()
    }
  }

};

</script>
<style scoped>
.walkthrough-button {
  display: inline-grid;
  place-items: center;
  padding: 0 25px;
  height: 45px;
  background: #e67e22;
  color: #fff;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 15px;
  white-space: nowrap;
}

.walkthrough-button:hover {
  background: #d35400;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
}
</style>
