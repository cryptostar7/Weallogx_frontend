<script setup>
import { RouterView } from "vue-router";
import Loader from "./views/components/common/Loader.vue";
import DevPanel from "./views/components/common/DevPanel.vue";
</script>
<template>
  <div>
    <RouterView />
    <loader />
  </div>
  <DevPanel />
</template>
