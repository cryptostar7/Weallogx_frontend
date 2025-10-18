<template>

  <div class="vertical-graph-bar">

    <div :class="`${color}`" :style="{height: collapsed ? 0 : height}">

        <div :class="`${color}`" @click="toggleCollapsed">

          <button :class="`btn table-chevron-btn white ${collapsed ? 'collapsed' : 'up'}`">
          </button>

          <p class="p-relative">
            {{title}}
          </p>

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
    color: String,
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
