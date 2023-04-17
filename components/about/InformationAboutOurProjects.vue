<template>
 <div class="information-about-our-projects">
   <div class="container">
     <div class="cms-block-stub information-about-our-projects__message">
       В виду того, что в любой крупной организации подписывается соглашение о неразглашении, мы не можем показать Вам список наших реализованных проектов, однако мы можем описать сферы, в которых мы компетентны:
     </div>
     <div class="information-about-our-projects__content">
       <div class="left">
         <div class="information-projects__works">
           <div>Строительные компании</div>
           <div>Крипто-кошельки</div>
           <div>Маркетплейсы</div>
           <div>Онлайн-магазины</div>
           <div>Онлайн-магазины</div>
           <div>Гос. заказы</div>
         </div>
       </div>
       <div class="center">
         <img class="information-projects__center-svg" src="~/assets/svg/information-about-our-projects/center-image.svg"/>
       </div>
       <div class="right"></div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: "InformationAboutOurProjects"
}
</script>

<style lang="scss" scoped>
.information-about-our-projects {
  padding: 60px 0;
  box-sizing: border-box;
  background: linear-gradient(90.66deg, #161616 0.57%, #160C1B 25.09%, #160313 62.84%, #000000 99.49%);
}
.information-about-our-projects__message {
  margin-bottom: 50px;
}
.information-about-our-projects__content {
  display: flex;
  align-items: center;

  .left, .right {
    flex: 1;
  }
  .center {
    width: 510px;
    height: 510px;
    margin: 0 30px;
  }
}

.information-projects__works {
  display: flex;
  flex-direction: column;

  & > * {
    margin-top: 20px;
    padding: 15px 20px;
    box-sizing: border-box;
    border-radius: 0px 25px 25px 0px;
    position: relative;
    z-index: 1;

    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: #969696;

    &:after {
      content: "";
      position: absolute;
      top: -1px; left: -1px; right: -1px; bottom: -1px;
      z-index: -2;
      background: linear-gradient(259.54deg, #48464B 39.91%, rgba(0, 0, 0, 0) 57.89%);
      border-radius: 0 25px 25px 0;
    }
    &:before {
      content: "";
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      z-index: -1;
      border-radius: 0 25px 25px 0;
      background: linear-gradient(90.66deg, #16161600 0.57%, #160C1B 25.09%, #160313 62.84%, #000000 99.49%);
    }
  }
}
.information-projects__center-svg {
  -webkit-animation: rotating 7s linear infinite;
  -moz-animation: rotating 7s linear infinite;
  -ms-animation: rotating 7s linear infinite;
  -o-animation: rotating 7s linear infinite;
  animation: rotating 7s linear infinite;
}

@-webkit-keyframes rotating {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
