<template>
  <input v-model="amountFormatted" @input="updateAmount" />
</template>

<script>

import { getNumber } from "../../../services/helper"

export default {

  props: ["default"],
  emits: ["amountUpdated"],

  watch: {
    default: function(defaultAmount) {
      this.amount = defaultAmount
      this.amountFormatted = this.amount.toLocaleString()
    },
  },

  data() {
    return {
      amount: this.$props.default,
      amountFormatted: this.$props.default.toLocaleString()
    };
  },

  methods: {
    updateAmount: function(v) {
      this.amount = getNumber(this.amountFormatted)
      this.amountFormatted = this.amount.toLocaleString()
      this.$emit("amountUpdated", this.amount)
    }
  }
}

</script>
