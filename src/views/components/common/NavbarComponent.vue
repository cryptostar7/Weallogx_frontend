<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
    <nav class="navbar navbar-expand-lg fixed-top top-navbar report-top-navbar">
    <div class="container-fluid px-0">
      <router-link class="navbar-brand" to="/"><img src="@/assets/images/logo.png" class="img-fluid" alt="Wealthlogix Logo"></router-link>

      <div class="collapse navbar-collapse overWriteNavCollapse show" id="navbar">
        <div class="dropdown theme-btn-dropdown ms-auto">
          <button class="btn theme-btn dropdown-toggle no-after" role="button" id="newDropdownBtn2"
            data-bs-toggle="dropdown" aria-label="false"><span>Theme</span>
          </button>
          <ul class="dropdown-menu" aria-labelledby="newDropdownBtn2">
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
        <ul class="navbar-nav ms-auto my-2 my-lg-0">

          <li class="nav-item dropdown top-user-dropdown ms-4">
            <a class="nav-link dropdown-toggle no-after" href="#" id="navbarDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              <span><img src="@/assets/images/icons/user.svg" class="img-fluid" alt="User"></span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="javascript:void(0)">Logout</a></li>
            </ul>
          </li>
        </ul>
        <button id="menuBtn" class="btn menu-btn d-block d-xl-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#b1b0b0"
            class="menu-icon bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>

          <svg class="close-icon d-none bi bi-x-lg" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#b1b0b0"
             viewBox="0 0 16 16">
            <path
              d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  components : {RouterLink},
  mounted() {
    // let mode = localStorage.getItem("mode");
    // document.body.classList.add(mode);
    // const modeSwitchDropdown = document.querySelector(".theme-btn-dropdown");
    // const modeBtns = modeSwitchDropdown.querySelectorAll(".dropdown-item");
    // modeBtns.forEach(function (btn) {
    //   btn.addEventListener("click", function () {
    //     document.body.className = "";
    //     let mode = this.getAttribute("data-mode");
    //     localStorage.setItem("mode", mode);
    //     document.body.classList.add(mode);
    //     document.cookie = "mode=" + mode;
    //     let radio = document.getElementById(mode);
    //     if (radio.checked) {
    //       radio.checked = false;
    //     } else {
    //       radio.checked = true;
    //     }
    //   });
    // });

let mode = localStorage.getItem("mode");
document.body.classList.add(mode);

let openModalWithClientCreation = localStorage.getItem("openModalWithClientCreation");
let openModalWithScenarioCreation = localStorage.getItem("openModalWithScenarioCreation");
let openModalWithReportChange = localStorage.getItem("openModalWithReportChange");

if(openModalWithClientCreation == "Yes"){
    var myModal = new bootstrap.Modal(document.getElementById('reportCreateModal2'));
      myModal.show()
    localStorage.setItem("openModalWithClientCreation", "No");
}
if(openModalWithScenarioCreation == "Yes"){
    var myModal = new bootstrap.Modal(document.getElementById('reportCreateModal'));
      myModal.show()
    localStorage.setItem("openModalWithScenarioCreation", "No");
}
if(openModalWithReportChange == "Yes"){
    var myModal = new bootstrap.Modal(document.getElementById('reportNameChangeModal'));
      myModal.show()
    localStorage.setItem("openModalWithReportChange", "No");
}

const modeSwitchDropdown = document.querySelector(".theme-btn-dropdown");
const modeBtns = modeSwitchDropdown.querySelectorAll(".dropdown-item");
modeBtns.forEach(function(btn){
    btn.addEventListener("click", function(){
        document.body.className = "";
        let mode = this.getAttribute("data-mode");
        localStorage.setItem("mode", mode);
        document.body.classList.add(mode);
        document.cookie = "mode="+mode;
        let radio = document.getElementById(mode);
        if(radio.checked){
            radio.checked = false;
        }else{
            radio.checked = true;
        }

        if(mode == "light-blue" || mode == "dark-blue"){
            console.log("Yes");
            comparativeValuesData.datasets[0].borderColor = "#1660A4";
            comparativeValuesData.datasets[1].borderColor = "#0E6651";
            comparativeValues2Data.datasets[0].borderColor = "#1660A4";
            comparativeValues2Data.datasets[1].borderColor = "#0E6651";
            totalValueData.datasets[0].borderColor = "#1660A4";
            totalValueData.datasets[1].borderColor = "#0E6651";
            annualFeesData.datasets[0].borderColor = "#1660A4";
            annualFeesData.datasets[1].borderColor = "#0E6651";
            cumulativeFeesData.datasets[0].borderColor = "#1660A4";
            cumulativeFeesData.datasets[0].backgroundColor = "rgba(22, 96, 164, .3)";
            cumulativeFeesData.datasets[1].borderColor = "#0E6651";
            cumulativeFeesData.datasets[1].backgroundColor = "rgba(14, 102, 81, .5)";
            comparativeValuesChart.update();
            comparativeValues2Chart.update();
            totalValueChart.update();
            annualFeesChart.update();
            cumulativeFeesChart.update();
          }else if(mode == "light-green" || mode == "dark-green"){
            console.log("No");
            comparativeValuesData.datasets[0].borderColor = "#0E6651";
            comparativeValuesData.datasets[1].borderColor = "#1660A4";
            comparativeValues2Data.datasets[0].borderColor = "#0E6651";
            comparativeValues2Data.datasets[1].borderColor = "#1660A4";
            totalValueData.datasets[0].borderColor = "#0E6651";
            totalValueData.datasets[1].borderColor = "#1660A4";
            annualFeesData.datasets[0].borderColor = "#0E6651";
            annualFeesData.datasets[1].borderColor = "#1660A4";
            cumulativeFeesData.datasets[0].borderColor = "#0E6651";
            cumulativeFeesData.datasets[0].backgroundColor = "rgba(14, 102, 81, .5)";
            cumulativeFeesData.datasets[1].borderColor = "#1660A4";
            cumulativeFeesData.datasets[1].backgroundColor = "rgba(22, 96, 164, .3)";
             comparativeValuesChart.update();
            comparativeValues2Chart.update();
            totalValueChart.update();
            annualFeesChart.update();
            cumulativeFeesChart.update();
          }
    });
});









  },
};
</script>
