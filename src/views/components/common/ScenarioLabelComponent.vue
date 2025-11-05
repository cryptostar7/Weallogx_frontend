<template lang="">
    <div class="main-form-heading"> 
        <div class="heading-container">
            <h2 class="fs-34 bold-fw main-tab-heading me-2"  id="stopLoaderBtn" @click="$store.dispatch('loader', false)">
                New Scenario
            </h2>
        </div>
    </div>
</template>
<script>
export default {
    mounted(){
        document.querySelector('body').classList.add('scrolledTop');
        document.querySelector('body').scrollIntoView();                                                                            
        document.querySelector('body').classList.remove('scrolledTop');
    }
}
</script>
<style>
    body.scrolledTop {
        padding-top:50px;
    }
</style>