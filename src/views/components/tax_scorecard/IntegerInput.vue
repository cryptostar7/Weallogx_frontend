<template>
  <input v-model="valueFormatted" @input="updateValue" />
</template>

<script>

import { getNumber } from "../../../services/helper"

export default {

  props: ["default"],
  emits: ["valueUpdated"],

  watch: {
    default: function(defaultvalue) {
      this.value = defaultvalue
      this.valueFormatted = this.formatValue(this.value)
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
    this.valueFormatted = this.formatValue(this.value)
  },
  
  methods: {

    updateValue: function() {
      this.value = getNumber(this.valueFormatted)
      this.valueFormatted = this.formatValue(this.value)
      this.$emit("valueUpdated", this.value)
    },

    formatValue: function(value) {
      return value ? value : ""
    }
  }
}

</script>
