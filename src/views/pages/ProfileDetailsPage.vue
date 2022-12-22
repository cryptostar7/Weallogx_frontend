<template lang="">
  <div>
    <navbar-component />
    <section class="authMaindiv-area">
      <div class="container middleContainer">
        <header-component />
        <div class="payment-methodMain-div paymentMiddleDivMain">
          <sidebar-component />
          <div v-if="user" class="payment-right-card-main-div dashBoardRightDiv">
            <div class="profile-edit-btn-main-div">
              <div>
                <div class="profile-detail-pp">
                  <img src="@/assets/images/user/profile-pic.png" alt="Profile Picture">
                </div>
                <p class="pro-details-name">{{`${user.first_name ? user.first_name : ''} ${user.last_name ?
                  user.last_name :
                  ''}`}}</p>
              </div>
              <div>
                <router-link to="/edit-profile" class="paymentCardEditButton2">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.8901 4.04081L16.6001 6.76081C17.0601 7.22081 17.0201 8.00081 16.6301 8.40081L8.62006 16.4208L3.06006 17.5808L4.22006 12.0008C4.22006 12.0008 11.8201 4.37081 12.2101 3.97081C12.6001 3.58081 13.4301 3.58081 13.8901 4.04081ZM11.1601 6.83081L5.57006 12.4408L6.68006 13.5508L12.2201 7.90081L11.1601 6.83081ZM8.19006 15.0608L13.7701 9.46081L12.7001 8.38081L7.11006 13.9808L8.19006 15.0608Z"
                      fill="#333333" />
                  </svg>
                  Edit</router-link>
              </div>
            </div>

            <div class="profile-all-details-mainDiv">
              <div class="profile-all-details">
                <div class="profile-each-details">
                  <img src="@/assets/images/user/business-icon.svg" alt="Profile Details">
                  <div>
                    <h6>Business Name :</h6>
                    <p>{{user.company_name}}</p>
                  </div>
                </div>
              </div>

              <div class="profile-all-details">
                <div class="profile-each-details">
                  <img src="@/assets/images/user/mail-icon.svg" alt="Profile Details">
                  <div>
                    <h6>Email Address :</h6>
                    <p>{{user.email}}</p>
                  </div>
                </div>
              </div>
              <div class="profile-all-details">
                <div class="profile-each-details" v-if="user.phone">
                  <img src="@/assets/images/user/phone-icon.svg" alt="Profile Details">
                  <div>
                    <h6>Phone Number :</h6>
                    <p>{{user.phone}}</p>
                  </div>
                </div>
              </div>
              <div class="profile-all-details" v-if="user.website">
                <div class="profile-each-details">
                  <img src="@/assets/images/user/website-icon.svg" alt="Profile Details">
                  <div>
                    <h6>Website :</h6>
                    <p>{{user.website}}</p>
                  </div>
                </div>
              </div>
              <div class="profile-all-details" v-if="user.street_address">
                <div class="profile-each-details">
                  <img src="@/assets/images/user/location-icon.svg" alt="Profile Details">
                  <div>
                    <h6>Address :</h6>
                    <p>{{user.street_address}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bottomYourCompanyLogo" v-if="user.business_logo">
              <div>
                <h6>Your Company Logo</h6>
                <div class="companyLogoDiv">
                  <!-- <img src="" alt="LOGO"> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <fotter-component />
  </div>
</template>
<script>
  import NavbarComponent from "./../components/common/UserNavbarComponent.vue";
  import FotterComponent from "./../components/common/UserFooterComponent.vue";
  import HeaderComponent from "./../components/user-dashboard/HeaderComponent.vue";
  import SidebarComponent from "./../components/user-dashboard/SidebarComponent.vue";
  import { get } from '../../network/requests';
  import { getUrl } from '../../network/url';
  import { authHeader } from '../../services/helper';
  export default {
    components: { NavbarComponent, FotterComponent, HeaderComponent, SidebarComponent },
    data() {
      return {
        user: null,
      }
    },
    methods: {
      getProfile: function () {
        this.$store.dispatch('loader', true);
        get(getUrl('profile'), authHeader()).then((response) => {
          console.log(response.data.data);
          this.user = response.data.data;
          this.$store.dispatch('user', this.user);
          this.$store.dispatch('loader', false);
        }).catch((error) => {
          console.log(error);
          this.$store.dispatch('loader', false);
        })
      },
    },
    mounted() {
      if (!this.$store.state.data.user) {
        this.getProfile();
      } else {
        this.user = this.$store.state.data.user;
      }
    },
  };
</script>
<style lang="">

</style>