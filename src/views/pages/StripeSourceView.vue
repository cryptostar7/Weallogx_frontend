<template>
  <div>
    <div ref="card" style="width:300px"></div>
    <button @click="purchase">Get Source</button>
  </div>
  <!-- <p >Source ID - {{sourceId}}</p> -->
</template>

<script>
let stripe = Stripe(
  `pk_test_51ObkK6AnNnieLLFYJX30BOvMWih1D2J9cuH6XJmaQPwXZwgmrsusGsuhcPgU69bR9ex4yaOFusg79z352cIsAJmo00tO5QURnS`
),
  elements = stripe.elements(),
  card = undefined;

export default {
  data() {
    return { sourceId: null }
  },
  mounted: function () {
    card = elements.create("card");
    card.mount(this.$refs.card);
  },
  methods: {
    purchase: function () {
      stripe.createSource(card, {
        type: 'card',
        currency: 'USD',
        owner: {
          name: 'Hariom',
          phone: '88408680841',
        }
      }).then().catch();
    },
  },
};
</script>