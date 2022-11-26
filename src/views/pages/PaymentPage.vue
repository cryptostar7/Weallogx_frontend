<template lang="">
  <div>
    <section class="authMaindiv-area">
      <div class="container middleContainer">
        <div class="headingDivPricing paymentHeading">
          <h1 class="headingArea">Select <span>Payment</span> Method</h1>
        </div>

        <!-- View edit payment method Start -->
        <div class="payment-methodMain-div paymentMiddleDivMain">
          <div class="paymentLeftCardDiv">
            <p class="paymentLeftCardHead">Saved Cards</p>
            <div class="saveCardDiv">
              <img src="@/assets/images/user/small-card-chip.svg" alt="chip">
              <div>
                <p class="cardNumPayment">XXXX XXXX XXXX 3333</p>
                <p class="expiryDatePayment">12/24</p>
                <p class="namePayment">Rohit Sharma</p>
                <p class="cvvNumPayment">234</p>
              </div>
              <img src="@/assets/images/user/card-checkbox.svg" alt="Checkbox" class="savedCardCheckBox">
            </div>
            <div class="saveCardDiv">
              <img src="@/assets/images/user/small-card-chip.svg" alt="chip">
              <div>
                <p class="cardNumPayment">XXXX XXXX XXXX 1234</p>
                <p class="expiryDatePayment">07/29</p>
                <p class="namePayment">Rahul Raj</p>
                <p class="cvvNumPayment">567</p>
              </div>
            </div>
            <div class="saveCardDiv">
              <img src="@/assets/images/user/small-card-chip.svg" alt="chip">
              <div>
                <p class="cardNumPayment">XXXX XXXX XXXX 9990</p>
                <p class="expiryDatePayment">12/24</p>
                <p class="namePayment">Rohit Sharma</p>
                <p class="cvvNumPayment">234</p>
              </div>
            </div>
          </div>
          <div class="payment-right-card-main-div PaymentMiddleFormDiv">
            <div>
              <div class="payment-right-heading-div">
                <div class="editPayTopParaAndBtn">
                  <p>Pay using credit card</p>
                </div>
                <img src="@/assets/images/user/mastercard-logo.svg" alt="master card">
                <img src="@/assets/images/user/visa-logo.svg" alt="master card">
                <img src="@/assets/images/user/american-express-logo.svg" alt="master card">
              </div>
              <div class="paymentMethodFormDiv">
                <form action="#">
                  <div>
                    <label for="card_no">Card Number</label>
                    <img src="@/assets/images/user/master-card.svg" alt="Marter Card">
                    <input type="text" id='card_no' class="numberInputs card-number" placeholder="Card Number"
                      maxlength="20" value="4567 7856 7869 4569">
                  </div>
                  <div>
                    <label for="name">Name</label>
                    <input type="text" id='name' class="card-place-holder-name" placeholder="Card Place Holder Name"
                      maxlength="39" value="Rohit Kumar Sharma">
                  </div>
                  <div class="expiryCvvInputDiv">
                    <div>
                      <label for="expiry_date">Expiry Date</label>
                      <input type="text" id='expiry_date' class="numberInputs card-expiry-date" placeholder="MM/YYYY"
                        maxlength="7" value="04/35">
                    </div>
                    <div class="cvvInputDiv">
                      <img src="@/assets/images/user/password-view.svg" alt="Password" class="showHideImg">
                      <label for="cvv_no">CVV</label>

                      <input type="password" id='cvv_no' placeholder="CVV" class="numberInputs card-cvv-number"
                        maxlength="3" value="456">
                    </div>
                  </div>
                  <div class="paymentCheckboxDiv">
                    <label class="paymentSwitch">
                      <input type="checkbox" id="saveCard">
                      <span class="paymentSlider"></span>
                    </label>
                    <label for="saveCard">Save this card for future use</label>
                  </div>

                  <button type="submit" class="paymentformBtns ">Pay Now</button>
                </form>
              </div>
            </div>
          </div>
          <div>
            <div class="paymentRightCardDiv">
              <p class="parmentRightHead">Summary</p>
              <div class="parmentRightCard rightCardWithBorder">
                <p>Original Price</p>
                <p>$65.00</p>
              </div>
              <div class="parmentRightCard">
                <p>Subtotal:</p>
                <p>$65.00</p>
              </div>
              <div class="parmentRightCard">
                <p>Estimated Tax:</p>
                <p>$0</p>
              </div>
              <div class="parmentRightCard mediumText">
                <p>Total</p>
                <p>$65.00</p>
              </div>
              <div class="paymentCuponCodeDiv">
                <p>Have a coupon code?</p>
                <div class="cuponInputAndButton">
                  <input type="text" placeholder="Enter Coupon code">
                  <a href="javascript:void(0)">Apply</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="">

</style>