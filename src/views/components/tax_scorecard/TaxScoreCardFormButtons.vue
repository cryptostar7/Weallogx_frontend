<template lang="">

  <div class="run-reset-btn-div">
    <a :class="`run-button ${runButtonEnabled ? '' : 'disabled'}`"
      @click="run">Run</a>
    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#taxScorecardModal"
      class="reset-button">Reset</a>
  </div>

</template>

<script>

import { mapState } from "vuex"

export default {

  computed: {
    ...mapState({
      runButtonEnabled: state => state.data.tax_scorecard.runButtonEnabled
    })
  },

  methods: {
    run: function () {
      this.$emit("run")
    }
  }
}

</script>
