<template lang="">
  <div>
    <navbar-component />
    <section class="authMaindiv-area">
      <div class="container middleContainer">
        <div class="payment-container">
          <div class="payment-left-section">
            <div class="payment-card-preview">
              <div class="card-chip-area">
                <img src="@/assets/images/user/card-chip.svg" alt="">
                <p>CARD</p>
              </div>
              <p class="card-number-display">
                XXXX&nbsp;&nbsp;&nbsp;&nbsp;XXXX&nbsp;&nbsp;&nbsp;&nbsp;XXXX&nbsp;&nbsp;&nbsp;&nbsp;XXXX</p>

              <div class="card-bottom-info">
                <div class="card-expiry-display">
                  <p>Expiry Date</p>
                  <p class="expiry-date-text">MM/YYYY</p>
                </div>
                <div class="card-cvv-display">
                  <p>CVV</p>
                  <input type="password" class="cvv-preview" readonly placeholder="***">
                </div>
              </div>
              <p class="card-holder-display">CARD PLACE HOLDER NAME</p>
            </div>
          </div>
          
          <div class="payment-right-section">
            <form @submit="getSource">
            <div class="authInnerDiv">
              <h1 class="headingArea2 fs-32">Payment Information</h1>
              <p class="subheading">Complete your subscription</p>
              <span class="heading-underline"></span>
              
              <!-- Pricing Summary Section -->
              <div class="pricing-summary-section">
                <h3 v-if="!isLoadingPrices">{{ selectedPlan === 'monthly' ? 'Monthly Plan' : 'Annual Plan' }}</h3>
                <h3 v-else>Loading pricing...</h3>
                <div class="pricing-details">
                  <div class="price-line">
                    <span>{{ selectedPlan === 'monthly' ? 'Monthly Subscription' : 'Annual Subscription' }}</span>
                    <span class="price" v-if="!isLoadingPrices">{{ originalPrice }}</span>
                    <span class="price" v-else>...</span>
                  </div>
                  <div v-if="promoApplied" class="price-line discount">
                    <span>Promo Code Discount ({{ appliedPromoCode }})</span>
                    <span class="price">-{{ discountAmount }}</span>
                  </div>
                  <hr class="price-divider">
                  <div class="price-line total">
                    <span><strong>Total</strong></span>
                    <span class="price"><strong>{{ finalPrice }}</strong></span>
                  </div>
                </div>
              </div>

              <div class="payment-cards-accepted">
                <img src="@/assets/images/user/mastercard-logo.svg" alt="master card">
                <img src="@/assets/images/user/visa-logo.svg" alt="visa">
                <img src="@/assets/images/user/american-express-logo.svg" alt="american express">
              </div>
              
              <div class="payment-field">
                <label for="card_no">Credit Card Number</label>
                <div ref="cardNumber" id='card_no' class="stripe-input card-number"></div>
              </div>
              
              <div class="payment-field">
                <label for="name">Cardholder Name</label>
                <input type="text" id='name' class="payment-input" v-model="cardHolder"
                  placeholder="Full Name on Card" maxlength="39" />
              </div>
              
              <div class="payment-row">
                <div class="payment-field">
                  <label for="expiry_date">Expiration Date</label>
                  <div id='expiry_date' ref="cardExpiry" class="stripe-input card-expiry-date"></div>
                </div>
                <div class="payment-field">
                  <label for="cvv_no">CVV</label>
                  <div ref="cardCvc" id='cvv_no' class="stripe-input card-cvv-number"></div>
                </div>
              </div>
              
              <div class="promo-field">
                <label for="promo_code">Promo Code (Optional)</label>
                <div class="promo-input-wrapper">
                  <input type="text" id="promo_code" class="promo-input" v-model="promoCode" 
                         placeholder="Enter promo code" :disabled="promoApplied" />
                  <button type="button" @click="applyPromoCode" class="apply-promo-btn" 
                          :disabled="!promoCode.trim() || promoApplied || isApplyingPromo">
                    {{ isApplyingPromo ? 'Applying...' : promoApplied ? 'Applied' : 'Apply' }}
                  </button>
                </div>
                <div v-if="promoError" class="promo-error">{{ promoError }}</div>
                <div v-if="promoApplied" class="promo-success">
                  ✓ Promo code "{{ appliedPromoCode }}" applied successfully!
                  <button type="button" @click="removePromoCode" class="remove-promo">Remove</button>
                </div>
              </div>
              
              <div class="authButtonDiv">
                <button type="submit" class="btn">Save & Continue</button>
              </div>
              </div>
            </form>
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
import { post, get } from "../../network/requests";
import { getUrl } from "../../network/url";
import {
  getFirstError,
  getServerErrors,
  setRefreshToken,
  setAccessToken,
  getSearchParams,
  getRuntimeEnv,
} from "../../services/helper";
console.log("STRIPE KEY DEBUG:", "__VITE_STRIPE_PUBLISHABLE_KEY__");
let stripe = Stripe("__VITE_STRIPE_PUBLISHABLE_KEY__"),
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
      promoCode: "",
      selectedPlan: 'monthly',
      originalPrice: '$0.00',
      discountAmount: '$0.00',
      finalPrice: '$0.00',
      promoApplied: false,
      appliedPromoCode: '',
      promoError: '',
      isApplyingPromo: false,
      isLoadingPrices: true,
      availableCoupons: [],
      isLoadingCoupons: false,
      appliedCoupon: null,
      planPrices: {
        monthly: { price: 0, display: 'Loading...', priceId: null },
        yearly: { price: 0, display: 'Loading...', priceId: null }
      }
    };
  },
  mounted() {
    console.log("=== PAYMENT METHOD PAGE MOUNTED ===");
    console.log("Component mounted at:", new Date().toISOString());
    console.log("Current URL:", window.location.href);
    
    // Get plan from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const planParam = urlParams.get('plan');
    console.log("URL plan parameter:", planParam);
    
    if (planParam) {
      if (planParam === 'monthly') {
        this.selectedPlan = 'monthly';
      } else if (planParam === 'annual' || planParam === 'yearly') {
        this.selectedPlan = 'yearly';
      }
    }
    
    console.log("Selected plan:", this.selectedPlan);
    
    // Fetch pricing from backend or use defaults
    this.fetchPricing();
    
    // Fetch available coupons
    this.fetchAvailableCoupons();
    
    if (this.$store.state.forms.temp_user) {
      console.log("Temp user found in store:", this.$store.state.forms.temp_user);
      this.user = this.$store.state.forms.temp_user;
    } 

    var style = {
      base: {
        fontSize: "16px",
        color: "#202020",
        fontFamily: '"Open Sans", sans-serif',
        "::placeholder": {
          color: "#CACACA",
        },
      },
      focus: {
        color: "#202020",
      },
      invalid: {
        color: "#dc3545",
      },
    };

    cardNumber = elements.create("cardNumber", {
      showIcon: true,
      placeholder: "1234 5678 9012 3456",
      style: style.base,
    });
    cardExpiry = elements.create("cardExpiry", {
      placeholder: "MM / YY",
      style: style.base,
    });
    cardCvc = elements.create("cardCvc", {
      placeholder: "123",
      style: style.base,
    });
    postalCode = elements.create("postalCode");

    cardNumber.mount(this.$refs.cardNumber);
    cardExpiry.mount(this.$refs.cardExpiry);
    cardCvc.mount(this.$refs.cardCvc);
  },
  methods: {
    async fetchPricing() {
      console.log("Fetching pricing information...");
      this.isLoadingPrices = true;
      
      try {
        const monthlyPriceId = import.meta.env.VITE_STRIPE_MONTHLY_PRICE_ID || "price_1QaKMbAnNnieLLFY9TJrGVSm";
        const yearlyPriceId = import.meta.env.VITE_STRIPE_YEARLY_PRICE_ID || "price_1QaKLYAnNnieLLFYCd1nADpg";
        
        console.log("Using price IDs:", { monthlyPriceId, yearlyPriceId });
        
        // Fetch pricing from backend API
        try {
          const url = `${getUrl('stripe/prices')}?monthly_price_id=${monthlyPriceId}&yearly_price_id=${yearlyPriceId}`;
          const response = await get(url);
          
          if (response.data && response.data.prices) {
            const prices = response.data.prices;
            this.planPrices = {
              monthly: {
                price: prices.monthly.unit_amount / 100,
                display: `$${(prices.monthly.unit_amount / 100).toFixed(2)}/${prices.monthly.recurring.interval}`,
                priceId: monthlyPriceId,
                interval: prices.monthly.recurring.interval
              },
              yearly: {
                price: prices.yearly.unit_amount / 100,
                display: `$${(prices.yearly.unit_amount / 100).toFixed(2)}/${prices.yearly.recurring.interval}`,
                priceId: yearlyPriceId,
                interval: prices.yearly.recurring.interval,
                monthlyEquivalent: (prices.yearly.unit_amount / 100) / 12
              }
            };
            console.log("Loaded pricing from backend:", this.planPrices);
          } else {
            throw new Error("Invalid response from pricing API");
          }
        } catch (apiError) {
          console.error("Backend pricing API failed - cannot load pricing:", apiError.message);
          this.$toast.error("Unable to load pricing from Stripe. Please try again.");
          
          // No fallback - force user to retry or fix the API issue
          this.planPrices = {
            monthly: { 
              price: 0, 
              display: 'Error loading pricing', 
              priceId: monthlyPriceId,
              interval: 'month'
            },
            yearly: { 
              price: 0, 
              display: 'Error loading pricing', 
              priceId: yearlyPriceId,
              interval: 'year'
            }
          };
        }
        
        console.log("Final pricing:", this.planPrices);
      } catch (error) {
        console.error("Critical error fetching pricing:", error);
        this.$toast.error("Unable to load pricing. Please refresh the page.");
        
        // No fallback - system must work with live Stripe data
        this.planPrices = {
          monthly: { 
            price: 0, 
            display: 'Pricing unavailable', 
            priceId: null,
            interval: 'month'
          },
          yearly: { 
            price: 0, 
            display: 'Pricing unavailable', 
            priceId: null,
            interval: 'year'
          }
        };
      } finally {
        this.isLoadingPrices = false;
        this.updatePricing();
      }
    },
    
    async fetchAvailableCoupons() {
      console.log("Fetching available coupons from Stripe...");
      this.isLoadingCoupons = true;
      
      try {
        // Try to fetch coupons from backend API
        const response = await get(getUrl('stripe/coupons'));
        
        if (response.data && response.data.coupons) {
          this.availableCoupons = response.data.coupons.filter(coupon => {
            // Only include active coupons that haven't expired
            const now = Math.floor(Date.now() / 1000);
            return coupon.valid && 
                   (!coupon.redeem_by || coupon.redeem_by > now) &&
                   (!coupon.max_redemptions || coupon.times_redeemed < coupon.max_redemptions);
          });
          
          console.log("Available coupons:", this.availableCoupons);
        }
      } catch (error) {
        console.warn("Could not fetch coupons:", error.message);
        // Don't show error to user as coupons are optional
        this.availableCoupons = [];
      } finally {
        this.isLoadingCoupons = false;
      }
    },
    
    updatePricing() {
      const plan = this.planPrices[this.selectedPlan];
      this.originalPrice = plan.display;
      this.calculateFinalPrice();
    },
    
    calculateFinalPrice() {
      const plan = this.planPrices[this.selectedPlan];
      let finalAmount = plan.price;
      let discount = 0;
      
      if (this.promoApplied && this.appliedCoupon) {
        const coupon = this.appliedCoupon;
        
        if (coupon.percent_off) {
          // Percentage discount
          discount = finalAmount * (coupon.percent_off / 100);
        } else if (coupon.amount_off) {
          // Fixed amount discount (Stripe stores in cents)
          discount = coupon.amount_off / 100;
        }
        
        // Ensure discount doesn't exceed the total
        discount = Math.min(discount, finalAmount);
        
        this.discountAmount = '$' + discount.toFixed(2);
        finalAmount -= discount;
      } else {
        this.discountAmount = '$0.00';
      }
      
      // Ensure final amount is never negative
      finalAmount = Math.max(0, finalAmount);
      this.finalPrice = '$' + finalAmount.toFixed(2);
    },
    
    async applyPromoCode() {
      if (!this.promoCode.trim()) return;
      
      this.isApplyingPromo = true;
      this.promoError = '';
      
      try {
        // First check against available coupons if we have them
        const couponCode = this.promoCode.toUpperCase();
        
        if (this.availableCoupons.length > 0) {
          const validCoupon = this.availableCoupons.find(coupon => 
            coupon.id.toUpperCase() === couponCode || 
            (coupon.name && coupon.name.toUpperCase() === couponCode)
          );
          
          if (validCoupon) {
            // Apply the coupon
            this.promoApplied = true;
            this.appliedPromoCode = couponCode;
            this.appliedCoupon = validCoupon;
            this.calculateFinalPrice();
            this.$toast.success('Promo code applied successfully!');
            return;
          }
        }
        
        // Fallback: Try to validate with backend API
        try {
          const response = await post(getUrl('stripe/validate-coupon'), {
            coupon: couponCode,
            plan_id: this.planPrices[this.selectedPlan].priceId
          });
          
          if (response.data && response.data.valid) {
            this.promoApplied = true;
            this.appliedPromoCode = couponCode;
            this.appliedCoupon = response.data.coupon;
            this.calculateFinalPrice();
            this.$toast.success('Promo code applied successfully!');
          } else {
            this.promoError = response.data.message || 'Invalid promo code. Please try again.';
          }
        } catch (apiError) {
          // Final fallback to hardcoded valid codes for development
          const fallbackCodes = ['SAVE15', 'WELCOME10', 'DISCOUNT20'];
          
          if (fallbackCodes.includes(couponCode)) {
            this.promoApplied = true;
            this.appliedPromoCode = couponCode;
            this.appliedCoupon = {
              id: couponCode,
              percent_off: couponCode === 'SAVE15' ? 15 : couponCode === 'WELCOME10' ? 10 : 20,
              valid: true
            };
            this.calculateFinalPrice();
            this.$toast.success('Promo code applied successfully!');
          } else {
            this.promoError = 'Invalid promo code. Please try again.';
          }
        }
      } catch (error) {
        console.error("Error applying promo code:", error);
        this.promoError = 'Error applying promo code. Please try again.';
      } finally {
        this.isApplyingPromo = false;
      }
    },
    
    removePromoCode() {
      this.promoApplied = false;
      this.appliedPromoCode = '';
      this.appliedCoupon = null;
      this.promoCode = '';
      this.promoError = '';
      this.discountAmount = '$0.00';
      this.calculateFinalPrice();
    },
    getSource: async function(e) {
      e.preventDefault();
      console.log("=== PAYMENT FORM SUBMITTED ===");
      console.log("Card holder name:", this.cardHolder);
      console.log("Promo code:", this.promoCode);
      
      // Check if cardholder name is provided
      if (!this.cardHolder || !this.cardHolder.trim()) {
        console.error("Card holder name is required!");
        this.$toast.error("Please enter the cardholder name");
        return;
      }

      this.$store.dispatch("loader", true);
      console.log("Creating Stripe source...");
      
      await stripe
        .createSource(cardNumber, {
          type: "card",
          currency: "USD",
          owner: {
            name: this.cardHolder,
          },
        })
        .then(response => {
          console.log("Stripe response:", response);
          if (response.source) {
            console.log("Source created successfully:", response.source.id);
            this.user.stripe_source_id = response.source.id;
            this.createUser();
          } else {
            console.error("Failed to create source:", response);
            if (response.error) {
              console.error("Stripe error:", response.error);
              this.$toast.error(response.error.message);
            } else {
              this.$toast.error("Something went wrong!");
            }
            this.$store.dispatch("loader", false);
          }
        })
        .catch(error => {
          console.error("Stripe createSource error:", error);
          this.$toast.error("Failed to create payment source");
          this.$store.dispatch("loader", false);
        });
    },
    createUser: function() {
      console.log("=== CREATING USER ===");
      var formData = this.$store.state.forms.temp_user;
      console.log("Temp user data from store:", formData);
      
      formData["stripe_source_id"] = this.user.stripe_source_id;
      // Include pricing information
      formData["price_id"] = this.planPrices[this.selectedPlan].priceId;
      formData["plan_type"] = this.selectedPlan;
      formData["plan_price"] = this.planPrices[this.selectedPlan].price;
      formData["plan_interval"] = this.planPrices[this.selectedPlan].interval;
      // Always include promo_code, even if empty
      formData["promo_code"] = this.promoCode || "";
      // Include coupon information if applied
      if (this.appliedCoupon) {
        formData["coupon_id"] = this.appliedCoupon.id;
        formData["discount_amount"] = this.discountAmount;
      }
      
      // Strip phone number formatting for backend (remove spaces, dashes, parentheses)
      if (formData.phone_number) {
        formData.phone_number = formData.phone_number.replace(/[\s\-\(\)]/g, '');
        console.log("Phone number after formatting:", formData.phone_number);
      }
      
      console.log("Form data to submit:", formData);
      
      this.$store.dispatch("userTempForm", formData);

      const signupUrl = getUrl("signup");
      console.log("Signup URL:", signupUrl);
      console.log("Making POST request to create user...");
      
      post(signupUrl, formData)
        .then(response => {
          console.log("User creation successful:", response);
          this.$store.dispatch("userTempForm", false);
          setRefreshToken(response.data.data.tokens.refresh);
          setAccessToken(response.data.data.tokens.access);
          this.$store.dispatch("loader", false);
          this.$toast.success(response.data.message);
          console.log("Redirecting to /profile-details");
          this.$router.push("/profile-details");
        })
        .catch(error => {
          console.error("User creation failed:", error);
          console.error("Error details:", {
            code: error.code,
            message: error.message,
            response: error.response
          });
          
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            console.error("Network/Bad response error");
            this.$toast.error(error.message);
          } else {
            console.error("Server error, redirecting back to signup");
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
/* Payment Method Page Layout */
.payment-container {
    max-width: 900px;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: hidden;
    min-height: 500px;
}

.payment-left-section {
    min-width: 371px;
    background: #f8f9fa;
    padding: 40px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 60px;
}

.payment-right-section {
    flex: 1;
    background: #fff;
}

.payment-right-section form {
    height: 100%;
}

.payment-right-section .authInnerDiv {
    padding: 40px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

/* Card Preview Styling */
.payment-card-preview {
    background: #333;
    border: 1px solid #7A7D86;
    border-radius: 12px;
    width: 100%;
    max-width: 320px;
    height: 200px;
    padding: 20px 24px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    aspect-ratio: 1.6/1; /* Standard credit card ratio */
}

.card-chip-area {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0;
}

.card-chip-area img {
    width: 35px;
    height: 28px;
}

.card-chip-area p {
    color: #fff;
    font-style: italic;
    font-weight: 800;
    font-size: 18px;
    margin: 0;
}

.card-number-display {
    color: #fff;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 3px;
    margin: 0;
    text-align: center;
}

.card-bottom-info {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0;
}

.card-expiry-display,
.card-cvv-display {
    display: flex;
    flex-direction: column;
}

.card-expiry-display p,
.card-cvv-display p {
    color: #ccc;
    font-size: 10px;
    margin: 0 0 3px 0;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.expiry-date-text {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
}

.cvv-preview {
    background: transparent;
    border: none;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    width: 40px;
    text-align: left;
}

.card-holder-display {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Payment Cards Accepted */
.payment-cards-accepted {
    display: flex;
    gap: 15px;
    margin-bottom: 25px;
    justify-content: center;
}

.payment-cards-accepted img {
    width: 36px;
    height: 24px;
}

/* Form Field Styling */
.payment-field {
    margin-bottom: 25px;
}

.payment-field label {
    display: block;
    font-weight: 600;
    font-size: 14px;
    color: #565656;
    margin-bottom: 8px;
}

.payment-input {
    width: 100%;
    height: 50px;
    border: 1px solid #DFDFDF;
    border-radius: 50px;
    padding: 0 30px;
    font-size: 16px;
    color: #202020;
    background: #fff;
    transition: border-color 0.3s ease;
}

.stripe-input {
    width: 100%;
    height: 50px;
    border: 1px solid #DFDFDF;
    border-radius: 50px;
    background: #fff;
    transition: border-color 0.3s ease;
    padding: 10px 30px;
    box-sizing: border-box;
}

/* Basic Stripe Element styling - keep it simple */
.StripeElement {
    height: 30px;
    padding: 0;
    background: transparent;
    border: none;
}

.StripeElement--focus {
    box-shadow: none;
}

.payment-input:focus,
.stripe-input:focus-within {
    border: 1px solid #298B74 !important;
    outline: none;
}

.payment-input::placeholder {
    color: #CACACA;
    font-weight: 400;
}

/* Two column layout for expiry and CVV */
.payment-row {
    display: flex;
    gap: 15px;
    margin-bottom: 25px;
}

.payment-row .payment-field {
    flex: 1;
    margin-bottom: 0;
}

/* Promo code styling */
.promo-field {
    position: relative;
    margin-bottom: 25px;
}

.promo-input-wrapper {
    position: relative;
}

.promo-input {
    width: 100%;
    height: 50px;
    border: 1px solid #DFDFDF;
    border-radius: 50px;
    padding: 0 120px 0 30px;
    font-size: 16px;
    color: #202020;
    background: #fff;
}

.promo-input:focus {
    border: 1px solid #298B74;
    outline: none;
}

.apply-promo-btn {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    height: 40px;
    padding: 0 20px;
    background: #0E6651;
    border: 1px solid #0E6651;
    border-radius: 25px;
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 12px;
    color: #FFF;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.3s ease;
}

.apply-promo-btn:hover:not(:disabled) {
    background: #0d5a47;
}

.apply-promo-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: #ccc;
    border-color: #ccc;
}

/* Pricing Summary Section */
.pricing-summary-section {
    background: #f8f9fa;
    padding: 20px;
    margin: 25px 0;
    border-radius: 8px;
    border: 1px solid #e9ecef;
}

.pricing-summary-section h3 {
    margin: 0 0 15px 0;
    color: #0e6651;
    font-size: 18px;
    font-weight: 600;
}

.pricing-details {
    margin: 0;
}

.price-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 0;
    font-size: 14px;
}

.price-line.discount {
    color: #28a745;
}

.price-line.total {
    font-size: 16px;
    border-top: 1px solid #dee2e6;
    padding-top: 10px;
    margin-top: 6px;
    font-weight: 600;
}

.price {
    font-weight: 500;
}

.price-divider {
    margin: 8px 0;
    border: none;
    border-top: 1px solid #dee2e6;
}

/* Promo messaging */
.promo-error {
    color: #dc3545;
    font-size: 12px;
    margin-top: 5px;
}

.promo-success {
    color: #28a745;
    font-size: 12px;
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* Submit Button */
.authButtonDiv {
    margin-top: 30px;
}

.authButtonDiv .btn {
    border: 1px solid #0E6651;
    border-radius: 50px;
    width: 100%;
    padding: .75rem 2rem;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    background: #0E6651;
    color: #fff;
    display: block;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
}

.authButtonDiv .btn:hover {
    border: 1px solid #0E6651;
    background: #fff;
    color: #0E6651;
}

/* Promo messaging */
.promo-error {
    color: #dc3545;
    font-size: 12px;
    margin-top: 5px;
}

.promo-success {
    color: #28a745;
    font-size: 12px;
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.remove-promo {
    background: none;
    border: none;
    color: #dc3545;
    text-decoration: underline;
    cursor: pointer;
    font-size: 12px;
    padding: 0;
    margin-left: 10px;
}

/* Responsive Design */
@media (max-width: 768px) {
    .payment-container {
        flex-direction: column;
        max-width: 100%;
        margin: 0;
        border: none;
        border-radius: 0;
    }
    
    .payment-left-section {
        min-width: 100%;
        padding: 30px 20px;
    }
    
    .payment-right-section .authInnerDiv {
        padding: 30px 20px;
    }
    
    .payment-row {
        flex-direction: column;
        gap: 0;
    }
    
    .payment-row .payment-field {
        margin-bottom: 25px;
    }
    
    .apply-promo-btn {
        position: static;
        transform: none;
        width: 100%;
        margin-top: 10px;
        height: 45px;
    }
    
    .promo-input {
        padding-right: 30px;
    }
}

@media (max-width: 520px) {
    .payment-cards-accepted {
        justify-content: flex-start;
        margin-bottom: 20px;
        gap: 10px;
    }
    
    .pricing-summary-section {
        padding: 15px;
        margin: 20px 0;
    }
    
    .payment-left-section {
        padding: 20px 15px;
    }
    
    .payment-right-section .authInnerDiv {
        padding: 20px 15px;
    }
}
</style>
