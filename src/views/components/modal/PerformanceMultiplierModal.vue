<template lang="">
  <section>
    <div
      class="modal fade"
      id="showHistoricalScheduleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content modalDivMain">
          <div class="modal-header" style="border: none">
            <button
              type="button"
              class="btn-close btnWhite-darkTheme"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body px-5">
            <p class="ModalHeasingPara">{{ $props.title }} Schedule</p>
            <div class="modalTableDiv">
              <table class="table">
                <thead v-if="$props.title === 'Premium Charge'">
                  <th>Year</th>
                  <th>Premium Charge</th>
                </thead>
                <thead v-else-if="$props.title === 'Flat Credit/Bonus'">
                  <th>Year</th>
                  <th>Amount</th>
                </thead>
                <thead v-else>
                  <th>Year</th>
                  <th>
                    Multiplier {{ $props.type === "rate" ? "Rate" : "Amount" }}
                  </th>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in $props.list" :key="index">
                    <td data-label="Year">{{ item.year }}</td>
                    <td
                      data-label="Rate"
                      v-if="$props.title === 'Performance Multiplier'"
                    >
                      {{ Number(item.value).toLocaleString("en-US") }}
                    </td>
                    <td data-label="Rate" v-else>
                      {{ $props.type === "rate" ? "" : "$" }}
                      {{ Number(item.value).toLocaleString("en-US")
                      }}{{ $props.type === "rate" ? "%" : "" }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["list", "type", "title"],
};
</script>
<style lang=""></style>
