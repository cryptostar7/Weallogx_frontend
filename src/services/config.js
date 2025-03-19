const config = {
  SCENARIO_LIST_LIMIT: 3,
  SCENARIO_REPORT_LIST_LIMIT: 2,
  SIMULATION_LIST_LIMIT: 3,
  SIMULATION_REPORT_LIST_LIMIT: 2,
  REPORT_LIST_LIMIT: 3,
  INDEX_STRATEGIES: [
    { id: 1, max_limit: 15, template_name: 'Barclays Trailblazer Sectors 5' },
    { id: 2, max_limit: 30, template_name: 'Blended Index' },
    { id: 3, max_limit: 15, template_name: 'Bloomberg US Dynamic Balance II ER' },
    { id: 4, max_limit: 55, template_name: 'DJIA' },
    { id: 5, max_limit: 30, template_name: 'Eurostoxx 50' },
    { id: 6, max_limit: 20, template_name: 'Fidelity Multifactor Yield 5% ER' },
    { id: 7, max_limit: 30, template_name: 'Hindsight' },
    { id: 8, max_limit: 30, template_name: 'Nasdaq 100' },
    { id: 9, max_limit: 15, template_name: 'PIMCO Tactical Balanced ER' },
    { id: 10, max_limit: 30, template_name: 'Putnam Dynamic Low Volatility Excess Return Index' },
    { id: 11, max_limit: 45, template_name: 'Russell 2000' },
    { id: 12, max_limit: 55, template_name: 'S&P 500' },
    { id: 13, max_limit: 30, template_name: 'S&P Prism' }
  ],
  ISC_INDEX_STRATEGIES: [
    { id: 1, max_year: 2004, template_name: 'Barclays Trailblazer Sectors 5' },
    { id: 2, max_year: 1987, template_name: 'Blended Index' },
    { id: 3, max_year: 2005, template_name: 'Bloomberg US Dynamic Balance II ER' },
    { id: 4, max_year: 1999, template_name: 'Fidelity Multifactor Yield 5% ER' },
    { id: 5, max_year: 2005, template_name: 'PIMCO Tactical Balanced ER' },
    { id: 6, max_year: 1990, template_name: 'Putnam Dynamic Low Volatility Excess Return Index' },
    { id: 7, max_year: 1960, template_name: 'S&P 500' },
    { id: 8, max_year: 1991, template_name: 'S&P Prism' }
  ]
};

export default config;