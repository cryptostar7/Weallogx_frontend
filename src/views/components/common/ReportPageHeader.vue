<template lang="">
  <nav class="navbar navbar-expand-lg fixed-top report-top-navbar normal_navbar">
    <div class="container-fluid">
      <a class="navbar-brand backToscenario" href="index.html">
        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="4.9502" width="7" height="2" rx="1" transform="rotate(-45 0 4.9502)" fill="black" />
          <rect x="1.41406" y="3.84473" width="7" height="2" rx="1" transform="rotate(45 1.41406 3.84473)"
            fill="black" />
        </svg>
        Back to Scenario</a>
      <button class="navbar-toggler menu-icon-report-btn" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#b1b0b0"
          class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a href="javascript:void(0)" class="btn my-2 my-lg-0 navbar-nav-scroll saveReportBtn">Save Report</a>
          </li>
          <li class="nav-item text-center">
            <a href="javascript:void(0)" class="btn my-2 my-lg-0 navbar-nav-scroll dwnldReportBtn">
              <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="17" y="15" width="2" height="4" rx="1" transform="rotate(-180 17 15)" fill="black" />
                <rect x="2" y="15" width="2" height="4" rx="1" transform="rotate(-180 2 15)" fill="black" />
                <rect x="9.5" y="10" width="2" height="10" rx="1" transform="rotate(-180 9.5 10)" fill="black" />
                <rect x="8.5" y="10.6562" width="2" height="6" rx="1" transform="rotate(-135 8.5 10.6562)"
                  fill="black" />
                <rect x="4.19922" y="6.41406" width="2" height="6" rx="1" transform="rotate(-45 4.19922 6.41406)"
                  fill="black" />
                <rect y="13" width="17" height="2" rx="1" fill="black" />
              </svg>
            </a>
          </li>
          <li class="nav-item text-center">
            <a href="javascript:void(0)" class="btn my-2 my-lg-0 navbar-nav-scroll frwrdReportBtn"
              data-bs-target="#reportShareModal" data-bs-toggle="modal">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 14.5V11C1.5 5 8.5 5 8.5 5L14 5.00007" stroke="black" stroke-width="2"
                  stroke-linecap="round" />
                <rect x="12.0625" y="0.802734" width="6.0001" height="2" rx="1" transform="rotate(45 12.0625 0.802734)"
                  fill="black" />
                <rect x="16.3047" y="5.1582" width="6" height="2" rx="1" transform="rotate(135 16.3047 5.1582)"
                  fill="black" />
              </svg>
            </a>
          </li>
        </ul>
        <div class="dropdown theme-btn-dropdown ms-auto text-center">
          <button class="btn theme-btn themeBtnDropResponsive dropdown-toggle no-after" role="button"
            id="newDropdownBtn2" data-bs-toggle="dropdown" aria-label="false">Theme
          </button>
          <ul class="dropdown-menu theme-dropdown-responsive" aria-labelledby="newDropdownBtn2">
            <li><a class="dropdown-item semi-bold-fw d-flex justify-content-between align-items-center"
                href="javascript:void(0)" data-mode="light-green">
                <span>Light Mode Green</span>
                <div class="round ms-2 light-mode-green">
                  <input type="radio" name="modeRadio" id="light-green" />
                  <label for="light-green"></label>
                </div>
              </a></li>
            <li><a class="dropdown-item semi-bold-fw d-flex justify-content-between align-items-center"
                href="javascript:void(0)" data-mode="light-blue">
                <span>Light Mode Blue</span>
                <div class="round ms-2 light-mode-blue">
                  <input type="radio" name="modeRadio" id="light-blue" />
                  <label for="light-blue"></label>
                </div>
              </a></li>
            <li><a class="dropdown-item semi-bold-fw d-flex justify-content-between align-items-center"
                href="javascript:void(0)" data-mode="dark-green">
                <span>Dark Mode Green</span>
                <div class="round ms-2 dark-mode-green">
                  <input type="radio" name="modeRadio" id="dark-green" />
                  <label for="dark-green"></label>
                </div>
              </a></li>
            <li><a class="dropdown-item semi-bold-fw d-flex justify-content-between align-items-center"
                href="javascript:void(0)" data-mode="dark-blue">
                <span>Dark Mode Blue</span>
                <div class="round ms-2 dark-mode-blue">
                  <input type="radio" name="modeRadio" id="dark-blue" />
                  <label for="dark-blue"></label>
                </div>
              </a></li>
          </ul>
        </div>
        <a href="javascript:void(0)" class="btn ms-3 my-2 my-lg-0 navbar-nav-scroll presentationModeBtn prstnBtnResponsive">
          <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_1_94760" fill="white">
              <rect x="1" y="0.75" width="15" height="13" rx="1" />
            </mask>
            <rect x="1" y="0.75" width="15" height="13" rx="1" fill="transparent" stroke="white" stroke-width="3"
              mask="url(#path-1-inside-1_1_94760)" />
            <rect x="8.125" y="13.125" width="0.75" height="4.25" rx="0.375" fill="transparent" stroke="white"
              stroke-width="0.75" />
            <rect x="7.33984" y="13.628" width="0.75" height="5.25" rx="0.375" transform="rotate(45 7.33984 13.628)"
              fill="transparent" stroke="white" stroke-width="0.75" />
            <rect x="13.3681" y="17.3398" width="0.75" height="5.25" rx="0.375" transform="rotate(135 13.3681 17.3398)"
              fill="transparent" stroke="white" stroke-width="0.75" />
            <mask id="path-5-inside-2_1_94760" fill="white">
              <rect y="0.75" width="17" height="5" rx="1" />
            </mask>
            <rect y="0.75" width="17" height="5" rx="1" fill="transparent" stroke="white" stroke-width="3"
              mask="url(#path-5-inside-2_1_94760)" />
          </svg>
          &nbsp;&nbsp;Presentation Mode&nbsp;&nbsp;<svg width="7" height="10" viewBox="0 0 7 10" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect x="1.83203" y="0.414062" width="6.0001" height="1.5" rx="0.75" transform="rotate(45 1.83203 0.414062)"
              fill="white" />
            <rect x="6.07422" y="4.76953" width="6" height="1.5" rx="0.75" transform="rotate(135 6.07422 4.76953)"
              fill="white" />
          </svg>
        </a>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  mounted() {
    let mode = localStorage.getItem("mode");
    document.body.classList.add(mode);

    let openModalWithClientCreation = localStorage.getItem(
      "openModalWithClientCreation"
    );
    let openModalWithScenarioCreation = localStorage.getItem(
      "openModalWithScenarioCreation"
    );
    let openModalWithReportChange = localStorage.getItem(
      "openModalWithReportChange"
    );

    if (openModalWithClientCreation == "Yes") {
      var myModal = new bootstrap.Modal(
        document.getElementById("reportCreateModal2")
      );
      myModal.show();
      localStorage.setItem("openModalWithClientCreation", "No");
    }
    if (openModalWithScenarioCreation == "Yes") {
      var myModal = new bootstrap.Modal(
        document.getElementById("reportCreateModal")
      );
      myModal.show();
      localStorage.setItem("openModalWithScenarioCreation", "No");
    }
    if (openModalWithReportChange == "Yes") {
      var myModal = new bootstrap.Modal(
        document.getElementById("reportNameChangeModal")
      );
      myModal.show();
      localStorage.setItem("openModalWithReportChange", "No");
    }

    const modeSwitchDropdown = document.querySelector(".theme-btn-dropdown");
    const modeBtns = modeSwitchDropdown.querySelectorAll(".dropdown-item");
    modeBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        document.body.className = "";
        let mode = this.getAttribute("data-mode");
        localStorage.setItem("mode", mode);
        document.body.classList.add(mode);
        document.cookie = "mode=" + mode;
        let radio = document.getElementById(mode);
        if (radio.checked) {
          radio.checked = false;
        } else {
          radio.checked = true;
        }
      });
    });
  },
};
</script>
<style lang="">
</style>