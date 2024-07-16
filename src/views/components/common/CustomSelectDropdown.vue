<template lang>
  <div ref="dropdownRef" :class="`select-menu accumulation_select_menu ${disabled ? 'disabled' : ''}`" :style="{'pointer-events': disabled ? 'none' : ''}">
    <div class="select-btn">
      <input
        id="indexAllocationSelect"
        class="sBtn-text"
        readonly="true"
        type="text"
        :value="dropdownValue"
      />
      <i>
        <img src="@/assets/images/icons/select-chevron.svg" alt="Chevron" />
      </i>
    </div>
    <ul class="options">
      <li
        v-for="item in options"
        :key="item"
        :class="`option ${
          dropdownValue === (item.label || item) ? 'active' : ''
        }`"
        @click="selectOption(item)"
      >
        <span class="option-text">{{ item.label || item }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    default: [String, Number],
    options: Array,
    disabled: Boolean,
  },
  data() {
    return {
      dropdownValue: "",
    };
  },
  mounted() {
    if (this.$props.default) {
      this.dropdownValue = this.$props.default;
    }

    const dropdownRef = this.$refs.dropdownRef;

    dropdownRef.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdownRef.classList.toggle("active");
    });

    document.querySelector("body").addEventListener("click", (e) => {
        if (!e.target.matches(".select-menu")) {
          dropdownRef.classList.remove("active");
        }
    });
  },
  methods: {
    selectOption(value) {
      this.dropdownValue = value.label || value;
      this.$emit("selected", value);
    },
  },
  watch: {
    default(e) {
      this.dropdownValue = e;
    },
  },
};
</script>
<style lang></style>
