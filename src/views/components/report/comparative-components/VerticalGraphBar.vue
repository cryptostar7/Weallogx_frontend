<template>

  <div class="vertical-graph-bar">

    <div :class="`${barColor}`" :style="{height: collapsed ? 0 : height}">

      <div v-if="!collapsed" class="value">{{value}}%</div>

      <div :class="`label ${labelColor}`" @click="toggleCollapsed">
        <button :class="`btn table-chevron-btn white ${collapsed ? 'collapsed' : 'up'}`">
        </button>
        <p>{{title}}</p>
      </div>

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
    barColor: String,
    labelColor: String,
    label: String
  },
  data() {
    return {
      collapsed: true
    };
  },
  computed: {
    height() {
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
