<template lang="">
  <div>
    <navbar-component />
    <section class="authMaindiv-area">
      <div class="container middleContainer">
        <header-component />
        <div class="payment-methodMain-div paymentMiddleDivMain">
          <sidebar-component />
          <div class="payment-right-card-main-div">
            <div class="paymentHistoryRightDiv">
              <!-- Loading State -->
              <div v-if="loading" class="text-center py-5">
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <p class="mt-3">Loading payment history...</p>
              </div>

              <!-- Error State -->
              <div v-else-if="error" class="alert alert-danger" role="alert">
                {{ error }}
              </div>

              <!-- Empty State -->
              <div v-else-if="invoices.length === 0" class="text-center py-5">
                <p class="text-muted">No payment history found.</p>
              </div>

              <!-- Payment History Table -->
              <table v-else class="rwd-table">
                <tbody>
                  <tr>
                    <th>Invoice No</th>
                    <th>Date</th>
                    <th>Plans</th>
                    <th>Method</th>
                    <th>Amount</th>
                    <th></th>
                  </tr>
                  <tr v-for="(invoice, index) in invoices" :key="index">
                    <td data-th="Invoice No">
                      {{ invoice['Invoice No'] }}
                    </td>
                    <td data-th="Date">
                      {{ invoice.Date }}
                    </td>
                    <td data-th="Plans">
                      {{ invoice.Plans }}
                    </td>
                    <td data-th="Method">
                      {{ invoice.Method }}
                    </td>
                    <td data-th="Amount">
                      {{ invoice.Amount }}
                    </td>
                    <td data-th="Download Invoice">
                      <a
                        v-if="invoice['Invoice PDF']"
                        :href="invoice['Invoice PDF']"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Download Invoice"
                      >
                        <img
                          src="@/assets/images/user/download.svg"
                          alt="Download"
                        >
                      </a>
                      <span v-else class="text-muted">N/A</span>
                    </td>
                  </tr>
                </tbody>
              </table>
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
import { get } from "../../network/requests";
import { getUrl } from "../../network/url";
import { authHeader } from "../../services/helper";

export default {
  components: {
    NavbarComponent,
    FotterComponent,
    HeaderComponent,
    SidebarComponent,
  },
  data() {
    return {
      invoices: [],
      loading: false,
      error: null,
    };
  },
  mounted() {
    this.fetchPaymentHistory();
  },
  methods: {
    async fetchPaymentHistory() {
      this.loading = true;
      this.error = null;

      try {
        const response = await get(getUrl("payment-history"), authHeader());

        if (response.data && response.data.status) {
          this.invoices = response.data.data || [];
        } else {
          this.error = response.data.message || "Failed to load payment history";
        }
      } catch (err) {
        console.error("Error fetching payment history:", err);

        if (err.response && err.response.data) {
          this.error = err.response.data.message || "Error loading payment history";
        } else if (err.code === "ERR_BAD_RESPONSE" || err.code === "ERR_NETWORK") {
          this.error = err.message;
        } else {
          this.error = "An unexpected error occurred";
        }
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
<style lang="">
</style>
