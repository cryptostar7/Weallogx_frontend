<template lang="">
  <div>
    <navbar-component />
    <section class="authMaindiv-area">
      <div class="container middleContainer">
        <div class="paymentMethod-topBtns">
          <a href="#" class="addCardCls active">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H14V18H4V12H22V6C22 4.89 21.11 4 20 4ZM20 8H4V6H20V8ZM24 17V19H21V22H19V19H16V17H19V14H21V17H24Z"
                fill="white" />
            </svg>
            &nbsp;&nbsp;Add New Card</a>
          <a href="#" class="allCardCls" onclick="allCardFun()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 6C0 5.20435 0.316071 4.44129 0.87868 3.87868C1.44129 3.31607 2.20435 3 3 3H21C21.7956 3 22.5587 3.31607 23.1213 3.87868C23.6839 4.44129 24 5.20435 24 6V18C24 18.7956 23.6839 19.5587 23.1213 20.1213C22.5587 20.6839 21.7956 21 21 21H3C2.20435 21 1.44129 20.6839 0.87868 20.1213C0.316071 19.5587 0 18.7956 0 18V6ZM3 4.5C2.60218 4.5 2.22064 4.65804 1.93934 4.93934C1.65804 5.22064 1.5 5.60218 1.5 6V7.5H22.5V6C22.5 5.60218 22.342 5.22064 22.0607 4.93934C21.7794 4.65804 21.3978 4.5 21 4.5H3ZM22.5 10.5H1.5V18C1.5 18.3978 1.65804 18.7794 1.93934 19.0607C2.22064 19.342 2.60218 19.5 3 19.5H21C21.3978 19.5 21.7794 19.342 22.0607 19.0607C22.342 18.7794 22.5 18.3978 22.5 18V10.5Z"
                fill="#0E6651" />
              <path
                d="M3 15C3 14.6022 3.15804 14.2206 3.43934 13.9393C3.72064 13.658 4.10218 13.5 4.5 13.5H6C6.39782 13.5 6.77936 13.658 7.06066 13.9393C7.34196 14.2206 7.5 14.6022 7.5 15V16.5C7.5 16.8978 7.34196 17.2794 7.06066 17.5607C6.77936 17.842 6.39782 18 6 18H4.5C4.10218 18 3.72064 17.842 3.43934 17.5607C3.15804 17.2794 3 16.8978 3 16.5V15Z"
                fill="#0E6651" />
            </svg>
            &nbsp;&nbsp;All Saved Cards</a>
        </div>
        <div class="payment-methodMain-div">
          <div class="payment-left-card-main-div">
            <div class="payment-left-card">
              <div class="paymentCardTopChipArea">
                <img src="@/assets/images/user/card-chip.svg" alt="">
                <p>CARD</p>
              </div>
              <p class="payment-left-card-number showingCardNumber">XXXX&nbsp;&nbsp;&nbsp;&nbsp;XXXX&nbsp;&nbsp;&nbsp;&nbsp;XXXX&nbsp;&nbsp;&nbsp;&nbsp;XXXX</p>
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
          <div class="payment-right-card-main-div">
            <div>
              <div class="payment-right-heading-div">
                <p>Add New Card</p>
                <img src="@/assets/images/user/mastercard-logo.svg" alt="master card">
                <img src="@/assets/images/user/visa-logo.svg" alt="master card">
                <img src="@/assets/images/user/american-express-logo.svg" alt="master card">
              </div>
              <div class="paymentMethodFormDiv">
                <div>
                  <label for="card_no">Card Number</label>
                  <!-- <img id="brand-icon" src="@/assets/images/user/master-card.svg" alt="Marter Card"> -->
                  <!-- <span class="brand"><i class="pf pf-credit-card" id="brand-icon"></i></span> -->
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
                    <img src="@/assets/images/user/password-view.svg" alt="Password" class="showHideImg">
                    <label for="cvv_no">CVV</label>
                    <div ref="cardCvc" id='cvv_no' class="numberInputs card-cvv-number"></div>
                  </div>
                </div>
                <button type="submit" class="paymentformBtns" @click="getSource()">Save Card</button>
              </div>
            </div>
          </div>
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
import { getFirstError, getServerErrors, setRefreshToken, setAccessToken } from "../../services/helper";
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
  components: { NavbarComponent, FotterComponent },
  data() {
    return {
      user: false,
      cardHolder: "",
    };
  },
  mounted() {
    if (this.$store.state.forms.temp_user) {
      this.user = this.$store.state.forms.temp_user;
    } else {
      this.$router.push("/sign-up");
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
      style: style,
    });
    cardExpiry = elements.create("cardExpiry");
    cardCvc = elements.create("cardCvc");
    postalCode = elements.create("postalCode");

    cardNumber.mount(this.$refs.cardNumber);
    cardExpiry.mount(this.$refs.cardExpiry);
    cardCvc.mount(this.$refs.cardCvc);

    cardNumber.on("change", function(event) {
      // Switch brand logo
      if (event.brand) {
      }
    });
  },
  methods: {
    getSource: async function() {
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
          this.user.stripe_source_id = response.source.id;
          this.createUser();
        });
    },
    createUser: function() {
      var formData = this.$store.state.forms.temp_user;
      formData["stripe_source_id"] = this.user.stripe_source_id;
      this.$store.dispatch("userTempForm", formData);

      post(getUrl("signup"), formData)
        .then(response => {
          setRefreshToken(response.data.data.tokens.refresh);
          setAccessToken(response.data.data.tokens.access);
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
    },
  },
};
</script>
<style lang="">
</style>