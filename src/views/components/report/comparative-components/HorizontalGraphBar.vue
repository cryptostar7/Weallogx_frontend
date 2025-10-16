<template>

  <div class="each-target-analysis-bar">
    <p class="heading clr1" @click="toggleCollapsed">
      {{ title }}
      <button
        :class="`btn table-chevron-btn blue ${collapsed ? 'collapsed' : ''}`"
      >
      </button>
    </p>

    <div :class="`target-analysis-each-bars ${color} text-white`"
      ref="lineBarRef1" id="line_bar_1"
      :style="{width: collapsed ? 0 : width}"
    >
      <label class="amount-label-wrapper" style="padding-left: 8px" v-if="!collapsed">
        <span id="wider_bar_1">{{label}}</span>
      </label>
    </div>

  </div>

</template>

<script>
export default {
  props: {
    title: String,
    defaultCollapsed: Boolean,
    value: Number,
    maxValue: Number,
    color: String,
    label: String
  },
  data() {
    return {
      collapsed: true
    };
  },
  computed: {
    width() {
      return this.value / this.maxValue * 100 + "%"
    }
  },
  methods: {
    toggleCollapsed() {
        this.collapsed = !this.collapsed
    }
  },
  watch: {
    "$props.defaultCollapsed"(e) {
      this.collapsed = this.defaultCollapsed
    },
  },
}
</script>
