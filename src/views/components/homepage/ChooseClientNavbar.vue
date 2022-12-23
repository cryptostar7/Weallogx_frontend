<template lang="">
    <div class="section-heading-div d-flex justify-content-between gap-20 flex-wrap flex-lg-nowrap align-items-center">
        <h2 class="fs-40 bold-fw main-tab-heading me-2">Choose Client</h2>
        <div class="search-bar-div flex-1">
        <input type="text" class="form-control search-bar-input" @keyup="(e) => $emit('updateList', e.target.value)"  placeholder="Search">
        <span class="search-icon-span"><img src="@/assets/images/icons/search.svg" aria-checked="img-fluid"
            alt="Search"></span>
        </div>
        <div class="dropdown new-btn-dropdown">
        <button class="btn new-btn dropdown-toggle no-after" role="button" id="newDropdownBtn"
            data-bs-toggle="dropdown" aria-label="false"><span class="plus">+</span> &nbsp;<span>New</span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="newDropdownBtn">
            <li><a class="dropdown-item semi-bold-fw" href="javascript:void(0)" data-bs-toggle="offcanvas"
                data-bs-target="#addClientCanvas" aria-controls="addClientCanvas"><img
                src="@/assets/images/icons/dropdown-icon-1.svg" class="img-fluid me-3" alt="New Client">
                <span>Client</span></a></li>
            <li><router-link class="dropdown-item semi-bold-fw" to="/create-new-scenario"><img
                src="@/assets/images/icons/dropdown-icon-2.svg" class="img-fluid me-3" alt="New Scenario">
                <span>Scenario</span></router-link></li>
            <li><router-link class="dropdown-item semi-bold-fw" to="/report-builder" @click="$store.dispatch('modal', 'create_new_client_report_modal')"><img
                src="@/assets/images/icons/dropdown-icon-3.svg" class="img-fluid me-3" alt="New Report">
                <span>Report</span></router-link></li>
        </ul>
        </div>
        
        <div class="sort-dropdown-div d-flex align-items-center">
        <label class="bold-fw me-2">Sort</label>
        <div class="dropdown sort-dropdown">
            <button class="btn dropdown-toggle" role="button" id="sortingBtn" data-bs-toggle="dropdown"
            aria-expanded="false">
            <span>{{currentFilter}}</span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="sortingBtn">
            <li><a :class="`dropdown-item semi-bold-fw ${currentFilter === 'Last Name (A-Z)' ? 'active' : ''}`" 
                href="javascript:void(0)" @click="() => {currentFilter = 'Last Name (A-Z)'; $emit('sortAsc')}">Last Name (A-Z)</a></li>
            <li><a :class="`dropdown-item semi-bold-fw ${currentFilter === 'Last Name (Z-A)' ? 'active' : ''}`"  href="javascript:void(0)" @click="() => {currentFilter = 'Last Name (Z-A)'; $emit('sortDesc')}">Last Name (Z-A)</a></li>
            <li><a :class="`dropdown-item semi-bold-fw ${currentFilter === 'Last Edited' ? 'active' : ''}`"  href="javascript:void(0)" @click="() => {currentFilter = 'Last Edited'; $emit('oldModified')}">Last Edited</a></li>
            <li><a :class="`dropdown-item semi-bold-fw ${currentFilter === 'First Edited' ? 'active' : ''}`"  href="javascript:void(0)" @click="() => {currentFilter = 'First Edited'; $emit('newModified')}">First Edited</a></li>
            </ul>
        </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      currentFilter: "Last Name (A-Z)",
    };
  },
};
</script>
<style lang="">
</style>