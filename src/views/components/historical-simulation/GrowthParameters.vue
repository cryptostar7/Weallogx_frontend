<template>
    <div class="indexStrategyallDivs active  mt-3 accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#growth-parameters1" aria-expanded="false" aria-controls="growth-parameters1">
        <div class="d-flex justify-content-between align-items-center">
        <div class="indexStrategyheadBrdr">
            <p>Growth Parameters
                <svg class="ms-2 boxTickImage" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10.5" cy="10.5" r="9.75" fill="#0E6651" stroke="#14EAB7" stroke-width="1.5" />
                    <rect x="16.6006" y="7.91222" width="9.99563" height="1.5" rx="0.75" transform="rotate(135 16.6006 7.91222)" fill="#14EAB7" />
                    <rect x="9.5693" y="14.9806" width="5.50074" height="1.5" rx="0.75" transform="rotate(-135 9.5693 14.9806)" fill="#14EAB7" />
                </svg>
            </p>
            <div></div>
        </div>
        </div>
    </div>
    <form id="growth-parameters1" class="accordion-collapse collapse analysisParametersContent" data-bs-parent="#growth-parameters1" autocomplete="off">
        <div class="formParabrdrLavelDiv mb-1">
            <p>Index</p>
            <p></p>
        </div>
        <SelectDropdown
          :id="`analysis_index${currentTab}`"
          class="form-group less w-75"
          :defaultSelected="selectedIndex"
          :list="indexStrategies"
          :showAll="true"
          @onSelectItem="updateStrategyIndex"
          @inputText="handleInputText"
          ref="selectDropdownRef"
        /> 
        <div class="formParabrdrLavelDiv mt-3 rangeSelectorLabel">
        <p class="position-relative d-flex align-items-center">Cap Rate
          <img src="@/assets/images/icons/info-icon.svg" alt="info" class="ms-2 info-icon-img">
            <img src="@/assets/images/icons/dark-i-icon.svg" alt="info" class="ms-2 dark-info-icon-img">
            <span class="info-message-participationRate" :style="`top: -3.2rem; left: -1rem;`">If your strategy does not use a cap, turn it off here.</span>

            <div class="form-check form-switch custom-switch ms-2 mb-0"><input class="form-check-input enhanceInputCheckBox less-height" type="checkbox" checked role=":switch" :id="`is_active_cap_rate_range${currentTab}`" @click="handleCapRate"></div>
        </p>
        <p></p>
        </div>
        <custom-range-input :hiddenInputId="`cap_rate_range${currentTab}`" :isCapActive="isCapActive" :update="$props.update" :currentTab="$props.currentTab" @setUpdated="() => $emit('setUpdated')"/>

        <div class="formParabrdrLavelDiv mt-3 mb-2">
        <p class="position-relative">Participation Rate
            <img src="@/assets/images/icons/info-icon.svg" alt="info" class="ms-1 info-icon-img">
            <img src="@/assets/images/icons/dark-i-icon.svg" alt="info" class="ms-1 dark-info-icon-img">
            <span class="info-message-participationRate">
            To enter a Participation Rate above 200%, use the Custom Amount field.
            </span>
        </p>
        <p></p>
        </div>                     
        <custom-range-input-2 :hiddenInputId="`participation_range${currentTab}`" :update="$props.update" @setUpdated="() => $emit('setUpdated')"/>
        <div class="formParabrdrLavelDiv mt-3 rangeSelectorLabel">
        <p>Margin/Spread</p>
        <p></p>
        </div>
        <custom-range-input-3 :hiddenInputId="`margin_spread_range${currentTab}`" maxLimit="20" :update="$props.update" @setUpdated="() => $emit('setUpdated')"/>
        <div class="formParabrdrLavelDiv mt-3 rangeSelectorLabel">
        <p>Floor</p>
        <p></p>
        </div>
        <custom-range-input-3 :hiddenInputId="`floor_range${currentTab}`" :currentTab="currentTab" :update="$props.update" @setUpdated="() => $emit('setUpdated')"/>
        <segment-duration-year :hiddenInputId="`segment_year_range${currentTab}`" :currentTab="currentTab" :update="$props.update" @setUpdated="() => $emit('setUpdated')"/>
    </form>
</template>

<script>
import config from '@/services/config';
import CustomRangeInput from '../common/CustomRangeInput.vue';
import CustomRangeInput2 from '../common/CustomRangeInput2.vue';
import CustomRangeInput3 from '../common/CustomRangeInput3.vue';
import SelectDropdown from '../common/SelectDropdown.vue';
import SegmentDurationYear from './SegmentDurationYear.vue';

export default {
  components: {
    CustomRangeInput,
    CustomRangeInput2,
    CustomRangeInput3,
    SegmentDurationYear,
    SelectDropdown,
  },
  props: ['currentTab', 'update', 'rollingTime', 'activeTab', 'isTabEnabled'],
  emits: ['setUpdated', 'indexBecameIncompatible'],
  
  mounted() {
    // Initialize previous list
    this.previousIndexList = [...this.indexStrategies];
    
    // Get initial value if it exists
    this.$nextTick(() => {
      const initialValue = document.getElementById(`analysis_index${this.currentTab}`)?.value;
      if (initialValue) {
        this.selectedIndex = initialValue;
        // Don't set userSelectedIndex for initial values - only for user changes
        console.log(`GrowthParameters[${this.currentTab}]: Initial value set to: ${initialValue}`);
      } else {
        // Set default if no initial value - prefer S&P 500
        const sp500 = this.indexStrategies.find(item => item.template_name === 'S&P 500');
        this.selectedIndex = sp500 ? 'S&P 500' : (this.indexStrategies[0]?.template_name || 'S&P 500');
        console.log(`GrowthParameters[${this.currentTab}]: Initial default set to: ${this.selectedIndex}`);
      }
    });
  },
  data() {
    return {
      isCapActive: true,
      selectedIndex: '', // Track the selected index
      previousIndexList: [], // Track previous list for comparison
      userSelectedIndex: '', // Track what the user actually selected (not defaults)
    };
  },
  computed: {
    indexStrategies() {
      const rolling = this.rollingTime || 30;
      const currentYear = new Date().getFullYear();
      const earliestRequiredYear = currentYear - rolling;
      
      const filtered = config.INDEX_STRATEGIES.filter(item => {
        // Check max_limit (rolling time period limit)
        if (item.max_limit < rolling) return false;
        
        // Check if we have enough historical data for this rolling period
        const iscConfig = config.ISC_INDEX_STRATEGIES.find(isc => isc.template_name === item.template_name);
        if (iscConfig && earliestRequiredYear < iscConfig.max_year) {
          return false;
        }
        
        return true;
      }) || [];
      
      // Update selectedIndex when list changes
      this.$nextTick(() => {
        this.updateSelectedIndexForNewList(filtered);
      });
      
      return filtered;
    }
  },
  watch: {
    '$props.update'(e) {
      if (e) {
        this.isCapActive = document.getElementById(`is_active_cap_rate_range${this.$props.currentTab}`).checked;
      }
    },
    
    selectedIndex(newVal, oldVal) {
      console.log(`GrowthParameters[${this.currentTab}]: selectedIndex changed from ${oldVal} to ${newVal}`);
    }
  },
  methods: {
    updateStrategyIndex(val) {
      let index = this.indexStrategies.filter((i) => {
        return i.template_name === document.getElementById(`analysis_index${this.currentTab}`).value;
      })[0];
      
      // Update selected index and track as user selection
      const selectedValue = document.getElementById(`analysis_index${this.currentTab}`).value;
      this.selectedIndex = selectedValue;
      this.userSelectedIndex = selectedValue; // Track this as a user selection
      console.log(`GrowthParameters[${this.currentTab}]: User selection updated to: ${selectedValue}`);
    },
    
    handleCapRate(e) {
      if (e.target.checked) this.isCapActive = true;
      else this.isCapActive = false;
    },
    
    handleInputText(val) {
      console.log(`GrowthParameters[${this.currentTab}]: handleInputText called with: ${val}`);
      this.selectedIndex = val;
      this.userSelectedIndex = val; // Track this as a user selection too
    },
    
    updateSelectedIndexForNewList(newList) {
      console.log(`GrowthParameters[${this.currentTab}]: updateSelectedIndexForNewList called`, {
        currentSelection: this.selectedIndex,
        newListLength: newList.length,
        rollingTime: this.rollingTime,
        previousListLength: this.previousIndexList.length,
        newListItems: newList.map(i => i.template_name),
        previousListItems: this.previousIndexList.map(i => i.template_name)
      });
      
      // If we have a user-selected index, check if it's still valid
      if (this.userSelectedIndex) {
        const stillValid = newList.find(item => item.template_name === this.userSelectedIndex);
        
        if (stillValid) {
          console.log(`GrowthParameters[${this.currentTab}]: User selection ${this.userSelectedIndex} is still valid`);
          // Keep the user's selection
          this.selectedIndex = this.userSelectedIndex;
          return;
        } else {
          // User selection became incompatible - always emit event for enabled tabs
          console.log(`GrowthParameters[${this.currentTab}]: User selection ${this.userSelectedIndex} became incompatible`);
          
          // Only emit the incompatible event if this tab is enabled
          if (this.isTabEnabled) {
            console.log(`GrowthParameters[${this.currentTab}]: *** EMITTING indexBecameIncompatible for ${this.userSelectedIndex} (TAB ENABLED) ***`);
            this.$emit('indexBecameIncompatible', {
              indexName: this.userSelectedIndex,
              tabNumber: this.currentTab
            });
          } else {
            console.log(`GrowthParameters[${this.currentTab}]: Index ${this.userSelectedIndex} became incompatible but tab is disabled`);
          }
          
          // Clear user selection since it's no longer valid
          this.userSelectedIndex = '';
        }
      }
      
      // Set default if no valid selection - prefer S&P 500 if available
      if (!this.selectedIndex || !newList.find(item => item.template_name === this.selectedIndex)) {
        // First try to use S&P 500 if it's in the filtered list
        const sp500 = newList.find(item => item.template_name === 'S&P 500');
        const defaultValue = sp500 ? 'S&P 500' : (newList[0]?.template_name || 'S&P 500');
        
        console.log(`GrowthParameters[${this.currentTab}]: Setting default to: ${defaultValue} (S&P 500 available: ${!!sp500})`);
        this.selectedIndex = defaultValue;
        
        // Also update the dropdown UI to reflect the new selection
        this.$nextTick(() => {
          const dropdown = document.getElementById(`analysis_index${this.currentTab}`);
          if (dropdown) {
            dropdown.value = defaultValue;
          }
        });
      }
      
      // Update previous list for next comparison
      this.previousIndexList = [...newList];
    }
  },
};
</script>
