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
                    { id: 4, name: "Cumulative Values", key: 'cmp_cumulative_values' },
                    { id: 5, name: "Legacy", key: 'cmp_legacy' },
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
                    cmp_cumulative_values: true,
                    cmp_legacy: true,
                    cmp_fee_analysis: true,
                    hst_comparative_table: true,
                    hst_income_analysis: true,
                    hst_irr_analysis: true,
                    hst_total_values: true,
                    hst_cumulative_values: true,
                    hst_comparative_values: true,
                },
                active_cards: {
                    cmp_comparative_table: [
                        { id: 1, active: true },
                        { id: 2, active: true },
                        { id: 3, active: true },
                    ],
                    cmp_comparative_graph: {
                        cards: [
                            { id: 1, active: true },
                            { id: 2, active: true },
                            { id: 3, active: true },
                            { id: 4, active: true },
                        ],
                        graphs: {
                            annual_contribution: true,
                            annual_distribution: true,
                        }
                    },
                    cmp_making_things: {
                        cards: {
                            distributions: [
                                { id: 1, active: true },
                                { id: 2, active: true },
                                { id: 3, active: true },
                                { id: 4, active: true },
                            ],
                            rate_of_returns: [
                                { id: 1, active: true },
                                { id: 2, active: true },
                                { id: 3, active: true },
                                { id: 4, active: true },
                            ],
                        },
                        graphs: {
                            distributions: {
                                longevity: true,
                                ending_value: true,
                                death_benefit: true,
                            },
                            rate_of_returns: {
                                longevity: true,
                                ending_value: true,
                                death_benefit: true,
                            },
                        },
                    },
                    cmp_cumulative_values: {
                        cumulative_income: [
                            { id: 1, active: true },
                            { id: 2, active: true },
                            { id: 3, active: true },
                            { id: 4, active: true },
                        ],
                        total_value: [
                            { id: 1, active: true },
                            { id: 2, active: true },
                            { id: 3, active: true },
                            { id: 4, active: true },
                        ],
                    },
                    cmp_legacy: [
                        { id: 1, active: true },
                        { id: 2, active: true },
                        { id: 3, active: true },
                        { id: 4, active: true },
                    ],
                    cmp_fee_analysis: {
                        annual_fees: [
                            { id: 1, active: true },
                            { id: 2, active: true },
                            { id: 3, active: true },
                            { id: 4, active: true },
                        ],
                        cummulative_fee: [
                            { id: 1, active: true },
                            { id: 2, active: true },
                            { id: 3, active: true },
                            { id: 4, active: true },
                        ],
                        value_efficiency_fee: [
                            { id: 1, active: true },
                            { id: 2, active: true },
                            { id: 3, active: true },
                            { id: 4, active: true },
                        ],
                        value_efficiency_expense_ratio: [
                            { id: 1, active: true },
                            { id: 2, active: true },
                            { id: 3, active: true },
                            { id: 4, active: true },
                        ]
                    },
                    hst_comparative_table: true,
                    hst_income_analysis: true,
                    hst_irr_analysis: true,
                    hst_total_values: true,
                    hst_cumulative_values: true,
                    hst_comparative_values: true,
                }
            },
            simulationReportTabs: {
                historical: [
                    { id: 1, name: "Comparative Table", key: 'sims_comparative_table' },
                    { id: 2, name: "Income Analysis", key: 'sims_income_analysis' },
                    { id: 3, name: "IRR Analysis", key: 'sims_irr_analysis' },
                    { id: 4, name: "Total Values", key: 'sims_total_values' },
                    { id: 5, name: "Cumulative Values", key: 'sims_cumulative_values' },
                ],
                active: {
                    sims_comparative_table: true,
                    sims_income_analysis: true,
                    sims_irr_analysis: true,
                    sims_total_values: true,
                    sims_cumulative_values: true,
                },
                active_cards: {
                    sims_comparative_table: true,
                    sims_income_analysis: true,
                    sims_irr_analysis: true,
                    sims_total_values: true,
                    sims_cumulative_values: true,
                }
            },
            report: {
                notes: [],
                disclosures: [],
                cv_names: ['', '', '', ''],
                comparative: [],
                historical: [],
                deleted_cv_ids: [],
                deleted_historical_cv_ids: [],
                comparative_longevity: [],
                comparative_ending_value: [],
                comparative_death_benefit: [],
                comparative_ror_longevity: [],
                comparative_ror_ending_value: [],
                comparative_ror_death_benefit: [],
            },
            disclosure: {
                comparative_msg: 'This program illustrates the current values and assumptions of an Indexed Universal Life (IUL) cash value insurance policy. Comparisons made to Comparative Vehicles (CV) are for illustrative and educational purposes only, and are intended to produce insight and discussion points between you and a licensed agent. No claim is made that the IUL is superior to the CVs. Guarantees backed by the claims paying ability of the underwriting insurance company. These graphics and illustrations do not constitute tax, legal or accounting advice. Please consult your own legal or tax counsel to confirm how tax treatment applies to you. The hypothetical results are for illustrative purposes only and should not be deemed a representation of past or future results. Your experience may and likely will vary materially from these results. Tax-free access to cash values are typically done through a policy loan which can reduce death benefits, cash values, incur interest and could cause the policy to lapse. Additional premium payments may be needed to keep the policy in force and in the event of a lapse, outstanding policy loans in excess of unrecovered basis will be subject to ordinary income taxes. Tax laws are subject to change. These values are not guaranteed. Policies still incur costs and charges each year for administration and insurance. This could cause the cash value to go down. You may also lose cash value by surrendering the policy. Life Insurance costs, caps, and participation rates can be changed at the discretion of the insurance company within certain limits, which can positively or adversely affect the performance of the policy.Neither this software nor the presenting agent in any way guarantees future performance, and this presentation is null and void unless accompanied by an approved illustration from the insurance company presented.',
                historical_msg: ' This chart references data drawn from simulations of a Theoretical Synthetic Asset (TSA) that does not exist and cannot be purchased in the real world. It is not a real world insurance policy. It is  not an official illustration. You may not assume the data presented here relating to the TSA infers or expresses any guarantee of how a real world insurance policy would perform. Comparisons made to the official <b>Pacific Life</b> illustration(s), which use hypothetical assumptions that are not guaranteed, are designed to be educational and instructive as to how the insurance policies compared <b>may have</b> performed through different historical periods. The data uses the raw returns of the <b>S&P 500</b>, and simulates the potential returns that the insurance policy <b>may have</b> achieved if the current cap rates, participation rates, floors, fees, and borrowing costs were in place during the historical periods tested. Cap rates, participation rates, and policy fees can and do change. We analyzed <b>546 40</b>-year periods of the index. In the case where a time period portrayed is greater than <b>40</b> years, the data was looped for purposes of the simulation. This simulation of a TSA took the actual current monthly fees of the <b>Pacific Life</b> insurance policy and increased them by 15%. All distributions assume the use of an index/participating loan. We assumed a <b>5.4%</b> borrowing rate in the simulation of the TSA. Presented here are the most recent, worst, median, and best <b>40</b>-year periods with respect to the insurance policy’s intended allocation in the <b>S&P 500</b> index strategy. However, these results are not the results of an actual insurance policy, but those of the TSA, which does not exist in the real world. It is entirely possible that the real world experience of the actual policy could be even worse than the worst <b>40</b>-year period analyzed, just as it is entirely possible that the real world policy could perform better than the best <b>40</b>-year period analyzed.',
            },
            user: false,
            plans: {
                free_trial: 'FREE_TRIAL_PLAN',
                monthly: 'MONTHLY_PLAN',
                yearly: 'YEARLY_PLAN',
            },
            share_report: {
                client: {
                    firstname: '',
                    middlename: '',
                    lastname: '',
                },
                scenario: { name: '' },
                report_id: '',
                report_link: ''
            },
            share_simulation_report: {
                client: {
                    firstname: '',
                    middlename: '',
                    lastname: '',
                },
                simulation: { name: '' },
                report_id: '',
                report_link: ''
            },
            clients: null,
            historical_clients: null,
            illustration_files: [],
            current_plan: false,
            active_scenario: false,
            active_simulation: false,
            templates: [],
            tax_scorecard: {
                validation: { form_valid: false, swith_year_valid: true, social_security_age_valid: true, filing_status_valid: true },
                inputs: JSON.parse(localStorage.getItem("tax_scorecard_inputs")) || {},
                results: JSON.parse(localStorage.getItem("tax_scorecard_results")) || {
                    ira_backend: {},
                    roth_backend: {}
                }
            },
            retirement_buffer: {
                market_alone: true,
                show_distribution: false,
                slider_width_update: false,
                sort_type: "average",
                buffer_allocation_weight: 0,
                distribution_in: localStorage.getItem("rba_distribution_type") || 'dollar',
                auccumulation_results: JSON.parse(localStorage.getItem("rba_results")) || { inputs: null, market_alone: null, market_buffer: null, zero_distribution: null },
                auccumulation_simulations: JSON.parse(localStorage.getItem("rba_simulations")) || { market_alone: null, market_buffer: null, zero_distribution: null },
                income_rider: null,
            }
        },
        app: {
            themes: [
                { name: 'Light Mode Green', value: 'light-green', color: 'green' },
                { name: 'Light Mode Blue', value: 'light-blue', color: 'blue' },
                { name: 'Dark Mode Green', value: 'dark-green', color: 'green' },
                { name: 'Dark Mode Blue', value: 'dark-blue', color: 'blue' },
            ],
            presentation_mode: false,
            show_assets1: false,
            show_assets2: false,
            full_screen: false,
            loader: false,
            loader_count: 0,
            current_theme: localStorage.getItem("mode") || 'light-green',
            current_sidebar_tab: 'comparative',
        },
        errors: [],
        forms: [],
    },
    getters: {
        checkActiveTab: (state) => (id) => {
            return state.data.reportTabs.active[id];
        },
        getPlan: (state) => (name) => {
            return state.data.plans[name] ?? state.data.plans.free_trial;
        },
        checkActiveModal: (state) => (modal) => {
            if (state.modal[modal]) {
                state.modal[modal] = false;
                return true;
            }
            return false
        },
        getClientUsingId: (state) => (id) => {
            let array = state.data.clients;
            var client = [];
            if (array && array.length > 0) {
                client = array.filter(element => {
                    return Number(element.id) === Number(id);
                });
            }
            return client.length ? client[0] : false;
        },
        getHistoricalClientUsingId: (state) => (id) => {
            let array = state.data.historical_clients;
            var client = [];
            if (array && array.length > 0) {
                client = array.filter(element => {
                    return Number(element.id) === Number(id);
                });
            }
            return client.length ? client[0] : false;
        },
        getRetirementBufferResults: (state) => () => {
            if (!state.data.retirement_buffer.show_distribution) {
                return state.data.retirement_buffer.auccumulation_results.zero_distribution;
            }

            if (!state.data.retirement_buffer.market_alone) {
                return state.data.retirement_buffer.auccumulation_results.market_with_buffer;
            }
            return state.data.retirement_buffer.auccumulation_results.market_only;
        },
        getRetirementBufferSimulations: (state) => () => {
            return state.data.retirement_buffer.auccumulation_simulations;
        },
    },
    mutations: {
        setActiveReportTab(state, payload) {
            state.data.reportTabs.active[payload] = !state.data.reportTabs.active[payload];
        },
        setActiveReportTabs(state, payload) {
            state.data.reportTabs.active = payload;
        },
        setActiveReportCards(state, payload) {
            state.data.reportTabs.active_cards = payload;
        },
        setActiveSimulationReportTab(state, payload) {
            state.data.simulationReportTabs.active[payload] = !state.data.simulationReportTabs.active[payload];
        },
        setActiveSimulationReportTabs(state, payload) {
            state.data.simulationReportTabs.active = payload;
        },
        setActiveSimulationReportCards(state, payload) {
            state.data.simulationReportTabs.active_cards = payload;
        },
        setTheme(state, type) {
            state.app.current_theme = type;
        },
        setCurrentSidebar(state, type) {
            state.app.current_sidebar_tab = type;
        },
        setFullScreen(state) {
            state.app.full_screen = !state.app.full_screen;
            var elem = document.documentElement || document.fullscreenElement;
            if (state.app.full_screen) {
                if (elem.requestFullscreen) {
                    elem.requestFullscreen();
                } else if (elem.webkitRequestFullscreen) {
                    / Safari /
                    elem.webkitRequestFullscreen();
                } else if (elem.msRequestFullscreen) {
                    / IE11 /
                    elem.msRequestFullscreen();
                }
            } else {
                if (document || document.fullscreenElement || document.documentElement) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen || document.fullscreenElement || document.documentElement) {
                    / Safari /
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen || document.fullscreenElement || document.documentElement) {
                    / IE11 /
                    document.msExitFullscreen();
                }
            }
        },
        setShowAsset1(state) {
            state.app.show_assets1 = !state.app.show_assets1;
        },
        setShowAsset2(state) {
            state.app.show_assets2 = !state.app.show_assets2;
        },
        setPresentationMode(state, status) {
            state.app.presentation_mode = status;
        },
        setModalView(state, modal) {
            state.modal[modal] = true;
        },
        setUser(state, profile) {
            state.data.user = profile;
        },
        setLoader(state, payload) {
            let path = window.location.pathname;
            if (!path.includes('/report') && !path.includes('/retirement-buffer')) {
                state.app.loader = payload;
            } else {
                let count = state.app.loader_count;
                if (payload) {
                    count = count + 1;
                } else {
                    count = count - 1;
                    if (count <= 0) {
                        count = 0;
                    }
                }

                state.app.loader_count = count;
                if (count < 1) {
                    state.app.loader = false;
                } else {
                    state.app.loader = true;
                }
            }
        },
        setUserTempForm(state, payload) {
            state.forms.temp_user = payload;
        },
        setUserFormError(state, payload) {
            state.errors.temp_user = payload;
        },
        setIllustrationFiles(state, payload) {
            state.data.illustration_files = payload;
        },
        setUserCurrentPlan(state, payload) {
            state.data.current_plan = payload;
        },
        setClients(state, payload) {
            state.data.clients = [...payload];
        },
        setHistoricalClients(state, payload) {
            state.data.historical_clients = [...payload];
        },
        addNewClient(state, payload) {
            state.data.clients = [...state.data.clients, payload];
        },
        addNewHistoricalClient(state, payload) {
            state.data.historical_clients = [payload, ...state.data.historical_clients];
        },
        setActiveScenario(state, payload) {
            state.data.active_scenario = payload;
        },
        setActiveSimulation(state, payload) {
            state.data.active_simulation = payload;
        },
        setTemplate(state, payload) {
            state.data.templates[payload.type] = payload.data;
        },
        setNotes(state, payload) {
            state.data.report.notes = payload;
        },
        setDisclosures(state, payload) {
            state.data.report.disclosures = payload;
        },
        setCvName(state, payload) {
            state.data.report.cv_names[payload.index] = payload.name;
        },
        setComparativeReport(state, payload) {
            state.data.report.comparative = payload;
        },
        setHistoricalReport(state, payload) {
            state.data.report.historical = payload;
        },
        setComparativeReportLongevity(state, payload) {
            state.data.report.comparative_longevity = payload;
        },
        setComparativeReportEndingValue(state, payload) {
            state.data.report.comparative_ending_value = payload;
        },
        setComparativeReportDeathBenefit(state, payload) {
            state.data.report.comparative_death_benefit = payload;
        },
        setComparativeReportRorLongevity(state, payload) {
            state.data.report.comparative_ror_longevity = payload;
        },
        setComparativeReportRorEndingValue(state, payload) {
            state.data.report.comparative_ror_ending_value = payload;
        },
        setComparativeReportRorDeathBenefit(state, payload) {
            state.data.report.comparative_ror_death_benefit = payload;
        },
        setDeleteCvId(state, payload) {
            state.data.report.deleted_cv_ids = [...state.data.report.deleted_cv_ids, payload];
        },
        setHistoricalDeleteCvId(state, payload) {
            state.data.report.deleted_historical_cv_ids = [...state.data.report.deleted_historical_cv_ids, payload];
        },
        setShareReportData(state, payload) {
            state.data.share_report[payload.name] = payload.data;
        },
        setShareSimulationReportData(state, payload) {
            state.data.share_simulation_report[payload.name] = payload.data;
        },
        setTaxScorecardInputs(state, payload) {
            state.data.tax_scorecard.inputs = payload;
        },
        setTaxScorecardResults(state, payload) {
            state.data.tax_scorecard.results = payload;
        },
        setTaxScorecardFormValidation(state, payload) {
            state.data.tax_scorecard.validation = payload;
        },
        setRetirementBufferDistributionType(state, payload) {
            state.data.retirement_buffer.distribution_in = payload;
        },
        setRetirementBufferAccumulationResults(state, payload) {
            if (payload.sort === 'average') {
                localStorage.setItem("rba_results", JSON.stringify(payload.data));
            }

            state.data.retirement_buffer.auccumulation_results = payload.data;
        },
        setRetirementBufferAccumulationSimulations(state, payload) {
            if (!payload.sort) {
                localStorage.setItem("rba_simulations", JSON.stringify(payload.data));
            }
            state.data.retirement_buffer.auccumulation_simulations = payload.data;
        },
        setRetirementBufferMarketAlone(state, payload) {
            state.data.retirement_buffer.market_alone = payload;
        },
        setUpdateRbaSliderWidth(state, payload) {
            state.data.retirement_buffer.slider_width_update = payload;
        },
        setUpdateRbaSortType(state, payload) {
            state.data.retirement_buffer.sort_type = payload;
        },
        setupdateRbaNetDistributionDisplay(state, payload) {
            state.data.retirement_buffer.show_distribution = payload;
        },
        setUpdateBuffeAccountAllocation(state, payload) {
            state.data.retirement_buffer.buffer_allocation_weight = payload;
        },
    },
    actions: {
        toggleReportTabByID(context, payload) {
            context.commit("setActiveReportTab", payload);
        },
        activeReportTabs(context, payload) {
            context.commit("setActiveReportTabs", payload);
        },
        activeReportCards(context, payload) {
            context.commit('setActiveReportCards', payload);
        },
        toggleSimulationReportTabByID(context, payload) {
            context.commit("setActiveSimulationReportTab", payload);
        },
        activeSimulationReportTabs(context, payload) {
            context.commit("setActiveSimulationReportTabs", payload);
        },
        activeSimulationReportCards(context, payload) {
            context.commit('setActiveSimulationReportCards', payload);
        },
        toggleAssets1(context) {
            context.commit("setShowAsset1");
        },
        toggleAssets2(context) {
            context.commit("setShowAsset2");
        },
        loader(context, payload) {
            context.commit("setLoader", payload);
        },
        fullScreen(context) {
            context.commit("setFullScreen");
        },
        theme(context, payload) {
            localStorage.setItem("mode", payload);
            document.body.className = "";
            document.body.classList.add(payload);
            context.commit("setTheme", payload);
        },
        current_sidebar_tab(context, payload) {
            context.commit("setCurrentSidebar", payload);
        },
        presentation(context, payload) {
            if (payload) {
                document.body.classList.add('presentationModeCommon');
            } else {
                document.body.classList.remove('presentationModeCommon');
            }
            context.commit("setPresentationMode", payload);
        },
        modal(context, payload) {
            context.commit('setModalView', payload);
        },
        user(context, payload) {
            context.commit('setUser', payload);
        },
        userTempForm(context, payload) {
            context.commit('setUserTempForm', payload);
        },
        currentPlan(context, payload) {
            context.commit('setUserCurrentPlan', payload);
        },
        userTempFormError(context, payload) {
            context.commit('setUserFormError', payload);
        },
        illustrationFiles(context, payload) {
            context.commit('setIllustrationFiles', payload);
        },
        clients(context, payload) {
            context.commit('setClients', payload);
        },
        historicalClients(context, payload) {
            context.commit('setHistoricalClients', payload);
        },
        addClient(context, payload) {
            context.commit('addNewClient', payload);
        },
        addHistoricalClient(context, payload) {
            context.commit('addNewHistoricalClient', payload);
        },
        activeScenario(context, payload) {
            context.commit('setActiveScenario', payload);
        },
        activeSimulation(context, payload) {
            context.commit('setActiveSimulation', payload);
        },
        template(context, payload) {
            context.commit('setTemplate', payload);
        },
        notes(context, payload) {
            context.commit('setNotes', payload);
        },
        disclosures(context, payload) {
            context.commit('setDisclosures', payload);
        },
        cvName(context, payload) {
            context.commit('setCvName', payload);
        },
        comparativeReport(context, payload) {
            context.commit('setComparativeReport', payload);
        },
        historicalReport(context, payload) {
            context.commit('setHistoricalReport', payload);
        },
        comparativeReportLongevity(context, payload) {
            context.commit('setComparativeReportLongevity', payload);
        },
        comparativeReportEndingValue(context, payload) {
            context.commit('setComparativeReportEndingValue', payload);
        },
        comparativeReportDeathBenefit(context, payload) {
            context.commit('setComparativeReportDeathBenefit', payload);
        },
        comparativeReportRorLongevity(context, payload) {
            context.commit('setComparativeReportRorLongevity', payload);
        },
        comparativeReportRorEndingValue(context, payload) {
            context.commit('setComparativeReportRorEndingValue', payload);
        },
        comparativeReportRorDeathBenefit(context, payload) {
            context.commit('setComparativeReportRorDeathBenefit', payload);
        },
        reportCvDeleteId(context, payload) {
            context.commit('setDeleteCvId', payload);
        },
        historicalCvDeleteId(context, payload) {
            context.commit('setHistoricalDeleteCvId', payload);
        },
        shareReportData(context, payload) {
            context.commit('setShareReportData', payload);
        },
        shareSimulationReportData(context, payload) {
            context.commit('setShareSimulationReportData', payload);
        },
        updateTaxScorecardInputs(context, payload) {
            let inputs = { ...payload }
            localStorage.setItem("tax_scorecard_inputs", JSON.stringify(inputs))
            context.commit("setTaxScorecardInputs", inputs);
        },
        resetTaxScorecardInputs(context) {
            localStorage.setItem("tax_scorecard_inputs", JSON.stringify({}))
            context.commit("setTaxScorecardInputs", {});
            context.commit("setTaxScorecardFormValidation", {
                "form_valid": false, "social_security_age_valid": true, "switch_year_valid": true, "filing_status_valid": true
            });
        },
        updateTaxScorecardResults(context, payload) {
            localStorage.setItem("tax_scorecard_results", JSON.stringify(payload))
            context.commit("setTaxScorecardResults", payload);
        },
        updateTaxScorecardFormValidation(context, payload) {
            context.commit("setTaxScorecardFormValidation", payload);
        },
        retirementBufferDistributionType(context, payload) {
            localStorage.setItem("rba_distribution_type", payload);
            context.commit("setRetirementBufferDistributionType", payload);
        },
        retirementBufferAccumulationResults(context, payload) {
            context.commit("setRetirementBufferAccumulationResults", payload);
        },
        retirementBufferAccumulationSimulations(context, payload) {
            context.commit("setRetirementBufferAccumulationSimulations", payload);
        },
        retirementBufferMarketAlone(context, payload) {
            context.commit("setRetirementBufferMarketAlone", payload);
        },
        updateRbaSliderWidth(context, payload) {
            context.commit("setUpdateRbaSliderWidth", payload);
        },
        updateRbaSortType(context, payload) {
            context.commit("setUpdateRbaSortType", payload);
        },
        updateRbaNetDistributionDisplay(context, payload) {
            context.commit("setupdateRbaNetDistributionDisplay", payload);
        },
        updateBuffeAccountAllocation(context, payload) {
            context.commit("setUpdateBuffeAccountAllocation", payload);
        },
    }
})
export default store;