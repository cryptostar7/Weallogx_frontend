<template lang="">
  <section class="main-section">
    <div class="inner-section">
      <LeftSidebarComponent />
      <main class="right-area">
        <div class="right-area-inner p-relative rightInnerDarkbg">
          <div class="right-area-wrapper">
            <ChooseClientNavbar />
            <div class="client-list-div">
              <ul v-if="clients.length > 0" class="nav flex-column client-list-ul">
                <IndividualClientRow :clients="clients"/>
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
import ChooseClientNavbar from "../homepage/ChooseClientNavbar.vue";
import IndividualClientRow from "../homepage/IndividualClientRow.vue";

export default {
  components: { LeftSidebarComponent, ChooseClientNavbar, IndividualClientRow },
  data() {
    return {
      clients: [
        {
          name: "Alberta, Carter",
          senarios: [
            {
              name: "Allianz Parse",
              age: "34",
              created_at: "4/12/22",
              reports: [
                {
                  name: "Allianz Parse Report 1",
                  description: "Report description goes here",
                  created_at: "8/12/22",
                  senario: {
                    name: "Allianz Parse 1",
                  },
                },
                {
                  name: "Allianz Parse Report 2",
                  description: "Report description goes here",
                  created_at: "3/11/22",
                  senario: {
                    name: "Allianz Parse 2",
                  },
                },
              ],
            },
            {
              name: "Allianz Parse 2",
              age: "37",
              created_at: "13/2/22",
              reports: [
                {
                  name: "Allianz Parse Report",
                  description: "34",
                  senario: {
                    name: "Allianz Parse",
                  },
                },
              ],
            },
          ],
          reports: [
            {
              name: "Allianz Parse Report 1",
              description: "Report description goes here 1",
              created_at: "13/12/22",
              senario: {
                name: "Allianz Parse 1",
              },
            },
            {
              name: "Allianz Parse Report 2",
              description: "Report description goes here 2",
              created_at: "3/02/22",
              senario: {
                name: "Allianz Parse 2",
              },
            },
          ],
        },
        {
          name: "Arnold, Krista",
          senarios: [
            {
              name: "Allianz Parse",
              age: "34",
              created_at: "3/12/22",
            },
            {
              name: "Allianz Parse",
              age: "34",
              created_at: "3/12/22",
            },
          ],
          reports: [
            {
              name: "Allianz Parse Report",
              description: "Report description goes here",
              created_at: "3/12/22",
              senario: {
                name: "Allianz Parse",
              },
            },
            {
              name: "Allianz Parse Report",
              description: "Report description goes heres",
              created_at: "3/12/22",
              senario: {
                name: "Allianz Parse",
              },
            },
          ],
        },
      ],
    };
  },
};
</script>
<style lang="">
</style>
