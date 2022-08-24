<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <section class="main-section">
    <div class="reviewProgressMainDiv py-5">
      <ul class="mt-1 review-progress" id="reviewProgress">
        <li class="active"><RouterLink to="/create-new-scenario" class="nav-link p-0">Scenario Details</RouterLink></li>
        <li class=""><a href="javascript:void(0)" class="nav-link p-0">Illustration Data</a></li>
        <li class=""><a href="javascript:void(0)" class="nav-link p-0">Comparative Vehicles</a></li>
        <li class=""><a href="javascript:void(0)" class="nav-link p-0">Historical Simulations</a></li>
      </ul>
      <RouterLink to="/">
        <img src="@/assets/images/icons/cross.svg" alt="cross" class="ReviewCrossBtn">
      </RouterLink>
    </div>
    <div class="container-fluid">
      <div class="row justify-content-center form-row">
        <div class="col-md-9">
          <div class="main-form-div">
            <div class="main-form-heading">
              <div class="heading-container">
                <h2 class="fs-34 bold-fw main-tab-heading me-2">New Scenario</h2>
              </div>
            </div>
            <div class="form-wrapper side-grey-line">
              <div class="form-wrapper-inner">
                <div class="form-group">
                  <label for="clientSelected" class="fs-14 bold-fw">Client</label>
                  <div class="p-relative">
                    <input type="text" id="clientSelected" placeholder="Select or Start Typing"
                      class="form-control pe-5 autocomplete">
                    <span class="chevron-span">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9.56303 1.06185L5.32039 5.30449C4.92986 5.69501 4.92986 6.32818 5.32039 6.7187C5.71091 7.10923 6.34408 7.10923 6.7346 6.7187L10.9772 2.47606C11.3678 2.08554 11.3678 1.45237 10.9772 1.06185C10.5867 0.671325 9.95355 0.671325 9.56303 1.06185Z"
                          fill="black" />
                        <path
                          d="M6.7183 5.30448L2.47566 1.06184C2.08514 0.671319 1.45197 0.671319 1.06145 1.06184C0.670923 1.45237 0.670923 2.08553 1.06145 2.47606L5.30409 6.7187C5.69461 7.10922 6.32778 7.10922 6.7183 6.7187C7.10883 6.32817 7.10883 5.69501 6.7183 5.30448Z"
                          fill="black" />
                      </svg>
                    </span>
                  </div>
                </div>
                <hr class="hr-separator" size="1.25">
                <div class="form-group">
                  <label for="existingScenario" class="fs-14 bold-fw">Use Existing Scnario</label>
                  <div class="p-relative">
                    <input type="text" id="existingScenario" placeholder="Select or Start Typing" class="form-control pe-5 autocomplete">
                    <span class="chevron-span">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.56303 1.06185L5.32039 5.30449C4.92986 5.69501 4.92986 6.32818 5.32039 6.7187C5.71091 7.10923 6.34408 7.10923 6.7346 6.7187L10.9772 2.47606C11.3678 2.08554 11.3678 1.45237 10.9772 1.06185C10.5867 0.671325 9.95355 0.671325 9.56303 1.06185Z"
                            fill="black" />
                          <path
                            d="M6.7183 5.30448L2.47566 1.06184C2.08514 0.671319 1.45197 0.671319 1.06145 1.06184C0.670923 1.45237 0.670923 2.08553 1.06145 2.47606L5.30409 6.7187C5.69461 7.10922 6.32778 7.10922 6.7183 6.7187C7.10883 6.32817 7.10883 5.69501 6.7183 5.30448Z"
                            fill="black" />
                        </svg>
                      </span>
                    </div>
                </div>
                <span class="or-text-span">or</span>
                <h4 class="form-subheading fs-14 fw-bold">Create From Scratch</h4>
                <div class="form-group pt-2 less">
                  <label for="scenarioName" class="fs-12 medium-fw">Scenario Name</label>
                  <input type="text" id="scenarioName" class="form-control">
                </div>
                <div class="form-group less">
                  <div class="label-group d-flex justify-content-between align-items-center">
                    <label for="scenarioDesc" class="fs-12 medium-fw">Description</label>
                    <span class="fs-12 sem-bold-fw grey-clr-2">Optional</span>
                  </div>
                  <textarea name="" id="scenarioDesc" cols="30" rows="2" class="form-control"></textarea>
                </div>

                <div class="form-group-wrapper">
                  <div class="form-group">
                    <label for="clientAge" class="fs-12 medium-fw">Client Age <span class="regular-fw">Year 1 age on illustration</span></label>
                    <input type="text" id="clientAge" value="68 years old" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="illustratedAge" class="fs-12 medium-fw"># Years to Illustrate</label>
                    <div class="year-input-div">
                      <input type="text" id="illustratedAge" value="" class="form-control year-input">
                      <span class="year-span">years</span>
                    </div>
                  </div>
                </div>

                <ul class="nav nav-tabs tax-rate-tabs" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="simpleTaxRate-tab" data-bs-toggle="tab"
                      data-bs-target="#simpleTaxRate" type="button" role="tab" aria-controls="simpleTaxRate"
                      aria-selected="true">
                      <svg class="simpleTaxRateImg" width="9" height="14" viewBox="0 0 9 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="8" height="4" rx="0.5" stroke="black" />
                        <rect x="0.5" y="9.5" width="8" height="4" rx="0.5" stroke="black" />
                        <rect x="1.25" y="6.75" width="6.5" height="0.5" rx="0.25" fill="white" stroke="black"
                          stroke-width="0.5" />
                      </svg>
                      &nbsp;Simple Tax Rate</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="scheduleTaxRate-tab" data-bs-toggle="tab"
                      data-bs-target="#scheduleTaxRate" type="button" role="tab" aria-controls="scheduleTaxRate"
                      aria-selected="false">
                      <svg class="scheduleTaxRateImg" width="9" height="10" viewBox="0 0 9 10" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.25" y="0.25" width="8.5" height="0.5" rx="0.25" fill="white" stroke="black"
                          stroke-width="0.5" />
                        <rect x="0.25" y="3.25" width="8.5" height="0.5" rx="0.25" fill="white" stroke="black"
                          stroke-width="0.5" />
                        <rect x="0.25" y="6.25" width="8.5" height="0.5" rx="0.25" fill="white" stroke="black"
                          stroke-width="0.5" />
                        <rect x="0.25" y="9.25" width="8.5" height="0.5" rx="0.25" fill="white" stroke="black"
                          stroke-width="0.5" />
                      </svg>

                      &nbsp;Schedule Tax Rate</button>
                  </li>
                </ul>

                <div class="tab-content pt-3 mt-1">
                  <div class="tab-pane fade show active" id="simpleTaxRate" role="tabpanel"
                    aria-labelledby="simpleTaxRate-tab">
                    <div class="form-group-wrapper">
                      <div class="form-group">
                        <label for="firstTaxRate" class="fs-12 medium-fw">First Tax Rate %</label>
                        <div class="percent-input-div">
                          <input type="text" id="firstTaxRate" class="form-control percent-input" required>
                          <span class="percent-span">%</span>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="secondTaxRate" class="fs-12 medium-fw">Second Tax Rate %</label>
                        <div class="percent-input-div">
                          <input type="text" id="secondTaxRate" class="form-control percent-input" required>
                          <span class="percent-span">%</span>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="secondTaxRateYear" class="fs-12 medium-fw">Second Tax Rate Year</label>
                        <select name="" id="secondTaxRateYear" class="form-select form-control">
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4</option>
                          <option value="">5</option>
                          <option value="">6</option>
                          <option value="">7</option>
                          <option value="">8</option>
                          <option value="">9</option>
                          <option value="">10</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="scheduleTaxRate" role="tabpanel" aria-labelledby="scheduleTaxRate-tab">
                    <div class="form-group">
                      <label for="existingSchedule" class="fs-14 bold-fw">Use Existing Schedule</label>
                      <div class="p-relative">
                        <input type="text" id="existingSchedule" class="form-control"
                          placeholder="Select or Start Typing">
                        <span class="chevron-span">
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M9.56303 1.06185L5.32039 5.30449C4.92986 5.69501 4.92986 6.32818 5.32039 6.7187C5.71091 7.10923 6.34408 7.10923 6.7346 6.7187L10.9772 2.47606C11.3678 2.08554 11.3678 1.45237 10.9772 1.06185C10.5867 0.671325 9.95355 0.671325 9.56303 1.06185Z"
                              fill="black" />
                            <path
                              d="M6.7183 5.30448L2.47566 1.06184C2.08514 0.671319 1.45197 0.671319 1.06145 1.06184C0.670923 1.45237 0.670923 2.08553 1.06145 2.47606L5.30409 6.7187C5.69461 7.10922 6.32778 7.10922 6.7183 6.7187C7.10883 6.32817 7.10883 5.69501 6.7183 5.30448Z"
                              fill="black" />
                          </svg>

                        </span>
                      </div>
                    </div>

                    <div class="form-group max-width-320">
                      <table class="table tax-rate-table text-center">
                        <thead>
                          <tr>
                            <th width="50%">Year</th>
                            <th width="50%">Tax Rate %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div class="fs-15">1</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div"><input type="text" class="form-control percent-input" required><span
                                  class="percent-span">%</span></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="fs-15">2</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div"><input type="text" class="form-control percent-input" required><span
                                  class="percent-span">%</span></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="fs-15">3</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div"><input type="text" class="form-control percent-input" required><span
                                  class="percent-span">%</span></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="fs-15">4</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div"><input type="text" class="form-control percent-input" required><span
                                  class="percent-span">%</span></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="fs-15">5</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div"><input type="text" class="form-control percent-input" required><span
                                  class="percent-span">%</span></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="fs-15">6</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div"><input type="text" class="form-control percent-input" required><span
                                  class="percent-span">%</span></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="fs-15">7</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div"><input type="text" class="form-control percent-input" required><span
                                  class="percent-span">%</span></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="fs-15">8</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div"><input type="text" class="form-control percent-input" required><span
                                  class="percent-span">%</span></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="fs-15">9</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div"><input type="text" class="form-control percent-input" required><span
                                  class="percent-span">%</span></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="fs-15">10</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div"><input type="text" class="form-control percent-input" required><span
                                  class="percent-span">%</span></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="fs-15">11</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div"><input type="text" class="form-control percent-input" required><span
                                  class="percent-span">%</span></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="fs-15">12</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div"><input type="text" class="form-control percent-input" required><span
                                  class="percent-span">%</span></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="fs-15">13</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div"><input type="text" class="form-control percent-input" required><span
                                  class="percent-span">%</span></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="fs-15">14</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div"><input type="text" class="form-control percent-input" required><span
                                  class="percent-span">%</span></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="fs-15">15</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div"><input type="text" class="form-control percent-input" required><span
                                  class="percent-span">%</span></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="fs-15">16</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div"><input type="text" class="form-control percent-input" required><span
                                  class="percent-span">%</span></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="fs-15">17</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div"><input type="text" class="form-control percent-input" required><span
                                  class="percent-span">%</span></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="fs-15">18</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div"><input type="text" class="form-control percent-input" required><span
                                  class="percent-span">%</span></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="fs-15">19</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div"><input type="text" class="form-control percent-input" required><span
                                  class="percent-span">%</span></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="fs-15">20</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div"><input type="text" class="form-control percent-input" required><span
                                  class="percent-span">%</span></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="fs-15">21</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div"><input type="text" class="form-control percent-input" required><span
                                  class="percent-span">%</span></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="fs-15">22</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div"><input type="text" class="form-control percent-input" required><span
                                  class="percent-span">%</span></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="fs-15">23</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div"><input type="text" class="form-control percent-input" required><span
                                  class="percent-span">%</span></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="fs-15">24</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div"><input type="text" class="form-control percent-input" required><span
                                  class="percent-span">%</span></div>
                            </td>
                          </tr>
                          <tr>                      
                            <td>
                              <div class="fs-15">25</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div"><input type="text" class="form-control percent-input" required><span
                                  class="percent-span">%</span></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="fs-15">26</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div"><input type="text" class="form-control percent-input" required><span
                                  class="percent-span">%</span></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="fs-15">27</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div"><input type="text" class="form-control percent-input" required><span
                                  class="percent-span">%</span></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="fs-15">28</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div"><input type="text" class="form-control percent-input" required><span
                                  class="percent-span">%</span></div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="pb-3">
                        <div class="form-check form-switch custom-switch pt-2">
                          <input class="form-check-input" type="checkbox" role="switch" id="scheduleTemplateCheckbox">
                          <label class="form-check-label fs-12 semi-bold-fw mb-0" for="scheduleTemplateCheckbox">Save
                            this Schedule as Template</label>
                        </div>

                        <div class="form-group pt-2" id="templateNameDiv" style="display: none;">
                          <label for="templateName" class="fs-12 medium-fw">Template Name</label>
                          <input type="text" id="templateName" class="form-control" value="28 year descending schedule">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="text-center mt-30">
                <router-link to="illustration-data" class="nav-link btn form-next-btn active fs-14"
                  disabled="true">Next</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
    mounted() {
      const templateNameDiv = document.getElementById("templateNameDiv");
    const scheduleTemplateCheckbox = document.getElementById("scheduleTemplateCheckbox");

    scheduleTemplateCheckbox.addEventListener("click", function (e) {
      if (e.target.checked) {
        templateNameDiv.style.display = "block";
      } else {
        templateNameDiv.style.display = "none";
      }
    });

    const clients = [
      "Alberta, Carter",
      "Arnold, Krista",
      "Bryant, Roger",
      "Campbell, Willie",
      "Harrison, Maryann",
      "Peterson, Kristine",
      "Tucker, Delores ",
      "Young, Marjorie",
      "Zebra, Shelly"
    ];

    const existingScenarioList = [
      "Scenario 1",
      "Scenario 2",
      "Scenario 3",
      "Scenario 4",
      "Scenario 5"
    ];

    const existingScheduleList = [
      "Schedule 1",
      "Schedule 2",
      "Schedule 3",
      "Schedule 4",
      "Schedule 5"
    ];

    // Autocomplete dropdown for Clien List
    function autocomplete(inp, arr) {
      var currentFocus;
      inp.addEventListener("focus", function (e) {
        var a, b, i, val = this.value;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          b = document.createElement("DIV");
          b.innerHTML = arr[i];
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          b.addEventListener("click", function (e) {
            console.log(b);
            b.classList.add("active");
            inp.value = this.getElementsByTagName("input")[0].value;
            closeAllLists();
          });

          a.appendChild(b);
        }
      });

      inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase() || arr[i].toUpperCase().includes(val.toUpperCase())) {
            b = document.createElement("DIV");
            b.innerHTML = arr[i].substr(0, val.length);
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            b.addEventListener("click", function (e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
            });
            a.appendChild(b);
          }
        }
      });

      /* Execute a function presses a key on the keyboard: */
      inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) {
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
      });

      function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
      }

      function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
          x[i].classList.remove("autocomplete-active");
        }
      }

      function closeAllLists(elmnt) {
        var x = inp.parentElement.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
          if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
          }
        }
      }
      document.addEventListener("click", function (e) {
        closeAllLists(e.target);
      });
    }

    autocomplete(document.getElementById("clientSelected"), clients);
    autocomplete(document.getElementById("existingScenario"), existingScenarioList);
    autocomplete(document.getElementById("existingSchedule"), existingScheduleList);


    // Percentage Inputs
    const percentInputs = document.querySelectorAll(".percent-input");

    percentInputs.forEach(function (percentInput) {
      percentInput.addEventListener("input", function (e) {
        let parentDiv = e.target.closest(".percent-input-div");
        let len = e.target.value.length;
        if (len > 3) {
          actualValue = e.target.value.slice(0, len - 1);
          e.target.value = actualValue;
          alert("Please enter valid percentage value.");
          return false;
        }
        if (len == 0) {
          e.target.value = "";
          parentDiv.classList.remove("hide-percent");
        } else {
          e.target.value = `${e.target.value}%`;
          let valuewithPercent = `${e.target.value.split("%").join("")}%`;
          e.target.value = valuewithPercent;
          parentDiv.classList.add("hide-percent");
        }
      });
      
      percentInput.addEventListener("keydown", function (e) {
        let parentDiv = e.target.closest(".percent-input-div");
        if (e.keyCode == 8) {
          let len = e.target.value.length;
          valueAfterDelete = e.target.value.slice(0, len - 2);
          let valuewithPercent = `${valueAfterDelete}%`;
          e.target.value = valuewithPercent;

          if (len <= 2) {
            e.target.value = "";
            parentDiv.classList.remove("hide-percent");
          } else {
            parentDiv.classList.add("hide-percent");
          }
        }
      });
    });

    // Year Input
    // Percentage Inputs
    const yearInputs = document.querySelectorAll(".year-input");

    yearInputs.forEach(function (yearInput) {
      yearInput.addEventListener("focus", function(e){
        let yearValue = e.target.value.replace("years", "").trim();
        let parentDiv = e.target.closest(".year-input-div");
        parentDiv.classList.remove("hide-year");
        e.target.value = yearValue;
        console.log(yearValue);
        e.target.type = 'number';

      });

      yearInput.addEventListener("focusout", function (e) {
        e.target.type = 'text';
        let parentDiv = e.target.closest(".year-input-div");
        let len = e.target.value.trim().length;
        if (len == 0) {
          e.target.value = "";
          parentDiv.classList.remove("hide-year");
        } else {
          e.target.value = `${e.target.value} years`;
          parentDiv.classList.add("hide-year");
        }
      });
    });
    }
}
</script>
