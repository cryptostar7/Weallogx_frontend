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
            disclosure: {
                comparative_msg: 'This program illustrates the current values and assumptions of an Indexed Universal Life (IUL) cash value insurance policy. Comparisons made to Comparative Vehicles (CV) are for illustrative and educational purposes only, and are intended to produce insight and discussion points between you and a licensed agent. No claim is made that the IUL is superior to the CVs. Guarantees backed by the claims paying ability of the underwriting insurance company. These graphics and illustrations do not constitute tax, legal or accounting advice. Please consult your own legal or tax counsel to confirm how tax treatment applies to you. The hypothetical results are for illustrative purposes only and should not be deemed a representation of past or future results. Your experience may and likely will vary materially from these results. Tax-free access to cash values are typically done through a policy loan which can reduce death benefits, cash values, incur interest and could cause the policy to lapse. Additional premium payments may be needed to keep the policy in force and in the event of a lapse, outstanding policy loans in excess of unrecovered basis will be subject to ordinary income taxes. Tax laws are subject to change. These values are not guaranteed. Policies still incur costs and charges each year for administration and insurance. This could cause the cash value to go down. You may also lose cash value by surrendering the policy. Life Insurance costs, caps, and participation rates can be changed at the discretion of the insurance company within certain limits, which can positively or adversely affect the performance of the policy.Neither this software nor the presenting agent in any way guarantees future performance, and this presentation is null and void unless accompanied by an approved illustration from the insurance company presented.',
                historical_msg: ' This chart references data drawn from simulations of a Theoretical Synthetic Asset (TSA) that does not exist and cannot be purchased in the real world. It is not a real world insurance policy. It is  not an official illustration. You may not assume the data presented here relating to the TSA infers or expresses any guarantee of how a real world insurance policy would perform. Comparisons made to the official <b>Pacific Life</b> illustration(s), which use hypothetical assumptions that are not guaranteed, are designed to be educational and instructive as to how the insurance policies compared <b>may have</b> performed through different historical periods. The data uses the raw returns of the <b>S&P 500</b>, and simulates the potential returns that the insurance policy <b>may have</b> achieved if the current cap rates, participation rates, floors, fees, and borrowing costs were in place during the historical periods tested. Cap rates, participation rates, and policy fees can and do change. We analyzed <b>546 40</b>-year periods of the index. In the case where a time period portrayed is greater than <b>40</b> years, the data was looped for purposes of the simulation. This simulation of a TSA took the actual current monthly fees of the <b>Pacific Life</b> insurance policy and increased them by 15%. All distributions assume the use of an index/participating loan. We assumed a <b>5.4%</b> borrowing rate in the simulation of the TSA. Presented here are the most recent, worst, median, and best <b>40</b>-year periods with respect to the insurance policy’s intended allocation in the <b>S&P 500</b> index strategy. However, these results are not the results of an actual insurance policy, but those of the TSA, which does not exist in the real world. It is entirely possible that the real world experience of the actual policy could be even worse than the worst <b>40</b>-year period analyzed, just as it is entirely possible that the real world policy could perform better than the best <b>40</b>-year period analyzed.',
            }
        },
        app: {
            themes: [
                { name: 'Light Mode Green', value: 'light-green', color:'green' },
                { name: 'Light Mode Blue', value: 'light-blue', color:'blue' },
                { name: 'Dark Mode Green', value: 'dark-green', color:'green' },
                { name: 'Dark Mode Blue', value: 'dark-blue', color:'blue' },
            ],
            presentation_mode:false,
            current_theme: localStorage.getItem("mode") || 'light-green'
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
        setTheme(state, type) {
            state.app.current_theme = type;
        }, 
        setPresentationMode(state, status) {
            state.app.presentation_mode = status;
        }
    },
    actions: {
        toggleReportTabByID(context, payload) {
            context.commit("setActiveReportTab", payload);
        },
        theme(context, payload) {
            localStorage.setItem("mode", payload);
            document.body.className = "";
            document.body.classList.add(payload);
            context.commit("setTheme", payload);
        },
        presentation(context, payload){
            if(payload){
                document.body.classList.add('presentationModeCommon');
            }else{
                document.body.classList.remove('presentationModeCommon');
            }
            context.commit("setPresentationMode", payload);
        }
    }
})
export default store;
