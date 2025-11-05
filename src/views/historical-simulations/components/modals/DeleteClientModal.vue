<template>
  <div class="modal fade common-modal" id="deleteSimulationClientModal" tabindex="-1" aria-labelledby="deleteSimulationClientModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><img
              src="@/assets/images/icons/cross-grey.svg" class="img-fluid" alt="Close Modal"></button>
        </div>
        <div class="modal-body text-center">
          <h5 class="modal-title fs-24 semi-bold-fw" id="deleteSimulationClientModalLabel">Delete Client?</h5>
          <p class="fs-14">Delete this client as well as all scenarios, simulations and reports related to <br> this client? This
            action cannot be undone.</p>
          <div class="d-inline-flex flex-column gap-13 pt-4 mt-2 pb-2">
            <button type="button" class="btn yes-delete-btn" data-bs-dismiss="modal" @click="$emit('deleteClient')">Yes, Delete</button>
            <button type="button" class="btn modal-cancel-btn" data-bs-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
