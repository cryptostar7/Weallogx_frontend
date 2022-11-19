<template lang="">
  <div class="bottom-disclosure pt-0 px-3" id="disclosure7" data-dc="7">
    <div class="disclosure-div">
      <div class="disclosure-header-div d-flex align-items-center justify-content-between">
        <h4 class="disclosure-heading">Disclosure</h4>
        <div class="disclosure-right-actions">
          <button class="btn round-btn disclosure-edit">
            <span>Edit</span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M10.8172 1.59583H2.33885C1.29631 1.59583 0.451172 2.44097 0.451172 3.4835V12.1384C0.451172 13.1809 1.29631 14.026 2.33885 14.026H10.9937C12.0362 14.026 12.8814 13.1809 12.8814 12.1384V4.69293L10.8814 6.69291V12.026H2.45117V3.59583H8.81725L10.8172 1.59583Z"
                fill="#9D9D9D"></path>
              <path d="M5.51465 9.51606L6.66809 6.70245L8.3313 8.30895L5.51465 9.51606Z" fill="#9D9D9D">
              </path>
              <path
                d="M12.7425 0.604405C12.7865 0.560484 12.8575 0.559852 12.9022 0.602984L14.4181 2.06566C14.4639 2.10987 14.4646 2.18305 14.4196 2.22811L8.37761 8.28205C8.33363 8.32611 8.26244 8.32672 8.21773 8.28341L6.69811 6.8118C6.6524 6.76754 6.65182 6.69441 6.69682 6.64942L12.7425 0.604405Z"
                fill="#9D9D9D"></path>
            </svg>
          </button>
          <button class="btn round-btn disclosure-save d-none">
            <span>Save</span>
            <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
              <rect x="15.6938" y="2.42676" width="14.1407" height="2.12203" rx="1.06101"
                transform="rotate(135 15.6938 2.42676)" fill="#9D9D9D"></rect>
              <rect x="5.74683" y="12.4258" width="7.78182" height="2.12203" rx="1.06101"
                transform="rotate(-135 5.74683 12.4258)" fill="#9D9D9D"></rect>
            </svg>
          </button>
        </div>
      </div>
      <div class="disclosure-text-wrapper">
        <div class="disclosure-textarea" contenteditable="true">
          This chart references data drawn from simulations of a Theoretical Synthetic Asset (TSA) that does
          not exist and cannot be purchased in the real world. It is not a real world insurance policy. It
          is 
          not an official illustration. You may not assume the data presented here relating to the TSA
          infers
          or expresses any guarantee of how a real world insurance policy would perform. Comparisons made to
          the official <b>Pacific Life</b> illustration(s), which use hypothetical assumptions that are not
          guaranteed, are designed to be educational and instructive as to how the insurance policies
          compared
          <b>may have</b> performed through different historical periods. The data uses the raw returns of
          the
          <b>S&P 500</b>, and simulates the potential returns that the insurance policy <b>may have</b>
          achieved if the current cap rates, participation rates, floors, fees, and borrowing costs were in
          place during the historical periods tested. Cap rates, participation rates, and policy fees can
          and
          do change. We analyzed <b>546 40</b>-year periods of the index. In the case where a time period
          portrayed is greater than <b>40</b> years, the data was looped for purposes of the simulation.
          This
          simulation of a TSA took the actual current monthly fees of the <b>Pacific Life</b> insurance
          policy
          and increased them by 15%. All distributions assume the use of an index/participating loan. We
          assumed a <b>5.4%</b> borrowing rate in the simulation of the TSA. Presented here are the most
          recent, worst, median, and best <b>40</b>-year periods with respect to the insurance policy’s
          intended allocation in the <b>S&P 500</b> index strategy. However, these results are not the
          results
          of an actual insurance policy, but those of the TSA, which does not exist in the real world. It is
          entirely possible that the real world experience of the actual policy could be even worse than the
          worst <b>40</b>-year period analyzed, just as it is entirely possible that the real world policy
          could perform better than the best <b>40</b>-year period analyzed.
        </div>
      </div>
      <div class="disclosure-footer">
        <div class="row">
          <div class="col-md-6">
            <h6 class="bold-one">Fees assumed:</h6>
            <div>
              <p><span>Brokerage Account: <b>1.5%</b> per annum;</span>
                <span>401K/IRA: <b>1.5%</b> per annum; </span>
                <span>Annuity: <b>2.3%</b> per annum; </span>
                <span>LIRP: actual current costs of insurance, as per the carrier illustration</span>
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div>
              <h6 class="bold-one">Taxes assumed: </h6>
              <p><span><b>27%</b> years <b>1-6</b>;</span>
                <span><b>35%</b> years <b>7+</b>;</span>
                <!-- [If capital gains are included for a taxable investment, then we include]: -->
                <span>Capital gains ratio: <b>50%</b>;</span>
                <span>Capital gains tax rate: <b>20%</b>;</span>
                <!-- If taxes are scheduled, then the last line is simply: -->
              </p>
            </div>
          </div>
        </div>
        <p><span>Taxes assumed: <b>Per schedule</b></span></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="">
</style>