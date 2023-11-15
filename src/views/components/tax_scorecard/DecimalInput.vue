<template>
  <input v-model="value" @input="updateValue" />
</template>

<script>

export default {

  props: ["default", "max"],
  emits: ["valueUpdated"],

  watch: {
    default: function(defaultvalue) {
      if (this.value != defaultvalue) {
        this.value = defaultvalue
        this.previousValue = defaultvalue
      }
    },
  },

  data() {
    return {
      value: "",
      previousValue: ""
    }
  },

  mounted() {
    this.value = this.$props.default ? parseFloat(this.$props.default) : ""
    this.previousValue = this.value
  },
  
  methods: {

    updateValue: function() {

      if (!this.value) {
        this.$emit("valueUpdated", null)
        return
      }

      if (this.value == ".") {
        this.value = "0."
      }

      if (isNaN(this.value)) {
        this.value = this.previousValue
        return
      }

      if (this.$props.max && this.value > parseFloat(this.$props.max)) {
        this.value = this.previousValue
        return
      }

      this.previousValue = this.value
      this.$emit("valueUpdated", parseFloat(this.value))
    }
  }
}

</script>
