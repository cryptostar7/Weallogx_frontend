<template>
  <div>
    <navbar-component />
    <section class="main-section">
      <div class="inner-section">
        <!-- Left side bar -->
        <left-sidebar-component />
        <retirement-buffer-result-main-component />
      </div>
    </section>
  </div>
</template>

<script>
import '../../../assets/css/retirement-buffer/highlight.min.css';
import '../../../assets/js/retirement-buffer/highlight.min.js';
import '../../../assets/js/chart.min.js';

import NavbarComponent from '../../components/common/NavbarComponent.vue';
import LeftSidebarComponent from '../../components/common/LeftSidebarComponent.vue';
import RetirementBufferResultMainComponent from '../accumulation/components/RetirementBufferResultMainComponent.vue';

export default {
  components: {
    NavbarComponent,
    LeftSidebarComponent,
    RetirementBufferResultMainComponent
  }
};
</script>
