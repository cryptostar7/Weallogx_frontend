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
                  <div class="index-strategy-head-div" style="position: relative; display: flex; justify-content: center; align-items: center;">
                    <h1 style="margin: 0; text-align: center;">Index Strategy Analyzer</h1>
                    <div style="position: absolute; right: 0; top: 50%; transform: translateY(-50%);" class="d-flex align-items-center gap-3">
                      <a
                        href="javascript:void(0)"
                        @click="showVideoModal = true"
                        class="walkthrough-button"
                      >
                        Walkthrough
                      </a>
                      <a href="#" class="back d-none"
                        ><img
                          src="@/assets/images/icons/back-small.svg"
                          alt="Back"
                        />
                        Back to Parameters Screen</a
                      >
                    </div>
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
            <h5 class="modal-title">Index Strategy Analyzer Walkthrough</h5>
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
                src="https://www.loom.com/embed/424bdfbf478043e89845ce77ece619cd?sid=33827da9-9425-4fbe-a221-8bd2bdb2407b"
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
import NavbarComponent from "./../components/common/NavbarComponent.vue";
import LeftSidebarComponent from "./../components/common/LeftSidebarComponent.vue";
import IndexStrategyCalculatorMainComponent from "./../components/isc/IndexStrategyCalculatorMainComponent.vue";
export default {
  components: {
    NavbarComponent,
    LeftSidebarComponent,
    IndexStrategyCalculatorMainComponent,
  },
  data() {
    return {
      showVideoModal: false,
    };
  },
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
