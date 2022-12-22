<template lang="">
  <section class="main-section">
    <div class="inner-section">
      <LeftSidebarComponent />
      <main class="right-area">
        <div class="right-area-inner p-relative rightInnerDarkbg">
          <div class="right-area-wrapper">
            <ChooseClientNavbar  @newModified="newModified" @oldModified="oldModified" @sortAsc="sortAsc" @sortDesc="sortDesc" @updateList="updateList"/>
            <div class="client-list-div">
              <ul v-if="clients.length > 0" class="nav flex-column client-list-ul">
                <IndividualClientRow :clients="clients" :search="search" />
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>
<script>
import LeftSidebarComponent from "../common/LeftSidebarComponent.vue";
import ChooseClientNavbar from "./ChooseClientNavbar.vue";
import IndividualClientRow from "./IndividualClientRow.vue";
import testClients from "../../../services/dummy-json.js";
import { get } from "../../../network/requests";
import { getUrl } from "../../../network/url";
import { authHeader } from "../../../services/helper";
export default {
  components: { LeftSidebarComponent, ChooseClientNavbar, IndividualClientRow },
  data() {
    return {
      clients: false,
      sortedList: false,
      search: "",
    };
  },
  methods: {
    getClient: function() {
      this.$store.dispatch("loader", true);
      get(getUrl("client"), authHeader())
        .then(response => {
          console.log(response.data.data);
          this.$store.dispatch("clients", response.data.data);
          this.clients = response.data.data;
          this.sortedList = response.data.data;
          this.$store.dispatch("loader", false);
        })
        .catch(error => {
          console.log(error);
          this.$store.dispatch("loader", false);
        });
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
    if (this.$store.state.data.clients) {
      this.clients = this.$store.state.data.clients;
      this.sortedList = this.$store.state.data.clients;
    } else {
      this.getClient();
    }
  },
};
</script>
<style lang="">
</style>
