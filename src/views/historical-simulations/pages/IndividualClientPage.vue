<template>
    <div>
      <navbar-component />
      <individual-main-section />
      <!-- Delete Client Modal -->
      <delete-client-modal />      
      <!-- Delete Scenario Modal -->
      <delete-historical-simulation-modal />          
      <!-- Delete Report Modal --> 
      <delete-report-modal />    
      <!-- Share report Modal  -->
      <share-report-modal />   
      
    </div>  
    </template>
    <script>
    import NavbarComponent from "./../../components/common/NavbarComponent.vue";
    import IndividualMainSection from "../components/individual-client/IndividualMainSection.vue";
    import DeleteClientModal from "../components/modals/DeleteClientModal.vue";
    import DeleteHistoricalSimulationModal from "../components/modals/DeleteHistoricalSimulationModal.vue";
    import DeleteReportModal from "../components/modals/DeleteReportModal.vue";
    import ShareReportModal from "../components/modals/ShareReportModal.vue";
    
    export default {
      components: {
        DeleteReportModal,
        DeleteHistoricalSimulationModal,
        DeleteClientModal,
        NavbarComponent,
        IndividualMainSection,
        ShareReportModal,
      },
      mounted() {
    
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
    