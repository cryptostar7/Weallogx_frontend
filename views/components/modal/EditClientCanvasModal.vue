<template>
     <div class="offcanvas offcanvas-end" tabindex="-1" id="editClientCanvas">
    <div class="offcanvTopDiv">
      <div class="d-flex align-items-center justify-content-between">
        <svg class="dark-user-logo-icon" width="50" height="50" viewBox="0 0 50 50" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="25" fill="#127B62" />
          <ellipse cx="25.1061" cy="18.1905" rx="6.31634" ry="6.19048" fill="#0E6651" />
          <ellipse cx="25.1061" cy="33.0474" rx="10.1061" ry="4.95238" fill="#0E6651" />
        </svg>

        <a data-bs-dismiss="offcanvas" aria-label="Close"><img src="images/icons/offcanvas-close.svg" class="img-fluid"
            alt="Close Canvas"></a>
      </div>
      <h5 class="fs-38 bold-fw">Edit Client</h5>
    </div>
    <div class="offcanvas-body">
      <form action="">
        <div class="offcanvasBodyContent">
          <div class="offcanInputDiv">
            <label for="fname" class="form-label">First Name</label>
            <input type="text" id="fname" class="form-control CanvasinputField" value="Bryant">
          </div>
          <div class="offcanInputDiv">
            <label for="lname" class="form-label">Middle Name</label>
            <label for="lname" class="optionalLabel">Optional</label>
            <input type="text" id="lname" class="form-control CanvasinputField">
          </div>
          <div class="offcanInputDiv">
            <label for="fname" class="form-label">Last Name</label>
            <input type="text" id="fname" class="form-control CanvasinputField" value="Roger">
            <!-- <p class="inputError d-none">Client already exists. <span>Add Middle Name</span>.</p> -->
          </div>
          <div class="offcanInputDiv">
            <label for="fname" class="form-label">Age <span class="ms-1">Match year 1 age on illustration</span></label>

            <input type="text" id="fname" class="form-control CanvasinputField" value="68">
          </div>

          <div class="offcanBtnDiv">
            <input type="submit" class="btn form-control SaveAddBtn" value="Save & Add New Scenario">
            <input type="submit" class="btn form-control mt-3 SaveclsBtn" value="Save & Close">
          </div>
        </div>
      </form>
    </div>
  </div>
</template>