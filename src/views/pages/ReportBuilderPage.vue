<script setup>
import DeleteAccountModal from "../components/modal/DeleteAccountModal.vue";
import DeleteAnnuityModal from "../components/modal/DeleteAnnuityModal.vue";
import DeleteEraModal from "../components/modal/DeleteEraModal.vue";
import ReportBuilderNameChangeModal from "../components/modal/ReportBuilderNameChangeModal.vue";
import ShareModal from "../components/modal/ShareModal.vue";
import ReportBuilderMainSection from "../components/report/ReportBuilderMainSection.vue";
import NavbarComponent from "./../components/common/NavbarComponent.vue";
</script>
<template>
  <navbar-component />
  <report-builder-main-section />
  <!-- Delete Account Modal start -->
  <delete-account-modal />
  <!-- Delete Ira Modal start -->
  <delete-era-modal />
  <!-- Delete Annuity Modal start -->
  <delete-annuity-modal />
  <!-- Report Buider Name Change Modal start -->
  <report-builder-name-change-modal />
  <!-- Share report Modal start -->
  <share-modal />
</template>
<script>
export default {
  components: {
    NavbarComponent,
    ReportBuilderMainSection,
    DeleteAccountModal,
    DeleteEraModal,
    DeleteAnnuityModal,
    ReportBuilderNameChangeModal,
    ShareModal,
  },
  mounted() {
    var myModal = new bootstrap.Modal(
      document.getElementById("reportNameChangeModal")
    );
    setTimeout(() => {
      myModal.show();
    }, 2000);

    // able position change on drag start
    const fills = document.querySelectorAll(".fill");
    const empties = document.querySelectorAll(".empty");

    let shuffleElement;
    let shuffleParentElement;
    // Fill listeners
    for (const fill of fills) {
      fill.addEventListener("dragstart", dragStart);
      fill.addEventListener("dragend", dragEnd);
    }
    // Loop through empty boxes and add listeners
    for (const empty of empties) {
      empty.addEventListener("dragover", dragOver);
      empty.addEventListener("dragenter", dragEnter);
      empty.addEventListener("dragleave", dragLeave);
      empty.addEventListener("drop", dragDrop);
    }
    // Drag Functions
    function dragStart(e) {
      this.className += " hold";
      setTimeout(() => (this.className = "visible"), 0);
      shuffleElement = e.currentTarget;
      shuffleParentElement = e.currentTarget.parentElement;
    }
    function dragEnd() {
      this.className = "fill";
    }
    function dragOver(e) {
      e.preventDefault();
    }
    function dragEnter(e) {
      e.preventDefault();
      this.className += " hovered";
    }
    function dragLeave() {
      this.className = "empty";
    }
    function dragDrop() {
      this.className = "empty";
      const shuffleWithElement = this.querySelector(".fill");
      this.innerHTML = "";
      this.append(shuffleElement);

      if (shuffleWithElement) {
        shuffleParentElement.innerHTML = "";
        shuffleParentElement.append(shuffleWithElement);
      }
    }
    // Making Things EqualProgressbar value calculate start
    var valueGet = document.getElementById("thingEqualProg1").innerText;
    var actualValue = 90000;
    let finalnalResult1 = (valueGet / actualValue) * 100;
    document.getElementById("thingEqualPercent1").style.height =
      finalnalResult1 + "%";
    // Making Things EqualProgressbar value calculate end

    // When Scrolling
    var scrollingDiv = document.querySelector(".right-area-inner");
    scrollingDiv.addEventListener("scroll", function (e) {
      let sectionHeadingDiv = e.target.querySelector(".section-heading-div");
      if (e.target.scrollTop > 70) {
        sectionHeadingDiv.classList.add("bottom-border");
      } else {
        sectionHeadingDiv.classList.remove("bottom-border");
      }
    });
  },
};
</script>

    