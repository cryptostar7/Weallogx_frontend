<template lang="">
  <div class="canvas-graph-div">
    <canvas id="iscChartCanvas"></canvas>
  </div>
</template>
<script>
import "../../../assets/js/chart.min";
import canvasPlus from "../../../assets/images/icons/canvas-plus.svg";
import canvasPlusBlue from "../../../assets/images/icons/canvas-plus-blue.svg";
import canvasPlusGrey from "../../../assets/images/icons/grey-plus.svg";
export default {
  emits: ["setReGenerateGraph"],
  props: ["reGenerateGraph"],
  methods: {
    generateGraph: function () {
      if (window.iscChart) {
        window.iscChart.destroy();
      }

      // Creation of Dropdown Box 1
      let chartDropdown0 = document.createElement("div");
      chartDropdown0.id = "chartDropdown0";
      chartDropdown0.className = "chart-dropdown green center d-none";
      chartDropdown0.innerHTML = `<div class="tooltip-main-div">
          <div class="tool-tip-second-main-div">
            <div class="tooltipbtn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="7" fill="white" stroke="#147D64" stroke-width="2"></circle><path d="M4 8H12" stroke="#147D64"></path></svg>
            </div>
            <div class="tooltip-head">Snap Shot</div>
            <div class="tooltip-inner-div">
              <p>No Taxes</p>
              <p>No Market Losses</p>
              <p>Less Volatility</p>
            </div>
          </div>
        </div>`;

      // Creation of Dropdown Box 2
      let chartDropdown1 = document.createElement("div");
      chartDropdown1.id = "chartDropdown1";
      chartDropdown1.className = "chart-dropdown blue center d-none";
      chartDropdown1.innerHTML = `<div class="tooltip-main-div">
      <div class="tool-tip-second-main-div">
        <div class="tooltipbtn">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="7" fill="white" stroke="#1660A4" stroke-width="2"></circle><path d="M4 8H12" stroke="#1660A4"></path></svg>
        </div>
        <div class="tooltip-head">Snap Shot</div>
        <div class="tooltip-inner-div">
          <p>Significant Taxes</p>
          <p>Significant Market Losses</p>
          <p>Significant Volatility</p>
        </div>
      </div>
    </div>`;

      document.body.appendChild(chartDropdown0);
      document.body.appendChild(chartDropdown1);

      // Select Dropdown Start
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
            let items = e.target.closest("ul").querySelectorAll("li");
            items.forEach((element) => {
              element.classList.remove("active");
            });
            e.target.closest("li").classList.add("active");
            let selectedOption = option.querySelector(".option-text").innerText;
            option.parentElement.parentElement
              .querySelector(".select-btn")
              .querySelector(".sBtn-text").innerText = selectedOption;
            option.parentElement.parentElement.classList.remove("active");
          });
        });
      });

      let dropdowns = document.querySelectorAll(".select-menu");
      dropdowns.forEach((element) => {
        element.addEventListener("click", (e) => {
          dropdowns.forEach((item) => {
            if (item.className.includes("active")) {
              item.classList.remove("active");
            }
          });
          e.target.closest(".select-menu").classList.add("active");
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
      var allSelectMenus = document.querySelectorAll(".select-menu");
      allSelectMenus.forEach((eachSelectMenus) => {
        eachSelectMenus.addEventListener("click", function (event) {
          event.stopPropagation();
        });
      });
      // Select Dropdown End

      // Table Switch On off Start
      var inputAccess = document.querySelectorAll(
        ".index-strategy-table-heading .index-strategy-head-radio input"
      );
      var bottomTableGraphs = document.querySelectorAll(
        ".table-graph-bottom-each-main-div"
      );

      inputAccess.forEach((inputEachAccess) => {
        inputEachAccess.addEventListener("change", function (e) {
          var attrGet = this.getAttribute("data-attr");
          if (this.checked == false) {
            e.target.closest(".half-col").classList.add("inactive");
            bottomTableGraphs[attrGet - 1].classList.add("inactive");
          } else {
            e.target.closest(".half-col").classList.remove("inactive");
            bottomTableGraphs[attrGet - 1].classList.remove("inactive");
          }
        });
      });

      var inputAccess = document.querySelectorAll(
        ".table-graph-bottom-head .index-strategy-head-radio input"
      );
      inputAccess.forEach((inputEachAccess) => {
        inputEachAccess.addEventListener("change", function (e) {
          var attrGet = this.getAttribute("btm-data-attr");
          if (this.checked == false) {
            e.target
              .closest(".table-graph-bottom-each-main-div")
              .classList.add("inactive1");
          } else {
            e.target
              .closest(".table-graph-bottom-each-main-div")
              .classList.remove("inactive1");
          }
        });
      });

      var chartDot1 = new Image(20, 20);
      chartDot1.src = canvasPlus;
      var chartDot2 = new Image(20, 20);
      chartDot2.src = canvasPlusBlue;
      var chartDot3 = new Image(20, 20);
      chartDot3.src = canvasPlusGrey;

      var pointImageArr = [chartDot1, chartDot2, chartDot3, ""];

      var lineColors = ["#147D64", "#1660A4", "#eee"];
      let screenMode = localStorage.getItem("mode");
      if (screenMode == "light-blue") {
        pointImageArr = [chartDot2, chartDot1, chartDot3, ""];
        lineColors = ["#1660A4", "#089875", "#eee"];
      } else if (screenMode == "dark-blue") {
        pointImageArr = [chartDot2, chartDot1, chartDot3, ""];
        lineColors = ["#1660A4", "#089875", "#333"];
      } else if (screenMode == "dark-green") {
        pointImageArr = [chartDot1, chartDot2, chartDot3, ""];
        lineColors = ["#26AB8B", "#23669E", "#333"];
      } else {
        pointImageArr = [chartDot1, chartDot2, chartDot3, ""];
        lineColors = ["#147D64", "#1660A4", "#eee"];
      }

      const ctx = document.getElementById("iscChartCanvas");

      const getTableContainer = (chart, id) => {
        const legendContainer = document.getElementById(id);
        return legendContainer;
      };

      // Graph line hiding through toggle switch on and off
      const htmlLegendPlugin = {
        id: "iscPlugin",
        afterUpdate(chart, args, options) {
          const container = getTableContainer(chart, options.containerID);
          const items =
            chart.options.plugins.legend.labels.generateLabels(chart);
          [items[0], items[1]] = [items[1], items[0]];
          let radios = container.querySelectorAll(
            ".graph-data-row .index-strategy-head-radio input"
          );
          items.forEach((item, index) => {
            radios[index].onclick = (e) => {
              const { type } = chart.config;
              if (type === "pie" || type === "doughnut") {
                // Pie and doughnut charts only have a single dataset and visibility is per item
                chart.toggleDataVisibility(item.index);
              } else {
                chart.setDatasetVisibility(
                  item.datasetIndex,
                  !chart.isDatasetVisible(item.datasetIndex)
                );
              }
              chart.update();
            };
          });
        },
        hideAll(chart, options) {
          const items =
            chart.options.plugins.legend.labels.generateLabels(chart);
          items.forEach((item, index) => {
            const { type } = chart.config;
            if (type === "pie" || type === "doughnut") {
              // Pie and doughnut charts only have a single dataset and visibility is per item
              chart.toggleDataVisibility(item.index);
            } else {
              chart.setDatasetVisibility(
                item.datasetIndex,
                !chart.isDatasetVisible(item.datasetIndex)
              );
            }
            chart.update();
          });
        },
      };

      let lastPoint;

      // Graph line highlight function
      const highlightLine = {
        id: "highlightLine",
        beforeDatasetsDraw(chart, args, plugins) {
          let { data } = chart;
          let { isOpen, idx0, idx1 } = dropdownStatus;
          const datasetMetaArray = chart.getSortedVisibleDatasetMetas();
          // if(animationTimeout){
          //   setTimeout(() => {
          //     animationTimeout = false;
          //   }, totalDuration);
          // }else{
          lastPoint = data.datasets[0].data.length - 1;
          for (let i = 0; i < datasetMetaArray.length; i++) {
            const dataMetaSet = datasetMetaArray[i];
            const index = dataMetaSet.index;
            if (dataMetaSet.data.some((dataPoint) => dataPoint.active)) {
              data.datasets[index].borderColor = lineColors[index];
              if (index == 0) {
                document
                  .getElementById(`chartDropdown0`)
                  .classList.remove("gray");
                document.getElementById(`chartDropdown1`).classList.add("gray");
              } else {
                document.getElementById(`chartDropdown0`).classList.add("gray");
                document
                  .getElementById(`chartDropdown1`)
                  .classList.remove("gray");
              }
              data.datasets[index].pointStyle[lastPoint] =
                data.datasets[index].borderColor !== "#eee"
                  ? pointImageArr[index]
                  : pointImageArr[2];
              if (isOpen) {
                if (idx0 != -1) {
                  data.datasets[idx0].pointStyle[lastPoint] = pointImageArr[3];
                  // data.datasets[idx0].borderColor = lineColors[0];
                }
                if (idx1 != -1) {
                  data.datasets[idx1].pointStyle[lastPoint] = pointImageArr[3];
                  // data.datasets[idx1].borderColor = lineColors[1];
                }
              }
              chart.update();
              break;
            }
          }
          // }
        },
        afterEvent(chart, args) {
          let { data } = chart;
          let { isOpen, idx0, idx1 } = dropdownStatus;
          let isActive;
          if (args.replay) {
            function setBorderColor(active, index, borderColor) {
              isActive = active;
              return active ? borderColor : lineColors[2];
            }

            if (!isOpen) {
              if (idx0 != -1) {
                data.datasets[idx0].pointStyle[lastPoint] = pointImageArr[3];
                // data.datasets[idx0].borderColor = lineColors[idx0];
              }
              if (idx1 != -1) {
                data.datasets[idx1].pointStyle[lastPoint] = pointImageArr[3];
                // data.datasets[idx1].borderColor = lineColors[idx1];
              }
            } else {
              if (idx0 == -1) {
                data.datasets[0].pointStyle[lastPoint] = pointImageArr[0];
              }
              if (idx1 == -1) {
                data.datasets[1].pointStyle[lastPoint] = pointImageArr[1];
              }
              // return;
            }
            data.datasets[0].borderColor = setBorderColor(
              chart.getDatasetMeta(0).data[0].active,
              0,
              lineColors[0]
            );
            data.datasets[1].borderColor = setBorderColor(
              chart.getDatasetMeta(1).data[0].active,
              1,
              lineColors[1]
            );

            data.datasets[0].pointStyle[lastPoint] =
              setBorderColor(
                chart.getDatasetMeta(0).data[0].active,
                0,
                lineColors[0]
              ) !== "#eee"
                ? pointImageArr[0]
                : pointImageArr[2];
            data.datasets[1].pointStyle[lastPoint] =
              setBorderColor(
                chart.getDatasetMeta(1).data[0].active,
                1,
                lineColors[1]
              ) !== "#eee"
                ? pointImageArr[1]
                : pointImageArr[2];
          } else {
            // data.datasets[0].borderColor = lineColors[0];
            // data.datasets[1].borderColor = lineColors[1];
            if (!isOpen) {
              // data.datasets[0].pointStyle[lastPoint] = pointImageArr[0];
              // data.datasets[1].pointStyle[lastPoint] = pointImageArr[1];
              // chart.update();
              // return;
            } else {
              if (idx0 != -1) {
                data.datasets[idx0].pointStyle[lastPoint] = pointImageArr[3];
                // data.datasets[idx0].borderColor = lineColors[0];
              }
              if (idx1 != -1) {
                data.datasets[idx1].pointStyle[lastPoint] = pointImageArr[3];
                // data.datasets[idx1].borderColor = lineColors[1];
              }
              chart.update();
              return;
            }
          }
          args.changed = true;
        },
      };

      let result = JSON.parse(localStorage.getItem("isc_calculate"));
      let years = result.index_results.map((i) => i.year);
      let index_net_balance = result.index_results.map((i) => i.net_balance);
      let strategy_net_balance = result.strategy_results.map(
        (i) => i.net_balance
      );
 
      let pointRadius = [];

      for (let i = 1; i <= years.length; i++) {
        pointRadius.push(i < years.length ? 0 : 14); 
      } 

      var config = {
        type: "line",
        data: {
          labels: years,
          datasets: [
            {
              label: false,
              fill: false,
              backgroundColor: lineColors[0],
              borderColor: lineColors[0],
              data: index_net_balance,
              pointStyle: [
                "circle",
                "circle",
                "circle",
                "circle",
                "circle",
                "circle",
                pointImageArr[0],
              ],
              pointRadius: pointRadius, // Last dot
              borderWidth: 3,
              pointBackgroundColor: "transparent",
              pointHoverBackgroundColor: lineColors[0],
              pointBorderColor: "transparent",
              // pointHoverRadius: [8, 8, 8, 8, 8, 8, 14],
            },
            {
              label: false,
              fill: false,
              backgroundColor: lineColors[1],
              borderColor: lineColors[1],
              data: strategy_net_balance,
              pointStyle: [
                "circle",
                "circle",
                "circle",
                "circle",
                "circle",
                "circle",
                pointImageArr[1],
              ],
              pointRadius: pointRadius, // Last dot
              borderWidth: 3,
              pointBackgroundColor: "transparent",
              pointHoverBackgroundColor: lineColors[1],
              pointBorderColor: "transparent",
              // pointHoverRadius: [8, 8, 8, 8, 8, 8, 14],
            },
          ],
        },
        options: {
          interaction: {
            mode: "nearest",
            intersect: false,
          },
          // hover: {
          //   mode: 'nearest',
          //   intersect: true
          // },
          responsive: true,
          tooltips: {
            enabled: true,
          },
          scales: {
            x: {
              beginAtZero: true,
              ticks: {
                display: true,
                padding: 5,
                beginAtZero: true,
                maxRotation: 35,
                minRotation: 35,
              },
              grid: {
                display: false,
                drawBorder: false,
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                tickColor: "#E9E9E9",
                drawBorder: false,
                drawTicks: false,
              },
              ticks: {
                display: true,
                // stepSize: 1000000,
                callback: function (value, index, ticks) {
                  value = value.toString();
                  value = value.split(/(?=(?:...)*$)/);
                  value = value.join(",");
                  return "$" + value;
                },
                padding: 5,
                beginAtZero: true,
              },
              scaleLabel: {
                display: false,
              },
            },
          },
          layout: {
            padding: {
              top: 35,
              right: 10,
            },
          },
          plugins: {
            iscPlugin: {
              containerID: "detailsTable",
            },
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                labelColor: function (context) {
                  return {
                    backgroundColor: lineColors[context.datasetIndex],
                  };
                },
              },
            },
          },
        },
        plugins: [htmlLegendPlugin, highlightLine],
      };

      const chartBox = document.querySelector(
        ".index-strategy-content-inner-div"
      );
      let chartBoxX = chartBox.getBoundingClientRect().x;
      let chartBoxY = chartBox.getBoundingClientRect().y;
      let n = config.data.datasets[0].data.length - 1;
      let dropdownStatus = { isOpen: false, idx0: -1, idx1: -1 };

      window.iscChart = new Chart(ctx, config);

      let chartDropdowns = document.querySelectorAll(".chart-dropdown");

      function resetColors(chart) {
        chart.config.data.datasets[0].borderColor = lineColors[0];
        chart.config.data.datasets[1].borderColor = lineColors[1];
        chart.config.data.datasets[0].pointStyle[n] = pointImageArr[0];
        chart.config.data.datasets[1].pointStyle[n] = pointImageArr[1];
        chart.update();
      }

      window.iscChart.canvas.addEventListener("mouseleave", (e) => {
        // if(animationTimeout){
        //    setTimeout(() => {
        //      animationTimeout = false;
        //    }, totalDuration);
        //  }else{
        resetColors(window.iscChart);
        // }
      });

      document.addEventListener("mouseup", (e) => {
        e.stopPropagation();
        if (
          e.target.classList.contains("tab-content") ||
          e.target.closest(".tab-content") ||
          e.target.classList.contains("chart-dropdown") ||
          e.target.closest(".chart-dropdown") ||
          e.target.tagName == "circle"
        ) {
          return;
        }
        let chartDropdowns = document.querySelectorAll(".chart-dropdown");
        chartDropdowns.forEach((dropdownBox) => {
          if (
            dropdownBox.classList.contains("d-block") &&
            !e.target.classList.contains("tooltipbtn") &&
            !e.target.closest(".tooltipbtn")
          ) {
            let id = dropdownBox.getAttribute("id");
            let idx = +id[id.length - 1];
            config.data.datasets[0].pointStyle[n] = pointImageArr[0];
            config.data.datasets[0].borderColor = lineColors[0];
            config.data.datasets[1].pointStyle[n] = pointImageArr[1];
            config.data.datasets[1].borderColor = lineColors[1];
            dropdownBox.classList.toggle("d-none");
            dropdownBox.classList.toggle("d-block");
            dropdownStatus = { isOpen: false, idx0: -1, idx1: -1 };
            window.iscChart.update();
          }
        });
      });

      chartDropdowns.forEach((dropdownBox) => {
        dropdownBox
          .querySelector(".tooltipbtn")
          .addEventListener("click", function () {
            let id = dropdownBox.getAttribute("id");
            let idx = +id[id.length - 1];
            let n = config.data.datasets[0].data.length - 1;
            dropdownBox.classList.toggle("d-none");
            dropdownBox.classList.toggle("d-block");
            if (idx == 0) {
              dropdownStatus.idx0 = -1;
            }
            if (idx == 1) {
              dropdownStatus.idx1 = -1;
            }
            if (dropdownStatus.idx0 == -1 && dropdownStatus.idx1 == -1) {
              dropdownStatus.isOpen = false;
            } else {
              dropdownStatus.isOpen = true;
            }
            config.data.datasets[idx].pointStyle[n] = pointImageArr[idx];
            window.iscChart.update();
          });

        dropdownBox.addEventListener("mouseover", function () {
          let id = dropdownBox.getAttribute("id");
          let idx = +id[id.length - 1];
          if (idx == 0) {
            config.data.datasets[0].borderColor = lineColors[0];
          }
          if (idx == 1) {
            config.data.datasets[1].borderColor = lineColors[1];
          }
          window.iscChart.update();
        });
      });

      // Clicking to show and hide the dropdown on graph
      const clickHandler = (click) => {
        const { layerX, pageY } = click;
        const points = window.iscChart.getElementsAtEventForMode(
          click,
          "nearest",
          { intersect: true },
          true
        );
        if (points[0]) {
          points.forEach((point) => {
            let currentIndex = point.datasetIndex;
            if (point.index === config.data.labels.length - 2) {
              const dropdownBox = document.getElementById(
                `chartDropdown${currentIndex}`
              );
              dropdownBox.classList.toggle("d-none");
              dropdownBox.classList.toggle("d-block");
              dropdownBox.style.left = chartBoxX + layerX - 45 + "px";
              dropdownStatus.isOpen = true;
              if (currentIndex == 0) {
                dropdownStatus.idx0 = 0;
                config.data.datasets[0].borderColor = lineColors[0];
              }
              if (currentIndex == 1) {
                dropdownStatus.idx1 = 1;
                config.data.datasets[1].borderColor = lineColors[1];
              }
              dropdownBox.style.top =
                pageY -
                Math.floor(dropdownBox.getBoundingClientRect().height) -
                16 +
                "px";
              window.iscChart.update();
              setTimeout(() => {
                if (currentIndex == 0) {
                  config.data.datasets[0].borderColor = lineColors[0];
                }
                if (currentIndex == 1) {
                  config.data.datasets[1].borderColor = lineColors[1];
                }
                window.iscChart.update();
              }, 250);
              return;
            }
          });
        }
        click.stopPropagation();
      };

      window.iscChart.canvas.addEventListener("click", clickHandler);

      // Three Switch Buttons and Three Allocation Inputs
      const threeCheckboxContainers =
        document.querySelectorAll(".each-radio-switch");
      const threeCheckInputs = document.querySelectorAll(".form-check-input");
      const strategyAllocatedDivs = document.querySelectorAll(
        ".strategy-allocated-div"
      );
      const allocationInputs = document.querySelectorAll(
        ".strategy-allocated-div input"
      );

      threeCheckInputs.forEach((item, idx) => {
        item.addEventListener("click", function (e) {
          e.stopPropagation();
          let index = +e.target.dataset.number;
          if (e.target.checked) {
            if (idx == 2) {
              threeCheckInputs[idx - 1].checked = true;
              strategyAllocatedDivs[idx].classList.add("active");
              strategyAllocatedDivs[idx - 1].classList.add("active");
              allocationInputs[2].value = "33.34%";
              allocationInputs[1].value = "33.33%";
              allocationInputs[0].value = "33.33%";
              allocationInputs[2].disabled = false;
              allocationInputs[1].disabled = false;
              allocationInputs[0].disabled = false;
            } else if (idx == 1) {
              strategyAllocatedDivs[idx].classList.add("active");
              strategyAllocatedDivs[idx + 1].classList.remove("active");
              allocationInputs[1].value = "50%";
              allocationInputs[0].value = "50%";
              allocationInputs[1].disabled = false;
              allocationInputs[0].disabled = false;
            }
          } else {
            if (idx == 2) {
              threeCheckboxContainers[idx].classList.remove("active");
              strategyAllocatedDivs[idx].classList.remove("active");
              allocationInputs[2].value = "";
              allocationInputs[1].value = "50%";
              allocationInputs[0].value = "50%";
              allocationInputs[2].disabled = true;
            } else if (idx == 1) {
              threeCheckInputs[idx + 1].checked = false;
              threeCheckboxContainers[idx].classList.remove("active");
              threeCheckboxContainers[idx + 1].classList.remove("active");
              strategyAllocatedDivs[idx].classList.remove("active");
              strategyAllocatedDivs[idx + 1].classList.remove("active");
              allocationInputs[1].value = "";
              allocationInputs[2].value = "";
              allocationInputs[0].value = "100%";
              allocationInputs[1].disabled = true;
              allocationInputs[2].disabled = true;
            }
          }
        });
      });

      allocationInputs.forEach((input) => {
        input.addEventListener("focus", (e) => {
          let val = e.target.value;
          e.target.type = "number";
          val = val.substr(0, val.length - 1);
          e.target.value = +val;
        });
        input.addEventListener("input", (e) => {
          e.target.type = "number";
        });
      });

      function isFloat(n) {
        return Number(n) === n && n % 1 !== 0;
      }

      allocationInputs.forEach((input) => {
        input.addEventListener("focusout", (e) => {
          let val = e.target.value;
          e.target.type = "text";
          if (val == 0 || val == "" || val == null) {
            e.target.value = "0%";
            return;
          }
          if (isFloat(Number(val))) {
            val = Number(val).toFixed(2);
          } else {
            val = Number(val);
          }
          val = String(val);
          val += "%";
          e.target.value = val;

          let val1 = Number(
            allocationInputs[0].value.substr(
              0,
              allocationInputs[0].value.length - 1
            )
          );
          let val2 = Number(
            allocationInputs[1].value.substr(
              0,
              allocationInputs[1].value.length - 1
            )
          );
          let val3 = Number(
            allocationInputs[2].value.substr(
              0,
              allocationInputs[2].value.length - 1
            )
          );

          let total = val1 + val2 + val3;
          if (total > 100) {
            document
              .querySelector(".strategy-allocation-all-div")
              .classList.add("error");
          } else {
            document
              .querySelector(".strategy-allocation-all-div")
              .classList.remove("error");
          }
        });
      });

      threeCheckboxContainers.forEach((item, index) => {
        item.addEventListener("click", function (e) {
          e.stopPropagation();
          threeCheckboxContainers.forEach((elem) => {
            elem.classList.remove("active");
          });
          item.classList.add("active");
          threeCheckInputs[index].checked = true;
          if (index == 1) {
            if (allocationInputs[2].checked == true) {
              threeCheckInputs[1].checked = true;
              strategyAllocatedDivs[index].classList.add("active");
              strategyAllocatedDivs[index - 1].classList.add("active");
              allocationInputs[0].value = "33.33%";
              allocationInputs[1].value = "33.33%";
              allocationInputs[2].value = "33.34%";
              allocationInputs[1].disabled = false;
              allocationInputs[2].disabled = false;
            } else {
              threeCheckInputs[1].checked = true;
              strategyAllocatedDivs[index].classList.add("active");
              strategyAllocatedDivs[index - 1].classList.add("active");
              allocationInputs[0].value = "50%";
              allocationInputs[1].value = "50%";
              allocationInputs[1].disabled = false;
              allocationInputs[1].checked = true;
            }
          }
          if (index == 2) {
            threeCheckInputs[1].checked = true;
            strategyAllocatedDivs[index].classList.add("active");
            strategyAllocatedDivs[index - 1].classList.add("active");
            allocationInputs[0].value = "33.33%";
            allocationInputs[1].value = "33.33%";
            allocationInputs[2].value = "33.34%";
            allocationInputs[1].disabled = false;
            allocationInputs[2].disabled = false;
            allocationInputs[2].checked = true;
          }
        });
      });

      var redioInp = document.querySelector(".dropdown-menu");
      redioInp.addEventListener("click", function (e) {
        let screenMode = localStorage.getItem("mode");
        if (screenMode == "light-blue") {
          pointImageArr = [chartDot2, chartDot1, chartDot3, ""];
          lineColors = ["#1660A4", "#089875", "#eee"];
          config.data.datasets[0].borderColor = "#1660A4";
          config.data.datasets[0].pointHoverBackgroundColor = "#1660A4";
          config.data.datasets[0].pointStyle[n] = chartDot2;
          config.data.datasets[1].borderColor = "#089875";
          config.data.datasets[1].pointHoverBackgroundColor = "#089875";
          config.data.datasets[1].pointStyle[n] = chartDot1;
        } else if (screenMode == "dark-blue") {
          pointImageArr = [chartDot2, chartDot1, chartDot3, ""];
          lineColors = ["#1660A4", "#089875", "#333"];
          config.data.datasets[0].borderColor = "#1660A4";
          config.data.datasets[0].pointHoverBackgroundColor = "#1660A4";
          config.data.datasets[0].pointStyle[n] = chartDot2;
          config.data.datasets[1].borderColor = "#089875";
          config.data.datasets[1].pointHoverBackgroundColor = "#089875";
          config.data.datasets[1].pointStyle[n] = chartDot1;
        } else if (screenMode == "dark-green") {
          pointImageArr = [chartDot1, chartDot2, chartDot3, ""];
          lineColors = ["#26AB8B", "#23669E", "#333"];
          config.data.datasets[0].borderColor = "#26AB8B";
          config.data.datasets[0].pointHoverBackgroundColor = "#26AB8B";
          config.data.datasets[0].pointStyle[n] = chartDot1;
          config.data.datasets[1].borderColor = "#23669E";
          config.data.datasets[1].pointHoverBackgroundColor = "#23669E";
          config.data.datasets[1].pointStyle[n] = chartDot2;
        } else {
          pointImageArr = [chartDot1, chartDot2, chartDot3, ""];
          lineColors = ["#147D64", "#1660A4", "#eee"];
          config.data.datasets[0].borderColor = "#0E6651";
          config.data.datasets[0].pointHoverBackgroundColor = "#0E6651";
          config.data.datasets[0].pointStyle[n] = chartDot1;
          config.data.datasets[1].borderColor = "#1660A4";
          config.data.datasets[1].pointHoverBackgroundColor = "#1660A4";
          config.data.datasets[1].pointStyle[n] = chartDot2;
        }
        iscChart.update();
      });

      let calcTabs = document.querySelector(".calc-tab-graph-tab");
      let parentTableDiv = document.querySelector(
        ".index-strategy-table-content-div"
      );
      calcTabs.addEventListener("click", (e) => {
        if (e.target.id == "iscTab1") {
          document.querySelector(".table-data-row").classList.remove("d-none");
          document.querySelector(".graph-data-row").classList.add("d-none");
          parentTableDiv.classList.add("more-padding");
        } else if (e.target.id == "iscTab2") {
          document.querySelector(".table-data-row").classList.add("d-none");
          document.querySelector(".graph-data-row").classList.remove("d-none");
          parentTableDiv.classList.remove("more-padding");
        }
      });

      let bottomToTopBtn = document.getElementById("bottomToTopBtn");
      bottomToTopBtn.addEventListener("click", () => {
        window.scrollTo(0, 0);
      });
    },
  },
  watch: {
    "$props.reGenerateGraph"(e) {
      if (e) {
        this.generateGraph();
        this.$emit("setReGenerateGraph", false);
      }
    },
  },
};
</script>
<style lang=""></style>
