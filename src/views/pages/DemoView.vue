<script setup>
import SelectDropdown from "../components/common/SelectDropdown.vue";
</script>
<template lang="">
    <div class="col-6">
        <SelectDropdown :list="clients" label="Test Client"/>
    </div>
</template>
<script>
import { authCheck } from "../../services/helper.js";
export default {
  components: { SelectDropdown },
  data() {
    return {
      clients: [
        "Alberta, Carter",
        "Arnold, Krista",
        "Bryant, Roger",
        "Campbell, Willie",
        "Harrison, Maryann",
        "Peterson, Kristine",
        "Tucker, Delores ",
        "Young, Marjorie",
        "Zebra, Shelly",
      ],
    };
  },
  mounted() {
    console.log(authCheck("test"));
  },
};
</script>
<style lang="">
</style>  