<template lang="">
    <section class="main-section">
      <div class="inner-section">
        <LeftSidebarComponent />
        <main class="right-area">
          <div class="right-area-inner p-relative rightInnerDarkbg">
            <div class="right-area-wrapper">
              <ChooseClientNavbar  @newModified="newModified" @oldModified="oldModified" @sortAsc="sortAsc" @sortDesc="sortDesc" @updateList="updateList"/>
              <div class="client-list-div">
                <ul v-if="clients && clients.length > 0" class="nav flex-column client-list-ul">
                  <IndividualClientRow :clients="clients" :search="search" @setActionId="setActionId" @setReportId="id => reportId = id"/>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
  
      <!-- Delete Client Modal -->
      <delete-client-modal @deleteClient="deleteClient" />
  
      <!-- Edit Client Canvas -->
      <edit-client-canvas-modal :client="client"/>
  
      <!-- Delete Simulation Modal -->
      <delete-historical-simulation-modal @removeClientSimulation="removeClientSimulation"/>
  
      <!-- Delete report Modal -->
      <delete-report-modal @removeClientReport="removeClientReport"/>
  
      <!-- Clone Simulation Modal start -->
      <clone-historical-simulation-modal @cloneSimulation="cloneSimulation" :id="actionId" :client="clinetId"/>
        
      <!-- Report Buider Name Change Modal  -->
      <report-builder-name-change-modal :reportId="reportId" />  
    </section>
  </template>
  <script>
  import LeftSidebarComponent from "../../../components/common/LeftSidebarComponent.vue";
  import ChooseClientNavbar from "../../components/simulations/ChooseClientNavbar.vue";
  import IndividualClientRow from "../../components/simulations/IndividualClientRow.vue";
  import DeleteClientModal from "../modals/DeleteClientmodal.vue";
  import EditClientCanvasModal from "../modals/EditClientCanvasModal.vue";
  import DeleteHistoricalSimulationModal from "../../components/modals/DeleteHistoricalSimulationModal.vue";
  import DeleteReportModal from "../../components/modals/DeleteReportModal.vue";
  import CloneHistoricalSimulationModal from "../../components/modals/CloneHistoricalSimulationModal.vue";
  import ReportBuilderNameChangeModal from "../../components/modals/ReportBuilderNameChangeModal.vue";
  import { get, remove } from "../../../../network/requests.js";
  import { getUrl } from "../../../../network/url.js";
  import {
    authHeader,
    getFirstError,
    mapHistoricalClientList,
    clearSimulationCacheData,
  } from "../../../../services/helper.js";
  export default {
    components: {
      LeftSidebarComponent,
      ChooseClientNavbar,
      IndividualClientRow,
      DeleteClientModal,
      DeleteHistoricalSimulationModal,
      DeleteReportModal,
      EditClientCanvasModal,
      CloneHistoricalSimulationModal,
      ReportBuilderNameChangeModal,
    },
    data() {
      return {
        sortedList: false,
        search: "",
        actionId: false,
        reportId: false,
        clinetId: false,
      };
    },
    methods: {
      testFunction: function() {
        console.log(this.clients);
      },
      // delete client from API
      deleteClient: function() {
        this.$store.dispatch("loader", true);
        remove(`${getUrl("client")}${this.actionId}/`, authHeader())
          .then(response => {
            this.removeClient(this.actionId);
            this.$toast.success(response.data.message);
            this.$store.dispatch("loader", false);
          })
          .catch(error => {
            if (
              error.code === "ERR_BAD_RESPONSE" ||
              error.code === "ERR_NETWORK"
            ) {
              this.$toast.error(error.message);
            } else {
              this.$toast.error(getFirstError(error));
            }
            this.$store.dispatch("loader", false);
          });
      },
  
      // this id used for creating a clone and editing the client data
      setActionId: function(id, client = false) {
        this.actionId = id;
        this.clinetId = client;
      },
  
      // get clients detail from API
      getClient: function(clone = false) {
        this.$store.dispatch("loader", true);
        get(getUrl("historical-clients"), authHeader())
          .then(response => {
            this.$store.dispatch("historicalClients", mapHistoricalClientList(response.data.data));
            this.sortedList = mapHistoricalClientList(response.data.data);
            this.oldModified();
            if (clone) {
              this.$toast.success("Simulation clone created successfully!");
            }
            this.$store.dispatch("loader", false);
          })
          .catch(error => {
            if (
              error.code === "ERR_BAD_RESPONSE" ||
              error.code === "ERR_NETWORK"
            ) {
              this.$toast.error(error.message);
            }
            this.$store.dispatch("loader", false);
          });
      },
  
      // this function will trigger when any new simulation clone request made   
      cloneSimulation: function() {
        this.getClient(true);
      },
  
      // remove client data from redux store
      removeClient: function(deleteId) {
        this.sortedList = this.clients.filter(item => {
          return item.id !== deleteId;
        });
        return this.$store.dispatch("historicalClients", this.sortedList);
      },
      // remove report form list
      removeClientReport: function(deleteId) {
        this.sortedList = this.clients;
      },
      // remove simulation form list
      removeClientSimulation: function(deleteId) {
        this.sortedList = this.clients;
      },
      // sort client list
      newModified: function() {
        return (this.sortedList = this.clients.sort(
          (a, b) => new Date(a.updated_at) - new Date(b.updated_at)
        ));
      },
      // sort client list
      oldModified: function() {
        return (this.sortedList = this.clients.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        ));
      },
      // sort client list
      sortAsc: function() {
        function compare(a, b) {
          if (a.lastname < b.lastname) return -1;
          if (a.lastname > b.lastname) return 1;
          return 0;
        }
  
        return (this.sortedList = this.clients.sort(compare));
      },
      // sort client list
      sortDesc: function() {
        function compare(a, b) {
          if (a.lastname > b.lastname) return -1;
          if (a.lastname < b.lastname) return 1;
          return 0;
        }
  
        return (this.sortedList = this.clients.sort(compare));
      },
  
      // update
      updateList(text) {
        this.search = text;
      },
    },
    mounted() {
      // clear simulation cache from localstorage
      clearSimulationCacheData();
      
      // clear active simulation data
      if (this.$store.state.data.active_simulation) {
        this.$store.dispatch("activeSimulation", false);
      }
      if (this.$store.state.data.historical_clients) {
        this.sortedList = this.$store.state.data.historical_clients;
        this.oldModified();
      } else {
        this.getClient();
      }
    },
    computed: {
      clients() {
        // returns all clients data form vuex store
        return this.$store.state.data.historical_clients;
      },
      client() {
        // returns single client data 
        return this.$store.getters.getHistoricalClientUsingId(this.actionId);
      },
    },
  };
  </script>
  <style lang="">
  </style>
  