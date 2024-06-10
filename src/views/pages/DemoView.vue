<template lang="">
  <div>
    
  </div>
</template>
<script>
import { get } from '../../network/requests';
import { getUrl } from '../../network/url';

export default {
  mounted() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    // fetch(getUrl("historical_report") + this.$route.params.id, requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.error(error));
    // fetch(getUrl("comparative_report_longevity") + this.$route.params.id, requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.error(error));
    // fetch(getUrl("comparative_report_ending_value") + this.$route.params.id, requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.error(error));
    // fetch(getUrl("comparative_report_death_benefit") + this.$route.params.id, requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.error(error));
    // fetch(getUrl("comparative_report_longevity_ror") + this.$route.params.id, requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.error(error));
    // fetch(getUrl("comparative_report_ending_value_ror") + this.$route.params.id, requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.error(error));
    // fetch(getUrl("comparative_report_death_benefit_ror") + this.$route.params.id, requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.error(error));


    

    get(getUrl("historical_report") + this.$route.params.id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });


    // get(getUrl("comparative_report") + this.$route.params.id)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // get(getUrl("comparative_report_longevity") + this.$route.params.id)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // get(getUrl("comparative_report_ending_value") + this.$route.params.id)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // get(getUrl("comparative_report_death_benefit") + this.$route.params.id)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // get(getUrl("comparative_report_longevity_ror") + this.$route.params.id)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // get(getUrl("comparative_report_ending_value_ror") + this.$route.params.id)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // get(getUrl("comparative_report_death_benefit_ror") + this.$route.params.id)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
}
</script>
<style lang="">
  
</style>