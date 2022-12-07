<template>
  <div >
  <div class="form-control" ref="cardNumber"></div>  <br />
  <div class="form-control" ref="cardExpiry"></div><br />
  <div class="form-control" ref="cardCvc"></div><br />
  <div class="form-control" ref="postalCode"></div><br />
  <!-- <div id="card"></div> -->
  <button @click="purchase">Get Source</button>
  </div>
</template>

<script>
let stripe = Stripe(`pk_test_51KXOPvSISeYa8Ci29i24eUHNAF7BzTMGtKVKgNrVk1e3Z0FqUHPbM5ajeeaCkE5RIeXXV48XHGIdhB5u5f5yhHwh00fCKy6GWu`),
  elements = stripe.elements(),
  card, cardNumber, cardExpiry, cardCvc, postalCode;
export default {
  mounted: function() {
    cardNumber = elements.create("cardNumber");
    cardExpiry = elements.create("cardExpiry");
    cardCvc = elements.create("cardCvc");
    postalCode = elements.create("postalCode");

    cardNumber.mount(this.$refs.cardNumber);
    cardExpiry.mount(this.$refs.cardExpiry);
    cardCvc.mount(this.$refs.cardCvc);
    postalCode.mount(this.$refs.postalCode);
  },
  methods: {
    purchase: function() {
      stripe.createSource(cardNumber,  {
        type: 'card',
        currency: 'USD',
        owner: {
          name: 'Hariom',
          phone: '88408680841',
        }
      }).then(function(result) {
        console.log(result);
        // Access the token with result.token
      });
    },
  },
};
</script>