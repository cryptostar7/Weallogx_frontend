<template>
  <div>
    <navbar-component />
    <illustration-data-main-section />
  </div>
</template>
<script>
import IllustrationDataMainSection from "../components/illustration-data/IllustrationDataMainSection.vue";
import NavbarComponent from "../../components/common/NavbarComponent.vue";
export default {
  components: { NavbarComponent, IllustrationDataMainSection },
};
</script>
