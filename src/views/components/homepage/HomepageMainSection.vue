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
                <IndividualClientRow :clients="clients" :search="search" @setActionId="setActionId" />
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

    <!-- Delete Scenario Modal -->
    <delete-scenario-modal @removeClientScenario="removeClientScenario"/>

    <!-- Clone Scenario Modal start -->
    <clone-scenario-modal @cloneScenario="cloneScenario" :id="actionId" :client="clinetId"/>
  </section>
</template>
<script>
import LeftSidebarComponent from "../common/LeftSidebarComponent.vue";
import ChooseClientNavbar from "./ChooseClientNavbar.vue";
import IndividualClientRow from "./IndividualClientRow.vue";
import DeleteClientModal from "../modal/DeleteClientModal.vue";
import EditClientCanvasModal from "../modal/EditClientCanvasModal.vue";
import DeleteScenarioModal from "../modal/DeleteScenarioModal.vue";
import CloneScenarioModal from "../modal/CloneScenarioModal.vue";

import testClients from "../../../services/dummy-json.js";
import { get, remove } from "../../../network/requests";
import { getUrl } from "../../../network/url";
import {
  authHeader,
  getFirstError,
  mapClientList,
} from "../../../services/helper";
export default {
  components: {
    LeftSidebarComponent,
    ChooseClientNavbar,
    IndividualClientRow,
    DeleteClientModal,
    DeleteScenarioModal,
    EditClientCanvasModal,
    CloneScenarioModal,
  },
  data() {
    return {
      sortedList: false,
      search: "",
      actionId: false,
      clinetId: false,
    };
  },
  methods: {
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
          console.log(error);
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
    setActionId: function(id, client=false) {
      console.log(id);
      this.actionId = id;
      this.clinetId = client;
    },

    // get client detail from API
    getClient: function(clone = false) {
      this.$store.dispatch("loader", true);
      get(getUrl("clients"), authHeader())
        .then(response => {
          this.$store.dispatch("clients", mapClientList(response.data.data));
          console.log(response.data.data);
          this.sortedList = mapClientList(response.data.data);
          console.log(this.sortedList);
          if (clone) {
            this.$toast.success("Scenario clone created successfully!");
          }
          this.$store.dispatch("loader", false);
        })
        .catch(error => {
          console.log(error.message);
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          }
          this.$store.dispatch("loader", false);
        });
    },

    cloneScenario: function() {
      this.getClient(true);
    },

    // remove client data from redux store
    removeClient: function(deleteId) {
      this.sortedList = this.clients.filter(item => {
        return item.id !== deleteId;
      });
      return this.$store.dispatch("clients", this.sortedList);
    },

    removeClientScenario: function(deleteId) {
      this.sortedList = this.clients.map(i => {
        i.scenarios = i.scenarios.filter(j => j.id !== Number(deleteId));
        return i;
      });

      return this.$store.dispatch("clients", this.sortedList);
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
        if (a.firstname < b.firstname) return -1;
        if (a.firstname > b.firstname) return 1;
        return 0;
      }

      return (this.sortedList = this.clients.sort(compare));
    },
    // sort client list
    sortDesc: function() {
      function compare(a, b) {
        if (a.firstname > b.firstname) return -1;
        if (a.firstname < b.firstname) return 1;
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
    // clear active scenario data
    if (this.$store.state.data.active_scenario) {
      this.$store.dispatch("activeScenario", false);
    }
    if (this.$store.state.data.clients) {
      this.sortedList = this.$store.state.data.clients;
    } else {
      this.getClient();
    }
  },
  computed: {
    clients() {
      return this.$store.state.data.clients;
    },
    client() {
      return this.$store.getters.getClientUsingId(this.actionId);
    },
  },
};
</script>
<style lang="">
</style>
