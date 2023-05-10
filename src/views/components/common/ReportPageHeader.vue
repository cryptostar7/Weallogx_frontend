<template lang="">
  <nav class="navbar navbar-expand-lg fixed-top report-top-navbar normal_navbar"  :style="{display:$store.state.app.presentation_mode ? 'none':'block'}">
    <div class="container-fluid">
      <router-link class="navbar-brand backToscenario" :to="comparative ? `/scenario-details/${comparative.scenerio_id}` : ''" @click="testFunction()">
        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="4.9502" width="7" height="2" rx="1" transform="rotate(-45 0 4.9502)" fill="black" />
          <rect x="1.41406" y="3.84473" width="7" height="2" rx="1" transform="rotate(45 1.41406 3.84473)"
            fill="black" />
        </svg>
        Back to Scenario</router-link>
      <button class="navbar-toggler menu-icon-report-btn" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#b1b0b0"
          class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 flex-row justify-content-center">
          <li class="nav-item">
            <a href="javascript:void(0)" class="btn my-2 my-lg-0 navbar-nav-scroll saveReportBtn">Save Report</a>
          </li>
          <li class="nav-item text-center">
            <a href="javascript:void(0)" class="btn my-2 my-lg-0 navbar-nav-scroll dwnldReportBtn">
              <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="17" y="15" width="2" height="4" rx="1" transform="rotate(-180 17 15)" fill="black" />
                <rect x="2" y="15" width="2" height="4" rx="1" transform="rotate(-180 2 15)" fill="black" />
                <rect x="9.5" y="10" width="2" height="10" rx="1" transform="rotate(-180 9.5 10)" fill="black" />
                <rect x="8.5" y="10.6562" width="2" height="6" rx="1" transform="rotate(-135 8.5 10.6562)"
                  fill="black" />
                <rect x="4.19922" y="6.41406" width="2" height="6" rx="1" transform="rotate(-45 4.19922 6.41406)"
                  fill="black" />
                <rect y="13" width="17" height="2" rx="1" fill="black" />
              </svg>
            </a>
          </li>
          <li class="nav-item text-center">
            <a href="javascript:void(0)" class="btn my-2 my-lg-0 navbar-nav-scroll frwrdReportBtn"
              data-bs-target="#reportShareModal" data-bs-toggle="modal">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 14.5V11C1.5 5 8.5 5 8.5 5L14 5.00007" stroke="black" stroke-width="2"
                  stroke-linecap="round" />
                <rect x="12.0625" y="0.802734" width="6.0001" height="2" rx="1" transform="rotate(45 12.0625 0.802734)"
                  fill="black" />
                <rect x="16.3047" y="5.1582" width="6" height="2" rx="1" transform="rotate(135 16.3047 5.1582)"
                  fill="black" />
              </svg>
            </a>
          </li>
        </ul>
        <div class="d-flex justify-content-center align-items-center gap-3">
          <theme-dropdown type="2"/>
          <a href="javascript:void(0)" class="btn ms-3 my-2 my-lg-0 navbar-nav-scroll presentationModeBtn prstnBtnResponsive" @click="() => $store.dispatch('presentation', true)">
            <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="path-1-inside-1_1_94760" fill="white">
                <rect x="1" y="0.75" width="15" height="13" rx="1" />
              </mask>
              <rect x="1" y="0.75" width="15" height="13" rx="1" fill="transparent" stroke="white" stroke-width="3"
                mask="url(#path-1-inside-1_1_94760)" />
              <rect x="8.125" y="13.125" width="0.75" height="4.25" rx="0.375" fill="transparent" stroke="white"
                stroke-width="0.75" />
              <rect x="7.33984" y="13.628" width="0.75" height="5.25" rx="0.375" transform="rotate(45 7.33984 13.628)"
                fill="transparent" stroke="white" stroke-width="0.75" />
              <rect x="13.3681" y="17.3398" width="0.75" height="5.25" rx="0.375" transform="rotate(135 13.3681 17.3398)"
                fill="transparent" stroke="white" stroke-width="0.75" />
              <mask id="path-5-inside-2_1_94760" fill="white">
                <rect y="0.75" width="17" height="5" rx="1" />
              </mask>
              <rect y="0.75" width="17" height="5" rx="1" fill="transparent" stroke="white" stroke-width="3"
                mask="url(#path-5-inside-2_1_94760)" />
            </svg>
            &nbsp;&nbsp;Presentation Mode&nbsp;&nbsp;<svg width="7" height="10" viewBox="0 0 7 10" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect x="1.83203" y="0.414062" width="6.0001" height="1.5" rx="0.75" transform="rotate(45 1.83203 0.414062)"
                fill="white" />
              <rect x="6.07422" y="4.76953" width="6" height="1.5" rx="0.75" transform="rotate(135 6.07422 4.76953)"
                fill="white" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </nav>

  <nav class="navbar navbar-expand-lg fixed-top report-top-navbar presentation_navbar" :style="{display:$store.state.app.presentation_mode ? 'block':'none'}">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img :src="companyLogo.green" class="img-fluid logo-green" alt="WealthLogix Logo" width="170">
        <img :src="companyLogo.blue" class="img-fluid logo-blue" alt="WealthLogix Logo" width="170">
        <img :src="companyLogo.dark" class="img-fluid logo-dark" alt="WealthLogix Logo" width="170">
      </router-link>
      <button class="navbar-toggler menu-icon-report-btn" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <svg  xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#b1b0b0"
          class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="dropdown theme-btn-dropdown ms-auto text-center">
          <a href="javascript:void(0)" @click="handleFullscreen();"
            class="fullScreenOpenBtn btn my-2 my-lg-0 navbar-nav-scroll dwnldReportBtn d-flex justify-content-center align-items-center">
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.76139 2.59722C1.76139 1.94556 2.29028 1.41667 2.94195 1.41667H4.83084C5.0187 1.41667 5.19887 1.34204 5.3317 1.2092C5.46454 1.07636 5.53917 0.896195 5.53917 0.708333C5.53917 0.520472 5.46454 0.340304 5.3317 0.207466C5.19887 0.0746277 5.0187 0 4.83084 0H2.94195C2.25312 0 1.59251 0.273635 1.10544 0.760709C0.618362 1.24778 0.344727 1.9084 0.344727 2.59722V4.48611C0.344727 4.67397 0.419354 4.85414 0.552192 4.98698C0.685031 5.11982 0.865198 5.19444 1.05306 5.19444C1.24092 5.19444 1.42109 5.11982 1.55393 4.98698C1.68677 4.85414 1.76139 4.67397 1.76139 4.48611V2.59722ZM1.76139 14.4028C1.76139 15.0544 2.29028 15.5833 2.94195 15.5833H4.83084C5.0187 15.5833 5.19887 15.658 5.3317 15.7908C5.46454 15.9236 5.53917 16.1038 5.53917 16.2917C5.53917 16.4795 5.46454 16.6597 5.3317 16.7925C5.19887 16.9254 5.0187 17 4.83084 17H2.94195C2.25312 17 1.59251 16.7264 1.10544 16.2393C0.618362 15.7522 0.344727 15.0916 0.344727 14.4028V12.5139C0.344727 12.326 0.419354 12.1459 0.552192 12.013C0.685031 11.8802 0.865198 11.8056 1.05306 11.8056C1.24092 11.8056 1.42109 11.8802 1.55393 12.013C1.68677 12.1459 1.76139 12.326 1.76139 12.5139V14.4028ZM14.7475 1.41667C15.3992 1.41667 15.9281 1.94556 15.9281 2.59722V4.48611C15.9281 4.67397 16.0027 4.85414 16.1355 4.98698C16.2684 5.11982 16.4485 5.19444 16.6364 5.19444C16.8243 5.19444 17.0044 5.11982 17.1373 4.98698C17.2701 4.85414 17.3447 4.67397 17.3447 4.48611V2.59722C17.3447 1.9084 17.0711 1.24778 16.584 0.760709C16.0969 0.273635 15.4363 0 14.7475 0H12.8586C12.6708 0 12.4906 0.0746277 12.3577 0.207466C12.2249 0.340304 12.1503 0.520472 12.1503 0.708333C12.1503 0.896195 12.2249 1.07636 12.3577 1.2092C12.4906 1.34204 12.6708 1.41667 12.8586 1.41667H14.7475ZM15.9281 14.4028C15.9281 15.0544 15.3992 15.5833 14.7475 15.5833H12.8586C12.6708 15.5833 12.4906 15.658 12.3577 15.7908C12.2249 15.9236 12.1503 16.1038 12.1503 16.2917C12.1503 16.4795 12.2249 16.6597 12.3577 16.7925C12.4906 16.9254 12.6708 17 12.8586 17H14.7475C15.4363 17 16.0969 16.7264 16.584 16.2393C17.0711 15.7522 17.3447 15.0916 17.3447 14.4028V12.5139C17.3447 12.326 17.2701 12.1459 17.1373 12.013C17.0044 11.8802 16.8243 11.8056 16.6364 11.8056C16.4485 11.8056 16.2684 11.8802 16.1355 12.013C16.0027 12.1459 15.9281 12.326 15.9281 12.5139V14.4028Z"
                fill="black" />
            </svg>
          </a>
        </div>
        
        <a href="javascript:void(0)" @click="backToNormal()" ref="fullScreenCloseBtn"
          class="fullScreenCloseBtn btn my-2 my-lg-0 navbar-nav-scroll dwnldReportBtn d-flex justify-content-center align-items-center fullScreenCloseBtnHide">
          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2.0459" y="0.000915527" width="21.6354" height="2.40393" rx="1.20197"
              transform="rotate(45 2.0459 0.000915527)" fill="black" />
            <rect x="17.3433" y="1.70058" width="21.6354" height="2.40393" rx="1.20197"
              transform="rotate(135 17.3433 1.70058)" fill="black" />
          </svg>
        </a>
      </div>
    </div>
  </nav>


</template>
<script>
import ThemeDropdown from "./ThemeDropdown.vue";
import {
  authHeader,
  getComapanyLogo,
  setComapanyLogo ,
  setCurrentUser ,
} from "../../../services/helper";

export default {
  components: { ThemeDropdown },
  methods: {
    testFunction: function(){
      console.log(this.comparative.scenerio_id);
    },
    getProfile: function() {
      get(getUrl("profile"), authHeader())
        .then(response => {
          let user = response.data.data;
          setComapanyLogo(user.business_logo_green, user.business_logo_blue, user.business_logo_dark)
          this.$store.dispatch("user", user);
          setCurrentUser({
            first_name: user.first_name,
            last_name: user.last_name,
          });
        })
        .catch(error => {
          console.log(error);
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          } 
        });
    },
    handleFullscreen: function() {
      this.$store.dispatch("fullScreen");
    },
    backToNormal: function() {
      if (this.$store.state.app.full_screen) {
        this.$store.dispatch("fullScreen");
      }
      this.$store.dispatch("presentation", false);
    },
  },
  beforeUnmount() {
    if(this.$store.state.app.presentation_mode){
      this.$refs.fullScreenCloseBtn.click();
    }
  },
  computed:{
    companyLogo(){
      let logos = getComapanyLogo();
      return logos;
    },
    comparative() {
      return this.$store.state.data.report.comparative;
    },
  }
};
</script>
<style lang="">
</style>