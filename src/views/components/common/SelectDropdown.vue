<template lang="">
   <div :class="$props.class ?? 'form-group'">
        <label v-if="$props.label && !$props.optional" :for="$props.id ?? 'customSelectDropdown'" class="fs-14 bold-fw">{{$props.label ?? ''}}</label>
        <div v-if="$props.label && $props.optional" class="d-flex justify-content-between align-items-center mt-4 mb-1">
          <label :for="$props.id ?? 'customSelectDropdown'" class="fs-14 bold-fw">{{$props.label ?? ''}}</label>
          <label class="labelOptional">OPTIONAL</label>
        </div>
        <div class="p-relative">
        <input type="text" :id="$props.id ?? 'customSelectDropdown'" v-model="selectText" @keyup="setSortList" @focus="handleDropdown" placeholder="Select or Start Typing"
            class="form-control pe-5 autocomplete customSelectDropdown" autocomplete="off">
        <span class="chevron-span" @click="closeDropdown()">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9.56303 1.06185L5.32039 5.30449C4.92986 5.69501 4.92986 6.32818 5.32039 6.7187C5.71091 7.10923 6.34408 7.10923 6.7346 6.7187L10.9772 2.47606C11.3678 2.08554 11.3678 1.45237 10.9772 1.06185C10.5867 0.671325 9.95355 0.671325 9.56303 1.06185Z"
                fill="black" />
            <path
                d="M6.7183 5.30448L2.47566 1.06184C2.08514 0.671319 1.45197 0.671319 1.06145 1.06184C0.670923 1.45237 0.670923 2.08553 1.06145 2.47606L5.30409 6.7187C5.69461 7.10922 6.32778 7.10922 6.7183 6.7187C7.10883 6.32817 7.10883 5.69501 6.7183 5.30448Z"
                fill="black" />
            </svg>
        </span>
        <div v-if="dropdown" class="autocomplete-items">
            <div v-for="(item, index) in selectList" :key="index" @click="setInputData(item)">{{item}}</div>
        </div>
        </div>
    </div>
</template>
<script>
import { selectAutocomplete } from "../../../../src/services/custom-select-dropdown.js";

export default {
  props: ["list", "label", "id", "class", "optional"],
  data() {
    return {
      selectList: [],
      dropdown: false,
      category: {
        selectText: "",
      },
    };
  },
  methods: {
    setSortList: function (e=null) {
      this.selectList = selectAutocomplete(e.target.value, this.$props.list);
    },
    handleDropdown: function () {
      this.dropdown = true;
    },
    setInputData: function (value) {
      this.selectText = value;
      this.$emit('onSelectItem', value);
    },
    closeDropdown: function (e=null) {
      if (e) {
        if (!e.target.className.includes("customSelectDropdown")) {
          this.dropdown = false;
        } else {
          if (e.target.id !== this.id) {
            this.dropdown = false;
          }
        }
      }
    },
  },
  mounted() {
    this.selectList = this.$props.list;
    document.addEventListener("click", this.closeDropdown);
  },
};
</script>