<template lang="">
  <div></div>
</template>
<script>
import { get } from "../../network/requests";
import { getUrl } from "../../network/url";

export default {
  mounted() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(getUrl("comparative_report") + 380, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

    fetch(getUrl("comparative_report_longevity") + 380, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

    fetch(getUrl("comparative_report_ending_value") + 380, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

    fetch(getUrl("comparative_report_death_benefit") + 380, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

    fetch(getUrl("comparative_report_longevity_ror") + 380, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

    fetch(getUrl("comparative_report_ending_value_ror") + 380, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

    fetch(getUrl("comparative_report_death_benefit_ror") + 380, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));


    // get(getUrl("comparative_report") + 380)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // get(getUrl("comparative_report_longevity") + 380)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // get(getUrl("comparative_report_ending_value") + 380)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // get(getUrl("comparative_report_death_benefit") + 380)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // get(getUrl("comparative_report_longevity_ror") + 380)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // get(getUrl("comparative_report_ending_value_ror") + 380)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // get(getUrl("comparative_report_death_benefit_ror") + 380)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
};
</script>
<style lang=""></style>
