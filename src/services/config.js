const config = {
    SCENARIO_LIST_LIMIT: 3,
    SCENARIO_REPORT_LIST_LIMIT: 2,
    REPORT_LIST_LIMIT: 3,
    INDEX_STRATEGIES: [
        { id: 1, max_limit: 55, template_name: "S&P 500" },
        { id: 2, max_limit: 30, template_name: "Blended Index" },
        { id: 3, max_limit: 15, template_name: "Bloomberg US Dynamic Balance II ER" },
        { id: 4, max_limit: 15, template_name: "PIMCO Tactical Balanced ER" },
        { id: 5, max_limit: 20, template_name: "Fidelity Multifactor Yield 5% ER" },
        { id: 6, max_limit: 15, template_name: "Barclays Trailblazer Sectors 5" },
        { id: 7, max_limit: 30, template_name: "S&P Prism" },
        { id: 8, max_limit: 30, template_name: "Putnam Dynamic Low Volatility Excess Return Index" },
    ],
    ISC_INDEX_STRATEGIES: [
        { id: 1, max_year: 1960, template_name: "S&P 500" },
        { id: 2, max_year: 1987, template_name: "Blended Index" },
        { id: 3, max_year: 2005, template_name: "Bloomberg US Dynamic Balance II ER" },
        { id: 4, max_year: 2005, template_name: "PIMCO Tactical Balanced ER" },
        { id: 5, max_year: 1999, template_name: "Fidelity Multifactor Yield 5% ER" },
        { id: 6, max_year: 2004, template_name: "Barclays Trailblazer Sectors 5" },
        { id: 7, max_year: 1991, template_name: "S&P Prism" },
        { id: 8, max_year: 1990, template_name: "Putnam Dynamic Low Volatility Excess Return Index" },
    ]
};

export default config;