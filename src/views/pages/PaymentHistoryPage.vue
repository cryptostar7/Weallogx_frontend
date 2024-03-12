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
              <table class="rwd-table">
                <tbody>
                  <tr>
                    <th>Invoice No</th>
                    <th>Date</th>
                    <th>Plans</th>
                    <th>Method</th>
                    <th>Amount</th>
                    <th></th>
                  </tr>
                  <tr>
                    <td data-th="Invoice No">
                      #JIEIOF54684
                    </td>
                    <td data-th="Date">
                      25 Oct 2022 (11:30AM)
                    </td>
                    <td data-th="Plans">
                      Yearly
                    </td>
                    <td data-th="Method">
                      Stripe
                    </td>
                    <td data-th="Amount">
                      $65.00
                    </td>
                    <td data-th="Download Invoice">
                      <a href="javascript:void(0)"><img src="@/assets/images/user/download.svg" alt="Download"></a>
                    </td>
                  </tr>
                  <tr>
                    <td data-th="Invoice No">
                      #JIEIOF54684
                    </td>
                    <td data-th="Date">
                      15 Aug 2021 (6:18 PM)
                    </td>
                    <td data-th="Plans">
                      Monthly
                    </td>
                    <td data-th="Method">
                      Stripe
                    </td>
                    <td data-th="Amount">
                      $79.00
                    </td>
                    <td data-th="Download Invoice">
                      <a href="javascript:void(0)"><img src="@/assets/images/user/download.svg" alt="Download"></a>
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
export default {
  components: {
    NavbarComponent,
    FotterComponent,
    HeaderComponent,
    SidebarComponent,
  },
};
</script>
<style lang="">
</style>