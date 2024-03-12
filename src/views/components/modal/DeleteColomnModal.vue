<template>
  <div class="modal fade common-modal" id="deleteColumnModal" tabindex="-1" aria-labelledby="deleteColumnModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><img
              src="@/assets/images/icons/cross-grey.svg" class="img-fluid" alt="Close Modal"></button>
        </div>
        <div class="modal-body text-center">
          <h5 class="modal-title fs-24 semi-bold-fw" id="deleteColumnModalLabel">Delete Selected Columns?</h5>
          <p class="fs-14">This action cannot be undone. To re-add the columns, you will need <br> to upload a PDF file or paste the CSV again.</p>
          <div class="d-inline-flex flex-column gap-13 pt-4 mt-2 pb-2">
            <button type="button" class="btn yes-delete-btn" data-bs-dismiss="modal" @click="$emit('removeCol')">Yes, Delete</button>
            <button type="button" class="btn modal-cancel-btn" data-bs-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits :['removeCol'],
}
</script>
