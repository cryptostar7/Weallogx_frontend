let mode = localStorage.getItem("mode");
document.body.classList.add(mode);
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

