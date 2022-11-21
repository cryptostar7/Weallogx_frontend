<template lang="">
   <div class="d-flex justify-content-center addNotesMainDiv" :style="{bottom: historical ? '9px':''}">
        <button type="button" :class="`AddNoteBtn ${active ? 'd-none':''}`" @click="() => active = true">Add Note</button>
        <div :class="`add-note-input-div ${active ? '':'d-none'}`">
            <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.
            </p>
            <div class="add-note-input-inner">
            <input type="text" class="add-note-input form-control flex-1">
            <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid"
                alt="Check" @click="() => active = false"></button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['historical'],
    data(){
        return {active:false}
    }
};
</script>
<style lang="">
</style>