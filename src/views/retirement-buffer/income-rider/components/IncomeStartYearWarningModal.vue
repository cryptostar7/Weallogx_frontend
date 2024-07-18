<template lang>
  <div>
    <div class="modal fade common-modal"
      id="mismatchIncomeStartYearWarningModal" tabindex="-1"
      aria-labelledby="mismatchIncomeStartYearWarningModalLabel"
      aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal"
              aria-label="Close">
              <img src="@/assets/images/icons/cross-grey.svg" class="img-fluid"
                alt="Close Modal">
            </button>
          </div>
          <div class="modal-body text-center">
            <img src="@/assets/images/icons/grey-error.svg" alt="Error"
              width="65" />
            <p class="fs-14 mt-3">Your non-guaranteed income start year differs
              <br> from the guaranteed income start year schedule. They must
              match. <br> Please amend one or the other so that both schedules
              <br> have the same start year.</p>
            <div class="d-inline-flex pt-4 mt-2 pb-2">
              <button type="button" class="btn modal-cancel-btn"
                data-bs-dismiss="modal"
                :data-bs-toggle="showFormModal ? 'modal' : ''"
                :data-bs-target="showFormModal ? '#incomeRideFormModal' : ''">OKAY</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['illustrateYear', 'showFormModal'],
}
</script>
<style lang></style>