<template lang="">
  <div :class="className" ref="barRef">
    <label
      class="amount-label-wrapper"
      ref="barLabelRef"
      style="padding-left: 8px"
      >$<span ref="spanRef">{{ $numFormatNoDecimal(value) }}</span></label
    >
  </div>
</template>
<script>
export default {
  props: ["className", "value"],
  mounted() {
    this.$refs.barRef.style.width = 0 + "%";
    this.$refs.barRef.style.padding = "8px 2px";
    this.$refs.barLabelRef.style.opacity = 0;
  },
  watch: {
    "$props.value"(){
        
    }
  }
};
</script>
