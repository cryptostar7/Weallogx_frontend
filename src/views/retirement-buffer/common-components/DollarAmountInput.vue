<template>
  <input v-model="amountFormatted" :class="$props.class" @input="updateAmount" />
</template>

<script>

import { getNumber } from "../../../services/helper"

export default {

  props: ["default", "max", "class"],
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
      previousAmount: "",
      amountFormatted: ""
    }
  },

  mounted() {
    this.amount = this.$props.default
    this.previousAmount = this.amount
    this.amountFormatted = this.formatAmount(this.amount)
  },
  
  methods: {
    updateAmount: function() {

      this.amount = getNumber(this.amountFormatted)

      if (this.$props.max && this.amount > this.$props.max) {
        this.amount = this.previousAmount
      } else {
        this.previousAmount = this.amount
      }

      this.amountFormatted = this.formatAmount(this.amount)
      this.$emit("amountUpdated", this.amount)
    },

    formatAmount: function(amount) {
      return amount ? this.amount.toLocaleString('en-US') : ""
    }
  }
}

</script>
