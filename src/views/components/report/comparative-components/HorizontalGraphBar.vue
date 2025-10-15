<template>

  <div class="each-target-analysis-bar">
    <p class="heading clr1">
      {{ title }}


      <!-- <span @click="
        $store.dispatch('incomeRider/updateAnnualScheduleResultModal', {
          title: 'Annual Income Schedule',
          data: irResult.annual_income_rider_distribution
        })
        " data-bs-toggle="modal" data-bs-target="#incomeRiderScheduleTableModal">
        <svg class="ms-1" xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 13 11" fill="none">
          <rect x="0.5" y="0.5" width="11.6923" height="10" rx="0.5" stroke="black" />
          <rect x="6.1899" y="2.69772" width="0.317308" height="8.14423" rx="0.158654" stroke="black"
            stroke-width="0.317308" />
          <rect x="12.5367" y="2.69772" width="0.317308" height="12.375" rx="0.158654"
            transform="rotate(90 12.5367 2.69772)" stroke="black" stroke-width="0.317308" />
          <rect x="12.5367" y="5.23678" width="0.317308" height="12.375" rx="0.158654"
            transform="rotate(90 12.5367 5.23678)" stroke="black" stroke-width="0.317308" />
          <rect x="12.5367" y="7.77584" width="0.317308" height="12.375" rx="0.158654"
            transform="rotate(90 12.5367 7.77584)" stroke="black" stroke-width="0.317308" />
        </svg>
      </span> -->

    </p>

    <div :class="`target-analysis-each-bars ${color} text-white`"
         ref="lineBarRef1" id="line_bar_1"
         :style="{width: collapsed ? 0 : width}">

      <label class="amount-label-wrapper" style="padding-left: 8px" v-if="!collapsed">
        <span id="wider_bar_1">{{$numFormatWithDollar(value)}}</span>
      </label>

    </div>
  </div>

</template>

<script>
export default {
  props: {
    title: String,
    collapsed: Boolean,
    value: Number,
    maxValue: Number,
    color: String
  },
  computed: {
    width() {
      return this.value / this.maxValue * 100 + "%"
    }
  }

}
</script>
