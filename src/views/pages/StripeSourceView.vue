h
<template>
  <div>
    <div ref="card" style="width:300px"></div>
    <button @click="purchase">Get Source</button>
  </div>
  <!-- <p >Source ID - {{sourceId}}</p> -->
</template>

<script>
import { getRuntimeEnv } from "../../services/helper";

let stripe = Stripe(getRuntimeEnv('VITE_STRIPE_PUBLISHABLE_KEY')),
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