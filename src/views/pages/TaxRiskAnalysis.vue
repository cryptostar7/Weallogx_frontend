<template>
  <div>
    <navbar-component />
    <section class="main-section">
      <div class="inner-section">
        <LeftSidebarComponent />
        <main class="right-area">
          <div class="right-area-inner p-relative rightInnerDarkbg">
            <div class="right-area-wrapper pt-0 pb-5">
              <!-- Inner Content Area Start -->
              <section class="strategy-calc-main-section mt-3 pt-4">
                <div class="strategy-calc-main-div shadow-none">
                  <div class="index-strategy-head-div tax-scorcard">
                    <h1>Tax Scorecard</h1>
                    <router-link to="/tax-score-card" class="back"
                      ><img
                        src="@/assets/images/icons/back-small.svg"
                        alt="Back"
                      />Back to Data Inputs</router-link
                    >
                  </div>

                  <div
                    class="report-client-list-div task-risk-analysis-main-div"
                  >
                    <!-- <div class="ComparativeTableMainDiv active"> -->
                    <div class="d-flex justify-content-end pb-3 mb-1">
                      <svg
                        class="tax-risk-setting-btn"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        data-bs-toggle="modal"
                        data-bs-target="#taxScorecardModal"
                      >
                        <g filter="url(#filter0_d_13_2428)">
                          <mask
                            id="mask0_13_2428"
                            style="mask-type: luminance"
                            maskUnits="userSpaceOnUse"
                            x="4"
                            y="2"
                            width="24"
                            height="24"
                          >
                            <path d="M4 2H28V25.5039H4V2Z" fill="white" />
                          </mask>
                          <g mask="url(#mask0_13_2428)">
                            <path
                              d="M10.6024 13.8515C9.65457 13.8515 8.88658 13.0728 8.88658 12.1124C8.88658 11.1519 9.65457 10.3735 10.6024 10.3735C11.55 10.3735 12.3183 11.1519 12.3183 12.1124C12.3183 13.0728 11.55 13.8515 10.6024 13.8515ZM16.9677 11.2153L16.6235 11.1636C16.1338 11.0897 15.7232 10.7509 15.5534 10.2798C15.5024 10.1385 15.446 10.0004 15.3838 9.86466C15.1747 9.40838 15.2262 8.87296 15.5219 8.46831L15.7293 8.18484C15.8113 8.07293 15.8 7.91682 15.7024 7.81821L14.8393 6.94337C14.7418 6.84475 14.5881 6.83301 14.4774 6.91616L14.1979 7.12637C13.7988 7.42592 13.2704 7.47816 12.8198 7.2661C12.6866 7.20304 12.55 7.14585 12.4107 7.09422C11.946 6.92235 11.6113 6.50595 11.5387 6.00979L11.4875 5.66078C11.4674 5.52291 11.3503 5.42059 11.2128 5.42059H9.99177C9.85427 5.42059 9.7375 5.52291 9.71707 5.66078L9.66585 6.00979C9.59329 6.50595 9.25884 6.92235 8.7939 7.09422C8.65457 7.14585 8.51829 7.20304 8.38476 7.2661C7.93445 7.47816 7.4061 7.42592 7.00701 7.12637L6.72713 6.91616C6.61677 6.83301 6.4628 6.84475 6.36555 6.94337L5.50213 7.81821C5.40488 7.91682 5.39329 8.07293 5.4753 8.18484L5.68262 8.46831C5.97835 8.87296 6.02988 9.40838 5.82073 9.86466C5.75884 10.0004 5.70213 10.1385 5.65122 10.2798C5.4814 10.7509 5.07073 11.0897 4.5811 11.1636L4.23689 11.2153C4.10091 11.236 4 11.3541 4 11.4938V12.7312C4 12.8706 4.10091 12.9894 4.23689 13.0098L4.5811 13.0617C5.07073 13.1353 5.4814 13.4741 5.65122 13.9452C5.70213 14.0865 5.75884 14.225 5.82073 14.36C6.02988 14.8166 5.97835 15.3524 5.68262 15.7567L5.4753 16.0399C5.39329 16.1521 5.40488 16.3082 5.50213 16.4068L6.36555 17.282C6.4628 17.3803 6.61677 17.392 6.72713 17.3092L7.00701 17.0986C7.4061 16.7991 7.93445 16.7468 8.38476 16.9589C8.51829 17.0217 8.65457 17.0789 8.7939 17.1305C9.25884 17.3027 9.59329 17.7191 9.66585 18.2152L9.71707 18.5642C9.7375 18.7021 9.85427 18.8044 9.99177 18.8044H11.2128C11.3503 18.8044 11.4674 18.7021 11.4875 18.5642L11.5387 18.2152C11.6113 17.7191 11.946 17.3027 12.4107 17.1305C12.55 17.0789 12.6866 17.0217 12.8198 16.9589C13.2704 16.7468 13.7988 16.7991 14.1979 17.0986L14.4774 17.3092C14.5881 17.392 14.7418 17.3803 14.8393 17.282L15.7024 16.4068C15.8 16.3082 15.8113 16.1521 15.7293 16.0399L15.5219 15.7567C15.2262 15.3524 15.1747 14.8166 15.3838 14.36C15.446 14.225 15.5024 14.0865 15.5534 13.9452C15.7232 13.4741 16.1338 13.1353 16.6235 13.0617L16.9677 13.0098C17.1037 12.9894 17.2046 12.8706 17.2046 12.7312V11.4938C17.2046 11.3541 17.1037 11.236 16.9677 11.2153ZM21.3979 20.5433C20.4503 20.5433 19.682 19.7649 19.682 18.8044C19.682 17.844 20.4503 17.0653 21.3979 17.0653C22.3454 17.0653 23.1137 17.844 23.1137 18.8044C23.1137 19.7649 22.3454 20.5433 21.3979 20.5433ZM27.7634 17.907L27.4192 17.8551C26.9296 17.7815 26.5189 17.4427 26.3488 16.9716C26.2982 16.8303 26.2415 16.6918 26.1793 16.5567C25.9701 16.1001 26.0219 15.5644 26.3177 15.1604L26.5247 14.8766C26.6067 14.7647 26.5954 14.6086 26.4982 14.51L25.6348 13.6348C25.5375 13.5362 25.3835 13.5248 25.2729 13.6076L24.9933 13.8178C24.5942 14.1177 24.0659 14.1702 23.6155 13.9579C23.482 13.8951 23.3454 13.8379 23.2064 13.7863C22.7415 13.6141 22.407 13.1977 22.3341 12.7016L22.2832 12.3525C22.2631 12.2147 22.146 12.1124 22.0082 12.1124H20.7875C20.6497 12.1124 20.5329 12.2147 20.5128 12.3525L20.4616 12.7016C20.3887 13.1977 20.0543 13.6141 19.5896 13.7863C19.4503 13.8379 19.3137 13.8951 19.1802 13.9579C18.7299 14.1702 18.2015 14.1177 17.8027 13.8178L17.5229 13.6076C17.4122 13.5248 17.2582 13.5362 17.161 13.6348L16.2979 14.51C16.2003 14.6086 16.189 14.7647 16.271 14.8766L16.4784 15.1604C16.7738 15.5644 16.8253 16.1001 16.6162 16.5567C16.5543 16.6918 16.4976 16.8303 16.4466 16.9716C16.2771 17.4427 15.8662 17.7815 15.3768 17.8551L15.0323 17.907C14.8963 17.9274 14.7957 18.0461 14.7957 18.1855V19.423C14.7957 19.5624 14.8963 19.6811 15.0323 19.7015L15.3768 19.7531C15.8662 19.827 16.2771 20.1658 16.4466 20.637C16.4976 20.7782 16.5543 20.9167 16.6162 21.0518C16.8253 21.5084 16.7738 22.0438 16.4784 22.4482L16.271 22.7319C16.189 22.8438 16.2003 23 16.2979 23.0986L17.161 23.9737C17.2582 24.072 17.4122 24.0838 17.5229 24.0006L17.8027 23.7904C18.2015 23.4905 18.7299 23.4386 19.1802 23.6507C19.3137 23.7134 19.4503 23.7709 19.5896 23.8226C20.0546 23.9944 20.3887 24.4108 20.4616 24.907L20.5128 25.256C20.5329 25.3939 20.6497 25.4962 20.7875 25.4962H22.0082C22.146 25.4962 22.2631 25.3939 22.2832 25.256L22.3341 24.907C22.407 24.4108 22.7415 23.9944 23.2064 23.8226C23.3454 23.7709 23.482 23.7134 23.6155 23.6507C24.0659 23.4386 24.5942 23.4905 24.9933 23.7904L25.2729 24.0006C25.3835 24.0838 25.5375 24.072 25.6348 23.9737L26.4982 23.0986C26.5954 23 26.6067 22.8438 26.5247 22.7319L26.3177 22.4482C26.0219 22.0438 25.9701 21.5084 26.1793 21.0518C26.2415 20.9167 26.2982 20.7782 26.3488 20.637C26.5189 20.1658 26.9296 19.827 27.4192 19.7531L27.7634 19.7015C27.8994 19.6811 28.0003 19.5624 28.0003 19.423V18.1855C28.0003 18.0461 27.8994 17.9274 27.7634 17.907ZM20.436 8.15794C19.721 8.15794 19.1415 7.57028 19.1415 6.84599C19.1415 6.12139 19.721 5.53404 20.436 5.53404C21.1509 5.53404 21.7302 6.12139 21.7302 6.84599C21.7302 7.57028 21.1509 8.15794 20.436 8.15794ZM25.0357 6.19774L24.7869 6.16003C24.4332 6.10686 24.1363 5.86203 24.0134 5.52167C23.9768 5.41966 23.936 5.3195 23.8909 5.22181C23.7399 4.89197 23.7771 4.50494 23.9909 4.21281L24.1405 4.00786C24.1997 3.92717 24.1915 3.81403 24.1213 3.74293L23.4976 3.11076C23.4271 3.03935 23.3159 3.031 23.236 3.09128L23.0338 3.24276C22.7454 3.45946 22.3637 3.49748 22.0384 3.34415C21.9421 3.29871 21.8433 3.25729 21.7427 3.21988C21.4067 3.09561 21.1652 2.79452 21.1125 2.43623L21.0753 2.18429C21.061 2.08444 20.9765 2.01056 20.8771 2.01056H19.9948C19.8954 2.01056 19.811 2.08444 19.796 2.18429L19.7594 2.43623C19.7067 2.79452 19.4652 3.09561 19.1293 3.21988C19.0287 3.25729 18.9299 3.29871 18.8335 3.34415C18.5079 3.49748 18.1262 3.45946 17.8378 3.24276L17.636 3.09128C17.5558 3.031 17.4445 3.03935 17.3744 3.11076L16.7506 3.74293C16.6805 3.81403 16.672 3.92717 16.7311 4.00786L16.8811 4.21281C17.0948 4.50494 17.132 4.89197 16.9808 5.22181C16.936 5.3195 16.8951 5.41966 16.8582 5.52167C16.7357 5.86203 16.4387 6.10686 16.0851 6.16003L15.8363 6.19774C15.7381 6.21227 15.6652 6.2979 15.6652 6.39899V7.29299C15.6652 7.39377 15.7381 7.4794 15.8363 7.49424L16.0851 7.53164C16.4387 7.58512 16.7357 7.82996 16.8582 8.17031C16.8951 8.27232 16.936 8.37217 16.9808 8.47017C17.132 8.7997 17.0948 9.18704 16.8811 9.47917L16.7311 9.68412C16.672 9.76512 16.6805 9.87764 16.7506 9.94905L17.3744 10.5812C17.4445 10.6526 17.5558 10.6607 17.636 10.6007L17.8378 10.4489C18.1262 10.2322 18.5079 10.1948 18.8335 10.3478C18.9299 10.3933 19.0287 10.4347 19.1293 10.4721C19.4652 10.5964 19.7067 10.8972 19.7594 11.2557L19.796 11.508C19.811 11.6078 19.8954 11.6814 19.9948 11.6814H20.8771C20.9765 11.6814 21.061 11.6078 21.0753 11.508L21.1125 11.2557C21.1652 10.8972 21.4067 10.5964 21.7427 10.4721C21.8433 10.4347 21.9421 10.3933 22.0384 10.3478C22.3637 10.1948 22.7454 10.2322 23.0338 10.4489L23.236 10.6007C23.3159 10.6607 23.4271 10.6526 23.4976 10.5812L24.1213 9.94905C24.1915 9.87764 24.1997 9.76512 24.1405 9.68412L23.9909 9.47917C23.7771 9.18704 23.7399 8.7997 23.8909 8.47017C23.936 8.37217 23.9768 8.27232 24.0134 8.17031C24.1363 7.82996 24.4332 7.58512 24.7869 7.53164L25.0357 7.49424C25.1338 7.4794 25.2067 7.39377 25.2067 7.29299V6.39899C25.2067 6.2979 25.1338 6.21227 25.0357 6.19774Z"
                              fill="#3C3C3C"
                            />
                          </g>
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_13_2428"
                            x="0"
                            y="0.0105591"
                            width="32"
                            height="31.4856"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="2" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_13_2428"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_13_2428"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <div class="tax-risk-analysis-outer-div">
                      <div class="container-fluid">
                        <div class="row tax-risk-each-card-row">
                          <div class="col-md-6 px-1">
                            <div class="tax-risk-each-card">
                              <p class="heading-para-tax-risk card1">
                                Pre-tax Tax Scorecard
                              </p>
                              <div class="card-inner-div">
                                <div class="each-card-row">
                                  <p class="left-text">
                                    Current Pre-tax Balance
                                  </p>
                                  <p class="right-text">
                                    {{
                                      $numFormatWithDollar(
                                        inputs.ira_or_401k_balance
                                      )
                                    }}
                                  </p>
                                </div>
                                <div class="each-card-row">
                                  <p class="left-text">Age Range</p>
                                  <p class="right-text">
                                    {{ inputs.age }} -
                                    {{ inputs.plan_through_age }}
                                  </p>
                                </div>
                                <div class="each-card-row">
                                  <label class="left-text"
                                    >Tax Rate
                                    <span class="top-minus-1"
                                      ><svg
                                        class="label-common-tooltip-svg"
                                        width="13"
                                        height="13"
                                        viewBox="0 0 13 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g id="Group 1968">
                                          <circle
                                            id="Ellipse 190"
                                            cx="6.5"
                                            cy="6.5"
                                            r="6.5"
                                            fill="#D0D0D0"
                                          />
                                          <circle
                                            id="Ellipse 191"
                                            cx="6.5"
                                            cy="3.5"
                                            r="1"
                                            fill="white"
                                          />
                                          <rect
                                            id="Rectangle 753"
                                            x="5.75"
                                            y="5.5"
                                            width="1.5"
                                            height="5"
                                            rx="0.75"
                                            fill="white"
                                          />
                                        </g>
                                      </svg>
                                      <tax-rate-popover
                                        :initialTaxRate="
                                          inputs.initial_tax_rate
                                        "
                                        :switchYear="inputs.switch_year"
                                        :secondTaxRate="inputs.second_tax_rate"
                                      />
                                    </span>
                                  </label>
                                  <p
                                    v-if="inputs.second_tax_rate"
                                    class="right-text"
                                  >
                                    {{ inputs.initial_tax_rate }}% |
                                    {{ inputs.second_tax_rate }}%
                                  </p>
                                  <p v-else class="right-text">
                                    {{ inputs.initial_tax_rate }}%
                                  </p>
                                </div>
                                <div class="each-card-row">
                                  <p class="left-text total">Total Taxes</p>
                                  <p class="right-text total">
                                    {{
                                      $numFormatWithDollar(
                                        ira_backend.total_taxes
                                      )
                                    }}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 px-1">
                            <div class="tax-risk-each-card">
                              <p class="heading-para-tax-risk card2">
                                Conversion Tax Scorecard
                              </p>
                              <div class="card-inner-div">
                                <div class="each-card-row">
                                  <p class="left-text">Conversion Period</p>
                                  <p class="right-text">
                                    {{ inputs.roth_conversion_years }}
                                  </p>
                                </div>
                                <div class="each-card-row">
                                  <p class="left-text">Age Range</p>
                                  <p class="right-text">
                                    {{ inputs.age }} -
                                    {{ inputs.plan_through_age }}
                                  </p>
                                </div>
                                <div class="each-card-row">
                                  <label class="left-text"
                                    >{{
                                      showBonus ? "Effective Conversion" : ""
                                    }}
                                    Tax Rate
                                    <span class="top-minus-1"
                                      ><svg
                                        class="label-common-tooltip-svg"
                                        width="13"
                                        height="13"
                                        viewBox="0 0 13 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g id="Group 1968">
                                          <circle
                                            id="Ellipse 190"
                                            cx="6.5"
                                            cy="6.5"
                                            r="6.5"
                                            fill="#D0D0D0"
                                          />
                                          <circle
                                            id="Ellipse 191"
                                            cx="6.5"
                                            cy="3.5"
                                            r="1"
                                            fill="white"
                                          />
                                          <rect
                                            id="Rectangle 753"
                                            x="5.75"
                                            y="5.5"
                                            width="1.5"
                                            height="5"
                                            rx="0.75"
                                            fill="white"
                                          />
                                        </g>
                                      </svg>
                                      <tax-rate-popover
                                        v-if="!showBonus"
                                        :initialTaxRate="
                                          inputs.initial_tax_rate
                                        "
                                        :switchYear="inputs.switch_year"
                                        :secondTaxRate="inputs.second_tax_rate"
                                        :additionalConversionTax="
                                          inputs.additional_conversion_tax
                                        "
                                      />
                                      <span v-else>
                                        The effective conversion tax rate after
                                        bonuses applied
                                      </span>
                                    </span></label
                                  >

                                  <p v-if="showBonus" class="right-text">
                                    {{
                                      Number(
                                        (
                                          roth_backend.effective_conversion_tax_rate *
                                          100
                                        ).toFixed(2)
                                      )
                                    }}%
                                  </p>
                                  <p v-else class="right-text">
                                    <span v-if="inputs.second_tax_rate">
                                      {{ inputs.initial_tax_rate }}% |
                                      {{ inputs.second_tax_rate }}%
                                    </span>
                                    <span v-else
                                      >{{ inputs.initial_tax_rate }}%</span
                                    >
                                  </p>
                                </div>
                                <div class="each-card-row">
                                  <p class="left-text total">
                                    {{ showBonus ? "Net" : "Total" }} Taxes
                                    <span
                                      v-if="
                                        showBonus && roth_backend.bonus_amount
                                      "
                                      style="font-weight: 500"
                                      >(after bonuses of
                                      {{
                                        $numFormatWithDollar(
                                          roth_backend.bonus_amount
                                        )
                                      }})</span
                                    >
                                  </p>
                                  <p class="right-text total">
                                    {{
                                      $numFormatWithDollar(
                                        showBonus
                                          ? roth_backend.net_total_taxes_after_bonus
                                          : roth_backend.total_taxes
                                      )
                                    }}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="container-fluid">
                        <div class="row">
                          <div class="col-12 px-1">
                            <div class="tax-details-graph-main-div p-relative">
                              <ul
                                class="nav tax-details-tab-ul"
                                id="myTab"
                                role="tablist"
                              >
                                <li class="nav-item" role="presentation">
                                  <button
                                    @click="tabChange('preTax')"
                                    class="commonTabs active"
                                    id="iraTaxDetails-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#iraTaxDetailsTab"
                                  >
                                    Pre-tax
                                    {{
                                      activeTab === "compare"
                                        ? "Path"
                                        : "Analysis"
                                    }}
                                  </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                  <button
                                    @click="tabChange('conversion')"
                                    class="commonTabs rothTaxTav"
                                    id="rothTaxDetailstab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#rothTaxDetails"
                                  >
                                    Conversion
                                    {{
                                      activeTab === "compare"
                                        ? "Path"
                                        : "Analysis"
                                    }}
                                  </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                  <button
                                    @click="tabChange('compare')"
                                    class="commonTabs comparePathTab"
                                    id="comparePathsTab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#comparePaths"
                                  >
                                    Compare Paths
                                  </button>
                                </li>
                              </ul>

                              <div
                                class="d-flex justify-content-center position-relative"
                              >
                                <div
                                  id="mltplSwtchDiv"
                                  :class="`nav mltplSwtchDiv nav-pills mw-325 taxRisk ${
                                    activeTab === 'conversion' ? 'blue' : ''
                                  } ${
                                    activeTab === 'compare' ? 'compare' : ''
                                  }`"
                                  role="tablist"
                                  aria-orientation="vertical"
                                >
                                  <div
                                    class="active"
                                    @click="initialBarWidths"
                                    data-bs-toggle="pill"
                                    type="button"
                                    role="tab"
                                    aria-controls="v-pills-default"
                                    aria-selected="true"
                                  >
                                    Individual
                                  </div>
                                  <div
                                    class=""
                                    @click="updateBarWidths"
                                    data-bs-toggle="pill"
                                    type="button"
                                    role="tab"
                                    aria-controls="v-pills-longevity"
                                    aria-selected="false"
                                  >
                                    See All
                                  </div>
                                </div>
                                <!-- If user choses the option of Bonus on Conversion, display this switch button -->
                                <div
                                  v-if="
                                    this.activeTab === 'conversion' &&
                                    inputs.bonus_amount
                                  "
                                  class="form-check form-switch custom-switch show-bonus-switch ms-2 mb-0"
                                >
                                  <label for="showBonusCheck">Show Bonus</label>
                                  <input
                                    @click="showBonusHandler"
                                    class="form-check-input enhanceInputCheckBox"
                                    type="checkbox"
                                    role="switch"
                                    id="showBonusCheck"
                                    v-model="showBonus"
                                  />
                                </div>
                                <div
                                  v-if="
                                    this.activeTab === 'compare' &&
                                    inputs.bonus_amount
                                  "
                                  class="form-check form-switch custom-switch show-bonus-switch ms-2 mb-0"
                                >
                                  <label for="compareShowBonusCheck"
                                    >Show Bonus</label
                                  >
                                  <input
                                    @click="showBonusHandler"
                                    class="form-check-input enhanceInputCheckBox"
                                    type="checkbox"
                                    role="switch"
                                    id="compareShowBonusCheck"
                                    v-model="showBonus"
                                  />
                                </div>
                              </div>

                              <div class="tab-content" id="myTabContent">
                                <div
                                  class="tab-pane fade show active"
                                  id="iraTaxDetailsTab"
                                >
                                  <div class="each-tax-details-bar">
                                    <p class="heading clr1">RMD Taxes</p>
                                    <div class="tax-details-each-bars barClr1">
                                      <label
                                        class="amount-label-wrapper"
                                        style="padding-left: 8px"
                                        >$<span id="wider_bar_1">{{
                                          $numFormatNoDecimal(
                                            ira_backend.rmd_taxes
                                          )
                                        }}</span></label
                                      >
                                    </div>
                                  </div>
                                  <div class="each-tax-details-bar">
                                    <p class="heading clr2">
                                      Reinvestment Taxes
                                    </p>
                                    <div class="tax-details-each-bars barClr2">
                                      <label
                                        class="amount-label-wrapper"
                                        style="padding-left: 8px"
                                        >$<span id="wider_bar_2">{{
                                          $numFormatNoDecimal(
                                            ira_backend.reinvestment_taxes
                                          )
                                        }}</span></label
                                      >
                                    </div>
                                  </div>
                                  <div class="each-tax-details-bar">
                                    <p class="heading clr3">
                                      Inheritance Taxes
                                    </p>
                                    <div class="tax-details-each-bars barClr3">
                                      <label
                                        class="amount-label-wrapper"
                                        style="padding-left: 8px"
                                        >$<span id="wider_bar_3">{{
                                          $numFormatNoDecimal(
                                            ira_backend.inheritance_taxes
                                          )
                                        }}</span></label
                                      >
                                    </div>
                                  </div>
                                  <div
                                    :class="`each-tax-details-bar ${
                                      inputs.social_security_amount
                                        ? ''
                                        : 'd-none'
                                    }`"
                                  >
                                    <p class="heading clr4">
                                      Social Security Taxes
                                    </p>
                                    <div class="tax-details-each-bars barClr4">
                                      <label
                                        class="amount-label-wrapper"
                                        style="padding-left: 8px"
                                        >$<span id="wider_bar_4">{{
                                          $numFormatNoDecimal(
                                            ira_backend.social_security_taxes
                                          )
                                        }}</span></label
                                      >
                                    </div>
                                  </div>
                                  <div class="each-tax-details-bar">
                                    <p class="heading clr5">Total Taxes</p>
                                    <div class="tax-details-each-bars barClr5">
                                      <label
                                        class="amount-label-wrapper"
                                        style="padding-left: 8px"
                                        >$<span id="wider_bar_5">{{
                                          $numFormatNoDecimal(
                                            ira_backend.total_taxes
                                          )
                                        }}</span></label
                                      >
                                    </div>
                                  </div>
                                </div>
                                <div class="tab-pane fade" id="rothTaxDetails">
                                  <div class="each-tax-details-bar">
                                    <p class="heading clr1">RMD Taxes</p>
                                    <div class="tax-details-each-bars barClr1">
                                      <label
                                        class="amount-label-wrapper"
                                        style="padding-left: 8px"
                                        >$<span id="roth_wider_bar_1">{{
                                          $numFormatNoDecimal(
                                            roth_backend.rmd_taxes
                                          )
                                        }}</span></label
                                      >
                                    </div>
                                  </div>
                                  <div class="each-tax-details-bar">
                                    <p class="heading clr2">
                                      Reinvestment Taxes
                                    </p>
                                    <div class="tax-details-each-bars barClr2">
                                      <label
                                        class="amount-label-wrapper"
                                        style="padding-left: 8px"
                                        >$<span id="roth_wider_bar_2">{{
                                          $numFormatNoDecimal(
                                            roth_backend.reinvestment_taxes
                                          )
                                        }}</span></label
                                      >
                                    </div>
                                  </div>
                                  <div class="each-tax-details-bar">
                                    <p class="heading clr3">
                                      Inheritance Taxes
                                    </p>
                                    <div class="tax-details-each-bars barClr3">
                                      <label
                                        class="amount-label-wrapper"
                                        style="padding-left: 8px"
                                        >$<span id="roth_wider_bar_3">{{
                                          $numFormatNoDecimal(
                                            roth_backend.inheritance_taxes
                                          )
                                        }}</span></label
                                      >
                                    </div>
                                  </div>
                                  <div
                                    :class="`each-tax-details-bar ${
                                      inputs.social_security_amount
                                        ? ''
                                        : 'd-none'
                                    }`"
                                  >
                                    <p class="heading clr4">
                                      Social Security Taxes
                                    </p>
                                    <div class="tax-details-each-bars barClr4">
                                      <label
                                        class="amount-label-wrapper"
                                        style="padding-left: 8px"
                                        >$<span id="roth_wider_bar_4">{{
                                          $numFormatNoDecimal(
                                            roth_backend.social_security_taxes
                                          )
                                        }}</span></label
                                      >
                                    </div>
                                  </div>
                                  <div class="each-tax-details-bar">
                                    <p class="heading clr6">
                                      {{ showBonus ? "Net" : "" }} Conversion
                                      Taxes
                                      <label :class="showBonus ? '' : 'd-none'"
                                        ><common-tooltip-svg /><small
                                          >The net amount of conversion taxes
                                          after the bonus is applied</small
                                        ></label
                                      >
                                    </p>
                                    <div
                                      :class="`${showBonus ? 'advance' : ''}`"
                                    >
                                      <div
                                        class="tax-details-each-bars barClr6"
                                      >
                                        <div class="dark-bar dark-bar-1"></div>
                                        <label
                                          class="amount-label-wrapper"
                                          style="padding-left: 8px"
                                          >$<span id="roth_wider_bar_5">{{
                                            $numFormatNoDecimal(
                                              showBonus
                                                ? roth_backend.net_taxes_after_bonus
                                                : roth_backend.roth_conversion_taxes
                                            )
                                          }}</span></label
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <div class="each-tax-details-bar">
                                    <p class="heading clr5">
                                      {{ showBonus ? "Net" : "" }} Total Taxes
                                    </p>
                                    <div
                                      :class="`${showBonus ? 'advance' : ''}`"
                                    >
                                      <div
                                        class="tax-details-each-bars barClr5"
                                      >
                                        <div class="dark-bar dark-bar-2"></div>
                                        <label
                                          class="amount-label-wrapper"
                                          style="padding-left: 8px"
                                          >$<span id="roth_wider_bar_6">{{
                                            $numFormatNoDecimal(
                                              showBonus
                                                ? roth_backend.net_total_taxes_after_bonus
                                                : roth_backend.total_taxes
                                            )
                                          }}</span></label
                                        >
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="tab-pane fade" id="comparePaths">
                                  <div class="comparePathTabVsDiv">
                                    <span>Pre-Tax Path</span>
                                    <span class="vs-text">vs</span>
                                    <span>Conversion Path</span>
                                  </div>
                                  <div class="progressBarDIvsArea">
                                    <div
                                      class="eachProgressBarDiv"
                                      id="compare_each_progressbar_1"
                                    >
                                      <div class="compareLeftPart">
                                        <div
                                          class="tax-details-each-bars barClr1"
                                        >
                                          <label class="amount-label-wrapper"
                                            >$<span
                                              id="compare_wider_bar_1"
                                              class="compare_wider_bar_1"
                                              >{{
                                                $numFormatNoDecimal(
                                                  ira_backend.rmd_taxes
                                                )
                                              }}</span
                                            ></label
                                          >
                                        </div>
                                      </div>
                                      <div class="compareMiddlePart barClr1">
                                        <span>RMD Taxes</span>
                                      </div>
                                      <div class="compareRightPart">
                                        <div
                                          class="tax-details-each-bars barClr1"
                                        >
                                          <label class="amount-label-wrapper"
                                            >$<span
                                              id="compare_wider_bar_2"
                                              class="compare_wider_bar_2"
                                              >{{
                                                $numFormatNoDecimal(
                                                  roth_backend.rmd_taxes
                                                )
                                              }}</span
                                            ></label
                                          >
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="eachProgressBarDiv"
                                      id="compare_each_progressbar_2"
                                    >
                                      <div class="compareLeftPart">
                                        <div
                                          class="tax-details-each-bars barClr2"
                                        >
                                          <label class="amount-label-wrapper"
                                            >$<span
                                              id="compare_wider_bar_3"
                                              class="compare_wider_bar_1"
                                              >{{
                                                $numFormatNoDecimal(
                                                  ira_backend.reinvestment_taxes
                                                )
                                              }}</span
                                            ></label
                                          >
                                        </div>
                                      </div>
                                      <div class="compareMiddlePart barClr2">
                                        <span>Reinvestment Taxes</span>
                                      </div>
                                      <div class="compareRightPart">
                                        <div
                                          class="tax-details-each-bars barClr2"
                                        >
                                          <label class="amount-label-wrapper"
                                            >$<span
                                              id="compare_wider_bar_4"
                                              class="compare_wider_bar_2"
                                              >{{
                                                $numFormatNoDecimal(
                                                  roth_backend.reinvestment_taxes
                                                )
                                              }}</span
                                            ></label
                                          >
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="eachProgressBarDiv"
                                      id="compare_each_progressbar_3"
                                    >
                                      <div class="compareLeftPart">
                                        <div
                                          class="tax-details-each-bars barClr3"
                                        >
                                          <label class="amount-label-wrapper"
                                            >$<span
                                              id="compare_wider_bar_5"
                                              class="compare_wider_bar_1"
                                              >{{
                                                $numFormatNoDecimal(
                                                  ira_backend.inheritance_taxes
                                                )
                                              }}</span
                                            ></label
                                          >
                                        </div>
                                      </div>
                                      <div class="compareMiddlePart barClr3">
                                        <span>Inheritance Taxes</span>
                                      </div>
                                      <div class="compareRightPart">
                                        <div
                                          class="tax-details-each-bars barClr3"
                                        >
                                          <label class="amount-label-wrapper"
                                            >$<span
                                              id="compare_wider_bar_6"
                                              class="compare_wider_bar_2"
                                              >{{
                                                $numFormatNoDecimal(
                                                  roth_backend.inheritance_taxes
                                                )
                                              }}</span
                                            ></label
                                          >
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      :class="`eachProgressBarDiv ${
                                        inputs.social_security_amount
                                          ? ''
                                          : 'd-none'
                                      }`"
                                      id="compare_each_progressbar_4"
                                    >
                                      <div class="compareLeftPart">
                                        <div
                                          class="tax-details-each-bars barClr4"
                                        >
                                          <label class="amount-label-wrapper"
                                            >$<span
                                              id="compare_wider_bar_7"
                                              class="compare_wider_bar_1"
                                              >{{
                                                $numFormatNoDecimal(
                                                  ira_backend.social_security_taxes
                                                )
                                              }}</span
                                            ></label
                                          >
                                        </div>
                                      </div>
                                      <div class="compareMiddlePart barClr4">
                                        <span>Social Security Taxes</span>
                                      </div>
                                      <div class="compareRightPart">
                                        <div
                                          class="tax-details-each-bars barClr4"
                                        >
                                          <label class="amount-label-wrapper"
                                            >$<span
                                              id="compare_wider_bar_8"
                                              class="compare_wider_bar_2"
                                              >{{
                                                $numFormatNoDecimal(
                                                  roth_backend.social_security_taxes
                                                )
                                              }}</span
                                            ></label
                                          >
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="eachProgressBarDiv"
                                      id="compare_each_progressbar_5"
                                    >
                                      <div class="compareLeftPart">
                                        <div
                                          class="tax-details-each-bars barClr6"
                                        >
                                          <label class="amount-label-wrapper"
                                            >$<span
                                              id="compare_wider_bar_9"
                                              class="compare_wider_bar_1"
                                              >0</span
                                            ></label
                                          >
                                        </div>
                                      </div>
                                      <div class="compareMiddlePart barClr6">
                                        <span
                                          >{{
                                            showBonus ? "Net" : ""
                                          }}
                                          Conversion Taxes</span
                                        >
                                      </div>
                                      <div
                                        :class="`compareRightPart ${
                                          showBonus ? 'advance' : ''
                                        }`"
                                      >
                                        <div
                                          class="tax-details-each-bars barClr6"
                                        >
                                          <div
                                            :class="`nested-progress-bar-main-div ${
                                              showBonus ? '' : 'd-none'
                                            }`"
                                          >
                                            <div
                                              class="nested-progress-bar"
                                              :style="`width: ${
                                                (roth_backend.net_taxes_after_bonus /
                                                  roth_backend.roth_conversion_taxes) *
                                                  100 +
                                                '%'
                                              }`"
                                            ></div>
                                          </div>
                                          <label class="amount-label-wrapper"
                                            >$<span
                                              id="compare_wider_bar_10"
                                              class="compare_wider_bar_2"
                                              >{{
                                                $numFormatNoDecimal(
                                                  showBonus
                                                    ? roth_backend.net_taxes_after_bonus
                                                    : roth_backend.roth_conversion_taxes
                                                )
                                              }}</span
                                            ></label
                                          >
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="eachProgressBarDiv"
                                      id="compare_each_progressbar_6"
                                    >
                                      <div class="compareLeftPart">
                                        <div
                                          class="tax-details-each-bars barClr5"
                                        >
                                          <label class="amount-label-wrapper"
                                            >$<span
                                              id="compare_wider_bar_11"
                                              class="compare_wider_bar_1"
                                              >{{
                                                $numFormatNoDecimal(
                                                  ira_backend.total_taxes
                                                )
                                              }}</span
                                            ></label
                                          >
                                        </div>
                                      </div>
                                      <div class="compareMiddlePart barClr5">
                                        <span
                                          >{{ showBonus ? "Net" : "" }} Total
                                          Taxes</span
                                        >
                                      </div>
                                      <div
                                        :class="`compareRightPart ${
                                          showBonus ? 'advance' : ''
                                        }`"
                                      >
                                        <div
                                          class="tax-details-each-bars barClr5"
                                        >
                                          <div
                                            :class="`nested-progress-bar-main-div ${
                                              showBonus ? '' : 'd-none'
                                            }`"
                                          >
                                            <div
                                              class="nested-progress-bar"
                                              :style="`width: ${
                                                (roth_backend.net_total_taxes_after_bonus /
                                                  roth_backend.total_taxes) *
                                                  100 +
                                                '%'
                                              }`"
                                            ></div>
                                          </div>
                                          <label class="amount-label-wrapper"
                                            >$<span
                                              id="compare_wider_bar_12"
                                              class="compare_wider_bar_2"
                                              >{{
                                                $numFormatNoDecimal(
                                                  showBonus
                                                    ? roth_backend.net_total_taxes_after_bonus
                                                    : roth_backend.total_taxes
                                                )
                                              }}</span
                                            ></label
                                          >
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="d-flex justify-content-center pt-3 mt-1"
                              >
                                <button
                                  @click="showIndividualBar"
                                  class="btn show-next-btn /*disabled*/"
                                >
                                  Show Next
                                  <img
                                    class="ms-2"
                                    src="@/assets/images/icons/dark-chevrolet.svg"
                                    width="18"
                                    alt="Back"
                                  />
                                </button>
                              </div>
                              <div
                                :class="`compareBottomDivs ${
                                  currentCompareBarIdx > 5 || isSeeAllActive
                                    ? ''
                                    : 'd-none'
                                } ${activeTab === 'compare' ? '' : 'd-none'}`"
                              >
                                <div class="compareBottomEachDiv">
                                  <p>Potential Tax Savings</p>
                                  <div class="priceDiv">
                                    ${{
                                      $numFormatNoDecimal(
                                        showBonus
                                          ? summary.tax_reduction_with_bonus
                                          : summary.tax_reduction_without_bonus
                                      )
                                    }}
                                  </div>
                                </div>
                                <div class="compareBottomEachDiv">
                                  <p>Average Annual Tax Savings</p>
                                  <div class="priceDiv">
                                    ${{
                                      $numFormatNoDecimal(
                                        showBonus
                                          ? summary.average_annual_tax_reduction_with_bonus
                                          : summary.average_annual_tax_reduction_without_bonus
                                      )
                                    }}
                                  </div>
                                </div>
                                <div class="compareBottomEachDiv">
                                  <p>Potential Tax Reduction</p>
                                  <div class="compateBottomProgressDiv">
                                    <div class="compareBottomProgreesBar">
                                      <div
                                        class="compareBottomInnerProgreesBar"
                                        :style="`width: ${
                                          showBonus
                                            ? summary.tax_reduction_percentage_with_bonus
                                            : summary.tax_reduction_percentage_without_bonus
                                        }%`"
                                      >
                                        <label>
                                          <span>{{
                                            Number(
                                              showBonus
                                                ? summary.tax_reduction_percentage_with_bonus
                                                : summary.tax_reduction_percentage_without_bonus
                                            ).toFixed(0)
                                          }}</span
                                          >%
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- </div> -->
                    <div class="tax-score-disclosure">
                      <p>
                        <i
                          ><b>Disclosure:</b> This tool is designed to provide
                          insight and opportunities for discussion regarding
                          certain tax-efficient strategies that may prove
                          beneficial amid a myriad of potential outcomes but
                          that are not guaranteed to prove so. While every
                          reasonable effort is made to ensure proper
                          calculations and their portrayal, it is impossible for
                          any software or advisor to accurately predict your
                          future. Unpredictable variables can and likely will
                          cause material changes in the outcomes projected. Any
                          conversion strategy should only be undertaken after
                          discussion with appropriate financial, legal, and tax
                          advisors. The data presented in no way predicts what
                          your future tax rates or tax liability will be in
                          reality. No implication is asserted that undertaking a
                          conversion strategy, including the one contemplated
                          here, is superior to a non-conversion strategy. This
                          does not constitute financial, legal, or tax advice to
                          you. Past performance is never guarantee or indicative
                          of future results.
                        </i>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <!-- Inner Content Area End -->
            </div>
          </div>
        </main>
      </div>
    </section>
  </div>

  <div class="index-strategy-content-div border-0">
    <div class="index-strategy-content-inner-div withBoxShadow">
      <tax-score-card-modal />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NavbarComponent from "./../components/common/NavbarComponent.vue";
import LeftSidebarComponent from "./../components/common/LeftSidebarComponent.vue";
import TaxScoreCardModal from "../components/tax_scorecard/TaxScoreCardModal.vue";
import TaxRatePopover from "../components/tax_scorecard/TaxRatePopover.vue";
import CommonTooltipSvg from "../components/common/CommonTooltipSvg.vue";

export default {
  components: {
    NavbarComponent,
    LeftSidebarComponent,
    TaxScoreCardModal,
    TaxRatePopover,
    CommonTooltipSvg,
  },
  data() {
    return {
      activeTab: "preTax",
      currentPreTaxBarIdx: 0,
      currentConversionBarIdx: 0,
      currentCompareBarIdx: 0,
      noOfPreBars: 5, // Need to change if no social security
      noOfConversionBars: 6, // Need to change if no social security
      noOfCompareBars: 12,
      isSeeAllActive: false,
      showBonus: false,
      isIndividual: true,
    };
  },

  computed: {
    ...mapState({
      inputs: (state) => state.data.tax_scorecard.inputs,
      ira_backend: (state) => state.data.tax_scorecard.results.ira_backend,
      roth_backend: (state) => state.data.tax_scorecard.results.roth_backend,
      summary: (state) => state.data.tax_scorecard.results.summary,
    }),
  },

  beforeMount() {
    if (Object.keys(this.ira_backend).length == 0) {
      this.$router.push(`/tax-score-card`);
    }
  },

  mounted() {
    this.initialBarWidths();
    let collapseArrow = document.querySelector(".sidebar-arrow-1");
    collapseArrow.addEventListener("click", this.collapseAction);

  },

  updated() {
    if (this.isSeeAllActive) {
      this.updateBarWidths();
    }
  },

  methods: {
    // TODO - Consider refactoring this to use data from vuejs state instead of DOM.
    collapseAction(){
      if (this.isSeeAllActive) {
       this.updateBarWidths();
      }
      if(this.isIndividual && this.activeTab == "compare"){
        let allBar3 = document.querySelectorAll("#comparePaths .tax-details-each-bars span");
        var compareTotalTaxes = 0;
        var sub_array = [];
        const regex = /[, \u202f]/g;
        for (let i = 1; i <= allBar3.length; i++) {
          if (document.getElementById("compare_wider_bar_" + i)) {
            var barValueGets = +document
              .getElementById("compare_wider_bar_" + i)
              .innerText.replace(regex, "");
            sub_array.push(barValueGets);
            if (i == allBar3.length) {
              compareTotalTaxes = barValueGets;
            }
          }
        }
        var largestSec = 0;
        var largestSec = Math.max.apply(0, sub_array);
        for (let i = 1; i <= this.currentCompareBarIdx * 2; i++) {
          let currentCompareBar = document.getElementById(
            "compare_wider_bar_" + i
          );
          if (currentCompareBar) {
            var barValueGet = +currentCompareBar.innerText.replace(regex, "");
            var barActualValue = largestSec;
            let finalResult = (barValueGet / barActualValue) * 100;
            finalResult > 100 ? (finalResult = 100) : finalResult;

            let eachBar = currentCompareBar.closest(".tax-details-each-bars");
            eachBar.style.width = finalResult + "%";

            if (i == allBar3.length - 2 && this.showBonus) {
              let tempVal = roth_conversion_taxes;
              barValueGet = this.ira_backend.total_taxes;
              var mainBar = currentCompareBar;
              finalResult = (tempVal / barValueGet) * 100;
              finalResult > 100 ? (finalResult = 100) : finalResult;
              var mainBar = currentCompareBar
                .closest(".eachProgressBarDiv")
                .querySelector(".compareRightPart")
                .querySelector(".tax-details-each-bars");
              if (mainBar) {
                mainBar.style.width = finalResult + "%";
              }
            }

            if (i == allBar3.length && this.showBonus) {
              let tempVal = roth_conversion_taxes;
              barValueGet = this.ira_backend.total_taxes;
              finalResult = (tempVal / barValueGet) * 100;
              finalResult > 100 ? (finalResult = 100) : finalResult;
              var mainBar = currentCompareBar
                .closest(".eachProgressBarDiv")
                .querySelector(".compareRightPart")
                .querySelector(".tax-details-each-bars");
              if (mainBar) {
                mainBar.style.width = finalResult + "%";
              }
            }

            currentCompareBar.closest(".amount-label-wrapper").style.opacity = 1;

            if (finalResult < 1 || !finalResult) {
              eachBar.style.padding = "8px 2px";
              eachBar.classList.remove("text-white");
            } else {
              eachBar.style.padding = "8px 2px";
              eachBar.classList.add("text-white");
            }

            setTimeout(() => {
              let textDiv = currentCompareBar;
              let textWidth = 0;
              if (textDiv) {
                textWidth = textDiv.offsetWidth + 20;
              }
              let barWidth = eachBar.offsetWidth;

              if (barWidth < textWidth) {
                document
                  .getElementById("compare_wider_bar_" + i)
                  .closest(".tax-details-each-bars")
                  .classList.remove("text-white");
                if (
                  document
                    .getElementById("compare_wider_bar_" + i)
                    .closest(".compareLeftPart")
                ) {
                  document
                    .getElementById("compare_wider_bar_" + i)
                    .closest(".tax-details-each-bars")
                    .querySelector(
                      ".amount-label-wrapper"
                    ).style.paddingRight = `${barWidth + 6}px`;
                } else {
                  document
                    .getElementById("compare_wider_bar_" + i)
                    .closest(".tax-details-each-bars")
                    .querySelector(
                      ".amount-label-wrapper"
                    ).style.paddingLeft = `${barWidth + 6}px`;
                }
              }else{
              document.getElementById("compare_wider_bar_" + i).closest(".tax-details-each-bars")
                .classList.add("text-white");
              if (document.getElementById("compare_wider_bar_" + i).closest(".compareLeftPart")) {
                document.getElementById("compare_wider_bar_" + i).closest(".tax-details-each-bars")
                  .querySelector(".amount-label-wrapper").style.paddingRight = `0px`;
              } else {
                document.getElementById("compare_wider_bar_" + i).closest(".tax-details-each-bars")
                  .querySelector(".amount-label-wrapper").style.paddingLeft = `6px`;
              }
            }
            }, 400);
          }
        }
      }
    },
    tabChange(txt) {
      this.activeTab = txt;
      let showNextBtn = document.querySelector(".show-next-btn");
      let switchTab = document.querySelector("#mltplSwtchDiv");
      if (this.activeTab == "conversion") {
        switchTab.classList.add("blue");
        if (this.isSeeAllActive == true) {
          this.updateBarWidths();
        }
      } else {
        switchTab.classList.remove("blue");
        if (this.isSeeAllActive == true) {
          this.updateBarWidths();
        }
      }
      if (
        this.activeTab == "preTax" &&
        this.currentPreTaxBarIdx < this.noOfPreBars
      ) {
        showNextBtn.classList.remove("disabled");
        return;
      }
      if (
        this.activeTab == "conversion" &&
        this.currentConversionBarIdx < this.noOfConversionBars
      ) {
        showNextBtn.classList.remove("disabled");
        return;
      }
      if (
        this.activeTab == "compare" &&
        this.currentCompareBarIdx < this.noOfCompareBars
      ) {
        showNextBtn.classList.remove("disabled");
        return;
      }
    },
    showIndividualBar() {
      this.isSeeAllActive = false;
      this.isIndividual = true;
      const regex = /[, \u202f]/g;
      var preTotalTaxes = 0;
      if (this.activeTab == "preTax") {
        let allBar = document.querySelectorAll(
          "#iraTaxDetailsTab .each-tax-details-bar span"
        );
        var sub_array = [];
        for (let i = 1; i <= allBar.length; i++) {
          if (document.getElementById("wider_bar_" + i)) {
            var barValueGets = +document
              .getElementById("wider_bar_" + i)
              .innerText.replace(regex, "");
            sub_array.push(barValueGets);
            if (i == allBar.length) {
              preTotalTaxes = barValueGets;
            }
          }
        }
        var largestSec = 0;
        var largestSec = Math.max.apply(0, sub_array);
        if (this.currentPreTaxBarIdx < allBar.length) {
          this.currentPreTaxBarIdx += 1;
          if (
            !this.inputs.social_security_amount &&
            this.currentPreTaxBarIdx === 4
          ) {
            this.currentPreTaxBarIdx += 1;
          }
        }

        if (this.currentPreTaxBarIdx == allBar.length) {
          let showNextBtn = document.querySelector(".show-next-btn");
          showNextBtn.classList.add("disabled");
        }
        var barValueGet = +document
          .getElementById("wider_bar_" + this.currentPreTaxBarIdx)
          .innerText.replace(regex, "");
        var barActualValue = largestSec;
        let finalResult = (barValueGet / barActualValue) * 100;
        finalResult > 100 ? (finalResult = 100) : finalResult;

        let eachBar = document
          .getElementById("wider_bar_" + this.currentPreTaxBarIdx)
          .closest(".tax-details-each-bars");

        eachBar.style.width = finalResult + "%";
        document
          .getElementById("wider_bar_" + this.currentPreTaxBarIdx)
          .closest(".amount-label-wrapper").style.opacity = 1;

        if (finalResult < 1 || !finalResult) {
          eachBar.style.padding = "8px 2px";
          eachBar.classList.remove("text-white");
        } else {
          eachBar.style.padding = "8px 2px";
          eachBar.classList.add("text-white");
        }
        setTimeout(() => {
          let textDiv = document.getElementById(
            "wider_bar_" + this.currentPreTaxBarIdx
          );
          let textWidth = 0;
          if (textDiv) {
            textWidth = textDiv.offsetWidth + 20;
          }
          let barWidth = eachBar.offsetWidth;

          if (barWidth > 6 && barWidth < textWidth) {
            document
              .getElementById("wider_bar_" + this.currentPreTaxBarIdx)
              .closest(".amount-label-wrapper").style.paddingLeft = `${
              barWidth + 6
            }px`;
            eachBar.classList.remove("text-white");
          }
        }, 400);
      } else if (this.activeTab == "compare") {
        let allBar3 = document.querySelectorAll(
          "#comparePaths .tax-details-each-bars span"
        );
        var sub_array = [];
        for (let i = 1; i <= allBar3.length; i++) {
          if (document.getElementById("compare_wider_bar_" + i)) {
            var barValueGets = +document
              .getElementById("compare_wider_bar_" + i)
              .innerText.replace(regex, "");
            sub_array.push(barValueGets);
            if (i == allBar3.length) {
              preTotalTaxes = barValueGets;
            }
          }
        }
        var largestSec = 0;
        var largestSec = Math.max.apply(0, sub_array);

        this.currentCompareBarIdx += 1;

        if (
          !this.inputs.social_security_amount &&
          this.currentCompareBarIdx === 4
        ) {
          this.currentCompareBarIdx += 1;
        }

        let allBarRow = document.querySelectorAll(".compareLeftPart");
        if (this.currentCompareBarIdx == allBarRow.length) {
          let showNextBtn = document.querySelector(".show-next-btn");
          showNextBtn.classList.add("disabled");
        }
        var barValueGet = +document
          .getElementById("compare_wider_bar_" + this.currentCompareBarIdx)
          .innerText.replace(regex, "");
        var barActualValue = largestSec;
        let finalResult = (barValueGet / barActualValue) * 100;
        finalResult > 100 ? (finalResult = 100) : finalResult;
        let eachBar = document
          .getElementById("compare_wider_bar_" + this.currentCompareBarIdx)
          .closest(".tax-details-each-bars");

        eachBar.style.width = finalResult + "%";
        let roth_conversion_taxes = this.roth_backend.roth_conversion_taxes;

        document
          .getElementById("compare_wider_bar_" + this.currentCompareBarIdx)
          .closest(".amount-label-wrapper").style.opacity = 1;
        var eachCompareMaindDiv = document.getElementById(
          "compare_each_progressbar_" + this.currentCompareBarIdx
        );

        for (var k = 1; k <= 2; k++) {
          var barValueGet = +eachCompareMaindDiv
            .querySelector(".compare_wider_bar_" + k)
            .innerText.replace(regex, "");
          let finalResult = (barValueGet / barActualValue) * 100;
          finalResult > 100 ? (finalResult = 100) : finalResult;
          let eachBar = eachCompareMaindDiv
            .querySelector(".compare_wider_bar_" + k)
            .closest(".tax-details-each-bars");
          eachBar.style.width = finalResult + "%";
          eachBar.querySelector("label.amount-label-wrapper").style.opacity = 1;

          if (finalResult < 1 || !finalResult) {
            eachBar.style.padding = "8px 2px";
            eachBar.classList.remove("text-white");
          } else {
            eachBar.style.padding = "8px 2px";
            eachBar.classList.add("text-white");
          }

          setTimeout(() => {
            for (var j = 1; j <= 2; j++) {
              let textDiv = document
                .getElementById(
                  "compare_each_progressbar_" + this.currentCompareBarIdx
                )
                .querySelector(".compare_wider_bar_" + j);
              let textWidth = 0;
              if (textDiv) {
                textWidth = textDiv.offsetWidth + 20;
              }

              let barWidth = document
                .getElementById(
                  "compare_each_progressbar_" + this.currentCompareBarIdx
                )
                .querySelector(".compare_wider_bar_" + j)
                .closest(".tax-details-each-bars").offsetWidth;

              if (barWidth < textWidth) {
                document
                  .getElementById(
                    "compare_each_progressbar_" + this.currentCompareBarIdx
                  )
                  .querySelector(".compare_wider_bar_" + j)
                  .closest(".tax-details-each-bars")
                  .classList.remove("text-white");

                if (
                  document
                    .getElementById(
                      "compare_each_progressbar_" + this.currentCompareBarIdx
                    )
                    .querySelector(".compare_wider_bar_" + j)
                    .closest(".compareLeftPart")
                ) {
                  document
                    .getElementById(
                      "compare_each_progressbar_" + this.currentCompareBarIdx
                    )
                    .querySelector(".compare_wider_bar_" + j)
                    .closest(".tax-details-each-bars")
                    .querySelector(
                      ".amount-label-wrapper"
                    ).style.paddingRight = `${barWidth + 6}px`;
                } else {
                  document
                    .getElementById(
                      "compare_each_progressbar_" + this.currentCompareBarIdx
                    )
                    .querySelector(".compare_wider_bar_" + j)
                    .closest(".tax-details-each-bars")
                    .querySelector(
                      ".amount-label-wrapper"
                    ).style.paddingLeft = `${barWidth + 6}px`;
                }
              }
            }
          }, 350);
        }
      } else {
        let allBar2 = document.querySelectorAll(
          "#rothTaxDetails .each-tax-details-bar span"
        );
        var sub_array = [];
        var sub_array2 = [];
        let roth_conversion_taxes = this.roth_backend.roth_conversion_taxes;
        let total_taxes = this.roth_backend.total_taxes;

        for (let i = 1; i <= this.noOfPreBars; i++) {
          if (document.getElementById("wider_bar_" + i)) {
            var barValueGets = +document
              .getElementById("wider_bar_" + i)
              .innerText.replace(regex, "");
            sub_array.push(barValueGets);
            if (i == this.noOfPreBars) {
              preTotalTaxes = barValueGets;
            }
          }
        }

        for (let i = 1; i <= allBar2.length; i++) {
          if (document.getElementById("roth_wider_bar_" + i)) {
            var barValueGets = +document
              .getElementById("roth_wider_bar_" + i)
              .innerText.replace(regex, "");
            sub_array2.push(barValueGets);
          }
        }

        if (this.currentConversionBarIdx < allBar2.length) {
          this.currentConversionBarIdx += 1;
          if (
            !this.inputs.social_security_amount &&
            this.currentConversionBarIdx === 4
          ) {
            this.currentConversionBarIdx += 1;
          }
        }

        if (this.currentConversionBarIdx == allBar2.length) {
          let showNextBtn = document.querySelector(".show-next-btn");
          showNextBtn.classList.add("disabled");
        }

        var barValueGet = +document
          .getElementById("roth_wider_bar_" + this.currentConversionBarIdx)
          .innerText.replace(regex, "");

        if (
          this.currentConversionBarIdx == allBar2.length - 1 &&
          this.showBonus
        ) {
          let tempVal = barValueGet;
          barValueGet = roth_conversion_taxes;
          var darkBar = document
            .getElementById("roth_wider_bar_" + this.currentConversionBarIdx)
            .closest(".tax-details-each-bars")
            .querySelector(".dark-bar");
          if (darkBar) {
            darkBar.style.width = (tempVal / barValueGet) * 100 + "%";
          }
        }

        if (this.currentConversionBarIdx == allBar2.length && this.showBonus) {
          let tempVal = barValueGet;
          barValueGet = total_taxes;
          var darkBar = document
            .getElementById("roth_wider_bar_" + this.currentConversionBarIdx)
            .closest(".tax-details-each-bars")
            .querySelector(".dark-bar");
          if (darkBar) {
            darkBar.style.width = (tempVal / barValueGet) * 100 + "%";
          }
        }

        let finalResult = (barValueGet / preTotalTaxes) * 100;
        finalResult > 100 ? (finalResult = 100) : finalResult;

        let eachBar = document
          .getElementById("roth_wider_bar_" + this.currentConversionBarIdx)
          .closest(".tax-details-each-bars");

        eachBar.style.width = finalResult + "%";
        document
          .getElementById("roth_wider_bar_" + this.currentConversionBarIdx)
          .closest(".amount-label-wrapper").style.opacity = 1;

        if (finalResult < 1 || !finalResult) {
          eachBar.style.padding = "8px 2px";
          eachBar.classList.remove("text-white");
        } else {
          eachBar.classList.add("text-white");
          eachBar.style.padding = "8px 2px";
        }

        setTimeout(() => {
          let textDiv = document.getElementById(
            "roth_wider_bar_" + this.currentConversionBarIdx
          );
          let textWidth = 0;
          if (textDiv) {
            textWidth = textDiv.offsetWidth + 20;
          }

          let barWidth = document
            .getElementById("roth_wider_bar_" + this.currentConversionBarIdx)
            .closest(".tax-details-each-bars").offsetWidth;

          if (barWidth > 6 && barWidth < textWidth) {
            document
              .getElementById("roth_wider_bar_" + this.currentConversionBarIdx)
              .closest(".amount-label-wrapper").style.paddingLeft = `${
              barWidth + 6
            }px`;
            eachBar.classList.remove("text-white");
          }
        }, 400);
      }
    },
    initialBarWidths() {
      this.isSeeAllActive = false;
      const regex = /[, \u202f]/g;
      this.currentPreTaxBarIdx = 0;
      this.currentCompareBarIdx = 0;
      this.currentConversionBarIdx = 0;

      let showNextBtn = document.querySelector(".show-next-btn");

      // Pre-Tax Analysis
      let allBar = document.querySelectorAll(
        "#iraTaxDetailsTab .each-tax-details-bar span"
      );
      for (let i = 1; i <= allBar.length; i++) {
        let currentWideBar = document.getElementById("wider_bar_" + i);
        if (currentWideBar) {
          currentWideBar.closest(".tax-details-each-bars").style.width =
            0 + "%";
          currentWideBar.closest(".tax-details-each-bars").style.padding =
            "8px 2px";
          currentWideBar.closest(".amount-label-wrapper").style.opacity = 0;
        }
      }
      // Compare Path
      let allBar3 = document.querySelectorAll(
        "#comparePaths .tax-details-each-bars span"
      );
      for (let i = 1; i <= allBar3.length; i++) {
        let currentCompareBar = document.getElementById(
          "compare_wider_bar_" + i
        );
        if (currentCompareBar) {
          currentCompareBar.closest(".tax-details-each-bars").style.width =
            0 + "%";
          currentCompareBar.closest(".tax-details-each-bars").style.padding =
            "8px 2px";
          currentCompareBar.closest(".amount-label-wrapper").style.opacity = 0;
        }
      }
      // Conversion Analysis
      let allBar2 = document.querySelectorAll(
        "#rothTaxDetails .each-tax-details-bar span"
      );
      for (let i = 1; i <= allBar2.length; i++) {
        let currentRothBar = document.getElementById("roth_wider_bar_" + i);
        if (currentRothBar) {
          currentRothBar.closest(".tax-details-each-bars").style.width =
            0 + "%";
          currentRothBar.closest(".tax-details-each-bars").style.padding =
            "8px 2px";
          currentRothBar.closest(".amount-label-wrapper").style.opacity = 0;
        }
      }

      showNextBtn.classList.remove("disabled");
    },
    updateBarWidths() {
      this.isSeeAllActive = true;
      this.isIndividual = false;
      const regex = /[, \u202f]/g;

      let showNextBtn = document.querySelector(".show-next-btn");
      this.currentPreTaxBarIdx = this.noOfPreBars;
      this.currentConversionBarIdx = this.noOfConversionBars;

      let roth_conversion_taxes = this.roth_backend.roth_conversion_taxes;
      let total_taxes = this.roth_backend.total_taxes;

      // Pre-Tax Analysis
      let allBar = document.querySelectorAll(
        "#iraTaxDetailsTab .each-tax-details-bar span"
      );
      var preTotalTaxes = 0;
      var sub_array = [];
      for (let i = 1; i <= allBar.length; i++) {
        if (document.getElementById("wider_bar_" + i)) {
          var barValueGets = +document
            .getElementById("wider_bar_" + i)
            .innerText.replace(regex, "");
          sub_array.push(barValueGets);
          if (i == allBar.length) {
            preTotalTaxes = barValueGets;
          }
        }
      }
      var largestSec = 0;
      var largestSec = Math.max.apply(0, sub_array);
      for (let i = 1; i <= allBar.length; i++) {
        let currentWideBar = document.getElementById("wider_bar_" + i);
        if (currentWideBar) {
          var barValueGet = +currentWideBar.innerText.replace(regex, "");
          var barActualValue = largestSec;
          let finalResult = (barValueGet / barActualValue) * 100;
          finalResult > 100 ? (finalResult = 100) : finalResult;

          let eachBar = currentWideBar.closest(".tax-details-each-bars");

          eachBar.style.width = finalResult + "%";
          currentWideBar.closest(".amount-label-wrapper").style.opacity = 1;

          if (finalResult < 1 || !finalResult) {
            eachBar.style.padding = "8px 2px";
            eachBar.classList.remove("text-white");
          } else {
            eachBar.style.padding = "8px 2px";
            eachBar.classList.add("text-white");
          }

          setTimeout(() => {
            let textDiv = currentWideBar;
            let textWidth = 0;
            if (textDiv) {
              textWidth = textDiv.offsetWidth + 20;
            }
            let barWidth = eachBar.offsetWidth;
            if (barWidth > 6 && barWidth < textWidth) {
              currentWideBar
                .closest(".tax-details-each-bars")
                .querySelector(".amount-label-wrapper").style.paddingLeft = `${
                barWidth + 6
              }px`;
              eachBar.classList.remove("text-white");
            }
          }, 400);
        }
      }

      // Compare Path
      let allBar3 = document.querySelectorAll(
        "#comparePaths .tax-details-each-bars span"
      );
      var compareTotalTaxes = 0;
      var sub_array = [];
      for (let i = 1; i <= allBar3.length; i++) {
        if (document.getElementById("compare_wider_bar_" + i)) {
          var barValueGets = +document
            .getElementById("compare_wider_bar_" + i)
            .innerText.replace(regex, "");
          sub_array.push(barValueGets);
          if (i == allBar3.length) {
            compareTotalTaxes = barValueGets;
          }
        }
      }
      var largestSec = 0;
      largestSec = Math.max.apply(0, sub_array);
      for (let i = 1; i <= allBar3.length; i++) {
        let currentCompareBar = document.getElementById(
          "compare_wider_bar_" + i
        );
        if (currentCompareBar) {
          var barValueGet = +currentCompareBar.innerText.replace(regex, "");
          var barActualValue = largestSec;
          let finalResult = (barValueGet / barActualValue) * 100;
          finalResult > 100 ? (finalResult = 100) : finalResult;

          let eachBar = currentCompareBar.closest(".tax-details-each-bars");
          eachBar.style.width = finalResult + "%";

          if (i == allBar3.length - 2 && this.showBonus) {
            let tempVal = roth_conversion_taxes;
            barValueGet = this.ira_backend.total_taxes;
            var mainBar = currentCompareBar;
            finalResult = (tempVal / barValueGet) * 100;
            finalResult > 100 ? (finalResult = 100) : finalResult;
            var mainBar = currentCompareBar
              .closest(".eachProgressBarDiv")
              .querySelector(".compareRightPart")
              .querySelector(".tax-details-each-bars");
            if (mainBar) {
              mainBar.style.width = finalResult + "%";
            }
          }

          if (i == allBar3.length && this.showBonus) {
            let tempVal = roth_conversion_taxes;
            barValueGet = this.ira_backend.total_taxes;
            finalResult = (tempVal / barValueGet) * 100;
            finalResult > 100 ? (finalResult = 100) : finalResult;
            var mainBar = currentCompareBar
              .closest(".eachProgressBarDiv")
              .querySelector(".compareRightPart")
              .querySelector(".tax-details-each-bars");
            if (mainBar) {
              mainBar.style.width = finalResult + "%";
            }
          }

          currentCompareBar.closest(".amount-label-wrapper").style.opacity = 1;

          if (finalResult < 1 || !finalResult) {
            eachBar.style.padding = "8px 2px";
            eachBar.classList.remove("text-white");
          } else {
            eachBar.style.padding = "8px 2px";
            eachBar.classList.add("text-white");
          }

          setTimeout(() => {
            let textDiv = currentCompareBar;
            let textWidth = 0;
            if (textDiv) {
              textWidth = textDiv.offsetWidth + 20;
            }
            let barWidth = eachBar.offsetWidth;
            if (barWidth < textWidth) {
              document
                .getElementById("compare_wider_bar_" + i)
                .closest(".tax-details-each-bars")
                .classList.remove("text-white");
              if (
                document
                  .getElementById("compare_wider_bar_" + i)
                  .closest(".compareLeftPart")
              ) {
                document
                  .getElementById("compare_wider_bar_" + i)
                  .closest(".tax-details-each-bars")
                  .querySelector(
                    ".amount-label-wrapper"
                  ).style.paddingRight = `${barWidth}px`;
              } else {
                document
                  .getElementById("compare_wider_bar_" + i)
                  .closest(".tax-details-each-bars")
                  .querySelector(
                    ".amount-label-wrapper"
                  ).style.paddingLeft = `${barWidth + 6}px`;
              }
            }else{
              document.getElementById("compare_wider_bar_" + i).closest(".tax-details-each-bars")
                .classList.add("text-white");
              if (document.getElementById("compare_wider_bar_" + i).closest(".compareLeftPart")) {
                document.getElementById("compare_wider_bar_" + i).closest(".tax-details-each-bars")
                  .querySelector(".amount-label-wrapper").style.paddingRight = `0px`;
              } else {
                document.getElementById("compare_wider_bar_" + i).closest(".tax-details-each-bars")
                  .querySelector(".amount-label-wrapper").style.paddingLeft = `6px`;
              }
            }
          }, 400);
        }
      }
      // Conversion Analysis
      let allBar2 = document.querySelectorAll(
        "#rothTaxDetails .each-tax-details-bar span"
      );
      var sub_array2 = [];
      for (let i = 1; i <= allBar2.length; i++) {
        if (document.getElementById("roth_wider_bar_" + i)) {
          var barValueGets = +document
            .getElementById("roth_wider_bar_" + i)
            .innerText.replace(regex, "");
          sub_array2.push(barValueGets);
        }
      }

      for (let i = 1; i <= allBar2.length; i++) {
        let currentRothBar = document.getElementById("roth_wider_bar_" + i);
        if (currentRothBar) {
          var barValueGet = +currentRothBar.innerText.replace(regex, "");

          if (i == allBar2.length - 1 && this.showBonus) {
            let tempVal = barValueGet;
            barValueGet = roth_conversion_taxes;
            var darkBar = currentRothBar
              .closest(".tax-details-each-bars")
              .querySelector(".dark-bar");
            if (darkBar) {
              darkBar.style.width = (tempVal / barValueGet) * 100 + "%";
            }
          }

          if (i == allBar2.length && this.showBonus) {
            let tempVal = barValueGet;
            barValueGet = total_taxes;
            var darkBar = currentRothBar
              .closest(".tax-details-each-bars")
              .querySelector(".dark-bar");
            if (darkBar) {
              darkBar.style.width = (tempVal / barValueGet) * 100 + "%";
            }
          }

          let finalResult = (barValueGet / preTotalTaxes) * 100;
          finalResult > 100 ? (finalResult = 100) : finalResult;

          let eachBar = currentRothBar.closest(".tax-details-each-bars");
          eachBar.style.width = finalResult + "%";
          currentRothBar.closest(".amount-label-wrapper").style.opacity = 1;

          if (finalResult < 1 || !finalResult) {
            eachBar.style.padding = "8px 2px";
            eachBar.classList.remove("text-white");
          } else {
            eachBar.classList.add("text-white");
            eachBar.style.padding = "8px 2px";
          }

          setTimeout(() => {
            let textDiv = currentRothBar;
            let textWidth = 0;
            if (textDiv) {
              textWidth = textDiv.offsetWidth + 20;
            }

            let barWidth = eachBar.offsetWidth;

            if (barWidth > 6 && barWidth < textWidth) {
              currentRothBar
                .closest(".tax-details-each-bars")
                .querySelector(".amount-label-wrapper").style.paddingLeft = `${
                barWidth + 6
              }px`;
              eachBar.classList.remove("text-white");
            }
          }, 400);
        }
      }
      showNextBtn.classList.add("disabled");
    },
  },
};
</script>
