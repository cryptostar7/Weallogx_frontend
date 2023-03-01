<script setup>
import IllustrationDataMainSection from '../components/illustration/IllustrationDataMainSection.vue';
import NavbarComponent from "./../components/common/NavbarComponent.vue";
</script>
<template>
<div>
    <navbar-component />
    <illustration-data-main-section />   
</div>
</template>
<script>
export default {
    components:{NavbarComponent, IllustrationDataMainSection}
}
</script>
