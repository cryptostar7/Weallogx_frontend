<script setup>
import NavbarComponent from "../components/common/NavbarComponent.vue";
import ComparativeVehicleMainSection from "../components/comparative/ComparativeVehicleMainSection.vue";
import DeleteReportModal from "../components/modal/DeleteReportModal.vue";
</script>
<template>
  <navbar-component />
  <comparative-vehicle-main-section />
  <delete-report-modal />
</template>
<script>
export default {
  components: {
    NavbarComponent,
    ComparativeVehicleMainSection,
    DeleteReportModal,
  },
  mounted() {
    // Unchecking the checkbox leaving only the first one active
    let vehicleInputCheckboxes = document.querySelector(
      ".comparative-vehicle-tabs input[type=checkbox]"
    );

    for (let i = 0; i < vehicleInputCheckboxes.length; i++) {
      if (i == 0) {
        continue;
      } else {
        vehicleInputCheckboxes[i].checked = false;
      }
    }

    const templateNameDiv = document.getElementById("templateNameDiv");
    const scheduleTemplateCheckbox = document.getElementById(
      "scheduleTemplateCheckbox"
    );

    // Percentage Inputs
    const percentInputs = document.querySelectorAll(".percent-input");

    percentInputs.forEach(function (percentInput) {
      percentInput.addEventListener("input", function (e) {
        let parentDiv = e.target.closest(".percent-input-div");
        let len = e.target.value.length;
        if (len > 3) {
          actualValue = e.target.value.slice(0, len - 1);
          e.target.value = actualValue;
          alert("Please enter valid percentage value.");
          return false;
        }
        if (len == 0) {
          e.target.value = "";
          parentDiv.classList.remove("hide-percent");
        } else {
          e.target.value = `${e.target.value}%`;
          let valuewithPercent = `${e.target.value.split("%").join("")}%`;
          e.target.value = valuewithPercent;
          parentDiv.classList.add("hide-percent");
        }
      });

      percentInput.addEventListener("keydown", function (e) {
        let parentDiv = e.target.closest(".percent-input-div");
        if (e.keyCode == 8) {
          let len = e.target.value.length;
          valueAfterDelete = e.target.value.slice(0, len - 2);
          let valuewithPercent = `${valueAfterDelete}%`;
          e.target.value = valuewithPercent;

          if (len <= 2) {
            e.target.value = "";
            parentDiv.classList.remove("hide-percent");
          } else {
            parentDiv.classList.add("hide-percent");
          }
        }
      });
    });

    const comparativeVehiclePortfolios = [
      "Portfolio 1",
      "Portfolio 2",
      "Portfolio 3",
      "Portfolio 4",
      "Portfolio 5",
      "Portfolio 6",
    ];

    // Autocomplete dropdown for Clien List
    function autocomplete(inp, arr) {
      var currentFocus;
      inp.addEventListener("focus", function (e) {
        console.log("focused");
        var a,
          b,
          i,
          val = this.value;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          b = document.createElement("DIV");
          b.innerHTML = arr[i];
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          b.addEventListener("click", function (e) {
            inp.value = this.getElementsByTagName("input")[0].value;
            closeAllLists();
          });
          a.appendChild(b);
        }
      });

      inp.addEventListener("input", function (e) {
        var a,
          b,
          i,
          val = this.value;
        closeAllLists();
        if (!val) {
          return false;
        }
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          if (
            arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase() ||
            arr[i].toUpperCase().includes(val.toUpperCase())
          ) {
            b = document.createElement("DIV");
            b.innerHTML = arr[i].substr(0, val.length);
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            b.addEventListener("click", function (e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
            });
            a.appendChild(b);
          }
        }
      });

      /* Execute a function presses a key on the keyboard: */
      inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) {
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
      });

      function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = x.length - 1;
        x[currentFocus].classList.add("autocomplete-active");
      }

      function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
          x[i].classList.remove("autocomplete-active");
        }
      }

      function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
          if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
          }
        }
      }
      document.addEventListener("click", function (e) {
        closeAllLists(e.target);
      });
    }
    autocomplete(
      document.getElementById("existingComparativeVehiclePortfolio"),
      comparativeVehiclePortfolios
    );

    const VehicleType = ["Taxable", "Pre-Tax", "Tax-Deferred"];

    // Autocomplete1 dropdown for Clien List
    function autocomplete1(inps, arrs) {
      var currentFocus;
      inps.addEventListener("focus", function (e) {
        console.log("focused");
        var a,
          b,
          i,
          val = this.value;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete1-list");
        a.setAttribute("class", "autocomplete1-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arrs.length; i++) {
          b = document.createElement("DIV");
          b.innerHTML = arrs[i];
          b.innerHTML += "<input type='hidden' value='" + arrs[i] + "'>";
          b.addEventListener("click", function (e) {
            inps.value = this.getElementsByTagName("input")[0].value;
            inps.value;

            // show form div according to vehicle type
            if (inps.value == "Tax-Deferred") {
              document
                .getElementById("noVehicleTyupeSelectPadd")
                .classList.remove("noVehicleTyupeSelectPadd");
              document
                .getElementById("taxableArea1")
                .classList.remove("vehicleaTypeArea");
              document
                .getElementById("capitalGainTaxInputs1")
                .classList.add("capitalDisplayNone");
              document.getElementById("capitalGainLabel1").innerHTML =
                "Pre Age 59 ½ Penalty";
              document.getElementById("capitalGainTax1").checked = true;
              document.querySelector(
                ".preAfeCapitalSwtch"
              ).style.pointerEvents = "none";
            } else if (inps.value == "Taxable") {
              document.getElementById("capitalGainTax1").checked = false;
              document
                .getElementById("noVehicleTyupeSelectPadd")
                .classList.remove("noVehicleTyupeSelectPadd");
              document
                .getElementById("taxableArea1")
                .classList.remove("vehicleaTypeArea");
              document.getElementById("capitalGainLabel1").innerHTML =
                "Capital Gains Tax";
              document.querySelector(
                ".preAfeCapitalSwtch"
              ).style.pointerEvents = "unset";
            } else if (inps.value == "Pre-Tax") {
              document
                .getElementById("noVehicleTyupeSelectPadd")
                .classList.remove("noVehicleTyupeSelectPadd");
              document
                .getElementById("taxableArea1")
                .classList.remove("vehicleaTypeArea");
              document
                .getElementById("capitalGainTaxInputs1")
                .classList.add("capitalDisplayNone");
              document.getElementById("capitalGainLabel1").innerHTML =
                "Pre Age 59 ½ Penalty";
              document.getElementById("capitalGainTax1").checked = true;
              document.querySelector(
                ".preAfeCapitalSwtch"
              ).style.pointerEvents = "none";
            } else {
              document
                .getElementById("noVehicleTyupeSelectPadd")
                .classList.remove("noVehicleTyupeSelectPadd");
              document
                .getElementById("taxableArea1")
                .classList.remove("vehicleaTypeArea");
              document
                .getElementById("capitalGainTaxInputs1")
                .classList.remove("capitalDisplayNone");
              document.querySelector(
                ".preAfeCapitalSwtch"
              ).style.pointerEvents = "unset";
            }
            // show form div according to vehicle type

            closeAllLists();
          });
          a.appendChild(b);
        }
      });

      inps.addEventListener("input", function (e) {
        var a,
          b,
          i,
          val = this.value;
        closeAllLists();
        if (!val) {
          return false;
        }
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete1-list");
        a.setAttribute("class", "autocomplete1-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arrs.length; i++) {
          if (
            arrs[i].substr(0, val.length).toUpperCase() == val.toUpperCase() ||
            arrs[i].toUpperCase().includes(val.toUpperCase())
          ) {
            b = document.createElement("DIV");
            b.innerHTML = arrs[i].substr(0, val.length);
            b.innerHTML += arrs[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arrs[i] + "'>";
            b.addEventListener("click", function (e) {
              inps.value = this.getElementsByTagName("input")[0].value;

              closeAllLists();
            });
            a.appendChild(b);
          }
        }
      });

      /* Execute a function presses a key on the keyboard: */
      inps.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete1-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) {
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
      });

      function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = x.length - 1;
        x[currentFocus].classList.add("autocomplete-active");
      }

      function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
          x[i].classList.remove("autocomplete-active");
        }
      }

      function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete1-items");
        for (var i = 0; i < x.length; i++) {
          if (elmnt != x[i] && elmnt != inps) {
            x[i].parentNode.removeChild(x[i]);
          }
        }
      }
      document.addEventListener("click", function (e) {
        closeAllLists(e.target);
      });
    }

    autocomplete1(
      document.getElementById("comparativeVehicleType"),
      VehicleType
    );

    function saveVehicleRadio1() {
      var saveTemplateRadio = document.getElementById("saveVehicleTempName1");
      if (saveTemplateRadio.checked) {
        document.getElementById("vehicleTempName1").style.display = "unset";
      } else {
        document.getElementById("vehicleTempName1").style.display = "none";
      }
    }
    function capitalGainTax1() {
      var capitalGainTax1 = document.getElementById("capitalGainTax1");
      if (capitalGainTax1.checked) {
        document
          .getElementById("capitalGainTaxInputs1")
          .classList.remove("capitalDisplayNone");
      } else {
        document
          .getElementById("capitalGainTaxInputs1")
          .classList.add("capitalDisplayNone");
      }
    }

    const VehicleType2 = ["Taxable", "Pre-Tax", "Tax-Deferred"];

    // Autocomplete1 dropdown for Clien List
    function autocomplete1(inps, arrsa) {
      var currentFocus;
      inps.addEventListener("focus", function (e) {
        console.log("focused");
        var a,
          b,
          i,
          val = this.value;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete2-list");
        a.setAttribute("class", "autocomplete2-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arrsa.length; i++) {
          b = document.createElement("DIV");
          b.innerHTML = arrsa[i];
          b.innerHTML += "<input type='hidden' value='" + arrsa[i] + "'>";
          b.addEventListener("click", function (e) {
            inps.value = this.getElementsByTagName("input")[0].value;
            inps.value;

            // show form div according to vehicle type
            if (inps.value == "Tax-Deferred") {
              document
                .getElementById("noVehicleTyupeSelectPadd")
                .classList.remove("noVehicleTyupeSelectPadd");
              document
                .getElementById("taxableArea2")
                .classList.remove("vehicleaTypeArea");
              document
                .getElementById("capitalGainTaxInputs2")
                .classList.add("capitalDisplayNone");
              document.getElementById("capitalGainLabel2").innerHTML =
                "Pre Age 59 ½ Penalty";
              document.getElementById("capitalGainTax2").checked = true;
              document.querySelector(
                ".preAfeCapitalSwtch2"
              ).style.pointerEvents = "none";
            } else if (inps.value == "Taxable") {
              document.getElementById("capitalGainTax2").checked = false;
              document
                .getElementById("noVehicleTyupeSelectPadd")
                .classList.remove("noVehicleTyupeSelectPadd");
              document
                .getElementById("taxableArea2")
                .classList.remove("vehicleaTypeArea");
              document.getElementById("capitalGainLabel2").innerHTML =
                "Capital Gains Tax";
              document.querySelector(
                ".preAfeCapitalSwtch2"
              ).style.pointerEvents = "unset";
            } else if (inps.value == "Pre-Tax") {
              document
                .getElementById("noVehicleTyupeSelectPadd")
                .classList.remove("noVehicleTyupeSelectPadd");
              document
                .getElementById("taxableArea2")
                .classList.remove("vehicleaTypeArea");
              document
                .getElementById("capitalGainTaxInputs2")
                .classList.add("capitalDisplayNone");
              document.getElementById("capitalGainLabel2").innerHTML =
                "Pre Age 59 ½ Penalty";
              document.getElementById("capitalGainTax2").checked = true;
              document.querySelector(
                ".preAfeCapitalSwtch2"
              ).style.pointerEvents = "none";
            } else {
              document
                .getElementById("noVehicleTyupeSelectPadd")
                .classList.remove("noVehicleTyupeSelectPadd");
              document
                .getElementById("taxableArea2")
                .classList.remove("vehicleaTypeArea");
              document
                .getElementById("capitalGainTaxInputs2")
                .classList.remove("capitalDisplayNone");
              document.querySelector(
                ".preAfeCapitalSwtch2"
              ).style.pointerEvents = "unset";
            }
            // show form div according to vehicle type

            closeAllLists();
          });
          a.appendChild(b);
        }
      });

      inps.addEventListener("input", function (e) {
        var a,
          b,
          i,
          val = this.value;
        closeAllLists();
        if (!val) {
          return false;
        }
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete2-list");
        a.setAttribute("class", "autocomplete2-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arrsa.length; i++) {
          if (
            arrsa[i].substr(0, val.length).toUpperCase() == val.toUpperCase() ||
            arrsa[i].toUpperCase().includes(val.toUpperCase())
          ) {
            b = document.createElement("DIV");
            b.innerHTML = arrsa[i].substr(0, val.length);
            b.innerHTML += arrsa[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arrsa[i] + "'>";
            b.addEventListener("click", function (e) {
              inps.value = this.getElementsByTagName("input")[0].value;

              closeAllLists();
            });
            a.appendChild(b);
          }
        }
      });

      /* Execute a function presses a key on the keyboard: */
      inps.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete2-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) {
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
      });

      function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = x.length - 1;
        x[currentFocus].classList.add("autocomplete-active");
      }

      function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
          x[i].classList.remove("autocomplete-active");
        }
      }

      function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete2-items");
        for (var i = 0; i < x.length; i++) {
          if (elmnt != x[i] && elmnt != inps) {
            x[i].parentNode.removeChild(x[i]);
          }
        }
      }
      document.addEventListener("click", function (e) {
        closeAllLists(e.target);
      });
    }

    autocomplete1(
      document.getElementById("comparativeVehicleType2"),
      VehicleType2
    );




    const VehicleType3 = ["Taxable", "Pre-Tax", "Tax-Deferred"];

    // Autocomplete1 dropdown for Clien List
    function autocomplete3(inpsas, arrsas) {
      var currentFocus3;
      inpsas.addEventListener("focus", function (e) {
        console.log("focused");
        var a3,
          b3,
          i3,
          val3 = this.value;
        a3 = document.createElement("DIV");
        a3.setAttribute("id", this.id + "autocomplete3-list");
        a3.setAttribute("class", "autocomplete3-items");
        this.parentNode.appendChild(a3);
        for (var i = 0; i < arrsas.length; i++) {
          b3 = document.createElement("DIV");
          b3.innerHTML = arrsas[i];
          b3.innerHTML += "<input type='hidden' value='" + arrsas[i] + "'>";
          b3.addEventListener("click", function (e) {
            inpsas.value = this.getElementsByTagName("input")[0].value;
            inpsas.value;

            // show form div according to vehicle type
            if (inpsas.value == "Tax-Deferred") {
              document
                .getElementById("noVehicleTyupeSelectPadd")
                .classList.remove("noVehicleTyupeSelectPadd");
              document
                .getElementById("taxableArea3")
                .classList.remove("vehicleaTypeArea");
              document
                .getElementById("capitalGainTaxInputs3")
                .classList.add("capitalDisplayNone");
              document.getElementById("capitalGainLabel3").innerHTML =
                "Pre Age 59 ½ Penalty";
              document.getElementById("capitalGainTax3").checked = true;
              document.querySelector(
                ".preAfeCapitalSwtch3"
              ).style.pointerEvents = "none";
            } else if (inpsas.value == "Taxable") {
              document.getElementById("capitalGainTax3").checked = false;
              document
                .getElementById("noVehicleTyupeSelectPadd")
                .classList.remove("noVehicleTyupeSelectPadd");
              document
                .getElementById("taxableArea3")
                .classList.remove("vehicleaTypeArea");
              document.getElementById("capitalGainLabel3").innerHTML =
                "Capital Gains Tax";
              document.querySelector(
                ".preAfeCapitalSwtch3"
              ).style.pointerEvents = "unset";
            } else if (inpsas.value == "Pre-Tax") {
              document
                .getElementById("noVehicleTyupeSelectPadd")
                .classList.remove("noVehicleTyupeSelectPadd");
              document
                .getElementById("taxableArea3")
                .classList.remove("vehicleaTypeArea");
              document
                .getElementById("capitalGainTaxInputs3")
                .classList.add("capitalDisplayNone");
              document.getElementById("capitalGainLabel3").innerHTML =
                "Pre Age 59 ½ Penalty";
              document.getElementById("capitalGainTax3").checked = true;
              document.querySelector(
                ".preAfeCapitalSwtch3"
              ).style.pointerEvents = "none";
            } else {
              document
                .getElementById("noVehicleTyupeSelectPadd")
                .classList.remove("noVehicleTyupeSelectPadd");
              document
                .getElementById("taxableArea3")
                .classList.remove("vehicleaTypeArea");
              document
                .getElementById("capitalGainTaxInputs3")
                .classList.remove("capitalDisplayNone");
              document.querySelector(
                ".preAfeCapitalSwtch3"
              ).style.pointerEvents = "unset";
            }
            // show form div according to vehicle type

            closeAllLists3();
          });
          a3.appendChild(b3);
        }
      });

      inpsas.addEventListener("input", function (e) {
        var a3,
          b3,
          i3,
          val3 = this.value;
        closeAllLists3();
        if (!val3) {
          return false;
        }
        currentFocus3 = -1;
        a3 = document.createElement("DIV");
        a3.setAttribute("id", this.id + "autocomplete3-list");
        a3.setAttribute("class", "autocomplete3-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arrsas.length; i++) {
          if (
            arrsas[i].substr(0, val3.length).toUpperCase() ==
              val3.toUpperCase() ||
            arrsas[i].toUpperCase().includes(val3.toUpperCase())
          ) {
            b = document.createElement("DIV");
            b.innerHTML = arrsas[i].substr(0, val3.length);
            b.innerHTML += arrsas[i].substr(val3.length);
            b.innerHTML += "<input type='hidden' value='" + arrsas[i] + "'>";
            b.addEventListener("click", function (e) {
              inpsas.value = this.getElementsByTagName("input")[0].value;

              closeAllLists3();
            });
            a.appendChild(b);
          }
        }
      });

      /* Execute a function presses a key on the keyboard: */
      inpsas.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete3-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus3++;
          addActive(x);
        } else if (e.keyCode == 38) {
          currentFocus3--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus3 > -1) {
            if (x) x[currentFocus3].click();
          }
        }
      });

      function addActive(x) {
        if (!x) return false;
        removeActive3(x);
        if (currentFocus3 >= x.length) currentFocus3 = 0;
        if (currentFocus3 < 0) currentFocus3 = x.length - 1;
        x[currentFocus3].classList.add("autocomplete3-active");
      }

      function removeActive3(x) {
        for (var i = 0; i < x.length; i++) {
          x[i].classList.remove("autocomplete3-active");
        }
      }

      function closeAllLists3(elmnt) {
        var x = document.getElementsByClassName("autocomplete3-items");
        for (var i = 0; i < x.length; i++) {
          if (elmnt != x[i] && elmnt != inpsas) {
            x[i].parentNode.removeChild(x[i]);
          }
        }
      }
      document.addEventListener("click", function (e) {
        closeAllLists3(e.target);
      });
    }

    autocomplete3(
      document.getElementById("comparativeVehicleType3"),
      VehicleType3
    );

    

    // Use Existing Comparative Vehicle 1
    const historyIndex = ["Vehicle 1", "Vehicle 2", "Vehicle 3", "Vehicle 4"];

    // Autocomplete1 dropdown for Clien List
    function autocomplete4(inpsa, arrsa) {
      var currentFocus2;
      inpsa.addEventListener("focus", function (e) {
        console.log("focused");
        var a2,
          b2,
          i2,
          val2 = this.value;
        a2 = document.createElement("DIV");
        a2.setAttribute("id", this.id + "autocomplete4-list");
        a2.setAttribute("class", "autocomplete4-items");
        this.parentNode.appendChild(a2);
        for (i = 0; i < arrsa.length; i++) {
          b2 = document.createElement("DIV");
          b2.innerHTML = arrsa[i];
          b2.innerHTML += "<input type='hidden' value='" + arrsa[i] + "'>";
          b2.addEventListener("click", function (e) {
            inpsa.value = this.getElementsByTagName("input")[0].value;
            inpsa.value;
            closeAllLists2();
          });
          a2.appendChild(b2);
        }
      });

      inpsa.addEventListener("input", function (e) {
        var a2,
          b2,
          i2,
          val2 = this.value;
        closeAllLists2();
        if (!val2) {
          return false;
        }
        currentFocus2 = -1;
        a2 = document.createElement("DIV");
        a2.setAttribute("id", this.id + "autocomplete4-list");
        a2.setAttribute("class", "autocomplete4-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arrsa.length; i++) {
          if (
            arrsa[i].substr(0, val2.length).toUpperCase() ==
              val2.toUpperCase() ||
            arrsa[i].toUpperCase().includes(val2.toUpperCase())
          ) {
            b = document.createElement("DIV");
            b.innerHTML = arrsa[i].substr(0, val2.length);
            b.innerHTML += arrsa[i].substr(val2.length);
            b.innerHTML += "<input type='hidden' value='" + arrsa[i] + "'>";
            b.addEventListener("click", function (e) {
              inpsa.value = this.getElementsByTagName("input")[0].value;

              closeAllLists2();
            });
            a.appendChild(b);
          }
        }
      });

      /* Execute a function presses a key on the keyboard: */
      inpsa.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete4-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus2++;
          addActive(x);
        } else if (e.keyCode == 38) {
          currentFocus2--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus2 > -1) {
            if (x) x[currentFocus2].click();
          }
        }
      });

      function addActive(x) {
        if (!x) return false;
        removeActive2(x);
        if (currentFocus2 >= x.length) currentFocus2 = 0;
        if (currentFocus2 < 0) currentFocus2 = x.length - 1;
        x[currentFocus2].classList.add("autocomplete2-active");
      }

      function removeActive2(x) {
        for (var i = 0; i < x.length; i++) {
          x[i].classList.remove("autocomplete2-active");
        }
      }

      function closeAllLists2(elmnt) {
        var x = document.getElementsByClassName("autocomplete4-items");
        for (var i = 0; i < x.length; i++) {
          if (elmnt != x[i] && elmnt != inpsa) {
            x[i].parentNode.removeChild(x[i]);
          }
        }
      }
      document.addEventListener("click", function (e) {
        closeAllLists2(e.target);
      });
    }

    autocomplete4(document.getElementById("historyIndex"), historyIndex);

    // Use Existing Comparative Vehicle 2
    const historyIndex2 = ["Vehicle 1", "Vehicle 2", "Vehicle 3", "Vehicle 4"];

    // Autocomplete1 dropdown for Clien List
    function autocomplete5(inpsa, arrsa) {
      var currentFocus2;
      inpsa.addEventListener("focus", function (e) {
        console.log("focused");
        var a2,
          b2,
          i2,
          val2 = this.value;
        a2 = document.createElement("DIV");
        a2.setAttribute("id", this.id + "autocomplete5-list");
        a2.setAttribute("class", "autocomplete5-items");
        this.parentNode.appendChild(a2);
        for (i = 0; i < arrsa.length; i++) {
          b2 = document.createElement("DIV");
          b2.innerHTML = arrsa[i];
          b2.innerHTML += "<input type='hidden' value='" + arrsa[i] + "'>";
          b2.addEventListener("click", function (e) {
            inpsa.value = this.getElementsByTagName("input")[0].value;
            inpsa.value;
            closeAllLists2();
          });
          a2.appendChild(b2);
        }
      });

      inpsa.addEventListener("input", function (e) {
        var a2,
          b2,
          i2,
          val2 = this.value;
        closeAllLists2();
        if (!val2) {
          return false;
        }
        currentFocus2 = -1;
        a2 = document.createElement("DIV");
        a2.setAttribute("id", this.id + "autocomplete5-list");
        a2.setAttribute("class", "autocomplete5-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arrsa.length; i++) {
          if (
            arrsa[i].substr(0, val2.length).toUpperCase() ==
              val2.toUpperCase() ||
            arrsa[i].toUpperCase().includes(val2.toUpperCase())
          ) {
            b = document.createElement("DIV");
            b.innerHTML = arrsa[i].substr(0, val2.length);
            b.innerHTML += arrsa[i].substr(val2.length);
            b.innerHTML += "<input type='hidden' value='" + arrsa[i] + "'>";
            b.addEventListener("click", function (e) {
              inpsa.value = this.getElementsByTagName("input")[0].value;

              closeAllLists2();
            });
            a.appendChild(b);
          }
        }
      });

      /* Execute a function presses a key on the keyboard: */
      inpsa.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete5-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus2++;
          addActive(x);
        } else if (e.keyCode == 38) {
          currentFocus2--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus2 > -1) {
            if (x) x[currentFocus2].click();
          }
        }
      });

      function addActive(x) {
        if (!x) return false;
        removeActive2(x);
        if (currentFocus2 >= x.length) currentFocus2 = 0;
        if (currentFocus2 < 0) currentFocus2 = x.length - 1;
        x[currentFocus2].classList.add("autocomplete2-active");
      }

      function removeActive2(x) {
        for (var i = 0; i < x.length; i++) {
          x[i].classList.remove("autocomplete2-active");
        }
      }

      function closeAllLists2(elmnt) {
        var x = document.getElementsByClassName("autocomplete5-items");
        for (var i = 0; i < x.length; i++) {
          if (elmnt != x[i] && elmnt != inpsa) {
            x[i].parentNode.removeChild(x[i]);
          }
        }
      }
      document.addEventListener("click", function (e) {
        closeAllLists2(e.target);
      });
    }

    autocomplete5(document.getElementById("historyIndex2"), historyIndex2);

    // Use Existing Comparative Vehicle 3
    const historyIndex3 = ["Vehicle 1", "Vehicle 2", "Vehicle 3", "Vehicle 4"];

    // Autocomplete1 dropdown for Clien List
    function autocomplete6(inpsa, arrsa) {
      var currentFocus2;
      inpsa.addEventListener("focus", function (e) {
        console.log("focused");
        var a2,
          b2,
          i2,
          val2 = this.value;
        a2 = document.createElement("DIV");
        a2.setAttribute("id", this.id + "autocomplete6-list");
        a2.setAttribute("class", "autocomplete6-items");
        this.parentNode.appendChild(a2);
        for (i = 0; i < arrsa.length; i++) {
          b2 = document.createElement("DIV");
          b2.innerHTML = arrsa[i];
          b2.innerHTML += "<input type='hidden' value='" + arrsa[i] + "'>";
          b2.addEventListener("click", function (e) {
            inpsa.value = this.getElementsByTagName("input")[0].value;
            inpsa.value;
            closeAllLists2();
          });
          a2.appendChild(b2);
        }
      });

      inpsa.addEventListener("input", function (e) {
        var a2,
          b2,
          i2,
          val2 = this.value;
        closeAllLists2();
        if (!val2) {
          return false;
        }
        currentFocus2 = -1;
        a2 = document.createElement("DIV");
        a2.setAttribute("id", this.id + "autocomplete6-list");
        a2.setAttribute("class", "autocomplete6-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arrsa.length; i++) {
          if (
            arrsa[i].substr(0, val2.length).toUpperCase() ==
              val2.toUpperCase() ||
            arrsa[i].toUpperCase().includes(val2.toUpperCase())
          ) {
            b = document.createElement("DIV");
            b.innerHTML = arrsa[i].substr(0, val2.length);
            b.innerHTML += arrsa[i].substr(val2.length);
            b.innerHTML += "<input type='hidden' value='" + arrsa[i] + "'>";
            b.addEventListener("click", function (e) {
              inpsa.value = this.getElementsByTagName("input")[0].value;

              closeAllLists2();
            });
            a.appendChild(b);
          }
        }
      });

      /* Execute a function presses a key on the keyboard: */
      inpsa.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete6-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus2++;
          addActive(x);
        } else if (e.keyCode == 38) {
          currentFocus2--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus2 > -1) {
            if (x) x[currentFocus2].click();
          }
        }
      });

      function addActive(x) {
        if (!x) return false;
        removeActive2(x);
        if (currentFocus2 >= x.length) currentFocus2 = 0;
        if (currentFocus2 < 0) currentFocus2 = x.length - 1;
        x[currentFocus2].classList.add("autocomplete2-active");
      }

      function removeActive2(x) {
        for (var i = 0; i < x.length; i++) {
          x[i].classList.remove("autocomplete2-active");
        }
      }

      function closeAllLists2(elmnt) {
        var x = document.getElementsByClassName("autocomplete6-items");
        for (var i = 0; i < x.length; i++) {
          if (elmnt != x[i] && elmnt != inpsa) {
            x[i].parentNode.removeChild(x[i]);
          }
        }
      }
      document.addEventListener("click", function (e) {
        closeAllLists2(e.target);
      });
    }
    autocomplete6(document.getElementById("historyIndex3"), historyIndex3);

    // comparative vehicles switch buttons
    let comparativeVehicleTabs = document.querySelectorAll(
      ".comparative-vehicle-tabs .nav-link"
    );
    comparativeVehicleTabs.forEach(function (tab) {
      tab.addEventListener("shown.bs.tab", function (event) {
        // event.target // newly activated tab
        event.relatedTarget.classList.add("activeOnly");
      });
    });
    let additionalBtn = document.querySelector(".AdtnlCmprtVhclBtn");

    var allTabs = [...comparativeVehicleTabs];

    additionalBtn.addEventListener("click", () => {
      allTabs.forEach(function (tab, index) {
        if (tab.classList.contains("active")) {
          nextIndex = index + 1 + 1;
          if (nextIndex > allTabs.length) {
            nextIndex = 1;
          }
        }
      });
      var triggerFirstTabEl = document.querySelector(
        `.comparative-vehicle-tabs .nav-item:nth-child(${nextIndex}) .nav-link`
      );
      var tab = new bootstrap.Tab(triggerFirstTabEl);
      tab.show();
    });
  },
};
</script>
