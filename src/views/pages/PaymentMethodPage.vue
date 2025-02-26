<template lang="">
  <div>
    <navbar-component />
    <section class="authMaindiv-area">
      <div class="container middleContainer">
        <div class="payment-methodMain-div">
          <div class="payment-left-card-main-div">
            <div class="payment-left-card">
              <div class="paymentCardTopChipArea">
                <img src="@/assets/images/user/card-chip.svg" alt="">
                <p>CARD</p>
              </div>
              <p class="payment-left-card-number showingCardNumber">
                XXXX&nbsp;&nbsp;&nbsp;&nbsp;XXXX&nbsp;&nbsp;&nbsp;&nbsp;XXXX&nbsp;&nbsp;&nbsp;&nbsp;XXXX</p>

              <div class="cardExpiryDateCvvMainDiv">
                <div class="cardExpiryDateDiv">
                  <p>Expiry Date</p>
                  <p class="showingExpiryDate">MM/YYYY</p>
                </div>
                <div class="cardCvvDiv">
                  <p>CVV</p>
                  <input type="password" class="ShowingCvv" readonly placeholder="***">
                </div>
              </div>
              <p class="cardPlaceHolderName">CARD PLACE HOLDER NAME</p>
            </div>
          </div>
          <form class="payment-right-card-main-div" @submit="getSource">
            <div>
              <div class="payment-right-heading-div">
                <p>Add Payment Information</p>
                <img src="@/assets/images/user/mastercard-logo.svg" alt="master card">
                <img src="@/assets/images/user/visa-logo.svg" alt="master card">
                <img src="@/assets/images/user/american-express-logo.svg" alt="master card">
              </div>
              <div class="paymentMethodFormDiv">
                <div>
                  <label for="card_no">Card Number</label>
                  <div ref="cardNumber" id='card_no' class="numberInputs card-number"></div>
                </div>
                <div>
                  <label for="name">Name</label>
                  <input type="text" id='name' class="card-place-holder-name" v-model="cardHolder"
                    placeholder="Card Place Holder Name" maxlength="39" />
                </div>
                <div class="expiryCvvInputDiv">
                  <div>
                    <label for="expiry_date">Expiry Date</label>
                    <div id='expiry_date' ref="cardExpiry" class="card-expiry-date"></div><br />
                  </div>
                  <div class="cvvInputDiv">
                    <label for="cvv_no">CVV</label>
                    <div ref="cardCvc" id='cvv_no' class="numberInputs card-cvv-number"></div>
                  </div>
                </div>
                <div>
                  <label for="promo_code">Promo Code</label>
                  <input type="text" id="promo_code" v-model="promoCode" placeholder="Enter promo code" class="promoCodeInput" />

                </div>
                <button type="submit" class="paymentformBtns">Save & Continue</button>
              </div>
            </div>
          </form>
        </div>

        <div class="all-payment-methodMain-div">
          <div>
            <p class="allCardHeading">Cards</p>
            <div class="allCardMainDiv">
              <div class="allCardChipDiv">
                <img src="@/assets/images/user/chip-black.svg" alt="Chip">
                <p><span>**** **** **** 5277</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>Exp.&nbsp;</span><span>09/2023</span>
                </p>
              </div>
              <div class="allCardChipDiv">
                <router-link to="/edit-payment-method" class="paymentCardEditButton">Edit</router-link>
                <a href="javascript:void(0)" class="paymentCardDeleteButton modalCommonCls"
                  modalAttr="deleteModal">Delete</a>
              </div>
            </div>
            <div class="allCardMainDiv">
              <div class="allCardChipDiv">
                <img src="@/assets/images/user/chip-black.svg" alt="Chip">
                <p><span>**** **** **** 9024</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>Exp.&nbsp;</span><span>12/2026</span>
                </p>
              </div>
              <div class="allCardChipDiv">
                <router-link to="/edit-payment-method" class="paymentCardEditButton">Edit</router-link>
                <a href="javascript:void(0)" class="paymentCardDeleteButton modalCommonCls"
                  modalAttr="deleteModal">Delete</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <fotter-component />
  </div>
</template>
<script>
import NavbarComponent from "./../components/common/UserNavbarComponent.vue";
import FotterComponent from "./../components/common/UserFooterComponent.vue";
import { post } from "../../network/requests";
import { getUrl } from "../../network/url";
import {
  getFirstError,
  getServerErrors,
  setRefreshToken,
  setAccessToken,
  getSearchParams,
} from "../../services/helper";
let stripe = Stripe(
    `pk_test_51ObkK6AnNnieLLFYJX30BOvMWih1D2J9cuH6XJmaQPwXZwgmrsusGsuhcPgU69bR9ex4yaOFusg79z352cIsAJmo00tO5QURnS`
  ),
  elements = stripe.elements(),
  card,
  cardNumber,
  cardExpiry,
  cardCvc,
  postalCode;
export default {
  components: { NavbarComponent, FotterComponent },
  data() {
    return {
      user: false,
      cardHolder: "",
      promoCode: ""
    };
  },
  mounted() {
    if (this.$store.state.forms.temp_user) {
      this.user = this.$store.state.forms.temp_user;
    } 

    var style = {
      base: {
        width: "100%",
        height: "35px",
        border: "none",
        "border-bottom": "1px solid #DFDFDF",
        "font-weight": "500",
        "font-size": "18px",
        color: "#202020",
        "padding-right": "2rem",
      },
    };

    cardNumber = elements.create("cardNumber", {
      showIcon: true,
      placeholder: "Card Number",
      style: style.base,
    });
    cardExpiry = elements.create("cardExpiry");
    cardCvc = elements.create("cardCvc");
    postalCode = elements.create("postalCode");

    cardNumber.mount(this.$refs.cardNumber);
    cardExpiry.mount(this.$refs.cardExpiry);
    cardCvc.mount(this.$refs.cardCvc);
  },
  methods: {
    getSource: async function(e) {
      e.preventDefault();

      this.$store.dispatch("loader", true);
      await stripe
        .createSource(cardNumber, {
          type: "card",
          currency: "USD",
          owner: {
            name: this.cardHolder,
          },
        })
        .then(response => {
          if (response.source) {
            this.user.stripe_source_id = response.source.id;
            this.createUser();
          } else {
            if (response.error) {
              this.$toast.error(response.error.message);
            } else {
              this.$toast.error("Something went wrong!");
            }
            this.$store.dispatch("loader", false);
          }
        });
    },
    createUser: function() {
      var formData = this.$store.state.forms.temp_user;
      formData["stripe_source_id"] = this.user.stripe_source_id;
      if (this.promoCode) {
        formData["promo_code"] = this.promoCode;
      }
      this.$store.dispatch("userTempForm", formData);

      post(getUrl("signup"), formData)
        .then(response => {
          this.$store.dispatch("userTempForm", false);
          setRefreshToken(response.data.data.tokens.refresh);
          setAccessToken(response.data.data.tokens.access);
          this.$store.dispatch("loader", false);
          this.$toast.success(response.data.message);
          this.$router.push("/profile-details");
        })
        .catch(error => {
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          } else {
            this.$store.dispatch("userTempFormError", getServerErrors(error));
            this.$store.dispatch("loader", false);
            this.$router.push(
              `${"/sign-up"}${
                getSearchParams("plan")
                  ? `?plan=${getSearchParams("plan")}`
                  : ""
              }`
            );
            this.$toast.error(getFirstError(error));
          }
          this.$store.dispatch("loader", false);
        });
    },
  },
};
</script>
<style>
.ElementsApp input{
    font-size: 67px!important;
}
</style>
