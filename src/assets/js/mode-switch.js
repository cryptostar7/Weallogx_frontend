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

