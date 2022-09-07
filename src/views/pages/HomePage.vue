<script setup>
import NavbarComponent from "./../components/common/NavbarComponent.vue";
import DeleteClientModal from "../components/modal/DeleteClientModal.vue";
import DeleteScenarioModal from "../components/modal/DeleteScenarioModal.vue";
import DeleteReportModal from "../components/modal/DeleteReportModal.vue";
import AddClientModal from "../components/modal/AddClientModal.vue";
import ShareModal from "../components/modal/ShareModal.vue";
import ReportBuilderNameChangeModal from "../components/modal/ReportBuilderNameChangeModal.vue";
import EditClientCanvasModal from "../components/modal/EditClientCanvasModal.vue";
import MainSection from "../components/homepage/MainSection.vue";
import CloneScenarioModal from "../components/modal/CloneScenarioModal.vue";
</script>

<template>
  <navbar-component />

  <main-section />

  <!-- Delete Client Modal -->
  <delete-client-modal />

  <!-- Delete Scenario Modal -->
  <delete-scenario-modal />

  <!-- Delete Report Modal -->
  <delete-report-modal />

  <!-- Add Client Canvas -->
  <add-client-modal />

  <!-- Share  Modal  -->
  <share-modal />

  <!-- Report Buider Name Change Modal  -->
  <report-builder-name-change-modal />

  <!-- Edit Client Canvas -->
  <edit-client-canvas-modal />

  <!-- Clone Scenario Modal start -->
  <clone-scenario-modal />
</template>

<script>
export default {
  components: {
    NavbarComponent,
    DeleteReportModal,
    AddClientModal,
    ReportBuilderNameChangeModal,
    EditClientCanvasModal,
    ShareModal,
    DeleteScenarioModal,
    DeleteClientModal,
    MainSection,
    CloneScenarioModal,
  },
 
  mounted() {
    //When clicked on menu button below 1200px device
    const menuBtn = document.getElementById("menuBtn");
    const menuIcon = menuBtn.querySelector(".menu-icon");
    const closeIcon = menuBtn.querySelector(".close-icon");
    const sidebar = document.querySelector(".sidebar");

    menuBtn.addEventListener("click", function (e) {
      menuIcon.classList.toggle("d-none");
      closeIcon.classList.toggle("d-none");
      sidebar.classList.toggle("show");
    });

    document.addEventListener("mouseup", function (e) {
      e.stopPropagation();
      if (sidebar.classList.contains("show")) {
        if (
          !e.target.parentNode.closest(".sidebar") &&
          !e.target.closest(".menu-btn")
        ) {
          menuIcon.classList.remove("d-none");
          closeIcon.classList.add("d-none");
          sidebar.classList.remove("show");
        }
      }
    });

    // Searching throughout the list
    let searchBarInput = document.querySelector(".search-bar-input");
    let clients = document
      .querySelector(".client-list-ul")
      .querySelectorAll("li.nav-item");

    // When clicked on Right Action Buttons (scenario button and report button)
    let rightActionBtns = document.querySelectorAll(".right-action-btn");

    rightActionBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        let navItem = btn.closest(".nav-item");
        // Checking whether both buttons have collapsed class or not
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

    // When clicked on any of the Sort Dropdown option
    const sortDropdownOptions = document.querySelectorAll(
      ".sort-dropdown .dropdown-menu .dropdown-item"
    );
    const sortingBtn = document.getElementById("sortingBtn");

    searchBarInput.addEventListener("input", function (e) {
      clients.forEach(function (client) {
        let nameSpan = client.querySelector(".name-span").innerText;
        if (nameSpan.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1) {
          client.style.display = "block";
        } else {
          client.style.display = "none";
        }
      });
    });

    function removeActiveClass() {
      sortDropdownOptions.forEach(function (sortOption) {
        sortOption.classList.remove("active");
      });
    }

    let clientNames = [...clients].map(function (client) {
      return client.querySelector(".name-span").innerText;
    });

    // clientNames.reverse()

    function doSorting(sortValue) {
      if (sortValue == "ascending") {
        clientNames.sort();
        // console.log(clientNames)
        clientNames.map(function (name) {
          clients.forEach(function (client) {
            if (
              name.toLowerCase() ==
              client.querySelector(".name-span").innerText.toLowerCase()
            ) {
              document.querySelector(".client-list-ul").appendChild(client);
            }
          });
        });
      } else if (sortValue == "descending") {
        clientNames.sort();
        clientNames.reverse();
        clientNames.map(function (name) {
          clients.forEach(function (client) {
            if (
              name.toLowerCase() ==
              client.querySelector(".name-span").innerText.toLowerCase()
            ) {
              document.querySelector(".client-list-ul").appendChild(client);
            }
          });
        });
        // console.log(clientNames)
      }
    }

    sortDropdownOptions.forEach(function (sortOption) {
      sortOption.addEventListener("click", function (e) {
        //remove active class from other options
        let dataValue = sortOption.getAttribute("data-sort");
        doSorting(dataValue);
        removeActiveClass();
        sortingBtn.querySelector("span").innerText = e.target.innerText;
        e.target.classList.add("active");
      });
    });

    // When clicked on VIEW MORE or VIEW LESS button
    var viewBtns = document.querySelectorAll(".view-btn");
    viewBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        btn.classList.toggle("viewing");
        let parentDiv =
          btn.closest(".inner-report-div") || btn.closest(".list-div");
        let listItems = parentDiv.querySelectorAll(".list-item");
        if (parentDiv.classList.contains("list-div")) {
          listItems = [...listItems];
          let newItems = [];
          listItems.map((item) => {
            if (item.parentElement.classList.contains("list-div")) {
              newItems.push(item);
            }
          });
          listItems = [...newItems];
        }
        if (btn.classList.contains("viewing")) {
          btn.innerText = "- View Less";
          listItems.forEach(function (listItem) {
            if (listItem.classList.contains("d-none")) {
              listItem.classList.remove("d-none");
            }
          });
        } else {
          btn.innerText = "+ View More";
          listItems.forEach(function (listItem, index) {
            if (index > 2) {
              listItem.classList.add("d-none");
            }
          });
        }
      });
    });

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
