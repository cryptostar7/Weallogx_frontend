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
      :id="`simulation_analysis_index${currentTab}`"
      class="form-group less w-75"
      :defaultSelected="selectedIndex"
      :list="indexStrategies"
      :showAll="true"
      @onSelectItem="updateStrategyIndex"
      @inputText="handleInputText"
      ref="selectDropdownRef"
    /> 
    <div class="formParabrdrLavelDiv mt-3 rangeSelectorLabel">
      <p class="position-relative d-flex align-items-center">
        Cap Rate
        <img src="@/assets/images/icons/info-icon.svg" alt="info" class="ms-2 info-icon-img" />
        <img src="@/assets/images/icons/dark-i-icon.svg" alt="info" class="ms-2 dark-info-icon-img" />
        <span class="info-message-participationRate" :style="`top: -3.2rem; left: -1rem;`">If your strategy does not use a cap, turn it off here.</span>
        <div class="form-check form-switch custom-switch ms-2 mb-0">
          <input
            class="form-check-input enhanceInputCheckBox less-height"
            type="checkbox"
            checked
            role=":switch"
            :id="`simulation_is_active_cap_rate_range${currentTab}`"
            @click="handleCapRate"
          />
        </div>
      </p>
      <p></p>
    </div>
    <custom-range-input ref="customInputRef1" :hiddenInputId="`simulation_cap_rate_range${currentTab}`" :isCapActive="isCapActive" :currentTab="$props.currentTab"/>

    <div class="formParabrdrLavelDiv mt-3 mb-2">
      <p class="position-relative">Participation Rate
          <img src="@/assets/images/icons/info-icon.svg" alt="info" class="ms-1 info-icon-img" />
          <img src="@/assets/images/icons/dark-i-icon.svg" alt="info" class="ms-1 dark-info-icon-img" />
          <span class="info-message-participationRate">
            To enter a Participation Rate above 200%, use the Custom Amount field.
          </span>
      </p>
      <p></p>
    </div>                     
    <custom-range-input-2 ref="customInputRef2" :hiddenInputId="`simulation_participation_range${currentTab}`"/>
    <div class="formParabrdrLavelDiv mt-3 rangeSelectorLabel">
      <p>Margin/Spread</p>
      <p></p>
    </div>
    <custom-range-input-3 ref="customInputRef3" maxLimit="20" :hiddenInputId="`simulation_margin_spread_range${currentTab}`"/>
    <div class="formParabrdrLavelDiv mt-3 rangeSelectorLabel">
      <p>Floor</p>
      <p></p>
    </div>
    <custom-range-input-3 ref="customInputRef4" :hiddenInputId="`simulation_floor_range${currentTab}`" :currentTab="currentTab"/>
    <segment-duration-year ref="customInputRef5" :hiddenInputId="`simulation_segment_year_range${currentTab}`" :currentTab="currentTab"/>
  </form>
</template>

<script>
import config from '@/services/config.js';
import CustomRangeInput from '../../../../components/common/CustomRangeInput.vue';
import CustomRangeInput2 from '../../../../components/common/CustomRangeInput2.vue';
import CustomRangeInput3 from '../../../../components/common/CustomRangeInput3.vue';
import SegmentDurationYear from './SegmentDurationYear.vue';
import SelectDropdown from '../../../../components/common/SelectDropdown.vue';

export default {
  components: {
    CustomRangeInput,
    CustomRangeInput2,
    CustomRangeInput3,
    SegmentDurationYear,
    SelectDropdown
  },
  props: ['currentTab', 'rollingTime', 'activeTab', 'isTabEnabled'],
  data() {
    return {
      isCapActive: true,
      currentSelectedIndex: null, // Track current selection
      previousIndexList: [], // Track previous list for comparison
      preservedSelection: null, // Preserve the actual input value
      isUpdatingFromProp: false, // Flag to prevent feedback loops
      selectedIndex: '', // The actual selected index to bind
      userSelectedIndex: '', // Track what the user actually selected (not defaults)
    };
  },
  computed: {
    indexStrategies() {
      let rolling = this.$props.rollingTime || 30;
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
      
      // Update selectedIndex if needed when list changes
      this.$nextTick(() => {
        this.updateSelectedIndexForNewList(filtered);
      });
      
      return filtered;
    },
  },
  mounted() {
    // Initialize previous list
    this.previousIndexList = [...this.indexStrategies];
    
    // Get initial value if it exists
    this.$nextTick(() => {
      const initialValue = document.getElementById(`simulation_analysis_index${this.currentTab}`)?.value;
      if (initialValue) {
        this.currentSelectedIndex = initialValue;
        this.preservedSelection = initialValue;
        this.selectedIndex = initialValue;
        console.log(`GrowthParameters[${this.currentTab}]: Initial value set to: ${initialValue}`);
      } else {
        // Set default if no initial value - prefer S&P 500
        const sp500 = this.indexStrategies.find(item => item.template_name === 'S&P 500');
        this.selectedIndex = sp500 ? 'S&P 500' : (this.indexStrategies[0]?.template_name || 'S&P 500');
        console.log(`GrowthParameters[${this.currentTab}]: Initial default set to: ${this.selectedIndex}`);
      }
    });
  },
  methods: {
    updateStrategyIndex: function(val) {
      let index = this.indexStrategies.filter(
        i =>
          i.template_name ===
          document.getElementById(`simulation_analysis_index${this.currentTab}`).value
      )[0];
      
      // Track the selection
      const selectedValue = document.getElementById(
        `simulation_analysis_index${this.currentTab}`
      ).value;
      this.currentSelectedIndex = selectedValue;
      this.preservedSelection = selectedValue;
      this.selectedIndex = selectedValue;
      this.userSelectedIndex = selectedValue; // Track this as a user selection
      console.log(`GrowthParameters[${this.currentTab}]: User selection updated to: ${selectedValue}`);
    },
    handleCapRate(e) {
      if (e.target.checked) {
        this.isCapActive = true;
      } else {
        this.isCapActive = false;
      }
    },
    updateData: function() {
      this.isCapActive = document.getElementById(
          `simulation_is_active_cap_rate_range${this.$props.currentTab}`
        ).checked;

      // update inputs value using ref  
      this.$refs.customInputRef1.updateData();
      this.$refs.customInputRef2.updateData();
      this.$refs.customInputRef3.updateData();
      this.$refs.customInputRef4.updateData();
      this.$refs.customInputRef5.updateData();
    },
    setSelectedIndex: function(indexValue) {
      // Update all tracking variables
      this.currentSelectedIndex = indexValue;
      this.preservedSelection = indexValue;
      this.selectedIndex = indexValue || 'S&P 500';
      
      // Update the SelectDropdown component with the new index value
      console.log(`GrowthParameters[${this.currentTab}]: setSelectedIndex called with:`, indexValue);
      
      // Use nextTick to ensure DOM is updated
      this.$nextTick(() => {
        if (this.$refs.selectDropdownRef) {
          console.log(`GrowthParameters[${this.currentTab}]: Updating SelectDropdown ref`);
          this.$refs.selectDropdownRef.templateText = this.selectedIndex;
          this.$refs.selectDropdownRef.$refs.inputRef.value = this.selectedIndex;
          // Don't emit inputText here as it will trigger our handler
        } else {
          console.log(`GrowthParameters[${this.currentTab}]: SelectDropdown ref not found`);
        }
      });
    },
    
    handleInputText: function(val) {
      console.log(`GrowthParameters[${this.currentTab}]: handleInputText called with: ${val}`);
      
      // Always preserve what the user types/selects
      this.preservedSelection = val;
      this.selectedIndex = val;
      this.userSelectedIndex = val; // Track this as a user selection too
      console.log(`GrowthParameters[${this.currentTab}]: preservedSelection and selectedIndex updated to: ${val}`);
    },
    
    updateSelectedIndexForNewList: function(newList) {
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
          const dropdown = document.getElementById(`simulation_analysis_index${this.currentTab}`);
          if (dropdown) {
            dropdown.value = defaultValue;
          }
        });
      }
      
      // Update previous list for next comparison
      this.previousIndexList = [...newList];
    }
  },
  watch: {
    indexStrategies: {
      handler(newList, oldList) {
        console.log(`GrowthParameters[${this.currentTab}]: indexStrategies watcher fired`, {
          newListLength: newList.length,
          selectedIndex: this.selectedIndex,
          rollingTime: this.$props.rollingTime
        });
        
        // Update previous list for next comparison
        this.previousIndexList = [...newList];
      },
      deep: true
    },
    
    selectedIndex(newVal, oldVal) {
      console.log(`GrowthParameters[${this.currentTab}]: selectedIndex changed from ${oldVal} to ${newVal}`);
    }
  }
};
</script>
