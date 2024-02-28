<template lang="">
  <div>
    <navbar-component />
    <section class="authMaindiv-area">
      <div class="container middleContainer">
        <header-component />
        <div class="payment-methodMain-div paymentMiddleDivMain">
          <sidebar-component />
          <div class="d-flex flex-column">
            <div
              v-if="user"
              class="w-100 payment-right-card-main-div dashBoardRightDiv"
            >
              <div class="profile-edit-btn-main-div">
                <div>
                  <div class="profile-detail-pp">
                    <img
                      :src="user.avatar ? user.avatar : UserDefaultImage"
                      alt="Profile Picture"
                    />
                  </div>
                  <p class="pro-details-name">
                    {{
                      `${user.first_name ? user.first_name : ""} ${
                        user.last_name ? user.last_name : ""
                      }`
                    }}
                  </p>
                </div>
                <div>
                  <router-link
                    to="/edit-profile"
                    class="paymentCardEditButton2"
                  >
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.8901 4.04081L16.6001 6.76081C17.0601 7.22081 17.0201 8.00081 16.6301 8.40081L8.62006 16.4208L3.06006 17.5808L4.22006 12.0008C4.22006 12.0008 11.8201 4.37081 12.2101 3.97081C12.6001 3.58081 13.4301 3.58081 13.8901 4.04081ZM11.1601 6.83081L5.57006 12.4408L6.68006 13.5508L12.2201 7.90081L11.1601 6.83081ZM8.19006 15.0608L13.7701 9.46081L12.7001 8.38081L7.11006 13.9808L8.19006 15.0608Z"
                        fill="#333333"
                      />
                    </svg>
                    Edit</router-link
                  >
                </div>
              </div>

              <div class="profile-all-details-mainDiv">
                <div class="profile-all-details">
                  <div class="profile-each-details">
                    <img
                      src="@/assets/images/user/business-icon.svg"
                      alt="Profile Details"
                    />
                    <div>
                      <h6>Business Name :</h6>
                      <p>{{ user.company_name }}</p>
                    </div>
                  </div>
                </div>

                <div class="profile-all-details">
                  <div class="profile-each-details">
                    <img
                      src="@/assets/images/user/mail-icon.svg"
                      alt="Profile Details"
                    />
                    <div>
                      <h6>Email Address :</h6>
                      <p>{{ user.email }}</p>
                    </div>
                  </div>
                </div>
                <div class="profile-all-details">
                  <div class="profile-each-details">
                    <img
                      src="@/assets/images/user/phone-icon.svg"
                      alt="Profile Details"
                    />
                    <div>
                      <h6>Phone Number :</h6>
                      <p>{{ user.phone_number }}</p>
                    </div>
                  </div>
                </div>
                <div class="profile-all-details">
                  <div class="profile-each-details">
                    <img
                      src="@/assets/images/user/website-icon.svg"
                      alt="Profile Details"
                    />
                    <div>
                      <h6>Website :</h6>
                      <p>{{ user.website }}</p>
                    </div>
                  </div>
                </div>
                <div class="profile-all-details">
                  <div class="profile-each-details">
                    <img
                      src="@/assets/images/user/location-icon.svg"
                      alt="Profile Details"
                    />
                    <div>
                      <h6>Address :</h6>
                      <p>{{ user.street_address }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bottomYourCompanyLogo" v-if="user.business_logo">
                <div>
                  <h6>Your Company Logo</h6>
                  <div class="companyLogoDiv">
                    <img
                      :src="
                        user.business_logo
                          ? user.business_logo
                          : '/business-logo-image.png'
                      "
                      alt="LOGO"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center w-100 delete-account-div mt-3 pt-1">
              <button
                class="btn"
                data-bs-target="#deleteAccountModal"
                data-bs-toggle="modal"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <fotter-component />
  </div>

  <div
    class="modal fade common-modal"
    id="deleteAccountModal"
    tabindex="-1"
    aria-labelledby="deleteReportModalLabel"
    aria-modal="true"
    role="dialog"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <img
              src="/src/assets/images/icons/cross-grey.svg"
              class="img-fluid"
              alt="Close Modal"
            />
          </button>
        </div>
        <div class="modal-body text-center">
          <h5
            class="modal-title fs-24 semi-bold-fw"
            id="deleteReportModalLabel"
          >
            Delete Account?
          </h5>
          <p class="fs-14">
            This action cannot be undone. To start again, you've to create a new
            account and proceed from the scratch.
          </p>
          <div class="d-inline-flex flex-column gap-13 pt-4 mt-2 pb-2">
            <button
              type="button"
              class="btn yes-delete-btn"
              data-bs-dismiss="modal"
              @click="accountDelete()"
            >
              Yes, Delete</button
            ><button
              type="button"
              class="btn modal-cancel-btn"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from "./../components/common/UserNavbarComponent.vue";
import FotterComponent from "./../components/common/UserFooterComponent.vue";
import HeaderComponent from "./../components/user-dashboard/HeaderComponent.vue";
import SidebarComponent from "./../components/user-dashboard/SidebarComponent.vue";
import UserIcon from "../../assets/images/icons/user.svg";
import { get, remove } from "../../network/requests";
import { getUrl } from "../../network/url";
import { authHeader, setCurrentUser } from "../../services/helper";
export default {
  components: {
    NavbarComponent,
    FotterComponent,
    HeaderComponent,
    SidebarComponent,
  },
  data() {
    return {
      user: null,
    };
  },
  methods: {
    getCurrentPlan: function () {
      get(getUrl("current_plan"), authHeader())
        .then((response) => {
          this.$store.dispatch("currentPlan", response.data.data);
          localStorage.setItem(
            "plan_active",
            response.data.data.active ? 1 : 0
          );
        })
        .catch((error) => {
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          } else {
            this.$toast.error(getFirstError(error));
          }
        });
    },
    getProfile: function () {
      this.$store.dispatch("loader", true);
      get(getUrl("profile"), authHeader())
        .then((response) => {
          this.user = response.data.data;
          this.$store.dispatch("user", this.user);
          setCurrentUser({
            first_name: this.user.first_name,
            last_name: this.user.last_name,
            role_type: this.user.role_type,
            avatar: this.user.avatar,
          });
          this.$store.dispatch("loader", false);
        })
        .catch((error) => {
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          }
          this.$store.dispatch("loader", false);
        });
    },
    accountDelete: function () {
      this.$store.dispatch("loader", true);
      remove(getUrl("delete-account"), authHeader())
        .then(() => {
            localStorage.removeItem("refresh_token");
            localStorage.removeItem("access_token");
            localStorage.removeItem("plan_active");
            localStorage.removeItem("currentUser");
            localStorage.removeItem("remember");
            this.$store.dispatch("loader", false);
            this.$store.dispatch("user", false);
            this.$toast.success('Account deleted successfully.');
            setTimeout(() => {
              window.location.href = "/sign-in";
            }, 1000)
        })
        .catch((error) => {
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          }
          this.$store.dispatch("loader", false);
        });
    },
  },
  mounted() {
    if (!this.$store.state.data.user) {
      this.getProfile();
    } else {
      this.user = this.$store.state.data.user;
    }

    let plan = this.$store.state.data.current_plan;
    if (!plan) {
      this.getCurrentPlan();
    } else {
      localStorage.setItem("plan_active", plan.active ? 1 : 0);
    }
  },
  computed: {
    UserDefaultImage() {
      return UserIcon;
    },
  },
};
</script>
