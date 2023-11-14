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
      this.amountFormatted = this.formatAmount(this.amount)
    },
  },

  data() {
    return {
      amount: "",
      amountFormatted: ""
    }
  },

  mounted() {
    this.amount = this.$props.default
    this.amountFormatted = this.formatAmount(this.amount)
  },
  
  methods: {

    updateAmount: function() {
      this.amount = getNumber(this.amountFormatted)
      this.amountFormatted = this.formatAmount(this.amount)
      this.$emit("amountUpdated", this.amount)
    },

    formatAmount: function(amount) {
      return amount ? this.amount.toLocaleString() : ""
    }
  }
}

</script>
