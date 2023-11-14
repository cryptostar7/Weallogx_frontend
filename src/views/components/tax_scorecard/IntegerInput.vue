<template>
  <input v-model="valueFormatted" @input="updatevalue" />
</template>

<script>

import { getNumber } from "../../../services/helper"

export default {

  props: ["default"],
  emits: ["valueUpdated"],

  watch: {
    default: function(defaultvalue) {
      this.value = defaultvalue
      this.valueFormatted = this.formatvalue(this.value)
    },
  },

  data() {
    return {
      value: "",
      valueFormatted: ""
    }
  },

  mounted() {
    this.value = this.$props.default
    this.valueFormatted = this.formatvalue(this.value)
  },
  
  methods: {

    updatevalue: function() {
      this.value = getNumber(this.valueFormatted)
      this.valueFormatted = this.formatvalue(this.value)
      this.$emit("valueUpdated", this.value)
    },

    formatvalue: function(value) {
      return value ? value : ""
    }
  }
}

</script>
