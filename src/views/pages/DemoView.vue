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
import { getUrl } from '../../network/url';
import { post } from '../../network/requests';
let stripe = Stripe(
    `pk_test_51M3zSZSJJRL1HZKGqUikA8saFoEGb9nskOEzUWqIGaNYau1EAnR063C61dUyroh1smFz30gZLm5R3horE7S6HoN300svIlgfZa`
  ),
  elements = stripe.elements(),
  card,
  cardNumber,
  cardExpiry,
  cardCvc,
  postalCode;
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
      this.$store.dispatch("loader", true);
      stripe
        .createSource(cardNumber, {
          type: "card",
          currency: "USD",
          owner: {
            name: "Hariom",
            phone: "88408680841",
          },
        })
        .then(function(result) {
          console.log(result);
          // Access the token with result.token
          var formData = {
            firstname: 'Hariom',
            last_name: 'Prajapati',
            email: 'hariom65406564465@epixelsoftware.com',
            phone_number: '88408680841',
            password: '123456',
            confirm_password: '123456',
          };
          formData['stripe_source_id'] = result.source.id;
          console.log(formData);
          post(getUrl("signup"), formData)
            .then(response => {
              console.log(response);
              // setRefreshToken(response.data.data.tokens.refresh);
              // setAccessToken(response.data.data.tokens.access);
              this.$store.dispatch("loader", false);
              this.$toast.success(response.data.message);
              this.$router.push("/profile-details");
            })
            .catch(error => {
              this.$store.dispatch("userTempFormError", getServerErrors(error));
              this.$store.dispatch("loader", false);
              this.$router.push("/sign-up");
              this.$store.dispatch("loader", false);
              this.$toast.error(getFirstError(error));
            });
        });
    },
  },
};
</script>