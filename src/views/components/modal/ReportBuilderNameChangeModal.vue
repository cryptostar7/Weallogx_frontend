<template>
      <div class="modal fade common-modal" id="reportNameChangeModal" tabindex="-1"
    aria-labelledby="reportNameChangeModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header pb-0">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><img
              src="@/assets/images/icons/cross-grey.svg" class="img-fluid" alt="Close Modal"></button>
        </div>
        <div class="modal-body pt-0 text-center">

          <div class="d-flex align-items-center justify-content-center w-100">

            <div class="d-flex align-items-center section-heading-bg modalHeadingDiv">
              <button class="modalReportBuilderBr">Br</button>
              <h2 class="modalReportBuilderBrTxt">Bryant, Roger <span>Allianz Parse</span></h2>
            </div>
          </div>
          <div class="modalParaBorderDiv">
            <p class="modalParaReportBuilder">Clone Scenario</p>
            <p class="modalSmallborder"></p>
          </div>
          <div class="px-5 modalformDiv mb-0">
            <form action="">
              <div class="form-group">
                <label for="reportBulder">Name Scenario</label>
                <input type="text" class="form-control custom-control" value="Allianz Parse 2 ">
              </div>
            </form>
          </div>
          <div class="d-inline-flex flex-column gap-13 pt-4 mt-2 pb-2">
            <button type="button" class="btn yes-delete-btn">Clone this Scenario</button>
            <button type="button" class="btn modal-cancel-btn" data-bs-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>