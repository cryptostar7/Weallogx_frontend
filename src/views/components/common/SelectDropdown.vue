<template>
  <div :class="$props.class ?? 'form-group'" id="selectDropdownMainComponent">
    <label
      v-if="$props.label && !$props.optional"
      :for="$props.id ?? 'customSelectDropdown'"
      class="fs-14 bold-fw"
    >
      {{ $props.label ?? '' }}
    </label>
    <div
      v-if="$props.label && $props.optional"
      class="d-flex justify-content-between align-items-center mt-4 mb-1"
    >
      <label class="fs-14 bold-fw" :for="$props.id ?? 'customSelectDropdown'">{{ $props.label ?? '' }}</label>
      <label class="labelOptional">OPTIONAL</label>
    </div>
    <div class="p-relative">
      <input
        :id="$props.id ?? 'customSelectDropdown'"
        ref="inputRef"
        class="form-control pe-5 autocomplete customSelectDropdown"
        autocomplete="off"
        placeholder="Select or Start Typing"
        type="text"
        @focus="dropdown = true"
        @keydown="(e) => (e.key === 'Tab' ? (dropdown = false) : false)"
        @input="handleChangeEvent"
      />
      <span class="chevron-span" @click="closeDropdown()">
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.56303 1.06185L5.32039 5.30449C4.92986 5.69501 4.92986 6.32818 5.32039 6.7187C5.71091 7.10923 6.34408 7.10923 6.7346 6.7187L10.9772 2.47606C11.3678 2.08554 11.3678 1.45237 10.9772 1.06185C10.5867 0.671325 9.95355 0.671325 9.56303 1.06185Z" fill="black" />
          <path  d="M6.7183 5.30448L2.47566 1.06184C2.08514 0.671319 1.45197 0.671319 1.06145 1.06184C0.670923 1.45237 0.670923 2.08553 1.06145 2.47606L5.30409 6.7187C5.69461 7.10922 6.32778 7.10922 6.7183 6.7187C7.10883 6.32817 7.10883 5.69501 6.7183 5.30448Z" fill="black" />
        </svg>
      </span>

      <!-- This cross button is for resetting or clearing the selection of the dropdown -->
      <button class="btn select-cross-btn d-none" type="button">
        <svg width="9" height="10" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5.78906" y="6.94922" width="8" height="1.5" rx="0.75" transform="rotate(-135 5.78906 6.94922)" fill="#8D8D8D"/>
          <rect x="0.136719" y="5.99023" width="8" height="1.5" rx="0.75" transform="rotate(-45 0.136719 5.99023)" fill="#8D8D8D"/>
        </svg>
      </button>

      <div v-if="dropdown" class="autocomplete-items" @click="(e) => e.stopPropagation()">
        <div
          v-if="$props.addNewClient && (!selectList.length || !templateText)"
          :aria-controls="`${$props.createItemModalId || 'addClientCanvas'}`"
          :data-bs-target="`#${$props.createItemModalId || 'addClientCanvas'}`"
          data-bs-toggle="offcanvas"
        >
          Create New Client
        </div>
        <span
          v-for="(item, index) in selectList"
          :key="index"
          :class="['dropdown-item-container', { 'disabled-item': item.disabled }]"
          :title="item.disabled ? item.disabledReason : ''"
        >
          <span
            @click="(e) => !item.disabled && setInputValue(item.template_name, item.id)"
            :class="['dropdown-item-text', { 'disabled-text': item.disabled }]"
          >
            {{ item.template_name }}
          </span>
          <span v-if="$props.allowDelete && !item.disabled" @click="(e) => deleteItem(item.id, item.template_name)" class="dropdown-item-delete">
            <span class="remove-btn">Remove</span>
          </span>
        </span>
      </div>
    </div>
    <small class="text-danger" v-if="$props.error">{{ $props.error[0] }}</small>
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
    "showAll",
    "createItemModalId",
    "allowDelete"
  ],
  data() {
    return {
      dropdown: false,
      templateText: "",
    };
  },
  methods: {
    setInputValue(template_name, id) {
      this.templateText = template_name;
      this.$refs.inputRef.value = template_name;
      this.$emit("onSelectItem", id);
      this.$emit("inputText", template_name);
      this.$emit("clearError");
      this.dropdown = false;
    },
    closeDropdown(e = null) {
      if (e && e.target && e.target.classList) {
        if (!e.target.classList.contains("customSelectDropdown")) {
          this.dropdown = false;
        } else {
          if (e.target.id !== this.id) {
            this.dropdown = false;
          }
        }
      }
    },
    handleChangeEvent(e) {
      this.templateText = e.target.value;
      this.$emit("inputText", e.target.value);
      this.$emit("clearError");
    },
    deleteItem(id, name) {
      this.$emit("deleteItem", { id, name });
      // Keep dropdown open after deletion
      event.stopPropagation();
    }
  },
  mounted() {
    document.addEventListener("click", this.closeDropdown);
    if (this.$props.defaultSelected) {
      this.templateText = this.$props.defaultSelected;
      this.$refs.inputRef.value = this.templateText;
      this.$emit("inputText", this.templateText);
      this.$emit("clearError");
    }
  },
  computed: {
    // retuns the dropdown list data
    selectList() {
      let list1 = this.$props.list.filter(item => {
        if (this.$props.showAll) {
          return true;
        } else {
          return (
            item.template_name &&
            item.template_name
              .toLowerCase()
              .includes(this.templateText.trim().toLowerCase())
          );
        }
      });

      let list2 = this.$props.list.filter(item => {
        if (this.$props.showAll) {
          return false;
        } else {
          return (
            item.template_name &&
            !item.template_name
              .toLowerCase()
              .includes(this.templateText.trim().toLowerCase())
          );
        }
      });

      return [...list1, ...list2];
    },
  },
  watch: {
    "$props.defaultSelected"(e) {
      if (e) {
        this.templateText = e;
        this.$refs.inputRef.value = this.templateText;
        this.$emit("inputText", e);
        this.$emit("clearError");
      }
    },
    "$props.clearInput"(e) {
      if (Number(e)) {
        this.templateText = "";
        this.$refs.inputRef.value = "";
        this.$emit("inputText", "");
        this.$emit("setClearedInput", 0);
        this.$emit("clearError");
      }
    },
  },
};
</script>

<style scoped>
.autocomplete-items {
  background-color: #fff;
}

.dropdown-item-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  background-color: #fff;
}

.dropdown-item-container:hover {
  background-color: #f5f5f5;
}

.dropdown-item-text {
  flex-grow: 1;
  cursor: pointer;
}

.dropdown-item-delete {
  margin-left: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.remove-btn {
  font-size: 12px;
  padding: 2px 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #666;
}

.remove-btn:hover {
  background-color: #f0f0f0;
  color: #333;
}

.disabled-item {
  opacity: 0.6;
  cursor: not-allowed;
}

.disabled-item:hover {
  background-color: #fff !important;
}

.disabled-text {
  color: #999;
  cursor: not-allowed;
}
</style>
