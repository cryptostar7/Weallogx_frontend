<template>
  <section class="main-section mt-0 historical-mainSection marginTopNavbar">
    <div class="reviewProgressMainDiv py-5 HistoricalPositionStatic">
      <ul class="mt-1 review-progress" id="reviewProgress">
        <li class="done"><router-link :to="`/scenario-details/${this.$route.params.scenario}`" class="nav-link p-0">Scenario Details</router-link></li>
        <li class="done"><router-link :to="`/illustration-data/${this.$route.params.scenario}`" class="nav-link p-0">Illustration Data</router-link></li>
        <li class="done"><router-link :to="`/comparative-vehicles/${this.$route.params.scenario}`" class="nav-link p-0">Comparative Vehicles</router-link></li>
        <li class="active"><router-link to="" class="nav-link p-0">Historical Simulations</router-link></li>
      </ul>

      <router-link to="/" class="btn mt-1 ms-1">
        <img src="@/assets/images/icons/cross.svg" alt="cross" class="ReviewCrossBtn">
      </router-link>
    </div>
    <div class="container-fluid">
      <div class="row justify-content-center form-row">
        <div class="col-md-9">
          <div class="main-form-div">
            <div class="main-form-heading">
              <div class="heading-container">
                <h2 class="fs-34 bold-fw main-tab-heading me-2">New Scenario</h2>
              </div>
            </div>
            <div class="form-wrapper form-wrapper-responsive">
              <div class="container containerWidth">
                <div class="col-md-10 offset-md-1">
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                      <label class="historical-paraCheckBox" for="scheduleTemplateCheckbox">Historical Simulations</label>
                      <div class="form-check form-switch custom-switch ms-2">
                        <input class="form-check-input" type="checkbox" role="switch" id="scheduleTemplateCheckbox" checked>
                      </div>
                    </div>
                    <div>
                      <p class="hisToprghtpara fs-14">OPTIONAL</p>
                    </div>
                  </div>
                  <div class="after-yes-middle-div my-2">
                    <p class="afterYesMdlPara">How would you like to build your Index Strategy Allocation?</p>
                    <div class="twoBtnSwtchMainDiv nav nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                      <div class="active" id="v-pills-scratch-tab" data-bs-toggle="pill" data-bs-target="#v-pills-scratch" type="button" role="tab" aria-controls="v-pills-scratch" aria-selected="true">Create from Scratch</div>
                      <div id="v-pills-indexStrategy-tab" data-bs-toggle="pill" data-bs-target="#v-pills-indexStrategy" type="button" role="tab" aria-controls="v-pills-indexStrategy" aria-selected="false">Use Existing Index Strategy Allocation</div>
                    </div>
                    <div class="tab-content mt-5" id="v-pills-tabContent">
                      <div class="tab-pane fade show active" id="v-pills-scratch" role="tabpanel" aria-labelledby="v-pills-scratch-tab">
                      </div>
                      <div class="tab-pane fade" id="v-pills-indexStrategy" role="tabpanel"  aria-labelledby="v-pills-indexStrategy-tab">
                        <div class="container">
                          <div class="row">
                            <div class="col-md-8 offset-md-2 strategyAllocation">
                              <form action="javascript:void(0)">
                                <SelectDropdown :list="portfolio" label="Choose Existing Index Strategy Allocation"  id="historicalIndexPortfolio" class="form-group less pt-3" @inputText="(e) => portfolioName = e"/>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>                                                                                                                                                                                                                         
                  <div class="text-center mt-30">
                    <router-link :to="`/historical-simulations/${this.$route.params.scenario}`" class="nav-link btn form-next-btn active fs-14" id="nextBtnVsblOnSlct" @click="handlePortfolio()">Next</router-link>
                    <span class="d-block mb-3"></span>
                    <router-link :to="`/select-historical-simulations/${this.$route.params.scenario}`" class="nav-link btn form-back-btn fs-14">
                    <img src="@/assets/images/icons/chevron-left-grey.svg" class="img-fluid" alt="Chevron" width="6"> Back</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { get } from "../../../network/requests";
import { getUrl } from "../../../network/url";
import { authHeader } from "../../../services/helper";
import SelectDropdown from "../common/SelectDropdown.vue";

export default {
  components: { SelectDropdown },
  data() {
    return {
      portfolio: [],
      portfolioName: "",
    };
  },
  methods: {
    handlePortfolio: function(id) {
      return this.$router.push(
        `/historical-simulations/${
          this.$route.params.scenario
        }?pid=${this.getPortfolioId()}`
      );
    },
    getPortfolioId: function() {
      var temp = this.portfolio.filter(
        i => i.template_name === this.portfolioName
      )[0];
      return temp ? temp.id : null;
    },
    setPortfolioName: function(e) {
      this.portfolioName = e;
    },
  },
  mounted() {
    this.$store.dispatch("loader", true);
    get(getUrl("historical-portfolio"), authHeader())
      .then(response => {
        this.portfolio = response.data.data.map(item => {
          return { id: item.id, template_name: item.portfolio_name };
        });
        this.$store.dispatch("loader", false);
      })
      .catch(error => {
        console.log(error);
        if (error.code === "ERR_BAD_RESPONSE" || error.code === "ERR_NETWORK") {
          this.$toast.error(error.message);
        }
        this.$store.dispatch("loader", false);
      });
  },
};
</script>
