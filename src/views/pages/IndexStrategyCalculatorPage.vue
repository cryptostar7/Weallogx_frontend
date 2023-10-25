<template>
  <div>
    <navbar-component />
    <section class="main-section">
      <div class="inner-section">
        <LeftSidebarComponent />
        <main class="right-area">
          <div class="right-area-inner p-relative rightInnerDarkbg">
            <div class="right-area-wrapper pt-0 pb-5">
              <section class="strategy-calc-main-section mt-3 pt-4">
                <div class="strategy-calc-main-div">
                  <div class="index-strategy-head-div">
                    <h1>Index Strategy Calculator</h1>
                    <a href="#" class="back d-none"
                      ><img
                        src="@/assets/images/icons/back-small.svg"
                        alt="Back"
                      />
                      Back to Parameters Screen</a
                    >
                  </div>
                  <!-- Main section start -->
                  <index-strategy-calculator-main-component />
                  <!-- Main section end -->
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </section>
  </div>
</template>
<script>
import NavbarComponent from "./../components/common/NavbarComponent.vue";
import LeftSidebarComponent from "./../components/common/LeftSidebarComponent.vue";
import IndexStrategyCalculatorMainComponent from "./../components/isc/IndexStrategyCalculatorMainComponent.vue";
export default {
  components: {
    NavbarComponent,
    LeftSidebarComponent,
    IndexStrategyCalculatorMainComponent,
  },
};
</script>
