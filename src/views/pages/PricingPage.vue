<template lang="">
    <div>
        <section class="authMaindiv-area">
            <div class="container middleContainer">

                <div class="headingMiddleArea">
                    <h1>Plans</h1>
                    <div>
                        <p></p>
                    </div>
                </div>
                <p class="headingMiddlePara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum est
                    pellentesque arcu aliquam.</p>
                <div class="pricingMainDiv">
                    <div class="pricingBox">
                        <div class="pricingTopClrDiv">
                            <img src="@/assets/images/user/orange-pricing-bg.png" alt="" class="pricingImgColor">
                            <div>
                                <img src="@/assets/images/user/pricing-rocket.svg" alt="" class="pricingRocket">
                                <p class="pricingPlanPara">14 Days Free Trial</p>

                                <p class="pricingPlanTimePeriod">14 <span>days left</span> </p>
                            </div>
                        </div>

                        <div class="pricingBottomDiv">
                            <ul class="pricingFeaturesFirstUl">
                                <li>Unlimited Scenarios</li>
                                <li>Unlimited Reports and Presentations </li>
                                <li>Dynamic, interactive graphs and charts</li>
                                <li>Customizable Reports and Presentations</li>
                                <li>Powerful comparative analysis</li>
                                <li>Powerful historical simulations</li>
                                <li>Share PDF and web-versions of your presentations</li>
                                <li>Personalized support</li>
                                <li>Price lock! No matter how many new features we add in the future, your subscription
                                    price is locked
                                    for life. </li>
                            </ul>

                            <div class="authButtonDiv orangeButton">
                                <router-link to="/payment-method"><button type="button" class="">Activate Now</button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="pricingBox">
                        <div class="pricingTopClrDiv">
                            <img src="@/assets/images/user/green-pricing-bg.png" alt="" class="pricingImgColor">
                            <div>
                                <img src="@/assets/images/user/pricing-rocket.svg" alt="" class="pricingRocket">
                                <p class="pricingPlanPara">14 Days Free Trial</p>

                                <p class="pricingPlanTimePeriod pricingGreenPara">$79<span> / Month</span> </p>
                                <p class="pricingPlanBottomPara">(To be paid monthly)</p>
                            </div>
                        </div>

                        <div class="pricingBottomDiv">
                            <ul class="pricingFeaturesFirstUl pricingGreenUl">
                                <li>Unlimited Scenarios</li>
                                <li>Unlimited Reports and Presentations </li>
                                <li>Dynamic, interactive graphs and charts</li>
                                <li>Customizable Reports and Presentations</li>
                                <li>Powerful comparative analysis</li>
                                <li>Powerful historical simulations</li>
                                <li>Share PDF and web-versions of your presentations</li>
                                <li>Personalized support</li>
                                <li>Price lock! No matter how many new features we add in the future, your subscription
                                    price is locked
                                    for life. </li>
                            </ul>

                            <div class="authButtonDiv greenButton">
                                <router-link to="/payment"><button type="submit">Buy Now</button></router-link>
                            </div>
                        </div>
                    </div>
                    <div class="pricingBox">
                        <div class="pricingTopClrDiv">

                            <img src="@/assets/images/user/blue-pricing-bg.png" alt="" class="pricingImgColor">
                            <div class="priceOffPercent">18% Off</div>
                            <div>
                                <img src="@/assets/images/user/pricing-rocket.svg" alt="" class="pricingRocket">
                                <p class="pricingPlanPara">14 Days Free Trial</p>

                                <p class="pricingPlanTimePeriod pricingBluePara">$65<span> / Month</span> </p>
                                <p class="pricingPlanBottomPara">(To be paid Yearly)</p>
                            </div>
                        </div>

                        <div class="pricingBottomDiv">
                            <ul class="pricingFeaturesFirstUl pricingBlueUl">
                                <li>Unlimited Scenarios</li>
                                <li>Unlimited Reports and Presentations </li>
                                <li>Dynamic, interactive graphs and charts</li>
                                <li>Customizable Reports and Presentations</li>
                                <li>Powerful comparative analysis</li>
                                <li>Powerful historical simulations</li>
                                <li>Share PDF and web-versions of your presentations</li>
                                <li>Personalized support</li>
                                <li>Price lock! No matter how many new features we add in the future, your subscription
                                    price is locked
                                    for life. </li>
                            </ul>

                            <div class="authButtonDiv blueButton">
                                <router-link to="/payment"><button type="submit">Buy Now</button></router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="faqMainDivPricing">
                    <div class="headingDivPricing">
                        <h1 class="headingArea">Questions? <span>Look</span> here</h1>
                    </div>

                    <div class="pricingFaqMaintDiv">
                        <div class="pricingFaqleftDiv">
                            <div class="faqLeftheading" style="position:sticky ;top: 0;">
                                Table of contents
                            </div>
                            <div data-id="1">
                                Lorem ipsum first
                            </div>
                            <div data-id="2">
                                Lorem ipsum dolor
                            </div>
                            <div class="active" data-id="1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                            <div data-id="3">
                                Vivamus dictum est pellentesque arcu aliquam
                            </div>
                            <div data-id="4">
                                amet, consectetur adipiscing dictum ealiquam. Lorem ipsum dolor sit amet,
                            </div>
                            <div data-id="5">
                                Lorem ipsum dolor
                            </div>
                            <div data-id="6">
                                Vivamus dictum est pellentese arcu, adipiscing elit.
                            </div>
                            <div data-id="7">
                                Lorem ipsum dolor pellentese
                            </div>
                            <div data-id="8">
                                Lorem ipsum dolor Lorem ipsum dolor sit
                            </div>
                            <div data-id="9">
                                Lorem ipsum doloraliquam
                            </div>
                            <div data-id="10">
                                Lorem ipsum dolor
                            </div>
                            <div data-id="11">
                                Lorem ipsum dolor last
                            </div>
                        </div>
                        <div class="pricingFaqRightDiv">
                            <div v-for="(item, index) in faq" :key="index" class="faqRightEachQueAns tab-id-1">
                                <div class="faqRightQue">
                                    <img :src="`/src/assets/images/user/faq-${item.active ? 'close':'open'}-icon.svg`" alt="" @click="() => item.active = !item.active">
                                    {{item.question}}
                                </div>
                                <div :class="`faqRightAns ${item.active ? 'active':''}`">
                                   {{item.answer}}
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
        data() {
            return {
                faq:[
                    {
                        question:'Lorem ipsum dolor sit amet',
                        answer:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum est pellentese arcu aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum est pellentesque arcu aliquam. Lorem ipsum dolor sit amet,',
                        active:false,
                    },
                    {
                        question:'Lorem ipsum dolor sit amet',
                        answer:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum est pellentese arcu aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum est pellentesque arcu aliquam. Lorem ipsum dolor sit amet,',
                        active:false,
                    },
                    {
                        question:'Lorem ipsum dolor sit amet',
                        answer:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum est pellentese arcu aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum est pellentesque arcu aliquam. Lorem ipsum dolor sit amet,',
                        active:false,
                    },
                    {
                        question:'Lorem ipsum dolor sit amet',
                        answer:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum est pellentese arcu aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum est pellentesque arcu aliquam. Lorem ipsum dolor sit amet,',
                        active:false,
                    },
                    {
                        question:'Lorem ipsum dolor sit amet',
                        answer:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum est pellentese arcu aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum est pellentesque arcu aliquam. Lorem ipsum dolor sit amet,',
                        active:false,
                    },
                    {
                        question:'Lorem ipsum dolor sit amet',
                        answer:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum est pellentese arcu aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum est pellentesque arcu aliquam. Lorem ipsum dolor sit amet,',
                        active:false,
                    },
                    {
                        question:'Lorem ipsum dolor sit amet',
                        answer:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum est pellentese arcu aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum est pellentesque arcu aliquam. Lorem ipsum dolor sit amet,',
                        active:false,
                    },
                ]
            }
        },
    }
</script>
<style lang="">

</style>