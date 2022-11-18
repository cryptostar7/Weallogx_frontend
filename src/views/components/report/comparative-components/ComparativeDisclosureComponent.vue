<template lang="">
 <div class="bottom-disclosure pt-0 px-3" id="disclosure1" data-dc="1">
    <div class="container-fluid">
        <div class="disclosure-div">
        <div class="disclosure-header-div d-flex align-items-center justify-content-between">
            <h4 class="disclosure-heading">Disclosure</h4>
            <div class="disclosure-right-actions">
            <button class="btn round-btn disclosure-edit" v-if="!saveDisclosure" @click="() => this.saveDisclosure = true" >
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
            <button class="btn round-btn disclosure-save " v-if="saveDisclosure" @click="saveMessage()">
                <span>Save</span>
                <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
                <rect x="15.6938" y="2.42676" width="14.1407" height="2.12203" rx="1.06101"
                    transform="rotate(135 15.6938 2.42676)" fill="#9D9D9D" />
                <rect x="5.74683" y="12.4258" width="7.78182" height="2.12203" rx="1.06101"
                    transform="rotate(-135 5.74683 12.4258)" fill="#9D9D9D" />
                </svg>
            </button>
            </div>
        </div>
        <div :class="`disclosure-text-wrapper ${saveDisclosure ? 'editable':''}`">
            <div class="disclosure-textarea" contenteditable="true" ref="editableDiv" @focus="() => this.saveDisclosure = true" @input="handleDisclosure()">
            {{disclosure_msg}}
            </div>
        </div>
        <div class="disclosure-footer">
            <div class="row">
            <div class="col-md-12 pb-3" v-if="feetab">
              <p class="mb-1"><b>Total Value</b> means cumulative net distributions plus ending account value or death benefit. In other words, what you get out of the account.</p>
              <p class="mb-1"><b>Value Efficiency</b> means the ratio of total value to comprehensive fees. In other words, for every dollar of fees, what is the return you get for that fee in terms of total value?</p>
              <p class="mb-1"><b>Fees</b> include recurring fees (such as management fees and asset fees), transaction fees, and taxes. For the LIRP, fees include all current costs of insurance, including administrative, mortality, and coverage expenses, as detailed by the illustration.</p>
            </div>  
            <div class="col-md-6">
                <h6 class="bold-one">Fees assumed:</h6>
                <div>
                <p><span>Brokerage Account: <b>1.5%</b> per annum;</span>
                    <span>401K/IRA: <b>1.5%</b> per annum; </span>
                    <span>Annuity: <b>2.3%</b> per annum; </span>
                    <span>LIRP: actual current costs of insurance, as per the carrier
                    illustration</span>
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
 </div>

 <!-- Disclosure Required -->

  <div class="modal fade common-modal disclosure-modal" id="disclosureRequiredModal" ref="disclosureModal" tabindex="-1" aria-labelledby="disclosureRequiredLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
            <img src="@/assets/images/icons/cross-grey.svg" class="img-fluid" alt="Close Modal"></button>
        </div>
        <div class="modal-body text-center">
          <h5 class="modal-title fs-24 semi-bold-fw" id="disclosureRequiredLabel">Disclosure Required</h5>
          <p class="fs-14">A discourse is required. You may use the default disclosure <br> or use your own.</p>
          <div class="d-inline-flex flex-column gap-13 pt-4 mt-2 pb-2">
            <button type="button" class="btn yes-delete-btn" @click="setDefaultMessage()" data-bs-dismiss="modal" aria-label="Close">Use Default</button>
            <button type="button" class="btn modal-cancel-btn" data-bs-dismiss="modal" aria-label="Close" @click="() => $refs.editableDiv.focus()">Use My Own</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Disclosure Required Ends -->
</template>
<script>

export default {
  props:['feetab'],
  data() {
    return {
      saveDisclosure: false,
      disclosure_msg:'',
    };
  },
  mounted(){
    this.disclosure_msg = this.$store.state.data.disclosure.comparative_msg;
  },
  methods: {
    handleDisclosure: function() {
        if(!this.$refs.editableDiv.innerHTML){
          new bootstrap.Modal(this.$refs.disclosureModal).show();
        }
    },
    setDefaultMessage: function(){
      this.$refs.editableDiv.innerHTML = this.disclosure_msg;
    }, 
    saveMessage: function(){
        if(!this.$refs.editableDiv.innerHTML){
         return new bootstrap.Modal(this.$refs.disclosureModal).show();
        }
        this.saveDisclosure = false;
    }
  },
};
</script>
<style lang="">
</style>