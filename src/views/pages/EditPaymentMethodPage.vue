<template lang="">
    <div>
        <section class="authMaindiv-area">
            <div class="container middleContainer">
                <div class="backAndTopBtns">
                    <router-link to="/payment-method" class="paymentBackBtn"><img src="@/assets/images/user/back-arrow.svg"
                            alt="Back">&nbsp;Back</router-link>

                    <div class="paymentMethod-topBtns btnsWithBackBtn">
                        <router-link to="/payment-method" class="addCardCls">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H14V18H4V12H22V6C22 4.89 21.11 4 20 4ZM20 8H4V6H20V8ZM24 17V19H21V22H19V19H16V17H19V14H21V17H24Z"
                                    fill="white" />
                            </svg>
                            &nbsp;&nbsp;Add New Card</router-link>
                        <a href="#" class="allCardCls active">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0 6C0 5.20435 0.316071 4.44129 0.87868 3.87868C1.44129 3.31607 2.20435 3 3 3H21C21.7956 3 22.5587 3.31607 23.1213 3.87868C23.6839 4.44129 24 5.20435 24 6V18C24 18.7956 23.6839 19.5587 23.1213 20.1213C22.5587 20.6839 21.7956 21 21 21H3C2.20435 21 1.44129 20.6839 0.87868 20.1213C0.316071 19.5587 0 18.7956 0 18V6ZM3 4.5C2.60218 4.5 2.22064 4.65804 1.93934 4.93934C1.65804 5.22064 1.5 5.60218 1.5 6V7.5H22.5V6C22.5 5.60218 22.342 5.22064 22.0607 4.93934C21.7794 4.65804 21.3978 4.5 21 4.5H3ZM22.5 10.5H1.5V18C1.5 18.3978 1.65804 18.7794 1.93934 19.0607C2.22064 19.342 2.60218 19.5 3 19.5H21C21.3978 19.5 21.7794 19.342 22.0607 19.0607C22.342 18.7794 22.5 18.3978 22.5 18V10.5Z"
                                    fill="#0E6651" />
                                <path
                                    d="M3 15C3 14.6022 3.15804 14.2206 3.43934 13.9393C3.72064 13.658 4.10218 13.5 4.5 13.5H6C6.39782 13.5 6.77936 13.658 7.06066 13.9393C7.34196 14.2206 7.5 14.6022 7.5 15V16.5C7.5 16.8978 7.34196 17.2794 7.06066 17.5607C6.77936 17.842 6.39782 18 6 18H4.5C4.10218 18 3.72064 17.842 3.43934 17.5607C3.15804 17.2794 3 16.8978 3 16.5V15Z"
                                    fill="#0E6651" />
                            </svg>
                            &nbsp;&nbsp;All Saved Cards</a>
                    </div>

                </div>

                <div class="payment-methodMain-div">
                    <div class="payment-left-card-main-div">
                        <div class="payment-left-card">
                            <div class="paymentCardTopChipArea">
                                <img src="@/assets/images/user/card-chip.svg" alt="">
                                <p>CARD</p>
                            </div>
                            <p class="payment-left-card-number showingCardNumber">
                                XXXX&nbsp;&nbsp;&nbsp;&nbsp;XXXX&nbsp;&nbsp;&nbsp;&nbsp;XXXX&nbsp;&nbsp;&nbsp;&nbsp;4569
                            </p>
                            <div class="cardExpiryDateCvvMainDiv">
                                <div class="cardExpiryDateDiv">
                                    <p>Expiry Date</p>
                                    <p class="showingExpiryDate">04/2035</p>
                                </div>
                                <div class="cardCvvDiv">
                                    <p>CVV</p>
                                    <input type="password" class="ShowingCvv" readonly placeholder="***">
                                </div>
                            </div>
                            <p class="cardPlaceHolderName">Rohit Kumar Sharma</p>
                        </div>
                        <div class="paymentRemoveCard">
                            <a href="javascript:void(0)" class="paymentRemoveCard modalCommonCls"
                                modalAttr="deleteModal">Remove
                                Card</a>
                        </div>
                    </div>
                    <div class="payment-right-card-main-div">
                        <div>
                            <div class="payment-right-heading-div">
                                <div class="editPayTopParaAndBtn">
                                    <p>Card Details</p>
                                    <a href="javascript:void(0)" class="paymentCardEditButton2">
                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.8901 4.04081L16.6001 6.76081C17.0601 7.22081 17.0201 8.00081 16.6301 8.40081L8.62006 16.4208L3.06006 17.5808L4.22006 12.0008C4.22006 12.0008 11.8201 4.37081 12.2101 3.97081C12.6001 3.58081 13.4301 3.58081 13.8901 4.04081ZM11.1601 6.83081L5.57006 12.4408L6.68006 13.5508L12.2201 7.90081L11.1601 6.83081ZM8.19006 15.0608L13.7701 9.46081L12.7001 8.38081L7.11006 13.9808L8.19006 15.0608Z"
                                                fill="#333333" />
                                        </svg>

                                        Edit</a>

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
                                        <input type="text" id='card_no' class="numberInputs card-number"
                                            placeholder="Card Number" maxlength="20" value="4567 7856 7869 4569"
                                            readonly>
                                    </div>
                                    <div>
                                        <label for="name">Name</label>
                                        <input type="text" id='name' class="card-place-holder-name"
                                            placeholder="Card Place Holder Name" maxlength="39"
                                            value="Rohit Kumar Sharma" readonly>
                                    </div>
                                    <div class="expiryCvvInputDiv">
                                        <div>
                                            <label for="expiry_date">Expiry Date</label>
                                            <input type="text" id='expiry_date' class="card-expiry-date"
                                                placeholder="MM/YYYY" maxlength="7" value="04/2035" readonly>
                                        </div>
                                        <div class="cvvInputDiv">
                                            <img src="@/assets/images/user/password-view.svg" alt="Password" class="showHideImg">
                                            <label for="cvv_no">CVV</label>

                                            <input type="password" id='cvv_no' placeholder="CVV"
                                                class="numberInputs card-cvv-number" maxlength="3" value="456" readonly>
                                        </div>
                                    </div>

                                    <button type="submit" class="paymentformBtns editPaymentformBtns">Update
                                        Card</button>
                                </form>
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