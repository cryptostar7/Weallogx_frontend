<template>
  <div class="modal fade common-modal" id="IncompatibleIndexModal" tabindex="-1" aria-labelledby="IncompatibleIndexModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
            <img src="@/assets/images/icons/cross-grey.svg" class="img-fluid" alt="Close Modal">
          </button>
        </div>
        <div class="modal-body text-center">
          <h5 class="modal-title fs-24 semi-bold-fw" id="IncompatibleIndexModalLabel">
            {{ incompatibleTabs && incompatibleTabs.length > 1 ? 'Multiple Indexes Incompatible' : 'Index Incompatible' }}
          </h5>
          <div v-if="incompatibleTabs && incompatibleTabs.length > 1" class="fs-14 mt-3">
            <p>The following indexes are incompatible with the selected rolling time period of {{ rollingTimePeriod }} years:</p>
            <ul class="text-start mt-2 mb-3">
              <li v-for="tab in incompatibleTabs" :key="tab.tabNumber">
                <strong>Index Strategy #{{ tab.tabNumber }}:</strong> {{ tab.indexName }}
              </li>
            </ul>
            <p>The index selection has been changed to the default value of S&P 500. Please select a different index from the dropdown or change your rolling time period selection.</p>
          </div>
          <p v-else class="fs-14 mt-3">
            Your selected index "{{ incompatibleIndexName }}" is incompatible with the selected rolling time period of {{ rollingTimePeriod }} years. 
            The index selection has been changed to the default value of S&P 500. 
            Please select a different index from the dropdown or change your rolling time period selection.
          </p>
          <div class="d-inline-flex flex-column gap-13 pt-4 mt-2 pb-2">
            <button type="button" class="btn yes-delete-btn" data-bs-dismiss="modal">OK</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['incompatibleIndexName', 'incompatibleTabs', 'rollingTimePeriod']
};
</script>