<template>
  <div>
    <navbar-component />
    <section class="authMaindiv-area">
      <div class="container middleContainer">
        <header-component />
        <div class="payment-methodMain-div paymentMiddleDivMain">
          <sidebar-component />
          <div class="d-flex flex-column">
            <div class="w-100 payment-right-card-main-div dashBoardRightDiv">
              <div class="tutorials-header">
                <h1>Tutorials</h1>
              </div>

              <div class="tutorials-grid">
                <!-- Comparative Analysis -->
                <div class="tutorial-card" @click="openVideo('comparative-analysis')">
                  <div class="tutorial-card-inner">
                    <div class="play-button-circle active">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="30" cy="30" r="29" stroke="#0E6651" stroke-width="2"/>
                        <path d="M24 18L42 30L24 42V18Z" fill="#0E6651"/>
                      </svg>
                    </div>
                    <div class="tutorial-title">
                      <svg width="18" height="19" viewBox="0 0 18 19" fill="none">
                        <path d="M2.7998 1.90405C2.7998 1.35177 2.35209 0.904053 1.7998 0.904053C1.24752 0.904053 0.799805 1.35177 0.799805 1.90405V17.9041C0.799805 18.4563 1.24752 18.9041 1.7998 18.9041C2.35209 18.9041 2.7998 18.4563 2.7998 17.9041V1.90405Z" fill="#0E6651"/>
                        <path d="M17.7998 1.90405C17.7998 1.35177 17.3521 0.904053 16.7998 0.904053C16.2475 0.904053 15.7998 1.35177 15.7998 1.90405V17.9041C15.7998 18.4563 16.2475 18.9041 16.7998 18.9041C17.3521 18.9041 17.7998 18.4563 17.7998 17.9041V1.90405Z" fill="#0E6651"/>
                        <path d="M16.7998 5.90405C17.3521 5.90405 17.7998 5.45634 17.7998 4.90405C17.7998 4.35177 17.3521 3.90405 16.7998 3.90405L1.7998 3.90405C1.24752 3.90405 0.799805 4.35177 0.799805 4.90405C0.799805 5.45634 1.24752 5.90405 1.7998 5.90405L16.7998 5.90405Z" fill="#0E6651"/>
                        <path d="M16.7998 10.9041C17.3521 10.9041 17.7998 10.4563 17.7998 9.90405C17.7998 9.35177 17.3521 8.90405 16.7998 8.90405L1.7998 8.90405C1.24752 8.90405 0.799805 9.35177 0.799805 9.90405C0.799805 10.4563 1.24752 10.9041 1.7998 10.9041H16.7998Z" fill="#0E6651"/>
                        <path d="M16.7998 15.9041C17.3521 15.9041 17.7998 15.4563 17.7998 14.9041C17.7998 14.3518 17.3521 13.9041 16.7998 13.9041L1.7998 13.9041C1.24752 13.9041 0.799805 14.3518 0.799805 14.9041C0.799805 15.4563 1.24752 15.9041 1.7998 15.9041H16.7998Z" fill="#0E6651"/>
                        <path d="M6.7998 6.90405C7.90437 6.90405 8.7998 6.00862 8.7998 4.90405C8.7998 3.79948 7.90437 2.90405 6.7998 2.90405C5.69524 2.90405 4.7998 3.79948 4.7998 4.90405C4.7998 6.00862 5.69524 6.90405 6.7998 6.90405Z" fill="#0E6651"/>
                        <path d="M6.7998 16.9041C7.90437 16.9041 8.7998 16.0086 8.7998 14.9041C8.7998 13.7995 7.90437 12.9041 6.7998 12.9041C5.69524 12.9041 4.7998 13.7995 4.7998 14.9041C4.7998 16.0086 5.69524 16.9041 6.7998 16.9041Z" fill="#0E6651"/>
                        <path d="M11.7998 11.9041C12.9044 11.9041 13.7998 11.0086 13.7998 9.90405C13.7998 8.79948 12.9044 7.90405 11.7998 7.90405C10.6952 7.90405 9.7998 8.79948 9.7998 9.90405C9.7998 11.0086 10.6952 11.9041 11.7998 11.9041Z" fill="#0E6651"/>
                      </svg>
                      <span>Comparative Analysis</span>
                    </div>
                  </div>
                </div>

                <!-- Historical Simulations - Coming Soon -->
                <div class="tutorial-card disabled">
                  <div class="tutorial-card-inner">
                    <div class="play-button-circle">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="30" cy="30" r="29" stroke="#D3D3D3" stroke-width="2"/>
                        <path d="M24 18L42 30L24 42V18Z" fill="#D3D3D3"/>
                      </svg>
                    </div>
                    <div class="tutorial-title">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2334_214)">
                          <path d="M14.4205 12.3329C14.6028 12.4371 14.835 12.3741 14.9392 12.1908C15.0433 12.0074 14.9815 11.7763 14.8003 11.671L11.4962 9.7537V5.53929C11.4962 5.32879 11.3259 5.15735 11.1165 5.15735C10.906 5.15735 10.7356 5.32879 10.7356 5.53929V10.1953L14.4205 12.3329Z" fill="#D3D3D3"/>
                          <path d="M6.88802 10.026H4.33377C4.33377 6.23588 7.39149 3.16297 11.1632 3.16297C14.9338 3.16297 17.9915 6.23588 17.9915 10.026C17.9915 13.8162 14.9338 16.888 11.1632 16.888C10.408 16.888 9.65712 16.7632 8.94206 16.5147C8.53407 16.3737 8.08811 16.5918 7.94705 17.0041C7.80707 17.4132 8.02517 17.8624 8.43316 18.0035C12.8179 19.5182 17.5944 17.1745 19.1016 12.7691C20.6087 8.36262 18.278 3.56444 13.8943 2.04751C9.50955 0.532757 4.73307 2.87651 3.22591 7.28297C2.92426 8.16514 2.7691 9.09178 2.7691 10.026H0.214844C0.0954861 10.026 0 10.1215 0 10.242C0 10.2962 0.0206163 10.3483 0.0575086 10.3884L3.3941 14.0071C3.47439 14.095 3.61111 14.1005 3.69792 14.018C3.70226 14.0147 3.70551 14.0115 3.70877 14.0071L7.04644 10.3884C7.12782 10.3016 7.1224 10.1638 7.03559 10.0835C6.99544 10.0466 6.94336 10.026 6.88802 10.026Z" fill="#D3D3D3"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_2334_214">
                            <rect width="20" height="20" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                      <span>Historical Simulations</span>
                    </div>
                  </div>
                </div>

                <!-- Index Strategy Calculator -->
                <div class="tutorial-card" @click="openVideo('index-strategy')">
                  <div class="tutorial-card-inner">
                    <div class="play-button-circle active">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="30" cy="30" r="29" stroke="#0E6651" stroke-width="2"/>
                        <path d="M24 18L42 30L24 42V18Z" fill="#0E6651"/>
                      </svg>
                    </div>
                    <div class="tutorial-title">
                      <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4286 1.5H2C1.72386 1.5 1.5 1.72386 1.5 2V16C1.5 16.2761 1.72386 16.5 2 16.5H13.4286C13.7047 16.5 13.9286 16.2761 13.9286 16V2C13.9286 1.72386 13.7047 1.5 13.4286 1.5ZM2 0C0.895431 0 0 0.89543 0 2V16C0 17.1046 0.895432 18 2 18H13.4286C14.5331 18 15.4286 17.1046 15.4286 16V2C15.4286 0.895431 14.5331 0 13.4286 0H2Z" fill="#0E6651"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.28571 2.57141C3.57563 2.57141 3 3.07998 3 3.70734C3 4.3347 3.57564 4.84327 4.28572 4.84327H11.1429C11.8529 4.84327 12.4286 4.3347 12.4286 3.70734C12.4286 3.07998 11.8529 2.57141 11.1429 2.57141H4.28571Z" fill="#0E6651"/>
                        <rect x="6.42871" y="6" width="2.57143" height="2.57143" rx="1.28571" fill="#0E6651"/>
                        <rect x="6.42871" y="9.42859" width="2.57143" height="2.57143" rx="1.28571" fill="#0E6651"/>
                        <rect x="6.42871" y="12.8572" width="2.57143" height="2.57143" rx="1.28571" fill="#0E6651"/>
                        <rect x="9.85742" y="6" width="2.57143" height="2.57143" rx="1.28571" fill="#0E6651"/>
                        <rect x="9.85742" y="9.42859" width="2.57143" height="2.57143" rx="1.28571" fill="#0E6651"/>
                        <rect x="9.85742" y="12.8572" width="2.57143" height="2.57143" rx="1.28571" fill="#0E6651"/>
                        <rect x="3" y="6" width="2.57143" height="2.57143" rx="1.28571" fill="#0E6651"/>
                        <rect x="3" y="9.42859" width="2.57143" height="2.57143" rx="1.28571" fill="#0E6651"/>
                        <rect x="3" y="12.8572" width="2.57143" height="2.57143" rx="1.28571" fill="#0E6651"/>
                      </svg>
                      <span>Index Strategy Calculator</span>
                    </div>
                  </div>
                </div>

                <!-- Tax Scorecard -->
                <div class="tutorial-card" @click="openVideo('tax-scorecard')">
                  <div class="tutorial-card-inner">
                    <div class="play-button-circle active">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="30" cy="30" r="29" stroke="#0E6651" stroke-width="2"/>
                        <path d="M24 18L42 30L24 42V18Z" fill="#0E6651"/>
                      </svg>
                    </div>
                    <div class="tutorial-title">
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3651 16.9746L12.0982 1.01363C11.7968 0.430909 11.2803 0.0830078 10.7168 0.0830078C10.1532 0.0830078 9.63677 0.430909 9.33552 1.01363L1.06844 16.9746C0.743438 17.6026 0.724479 18.3662 1.01802 19.0174C1.31031 19.6646 1.84552 20.0512 2.44969 20.0512H18.9839C19.5882 20.0512 20.1232 19.6646 20.4153 19.0171C20.7091 18.3662 20.6901 17.6026 20.3651 16.9746ZM17.7764 17.8013C17.5293 18.3234 17.1245 18.6226 16.6661 18.6226H4.76719C4.30885 18.6226 3.90427 18.3231 3.65698 17.8013C3.37323 17.202 3.37219 16.4573 3.6549 15.8578L9.60427 3.25462C9.84844 2.73684 10.2643 2.4279 10.7166 2.4279C11.1689 2.4279 11.5847 2.73684 11.8289 3.25462L17.7782 15.8578C18.0609 16.4573 18.0603 17.202 17.7764 17.8013Z" fill="#0E6651"/>
                        <path d="M11.2539 5.60938H9.88765C9.73578 5.60938 9.59119 5.68909 9.49078 5.82841C9.38973 5.96848 9.34307 6.15466 9.36286 6.34491L10.2766 13.6358C10.2997 13.8177 10.4208 13.9447 10.5708 13.945C10.5708 13.945 10.5708 13.945 10.571 13.945C10.721 13.945 10.842 13.8179 10.8656 13.6358C10.8656 13.6356 10.8656 13.6353 10.8656 13.635L11.7795 6.34007C11.7987 6.15491 11.752 5.96848 11.651 5.82866C11.5504 5.68909 11.4058 5.60938 11.2539 5.60938Z" fill="#0E6651"/>
                        <path d="M10.5703 14.5215C10.083 14.5215 9.68652 15.0079 9.68652 15.6059C9.68652 16.2032 10.083 16.6891 10.5703 16.6891C11.0582 16.6891 11.4555 16.2032 11.4555 15.6059C11.4555 15.0079 11.0582 14.5215 10.5703 14.5215Z" fill="#0E6651"/>
                      </svg>
                      <span>Tax Scorecard</span>
                    </div>
                  </div>
                </div>

                <!-- Retirement Buffer Accumulation -->
                <div class="tutorial-card" @click="openVideo('retirement-buffer-accumulation')">
                  <div class="tutorial-card-inner">
                    <div class="play-button-circle active">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="30" cy="30" r="29" stroke="#0E6651" stroke-width="2"/>
                        <path d="M24 18L42 30L24 42V18Z" fill="#0E6651"/>
                      </svg>
                    </div>
                    <div class="tutorial-title">
                      <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.255386 0.321777C2.83049 2.3578 6.31413 2.3578 8.88924 0.321777C11.4644 2.3578 14.948 2.3578 17.5231 0.321777V8.21739C17.5231 14.5796 13.9565 20.0315 8.88924 22.3218C3.82178 20.0315 0.255386 14.5796 0.255386 8.21739V0.321777ZM1.44019 8.21955C1.44019 11.0362 2.2044 13.7513 3.652 16.0697C4.34907 17.1891 5.19048 18.1897 6.15205 19.046C6.99131 19.7943 7.91162 20.4199 8.89114 20.9114C9.87071 20.4199 10.7891 19.7943 11.6303 19.046C12.5921 18.1897 13.4333 17.1891 14.1303 16.0697C15.576 13.7513 16.3422 11.0362 16.3422 8.21955V2.49792C15.3527 2.92479 14.2963 3.14499 13.21 3.14499C11.6777 3.14499 10.2004 2.70481 8.89304 1.86812C7.58575 2.70715 6.10865 3.14499 4.57616 3.14499C3.49014 3.14499 2.43362 2.92479 1.44426 2.49792V8.21955H1.44019Z" fill="#0E6651"/>
                        <path d="M13.2061 4.22285C13.9348 4.22285 14.6515 4.13458 15.3508 3.95991V8.22135C15.3508 10.8222 14.6457 13.3262 13.3106 15.4655C12.667 16.4985 11.8909 17.4217 11.0022 18.2133C10.3466 18.7954 9.63755 19.3001 8.88725 19.7165V3.09497C10.2202 3.83475 11.7012 4.22285 13.2061 4.22285Z" fill="#0E6651"/>
                      </svg>
                      <span>Retirement Buffer Accumulation</span>
                    </div>
                  </div>
                </div>

                <!-- Retirement Buffer Lifetime Income -->
                <div class="tutorial-card" @click="openVideo('retirement-buffer-income')">
                  <div class="tutorial-card-inner">
                    <div class="play-button-circle active">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="30" cy="30" r="29" stroke="#0E6651" stroke-width="2"/>
                        <path d="M24 18L42 30L24 42V18Z" fill="#0E6651"/>
                      </svg>
                    </div>
                    <div class="tutorial-title">
                      <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.255386 0.321777C2.83049 2.3578 6.31413 2.3578 8.88924 0.321777C11.4644 2.3578 14.948 2.3578 17.5231 0.321777V8.21739C17.5231 14.5796 13.9565 20.0315 8.88924 22.3218C3.82178 20.0315 0.255386 14.5796 0.255386 8.21739V0.321777ZM1.44019 8.21955C1.44019 11.0362 2.2044 13.7513 3.652 16.0697C4.34907 17.1891 5.19048 18.1897 6.15205 19.046C6.99131 19.7943 7.91162 20.4199 8.89114 20.9114C9.87071 20.4199 10.7891 19.7943 11.6303 19.046C12.5921 18.1897 13.4333 17.1891 14.1303 16.0697C15.576 13.7513 16.3422 11.0362 16.3422 8.21955V2.49792C15.3527 2.92479 14.2963 3.14499 13.21 3.14499C11.6777 3.14499 10.2004 2.70481 8.89304 1.86812C7.58575 2.70715 6.10865 3.14499 4.57616 3.14499C3.49014 3.14499 2.43362 2.92479 1.44426 2.49792V8.21955H1.44019Z" fill="#0E6651"/>
                        <path d="M13.2061 4.22285C13.9348 4.22285 14.6515 4.13458 15.3508 3.95991V8.22135C15.3508 10.8222 14.6457 13.3262 13.3106 15.4655C12.667 16.4985 11.8909 17.4217 11.0022 18.2133C10.3466 18.7954 9.63755 19.3001 8.88725 19.7165V3.09497C10.2202 3.83475 11.7012 4.22285 13.2061 4.22285Z" fill="#0E6651"/>
                      </svg>
                      <span>Retirement Buffer Lifetime Income</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Modal -->
    <div
      v-if="showVideoModal"
      class="modal fade show d-block"
      tabindex="-1"
      style="background-color: rgba(0, 0, 0, 0.8)"
      @click.self="closeVideo"
    >
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ currentVideoTitle }}</h5>
            <button
              type="button"
              class="btn-close"
              @click="closeVideo"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body p-0">
            <div style="position: relative; padding-bottom: 56.25%; height: 0;">
              <iframe
                :src="currentVideoUrl"
                frameborder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    <fotter-component />
  </div>
</template>

<script>
import NavbarComponent from "./../components/common/UserNavbarComponent.vue";
import FotterComponent from "./../components/common/UserFooterComponent.vue";
import HeaderComponent from "./../components/user-dashboard/HeaderComponent.vue";
import SidebarComponent from "./../components/user-dashboard/SidebarComponent.vue";

export default {
  components: {
    NavbarComponent,
    FotterComponent,
    HeaderComponent,
    SidebarComponent,
  },
  data() {
    return {
      showVideoModal: false,
      currentVideoUrl: "",
      currentVideoTitle: "",
      videos: {
        "comparative-analysis": {
          url: "https://www.loom.com/embed/3d3bdaeb191c404584612bf09993f424?sid=9dbcec73-1294-4087-b5da-46202dd69770",
          title: "Comparative Analysis Walkthrough"
        },
        "index-strategy": {
          url: "https://www.loom.com/embed/424bdfbf478043e89845ce77ece619cd?sid=33827da9-9425-4fbe-a221-8bd2bdb2407b",
          title: "Index Strategy Calculator Walkthrough"
        },
        "tax-scorecard": {
          url: "https://www.loom.com/embed/1e4cf0a97ac24cdca865349c645f3865?sid=1ac44a27-646a-4ef7-89b4-8295cd9e13db",
          title: "Tax Scorecard Walkthrough"
        },
        "retirement-buffer-accumulation": {
          url: "https://www.loom.com/embed/0f55739ce6b3438c91ebf5842d9e2365?sid=05020b68-5164-4a89-bb16-e0fa941db886",
          title: "Retirement Buffer - Accumulation Walkthrough"
        },
        "retirement-buffer-income": {
          url: "https://www.loom.com/embed/a072ca549abc4b158e38e39c958eb5f7?sid=f0a98282-c1ae-4c3e-8f8f-742e2de5bad0",
          title: "Retirement Buffer - Lifetime Income Walkthrough"
        }
      }
    };
  },
  methods: {
    openVideo(videoKey) {
      const video = this.videos[videoKey];
      if (video) {
        this.currentVideoUrl = video.url;
        this.currentVideoTitle = video.title;
        this.showVideoModal = true;
      }
    },
    closeVideo() {
      this.showVideoModal = false;
      this.currentVideoUrl = "";
      this.currentVideoTitle = "";
    }
  }
};
</script>

<style scoped>
.tutorials-header {
  padding: 0 0 20px 0;
  margin-top: -10px;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 30px;
}

.tutorials-header h1 {
  font-size: 28px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.tutorials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 0 20px 40px;
}

.tutorial-card {
  background: #f8f9fa;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 40px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tutorial-card:not(.disabled):hover {
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.tutorial-card.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.tutorial-card-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.play-button-circle {
  display: flex;
  align-items: center;
  justify-content: center;
}

.play-button-circle.active svg circle {
  stroke: #0E6651;
}

.play-button-circle.active svg path {
  fill: #0E6651;
}

.tutorial-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #666;
}

.tutorial-card:not(.disabled) .tutorial-title {
  color: #0E6651;
}

.tutorial-card.disabled .tutorial-title span {
  color: #D3D3D3;
}

@media (max-width: 992px) {
  .tutorials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .tutorials-grid {
    grid-template-columns: 1fr;
  }
}
</style>
