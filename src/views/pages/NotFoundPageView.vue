<template>
  <div>
    <div class="error-main-div">
      <div class="error-inner-div">
        <img src="@/assets/images/wlx-404.png" alt="404" class="error-inner-img" />
        <p class="error-para1">
          Sorry! The page you’re looking for, doesn’t exist.
        </p>
        <p class="error-para2">
          Please choose one of the following options to move to the next step.
        </p>
        <a
          href="javascript:void(0)"
          onclick="history.back()"
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
</template>

<style>
    .error-main-div{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
}
.error-inner-img{
    display: block;
    margin: 0 auto;
    max-width:100% ;
}
.error-inner-div{
    max-width: 840px;
background: #FFFFFF;
box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);
border-radius: 14px;
padding: 65px 116px;
}
.error-para1{
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
font-size: 24px;
text-align: center;
color: #555555;
margin:25px 0 10px 0;
}

.error-para2{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
font-size: 20px;
text-align: center;
color: #555555;
margin: 0;
}
.error-back-btn{
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 229px;
height: 45px;
border: 1px solid #0E6651;
background: #0E6651;
border-radius: 1000px;
font-weight: 600;
font-size: 14px;
text-align: center;
color: #FFFFFF;
text-decoration: none;
margin: 30px auto 10px auto;
}
.error-back-btn:hover{
background: transparent;
color: #0E6651;
}

.error-back-btn:hover svg rect{
   fill:#0E6651 ;
}
.error-dashboard-btn{
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 229px;
height: 45px;
background: transparent;
border: 1px solid #DFDFDF;
border-radius: 1000px;
font-weight: 600;
font-size: 14px;
text-align: center;
color: #000000;
text-decoration: none;
margin: 30px auto 10px auto;
}
.error-dashboard-btn:hover{
    border:1px solid #000000;
    color: #000000;
}
@media (max-width:768px) {
    .error-inner-div{
        padding:50px;
    }
}

@media (max-width:375px) {
    .error-inner-div{
        padding:35px 25px;
    }
}
    </style>