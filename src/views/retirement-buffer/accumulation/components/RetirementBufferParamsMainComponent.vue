<template lang="">
  <main class="right-area">
    <div class="right-area-inner">
      <div class="right-area-wrapper">
        <section class="padding_right_section">
          <div class="common_box_div">
            <div class="common_heading_div">
              <h1>Retirement Buffer</h1>
            </div>
            <!-- Form -->
            <div class="after_heading_div">
              <div class="accumulation_strategy_div">
                <div class="accumulation_strategy_box">
                  <!-- <retirement-buffer-params-form ref="formRef" @setAllowSubmit="(e) => allowSubmit = e"/> -->
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
  </main>
</template>
<script>
// import { getNumber } from "../../../../services/helper";
import RetirementBufferParamsForm from "./RetirementBufferParamsForm.vue";
export default {
  components: { RetirementBufferParamsForm },
  data() {
    return {
      allowSubmit : false
    }
  },
  mounted() {
    // // Add Comma after 3 digit
    // function updateTextView(_obj) {
    //   var num = getNumber(_obj.value);
    //   if (num == 0) {
    //     _obj.value = "";
    //   } else {
    //     _obj.value = num.toLocaleString();
    //   }
    // }

    // // Comma separated input script
    // document.querySelectorAll(".dollar_inp").forEach(function (eachDollarInp) {
    //   eachDollarInp.addEventListener("input", function () {
    //     updateTextView(event.target);
    //     var key = event.keyCode;
    //     // Only allow numbers to be entered
    //     if (key < 48 || key > 57) {
    //       event.preventDefault();
    //     }
    //   });
    // });

    // // Select dropdown close when click inside
    // let selectBtn = document.querySelectorAll(".select-btn");
    // selectBtn.forEach((showHide) => {
    //   showHide.addEventListener("click", () =>
    //     showHide.closest(".select-menu").classList.toggle("active")
    //   );
    //   var allOptions = showHide
    //     .closest(".select-menu")
    //     .querySelector(".options")
    //     .querySelectorAll(".option");
    //   allOptions.forEach((option) => {
    //     option.addEventListener("click", (e) => {
    //       e.stopPropagation();
    //       let selectedOption = option.querySelector(".option-text").innerText;
    //       if (option.parentElement) {
    //         option.parentElement.parentElement
    //           .querySelector(".select-btn")
    //           .querySelector(".sBtn-text").value = selectedOption;
    //         option.parentElement.parentElement.classList.remove("active");
    //       }
    //     });
    //   });
    // });

    // // Close when click outside
    // window.onclick = function (event) {
    //   if (!event.target.matches(".select-menu")) {
    //     var sharedowns = document.getElementsByClassName("select-menu");
    //     var i;
    //     for (i = 0; i < sharedowns.length; i++) {
    //       var openSelectdropdown = sharedowns[i];
    //       if (openSelectdropdown.classList.contains("active")) {
    //         openSelectdropdown.classList.remove("active");
    //       }
    //     }
    //   }
    // };

    // // Select dropdown menu open 
    // var allSelectMenus = document.querySelectorAll(".select-menu");
    // allSelectMenus.forEach((eachSelectMenus) => {
    //   eachSelectMenus.addEventListener("click", function (event) {
    //     event.stopPropagation();
    //   });
    // });

    // // If percent field value greter than 100%
    // var percentInput = document.querySelectorAll(
    //   ".form_section_each_inputs input.percent_inp"
    // );
    // percentInput.forEach(function (eachPercentInput) {
    //   eachPercentInput.addEventListener("input", function () {
    //     if (event.target.value > 100) {
    //       event.target.value = 100;
    //       event.preventDefault();
    //     }
    //   });
    // });
  },
  methods: {
    resetForm: function () {
      this.$refs.formRef.resetForm();
    },
    submitHandler: function () {
      this.$refs.formRef.submitForm();
    }
  },
};
</script>
<style lang=""></style>
