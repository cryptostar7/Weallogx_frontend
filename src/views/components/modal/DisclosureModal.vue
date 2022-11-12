<template lang="">
  <div class="modal fade common-modal disclosure-modal" id="disclosureRequiredModal" tabindex="-1" aria-labelledby="disclosureRequiredLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
            <img src="@/assets/images/icons/cross-grey.svg" class="img-fluid" alt="Close Modal"></button>
        </div>
        <div class="modal-body text-center">
          <h5 class="modal-title fs-24 semi-bold-fw" id="disclosureRequiredLabel">Disclosure Required</h5>
          <p class="fs-14">A discourse is required. You may use the default disclosure <br> or use your own.</p>
          <div class="d-inline-flex flex-column gap-13 pt-4 mt-2 pb-2">
            <button type="button" class="btn yes-delete-btn">Use Default</button>
            <button type="button" class="btn modal-cancel-btn">Use My Own</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="">
  
</style>