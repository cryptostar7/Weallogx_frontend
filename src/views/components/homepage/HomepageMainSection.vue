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
  <delete-client-modal @deleteClient="deleteClient"/>
  
  <!-- Edit Client Canvas -->
  <edit-client-canvas-modal :client="client"/>
  
  </section>
</template>
<script>
import LeftSidebarComponent from "../common/LeftSidebarComponent.vue";
import ChooseClientNavbar from "./ChooseClientNavbar.vue";
import IndividualClientRow from "./IndividualClientRow.vue";
import DeleteClientModal from "../modal/DeleteClientModal.vue";
import EditClientCanvasModal from "../modal/EditClientCanvasModal.vue";

import testClients from "../../../services/dummy-json.js";
import { get, remove } from "../../../network/requests";
import { getUrl } from "../../../network/url";
import { authHeader, getFirstError } from "../../../services/helper";
export default {
  components: {
    LeftSidebarComponent,
    ChooseClientNavbar,
    IndividualClientRow,
    DeleteClientModal,
    EditClientCanvasModal,
  },
  data() {
    return {
      sortedList: false,
      search: "",
      actionId: false,
    };
  },
  methods: {
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
    setActionId: function(id) {
      this.actionId = id;
    },
    getClient: function() {
      this.$store.dispatch("loader", true);
      get(getUrl("client"), authHeader())
        .then(response => {
          this.$store.dispatch("clients", response.data.data);
          this.sortedList = response.data.data;
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
    removeClient: function(deleteId) {
      this.sortedList = this.clients.filter(item => {
        return item.id !== deleteId;
      });
      return this.$store.dispatch("clients", this.sortedList);
    },
    newModified: function() {
      return (this.sortedList = this.clients.sort(
        (a, b) => new Date(a.updated_at) - new Date(b.updated_at)
      ));
    },
    oldModified: function() {
      return (this.sortedList = this.clients.sort(
        (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
      ));
    },
    sortAsc: function() {
      function compare(a, b) {
        if (a.firstname < b.firstname) return -1;
        if (a.firstname > b.firstname) return 1;
        return 0;
      }

      return (this.sortedList = this.clients.sort(compare));
    },
    sortDesc: function() {
      function compare(a, b) {
        if (a.firstname > b.firstname) return -1;
        if (a.firstname < b.firstname) return 1;
        return 0;
      }

      return (this.sortedList = this.clients.sort(compare));
    },
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
