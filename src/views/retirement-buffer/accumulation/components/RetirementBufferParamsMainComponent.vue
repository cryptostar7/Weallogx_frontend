<template lang="">
  <main class="right-area">
    <div class="right-area-inner">
      <div class="right-area-wrapper">
        <section class="padding_right_section">
          <div class="common_box_div">
            <div class="common_heading_div">
              <h1>Retirement Buffer</h1>
            </div>
            <div class="after_heading_div">
              <div class="accumulation_strategy_div">
                <div class="accumulation_strategy_box">
                  <div class="accumulation_strategy_box_head">
                    <h2>Accumulation Strategy</h2>
                    <img
                      src="@/assets/images/icons/analytics.svg"
                      alt="Analytics"
                    />
                  </div>
                  <div class="accumulation_strategy_inner_box">
                    <p class="form_section_para">Account Details</p>
                    <div class="form_section_input_row">
                      <div class="form_section_each_inputs width25">
                        <div class="form_section_label_div">
                          <label for="total-balance" class="main_label"
                            >Total Balance</label
                          >
                        </div>
                        <div class="form_section_input_div">
                          <input
                            type="text"
                            placeholder="Total Balance"
                            class="dollar_inp"
                            id="total-balance"
                          />
                          <span class="dollar">$</span>
                        </div>
                      </div>
                      <div class="form_section_each_inputs width25">
                        <div class="form_section_label_div">
                          <label for="account-type" class="main_label"
                            >Account Type</label
                          >
                        </div>
                        <div class="select-menu accumulation_select_menu">
                          <div class="select-btn">
                            <input
                              type="text"
                              class="sBtn-text"
                              value="Taxable"
                              readonly="true"
                              id="account-type"
                            />
                            <i
                              ><img
                                src="@/assets/images/icons/select-chevron.svg"
                                alt="Chevron"
                            /></i>
                          </div>
                          <ul class="options">
                            <li class="option active">
                              <span class="option-text">Taxable</span>
                            </li>
                            <li class="option">
                              <span class="option-text">Pre-tax</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="form_section_each_inputs width25">
                        <div class="form_section_label_div">
                          <label for="annual-ditribution" class="main_label"
                            >Annual Distribution</label
                          >
                          <div class="label-right-div">
                            <label for="selectDollar" class="label_checkbox">
                              <input
                                type="radio"
                                name="annual-ditribution"
                                checkBoxAttr="1"
                                id="selectDollar"
                                hidden
                                checked
                              />
                              <label for="selectDollar"></label>
                              <span>$</span>
                            </label>
                            <label for="selectPercent" class="label_checkbox">
                              <input
                                type="radio"
                                name="annual-ditribution"
                                checkBoxAttr="2"
                                id="selectPercent"
                                hidden
                              />
                              <label for="selectPercent"></label>
                              <span>%</span>
                            </label>
                          </div>
                        </div>
                        <div class="form_section_input_div">
                          <input
                            type="text"
                            placeholder="Total Balance"
                            class="dollar_inp multiTypeInp_1"
                            id="annual-ditribution"
                          />
                          <span class="dollar">$</span>
                        </div>
                        <div class="form_section_input_div d-none">
                          <input
                            type="number"
                            placeholder="Total Balance"
                            class="percent_inp multiTypeInp_2"
                          />
                          <span class="percent">%</span>
                        </div>
                      </div>
                      <div class="form_section_each_inputs width25">
                        <div class="form_section_label_div">
                          <label for="tax-rate" class="main_label"
                            >Tax Rate
                            <span class="optional">(optional)</span></label
                          >
                        </div>
                        <div class="form_section_input_div">
                          <input
                            type="number"
                            placeholder="Total Balance"
                            class="percent_inp"
                            id="tax-rate"
                          />
                          <span class="percent">%</span>
                        </div>
                      </div>
                    </div>
                    <p class="form_section_para mt-3">Allocation</p>
                    <div class="form_section_input_row">
                      <div class="form_section_each_inputs width20">
                        <div class="form_section_label_div">
                          <label for="market-account-value" class="main_label"
                            >Market Account Value</label
                          >
                        </div>
                        <div class="form_section_input_div">
                          <input
                            type="text"
                            placeholder="Total Balance"
                            class="dollar_inp"
                            id="market-account-value"
                          />
                          <span class="dollar">$</span>
                        </div>
                      </div>
                      <div class="slider_main split p-relative">
                        <div id="split_left" class="split_left">
                          <span class="left_span" id="left_span">50</span>%
                        </div>
                        <!-- <div class="split_bar"> -->
                        <div id="split_bar" class="split_bar">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="10"
                            viewBox="0 0 6 10"
                            fill="none"
                          >
                            <rect
                              width="6.58344"
                              height="1.88288"
                              rx="0.941442"
                              transform="matrix(-0.707042 -0.707171 0.707043 -0.70717 4.67578 9.70801)"
                              fill="white"
                            />
                            <rect
                              width="6.58479"
                              height="1.88055"
                              rx="0.940273"
                              transform="matrix(0.706849 -0.707364 0.706848 0.707365 0.0117188 4.948)"
                              fill="white"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="10"
                            viewBox="0 0 6 10"
                            fill="none"
                          >
                            <rect
                              width="6.58344"
                              height="1.88288"
                              rx="0.941442"
                              transform="matrix(0.706848 0.707365 -0.706849 0.707365 1.32617 0)"
                              fill="white"
                            />
                            <rect
                              width="6.58479"
                              height="1.88055"
                              rx="0.940273"
                              transform="matrix(-0.706849 0.707365 -0.706848 -0.707365 5.99023 4.76001)"
                              fill="white"
                            />
                          </svg>

                          <!-- </div> -->
                        </div>
                        <div id="split_right" class="split_right">
                          <span class="right_span" id="right_span">50</span>%
                        </div>
                      </div>
                      <div class="form_section_each_inputs width20">
                        <div class="form_section_label_div">
                          <label for="buffer-account-value" class="main_label"
                            >Buffer Account Value</label
                          >
                        </div>
                        <div class="form_section_input_div">
                          <input
                            type="text"
                            placeholder="Total Balance"
                            class="dollar_inp"
                            id="buffer-account-value"
                          />
                          <span class="dollar">$</span>
                        </div>
                      </div>
                    </div>
                    <p class="form_section_para mt-3">Buffer Account</p>
                    <div class="form_section_input_row">
                      <div class="form_section_each_inputs width20">
                        <div class="form_section_label_div">
                          <label for="cap-rate" class="main_label"
                            >Cap Rate
                            <span
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
                                  ></circle>
                                  <circle
                                    id="Ellipse 191"
                                    cx="6.5"
                                    cy="3.5"
                                    r="1"
                                    fill="white"
                                  ></circle>
                                  <rect
                                    id="Rectangle 753"
                                    x="5.75"
                                    y="5.5"
                                    width="1.5"
                                    height="5"
                                    rx="0.75"
                                    fill="white"
                                  ></rect>
                                </g>
                              </svg>
                              <span
                                >What is the buffer account’s cap rate? If none,
                                leave blank.</span
                              >
                            </span>
                          </label>
                        </div>
                        <div class="form_section_input_div">
                          <input
                            type="text"
                            placeholder="Cap Rate"
                            class="percent_inp"
                            id="cap-rate"
                          />
                          <span class="percent">%</span>
                        </div>
                      </div>
                      <div class="form_section_each_inputs width20">
                        <div class="form_section_label_div">
                          <label for="margin" class="main_label"
                            >Margin
                            <span
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
                                  ></circle>
                                  <circle
                                    id="Ellipse 191"
                                    cx="6.5"
                                    cy="3.5"
                                    r="1"
                                    fill="white"
                                  ></circle>
                                  <rect
                                    id="Rectangle 753"
                                    x="5.75"
                                    y="5.5"
                                    width="1.5"
                                    height="5"
                                    rx="0.75"
                                    fill="white"
                                  ></rect>
                                </g>
                                </svg><span
                                >If your buffer account uses a margin or spread,
                                enter it here. If none, leave blank.</span
                              ></span
                            ></label
                          >
                        </div>
                        <div class="form_section_input_div">
                          <input
                            type="text"
                            placeholder="Cap Rate"
                            class="percent_inp"
                            id="margin"
                          />
                          <span class="percent">%</span>
                        </div>
                      </div>
                      <div class="form_section_each_inputs width20">
                        <div class="form_section_label_div">
                          <label for="per-rate" class="main_label"
                            >Par Rate</label
                          >
                        </div>
                        <div class="form_section_input_div">
                          <input
                            type="text"
                            placeholder="Cap Rate"
                            class="percent_inp"
                            id="per-rate"
                          />
                          <span class="percent">%</span>
                        </div>
                      </div>
                      <div class="form_section_each_inputs width20">
                        <div class="form_section_label_div">
                          <label for="floor" class="main_label">Floor</label>
                        </div>
                        <div class="form_section_input_div">
                          <input
                            type="text"
                            placeholder="Cap Rate"
                            class="percent_inp"
                            id="floor"
                            value="0"
                          />
                          <span class="percent">%</span>
                        </div>
                      </div>
                      <div class="form_section_each_inputs width20">
                        <div class="form_section_label_div">
                          <label for="premium-bonus" class="main_label"
                            >Premium Bonus <span class="optional">optional</span
                            ><span
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
                                  ></circle>
                                  <circle
                                    id="Ellipse 191"
                                    cx="6.5"
                                    cy="3.5"
                                    r="1"
                                    fill="white"
                                  ></circle>
                                  <rect
                                    id="Rectangle 753"
                                    x="5.75"
                                    y="5.5"
                                    width="1.5"
                                    height="5"
                                    rx="0.75"
                                    fill="white"
                                  ></rect>
                                </g></svg><span
                                >If your buffer account offers a an upfront
                                premium bonus, enter that amount here.</span
                              ></span
                            >
                          </label>
                        </div>
                        <div class="form_section_input_div">
                          <input
                            type="number"
                            placeholder="Total Balance"
                            class="percent_inp"
                            id="premium-bonus"
                          />
                          <span class="percent">%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  class="run_btn /*disable*/"
                  @click="$router.push('/retirement-buffer/accumulation/result')"
                >
                  Run
                </button>
                <button class="reset_btn">reset</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>
<script>

export default {
mounted(){
  // Make the DIV element draggable:
  let leftSpan = document.getElementById("left_span");
  let rightSpan = document.getElementById("right_span");
  let totalBalanceInput = document.getElementById("total-balance");
  let maInput = document.getElementById("market-account-value");
  let bfInput = document.getElementById("buffer-account-value");

  let totalWidth = document.querySelector(".slider_main").offsetWidth;
  let splitBar = document.getElementById("split_bar");
  let wid = splitBar.offsetWidth;
  let widHalf = wid / 2;
  splitBar.style.left = (totalWidth / 2 - widHalf) + "px";

  window.onresize = () => {
    totalWidth = document.querySelector(".slider_main").offsetWidth;
    splitBar.style.left = (totalWidth * +leftSpan.textContent / 100 - widHalf) + "px";
  }

  totalBalanceInput.addEventListener("input", (e) => {
    let leftSpanValue = Number(leftSpan.textContent);
    totalBalanceInput.style.borderColor = "#dfdfdf";
    let val = getNumber(e.target.value);
    bfInput.value = (val - (val * leftSpanValue / 100).toFixed(0));
    updateTextView(bfInput);
    maInput.value = (val * leftSpanValue / 100).toFixed(0);
    updateTextView(maInput);
  });

  maInput.addEventListener("input", (e) => {
    totalBalanceValue = getNumber(totalBalanceInput.value);
    if(totalBalanceValue <= 0){
        totalBalanceInput.style.borderColor = "#e81111";
        return;
    }else{
        totalBalanceInput.style.borderColor = "#dfdfdf";
        let val = getNumber(e.target.value);
        bfInput.value = (totalBalanceValue - val).toFixed(0);
        updateTextView(bfInput);
        let elmnt = document.getElementById("split_bar");
        let splitLeft = document.getElementById("split_left");
        let splitRight = document.getElementById("split_right");
        let percentVal = (val / totalBalanceValue * 100).toFixed(0);
        
        if(percentVal < 15){
            splitLeft.classList.add("left");
          }else if(percentVal > 85){
            splitRight.classList.add("right");
          }else{
            splitLeft.classList.remove("left");
            splitRight.classList.remove("right");
        }

        if(percentVal < 3){
            elmnt.style.left = 0 + "px";    
        }else if(percentVal >= 100){
            elmnt.style.left = (totalWidth - wid) + "px";
        }else{
            elmnt.style.left = (totalWidth * percentVal / 100 - widHalf) + "px";
        }
        splitLeft.style.width = percentVal + "%";
        splitRight.style.width = (100 - percentVal) + "%";
        leftSpan.textContent = percentVal;
        rightSpan.textContent = 100 - percentVal;
    }    
  }); 

  bfInput.addEventListener("input", (e) => {
    let totalBalanceValue = getNumber(totalBalanceInput.value);
    if(totalBalanceValue <= 0){
        totalBalanceInput.style.borderColor = "#e81111";
        return;
    }else{
        totalBalanceInput.style.borderColor = "#dfdfdf";
        let val = getNumber(e.target.value);
        maInput.value = (totalBalanceValue - val).toFixed(0);
        updateTextView(maInput);
        let elmnt = document.getElementById("split_bar");
        let splitLeft = document.getElementById("split_left");
        let splitRight = document.getElementById("split_right");
        let percentVal = (val / totalBalanceValue * 100).toFixed(0);

        if(percentVal < 15){
            splitRight.classList.add("right");
          }else if(percentVal > 85){
            splitLeft.classList.add("left");
          }else{
            splitLeft.classList.remove("left");
            splitRight.classList.remove("right");
        }        
        if(percentVal < 3){
            elmnt.style.left = (totalWidth - wid) + "px";
        }else if(percentVal >= 100){
            elmnt.style.left = (totalWidth - wid) + "px";
        }else{
            elmnt.style.left = (totalWidth * ((100 - percentVal) / 100) - widHalf) + "px";
        }
        splitLeft.style.width = (100 - percentVal) + "%";
        splitRight.style.width = percentVal + "%";
        leftSpan.textContent = (100 - percentVal);
        rightSpan.textContent = percentVal;
    }    
  });  
let pos1,  pos2,  pos3,  pos4;  
function dragElement(elmnt) {
      pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
      elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    if(getNumber(totalBalanceInput.value) <= 0){
        totalBalanceInput.style.borderColor = "#e81111";
        return;
    }
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
}

    function elementDrag(e) {
      let elmnt = document.getElementById("split_bar");
      let splitLeft = document.getElementById("split_left");
      let splitRight = document.getElementById("split_right");
      e = e || window.event;
      e.preventDefault();
      
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      let actualWidth = totalWidth - wid;

      // Drag the element only left and right
      elmnt.style.top = "11px"; // fixed value for vertical position
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

      let percentVal = (elmnt.offsetLeft / actualWidth * 100).toFixed(0);
      splitLeft.style.width = percentVal + "%";
      splitRight.style.width = (100 - percentVal) + "%";
      if(percentVal < 15){
        splitLeft.classList.add("left");
      }else if(percentVal > 85){
        splitRight.classList.add("right");
      }else{
        splitLeft.classList.remove("left");
        splitRight.classList.remove("right");
      }
      leftSpan.textContent = percentVal;
      rightSpan.textContent = (100 - percentVal);
      maInput.value = (getNumber(totalBalanceInput.value) * percentVal / 100).toFixed(0);
      updateTextView(maInput);
      bfInput.value = (getNumber(totalBalanceInput.value) * (100 - percentVal) / 100).toFixed(0);
      updateTextView(bfInput);
      
      if(elmnt.offsetLeft > (totalWidth - 42)){
        elmnt.style.left = (totalWidth - 42) + "px";
      }else if(elmnt.offsetLeft < 0){
        elmnt.style.left = 0 + "px";
      }
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }

    dragElement(document.getElementById("split_bar"));

    const sideArrow = document.querySelector(".sidebar-arrow-1");
    const indexSidebar = document.querySelector(".indexSidebar");
    const rightArea = document.querySelector(".right-area");
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    sideArrow.addEventListener("click", () => {
        indexSidebar.classList.toggle("collapsed");
        rightArea.classList.toggle("wider");
        totalWidth = document.querySelector(".slider_main").offsetWidth;
        splitBar.style.left = (totalWidth * +leftSpan.textContent / 100 - widHalf) + "px";
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            if (indexSidebar.classList.contains("collapsed")) {
                return new bootstrap.Tooltip(tooltipTriggerEl)
            }
            if (!indexSidebar.classList.contains("collapsed")) {
                return new bootstrap.Tooltip(tooltipTriggerEl).disable();
            }
        })
    });

    if (window.innerWidth > 767 && window.innerWidth < 1200) {
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }

    const accumulationCard = document.querySelectorAll('.accumulation_each_card');
    accumulationCard.forEach(function (eachAccumulationCard) {
        eachAccumulationCard.addEventListener('mouseenter', function () {
            for (var i = 1; i <= accumulationCard.length; i++) {
                document.getElementById('accum_' + i).classList.add('disabled')
            }
            const currentElement = event.target.getAttribute("id");
            document.getElementById(currentElement).classList.remove('disabled')
        })
        eachAccumulationCard.addEventListener('mouseleave', function () {
            for (var i = 1; i <= accumulationCard.length; i++) {
                document.getElementById('accum_' + i).classList.remove('disabled')
            }
        })
    })

    // Add Comma after 3 digit
    function updateTextView(_obj) {
        var num = getNumber(_obj.value);
        if (num == 0) {
            _obj.value = "";
        } else {
            _obj.value = num.toLocaleString();
        }
    }
    function getNumber(_str) {
        var arr = _str.split('');
        var out = new Array();
        for (var cnt = 0; cnt < arr.length; cnt++) {
            if (isNaN(arr[cnt]) == false) {
                out.push(arr[cnt]);
            }
        }
        return Number(out.join(''));
    }
    document.querySelectorAll('.dollar_inp').forEach(function (eachDollarInp) {
        eachDollarInp.addEventListener('input', function () {
            updateTextView(event.target)
            var key = event.keyCode;
            // Only allow numbers to be entered
            if (key < 48 || key > 57) {
                event.preventDefault();
            }
        })
    })

    // Select dropdown
    const selectBtn = document.querySelectorAll(".select-btn");
    selectBtn.forEach((showHide) => {
        showHide.addEventListener("click", () =>
            showHide.closest('.select-menu').classList.toggle("active")
        );
        var allOptions = showHide.closest('.select-menu').querySelector('.options').querySelectorAll('.option');
        allOptions.forEach((option) => {
            option.addEventListener("click", (e) => {
                e.stopPropagation();
                let items = e.target.closest('ul').querySelectorAll('li');
                items.forEach(element => {
                    element.classList.remove('active');
                });
                e.target.closest('li').classList.add('active');
                let selectedOption = option.querySelector(".option-text").innerText;
                option.parentElement.parentElement.querySelector('.select-btn').querySelector('.sBtn-text').value = selectedOption;
                option.parentElement.parentElement.classList.remove("active");
            });
        });
    });

    let dropdowns = document.querySelectorAll('.select-menu');
    dropdowns.forEach(element => {
        element.addEventListener('click', (e) => {
            dropdowns.forEach((item) => {
                if (item.className.includes('active')) {
                    item.classList.remove('active')
                }
            });
            e.target.closest('.select-menu').classList.add('active')
        })
    });

    // Close when click outside
    window.onclick = function (event) {
        if (!event.target.matches('.select-menu')) {

            var sharedowns = document.getElementsByClassName("select-menu");
            var i;
            for (i = 0; i < sharedowns.length; i++) {
                var openSelectdropdown = sharedowns[i];
                if (openSelectdropdown.classList.contains('active')) {
                    openSelectdropdown.classList.remove('active');
                }
            }
        }
    }
    var allSelectMenus = document.querySelectorAll(".select-menu");
    allSelectMenus.forEach((eachSelectMenus) => {
        eachSelectMenus.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    })

    // Swip input field from percent to dollar
    var labelCheckbox = document.querySelectorAll('.label_checkbox input');
    labelCheckbox.forEach(function (eachLAbelCheck) {
        eachLAbelCheck.addEventListener('change', function () {
            for (var i = 1; i <= 2; i++) {
                document.querySelector('.multiTypeInp_' + i).parentElement.classList.add('d-none');
            }
            var attrGet = event.target.getAttribute('checkBoxAttr');
            document.querySelector('.multiTypeInp_' + attrGet).parentElement.classList.remove('d-none');
        })
    })
    // If percent field value greter than 100%
    var percentInput = document.querySelectorAll('.form_section_each_inputs input.percent_inp');
    percentInput.forEach(function (eachPercentInput) {
        eachPercentInput.addEventListener('input', function () {

            if (event.target.value > 100) {
                event.target.value = 100;
                event.preventDefault();
            }

        })
    })
}
};
</script>
<style lang=""></style>
