<template>
  <div class="modal fade common-modal common-modal-responsive" id="IndexShareModal" tabindex="-1"
    aria-labelledby="IndexShareModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><img
              src="@/assets/images/icons/cross-grey.svg" class="img-fluid" alt="Close Modal"></button>
        </div>
        <div class="modal-body">
          <p class="modalSharePara text-center">Share Report</p>
          <div class="d-flex align-items-center justify-content-center w-100">
            <div class="d-flex align-items-center section-heading-bg modalHeadingDiv">
              <button class="modalReportBuilderBr">Br</button>
              <h2 class="modalReportBuilderBrTxt">Bryant, Roger <span>Allianz Parse</span></h2>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-10 offset-md-1 mt-4">
                <p class="modalShareLinksPara m-0">Email Link</p>
                <p class="modalSmallborder m-0"></p>
                <button class="mt-2 modalAnyOneViewBtn">
                  <img src="@/assets/images/icons/web-icon.svg" alt="web">
                  Anyone with the link can view
                  <img src="@/assets/images/icons/right-arrow-icon.svg" alt="">
                </button>

                <div class="modalShareReportForm mt-2 form-group">
                  <form action="javascript:void(0)">
                    <label for="email">Email(s)</label>
                    <input type="email" class="form-control" id="email">
                    <label for="message" class="mt-3">Message</label>
                    <textarea name="" id="message" class="form-control" rows="2"></textarea>
                    <div class="mt-3 d-flex align-items-center">
                      <div class="radioBtnDiv r2" id="button-2">
                        <input type="checkbox" class="checkbox2" checked id="modalShareRadioIndex" />
                        <div class="knobs2"></div>
                        <div class="layer2"></div>
                      </div>
                      <label for="modalShareRadioIndex" class="includePdfTxtModal">Include PDF</label>
                    </div>
                    <div class="d-flex justify-content-center">
                      <div class="d-inline-flex flex-column gap-13 pt-4 mt-2 pb-2">
                        <button type="button" class="btn yes-delete-btn">Build Report</button>
                      </div>
                    </div>
                    <p class="modalShareLinksPara m-0 mt-4">Copy Link</p>
                    <p class="modalSmallborder m-0"></p>
                    <div class="d-flex justify-content-between">
                      <button class="mt-2 modalAnyOneViewBtn">
                        <img src="@/assets/images/icons/web-icon.svg" alt="web">
                        Anyone with the link can view
                        <img src="@/assets/images/icons/right-arrow-icon.svg" alt="">
                      </button>
                      <button class="copyBtnModal">Copy</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
