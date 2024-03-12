<template>

  <span v-if="!this.switchYear && !this.additionalConversionTax">
    Tax rate is {{initialTaxRate}}% in all years
  </span>

  <span>

    Tax Rate: <br>

    <label v-if="switchYear" class="d-block">
      {{initialTaxRate}}% years 1 - {{switchYear - 1}} <br/>
      {{secondTaxRate}}% years {{switchYear}}+
    </label>
    
    <label v-else class="d-block">Tax rate is {{initialTaxRate}}% in all years</label>

    <label v-if="additionalConversionTax" class="d-block">
      Additional tax during conversion: {{additionalConversionTax}}%
    </label>

  </span>

</template>

<script>

export default {
  props: ["initialTaxRate", "switchYear", "secondTaxRate", "additionalConversionTax"]
}

</script>
