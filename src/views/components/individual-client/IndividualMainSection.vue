<template lang="">
  <section class="main-section">
    <div class="inner-section">
    <LeftSidebarComponent :client="client" />
    <main class="ms-sm-autopx-md-4 right-area">
      <div class="right-area-inner p-relative rightInnerDarkbg">
        <div class="right-area-wrapper pt-0">
          <IndividualClientNavbar :client="client" />  
            <div class="client-list-div less-gap">
              <div class="list-wrapper listWrapperDarkBg">
                <h3 class="bold-fw fs-28 pb-2 mb-0">Scenarios</h3>
                <ul class="nav flex-column client-list-ul">
                  <li class="nav-item clientAllListItem">
                    <div class="list-groups">
                      <div class="list-div">
                        <div v-if="client.senarios && client.senarios.length > 0" class="list-div">
                            <ScenariosRow :senarios="client.senarios" />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <button class="btn d-block large-add-btn">
                  <span>+</span>
                </button>
              </div>

              <div class="list-wrapper listWrapperDarkBg">
                <h3 class="bold-fw fs-28 pb-2 mb-0">Reports</h3>
                <ul class="nav flex-column client-list-ul">
                  <li class="nav-item border-0">
                    <div class="list-groups">
                      <div v-if="client.reports && client.reports.length > 0" class="list-div">
                        <ReportRow :reports="client.reports"/>
                      </div>
                    </div>
                  </li>
                </ul>
                <button class="btn d-block large-add-btn extra">
                  <span>+</span>
                </button>
              </div>
            </div>  
        </div>
      </div>
    </main>
    </div>
      <!-- Edit Client Canvas -->
      <edit-client-canvas-modal v-if="client" :client="client"/>   
      <!-- Clone Scenario Modal start -->
  </section>
   
</template>
<script>
import testClients from "../../../services/dummy-json";
import { getParams, authHeader } from "../../../services/helper";
import LeftSidebarComponent from "../common/LeftSidebarComponent.vue";
import EditClientCanvasModal from "../modal/EditClientCanvasModal.vue";
import IndividualClientNavbar from "../individual-client/IndividualClientNavbar.vue";
import ScenariosRow from "../homepage/ScenariosRow.vue";
import ReportRow from "../homepage/ReportRow.vue";
import { getUrl } from "../../../network/url";
import { get } from "../../../network/requests";
export default {
  components: {
    EditClientCanvasModal,
    LeftSidebarComponent,
    IndividualClientNavbar,
    ScenariosRow,
    ReportRow,
  },
  data() {
    return {
      client: false,
      clientId: getParams(this.$route),
    };
  },
  methods: {
    getClient: function() {
      this.$store.dispatch("loader", true);
      get(`${getUrl("client")}${this.clientId}/`, authHeader())
        .then(response => {
          this.client = response.data.data;
          this.$store.dispatch("loader", false);
        })
        .catch(error => {
          this.$store.dispatch("loader", false);
          console.log(error);
           if(error.code === 'ERR_BAD_RESPONSE'){
            this.$toast.error(error.message);
          }
        });
    },
  },
  mounted() {
    if (this.$store.state.data.clients) {
      this.client = this.$store.getters.getClientUsingId(this.clientId);
    } else {
      this.getClient();
    }
  },
};
</script>
<style lang="">
</style>