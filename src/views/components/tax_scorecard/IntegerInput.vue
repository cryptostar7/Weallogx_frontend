<template>
  <input v-model="value" @input="updateValue" />
</template>

<script>

import { getNumber } from "../../../services/helper"

export default {

  props: ["default", "max", "allowZero"],
  emits: ["valueUpdated"],

  watch: {
    default: function(defaultvalue) {
      this.value = defaultvalue
      this.previousValue = defaultvalue
    },
  },

  data() {
    return {
      value: "",
      previousValue: ""
    }
  },

  mounted() {
    this.value = this.$props.default
    this.previousValue = this.$props.default
  },
  
  methods: {

    updateValue: function() {

      if (!this.value) {
        this.$emit("valueUpdated", null)
        return
      }

      this.value = getNumber(this.value)

      if (this.$props.max && this.value > this.$props.max) {
        this.value = this.previousValue
        return
      }

      if (this.value == 0 && (this.$props.allowZero == undefined || !this.$props.allowZero)) {
        this.value = this.previousValue
        return
      }

      this.previousValue = this.value
      this.$emit("valueUpdated", this.value)
    }
  }
}

</script>
