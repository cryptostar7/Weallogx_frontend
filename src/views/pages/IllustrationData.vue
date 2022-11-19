<script setup>
import IllustrationDataMainSection from '../components/illustration/IllustrationDataMainSection.vue';
import DeleteColomnModal from '../components/modal/DeleteColomnModal.vue';
import NavbarComponent from "./../components/common/NavbarComponent.vue";
</script>
<template>
    <navbar-component />
    <illustration-data-main-section />   
    <delete-colomn-modal /> 
</template>
<script>
export default {
    components:{NavbarComponent, IllustrationDataMainSection, DeleteColomnModal}
}
</script>
