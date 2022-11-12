import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state: {
        data: {
            reportTabs: {
                comparative: [
                    { id: 1, name: "Comparative Table", key: 'cmp_comparative_table' },
                    { id: 2, name: "Comparative Graph", key: 'cmp_comparative_graph' },
                    { id: 3, name: "Making Things Equal", key: 'cmp_making_things' },
                    { id: 4, name: "Comulative Values", key: 'cmp_comulative_values' },
                    { id: 5, name: "Lagacy", key: 'cmp_lagac' },
                    { id: 6, name: "Fee Analysis", key: 'cmp_fee_analysis' },
                ],
                historical: [
                    { id: 1, name: "Comparative Table", key: 'hst_comparative_table' },
                    { id: 2, name: "Income Analysis", key: 'hst_income_analysis' },
                    { id: 3, name: "IRR Analysis", key: 'hst_irr_analysis' },
                    { id: 4, name: "Total Values", key: 'hst_total_values' },
                    { id: 5, name: "Cumulative Values", key: 'hst_cumulative_values' },
                    { id: 6, name: "Comparative Values", key: 'hst_comparative_values' },
                ],
                active: {
                    cmp_comparative_table: true,
                    cmp_comparative_graph: true,
                    cmp_making_things: true,
                    cmp_comulative_values: true,
                    cmp_lagac: true,
                    cmp_fee_analysis: true,
                    hst_comparative_table: true,
                    hst_income_analysis: true,
                    hst_irr_analysis: true,
                    hst_total_values: true,
                    hst_cumulative_values: true,
                    hst_comparative_values: true,
                }
            },
        },
    },
    getters: {
        checkActiveTab: (state) => (id) => {
            return state.data.reportTabs.active[id];
        }
    },
    mutations: {
        setActiveReportTab(state, payload) {
            state.data.reportTabs.active[payload] = !state.data.reportTabs.active[payload];
        },
    },
    actions: {
        toggleReportTabByID(context, payload) {
            context.commit("setActiveReportTab", payload);
        }
    }
})
export default store;
