<template lang="">
  <main class="right-area">
    <div class="right-area-inner">
      <div class="right-area-wrapper">
        <section class="padding_right_section">
          <div class="common_box_div">
            <div class="common_heading_div" style="position: relative; display: flex; justify-content: center; align-items: center;">
              <h1 style="margin: 0; text-align: center;">Retirement Buffer</h1>
              <div style="position: absolute; right: 0; top: 50%; transform: translateY(-50%);" class="d-flex align-items-center gap-3">
                <a
                  href="javascript:void(0)"
                  @click="showVideoModal = true"
                  class="walkthrough-button"
                >
                  Walkthrough
                </a>
              </div>
            </div>
            <!-- Form -->
            <div class="after_heading_div">
              <div class="accumulation_strategy_div">
                <div class="accumulation_strategy_box">
                  <retirement-buffer-params-form ref="formRef" @setAllowSubmit="(e) => allowSubmit = e"/>
                </div>
                <button
                  :class="`run_btn ${allowSubmit ? '' : 'disable'}`"
                  @click="submitHandler()"
                >
                  Run
                </button>
                <button class="reset_btn" @click="resetForm()">Reset</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- Video Walkthrough Modal -->
    <div
      v-if="showVideoModal"
      class="modal fade show d-block"
      tabindex="-1"
      style="background-color: rgba(0, 0, 0, 0.8)"
      @click.self="showVideoModal = false"
    >
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Retirement Buffer - Accumulation Walkthrough</h5>
            <button
              type="button"
              class="btn-close"
              @click="showVideoModal = false"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body p-0">
            <div style="position: relative; padding-bottom: 56.25%; height: 0;">
              <iframe
                src="https://www.loom.com/embed/0f55739ce6b3438c91ebf5842d9e2365?sid=05020b68-5164-4a89-bb16-e0fa941db886"
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
  </main>
</template>
<script>
import { getNumber } from "../../../../services/helper";
import RetirementBufferParamsForm from "./RetirementBufferParamsForm.vue";
export default {
  components: { RetirementBufferParamsForm },
  data() {
    return {
      allowSubmit : false,
      showVideoModal: false,
    }
  },
  mounted() {
    // Add Comma after 3 digit
    function updateTextView(_obj) {
      var num = getNumber(_obj.value);
      if (num == 0) {
        _obj.value = "";
      } else {
        _obj.value = num.toLocaleString('en-US');
      }
    }
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
  },
  methods: {
    resetForm: function () {
      this.$refs.formRef.resetForm();
    },
    submitHandler: function () {
      // Reset the default settings of result page view
      this.$store.dispatch("updateRbaSortType", "average");
      this.$store.dispatch("retirementBufferMarketAlone", true);
      this.$store.dispatch("updateRbaNetDistributionDisplay", false);

      // Submite the form
      this.$refs.formRef.submitForm();
    }
  },
};
</script>
<style scoped>
.walkthrough-button {
  display: inline-grid;
  place-items: center;
  padding: 0 25px;
  height: 45px;
  background: #e67e22;
  color: #fff;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 15px;
  white-space: nowrap;
}

.walkthrough-button:hover {
  background: #d35400;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
}
</style>
