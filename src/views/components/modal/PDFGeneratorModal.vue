<template>
  <div class="modal fade common-modal common-modal-responsive" id="PDFGeneratorModal" tabindex="-1"
    aria-labelledby="PDFGeneratorModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header border-0 pb-0">
          <h3 class="modal-title fw-bold">
            Generate {{ reportType === 'comparative' ? 'Comparative Analysis' : 'Historical Simulation' }} Report
          </h3>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body pt-2">
          <!-- Subtitle -->
          <p class="text-muted mb-4">
            Choose the elements you want to include in your PDF report.
          </p>
          
          <div class="container-fluid px-0">
                
            <!-- Select All Option -->
            <div class="select-all-section mb-3">
              <div class="form-check d-flex align-items-center">
                <input 
                  class="form-check-input me-2" 
                  type="checkbox" 
                  :checked="isAllSelected"
                  @change="toggleSelectAll"
                  id="selectAll"
                  style="width: 20px; height: 20px; border-color: #20c997;">
                <label class="form-check-label ms-2" for="selectAll" style="cursor: pointer;">
                  <strong style="font-size: 16px; color: #20c997;">Select All ({{ selectedComponents.length }} selected)</strong>
                </label>
              </div>
            </div>
            
            <hr class="my-3">
                
            <!-- Scrollable Component Selection -->
            <div class="component-selection-scrollable">
              <!-- Comparative Analysis Section (only show if reportType is 'comparative' or not historical-only) -->
              <div class="component-category mb-3" v-if="reportType !== 'historical' && reportTabs.comparative && reportTabs.comparative.length > 0">
                <div class="mb-3">
                  <h5 class="category-title text-muted">Comparative Analysis</h5>
                </div>
                <div class="components-grid">
                  <div v-for="(component, index) in reportTabs.comparative" :key="component.key">
                    <div class="component-item" @click="toggleComponent(component.key)">
                      <div class="d-flex align-items-start w-100">
                        <div class="component-checkbox me-3">
                          <input 
                            type="checkbox" 
                            class="form-check-input" 
                            :checked="selectedComponents.includes(component.key)"
                            :id="`component-${component.key}`"
                            @click.stop="toggleComponent(component.key)"
                            style="width: 18px; height: 18px; margin-top: 2px;" />
                        </div>
                        <div class="component-info flex-grow-1">
                          <div class="d-flex align-items-center mb-1">
                            <span class="component-icon me-2" style="color: #20c997; font-size: 18px; display: inline-flex; align-items: center;">
                              <i :class="getComponentIcon(component.key)"></i>
                            </span>
                            <label :for="`component-${component.key}`" class="component-title mb-0" style="cursor: pointer; color: #20c997; font-weight: 500; font-size: 16px;">
                              {{ component.name }}
                              <span class="ms-2 text-muted" style="font-weight: normal;" v-if="getComponentCount(component.key) > 1">{{ getComponentCount(component.key) }}</span>
                            </label>
                          </div>
                          <p class="component-description text-muted mt-1 mb-0" style="font-size: 14px; line-height: 1.5;">
                            {{ getComponentDescription(component.key) }}
                          </p>
                        </div>
                        <div class="ms-auto" v-if="getComponentCount(component.key) > 1">
                          <button 
                            @click.stop="toggleExpanded(component.key)"
                            class="btn btn-sm p-1"
                            style="background: none; border: none; color: #6c757d;">
                            <i class="fas" :class="isExpanded(component.key) ? 'fa-chevron-down' : 'fa-chevron-right'" style="font-size: 14px;"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Sub-items -->
                    <div v-if="isExpanded(component.key) && getSubItems(component.key)" class="sub-items-container ms-4 mb-2">
                      <div v-for="subItem in getSubItems(component.key)" 
                           :key="subItem.key" 
                           class="sub-item p-2 mb-1"
                           @click="toggleSubItem(subItem.key, component.key)"
                           style="background-color: #f8f9fa; border-radius: 6px; cursor: pointer;">
                        <div class="d-flex align-items-center">
                          <input 
                            type="checkbox" 
                            class="form-check-input me-3" 
                            :checked="isSubItemSelected(subItem.key)"
                            @click.stop="toggleSubItem(subItem.key, component.key)"
                            style="width: 16px; height: 16px;" />
                          <label class="mb-0" style="cursor: pointer; font-size: 14px; color: #495057;">
                            {{ subItem.name }}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Historical Simulation Section -->
              <div class="component-category mb-3" v-if="reportTabs.historical && reportTabs.historical.length > 0">
                <div class="mb-3" v-if="reportType !== 'historical'">
                  <h5 class="category-title text-muted">Historical Simulation</h5>
                </div>
                <div class="components-grid">
                  <div v-for="(component, index) in reportTabs.historical" :key="component.key">
                    <div class="component-item" @click="toggleComponent(component.key)">
                      <div class="d-flex align-items-start w-100">
                        <div class="component-checkbox me-3">
                          <input 
                            type="checkbox" 
                            class="form-check-input" 
                            :checked="selectedComponents.includes(component.key)"
                            :id="`component-hist-${component.key}`"
                            @click.stop="toggleComponent(component.key)"
                            style="width: 18px; height: 18px; margin-top: 2px;" />
                        </div>
                        <div class="component-info flex-grow-1">
                          <div class="d-flex align-items-center mb-1">
                            <span class="component-icon me-2" style="color: #20c997; font-size: 18px; display: inline-flex; align-items: center;">
                              <i :class="getComponentIcon(component.key)"></i>
                            </span>
                            <label :for="`component-hist-${component.key}`" class="component-title mb-0" style="cursor: pointer; color: #20c997; font-weight: 500; font-size: 16px;">
                              {{ component.name }}
                              <span class="ms-2 text-muted" style="font-weight: normal;" v-if="getComponentCount(component.key) > 1">{{ getComponentCount(component.key) }}</span>
                            </label>
                          </div>
                          <p class="component-description text-muted mt-1 mb-0" style="font-size: 14px; line-height: 1.5;">
                            {{ getComponentDescription(component.key) }}
                          </p>
                        </div>
                        <div class="ms-auto" v-if="getComponentCount(component.key) > 1">
                          <button 
                            @click.stop="toggleExpanded(component.key)"
                            class="btn btn-sm p-1"
                            style="background: none; border: none; color: #6c757d;">
                            <i class="fas" :class="isExpanded(component.key) ? 'fa-chevron-down' : 'fa-chevron-right'" style="font-size: 14px;"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Sub-items -->
                    <div v-if="isExpanded(component.key) && getSubItems(component.key)" class="sub-items-container ms-4 mb-2">
                      <div v-for="subItem in getSubItems(component.key)" 
                           :key="subItem.key" 
                           class="sub-item p-2 mb-1"
                           @click="toggleSubItem(subItem.key, component.key)"
                           style="background-color: #f8f9fa; border-radius: 6px; cursor: pointer;">
                        <div class="d-flex align-items-center">
                          <input 
                            type="checkbox" 
                            class="form-check-input me-3" 
                            :checked="isSubItemSelected(subItem.key)"
                            @click.stop="toggleSubItem(subItem.key, component.key)"
                            style="width: 16px; height: 16px;" />
                          <label class="mb-0" style="cursor: pointer; font-size: 14px; color: #495057;">
                            {{ subItem.name }}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                
            <!-- Generate Button -->
            <div class="d-flex justify-content-end mt-4 border-top pt-3">
              <button type="button" class="btn btn-outline-secondary me-2 px-4" data-bs-dismiss="modal">
                Cancel
              </button>
              <button type="button" 
                      class="btn btn-success px-4"
                      :disabled="selectedComponents.length === 0 || isGenerating"
                      @click="generatePDF"
                      style="background-color: #20c997; border-color: #20c997;">
                <span v-if="!isGenerating">
                  Generate PDF ({{ selectedComponents.length }})
                </span>
                <span v-else>
                  <i class="fas fa-spinner fa-spin"></i> Generating PDF...
                </span>
              </button>
            </div>
                
            <!-- Error Message -->
            <div v-if="errorMessage" class="alert alert-danger mt-3">
              {{ errorMessage }}
            </div>
            
            <!-- Success Message -->
            <div v-if="successMessage" class="alert alert-success mt-3">
              {{ successMessage }}
              <button @click="downloadPDF" class="btn btn-sm btn-success ms-2" :disabled="!downloadUrl">
                <i class="fas fa-download"></i> Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { authHeader } from '../../../services/helper';

export default {
  name: 'PDFGeneratorModal',
  props: {
    modalId: {
      type: String,
      default: 'PDFGeneratorModal'
    },
    scenarioId: {
      type: Number,
      required: true
    },
    scenarioName: {
      type: String,
      default: 'Financial Scenario'
    },
    clientName: {
      type: String,
      default: 'Client Name'
    },
    reportType: {
      type: String,
      default: 'comparative',
      validator: function (value) {
        return ['comparative', 'historical'].indexOf(value) !== -1
      }
    },
    reportTabs: {
      type: Object,
      default: () => ({ comparative: [], historical: [] })
    }
  },
  data() {
    return {
      selectedTheme: 'light-green',
      selectedComponents: [],
      availableComponents: [],
      expandedComponents: [], // Track which components are expanded
      availableThemes: [
        { value: 'light-green', label: 'Light Green' },
        { value: 'light-blue', label: 'Light Blue' },
        { value: 'dark-green', label: 'Dark Green' },
        { value: 'dark-blue', label: 'Dark Blue' }
      ],
      isGenerating: false,
      errorMessage: '',
      successMessage: '',
      downloadUrl: ''
    }
  },
  computed: {
    clientInitials() {
      return this.clientName
        .split(' ')
        .map(name => name.charAt(0))
        .join('')
        .substring(0, 2)
        .toUpperCase();
    },
    allComponents() {
      // Get all components based on reportType
      // When reportType is 'historical', ONLY show historical components
      // When reportType is 'comparative', ONLY show comparative components
      if (this.reportType === 'historical') {
        const historical = this.reportTabs.historical || [];
        return historical.filter(component => component && component.name);
      } else if (this.reportType === 'comparative') {
        const comparative = this.reportTabs.comparative || [];
        return comparative.filter(component => component && component.name);
      } else {
        // Default: show both
        const comparative = this.reportTabs.comparative || [];
        const historical = this.reportTabs.historical || [];
        return [...comparative, ...historical].filter(component => component && component.name);
      }
    },
    isAllSelected() {
      return this.allComponents.length > 0 && 
             this.selectedComponents.length === this.allComponents.length;
    }
  },
  mounted() {
    // Set theme based on current user theme
    this.selectedTheme = this.$store.state.app.current_theme || 'light-green';
  },
  methods: {
    toggleSelectAll() {
      if (this.isAllSelected) {
        this.selectedComponents = [];
      } else {
        this.selectedComponents = this.allComponents.map(component => component.key);
      }
    },
    
    getComponentIcon(componentKey) {
      // Map component keys to appropriate icons matching the screenshot exactly
      const iconMap = {
        'cmp_comparative_table': 'fas fa-table',  // Table grid icon
        'cmp_comparative_graph': 'fas fa-chart-bar',  // Bar chart icon
        'cmp_making_things': 'fas fa-balance-scale',  // Balance scale icon
        'cmp_cumulative_values': 'fas fa-chart-line',  // Line chart trending up
        'cmp_legacy': 'far fa-heart',  // Heart outline icon
        'cmp_fee_analysis': 'fas fa-calculator',  // Calculator icon
        'hst_comparative_table': 'fas fa-table',
        'hst_income_analysis': 'fas fa-dollar-sign',  // Dollar sign icon
        'hst_total_values': 'fas fa-chart-pie',
        'hst_cumulative_values': 'fas fa-chart-line',
        'hst_irr_analysis': 'fas fa-percentage',
        'hst_comparative_values': 'fas fa-exchange-alt',
        // Fallback mappings
        'comparative_table': 'fas fa-table',
        'comparative_graph': 'fas fa-chart-bar', 
        'making_things_equal': 'fas fa-balance-scale',
        'cumulative_values': 'fas fa-chart-line',
        'legacy': 'far fa-heart',
        'fee_analysis': 'fas fa-calculator'
      };
      return iconMap[componentKey] || 'fas fa-file-alt';
    },
    
    getComponentCount(componentKey) {
      const subItems = this.getSubItems(componentKey);
      return subItems ? subItems.length : 0;
    },
    
    getSubItems(componentKey) {
      // Define sub-items for each component
      const subItemsMap = {
        'cmp_comparative_table': [
          { key: 'cmp_table_dist_amount', name: 'Distribution - Amount' },
          { key: 'cmp_table_dist_longevity', name: 'Distribution - Longevity' },
          { key: 'cmp_table_ror_longevity', name: 'Rate of Return - Longevity' },
        ],
        'cmp_making_things': [
          { key: 'cmp_making_dist_amount', name: 'Equal Distribution Amount' },
          { key: 'cmp_making_dist_long', name: 'Equal Distribution Longevity' },
          { key: 'cmp_making_ror', name: 'Equal Rate of Return' }
        ],
        'cmp_cumulative_values': [
          { key: 'cmp_cumulative_income', name: 'Cumulative Income' },
          { key: 'cmp_cumulative_total', name: 'Total Value' }
        ],
        'hst_cumulative_values': [
          { key: 'hst_cumulative_income', name: 'Cumulative Income' },
          { key: 'hst_cumulative_total', name: 'Total Value' }
        ]
      };
      return subItemsMap[componentKey] || null;
    },
    
    toggleExpanded(componentKey) {
      const index = this.expandedComponents.indexOf(componentKey);
      if (index > -1) {
        this.expandedComponents.splice(index, 1);
      } else {
        this.expandedComponents.push(componentKey);
      }
    },
    
    isExpanded(componentKey) {
      return this.expandedComponents.includes(componentKey);
    },
    
    isSubItemSelected(subItemKey) {
      return this.selectedComponents.includes(subItemKey);
    },
    
    toggleSubItem(subItemKey, parentKey) {
      const index = this.selectedComponents.indexOf(subItemKey);
      if (index > -1) {
        this.selectedComponents.splice(index, 1);
        // If unchecking sub-item, also uncheck parent if it was checked
        const parentIndex = this.selectedComponents.indexOf(parentKey);
        if (parentIndex > -1) {
          this.selectedComponents.splice(parentIndex, 1);
        }
      } else {
        this.selectedComponents.push(subItemKey);
        // Check if all sub-items are now selected
        const subItems = this.getSubItems(parentKey);
        if (subItems) {
          const allSelected = subItems.every(item => 
            this.selectedComponents.includes(item.key) || item.key === subItemKey
          );
          if (allSelected && !this.selectedComponents.includes(parentKey)) {
            this.selectedComponents.push(parentKey);
          }
        }
      }
    },
    
    getComponentDescription(componentKey) {
      // Map component keys to descriptions
      const descriptionMap = {
        'cmp_comparative_table': 'Comprehensive comparison tables with distribution and rate of return analysis',
        'cmp_comparative_graph': 'Visual representation of comparative data analysis',
        'cmp_making_things': 'Adjust distributions and rates of return to equalize longevity and ending values',
        'cmp_cumulative_values': 'Cumulative income and total value analysis',
        'cmp_legacy': 'Legacy planning and wealth transfer analysis',
        'cmp_fee_analysis': 'Detailed fee structure and cost analysis',
        'hst_comparative_table': 'Historical performance comparison across different market periods',
        'hst_income_analysis': 'Income distribution analysis over historical periods',
        'hst_total_values': 'Total portfolio value tracking through market cycles',
        'hst_cumulative_values': 'Cumulative historical returns and income analysis',
        'hst_irr_analysis': 'Internal rate of return analysis across time periods',
        'hst_comparative_values': 'Comparative value analysis using historical data',
        // Fallback descriptions
        'comparative_table': 'Comprehensive comparison tables with distribution and rate of return analysis',
        'comparative_graph': 'Visual representation of comparative data analysis',
        'making_things_equal': 'Adjust distributions and rates of return to equalize longevity and ending values',
        'cumulative_values': 'Cumulative income and total value analysis',
        'legacy': 'Legacy planning and wealth transfer analysis',
        'fee_analysis': 'Detailed fee structure and cost analysis'
      };
      return descriptionMap[componentKey] || 'Component analysis and reporting';
    },
    
    toggleComponent(componentKey) {
      const index = this.selectedComponents.indexOf(componentKey);
      const subItems = this.getSubItems(componentKey);
      
      if (index > -1) {
        // Uncheck parent
        this.selectedComponents.splice(index, 1);
        // Also uncheck all sub-items
        if (subItems) {
          subItems.forEach(item => {
            const subIndex = this.selectedComponents.indexOf(item.key);
            if (subIndex > -1) {
              this.selectedComponents.splice(subIndex, 1);
            }
          });
        }
      } else {
        // Check parent
        this.selectedComponents.push(componentKey);
        // Also check all sub-items
        if (subItems) {
          subItems.forEach(item => {
            if (!this.selectedComponents.includes(item.key)) {
              this.selectedComponents.push(item.key);
            }
          });
        }
      }
      
      console.log('Component toggled:', componentKey);
      console.log('Selected components:', this.selectedComponents);
      console.log('Selected count:', this.selectedComponents.length);
      
      // Clear previous messages when selection changes
      this.errorMessage = '';
      this.successMessage = '';
    },
    
    getComponentName(componentKey) {
      const component = this.availableComponents.find(c => c.key === componentKey);
      return component ? component.name : componentKey;
    },
    
    mapToBackendComponentKeys(frontendKeys) {

      console.log('✨✨✨Mapping frontend keys to backend keys:', frontendKeys);
      // Map frontend component keys to backend expected keys
      const keyMapping = {
        // Parent component mappings
        'cmp_comparative_table': 'comparative_table',
        'cmp_comparative_graph': 'comparative_graph', 
        'cmp_making_things': 'making_things_equal',
        'cmp_cumulative_values': 'cumulative_values',
        'cmp_legacy': 'legacy',
        'cmp_fee_analysis': 'fee_analysis',
        
        // Sub-item mappings for Comparative Table
        'cmp_table_dist_amount': 'comparative_table_dist_amount',
        'cmp_table_dist_longevity': 'comparative_table_dist_longevity',
        'cmp_table_dist_irr': 'comparative_table_dist_irr',
        'cmp_table_dist_ror': 'comparative_table_dist_ror',
        'cmp_table_ror_amount': 'comparative_table_ror_amount',
        'cmp_table_ror_longevity': 'comparative_table_ror_longevity',
        'cmp_table_ror_irr': 'comparative_table_ror_irr',
        'cmp_table_ror_dist': 'comparative_table_ror_dist',
        
        // Sub-item mappings for Making Things Equal
        'cmp_making_dist_amount': 'making_things_equal_dist_amount',
        'cmp_making_dist_long': 'making_things_equal_dist_longevity',
        'cmp_making_ror': 'making_things_equal_ror',
        
        // Sub-item mappings for Cumulative Values
        'cmp_cumulative_income': 'cumulative_values_income',
        'cmp_cumulative_total': 'cumulative_values_total',
        
        // Historical parent mappings - use distinct keys to avoid conflicts
        'hst_comparative_table': 'hst_comparative_table',
        'hst_income_analysis': 'hst_income_analysis',
        'hst_total_values': 'hst_total_values',
        'hst_cumulative_values': 'hst_cumulative_values',
        'hst_irr_analysis': 'hst_irr_analysis',
        'hst_comparative_values': 'hst_comparative_values',
        
        // Historical sub-item mappings
        'hst_table_worst': 'historical_table_worst',
        'hst_table_best': 'historical_table_best',
        'hst_table_median': 'historical_table_median',
        'hst_table_recent': 'historical_table_recent',
        'hst_income_dist': 'historical_income_dist',
        'hst_income_growth': 'historical_income_growth',
        'hst_income_cumulative': 'historical_income_cumulative',
        'hst_total_account': 'historical_total_account',
        'hst_total_death': 'historical_total_death',
        'hst_cumulative_income': 'historical_cumulative_income',
        'hst_cumulative_total': 'historical_cumulative_total'
      };

      // const result = [];

      // frontendKeys.forEach(key => {
      //   const mappedKey = keyMapping[key] || key;
      //   result.push(mappedKey);

      //   const subItems = this.getSubItems(key);
      //   if (subItems) {
      //     subItems.forEach(item => {
      //       const mappedSubKey = keyMapping[item.key] || item.key;
      //       result.push(mappedSubKey);
      //     })
      //   }
      // })
      
      // return result;

      return frontendKeys.map(key => keyMapping[key] || key);
    },
    
    getSelectedComponentsForBackend() {
      // Build list of components to send to backend
      // Now handles both parent-level and sub-item level selections
      const finalSelection = [];
      const processedKeys = new Set();

      console.log('Selected Components: ', this.selectedComponents)
      
      this.selectedComponents.forEach(key => {
        // Check if this is a parent component
        const subItems = this.getSubItems(key);
        
        if (subItems) {
          // This is a parent component
          const selectedSubItems = subItems.filter(item => 
            this.selectedComponents.includes(item.key)
          );
          
          if (selectedSubItems.length === subItems.length) {
            // All sub-items are selected - send parent key only
            if (!processedKeys.has(key)) {
              finalSelection.push(key);
              processedKeys.add(key);
              // Mark all sub-items as processed
              subItems.forEach(item => processedKeys.add(item.key));
            }
          } else if (selectedSubItems.length > 0) {
            // Only some sub-items selected - send parent AND individual sub-item keys
            // The backend will use the sub-item keys to filter templates
            if (!processedKeys.has(key)) {
              finalSelection.push(key); // Parent needed for component recognition
              processedKeys.add(key);
            }
            selectedSubItems.forEach(item => {
              if (!processedKeys.has(item.key)) {
                finalSelection.push(item.key); // Individual sub-items for filtering
                processedKeys.add(item.key);
              }
            });
          }
        } else {
          // This is either a sub-item or a standalone component
          // Check if it's already processed as part of a parent
          if (!processedKeys.has(key)) {
            // Find if this is a sub-item of any parent
            let isSubItem = false;
            let parentKey = null;
            
            const allComponents = [...(this.reportTabs.comparative || []), ...(this.reportTabs.historical || [])];
            for (const component of allComponents) {
              const componentSubItems = this.getSubItems(component.key);
              if (componentSubItems && componentSubItems.some(item => item.key === key)) {
                isSubItem = true;
                parentKey = component.key;
                break;
              }
            }
            
            if (isSubItem && parentKey) {
              // This is a sub-item - include both parent and sub-item
              if (!processedKeys.has(parentKey)) {
                finalSelection.push(parentKey);
                processedKeys.add(parentKey);
              }
              finalSelection.push(key);
              processedKeys.add(key);
            } else {
              // Standalone component
              finalSelection.push(key);
              processedKeys.add(key);
            }
          }
        }
      });
      
      return [...new Set(finalSelection)]; // Remove duplicates
    },
    
    async generatePDF() {
      console.log('generatePDF called');
      console.log('selectedComponents at generate time:', this.selectedComponents);
      console.log('selectedComponents length:', this.selectedComponents.length);
      
      if (this.selectedComponents.length === 0) {
        console.log('ERROR: No components selected');
        this.errorMessage = 'Please select at least one component';
        return;
      }
      
      console.log('Proceeding with PDF generation...');
      this.isGenerating = true;
      this.errorMessage = '';
      this.successMessage = '';
      
      try {
        // Get the correct components to send to backend
        const componentsToSend = this.getSelectedComponentsForBackend();
        // Map frontend component keys to backend expected keys
        const mappedComponents = this.mapToBackendComponentKeys(componentsToSend);
        
        console.log('PDF Generation Debug:');
        console.log('Original selected components:', this.selectedComponents);
        console.log('Components to send:', componentsToSend);
        console.log('Mapped components:', mappedComponents);
        
        // Note: scenarioId prop actually contains the report ID from the URL
        const payload = {
          report_id: this.scenarioId,  // This is actually the report ID from the URL
          selected_components: mappedComponents,
          theme: this.selectedTheme
        };
        
        // Get base URL from environment or use default
        const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8001';
        console.log('Making API call to:', `${baseURL}/report/pdf-generator/generate/`);
        console.log('Payload being sent:', JSON.stringify(payload, null, 2));
        
        const response = await axios.post(`${baseURL}/report/pdf-generator/generate/`, payload, authHeader());
        console.log('API Response Status:', response.status);
        console.log('API Response Data:', JSON.stringify(response.data, null, 2));
        
        if (response.data.status === 'completed') {
          console.log('SUCCESS: PDF generated successfully!');
          this.errorMessage = ''; // Clear any previous error messages
          this.successMessage = 'PDF generated successfully!';
          // Store the download path for authenticated download
          this.downloadUrl = response.data.download_url;
          
          console.log('Download URL set to:', this.downloadUrl);
          console.log('Error message cleared to:', this.errorMessage);
          console.log('Success message set to:', this.successMessage);
          
          // Track the generation for analytics
          this.trackPDFGeneration();
          
          // Auto-hide modal after 3 seconds
          setTimeout(() => {
            const modal = bootstrap.Modal.getInstance(document.getElementById(this.modalId));
            if (modal) {
              modal.hide();
            }
          }, 3000);
        } else {
          console.log('FAILED: Unexpected status:', response.data.status);
          this.errorMessage = 'PDF generation failed. Please try again.';
        }
        
      } catch (error) {
        console.error('PDF generation error:', error);
        console.error('Error response:', error.response);
        
        // Provide detailed error message
        if (error.response?.data?.error) {
          this.errorMessage = error.response.data.error;
        } else if (error.response?.status === 401) {
          this.errorMessage = 'Authentication failed. Please log in again.';
        } else if (error.response?.status === 404) {
          this.errorMessage = 'PDF generation service not found. Please contact support.';
        } else if (error.message) {
          this.errorMessage = `Error: ${error.message}`;
        } else {
          this.errorMessage = 'PDF generation failed. Please try again.';
        }
      } finally {
        this.isGenerating = false;
      }
    },
    
    trackPDFGeneration() {
      // Analytics tracking
      if (window.gtag) {
        window.gtag('event', 'pdf_generated', {
          'scenario_id': this.scenarioId,
          'component_count': this.selectedComponents.length,
          'theme': this.selectedTheme
        });
      }
    },
    
    async downloadPDF() {
      if (!this.downloadUrl) {
        this.errorMessage = 'No PDF available for download';
        return;
      }
      
      try {
        // Get base URL from environment
        const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8001';
        
        // Make authenticated request to download PDF
        const response = await axios.get(`${baseURL}${this.downloadUrl}`, {
          ...authHeader(),
          responseType: 'blob' // Important for file download
        });
        
        // Create blob URL and trigger download
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${this.scenarioName || 'Report'}_Components.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        
        // Track download for analytics
        if (window.gtag) {
          window.gtag('event', 'pdf_downloaded', {
            'scenario_id': this.scenarioId,
            'component_count': this.selectedComponents.length
          });
        }
        
      } catch (error) {
        console.error('PDF download error:', error);
        console.error('Error response:', error.response);
        console.error('Download URL:', `${baseURL}${this.downloadUrl}`);
        
        if (error.response?.status === 401) {
          this.errorMessage = 'Authentication expired. Please log in again.';
        } else if (error.response?.status === 404) {
          this.errorMessage = 'PDF file not found. It may have expired.';
        } else if (error.response?.data?.error) {
          this.errorMessage = `Download failed: ${error.response.data.error}`;
        } else {
          this.errorMessage = `Failed to download PDF: ${error.message || 'Unknown error'}`;
        }
      }
    },
    
  },
  
  // Reset modal state when closed
  beforeUnmount() {
    this.selectedComponents = [];
    this.errorMessage = '';
    this.successMessage = '';
    this.isGenerating = false;
  }
}
</script>

<style scoped>
/* Modal Overrides */
.modal-lg {
  max-width: 800px;
}

.modal-header {
  padding: 1.5rem;
}

.modal-title {
  font-size: 20px;
  font-weight: 600;
  color: #333;
}

.modal-body {
  padding: 0 1.5rem 1.5rem;
}

/* Scrollable Component Selection */
.component-selection-scrollable {
  max-height: 450px;
  overflow-y: auto;
  padding-right: 5px;
}

.component-selection-scrollable::-webkit-scrollbar {
  width: 6px;
}

.component-selection-scrollable::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.component-selection-scrollable::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 10px;
}

.component-selection-scrollable::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}

/* Component Categories */
.component-category {
  margin-bottom: 1.5rem;
}

.category-header {
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 8px;
  margin-bottom: 12px;
}

.category-title {
  color: #64748b;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Select All Section */
.select-all-section .form-check-input:checked {
  background-color: #20c997;
  border-color: #20c997;
}

/* Component Selection Styles */
.components-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.component-item {
  display: flex;
  align-items: center;
  padding: 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: #fff;
}

.component-item:hover {
  background-color: #f8fafc;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.component-checkbox .form-check-input {
  border: 2px solid #cbd5e0;
  cursor: pointer;
}

.component-checkbox .form-check-input:checked {
  background-color: #20c997;
  border-color: #20c997;
}


/* Button Styles */
.btn-success {
  background-color: #20c997;
  border-color: #20c997;
  font-weight: 500;
}

.btn-success:hover {
  background-color: #1aa085;
  border-color: #1aa085;
}

.btn-success:disabled {
  background-color: #6c757d;
  border-color: #6c757d;
  opacity: 0.6;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
}

/* Alert Styles */
.alert {
  border-radius: 8px;
  border: none;
}

.alert-danger {
  background-color: #f8d7da;
  color: #721c24;
}

.alert-success {
  background-color: #d1eddf;
  color: #155724;
}

/* Responsive Design */
@media (max-width: 768px) {
  .components-grid {
    gap: 8px;
  }
  
  .component-item {
    padding: 12px;
  }
  
  .modal-md {
    max-width: 95%;
    margin: 10px auto;
  }
  
  .component-title {
    font-size: 15px;
  }
  
  .component-description {
    font-size: 13px;
  }
  
  .component-selection-scrollable {
    max-height: 300px;
  }
  
  .category-title {
    font-size: 16px;
  }
}
</style>