<template lang="">
     <div class="sidebar indexSidebar">
        <div class="position-sticky h-100 sidebar-inner extra">
          <div class="mb-20">
            <h3 class="fs-26 bold-fw text-white hi-username">Hi, {{$currentUser() ? $currentUser().first_name : '' }}</h3>
            <label class="sidebar-username-label mx-auto" data-bs-toggle="tooltip" data-bs-placement="right" :title="`${$currentUser() ? $currentUser().first_name : '' }`"><span>{{$currentUser() ? $currentUser().first_name[0] : '' }}</span></label>
          </div>
          <ul class="nav flex-column flex-nowrap h-100 sidebar-nav">
            <li class="nav-item">
              <router-link to="/" :class="`nav-link ${$route.path == '/' ? 'active' : ''}`" aria-current="page" href="#" data-bs-toggle="tooltip" data-bs-placement="right" title="Comparative Analysis">
                <label class="cursor-pointer otherModecls">
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none">
                    <path
                      d="M2.7998 1.90405C2.7998 1.35177 2.35209 0.904053 1.7998 0.904053C1.24752 0.904053 0.799805 1.35177 0.799805 1.90405V17.9041C0.799805 18.4563 1.24752 18.9041 1.7998 18.9041C2.35209 18.9041 2.7998 18.4563 2.7998 17.9041V1.90405Z"
                      fill="black" />
                    <path
                      d="M17.7998 1.90405C17.7998 1.35177 17.3521 0.904053 16.7998 0.904053C16.2475 0.904053 15.7998 1.35177 15.7998 1.90405V17.9041C15.7998 18.4563 16.2475 18.9041 16.7998 18.9041C17.3521 18.9041 17.7998 18.4563 17.7998 17.9041V1.90405Z"
                      fill="black" />
                    <path
                      d="M16.7998 5.90405C17.3521 5.90405 17.7998 5.45634 17.7998 4.90405C17.7998 4.35177 17.3521 3.90405 16.7998 3.90405L1.7998 3.90405C1.24752 3.90405 0.799805 4.35177 0.799805 4.90405C0.799805 5.45634 1.24752 5.90405 1.7998 5.90405L16.7998 5.90405Z"
                      fill="black" />
                    <path
                      d="M16.7998 10.9041C17.3521 10.9041 17.7998 10.4563 17.7998 9.90405C17.7998 9.35177 17.3521 8.90405 16.7998 8.90405L1.7998 8.90405C1.24752 8.90405 0.799805 9.35177 0.799805 9.90405C0.799805 10.4563 1.24752 10.9041 1.7998 10.9041H16.7998Z"
                      fill="black" />
                    <path
                      d="M16.7998 15.9041C17.3521 15.9041 17.7998 15.4563 17.7998 14.9041C17.7998 14.3518 17.3521 13.9041 16.7998 13.9041L1.7998 13.9041C1.24752 13.9041 0.799805 14.3518 0.799805 14.9041C0.799805 15.4563 1.24752 15.9041 1.7998 15.9041H16.7998Z"
                      fill="black" />
                    <path
                      d="M6.7998 6.90405C7.90437 6.90405 8.7998 6.00862 8.7998 4.90405C8.7998 3.79948 7.90437 2.90405 6.7998 2.90405C5.69524 2.90405 4.7998 3.79948 4.7998 4.90405C4.7998 6.00862 5.69524 6.90405 6.7998 6.90405Z"
                      fill="black" />
                    <path
                      d="M6.7998 16.9041C7.90437 16.9041 8.7998 16.0086 8.7998 14.9041C8.7998 13.7995 7.90437 12.9041 6.7998 12.9041C5.69524 12.9041 4.7998 13.7995 4.7998 14.9041C4.7998 16.0086 5.69524 16.9041 6.7998 16.9041Z"
                      fill="black" />
                    <path
                      d="M11.7998 11.9041C12.9044 11.9041 13.7998 11.0086 13.7998 9.90405C13.7998 8.79948 12.9044 7.90405 11.7998 7.90405C10.6952 7.90405 9.7998 8.79948 9.7998 9.90405C9.7998 11.0086 10.6952 11.9041 11.7998 11.9041Z"
                      fill="black" />
                  </svg>
                  <span>Comparative Analysis</span>
                </label>
                 <label v-if="$props.client" class="side-client-label d-flex align-items-center indivisualLftArrow semi-bold-fw fs-14">
                  <svg width="5" height="9" viewBox="0 0 5 9" fill="#fff">
                    <path
                      d="M0 7.5903V0.866386C0 0.696202 0.0693989 0.533377 0.192168 0.415519C0.434019 0.183342 0.815982 0.183342 1.05783 0.41552L4.78358 3.99224C4.92184 4.12497 5 4.30834 5 4.5C5 4.69166 4.92184 4.87503 4.78358 5.00776L1.44977 8.20822C1.03756 8.60394 0.36082 8.49277 0.0968658 7.98598C0.0332282 7.8638 0 7.72807 0 7.5903Z"
                      fill="#fff" />
                  </svg>
                  <span class="me-1">{{$props.client.firstname}}</span>
                  <router-link to="/"><button class="btn"><img src="@/assets/images/icons/cross-small.svg" class="img-fluid" alt="Chevron"></button></router-link>
                </label>
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-bs-toggle="tooltip" data-bs-placement="right" title="Historical Simulations">
                <label class="cursor-pointer otherModecls">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2334_214)">
                    <path d="M14.4205 12.3329C14.6028 12.4371 14.835 12.3741 14.9392 12.1908C15.0433 12.0074 14.9815 11.7763 14.8003 11.671L11.4962 9.7537V5.53929C11.4962 5.32879 11.3259 5.15735 11.1165 5.15735C10.906 5.15735 10.7356 5.32879 10.7356 5.53929V10.1953L14.4205 12.3329Z" fill="#3CB79A"/>
                    <path d="M6.88802 10.026H4.33377C4.33377 6.23588 7.39149 3.16297 11.1632 3.16297C14.9338 3.16297 17.9915 6.23588 17.9915 10.026C17.9915 13.8162 14.9338 16.888 11.1632 16.888C10.408 16.888 9.65712 16.7632 8.94206 16.5147C8.53407 16.3737 8.08811 16.5918 7.94705 17.0041C7.80707 17.4132 8.02517 17.8624 8.43316 18.0035C12.8179 19.5182 17.5944 17.1745 19.1016 12.7691C20.6087 8.36262 18.278 3.56444 13.8943 2.04751C9.50955 0.532757 4.73307 2.87651 3.22591 7.28297C2.92426 8.16514 2.7691 9.09178 2.7691 10.026H0.214844C0.0954861 10.026 0 10.1215 0 10.242C0 10.2962 0.0206163 10.3483 0.0575086 10.3884L3.3941 14.0071C3.47439 14.095 3.61111 14.1005 3.69792 14.018C3.70226 14.0147 3.70551 14.0115 3.70877 14.0071L7.04644 10.3884C7.12782 10.3016 7.1224 10.1638 7.03559 10.0835C6.99544 10.0466 6.94336 10.026 6.88802 10.026Z" fill="#3CB79A"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_2334_214">
                    <rect width="20" height="20" fill="white"/>
                    </clipPath>
                    </defs>
                  </svg>
                  <span>Historical Simulations</span>
                </label>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-bs-toggle="tooltip" data-bs-placement="right" title="Policy Comparison">
                <label class="cursor-pointer otherModecls">
                  <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2964 14.4541C20.1335 14.4541 23.0947 11.5706 23.0947 8.19165C23.0947 4.81272 20.1335 1.9292 16.2964 1.9292C12.4592 1.9292 9.49805 4.81272 9.49805 8.19165C9.49805 11.5706 12.4592 14.4541 16.2964 14.4541ZM16.2964 15.7041C20.7414 15.7041 24.3447 12.3407 24.3447 8.19165C24.3447 4.04264 20.7414 0.679199 16.2964 0.679199C11.8514 0.679199 8.24805 4.04264 8.24805 8.19165C8.24805 12.3407 11.8514 15.7041 16.2964 15.7041Z" fill="#3CB79A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.57471 14.4541C12.4118 14.4541 15.373 11.5706 15.373 8.19165C15.373 4.81272 12.4118 1.9292 8.57471 1.9292C4.73757 1.9292 1.77637 4.81272 1.77637 8.19165C1.77637 11.5706 4.73757 14.4541 8.57471 14.4541ZM8.57471 15.7041C13.0197 15.7041 16.623 12.3407 16.623 8.19165C16.623 4.04264 13.0197 0.679199 8.57471 0.679199C4.12973 0.679199 0.526367 4.04264 0.526367 8.19165C0.526367 12.3407 4.12973 15.7041 8.57471 15.7041Z" fill="#3CB79A"/>
                  <path d="M16.1873 8.19165C16.1873 11.2745 14.5076 13.7737 12.4357 13.7737C10.3637 13.7737 8.68408 11.2745 8.68408 8.19165C8.68408 5.10878 10.3637 2.60962 12.4357 2.60962C14.5076 2.60962 16.1873 5.10878 16.1873 8.19165Z" fill="#3CB79A"/>
                  </svg>
                  <span>Policy Comparison</span>
                </label>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-bs-toggle="tooltip" data-bs-placement="right" title="Roth Conversion Alternative">
                <label class="cursor-pointer otherModecls">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2334_223)">
                    <path d="M18.4614 15.2908C18.4614 17.0454 17.0324 18.4733 15.2789 18.4733H4.71251C2.95687 18.4733 1.52892 17.0454 1.52892 15.2908V4.7244C1.52892 2.96876 2.95687 1.54189 4.71251 1.54189H15.2789C17.0324 1.54189 18.4614 2.96876 18.4614 4.7244V15.2908ZM5.92996 7.10613C5.50353 7.10613 5.16065 7.45118 5.16065 7.87653V15.6478C5.16065 16.0731 5.50353 16.4171 5.92996 16.4171C6.35531 16.4171 6.69819 16.0731 6.69819 15.6478V7.87653C6.69819 7.45118 6.35531 7.10613 5.92996 7.10613ZM14.0615 7.10613C13.6361 7.10613 13.2911 7.45118 13.2911 7.87653V15.6478C13.2911 16.0731 13.6361 16.4171 14.0615 16.4171C14.4879 16.4171 14.8319 16.0731 14.8319 15.6478V7.87653C14.8319 7.45118 14.4879 7.10613 14.0615 7.10613ZM9.99354 3.59701C9.57362 3.59701 9.22857 3.94098 9.22857 4.36741V15.6478C9.22857 16.0731 9.57362 16.4171 9.99354 16.4171C10.42 16.4171 10.765 16.0731 10.765 15.6478V4.36741C10.765 3.94098 10.42 3.59701 9.99354 3.59701ZM15.2789 0.00543213H4.71251C2.11051 0.00543213 -0.00537109 2.1224 -0.00537109 4.7244V15.2908C-0.00537109 17.8917 2.11051 20.0076 4.71251 20.0076H15.2789C17.882 20.0076 19.9979 17.8917 19.9979 15.2908V4.7244C19.9979 2.1224 17.882 0.00543213 15.2789 0.00543213Z" fill="#3CB79A"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_2334_223">
                    <rect width="20" height="20" fill="white"/>
                    </clipPath>
                    </defs>
                  </svg>
                  <span>Roth Conversion Alternative</span>
                </label>
              </a>
            </li>
<!--        <li class="nav-item">
              <a class="nav-link" href="#" data-bs-toggle="tooltip" data-bs-placement="right" title="Phase 3 Title">
                <label class="cursor-pointer otherModecls">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M8.99956 12.9683C8.48819 12.9683 8.03365 12.8807 7.63592 12.7055C7.24056 12.5304 6.92806 12.2865 6.69842 11.974C6.46878 11.6615 6.34686 11.3005 6.33265 10.8909H7.66788C7.67972 11.0874 7.74482 11.259 7.86319 11.4058C7.98156 11.5502 8.139 11.6627 8.33549 11.7432C8.53199 11.8237 8.75216 11.8639 8.996 11.8639C9.25642 11.8639 9.48725 11.8189 9.68848 11.729C9.88971 11.6367 10.0471 11.5088 10.1608 11.3455C10.2744 11.1821 10.33 10.9939 10.3277 10.7808C10.33 10.5607 10.2732 10.3665 10.1572 10.1984C10.0412 10.0304 9.87314 9.89896 9.65297 9.80427C9.43516 9.70957 9.17238 9.66222 8.86461 9.66222H8.22186V8.6466H8.86461C9.11793 8.6466 9.33928 8.6028 9.52868 8.5152C9.72044 8.42761 9.87077 8.3045 9.97967 8.14588C10.0886 7.9849 10.1418 7.79906 10.1395 7.58836C10.1418 7.38239 10.0957 7.20365 10.001 7.05214C9.90865 6.89825 9.77726 6.7787 9.6068 6.69347C9.43871 6.60824 9.24103 6.56563 9.01376 6.56563C8.79122 6.56563 8.58526 6.60588 8.39586 6.68637C8.20647 6.76686 8.05377 6.88168 7.93777 7.03083C7.82176 7.17761 7.76021 7.3528 7.75311 7.5564H6.48535C6.49482 7.1492 6.61201 6.79172 6.83691 6.48395C7.06419 6.17382 7.36722 5.93234 7.746 5.75952C8.12479 5.58433 8.54975 5.49674 9.02086 5.49674C9.50618 5.49674 9.92759 5.58788 10.2851 5.77017C10.6449 5.9501 10.9231 6.19276 11.1196 6.49816C11.3161 6.80356 11.4143 7.14091 11.4143 7.51023C11.4167 7.9198 11.296 8.26307 11.0521 8.54006C10.8106 8.81705 10.4934 8.99816 10.1004 9.08338V9.1402C10.6118 9.21123 11.0036 9.40062 11.2758 9.70838C11.5505 10.0138 11.6866 10.3938 11.6842 10.8483C11.6842 11.2555 11.5682 11.6201 11.3362 11.942C11.1066 12.2617 10.7893 12.5126 10.3845 12.6949C9.98204 12.8772 9.52039 12.9683 8.99956 12.9683Z"
                      fill="black" />
                    <circle cx="9" cy="9" r="7.75" stroke="black" stroke-width="1.5" />
                  </svg>
                  <span>Phase 3 Title</span>
                </label>
              </a>
            </li> -->
            <li class="nav-item">
              <router-link to="/index-strategy-calculator" :class="`nav-link ${$route.path == '/index-strategy-calculator' ? 'active' : ''} ${$route.path == '/index-strategy-calculator-run' ? 'active' : ''}`" data-bs-toggle="tooltip" data-bs-placement="right" title="Index Strategy Calculator">
                <label class="cursor-pointer otherModecls">
                  <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M13.4286 1.5H2C1.72386 1.5 1.5 1.72386 1.5 2V16C1.5 16.2761 1.72386 16.5 2 16.5H13.4286C13.7047 16.5 13.9286 16.2761 13.9286 16V2C13.9286 1.72386 13.7047 1.5 13.4286 1.5ZM2 0C0.895431 0 0 0.89543 0 2V16C0 17.1046 0.895432 18 2 18H13.4286C14.5331 18 15.4286 17.1046 15.4286 16V2C15.4286 0.895431 14.5331 0 13.4286 0H2Z"
                      fill="black" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M4.28571 2.57141C3.57563 2.57141 3 3.07998 3 3.70734C3 4.3347 3.57564 4.84327 4.28572 4.84327H11.1429C11.8529 4.84327 12.4286 4.3347 12.4286 3.70734C12.4286 3.07998 11.8529 2.57141 11.1429 2.57141H4.28571Z"
                      fill="black" />
                    <rect x="6.42871" y="6" width="2.57143" height="2.57143" rx="1.28571" fill="#282627" />
                    <rect x="6.42871" y="9.42859" width="2.57143" height="2.57143" rx="1.28571" fill="#282627" />
                    <rect x="6.42871" y="12.8572" width="2.57143" height="2.57143" rx="1.28571" fill="#282627" />
                    <rect x="9.85742" y="6" width="2.57143" height="2.57143" rx="1.28571" fill="#282627" />
                    <rect x="9.85742" y="9.42859" width="2.57143" height="2.57143" rx="1.28571" fill="#282627" />
                    <rect x="9.85742" y="12.8572" width="2.57143" height="2.57143" rx="1.28571" fill="#282627" />
                    <rect x="3" y="6" width="2.57143" height="2.57143" rx="1.28571" fill="#282627" />
                    <rect x="3" y="9.42859" width="2.57143" height="2.57143" rx="1.28571" fill="#282627" />
                    <rect x="3" y="12.8572" width="2.57143" height="2.57143" rx="1.28571" fill="#282627" />
                  </svg>
                  <span>Index Strategy Calculator</span>
                </label>
              </router-link>
            </li>
            <li class="nav-item">
            <router-link to="/tax-score-card" :class="`nav-link ${$route.path == '/tax-score-card' ? 'active' : ''} ${$route.path == '/tax-risk-analysis' ? 'active' : ''}`" data-bs-toggle="tooltip" data-bs-placement="right" title="Tax Score Card">
                <label class="cursor-pointer otherModecls">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.3651 16.9746L12.0982 1.01363C11.7968 0.430909 11.2803 0.0830078 10.7168 0.0830078C10.1532 0.0830078 9.63677 0.430909 9.33552 1.01363L1.06844 16.9746C0.743438 17.6026 0.724479 18.3662 1.01802 19.0174C1.31031 19.6646 1.84552 20.0512 2.44969 20.0512H18.9839C19.5882 20.0512 20.1232 19.6646 20.4153 19.0171C20.7091 18.3662 20.6901 17.6026 20.3651 16.9746ZM17.7764 17.8013C17.5293 18.3234 17.1245 18.6226 16.6661 18.6226H4.76719C4.30885 18.6226 3.90427 18.3231 3.65698 17.8013C3.37323 17.202 3.37219 16.4573 3.6549 15.8578L9.60427 3.25462C9.84844 2.73684 10.2643 2.4279 10.7166 2.4279C11.1689 2.4279 11.5847 2.73684 11.8289 3.25462L17.7782 15.8578C18.0609 16.4573 18.0603 17.202 17.7764 17.8013Z" fill="black"/>
                    <path d="M11.2539 5.60938H9.88765C9.73578 5.60938 9.59119 5.68909 9.49078 5.82841C9.38973 5.96848 9.34307 6.15466 9.36286 6.34491L10.2766 13.6358C10.2997 13.8177 10.4208 13.9447 10.5708 13.945C10.5708 13.945 10.5708 13.945 10.571 13.945C10.721 13.945 10.842 13.8179 10.8656 13.6358C10.8656 13.6356 10.8656 13.6353 10.8656 13.635L11.7795 6.34007C11.7987 6.15491 11.752 5.96848 11.651 5.82866C11.5504 5.68909 11.4058 5.60938 11.2539 5.60938Z" fill="black"/>
                    <path d="M10.5703 14.5215C10.083 14.5215 9.68652 15.0079 9.68652 15.6059C9.68652 16.2032 10.083 16.6891 10.5703 16.6891C11.0582 16.6891 11.4555 16.2032 11.4555 15.6059C11.4555 15.0079 11.0582 14.5215 10.5703 14.5215Z" fill="black"/>
                    </svg>
                  <span>Tax Score Card</span>
                </label>
              </router-link>
            </li>
          </ul>
        </div>
        <button class="sidebar-arrow-1"><svg class="sidebarArrowImgJs1" width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(360deg);">
            <rect x="0.25" y="5.45312" width="7" height="1.5" rx="0.75" transform="rotate(-45 0.25 5.45312)" fill="#23669E"></rect>
            <rect x="1.3125" y="4.5" width="7" height="1.5" rx="0.75" transform="rotate(45 1.3125 4.5)" fill="#23669E"></rect>
          </svg>
        </button>
      </div>

      <!-- Reset Modal Start -->
  <div class="modal fade common-modal preview-modal-backdrop p-0" id="resetModal" tabindex="-1"
    aria-labelledby="resetModalLabel" aria-hidden="true">
    <a type="button" data-bs-dismiss="modal" class="preview-modal-close">
      <svg width="45" height="48" viewBox="0 0 45 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Group 1974" filter="url(#filter0_d_346_5079)">
          <rect id="Rectangle 174" width="49.4476" height="5.7055" rx="2.85275"
            transform="matrix(0.707099 0.707114 -0.707099 0.707114 7.03516 0.000488281)" fill="#0E6651" />
          <rect id="Rectangle 175" width="49.4476" height="5.7055" rx="2.85275"
            transform="matrix(-0.707099 0.707114 -0.707099 -0.707114 42 4.03442)" fill="#0E6651" />
        </g>
        <defs>
          <filter id="filter0_d_346_5079" x="0.181641" y="1.18164" width="44.6367" height="46.6367"
            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha" />
            <feOffset dy="6" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_346_5079" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_346_5079" result="shape" />
          </filter>
        </defs>
      </svg>

    </a>
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable tax-score-preview-modal">
      <div class="modal-content bg-none">

        <div class="modal-body p-0 bg-none">
            <div class="index-strategy-content-div p-0 border-0 bg-none">
                <div class="index-strategy-content-inner-div withBoxShadow">
                    <div class="index-strategy-each-tabs-head border-0">
                        <p>Pre-tax Plan Data</p>
                        
                    </div>
                    <div class="container-fluid index-strategy-inputs-div">
                        <div class="row">
                            <div class="col-md-6 col-lg-3 inp-mar-top">
                                <label for="beginningBalance">IRA or 401K Balance</label>
                                <div class="index-strategy-each-inputs dollar">
                                    <span>$</span>
                                    <input type="text" required>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 inp-mar-top">
                                <label for="beginningBalance">Age</label>
                                <div class="index-strategy-each-inputs">
                                    <input type="text" required>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 inp-mar-top">
                                <label for="beginningBalance">RMD Age <span><svg
                                            class="label-common-tooltip-svg" width="13" height="13"
                                            viewBox="0 0 13 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g id="Group 1968">
                                                <circle id="Ellipse 190" cx="6.5" cy="6.5" r="6.5"
                                                    fill="#D0D0D0" />
                                                <circle id="Ellipse 191" cx="6.5" cy="3.5" r="1"
                                                    fill="white" />
                                                <rect id="Rectangle 753" x="5.75" y="5.5"
                                                    width="1.5" height="5" rx="0.75" fill="white" />
                                            </g>
                                        </svg>
                                        <span>What year will RMDs start?</span>
                                    </span></label>
                                <div class="index-strategy-each-inputs">
                                    <input type="text" value="0" required>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 inp-mar-top">
                                <label for="beginningBalance">Plan Through Age <span><svg
                                            class="label-common-tooltip-svg" width="13" height="13"
                                            viewBox="0 0 13 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g id="Group 1968">
                                                <circle id="Ellipse 190" cx="6.5" cy="6.5" r="6.5"
                                                    fill="#D0D0D0" />
                                                <circle id="Ellipse 191" cx="6.5" cy="3.5" r="1"
                                                    fill="white" />
                                                <rect id="Rectangle 753" x="5.75" y="5.5"
                                                    width="1.5" height="5" rx="0.75" fill="white" />
                                            </g>
                                        </svg>
                                        <span>Through what age should the analysis run?</span>
                                    </span></label>
                                <div class="index-strategy-each-inputs">
                                    <input type="text" required>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 inp-mar-top">
                                <label for="beginningBalance">Rate of Return<span><svg
                                            class="label-common-tooltip-svg" width="13" height="13"
                                            viewBox="0 0 13 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g id="Group 1968">
                                                <circle id="Ellipse 190" cx="6.5" cy="6.5" r="6.5"
                                                    fill="#D0D0D0" />
                                                <circle id="Ellipse 191" cx="6.5" cy="3.5" r="1"
                                                    fill="white" />
                                                <rect id="Rectangle 753" x="5.75" y="5.5"
                                                    width="1.5" height="5" rx="0.75" fill="white" />
                                            </g>
                                        </svg>
                                        <span>This will apply to the IRA or 401K and the reinvested
                                            capital</span>
                                    </span></label>
                                <div class="index-strategy-each-inputs">
                                    <input type="text" required>
                                    <span>%</span>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 inp-mar-top">
                                <label for="beginningBalance">Initial Tax Rate</label>
                                <div class="index-strategy-each-inputs">
                                    <input type="text" required>
                                    <span>%</span>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 inp-mar-top">
                                <label for="beginningBalance">Second Tax Rate <span
                                        class="optional-label">(optional)
                                    </span></label>
                                <div class="index-strategy-each-inputs">
                                    <input type="text" required>
                                    <span>%</span>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 inp-mar-top">
                                <label for="beginningBalance">Switch Year<span><svg
                                            class="label-common-tooltip-svg" width="13" height="13"
                                            viewBox="0 0 13 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g id="Group 1968">
                                                <circle id="Ellipse 190" cx="6.5" cy="6.5" r="6.5"
                                                    fill="#D0D0D0" />
                                                <circle id="Ellipse 191" cx="6.5" cy="3.5" r="1"
                                                    fill="white" />
                                                <rect id="Rectangle 753" x="5.75" y="5.5"
                                                    width="1.5" height="5" rx="0.75" fill="white" />
                                            </g>
                                        </svg>
                                        <span>What year should the second tax rate take
                                            effect?</span>
                                    </span></label>
                                <div class="index-strategy-each-inputs">
                                    <input type="text" required>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 inp-mar-top">
                                <label for="beginningBalance">Social Security Amount</label>
                                <div class="index-strategy-each-inputs dollar">
                                    <span>$</span>
                                    <input type="text" required>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 inp-mar-top">
                                <label for="beginningBalance">Social Security Age</label>
                                <div class="index-strategy-each-inputs">
                                    <input type="text" required>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 inp-mar-top">
                                <label for="beginningBalance">Social Security COLA<span><svg
                                            class="label-common-tooltip-svg" width="13" height="13"
                                            viewBox="0 0 13 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g id="Group 1968">
                                                <circle id="Ellipse 190" cx="6.5" cy="6.5" r="6.5"
                                                    fill="#D0D0D0" />
                                                <circle id="Ellipse 191" cx="6.5" cy="3.5" r="1"
                                                    fill="white" />
                                                <rect id="Rectangle 753" x="5.75" y="5.5"
                                                    width="1.5" height="5" rx="0.75" fill="white" />
                                            </g>
                                        </svg>
                                        <span>What year should the second tax rate take
                                            effect?</span>
                                    </span></label>
                                <div class="index-strategy-each-inputs">
                                    <input type="text" required>
                                    <span>%</span>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 inp-mar-top">
                                <label for="beginningBalance">Roth Conversion Years<span><svg
                                            class="label-common-tooltip-svg" width="13" height="13"
                                            viewBox="0 0 13 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g id="Group 1968">
                                                <circle id="Ellipse 190" cx="6.5" cy="6.5" r="6.5"
                                                    fill="#D0D0D0" />
                                                <circle id="Ellipse 191" cx="6.5" cy="3.5" r="1"
                                                    fill="white" />
                                                <rect id="Rectangle 753" x="5.75" y="5.5"
                                                    width="1.5" height="5" rx="0.75" fill="white" />
                                            </g>
                                        </svg>
                                        <span>Convert to a Roth IRA over How many years?</span>
                                    </span></label>
                                <div class="index-strategy-each-inputs">
                                    <input type="text" required>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="run-reset-btn-div">
                        <router-link to="/tax-risk-analysis" class="run-button /*disabled*/">Run</router-link>
                        <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#resetModal"
                            class="reset-button">Reset</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Reset  Modal End -->
</template>
<script>
export default {
    props:['client'],
    data() {
    return {
      enabled: true,
      dragging: false,
      list: this.$store.state.data.reportTabs,
      sidebar: {
        collapse: false,
        currentTab: "comparative",
      },
    };
  },
  mounted(){
    const sideArrow = document.querySelector(".sidebar-arrow-1");
    const indexSidebar = document.querySelector(".indexSidebar");
    const rightArea = document.querySelector(".right-area");
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    sideArrow.addEventListener("click", () => {
      indexSidebar.classList.toggle("collapsed");
      rightArea.classList.toggle("wider");
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      if(indexSidebar.classList.contains("collapsed")){
        return new bootstrap.Tooltip(tooltipTriggerEl)
      }
      if(!indexSidebar.classList.contains("collapsed")){
        return new bootstrap.Tooltip(tooltipTriggerEl).disable();
      }
    })
    });

    if(window.innerWidth > 767 && window.innerWidth < 1200){
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });   
    }
  }
}
</script>
<style lang="">
    
</style>