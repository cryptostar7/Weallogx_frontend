<template lang="">
  <div
    class="tab-pane fade active show"
    id="v-pills-table"
    role="tabpanel"
    aria-labelledby="pills-home-tab"
  >
    <div
      :class="`nav market_buffer_account_tab table_top_tab nav-pills ${
        tableIndexType === 'Historical Returns' ? '' : 'pe-none'
      }`"
      role="tablist"
      aria-orientation="vertical"
    >
      <div
        data-bs-toggle="pill"
        data-bs-target="#v-pills-market"
        type="button"
        role="tab"
        aria-controls="v-pills-market"
        aria-selected="true"
        :class="aloneAccountTable ? 'active' : ''"
        @click="aloneAccountTable = true"
      >
        Market Account Alone
      </div>
      <div
        data-bs-toggle="pill"
        data-bs-target="#v-pills-buffer"
        type="button"
        role="tab"
        aria-controls="v-pills-buffer"
        aria-selected="false"
        :class="aloneAccountTable ? '' : 'active'"
        @click="aloneAccountTable = false"
      >
        Market + Buffer Account
      </div>
    </div>
    <div
      :class="`table_graph_tab_main table_tab_main ${
        aloneAccountTable ? 'disable' : ''
      }`"
    >
      <slider-weight-range sliderType="result" />
      <div class="container-fluid mt-5">
        <div class="row">
          <div class="w-21 px-1 h-100">
            <div
              :class="`filter_buttons table_filter_btns ${
                tableIndexType === 'Historical Returns' ? '' : 'disable'
              }`"
            >
              <button title="Reverse Order">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Group 2120">
                    <g id="Group 2100">
                      <g id="Group 2098">
                        <g id="Group 2097">
                          <path
                            id="Polygon 1"
                            d="M15.4241 19.3349C15.2277 19.6442 14.7763 19.6442 14.5799 19.3349L11.1597 13.9495C10.9483 13.6166 11.1874 13.1815 11.5818 13.1815H18.4222C18.8166 13.1815 19.0557 13.6166 18.8443 13.9495L15.4241 19.3349Z"
                            fill="#5E6A72"
                          />
                          <rect
                            id="Rectangle 1658"
                            x="16.877"
                            y="14.5449"
                            width="3.74997"
                            height="14.5452"
                            rx="0.5"
                            transform="rotate(-180 16.877 14.5449)"
                            fill="#5E6A72"
                          />
                        </g>
                      </g>
                      <g id="Group 2099">
                        <g id="Group 2097_2">
                          <path
                            id="Polygon 1_2"
                            d="M4.57789 0.664584C4.7743 0.355326 5.22563 0.355326 5.42204 0.664584L8.84227 6.04998C9.05368 6.38287 8.81454 6.81804 8.4202 6.81804L1.57973 6.81804C1.18539 6.81804 0.946244 6.38287 1.15766 6.04998L4.57789 0.664584Z"
                            fill="#36454F"
                          />
                          <rect
                            id="Rectangle 1658_2"
                            x="3.125"
                            y="5.45435"
                            width="3.74997"
                            height="14.5452"
                            rx="0.5"
                            fill="#36454F"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
              <button
                title="Sort Largest value to smallest value (based on SP 500 column)"
              >
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Group 2119">
                    <g id="Group 2101">
                      <rect
                        id="Rectangle 1659"
                        x="0.201172"
                        width="20.16"
                        height="2.85714"
                        rx="0.5"
                        fill="#36454F"
                      />
                      <rect
                        id="Rectangle 1660"
                        x="0.201172"
                        y="5.71448"
                        width="16.128"
                        height="2.85714"
                        rx="0.5"
                        fill="#5E6A72"
                      />
                      <rect
                        id="Rectangle 1661"
                        x="0.201172"
                        y="11.4287"
                        width="12.096"
                        height="2.85714"
                        rx="0.5"
                        fill="#868F95"
                      />
                      <rect
                        id="Rectangle 1662"
                        x="0.201172"
                        y="17.1431"
                        width="8.064"
                        height="2.85714"
                        rx="0.5"
                        fill="#9AA2A7"
                      />
                    </g>
                  </g>
                </svg>
              </button>
              <button
                title="Sort smallest value to largest value (based on SP 500 column)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <rect
                    width="20.1562"
                    height="2.85714"
                    rx="0.5"
                    transform="matrix(1 0 0 -1 0 20)"
                    fill="#36454F"
                  />
                  <rect
                    width="16.125"
                    height="2.85714"
                    rx="0.5"
                    transform="matrix(1 0 0 -1 0 14.2856)"
                    fill="#5E6A72"
                  />
                  <rect
                    width="12.0938"
                    height="2.85714"
                    rx="0.5"
                    transform="matrix(1 0 0 -1 0 8.57141)"
                    fill="#868F95"
                  />
                  <rect
                    width="8.0625"
                    height="2.85714"
                    rx="0.5"
                    transform="matrix(1 0 0 -1 0 2.85706)"
                    fill="#9AA2A7"
                  />
                </svg>
              </button>
              <button title="Randomize">
                <svg
                  width="28"
                  height="20"
                  viewBox="0 0 28 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_57_8074)">
                    <path
                      d="M26.7026 3.54725L21.0661 0.0459597C21.0304 0.0237219 20.9927 0.00704351 20.9527 -0.00466061C20.9128 -0.0160722 20.8724 -0.0219242 20.8311 -0.0222168C20.7898 -0.0222168 20.7491 -0.0166573 20.7092 -0.00553843C20.6693 0.0058731 20.6313 0.0225514 20.5955 0.0444967C20.5597 0.0664419 20.527 0.0927762 20.4978 0.123792C20.4686 0.155101 20.4436 0.189628 20.4229 0.227666C20.4023 0.265705 20.3866 0.306084 20.3759 0.348511C20.3651 0.390939 20.3599 0.434244 20.3599 0.478427V1.9789H18.6791C18.3711 1.97831 18.0639 1.99821 17.7582 2.038C17.4521 2.07809 17.1496 2.13778 16.8507 2.21737C16.5518 2.29725 16.2584 2.39615 15.9711 2.51407C15.6835 2.63228 15.4038 2.76892 15.1322 2.92371C14.8605 3.0785 14.5988 3.25055 14.347 3.43986C14.0951 3.62888 13.8551 3.834 13.6272 4.05462C13.3991 4.27554 13.1847 4.5102 12.9837 4.75921C12.7828 5.00792 12.597 5.26922 12.4264 5.54251L8.25778 12.2007C8.17246 12.3373 8.0797 12.4678 7.97924 12.5922C7.87879 12.7165 7.77145 12.8342 7.6575 12.9445C7.54356 13.0548 7.42356 13.1572 7.2975 13.2517C7.17172 13.3465 7.04071 13.4325 6.90502 13.5098C6.76906 13.5873 6.62924 13.6555 6.48557 13.7146C6.3419 13.7737 6.1952 13.8232 6.04575 13.863C5.89631 13.9028 5.74493 13.9329 5.5919 13.9528C5.43915 13.9727 5.28557 13.9826 5.13144 13.9823H1.10235C1.07153 13.9823 1.04098 13.9856 1.0107 13.992C0.980428 13.9984 0.951253 14.0081 0.922629 14.0207C0.894281 14.033 0.867033 14.0485 0.841437 14.0666C0.81584 14.0851 0.792171 14.1058 0.770152 14.1289C0.748409 14.1521 0.729143 14.1775 0.711803 14.2047C0.694739 14.2319 0.680152 14.2609 0.668592 14.2913C0.656757 14.3215 0.647675 14.3528 0.64162 14.385C0.63584 14.4172 0.632812 14.4499 0.632812 14.4827V17.4836C0.632812 17.5164 0.63584 17.5489 0.64162 17.5811C0.647675 17.6133 0.656757 17.6446 0.668592 17.675C0.680152 17.7054 0.694739 17.7341 0.711803 17.7613C0.729143 17.7888 0.748409 17.814 0.770152 17.8371C0.792171 17.8605 0.81584 17.8813 0.841437 17.8994C0.867033 17.9176 0.894281 17.9331 0.922629 17.9457C0.951253 17.9582 0.980428 17.9676 1.0107 17.974C1.04098 17.9805 1.07153 17.9837 1.10235 17.9837H5.13144C5.4397 17.984 5.74658 17.9644 6.05264 17.9243C6.35842 17.8845 6.66089 17.8245 6.95979 17.7449C7.25897 17.6653 7.55209 17.5664 7.8397 17.4482C8.12704 17.3303 8.40668 17.1937 8.6786 17.0389C8.95025 16.8841 9.212 16.712 9.46383 16.5227C9.71567 16.3334 9.95539 16.1286 10.1836 15.9077C10.4117 15.6871 10.6261 15.4521 10.827 15.2034C11.028 14.9544 11.2137 14.6934 11.3844 14.4201L15.5527 7.7619C15.6381 7.62526 15.7311 7.49476 15.8315 7.37011C15.932 7.24575 16.0391 7.12842 16.1533 7.01811C16.2672 6.90779 16.3872 6.80538 16.513 6.71058C16.6391 6.61607 16.7698 6.53004 16.9058 6.4525C17.0417 6.37526 17.1813 6.30679 17.3252 6.24797C17.4689 6.18887 17.6156 6.13942 17.765 6.09933C17.9145 6.05954 18.0656 6.02969 18.2186 6.0098C18.3716 5.9899 18.5252 5.97995 18.6791 5.97995H20.3599V7.48042C20.3599 7.5246 20.3651 7.56761 20.3759 7.61033C20.3866 7.65276 20.4023 7.69314 20.4229 7.73118C20.4436 7.76922 20.4686 7.80374 20.4978 7.83476C20.527 7.86607 20.5597 7.8924 20.5955 7.91435C20.6313 7.93629 20.6693 7.95297 20.7092 7.96409C20.7491 7.9755 20.7898 7.98106 20.8311 7.98077C20.8724 7.98077 20.9128 7.97492 20.9527 7.96321C20.9927 7.9518 21.0304 7.93483 21.0661 7.91289L26.7026 4.4116C26.7202 4.40077 26.737 4.38848 26.7532 4.37531C26.7695 4.36185 26.7846 4.34752 26.7992 4.33201C26.8135 4.3165 26.827 4.30012 26.8394 4.28285C26.8517 4.26559 26.863 4.24745 26.8732 4.22872C26.8834 4.2097 26.8922 4.1901 26.9002 4.1702C26.9079 4.15001 26.9145 4.12953 26.9197 4.10846C26.925 4.08739 26.9288 4.06603 26.9316 4.04438C26.9343 4.02273 26.9354 4.00107 26.9354 3.97942C26.9354 3.95748 26.9343 3.93582 26.9316 3.91446C26.9288 3.89281 26.925 3.87145 26.9197 3.85038C26.9145 3.82932 26.9079 3.80883 26.9002 3.78865C26.8922 3.76846 26.8834 3.74914 26.8732 3.73012C26.863 3.7114 26.8517 3.69326 26.8394 3.67599C26.827 3.65844 26.8135 3.64205 26.7992 3.62684C26.7846 3.61133 26.7695 3.59699 26.7532 3.58353C26.737 3.57036 26.7202 3.55807 26.7026 3.54725Z"
                      fill="#5E6A72"
                    />
                    <path
                      d="M1.10235 5.97994H5.13227C5.2864 5.97994 5.43997 5.99018 5.593 6.01037C5.74603 6.03056 5.89713 6.0604 6.04658 6.10049C6.19603 6.14029 6.34273 6.19003 6.4864 6.24913C6.63034 6.30824 6.77016 6.37642 6.90585 6.45396C7.04181 6.5315 7.17254 6.61752 7.2986 6.71203C7.42466 6.80654 7.54466 6.90895 7.6586 7.01926C7.77282 7.12958 7.88016 7.24691 7.98062 7.37156C8.08108 7.49591 8.17411 7.62612 8.2597 7.76277L9.08319 9.0789L11.3398 5.47461C11.1683 5.2063 10.982 4.94998 10.7814 4.70565C10.5804 4.46133 10.3666 4.23105 10.1392 4.01452C9.91218 3.798 9.67356 3.59698 9.42337 3.41176C9.17319 3.22625 8.91337 3.05742 8.64392 2.90585C8.37447 2.75399 8.09732 2.62027 7.81245 2.5044C7.52759 2.38853 7.23722 2.29168 6.94135 2.21355C6.64548 2.13543 6.34631 2.07661 6.04355 2.03741C5.74108 1.9982 5.43722 1.97859 5.13227 1.97889H1.10235C1.07153 1.97889 1.04098 1.9821 1.0107 1.98825C0.980428 1.99469 0.951253 2.00434 0.922629 2.01692C0.894281 2.02951 0.867033 2.04472 0.841437 2.06315C0.81584 2.0813 0.792171 2.10207 0.770152 2.12519C0.748409 2.14859 0.729143 2.17376 0.711803 2.20097C0.694739 2.22848 0.680152 2.25715 0.668592 2.28758C0.656758 2.31772 0.647675 2.34903 0.64162 2.38121C0.63584 2.41369 0.632812 2.44617 0.632812 2.47894V5.47988C0.632812 5.51265 0.63584 5.54513 0.64162 5.57732C0.647675 5.6095 0.656758 5.64081 0.668592 5.67124C0.680152 5.70167 0.694739 5.73035 0.711803 5.75785C0.729143 5.78507 0.748409 5.81023 0.770152 5.83364C0.792171 5.85675 0.81584 5.87753 0.841437 5.89567C0.867033 5.91381 0.894281 5.92932 0.922629 5.9419C0.951253 5.95448 0.980428 5.96385 1.0107 5.97028C1.04098 5.97672 1.07153 5.97994 1.10235 5.97994Z"
                      fill="#36454F"
                    />
                    <path
                      d="M26.7023 15.5507L21.0659 12.0497C21.0301 12.0275 20.9924 12.0108 20.9525 11.9991C20.9125 11.9877 20.8721 11.9818 20.8308 11.9815C20.7895 11.9815 20.7488 11.9871 20.7089 11.9982C20.669 12.0096 20.631 12.0263 20.5952 12.0482C20.5594 12.0699 20.5267 12.0965 20.4975 12.1275C20.4683 12.1585 20.4433 12.1934 20.4226 12.2314C20.402 12.2694 20.3863 12.3098 20.3756 12.3522C20.3648 12.3947 20.3596 12.438 20.3596 12.4819V13.9823H18.678C18.5238 13.9823 18.3703 13.9724 18.2175 13.9522C18.0645 13.932 17.9134 13.9019 17.7639 13.8621C17.6142 13.822 17.4678 13.7725 17.3238 13.7134C17.1802 13.6543 17.0403 13.5859 16.9044 13.5086C16.7687 13.4311 16.6377 13.345 16.5119 13.2505C16.3858 13.1557 16.2658 13.0533 16.1516 12.943C16.0377 12.8327 15.9303 12.7154 15.8299 12.591C15.7291 12.4666 15.6361 12.3361 15.5508 12.1998L14.727 10.8837L12.4707 14.4877C12.6422 14.756 12.8282 15.0123 13.0291 15.2566C13.2298 15.5009 13.4439 15.7312 13.671 15.9477C13.898 16.1643 14.1369 16.3653 14.3871 16.5508C14.6373 16.7363 14.8971 16.9049 15.1666 17.0567C15.436 17.2086 15.7132 17.3423 15.998 17.4582C16.2826 17.5737 16.573 17.6709 16.8689 17.749C17.165 17.8271 17.4642 17.8857 17.7667 17.9252C18.0694 17.9644 18.3733 17.984 18.678 17.9837H20.3596V19.4841C20.3596 19.528 20.3648 19.5713 20.3756 19.6138C20.3863 19.6562 20.402 19.6966 20.4229 19.7346C20.4436 19.7727 20.4686 19.8072 20.4978 19.8382C20.527 19.8692 20.5594 19.8958 20.5952 19.9178C20.6313 19.9397 20.669 19.9564 20.7089 19.9675C20.7488 19.9789 20.7895 19.9845 20.8308 19.9842C20.8721 19.9842 20.9125 19.9784 20.9525 19.9669C20.9924 19.9552 21.0301 19.9386 21.0659 19.9163L26.7023 16.4153C26.7199 16.4045 26.7367 16.3922 26.7529 16.3788C26.7692 16.3656 26.7843 16.3512 26.7989 16.3357C26.8132 16.3202 26.8267 16.3038 26.8391 16.2866C26.8515 16.2693 26.8627 16.2512 26.8729 16.2322C26.8831 16.2134 26.8919 16.1938 26.8999 16.1736C26.9076 16.1537 26.9142 16.133 26.9194 16.1119C26.9247 16.0911 26.9285 16.0698 26.9313 16.0481C26.934 16.0265 26.9351 16.0048 26.9351 15.9832C26.9351 15.9612 26.934 15.9396 26.9313 15.9179C26.9285 15.8965 26.9247 15.8752 26.9194 15.8541C26.9142 15.833 26.9076 15.8126 26.8999 15.7924C26.8919 15.7722 26.8831 15.7529 26.8729 15.7339C26.8627 15.7148 26.8515 15.697 26.8391 15.6794C26.8267 15.6622 26.8132 15.6458 26.7989 15.6303C26.7843 15.6151 26.7692 15.6007 26.7529 15.5873C26.7367 15.5738 26.7199 15.5618 26.7023 15.5507Z"
                      fill="#36454F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_57_8074">
                      <rect
                        width="26.4221"
                        height="20"
                        fill="white"
                        transform="translate(0.599609)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button title="Reset">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_57_8092)">
                    <mask
                      id="mask0_57_8092"
                      style="mask-type: luminance"
                      maskUnits="userSpaceOnUse"
                      x="6"
                      y="16"
                      width="4"
                      height="4"
                    >
                      <path
                        d="M6.34766 16.7993C6.34766 16.5232 6.57151 16.2993 6.84766 16.2993H9.2373C9.51344 16.2993 9.7373 16.5232 9.7373 16.7993V19.4789C9.7373 19.7551 9.51344 19.9789 9.2373 19.9789H6.84766C6.57151 19.9789 6.34766 19.7551 6.34766 19.4789V16.7993Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_57_8092)">
                      <path
                        d="M6.63009 18.5758C6.49567 18.823 6.59107 19.1337 6.84841 19.2474C7.58609 19.5733 8.36955 19.8032 9.18646 19.9203C9.47555 19.9617 9.72511 19.7306 9.72511 19.4385V17.3052C9.72511 17.0518 9.53502 16.8405 9.2855 16.7961C8.93856 16.7343 8.60037 16.6474 8.27492 16.53C8.02633 16.4403 7.74179 16.5318 7.61552 16.764L6.63009 18.5758Z"
                        fill="#AEB4B8"
                      />
                    </g>
                    <mask
                      id="mask1_57_8092"
                      style="mask-type: luminance"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="20"
                      height="12"
                    >
                      <path
                        d="M0.304688 0H19.8432V11.7533H0.304688V0Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask1_57_8092)">
                      <path
                        d="M16.8386 8.79118C16.8809 9.04346 17.0936 9.23727 17.3494 9.23727H19.2981C19.5884 9.23727 19.8187 8.99037 19.7832 8.70224C19.1791 3.79692 15.2278 -0.00476074 10.4498 -0.00476074C7.68709 -0.00476074 5.08183 1.29838 3.3108 3.48115C3.14711 3.68289 2.85948 3.74016 2.6381 3.60421L1.08127 2.64818C0.748236 2.44367 0.319856 2.68314 0.319622 3.07396L0.314988 10.8111C0.314754 11.2019 0.742893 11.4419 1.07617 11.2377L7.38449 7.37337C7.70262 7.17849 7.70299 6.71645 7.38517 6.52106L6.07742 5.71709C5.81723 5.55714 5.75926 5.20211 5.97471 4.98563C7.17017 3.78444 8.76454 3.07584 10.4498 3.07584C13.6536 3.07584 16.2954 5.55061 16.8386 8.79118Z"
                        fill="#36454F"
                      />
                    </g>
                    <path
                      d="M5.50073 14.4842C5.33509 14.2777 5.04211 14.2148 4.81639 14.3532L3.11816 15.3944C2.87878 15.5412 2.80618 15.8571 2.97044 16.0848C3.46336 16.7682 4.03728 17.382 4.67632 17.9112C4.90957 18.1043 5.25634 18.0261 5.40085 17.76L6.39026 15.9379C6.50652 15.7238 6.4501 15.4585 6.26859 15.296C5.99196 15.0482 5.73534 14.7768 5.50073 14.4842Z"
                      fill="#C2C7CA"
                    />
                    <mask
                      id="mask2_57_8092"
                      style="mask-type: luminance"
                      maskUnits="userSpaceOnUse"
                      x="11"
                      y="16"
                      width="4"
                      height="4"
                    >
                      <path
                        d="M11.1465 16.7993C11.1465 16.5232 11.3703 16.2993 11.6465 16.2993H14.0361C14.3123 16.2993 14.5361 16.5232 14.5361 16.7993V19.4789C14.5361 19.7551 14.3123 19.9789 14.0361 19.9789H11.6465C11.3703 19.9789 11.1465 19.7551 11.1465 19.4789V16.7993Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask2_57_8092)">
                      <path
                        d="M11.6153 16.796C11.3658 16.8405 11.1758 17.0518 11.1758 17.3052V19.4386C11.1758 19.7306 11.4253 19.9618 11.7144 19.9203C12.5318 19.8032 13.3152 19.5733 14.0522 19.2474C14.3094 19.1336 14.4047 18.8232 14.2704 18.5762L13.2859 16.7639C13.1598 16.5318 12.8754 16.4401 12.6269 16.5296C12.3008 16.6472 11.9623 16.7342 11.6153 16.796Z"
                        fill="#9AA2A7"
                      />
                    </g>
                    <path
                      d="M14.6323 15.296C14.4504 15.4585 14.3938 15.724 14.5101 15.9384L15.4995 17.7603C15.6439 18.0263 15.9905 18.1047 16.2237 17.9118C16.8637 17.3825 17.438 16.7685 17.9312 16.0849C18.0955 15.8571 18.0229 15.5412 17.7835 15.3944L16.0852 14.3531C15.8594 14.2148 15.5665 14.2777 15.4008 14.4842C15.1662 14.7768 14.9094 15.0482 14.6323 15.296Z"
                      fill="#868F95"
                    />
                    <mask
                      id="mask3_57_8092"
                      style="mask-type: luminance"
                      maskUnits="userSpaceOnUse"
                      x="16"
                      y="10"
                      width="4"
                      height="5"
                    >
                      <path
                        d="M16.4121 11.2554C16.4121 10.9792 16.636 10.7554 16.9121 10.7554H19.3435C19.6197 10.7554 19.8435 10.9792 19.8435 11.2554V13.859C19.8435 14.1351 19.6197 14.359 19.3435 14.359H16.9121C16.636 14.359 16.4121 14.1351 16.4121 13.859V11.2554Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask3_57_8092)">
                      <path
                        d="M16.5694 12.3806C16.4925 12.6136 16.5756 12.8742 16.7847 13.0026L18.4555 14.0281C18.712 14.1856 19.0495 14.0826 19.1584 13.802C19.4633 13.0168 19.6771 12.1827 19.7844 11.3122C19.8198 11.0242 19.5895 10.7777 19.2993 10.7777H17.3506C17.0947 10.7777 16.8818 10.9713 16.8426 11.2242C16.7808 11.622 16.6918 12.0093 16.5694 12.3806Z"
                        fill="#5E6A72"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_57_8092">
                      <rect
                        x="0.298828"
                        width="19.5556"
                        height="20"
                        rx="0.5"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
            <div class="table-wrapper-with-boarder">
              <table class="retirement_table_area">
                <thead>
                  <tr>
                    <th width="25%" @click="testFunction">
                      <p class="visible-hidden mb-1">Year</p>
                      <p class="fs-15">Year</p>
                    </th>
                    <th class="dropdown-table-head">
                      <p class="fs-15 mb-1">S&P 500</p>

                      <div class="select-menu table_select_menu">
                        <div class="select-btn">
                          <input
                            type="text"
                            class="sBtn-text"
                            :value="tableIndexType"
                            readonly="true"
                            id="account-type"
                          />
                          <i
                            ><img
                              src="@/assets/images/icons/table-select-chevron.svg"
                              alt="Chevron"
                          /></i>
                        </div>
                        <ul class="options">
                          <li
                            v-for="(item, index) in indexTypes"
                            :key="index"
                            :class="`option ${
                              tableIndexType === item ? 'active' : ''
                            }`"
                            @click="tableIndexType = item"
                          >
                            <span class="option-text">{{ item }}</span>
                          </li>
                        </ul>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="(item, index) in years" :key="index">
                    <td>{{ item }}</td>
                    <td :class="results.returns[index] < 0 ? 'red_text' : ''">
                      {{ Number((results.returns[index]*100).toFixed(2)) }}%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="w-25 px-1 common_each_table_div table_clr_1 h-100">
            <p class="each_table_heading">Market Account $500,000</p>
            <div class="table-wrapper-with-boarder">
              <table
                :class="`retirement_table_area ${
                  showDistribution ? '' : 'table_checkbox_off'
                }`"
              >
                <thead>
                  <tr>
                    <th>
                      <div class="button_cover mt-2px mb-1">
                        <div class="table_button button_r">
                          <input
                            type="checkbox"
                            class="button_checkbox table_Checkbox_btn"
                            id="table_Check_1"
                            :checked="showDistribution"
                            @click="showDistribution = !showDistribution"
                          />
                          <div class="button_knobs"></div>
                          <div class="button_layer"></div>
                        </div>
                      </div>
                      <p class="fs-15">Net Distribution</p>
                    </th>
                    <th class="dropdown-table-head align-bottom">
                      <p class="fs-15">Ending Balance</p>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="(item, index) in results.market.net_distribution" :key="index">
                    <td  :class="item > 0 ? 'green_text' : ''"> 
                        <p v-if="item">{{$numFormatWithDollar(item)}}</p> 
                        <p v-else class="visible-hidden m-0">null</p>
                    </td>
                    <td>{{$numFormatWithDollar(results.market.ending_balance[index])}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            class="w-40 px-1 common_each_table_div table_clr_2 disable h-100"
          >
            <p class="each_table_heading">
              Buffer Account
              <span class="buffer_value">$500,000</span>
            </p>
            <div class="table-wrapper-with-boarder">
              <table
                :class="`retirement_table_area ${
                  showDistribution ? '' : 'table_checkbox_off'
                }`"
              >
                <thead>
                  <tr>
                    <th class="align-bottom">
                      <p class="fs-15">Buffered Returns</p>
                    </th>
                    <th>
                      <div class="button_cover mt-2px mb-1">
                        <div class="table_button button_r">
                          <input
                            type="checkbox"
                            class="button_checkbox table_Checkbox_btn"
                            id="table_Check_2"
                            :checked="showDistribution"
                            @click="showDistribution = !showDistribution"
                          />
                          <div class="button_knobs"></div>
                          <div class="button_layer"></div>
                        </div>
                      </div>
                      <p class="fs-15">Net Distribution</p>
                    </th>
                    <th class="dropdown-table-head align-bottom">
                      <p class="fs-15">Ending Balance</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr  v-for="(item, index) in results.buffer.buffer_returns" :key="index">
                    <td :class="!item ? 'zero_text' : ''">{{Number((item*100).toFixed(2))}}%</td>
                    <td :class="results.buffer.net_distribution[index] ? 'green_text': 'red_text'">{{$numFormatWithDollar(results.buffer.net_distribution[index])}}</td>
                    <td>{{$numFormatWithDollar(results.buffer.ending_balance[index])}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            class="w-14 px-1 common_each_table_div table_clr_3 disable h-100"
          >
            <p class="each_table_heading">Combined</p>
            <div class="table-wrapper-with-boarder">
              <table class="retirement_table_area">
                <thead>
                  <tr>
                    <th>
                      <p class="fs-15 combined-th">
                        Combined Ending <br />
                        Balance
                      </p>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="(item, index) in results.combined_ending_balance" :key="index">
                    <td>{{$numFormatWithDollar(item)}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <h2 class="summary_heading">Summary</h2>
      <div class="container-fluid p-0">
        <div class="row">
          <div class="col-md-6">
            <div class="summary_each_card summary_card_clr_1">
              <h3 class="summary_each_card_heading">Market Account Alone</h3>
              <div class="summary_card_inner-div">
                <div class="each_card_left_part">
                  <div class="container-fluid p-0">
                    <div class="row">
                      <div class="col-md-7 each_card_left_label">
                        Beginning Balance
                      </div>
                      <div class="col-md-5 each_card_left_value">
                        $1,000,000
                      </div>
                    </div>
                    <div class="row mt-3">
                      <div class="col-md-7 each_card_left_label">
                        Ending Balance
                      </div>
                      <div class="col-md-5 each_card_left_value">$0</div>
                    </div>
                    <div class="row mt-3">
                      <div class="col-md-7 each_card_left_label">
                        Total Distributions
                      </div>
                      <div class="col-md-5 each_card_left_value">
                        $1,850,000
                      </div>
                    </div>
                    <div class="row mt-3">
                      <div class="col-md-7 each_card_left_label">
                        Total Value
                        <span>
                          <common-tooltip-svg />
                          <span class="text-start full-width"
                            >Ending Balance + Total Distributions = Total
                            Value</span
                          ></span
                        >
                      </div>
                      <div class="col-md-5 each_card_left_value">
                        $1,850,000
                      </div>
                    </div>
                    <div class="row mt-3">
                      <div class="col-md-7 each_card_left_label">
                        Negative Years
                      </div>
                      <div class="col-md-5 each_card_left_value">6</div>
                    </div>
                    <div class="row mt-3">
                      <div class="col-md-7 each_card_left_label">
                        Average Rate of Return
                      </div>
                      <div class="col-md-5 each_card_left_value">5.90%</div>
                    </div>
                  </div>
                </div>
                <div class="each_card_right_part">
                  <p class="success_prob_para">
                    Success Probability
                    <span>
                      <common-tooltip-svg />
                      <span class="text-start"
                        >This shows the probability of success of the market
                        account alone after 10,000 simulations of randomized
                        returns</span
                      ></span
                    >
                  </p>
                  <div
                    class="pie progress_pie px-2"
                    data-pie='{ "speed": 30, "percent": 50, "colorSlice": "#0E6651", "colorCircle": "#6DAC9D", "round": true }'
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 px-2 mt-4 mt-md-0">
            <div class="summary_each_card summary_card_clr_2 disable">
              <h3 class="summary_each_card_heading summary_card_clr_2">
                Market + Buffer Account
              </h3>
              <div class="summary_card_inner-div">
                <div class="each_card_left_part">
                  <div class="container-fluid p-0">
                    <div class="row">
                      <div class="col-md-7 each_card_left_label">
                        Beginning Balance
                      </div>
                      <div class="col-md-5 each_card_left_value">
                        $1,000,000
                      </div>
                    </div>
                    <div class="row mt-3">
                      <div class="col-md-7 each_card_left_label">
                        Ending Balance
                      </div>
                      <div class="col-md-5 each_card_left_value">$0</div>
                    </div>
                    <div class="row mt-3">
                      <div class="col-md-7 each_card_left_label">
                        Total Distributions
                      </div>
                      <div class="col-md-5 each_card_left_value">
                        $1,850,000
                      </div>
                    </div>
                    <div class="row mt-3">
                      <div class="col-md-7 each_card_left_label">
                        Total Value
                        <span>
                          <common-tooltip-svg />
                          <span class="text-start full-width"
                            >Ending Balance + Total Distributions = Total
                            Value</span
                          ></span
                        >
                      </div>
                      <div class="col-md-5 each_card_left_value">
                        $1,850,000
                      </div>
                    </div>
                    <div class="row mt-3">
                      <div class="col-md-7 each_card_left_label">
                        Negative Years
                      </div>
                      <div class="col-md-5 each_card_left_value">6</div>
                    </div>
                    <div class="row mt-3">
                      <div class="col-md-7 each_card_left_label">
                        Average Rate of Return
                      </div>
                      <div class="col-md-5 each_card_left_value">5.90%</div>
                    </div>
                  </div>
                </div>
                <div class="each_card_right_part">
                  <p class="success_prob_para">
                    Success Probability
                    <span
                      ><common-tooltip-svg /><span class="right-0 text-start"
                        >This shows the probability of success of the market and
                        buffer accounts together after 10,000 simulations of
                        randomized returns</span
                      ></span
                    >
                  </p>
                  <div
                    class="pie progress_pie px-2"
                    data-pie='{ "speed": 30, "percent": 100, "colorSlice": "#1660A4", "colorCircle": "#609BD2", "round": true }'
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <retirement-buffer-disclosure />
    </div>
  </div>
</template>
<script>
import SliderWeightRange from "../../common-components/SliderWeightRange.vue";
import RetirementBufferDisclosure from "./RetirementBufferDisclosure.vue";
import CommonTooltipSvg from "../../../components/common/CommonTooltipSvg.vue";

export default {
  components: {
    SliderWeightRange,
    CommonTooltipSvg,
    RetirementBufferDisclosure,
  },
  data() {
    return {
      aloneAccountTable: true,
      showDistribution: true,
      tableIndexType: "Historical Average",
    };
  },
  methods: {
    testFunction: function () {
      console.log(this.results);
      console.log(this.simulations);
    },
  },
  watch: {
    tableIndexType(e) {
      if (e !== "Historical Returns") {
        this.aloneAccountTable = true;
      }
    },
  },
  computed: {
    indexTypes() {
      return ["Historical Average", "Historical Returns"];
    },
    results() {
      return this.$store.state.data.retirement_buffer.auccumulation_results || null;
    },
    simulations() {
      return this.$store.state.data.retirement_buffer.auccumulation_simulations || null;
    },
    years() {
      let array = [];
      if (this.results && this.results.inputs) {
        for (
          let index = this.results.inputs.start_year;
          index <= this.results.inputs.end_year;
          index++
        ) {
          array.push(index);
        }
      }
      return array;
    },
  },
};
</script>
<style lang=""></style>
