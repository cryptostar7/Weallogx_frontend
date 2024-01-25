<template>
    <div>
      <navbar-component />
      <section class="main-section">
        <div class="inner-section">
          <!-- Left side bar -->
          <left-sidebar-component />
          <retirement-buffer-params-main-component />
        </div>
      </section>
    </div>
  </template>
  <script>
  import NavbarComponent from "../../components/common/Navbarcomponent.vue";
  import LeftSidebarComponent from "../../components/common/LeftSidebarComponent.vue";
  import RetirementBufferParamsMainComponent from "../accumulation/components/RetirementBufferParamsMainComponent.vue";
  
  export default {
    components: {
      NavbarComponent,
      LeftSidebarComponent,
      RetirementBufferParamsMainComponent,
    },
  };
  </script>
  