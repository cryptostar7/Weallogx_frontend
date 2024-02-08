<template lang="">
  <main class="right-area">
    <div class="right-area-inner">
      <div class="right-area-wrapper">
        <section class="retirement_buffer_section">
          <div class="retirement_buffer_section_head_div">
            <h1>Retirement Buffer</h1>
            <router-link
              to="/retirement-buffer/accumulation/params"
              class="head_back_btn"
              ><img src="@/assets/images/icons/head-arrow.svg" alt="Arrow" />
              Back to Parameters Screen</router-link
            >
          </div>
          <div class="head_all_tabs">
            <div
              class="nav table_graph_setting_tab nav-pills"
              role="tablist"
              aria-orientation="vertical"
            >
              <div
                class="active"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-table"
                type="button"
                role="tab"
                aria-controls="v-pills-tabe"
                aria-selected="true"
                @click="$store.dispatch('updateRbaSliderWidth', 'table')"
              >
                <svg
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_80_286" fill="white">
                    <rect width="23.0769" height="20" rx="1" />
                  </mask>
                  <rect
                    width="23.0769"
                    height="20"
                    rx="1"
                    stroke="#0E6651"
                    stroke-width="3"
                    mask="url(#path-1-inside-1_80_286)"
                  />
                  <rect
                    x="11.2494"
                    y="4.90382"
                    width="0.576923"
                    height="14.8077"
                    rx="0.288462"
                    stroke="#0E6651"
                    stroke-width="0.576923"
                  />
                  <rect
                    x="22.7877"
                    y="4.90382"
                    width="0.576923"
                    height="22.5"
                    rx="0.288462"
                    transform="rotate(90 22.7877 4.90382)"
                    stroke="#0E6651"
                    stroke-width="0.576923"
                  />
                  <rect
                    x="22.7877"
                    y="9.51917"
                    width="0.576923"
                    height="22.5"
                    rx="0.288462"
                    transform="rotate(90 22.7877 9.51917)"
                    stroke="#0E6651"
                    stroke-width="0.576923"
                  />
                  <rect
                    x="22.7877"
                    y="14.1347"
                    width="0.576923"
                    height="22.5"
                    rx="0.288462"
                    transform="rotate(90 22.7877 14.1347)"
                    stroke="#0E6651"
                    stroke-width="0.576923"
                  />
                </svg>
              </div>
              <div
                data-bs-toggle="pill"
                data-bs-target="#v-pills-graph"
                type="button"
                role="tab"
                aria-controls="v-pills-graph"
                aria-selected="false"
                class=""
                @click="$store.dispatch('updateRbaSliderWidth', 'graph')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="21"
                  viewBox="0 0 29 21"
                  fill="none"
                >
                  <path
                    d="M2.26008 20.4837C3.32445 20.4837 4.19133 19.5976 4.19133 18.509C4.19133 18.3997 4.17633 18.293 4.16008 18.1891L10.4482 14.8935C10.7882 15.198 11.2282 15.3891 11.7145 15.3891C12.7788 15.3891 13.6457 14.503 13.6457 13.4144C13.6457 13.0322 13.5348 12.6792 13.3504 12.3759L17.5935 4.88838C17.7032 4.90787 17.8145 4.92289 17.9295 4.92289C18.4751 4.92289 18.967 4.68771 19.3188 4.31386L24.7566 7.3299C24.7307 7.45995 24.716 7.59288 24.716 7.73123C24.716 8.82115 25.5826 9.70593 26.6473 9.70593C27.7116 9.70593 28.5785 8.81987 28.5785 7.73123C28.5785 6.64292 27.7116 5.75654 26.6473 5.75654C26.1066 5.75654 25.6191 5.9866 25.2685 6.35342L19.8241 3.33323C19.8485 3.20861 19.862 3.08144 19.862 2.94979C19.862 1.86115 18.9954 0.975098 17.9307 0.975098C16.8663 0.975098 15.9995 1.86115 15.9995 2.94979C15.9995 3.52175 16.242 4.03268 16.6238 4.39407L12.5229 11.6282C12.2766 11.5103 12.0045 11.4413 11.7145 11.4413C10.6501 11.4413 9.78445 12.3273 9.78445 13.416C9.78445 13.6029 9.81852 13.7815 9.8657 13.9531L3.68758 17.1909C3.33258 16.7905 2.82758 16.5343 2.26008 16.5343C1.1957 16.5343 0.330078 17.4207 0.330078 18.509C0.330078 19.5976 1.1957 20.4837 2.26008 20.4837ZM26.6457 6.86435C27.1129 6.86435 27.4923 7.25354 27.4923 7.73123C27.4923 8.20925 27.1129 8.59684 26.6457 8.59684C26.1785 8.59684 25.7995 8.20925 25.7995 7.73123C25.7995 7.25354 26.1785 6.86435 26.6457 6.86435ZM17.9282 2.08291C18.3954 2.08291 18.7745 2.47209 18.7745 2.94979C18.7745 3.42749 18.3954 3.81508 17.9282 3.81508C17.4607 3.81508 17.0816 3.42621 17.0816 2.94979C17.0816 2.47209 17.4623 2.08291 17.9282 2.08291ZM11.7132 12.5491C12.1804 12.5491 12.561 12.9367 12.561 13.4144C12.561 13.8921 12.1804 14.28 11.7132 14.28C11.246 14.28 10.8666 13.8921 10.8666 13.4144C10.8666 12.9367 11.246 12.5491 11.7132 12.5491ZM2.26008 17.6437C2.60414 17.6437 2.89664 17.8555 3.02914 18.1559V18.1575C3.02914 18.1588 3.03195 18.1588 3.03195 18.16C3.07789 18.2668 3.10633 18.3844 3.10633 18.509C3.10633 18.987 2.72602 19.3746 2.25883 19.3746C1.79133 19.3746 1.41227 18.987 1.41227 18.509C1.41227 18.0313 1.79289 17.6437 2.26008 17.6437Z"
                    fill="#0E6651"
                  />
                </svg>
              </div>
              <div
                data-bs-toggle="modal"
                data-bs-target="#settings"
                @click="$store.dispatch('updateRbaSliderWidth', 'modal')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5.50203 10.0842C4.71214 10.0842 4.07215 9.42157 4.07215 8.60428C4.07215 7.78699 4.71214 7.12464 5.50203 7.12464C6.29167 7.12464 6.93191 7.78699 6.93191 8.60428C6.93191 9.42157 6.29167 10.0842 5.50203 10.0842ZM10.8064 7.84091L10.5196 7.79699C10.1115 7.73412 9.76931 7.44582 9.62779 7.04493C9.58536 6.92472 9.53836 6.80714 9.48653 6.69166C9.31224 6.3034 9.35518 5.84781 9.60162 5.50348L9.77439 5.26226C9.84273 5.16704 9.83333 5.0342 9.75203 4.95029L9.03277 4.20587C8.95147 4.12195 8.82342 4.11196 8.7312 4.18272L8.49822 4.36159C8.16565 4.61648 7.72535 4.66094 7.34985 4.48049C7.23882 4.42683 7.125 4.37816 7.00889 4.33423C6.6217 4.18798 6.34273 3.83365 6.28227 3.41146L6.23958 3.11448C6.22281 2.99716 6.12525 2.9101 6.01067 2.9101H4.99314C4.87856 2.9101 4.78125 2.99716 4.76423 3.11448L4.72154 3.41146C4.66108 3.83365 4.38237 4.18798 3.99492 4.33423C3.87881 4.37816 3.76524 4.42683 3.65396 4.48049C3.27871 4.66094 2.83841 4.61648 2.50584 4.36159L2.27261 4.18272C2.18064 4.11196 2.05234 4.12195 1.97129 4.20587L1.25178 4.95029C1.17073 5.0342 1.16108 5.16704 1.22942 5.26226L1.40218 5.50348C1.64863 5.84781 1.69156 6.3034 1.51728 6.69166C1.4657 6.80714 1.41844 6.92472 1.37602 7.04493C1.2345 7.44582 0.892276 7.73412 0.484248 7.79699L0.197409 7.84091C0.0840955 7.85854 0 7.95902 0 8.07792V9.1309C0 9.24953 0.0840955 9.35054 0.197409 9.3679L0.484248 9.4121C0.892276 9.4747 1.2345 9.763 1.37602 10.1639C1.41844 10.2841 1.4657 10.4019 1.51728 10.5169C1.69156 10.9054 1.64863 11.3613 1.40218 11.7053L1.22942 11.9463C1.16108 12.0418 1.17073 12.1746 1.25178 12.2585L1.97129 13.0032C2.05234 13.0869 2.18064 13.0969 2.27261 13.0264L2.50584 12.8472C2.83841 12.5923 3.27871 12.5479 3.65396 12.7283C3.76524 12.7817 3.87881 12.8304 3.99492 12.8743C4.38237 13.0208 4.66108 13.3752 4.72154 13.7974L4.76423 14.0943C4.78125 14.2117 4.87856 14.2987 4.99314 14.2987H6.01067C6.12525 14.2987 6.22281 14.2117 6.23958 14.0943L6.28227 13.7974C6.34273 13.3752 6.6217 13.0208 7.00889 12.8743C7.125 12.8304 7.23882 12.7817 7.34985 12.7283C7.72535 12.5479 8.16565 12.5923 8.49822 12.8472L8.7312 13.0264C8.82342 13.0969 8.95147 13.0869 9.03277 13.0032L9.75203 12.2585C9.83333 12.1746 9.84273 12.0418 9.77439 11.9463L9.60162 11.7053C9.35518 11.3613 9.31224 10.9054 9.48653 10.5169C9.53836 10.4019 9.58536 10.2841 9.62779 10.1639C9.76931 9.763 10.1115 9.4747 10.5196 9.4121L10.8064 9.3679C10.9197 9.35054 11.0038 9.24953 11.0038 9.1309V8.07792C11.0038 7.95902 10.9197 7.85854 10.8064 7.84091ZM14.4982 15.7784C13.7086 15.7784 13.0683 15.116 13.0683 14.2987C13.0683 13.4814 13.7086 12.8188 14.4982 12.8188C15.2879 12.8188 15.9281 13.4814 15.9281 14.2987C15.9281 15.116 15.2879 15.7784 14.4982 15.7784ZM19.8028 13.5351L19.516 13.4909C19.108 13.4283 18.7657 13.14 18.624 12.7391C18.5818 12.6189 18.5345 12.5011 18.4827 12.3861C18.3084 11.9976 18.3516 11.5417 18.5981 11.1979L18.7706 10.9564C18.8389 10.8612 18.8295 10.7284 18.7485 10.6445L18.029 9.89978C17.9479 9.81587 17.8196 9.80614 17.7274 9.87664L17.4944 10.0555C17.1618 10.3107 16.7215 10.3554 16.3463 10.1747C16.235 10.1213 16.1212 10.0726 16.0053 10.0287C15.6179 9.88216 15.3392 9.52784 15.2785 9.10565L15.236 8.80867C15.2193 8.69135 15.1217 8.60428 15.0069 8.60428H13.9896C13.8747 8.60428 13.7774 8.69135 13.7607 8.80867L13.718 9.10565C13.6573 9.52784 13.3786 9.88216 12.9914 10.0287C12.8753 10.0726 12.7614 10.1213 12.6502 10.1747C12.2749 10.3554 11.8346 10.3107 11.5023 10.0555L11.2691 9.87664C11.1768 9.80614 11.0485 9.81587 10.9675 9.89978L10.2482 10.6445C10.1669 10.7284 10.1575 10.8612 10.2259 10.9564L10.3986 11.1979C10.6448 11.5417 10.6878 11.9976 10.5135 12.3861C10.4619 12.5011 10.4146 12.6189 10.3722 12.7391C10.2309 13.14 9.88846 13.4283 9.48069 13.4909L9.1936 13.5351C9.08028 13.5525 8.99644 13.6535 8.99644 13.7721V14.8251C8.99644 14.9437 9.08028 15.0447 9.1936 15.0621L9.48069 15.106C9.88846 15.1689 10.2309 15.4572 10.3722 15.8581C10.4146 15.9783 10.4619 16.0961 10.5135 16.2111C10.6878 16.5996 10.6448 17.0552 10.3986 17.3993L10.2259 17.6407C10.1575 17.736 10.1669 17.8688 10.2482 17.9527L10.9675 18.6974C11.0485 18.781 11.1768 18.791 11.2691 18.7203L11.5023 18.5414C11.8346 18.2863 12.2749 18.2421 12.6502 18.4225C12.7614 18.4759 12.8753 18.5248 12.9914 18.5688C13.3788 18.715 13.6573 19.0693 13.718 19.4915L13.7607 19.7885C13.7774 19.9058 13.8747 19.9929 13.9896 19.9929H15.0069C15.1217 19.9929 15.2193 19.9058 15.236 19.7885L15.2785 19.4915C15.3392 19.0693 15.6179 18.715 16.0053 18.5688C16.1212 18.5248 16.235 18.4759 16.3463 18.4225C16.7215 18.2421 17.1618 18.2863 17.4944 18.5414L17.7274 18.7203C17.8196 18.791 17.9479 18.781 18.029 18.6974L18.7485 17.9527C18.8295 17.8688 18.8389 17.736 18.7706 17.6407L18.5981 17.3993C18.3516 17.0552 18.3084 16.5996 18.4827 16.2111C18.5345 16.0961 18.5818 15.9783 18.624 15.8581C18.7657 15.4572 19.108 15.1689 19.516 15.106L19.8028 15.0621C19.9162 15.0447 20.0003 14.9437 20.0003 14.8251V13.7721C20.0003 13.6535 19.9162 13.5525 19.8028 13.5351ZM13.6966 5.23938C13.1009 5.23938 12.6179 4.73933 12.6179 4.12301C12.6179 3.50642 13.1009 3.00663 13.6966 3.00663C14.2924 3.00663 14.7752 3.50642 14.7752 4.12301C14.7752 4.73933 14.2924 5.23938 13.6966 5.23938ZM17.5297 3.5714L17.3224 3.5393C17.0277 3.49406 16.7802 3.28573 16.6778 2.99611C16.6474 2.90931 16.6133 2.82408 16.5757 2.74096C16.4499 2.46029 16.4809 2.13095 16.659 1.88237L16.7838 1.70797C16.8331 1.63932 16.8262 1.54304 16.7678 1.48254L16.248 0.944608C16.1893 0.883844 16.0965 0.876741 16.03 0.928036L15.8615 1.05693C15.6212 1.24132 15.3031 1.27368 15.032 1.14321C14.9517 1.10454 14.8694 1.06929 14.7856 1.03746C14.5056 0.931718 14.3044 0.67551 14.2604 0.370639L14.2294 0.156255C14.2175 0.0712912 14.1471 0.00842285 14.0643 0.00842285H13.329C13.2462 0.00842285 13.1758 0.0712912 13.1634 0.156255L13.1329 0.370639C13.0889 0.67551 12.8877 0.931718 12.6077 1.03746C12.5239 1.06929 12.4416 1.10454 12.3613 1.14321C12.0899 1.27368 11.7718 1.24132 11.5315 1.05693L11.3633 0.928036C11.2965 0.876741 11.2038 0.883844 11.1453 0.944608L10.6255 1.48254C10.5671 1.54304 10.56 1.63932 10.6092 1.70797L10.7342 1.88237C10.9123 2.13095 10.9433 2.46029 10.8173 2.74096C10.78 2.82408 10.7459 2.90931 10.7152 2.99611C10.6131 3.28573 10.3656 3.49406 10.0709 3.5393L9.86357 3.5714C9.78176 3.58376 9.72104 3.65662 9.72104 3.74264V4.50337C9.72104 4.58913 9.78176 4.66199 9.86357 4.67462L10.0709 4.70644C10.3656 4.75195 10.6131 4.96029 10.7152 5.2499C10.7459 5.33671 10.78 5.42167 10.8173 5.50506C10.9433 5.78546 10.9123 6.11506 10.7342 6.36364L10.6092 6.53804C10.56 6.60696 10.5671 6.70271 10.6255 6.76347L11.1453 7.3014C11.2038 7.36217 11.2965 7.36901 11.3633 7.31798L11.5315 7.18882C11.7718 7.00442 12.0899 6.9726 12.3613 7.1028C12.4416 7.14147 12.5239 7.17672 12.6077 7.20855C12.8877 7.31429 13.0889 7.57024 13.1329 7.87537L13.1634 8.09002C13.1758 8.17498 13.2462 8.23759 13.329 8.23759H14.0643C14.1471 8.23759 14.2175 8.17498 14.2294 8.09002L14.2604 7.87537C14.3044 7.57024 14.5056 7.31429 14.7856 7.20855C14.8694 7.17672 14.9517 7.14147 15.032 7.1028C15.3031 6.9726 15.6212 7.00442 15.8615 7.18882L16.03 7.31798C16.0965 7.36901 16.1893 7.36217 16.248 7.3014L16.7678 6.76347C16.8262 6.70271 16.8331 6.60696 16.7838 6.53804L16.659 6.36364C16.4809 6.11506 16.4499 5.78546 16.5757 5.50506C16.6133 5.42167 16.6474 5.33671 16.6778 5.2499C16.7802 4.96029 17.0277 4.75195 17.3224 4.70644L17.5297 4.67462C17.6115 4.66199 17.6723 4.58913 17.6723 4.50337V3.74264C17.6723 3.65662 17.6115 3.58376 17.5297 3.5714Z"
                    fill="#0E6651"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div class="tab-content">
            <!-- Table Results -->
            <retirement-buffer-table-results-component
              ref="tableRef"
              :indexType="indexType"
              :accountAllocation="accountAllocation"
              :years="years"
              :indexTypes="indexTypes"
              @setIndexType="(e) => (indexType = e)"
            />
            <!-- Graph Results -->
            <retirement-buffer-graph-results-component
              :indexType="indexType"
              ref="graphRef"
              :accountAllocation="accountAllocation"
              :years="years"
              :indexTypes="indexTypes"
              @setIndexType="(e) => (indexType = e)"
            />
            <!-- Summary Results -->
            <retirement-buffer-summary-result />
            <!-- Disclosure Section -->
            <retirement-buffer-disclosure />
          </div>
        </section>
      </div>
    </div>
  </main>

  <!-- Params Modal -->
  <retirement-buffer-accumulation-form-modal />

  <button class="scroll_top_btn d-none">
    <svg
      width="16"
      height="11"
      viewBox="0 0 16 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="8.07422"
        y="0.750488"
        width="10.5"
        height="3"
        rx="1.5"
        transform="rotate(45 8.07422 0.750488)"
        fill="#147D64"
      />
      <rect
        x="9.73438"
        y="2.87134"
        width="10.5"
        height="3"
        rx="1.5"
        transform="rotate(135 9.73438 2.87134)"
        fill="#147D64"
      />
    </svg>
  </button>
</template>
<script>
import { getNumber } from "../../../../services/helper";
import RetirementBufferDisclosure from "./RetirementBufferDisclosure.vue";
import RetirementBufferAccumulationFormModal from "./RetirementBufferAccumulationFormModal.vue";
import RetirementBufferTableResultsComponent from "./RetirementBufferTableResultsComponent.vue";
import RetirementBufferGraphResultsComponent from "./RetirementBufferGraphResultsComponent.vue";
import RetirementBufferSummaryResult from "./RetirementBufferSummaryResult.vue";

export default {
  components: {
    RetirementBufferAccumulationFormModal,
    RetirementBufferTableResultsComponent,
    RetirementBufferGraphResultsComponent,
    RetirementBufferSummaryResult,
    RetirementBufferDisclosure,
  },
  data() {
    return {
      indexType: "Historical Average",
      indexTypes: ["Historical Average", "Historical Returns"],
    };
  },
  mounted() {
    // Add Comma after 3 digit
    function updateTextView(_obj) {
      var num = getNumber(_obj.value);
      if (num == 0) {
        _obj.value = "";
      } else {
        _obj.value = num.toLocaleString();
      }
    }

    // Comma separated input script
    document.querySelectorAll(".dollar_inp").forEach(function (eachDollarInp) {
      eachDollarInp.addEventListener("input", function () {
        updateTextView(event.target);
        var key = event.keyCode;
        // Only allow numbers to be entered
        if (key < 48 || key > 57) {
          event.preventDefault();
        }
      });
    });

    const scrollBtn = document.querySelector(".scroll_top_btn");
    window.onscroll = function () {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        scrollBtn.classList.remove("d-none");
      } else {
        scrollBtn.classList.add("d-none");
      }
    };

    scrollBtn.addEventListener("click", function () {
      document.body.scrollIntoView();
    });

    // Select dropdown close when click inside
    let selectBtn = document.querySelectorAll(".select-btn");
    selectBtn.forEach((showHide) => {
      showHide.addEventListener("click", () =>
        showHide.closest(".select-menu").classList.toggle("active")
      );
      var allOptions = showHide
        .closest(".select-menu")
        .querySelector(".options")
        .querySelectorAll(".option");
      allOptions.forEach((option) => {
        option.addEventListener("click", (e) => {
          e.stopPropagation();
          let selectedOption = option.querySelector(".option-text").innerText;
          if (option.parentElement) {
            option.parentElement.parentElement
              .querySelector(".select-btn")
              .querySelector(".sBtn-text").value = selectedOption;
            option.parentElement.parentElement.classList.remove("active");
          }
        });
      });
    });

    // Close when click outside
    window.onclick = function (event) {
      if (!event.target.matches(".select-menu")) {
        var sharedowns = document.getElementsByClassName("select-menu");
        var i;
        for (i = 0; i < sharedowns.length; i++) {
          var openSelectdropdown = sharedowns[i];
          if (openSelectdropdown.classList.contains("active")) {
            openSelectdropdown.classList.remove("active");
          }
        }
      }
    };

    // Select dropdown menu open
    var allSelectMenus = document.querySelectorAll(".select-menu");
    allSelectMenus.forEach((eachSelectMenus) => {
      eachSelectMenus.addEventListener("click", function (event) {
        event.stopPropagation();
      });
    });

    // If percent field value greter than 100%
    var percentInput = document.querySelectorAll(
      ".form_section_each_inputs input.percent_inp"
    );
    percentInput.forEach(function (eachPercentInput) {
      eachPercentInput.addEventListener("input", function () {
        if (event.target.value > 100) {
          event.target.value = 100;
          event.preventDefault();
        }
      });
    });

    this.updateSliderRange(); // update weighting slider range
  },
  methods: {
    updateSliderRange: function () {
      let obj = this.inputs;
      if (obj) {
        let marketValue = 100;
        let bufferValue = 0;

        if (!this.marketAlone) {
          marketValue =
            100 - Number((obj.buffer_account_allocation * 100).toFixed(0));

          bufferValue = Number(
            (obj.buffer_account_allocation * 100).toFixed(0)
          );
        }

        this.$refs.tableRef.$refs.sliderRangeRef.setMarketAccountAllocation(
          marketValue
        ); // set market account allocation value in table slider range
        this.$refs.graphRef.$refs.sliderRangeRef.setMarketAccountAllocation(
          marketValue
        ); // set market account allocation value in graph slider range
        this.$refs.tableRef.$refs.sliderRangeRef.setBufferAccountAllocation(
          bufferValue
        ); // set buffer account allocation value in table slider range
        this.$refs.graphRef.$refs.sliderRangeRef.setBufferAccountAllocation(
          bufferValue
        ); // set buffer account allocation value in graph slider range
      }
    },
  },
  computed: {
    inputs() {
      return this.$store.state.data.retirement_buffer.auccumulation_results
        .inputs;
    },
    results() {
      return this.$store.getters.getRetirementBufferResults();
    },
    marketAlone() {
      return this.$store.state.data.retirement_buffer.market_alone;
    },
    accountAllocation() {
      let account_value = this.inputs ? this.inputs.account_value : 0;
      let buffer_account_allocation =
        this.$store.state.data.retirement_buffer.buffer_allocation_weight;

      let marketValue =
        100 - Number((buffer_account_allocation * 100).toFixed(0));

      let bufferValue = Number((buffer_account_allocation * 100).toFixed(0));

      // Market Account Value
      let mav =
        Number(
          ((account_value / 100) * marketValue).toFixed(0)
        ).toLocaleString() || 0;

      // Buffer Account Value
      let bav =
        Number(
          ((account_value / 100) * bufferValue).toFixed(0)
        ).toLocaleString() || 0;

      return { market: mav, buffer: bav };
    },
    years() {
      let array = [];
      if (this.indexType === "Historical Average") {
        if (this.results.market.net_distribution.length)
          for (
            let index = 1;
            index <= this.results.market.net_distribution.length;
            index++
          ) {
            array.push(index);
          }
      } else {
        array =
          this.$store.state.data.retirement_buffer.auccumulation_results.years;
      }
      return array;
    },
  },
  watch: {
    marketAlone(e) {
      if (e) {
        this.$store.dispatch("updateBuffeAccountAllocation", 0);
      } else {
        this.$store.dispatch(
          "updateBuffeAccountAllocation",
          this.inputs.buffer_account_allocation
        );
      }
      this.updateSliderRange();
    },
    indexType(e) {
      if (e !== "Historical Returns") {
        this.$store.dispatch("updateRbaSortType", "average");
        this.$store.dispatch("retirementBufferMarketAlone", true);
        // this.$store.dispatch("updateRbaNetDistributionDisplay", false);
        this.$refs.tableRef.$refs.filterResultRef.getAccumulationResults(
          "average"
        );
      } else {
        if (this.$store.state.data.retirement_buffer.sort_type === "average") {
          this.$refs.tableRef.$refs.filterResultRef.getAccumulationResults(
            "none"
          );
        }
        this.$store.dispatch("updateRbaSortType", "none");
      }
    },
    results() {
      this.updateSliderRange();
    },
    "$store.state.data.retirement_buffer.slider_width_update"(e) {
      if (e != "modal") {
        this.updateSliderRange();
        if (this.marketAlone) {
          this.$store.dispatch("updateRbaNetDistributionDisplay", false);
        }
      }
    },
  },
};
</script>
<style lang=""></style>
