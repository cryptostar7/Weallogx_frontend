<template lang="">

  <div class="run-reset-btn-div">
    <a :class="`run-button ${runButtonEnabled ? '' : 'disabled'}`" @click="run">Run</a>
    <a class="reset-button" @click="reset">Reset</a>
  </div>

</template>

<script>

export default {

  props: ["runButtonEnabled"],

  methods: {
    run: function () {
      this.$emit("run")
    },
    reset: function () {
      this.$emit("reset")
    }
  }
}

</script>
