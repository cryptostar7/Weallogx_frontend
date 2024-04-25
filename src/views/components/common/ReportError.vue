<template lang="">
  <div class="report-client-list-div cmp_cumulative_values">
    <div class="ComparativeTableMainDiv rightDivTop4">
      <div class="container-fluid">
        <div class="error-main-div flex-gap-12">
          <div class="error-inner-div text-center">
            <img
              src="@/assets/images/icons/error.svg"
              class="img-fluid"
              alt="Error"
            />
            <p class="error-para1" v-if="$props.message">
              {{ $props.message }}
            </p>
            <p class="error-para1" v-else>
              Something did not work well, please check your entered data.
            </p>
            <p class="error-para2">
              Or refresh and try again or check back later.
            </p>
            <a
              href="javascript:void(0)"
              @click="$router.go(-1)"
              class="error-back-btn"
            >
              <svg
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="6.53516"
                  y="12.3039"
                  width="8"
                  height="2"
                  rx="1"
                  transform="rotate(-135 6.53516 12.3039)"
                  fill="white"
                />
                <rect
                  x="0.878906"
                  y="6.53436"
                  width="8"
                  height="2"
                  rx="1"
                  transform="rotate(-45 0.878906 6.53436)"
                  fill="white"
                />
              </svg>

              &nbsp;&nbsp; Go Back</a
            >
            <router-link to="/profile-details" class="error-dashboard-btn">
              Go to Dashboard&nbsp;&nbsp;
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.54346"
                  y="0.328491"
                  width="8"
                  height="2"
                  rx="1"
                  transform="rotate(45 1.54346 0.328491)"
                  fill="black"
                />
                <rect
                  x="7.19971"
                  y="6.09802"
                  width="8"
                  height="2"
                  rx="1"
                  transform="rotate(135 7.19971 6.09802)"
                  fill="black"
                />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.error-main-div {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 55px;
}
.error-inner-img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
.error-inner-div {
  max-width: 840px;
  background: #ffffff;
  border-radius: 14px;
  padding: 0 85px;
}
.error-para1 {
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  color: #555;
  margin: 25px 0 6px 0;
}

.error-para2 {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #555;
  margin: 0;
}
.error-back-btn {
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 229px;
  height: 45px;
  border: 1px solid #0e6651;
  background: #0e6651;
  border-radius: 1000px;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
  text-decoration: none;
  margin: 30px auto 10px auto;
}
.error-back-btn:hover {
  background: transparent;
  color: #0e6651;
}

.error-back-btn:hover svg rect {
  fill: #0e6651;
}
.error-dashboard-btn {
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 229px;
  height: 45px;
  background: transparent;
  border: 1px solid #dfdfdf;
  border-radius: 1000px;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  color: #000000;
  text-decoration: none;
  margin: 15px auto 10px auto;
}
.error-dashboard-btn:hover {
  border: 1px solid #000000;
  color: #000000;
}
.side-logo-div {
  position: absolute;
  left: 0.75rem;
  top: 0.75rem;
}
.side-logo-div img {
  max-width: 200px;
}
@media (max-width: 768px) {
  .error-main-div {
    padding-top: 15px;
  }
  .error-inner-div {
    padding: 35px;
  }
  .side-logo-div {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 375px) {
  .error-inner-div {
    padding: 35px 25px;
  }
}
</style>
