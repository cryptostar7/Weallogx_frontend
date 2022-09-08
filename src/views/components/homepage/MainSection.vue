<template lang="">
  <section class="main-section">
    <div class="inner-section">
      <LeftSidebarComponent />
      <main class="right-area">
        <div class="right-area-inner p-relative rightInnerDarkbg">
          <div class="right-area-wrapper">
            <ChooseClientNavbar />
            <div class="client-list-div">
              <ul v-if="clients.length > 0" class="nav flex-column client-list-ul">
                <IndividualClientRow :clients="clients"/>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>
<script>
import LeftSidebarComponent from "../common/LeftSidebarComponent.vue";
import ChooseClientNavbar from "../homepage/ChooseClientNavbar.vue";
import IndividualClientRow from "../homepage/IndividualClientRow.vue";
import testClients from "../../../services/dummy-json.js";

export default {
  components: { LeftSidebarComponent, ChooseClientNavbar, IndividualClientRow },
  data() {
    return {
      clients: testClients,
    };
  },
};
</script>
<style lang="">
</style>
