<template lang="">
    <div class="formParabrdrLavelDiv mt-3 mb-2">
        <p class="position-relative">Segment Duration (Years)
            <img src="@/assets/images/icons/info-icon.svg" alt="info" class="ms-1 info-icon-img">
            <img src="@/assets/images/icons/dark-i-icon.svg" alt="info" class="ms-1 dark-info-icon-img">
            <span class="info-message-segment">
                Does the strategy use a 1, 2 or 3 year crediting period?
            </span>
        </p>
        <p></p>
    </div>
    <div class="ChooseTimePeriodInputs d-flex align-items-center">
        <label class="">
            <input type="radio" name="segment-duration" class="d-none">
            <span class="timePeriodYear">1</span>
        </label>
        <label class="ms-2">
            <input type="radio" name="segment-duration" class="d-none">
            <span class="timePeriodYear">2</span>
        </label>
        <label class="ms-3">
            <input type="radio" name="segment-duration" class="d-none">
            <span class="timePeriodYear">3</span>
        </label>
    </div>
</template>
<script>
export default {};
</script>
<style lang="">
</style>