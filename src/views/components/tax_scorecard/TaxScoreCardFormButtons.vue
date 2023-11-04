<template lang="">

  <div class="run-reset-btn-div">
    <a :class="`run-button ${runButtonEnabled ? '' : 'disabled'}`" @click="run">Run</a>
    <a class="reset-button" @click="reset">Reset</a>
  </div>

</template>

<script>

import { mapState } from "vuex"

export default {

  computed: {
    ...mapState({
      runButtonEnabled: state => state.data.tax_scorecard.run_button_enabled
    })
  },

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
