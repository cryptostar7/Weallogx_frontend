<template lang="">
    <div class="dropdown theme-btn-dropdown">
        <button class="btn theme-btn dropdown-toggle no-after" role="button" :id="`newDropdownBtn${type}`"
        data-bs-toggle="dropdown" aria-label="false"><span>Theme</span>
        </button>
        <ul class="dropdown-menu"  :aria-labelledby="`newDropdownBtn${type}`">
        <li cla v-for="theme in $store.state.app.themes" :key="theme.value" @click="$store.dispatch('theme', theme.value)">
            <a class="dropdown-item semi-bold-fw d-flex justify-content-between align-items-center"
            href="javascript:void(0)">
            <span class="dropdown-item-list">{{theme.name}}</span>
            <div :class="`round ms-2 light-mode-${theme.color}`">
                <input type="radio" class="themeRadioCheck" :id="theme.value" :checked="theme.value === $store.state.app.current_theme" />
                <label :for="theme.value"></label>
            </div>
            </a>
        </li>
        </ul>
    </div>
</template>
<script>
export default {
  props: ["type"],
  mounted() {
    document.body.classList.add(this.$store.state.app.current_theme);
    if (this.$store.state.app.full_screen) {
      this.$store.dispatch("fullScreen");
    }
  },
};
</script>
<style lang="">
</style>