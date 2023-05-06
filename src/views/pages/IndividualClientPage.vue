<template>
<div>
  <navbar-component />
  <individual-main-section />
  <!-- Delete Client Modal -->
  <delete-client-modal />      
  <!-- Delete Scenario Modal -->
  <delete-scenario-modal />          
  <!-- Delete Report Modal --> 
  <delete-report-modal />       
  
  <clone-scenario-modal />   

  <!-- Report Buider Name Change Modal  -->
  <report-builder-name-change-modal />  
</div>  
</template>
<script>
import NavbarComponent from "./../components/common/NavbarComponent.vue";
import IndividualMainSection from "../components/individual-client/IndividualMainSection.vue";
import DeleteClientModal from "../components/modal/DeleteClientModal.vue";
import DeleteScenarioModal from "../components/modal/DeleteScenarioModal.vue";
import DeleteReportModal from "../components/modal/DeleteReportModal.vue";
import CloneScenarioModal from "../components/modal/CloneScenarioModal.vue";
import ReportBuilderNameChangeModal from "../components/modal/ReportBuilderNameChangeModal.vue";

export default {
  components: {
    DeleteReportModal,
    DeleteScenarioModal,
    DeleteClientModal,
    NavbarComponent,
    IndividualMainSection,
    CloneScenarioModal,
    ReportBuilderNameChangeModal
  },
  mounted() {
    //When clicked on menu button below 1200px device
    var menuBtn = document.getElementById("menuBtn");
    var menuIcon = false;
    var closeIcon = false;
    var sidebar = document.querySelector(".sidebar");

    if (menuBtn) {
      menuIcon = menuBtn.querySelector(".menu-icon");
      closeIcon = menuBtn.querySelector(".close-icon");

      menuBtn.addEventListener("click", function(e) {
        console.log(menuIcon);
        menuIcon.classList.toggle("d-none");
        closeIcon.classList.toggle("d-none");
        if (sidebar) {
          sidebar.classList.toggle("collapsed");
        }
      });
    }

    document.addEventListener("mouseup", function(e) {
      e.stopPropagation();
      if (sidebar && sidebar.classList.contains("collapsed")) {
        if (
          !e.target.parentNode.closest(".sidebar") &&
          !e.target.closest(".menu-btn")
        ) {
          if (menuIcon) {
            menuIcon.classList.remove("d-none");
          }
          if (closeIcon) {
            closeIcon.classList.add("d-none");
          }
          sidebar.classList.remove("collapsed");
        }
      }
    });

    // When clicked on Right Action Buttons
    let rightActionBtns = document.querySelectorAll(".right-action-btn");

    rightActionBtns.forEach(function(btn) {
      btn.addEventListener("click", function() {
        let navItem = btn.closest(".nav-item");
        //Checking whether both buttons have collapsed class or not
        let bothActionBtns = btn
          .closest(".right-action-btns")
          .querySelectorAll(".right-action-btn");
        let btn1 = bothActionBtns[0],
          btn2 = bothActionBtns[1];
        if (
          btn1.classList.contains("collapsed") &&
          btn2.classList.contains("collapsed")
        ) {
          navItem.classList.remove("hovered");
        } else {
          navItem.classList.add("hovered");
        }
      });
    });

    // When clicked on VIEW MORE or VIEW LESS button
    var viewBtns = document.querySelectorAll(".view-btn");

    viewBtns.forEach(function(btn) {
      btn.addEventListener("click", function() {
        btn.classList.toggle("viewing");
        let parentDiv =
          btn.closest(".inner-report-div") || btn.closest(".list-div");
        let listItems = parentDiv.querySelectorAll(".list-item");
        if (parentDiv.classList.contains("list-div")) {
          listItems = [...listItems];
          let newItems = [];
          listItems.map(item => {
            if (item.parentElement.classList.contains("list-div")) {
              newItems.push(item);
            }
          });
          listItems = [...newItems];
        }
        if (btn.classList.contains("viewing")) {
          btn.innerText = "- View Less";
          listItems.forEach(function(listItem) {
            if (listItem.classList.contains("d-none")) {
              listItem.classList.remove("d-none");
            }
          });
        } else {
          btn.innerText = "+ View More";
          listItems.forEach(function(listItem, index) {
            if (index > 2) {
              listItem.classList.add("d-none");
            }
          });
        }
      });
    });

    // When Scrolling
    var scrollingDiv = document.querySelector(".right-area-inner");
    scrollingDiv.addEventListener("scroll", function(e) {
      let sectionHeadingDiv = e.target.querySelector(".main-cleint-name-div");
      let upperGoBackBtn = document.getElementById("upperGoBackBtn");
      let lowerGoBackBtn = document.getElementById("lowerGoBackBtn");
      console.log(e.target.scrollTop);
      if (e.target.scrollTop > 70) {
        lowerGoBackBtn.classList.remove("d-none");
        upperGoBackBtn.classList.add("d-none");
      } else {
        lowerGoBackBtn.classList.add("d-none");
        upperGoBackBtn.classList.remove("d-none");
      }
    });
  },
};
</script>
