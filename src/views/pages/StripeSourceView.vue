<template>
  <div>
  <div ref="card" style="width:300px"></div>
  <button @click="purchase">Get Source</button>
  </div>
  <!-- <p >Source ID - {{sourceId}}</p> -->
</template>

<script>
let stripe = Stripe(
    `pk_test_51M3zSZSJJRL1HZKGqUikA8saFoEGb9nskOEzUWqIGaNYau1EAnR063C61dUyroh1smFz30gZLm5R3horE7S6HoN300svIlgfZa`
  ),
  elements = stripe.elements(),
  card = undefined;

export default {
  data(){
    return {sourceId:null}
  },
  mounted: function() {
    card = elements.create("card");
    card.mount(this.$refs.card);
  },
  methods: {
     purchase: function() {
      stripe.createSource(card,  {
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