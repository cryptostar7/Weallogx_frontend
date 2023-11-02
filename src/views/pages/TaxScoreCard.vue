<template>
  <div>
    <navbar-component />
     <section class="main-section">
      <div class="inner-section">
        <LeftSidebarComponent />
        <main class="right-area">
            <div class="right-area-inner p-relative rightInnerDarkbg">
                <div class="right-area-wrapper">
                    <!-- Inner Content Area Start -->
                    <section class="strategy-calc-main-section pb-4">
                        <div class="strategy-calc-main-div shadow-none">
                            <div class="index-strategy-head-div tax-scorcard">
                                <h1>Tax Scorecard</h1>
                            </div>

                            <tax-score-card-component />

                        </div>
                    </section>

                  <!-- Inner Content Area End -->
              </div>
            </div>
          </main>
      </div>
    </section>
  </div>
</template>

<script>

import { mapState } from "vuex"
import NavbarComponent from "./../components/common/NavbarComponent.vue"
import LeftSidebarComponent from "./../components/common/LeftSidebarComponent.vue"
import TaxScoreCardComponent from "../components/tax_scorecard/TaxScoreCardComponent.vue"
import { post } from "../../network/requests"
import { getUrl } from "../../network/url"
import { authHeader } from "../../services/helper"

export default {

  components: {
    NavbarComponent,
    LeftSidebarComponent,
    TaxScoreCardComponent,
  },

  computed: {
    ...mapState({
        inputs: state => state.data.tax_scorecard.inputs,
    })
  },

  data() {
    return {
      runButtonEnabled: true,  
    }
  },

  methods: {

    validateForm: function() {

      let valid = true

    //   console.log("*************", this.inputs)

      return valid
    },

    generateTaxScorecard: function() {

      if (!this.validateForm()) {
        console.warn("form invalid")
        return false;
      }

      this.$store.dispatch("loader", true);

      post(getUrl("tax_scorecard"), this.inputs, authHeader())
        .then((response) => {
          this.$store.dispatch("loader", false)
          this.$store.dispatch("updateTaxScorecardResults", response.data)
          this.$router.push("/tax-risk-analysis")
        })
        .catch((error) => {
          console.error(error)
          this.$store.dispatch("loader", false)
        })
    }
  }

};

</script>
