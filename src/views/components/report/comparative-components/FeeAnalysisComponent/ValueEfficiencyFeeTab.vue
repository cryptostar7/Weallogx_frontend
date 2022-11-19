<template lang="">
  <div class="tab-pane fade show" id="v-pills-valueEfficiency" role="tabpanel"
    aria-labelledby="v-pills-valueEfficiency-tab">
    <div class="container-fluid">
      <div class="d-flex justify-content-between flex-gap-12">
        <div class="mt-3 flex-1" v-for="(item, index) in data" :key="index">
          <div :class="`distributionCard1 equalDistCard${1+index} position-relative w-100`">
            <div class="d-flex justify-content-between pb-1">
              <div class="distrbnCard1paras">
                <p>Value Efficiency</p>
                <p>{{item.type}}</p>
              </div>
              <div class="d-flex">
                <div class="button-cover2">
                  <div :class="`radioBtnDiv switch${index} r2`" id="button-2">
                    <input type="checkbox" class="checkbox2 commonRadioBtn1 feeGroupBarCard1" checked />
                    <div class="knobs2"></div>
                    <div class="layer2"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-1 d-flex justify-content-between">
              <p class="legacyCardPara">Value Efficiency Ratio</p>
              <p class="legacyCardPara2 text-right">{{item.value_efficiency}}</p>
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
    
            <div class="feeProgressBarEachDivMain feeDivDisplayNone2" v-for="(item, index) in data" :key="index">
              <div :class="`d-flex groupedFourBars${1+index}`">
                <div
                  class="bgImgNoneAndTabRadius feeProgressBarEachDiv feeProgressBarEachHeight4 groupedSecBarsSigleClr1">
                  <div :class="`CardProgressBig feeBlueBar1 feeEqualPercent${1+index}`" :style="{height: item.value_efficiency_in_percent}">
                  </div>
                  <div class="position-absolute progressBarbtmNum feeBlueNumBar1">
                    $<span :class="`feeClrProgBar${1+index}`">{{$numFormat(item.total_value)}}</span>
                  </div>
                </div>
                <div
                  class="bgImgNoneAndTabRadius feeProgressBarEachDiv  feeProgressBarEachHeight5 groupedSecBarsSigleClr3">
                  <div :class="`CardProgressBig feeBlueBar2 feeBlueBar1 feeEqualPercent${2+index}`" :style="{height: item.total_fee_in_percent}">
                  </div>
                  <div class="position-absolute progressBarbtmNum feeBlueNumBar2">
                    $<span :class="`feeClrProgBar${1+index}`">{{$numFormat(item.total_fees)}}</span>
                  </div>
                </div>
                <div
                  class="bgImgNoneAndTabRadius feeProgressBarEachDiv  feeProgressBarEachHeight6 groupedSecBarsSigleClr4" >
                  <div :class="`CardProgressBig feeBlueBar3 feeBlueBar1 feeEqualPercent${3+index}`" :style="{height: item.total_value_in_percent}">
                  </div>
                  <div class="position-absolute progressBarbtmNum feeBlueNumBar3">
                    $<span :class="`feeClrProgBar${1+index}`">{{$numFormat(item.total_value)}}</span>
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
            value_efficiency: "1:6:15",
            total_fees: 544565,
            total_value: 256556,
            value_efficiency_in_percent:'30%',
            total_fee_in_percent:'50%',
            total_value_in_percent:'70%',
          },
          {
            type: "Brokerage Account",
            value_efficiency: "1:6:15",
            total_fees: 564640,
            total_value: 656455,
            value_efficiency_in_percent:'30%',
            total_fee_in_percent:'65%',
            total_value_in_percent:'20%',
          },
          {
            type: "401/IRA",
            value_efficiency: "1:6:15",
            total_fees: 478922,
            total_value: 685455,
            value_efficiency_in_percent:'40%',
            total_fee_in_percent:'58%',
            total_value_in_percent:'35%',
          },
          {
            type: "Annuity",
            value_efficiency: "1:6:15",
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