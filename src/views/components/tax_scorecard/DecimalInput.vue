<template>
  <input v-model="valueFormatted" @input="updateValue" />
</template>

<script>

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
    this.value = this.$props.default ? parseFloat(this.$props.default) : ""
    this.valueFormatted = this.formatValue(this.value)
  },
  
  methods: {

    updateValue: function() {
      this.value = this.formatValue(this.valueFormatted)
      this.valueFormatted = this.value
      this.$emit("valueUpdated", parseFloat(this.value))
    },

    formatValue: function(value) {

      if (!value) {
        return ""
      } else if (!isNaN(value)) {
        return value
      }

      value = parseFloat(value)
      if (isNaN(value)) {
        return ""
      } else {
        return value
      }
    }
  }
}

</script>
