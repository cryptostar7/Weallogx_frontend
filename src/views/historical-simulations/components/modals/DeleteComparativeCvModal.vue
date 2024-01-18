<template lang="">
  <div class="modal fade common-modal" id="DeleteComparativeCvModal" tabindex="-1" aria-labelledby="DeleteComparativeCvModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
            <img src="@/assets/images/icons/cross-grey.svg" class="img-fluid" alt="Close Modal">
          </button>
        </div>
        <div class="modal-body text-center">
          <h5 class="modal-title fs-24 semi-bold-fw" id="DeleteComparativeCvModalLabel">Delete CV</h5>
          <p class="fs-14">This action cannot be undone. To re-add a Comparative Vehicle you will have to go back to Scenario creation.</p>
          <div class="d-inline-flex flex-column gap-13 pt-4 mt-2 pb-2">
            <button type="button" class="btn yes-delete-btn" data-bs-dismiss="modal" @click="deleteCv()">Yes, Delete</button>
            <button type="button" class="btn modal-cancel-btn" data-bs-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { authHeader, getFirstError } from '../../../../services/helper';
import { getUrl } from '../../../../network/url';
import { patch } from '../../../../network/requests';

export default {
  methods:{
    deleteCv: function(){
      this.$store.dispatch('reportCvDeleteId', Number(document.getElementById('comparative_cv_delete_id').value));
      let index = Number(document.getElementById('comparative_cv_delete_id').value);
      let cv = this.$store.state.data.report.comparative
      if(cv && cv.comperative_vehicle_id){
        let cvId = cv.comperative_vehicle_id;
        var data = {vehicle_type_1 : null};

        if(index === 2){
          data = {vehicle_type_2 : null};
        }

        if(index === 3){
          data = {vehicle_type_3 : null};       
        }

        patch(`${getUrl('comparative')}${cv.comperative_vehicle_id}/`, data, authHeader()).then((response) => {
          this.$toast.success('CV deleted successfully!')
        }).catch((error) => {
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          }else{
            this.$toast.error(getFirstError(error));
          }
          this.$store.dispatch("loader", false);
        }) 
      }
    }
  }
};
</script>
<style lang="">
</style>