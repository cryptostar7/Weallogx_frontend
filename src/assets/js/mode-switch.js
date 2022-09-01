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
    })
});