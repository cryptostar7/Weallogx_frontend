<template lang="">
  <div class="main-cleint-name-div mb-3 rightInnerDarkbg">
    <div class="mb-3" id="upperGoBackBtn">
        <router-link to="/" class="btn common-round-btn">
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="7.52051" y="15.0483" width="10.0006" height="2.5" rx="1.25" transform="rotate(-135 7.52051 15.0483)" fill="black" />
                <rect x="0.450195" y="7.87451" width="9.99563" height="2.5" rx="1.25" transform="rotate(-45 0.450195 7.87451)" fill="black" />
            </svg>
        </router-link>
    </div>
    <div class="d-flex flex-wrap flex-md-nowrap topClientDiv">
        <div class="me-10 d-none" id="lowerGoBackBtn">
            <router-link to="/" class="btn common-round-btn">
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="7.52051" y="15.0483" width="10.0006" height="2.5" rx="1.25"  transform="rotate(-135 7.52051 15.0483)" fill="black" />
                    <rect x="0.450195" y="7.87451" width="9.99563" height="2.5" rx="1.25" transform="rotate(-45 0.450195 7.87451)" fill="black" />
                </svg>
            </router-link>
        </div>
        <div v-if="$props.client" class="d-flex">
            <span class="main-client-initials fs-16 medium-fw"><span class="initial-text">{{$sortName($props.client.firstname, $props.client.lastname, $props.client.middlename)}}</span></span>
            <div>
                <h2 class="fs-38 bold-fw main-client-heading mb-0 me-2 pe-1">
                    {{$clientName($props.client.firstname, $props.client.lastname, $props.client.middlename)}}
                </h2>
                <label class="main-client-age-label fs-12 medium-fw">
                    <span>AGE</span>&nbsp;<span>{{$props.client.age || ""}}</span>
                </label>
            </div>
        </div>
        <div>
            <button class="btn common-round-btn" data-bs-toggle="offcanvas" data-bs-target="#editClientCanvas">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"  d="M10.8172 1.59583H2.33885C1.29631 1.59583 0.451172 2.44097 0.451172 3.4835V12.1384C0.451172 13.1809 1.29631 14.026 2.33885 14.026H10.9937C12.0362 14.026 12.8814 13.1809 12.8814 12.1384V4.69293L10.8814 6.69291V12.026H2.45117V3.59583H8.81725L10.8172 1.59583Z" fill="#9D9D9D" />
                    <path d="M5.51465 9.51606L6.66809 6.70245L8.3313 8.30895L5.51465 9.51606Z" fill="#9D9D9D" />
                    <path d="M12.7425 0.604405C12.7865 0.560484 12.8575 0.559852 12.9022 0.602984L14.4181 2.06566C14.4639 2.10987 14.4646 2.18305 14.4196 2.22811L8.37761 8.28205C8.33363 8.32611 8.26244 8.32672 8.21773 8.28341L6.69811 6.8118C6.6524 6.76754 6.65182 6.69441 6.69682 6.64942L12.7425 0.604405Z" fill="#9D9D9D" />
                </svg>
            </button>
        </div>
    </div>
</div>
</template>
<script>
export default {
  props: ["client"],
};
</script>
<style lang="">
</style>