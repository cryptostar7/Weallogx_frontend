<template lang="">
    <li v-for="(item, index) in filteredList" :key="index" class="nav-item p-0 p-0" id="parentCollapse1">
        <div class="client-with-actions indexSenarioInnerBg">
            <div class="client-name semi-bold-fw fs-18">
                <span class="name-initial-circle">{{$sortName(`${item.firstname.trim()} ${item.lastname.trim()}`)}}</span>
                <router-link :to="`/individual-client/${item.id}`" class="nav-link px-0">
                <span class="name-span">{{ item.firstname }}</span>
                    <svg width="9" height="12" viewBox="0 0 9 12" fill="none" class="ms-1"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="2.41797" width="8" height="2.5" rx="1.25" transform="rotate(45 2.41797 0)"
                        fill="black" />
                        <rect x="8.07422" y="5.76562" width="8" height="2.5" rx="1.25"
                        transform="rotate(135 8.07422 5.76562)" fill="black" />
                    </svg>
                </router-link>
            </div>
            <div class="right-action-btns">
                <div class="right-action-btn-div p-relative">
                    <button type="button" data-bs-toggle="collapse" :data-bs-target="`#scenarioCollapse${index}`"
                        class="btn right-action-btn collapsed" aria-expanded="false">Scenarios
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.56303 1.06185L5.32039 5.30449C4.92986 5.69501 4.92986 6.32818 5.32039 6.7187C5.71091 7.10923 6.34408 7.10923 6.7346 6.7187L10.9772 2.47606C11.3678 2.08554 11.3678 1.45237 10.9772 1.06185C10.5867 0.671325 9.95355 0.671325 9.56303 1.06185Z"
                            fill="black" />
                        <path
                            d="M6.7183 5.30448L2.47566 1.06184C2.08514 0.671319 1.45197 0.671319 1.06145 1.06184C0.670923 1.45237 0.670923 2.08553 1.06145 2.47606L5.30409 6.7187C5.69461 7.10922 6.32778 7.10922 6.7183 6.7187C7.10883 6.32817 7.10883 5.69501 6.7183 5.30448Z"
                            fill="black" />
                        </svg>
                    </button>
                    <router-link to="/create-new-scenario" class="nav-link p-0 plus-sign">+</router-link>
                </div>
                <div class="right-action-btn-div p-relative">
                    <button type="button" data-bs-toggle="collapse" :data-bs-target="`#reportCollapse${index}`"
                        class="btn right-action-btn collapsed" aria-expanded="false">Reports
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.56303 1.06185L5.32039 5.30449C4.92986 5.69501 4.92986 6.32818 5.32039 6.7187C5.71091 7.10923 6.34408 7.10923 6.7346 6.7187L10.9772 2.47606C11.3678 2.08554 11.3678 1.45237 10.9772 1.06185C10.5867 0.671325 9.95355 0.671325 9.56303 1.06185Z"
                            fill="black" />
                        <path d="M6.7183 5.30448L2.47566 1.06184C2.08514 0.671319 1.45197 0.671319 1.06145 1.06184C0.670923 1.45237 0.670923 2.08553 1.06145 2.47606L5.30409 6.7187C5.69461 7.10922 6.32778 7.10922 6.7183 6.7187C7.10883 6.32817 7.10883 5.69501 6.7183 5.30448Z"
                            fill="black" />
                        </svg>
                    </button>
                    <router-link to="/report-builder" class="nav-link p-0 plus-sign" @click="() => $store.dispatch('modal', 'create_report_modal')">+</router-link>
                </div>
                <div class="dropdown three-dots-dropdown">
                    <button class="btn dropdown-toggle no-after three-dots-btn" data-bs-toggle="dropdown"
                        aria-expanded="false"><img src="@/assets/images/icons/three-dots.svg" class="img-fluid"
                        alt="Three Dots"></button>
                    <ul class="dropdown-menu common-dropdown-menu">
                        <li><a class="dropdown-item semi-bold-fw" href="javascript:void(0)" data-bs-toggle="offcanvas"
                            data-bs-target="#editClientCanvas" @click="$emit('setActionId', item.id)"><img src="@/assets/images/icons/edit.svg" class="img-fluid me-3"
                            alt="Edit"> <span>Edit</span></a>
                        </li>
                        <li><a class="dropdown-item semi-bold-fw" href="javascript:void(0)"
                            data-bs-target="#deleteClientModal" data-bs-toggle="modal"  @click="$emit('setActionId', item.id)" ><img
                            src="@/assets/images/icons/delete.svg" class="img-fluid me-3" alt="Delete">
                            <span>Delete</span></a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="list-groups collapse indexSenarioBg" :id="`scenarioCollapse${index}`" :data-bs-parent="`#parentCollapse${index}`">
            <h4 class="bold-fw fs-22 ScenariosHeadingTxt">Scenarios
                <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.41797" width="8" height="2.5" rx="1.25" transform="rotate(45 2.41797 0)"
                    fill="black" />
                <rect x="8.07422" y="5.76562" width="8" height="2.5" rx="1.25"
                    transform="rotate(135 8.07422 5.76562)" fill="black" />
                </svg>
            </h4>
            <div v-if="item.senarios && item.senarios.length > 0" class="list-div">
                <ScenariosRow :senarios="item.senarios" />
            </div>
        </div>

        <div class="list-groups collapse indexSenarioBg" :id="`reportCollapse${index}`" :data-bs-parent="`#parentCollapse${index}`">
            <h4 class="bold-fw fs-22 reporth4Head">Reports 
                <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.41797" width="8" height="2.5" rx="1.25" transform="rotate(45 2.41797 0)" fill="black"/>
                <rect x="8.07422" y="5.76562" width="8" height="2.5" rx="1.25" transform="rotate(135 8.07422 5.76562)" fill="black"/>
                </svg>
            </h4>
            <div class="list-div">
                <ReportRow :reports="item.reports"/>
            </div>
        </div>
    </li>
    <div class="m-2">
        <h4 class="text-center" :style="{'color':'grey'}" v-if="filteredList && filteredList.length < 1">Result not found.</h4>
    </div>
</template>
<script>
import ScenariosRow from "../homepage/ScenariosRow.vue";
import config from "../../../services/config.js";
import ReportRow from "../homepage/ReportRow.vue";
import getSortName from "../../../services/sort_name.js";

export default {
  props: ["clients", "search"],
  emits: ["setActionId"],
  components: { ScenariosRow, ReportRow },
  data() {
    return {
      senarioLimit: config.SCENARIO_LIST_LIMIT,
      reportLimit: config.SCENARIO_LIST_LIMIT,
    };
  },
  methods: {

  },
  computed: {
    clientList() {
      return this.$props.clients;
    },
    filteredList() {
      return this.clientList.filter(item => {
        return item.firstname && item.firstname
          .toLowerCase()
          .includes(this.$props.search.toLowerCase());
      });
    },
  },
};
</script>
<style lang="">
</style>