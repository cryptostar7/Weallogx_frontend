<template>
  <div>
    <navbar-component />
    <section class="main-section">
      <div class="inner-section">
        <!-- Left side bar -->
        <left-sidebar-component />
        <retirement-buffer-choose-category-main-section />
      </div>
    </section>
  </div>
</template>

<script>
import NavbarComponent from "./../components/common/NavbarComponent.vue";
import LeftSidebarComponent from "../components/common/LeftSidebarComponent.vue";
import RetirementBufferChooseCategoryMainSection from "./RetirementBufferChooseCategoryMainSection.vue";

export default {
  components: {
    NavbarComponent,
    LeftSidebarComponent,
    RetirementBufferChooseCategoryMainSection,
  },
};
</script>
