<template>
  <input v-model.number="amount" :class="$props.class" type="number" />
</template>

<script>
export default {
  props: {
    default: [String, Number],
    max: Number,
    class: String,
  },
  emits: ["amountUpdated"],
  data() {
    return {
      amount: "",
      previousAmount: "",
    };
  },

  mounted() {
    this.amount = this.$props.default;
    this.previousAmount = this.amount;
  },

  watch: {
    default: function (defaultAmount) {
      this.amount = defaultAmount;
    },
    amount: function (e) {
      if ((this.$props.max && e > Number(this.$props.max)) || e < 0) {
        this.amount = this.previousAmount;
      } else {
        this.previousAmount = e;
      }
      this.$emit("amountUpdated", this.amount);
    },
  },
};
</script>
