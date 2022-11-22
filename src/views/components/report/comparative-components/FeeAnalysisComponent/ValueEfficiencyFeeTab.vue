<template lang="">
  <div class="tab-pane fade show" id="v-pills-valueEfficiency" role="tabpanel"
    aria-labelledby="v-pills-valueEfficiency-tab">
    <div class="container-fluid">
      <div class="d-flex justify-content-between flex-gap-12">
        <div class="mt-3 flex-1" v-for="(item, index) in data" :key="index">
          <div :class="`distributionCard1 equalDistCard${1+index} position-relative w-100 ${cards[index].active ? '' : 'inactive'}`">
            <div class="d-flex justify-content-between pb-1">
              <div class="distrbnCard1paras">
                <p>Value Efficiency</p>
                <p>{{item.type}}</p>
              </div>
              <div class="d-flex">
                <div class="button-cover2">
                  <div :class="`radioBtnDiv switch${index} r2`" id="button-2">
                    <input type="checkbox" class="checkbox2 commonRadioBtn1 feeGroupBarCard1" :checked="cards[index].active" @change="() => cards[index].active = !cards[index].active"/>
                    <div class="knobs2"></div>
                    <div class="layer2"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-1 d-flex justify-content-between">
              <p class="legacyCardPara">Value Efficiency Ratio</p>
              <p class="legacyCardPara2 text-right">{{item.value_efficiency_ratio}}</p>
            </div>
            <div class="mt-1 d-flex justify-content-between">
              <p class="legacyCardPara">Total Fees</p>
              <p class="legacyCardPara2 text-right">{{$numFormatWithDollar(item.total_fees)}}</p>
            </div>
            <div class="mt-1 d-flex justify-content-between">
              <p class="legacyCardPara">Total Value </p>
              <p class="legacyCardPara2 text-right">{{$numFormatWithDollar(item.total_value)}}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="container-fluid mt-20">
      <div class="feeMainProgrssBarDiv">
        <div>
          <div v-for="(item, index) in 6" :key="index" :class="`d-flex feeMainProgBrdrDivs ${index > 4 ? 'm-0 p-0' : ''}`">
            <p class="feeMainProgBrdr"></p>
          </div>
        </div>

        <div class="feeProgressAbsltCls">
          <div class="progressAllBarsDivMain flex-gap-12">
            <div :class="`feeProgressBarEachDivMain feeDivDisplayNone1 ${cards[0].active ? '' : 'feebarGroupDisplayNone'}`">
              <div class="d-flex groupedFourBars1">
                <div class="bgImgNoneAndTabRadius feeProgressBarEachDiv feeProgressBarEachHeight1 feeGroupedBarsSigleClr1 ">
                  <div class="CardProgressBig feeGreenBar1 feeEqualPercent1" :style="{height: data[0].value_efficiency_in_percent}">
                  </div>
                  <div class="position-absolute progressBarbtmNum feeGreenNumBar1">
                    $<span class="feeClrProgBar1">{{$numFormat(data[0].value_efficiency)}}</span> </div>
                </div>
                <div
                  class="bgImgNoneAndTabRadius feeProgressBarEachDiv feeProgressBarEachHeight2 groupedBarsSigleClr3">
                  <div class="CardProgressBig feeGreenBar2 feeEqualPercent2" :style="{height: data[0].total_fee_in_percent}">
                  </div>
                  <div class="position-absolute progressBarbtmNum feeGreenNumBar2">
                    $<span class="feeClrProgBar2">{{$numFormat(data[0].total_fees)}}</span>
                  </div>
                </div>
                <div
                  class="bgImgNoneAndTabRadius feeProgressBarEachDiv feeProgressBarEachHeight3 groupedBarsSigleClr4">
                  <div class="CardProgressBig feeGreenBar3 feeEqualPercent3" :style="{height: data[0].total_value_in_percent}">
                  </div>
                  <div class="position-absolute progressBarbtmNum feeGreenNumBar3">
                    $<span class="feeClrProgBar3">{{$numFormat(data[0].total_value)}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div :class="`feeProgressBarEachDivMain feeDivDisplayNone2 ${cards[1].active ? '' : 'feebarGroupDisplayNone'}`">
              <div class="d-flex groupedFourBars2">
                <div
                  class="bgImgNoneAndTabRadius feeProgressBarEachDiv feeProgressBarEachHeight4 groupedSecBarsSigleClr1">
                  <div class="CardProgressBig feeBlueBar1 feeEqualPercent4" :style="{height: data[1].value_efficiency_in_percent}">
                  </div>
                  <div class="position-absolute progressBarbtmNum feeBlueNumBar1">
                    $<span class="feeClrProgBar4">{{$numFormat(data[1].value_efficiency)}}</span>
                  </div>
                </div>
                <div
                  class="bgImgNoneAndTabRadius feeProgressBarEachDiv  feeProgressBarEachHeight5 groupedSecBarsSigleClr3">
                  <div class="CardProgressBig feeBlueBar2 feeEqualPercent5" :style="{height: data[1].total_fee_in_percent}">
                  </div>
                  <div class="position-absolute progressBarbtmNum feeBlueNumBar2">
                    $<span class="feeClrProgBar5">{{$numFormat(data[1].total_fees)}}</span>
                  </div>
                </div>
                <div
                  class="bgImgNoneAndTabRadius feeProgressBarEachDiv  feeProgressBarEachHeight6 groupedSecBarsSigleClr4">
                  <div class="CardProgressBig feeBlueBar3 feeEqualPercent6" :style="{height: data[1].total_value_in_percent}">
                  </div>
                  <div class="position-absolute progressBarbtmNum feeBlueNumBar3">
                    $<span class="feeClrProgBar6">{{$numFormat(data[1].total_value)}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div :class="`feeProgressBarEachDivMain feeDivDisplayNone3 ${cards[2].active ? '' : 'feebarGroupDisplayNone'}`">
              <div class="d-flex groupedFourBars3">
                <div
                  class="bgImgNoneAndTabRadius feeProgressBarEachDiv  feeProgressBarEachHeight7 groupedThirdBarsSigleClr1">
                  <div class="CardProgressBig feeVoiletBar1 feeEqualPercent7" :style="{height: data[2].value_efficiency_in_percent}">
                  </div>
                  <div class="position-absolute progressBarbtmNum feeVoiletNumBar1">$<span class="feeClrProgBar7">{{$numFormat(data[2].value_efficiency)}}</span>
                  </div>
                </div>
                <div
                  class="bgImgNoneAndTabRadius feeProgressBarEachDiv feeProgressBarEachHeight8 groupedThirdBarsSigleClr3">
                  <div class="CardProgressBig feeVoiletBar2 feeEqualPercent8" :style="{height: data[2].total_fee_in_percent}">
                  </div>
                  <div class="position-absolute progressBarbtmNum feeVoiletNumBar2">$<span class="feeClrProgBar8">{{$numFormat(data[2].total_fees)}}</span>
                  </div>
                </div>
                <div
                  class="bgImgNoneAndTabRadius feeProgressBarEachDiv feeProgressBarEachHeight9 groupedThirdBarsSigleClr4">
                  <div class="CardProgressBig feeVoiletBar3 feeEqualPercent9" :style="{height: data[2].total_value_in_percent}">
                  </div>
                  <div class="position-absolute progressBarbtmNum feeVoiletNumBar3">$<span class="feeClrProgBar9">{{$numFormat(data[2].total_value)}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div :class="`feeProgressBarEachDivMain feeDivDisplayNone4 ${cards[3].active ? '' : 'feebarGroupDisplayNone'}`">
              <div class="d-flex groupedFourBars3">
                <div
                  class="bgImgNoneAndTabRadius feeProgressBarEachDiv  feeProgressBarEachHeight10 groupedThirdBarsSigleClr1">
                  <div class="CardProgressBig feeRedBar1 feeEqualPercent10" :style="{height: data[3].value_efficiency_in_percent}">
                  </div>
                  <div class="position-absolute progressBarbtmNum feeRedNumBar1">$<span class="feeClrProgBar10">{{$numFormat(data[3].value_efficiency)}}</span>
                  </div>
                </div>
                <div
                  class="bgImgNoneAndTabRadius feeProgressBarEachDiv feeProgressBarEachHeight11 groupedThirdBarsSigleClr3">
                  <div class="CardProgressBig feeRedBar2 feeEqualPercent11" :style="{height: data[3].total_fee_in_percent}">
                  </div>
                  <div class="position-absolute progressBarbtmNum feeRedNumBar2">$<span class="feeClrProgBar11">{{$numFormat(data[3].total_fees)}}</span>
                  </div>
                </div>
                <div
                  class="bgImgNoneAndTabRadius feeProgressBarEachDiv feeProgressBarEachHeight12 groupedThirdBarsSigleClr4">
                  <div class="CardProgressBig feeRedBar3 feeEqualPercent12" :style="{height: data[3].total_value_in_percent}">
                  </div>
                  <div class="position-absolute progressBarbtmNum feeRedNumBar3">$<span class="feeClrProgBar12">{{$numFormat(data[3].total_value)}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        cards: [
          { id: 1, active: true },
          { id: 2, active: true },
          { id: 3, active: true },
          { id: 4, active: true },
        ],
        data: [
          {
            type: "LifePro+",
            value_efficiency_ratio: "1:6:15",
            value_efficiency:454516,
            total_fees: 544565,
            total_value: 256556,
            value_efficiency_in_percent:'30%',
            total_fee_in_percent:'50%',
            total_value_in_percent:'70%',
          },
          {
            type: "Brokerage Account",
            value_efficiency_ratio: "1:6:15",
            value_efficiency:454516,
            total_fees: 564640,
            total_value: 656455,
            value_efficiency_in_percent:'30%',
            total_fee_in_percent:'65%',
            total_value_in_percent:'20%',
          },
          {
            type: "401/IRA",
            value_efficiency_ratio: "1:6:15",
            value_efficiency:454516,
            total_fees: 478922,
            total_value: 685455,
            value_efficiency_in_percent:'40%',
            total_fee_in_percent:'58%',
            total_value_in_percent:'35%',
          },
          {
            type: "Annuity",
            value_efficiency_ratio: "1:6:15",
            value_efficiency:454516,
            total_fees: 845645,
            total_value: 465402,
            value_efficiency_in_percent:'19%',
            total_fee_in_percent:'48%',
            total_value_in_percent:'25%',
          },
        ],
      };
    },
  };
</script>
<style lang="">
</style>