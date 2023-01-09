<template lang="">
   <div :class="$props.class ?? 'form-group'">
      <label v-if="$props.label && !$props.optional" :for="$props.id ?? 'customSelectDropdown'" class="fs-14 bold-fw">{{$props.label ?? ''}}</label>
        <div v-if="$props.label && $props.optional" class="d-flex justify-content-between align-items-center mt-4 mb-1">
          <label :for="$props.id ?? 'customSelectDropdown'" class="fs-14 bold-fw">{{$props.label ?? ''}}</label>
          <label class="labelOptional">OPTIONAL</label>
        </div>
        <div class="p-relative">
        <input type="text" :id="$props.id ?? 'customSelectDropdown'" v-model="category.selectText" @focus="handleDropdown" placeholder="Select or Start Typing"
            class="form-control pe-5 autocomplete customSelectDropdown" @input="handleChangeEvent" autocomplete="off">
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
        <label class="error" v-if="$props.error">{{$props.error[0]}}</label>
        <div v-if="dropdown" class="autocomplete-items">
            <div v-if="$props.addNewClient && (!selectList.length || !category.selectText)"  data-bs-toggle="offcanvas" data-bs-target="#addClientCanvas" aria-controls="addClientCanvas">Create New Client</div>
            <div v-for="(item, index) in selectList" :key="index" @click="setInputValue(item.template_name, item.id)">{{item.template_name}}</div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  props: [
    "list",
    "label",
    "id",
    "class",
    "optional",
    "addNewClient",
    "defaultSelected",
    "clearInput",
    "error",
  ],
  data() {
    return {
      dropdown: false,
      category: {
        selectText: "",
      },
    };
  },
  methods: {
    handleDropdown: function() {
      this.dropdown = true;
    },
    setInputValue: function(template_name, id) {
      this.category.selectText = template_name;
      this.$emit("onSelectItem", id);
      this.$emit("inputText", template_name);
      this.$emit("clearError");
    },
    closeDropdown: function(e = null) {
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
    handleChangeEvent: function(e) {
      this.$emit("inputText", e.target.value);
      this.$emit("clearError");
    },
  },
  mounted() {
    document.addEventListener("click", this.closeDropdown);
    if (this.$props.defaultSelected) {
      this.category.selectText = this.$props.defaultSelected;
      this.$emit("inputText", this.category.selectText);
      this.$emit("clearError");
    }
  },
  computed: {
    selectList() {
      return this.$props.list.filter(item => {
        return item.name
          .toLowerCase()
          .includes(this.category.selectText.toLowerCase());
      });
    },
  },
  watch: {
    "$props.defaultSelected"(e) {
      this.category.selectText = e;
      this.$emit("inputText", e);
      this.$emit("clearError");
    },
    "$props.clearInput"(e) {
      if (Number(e)) {
        this.category.selectText = "";
        this.$emit("inputText", "");
        this.$emit("setClearedInput", 0);
        this.$emit("clearError");
      }
    },
  },
};
</script>
<style>
.error {
  color: red;
}
</style>