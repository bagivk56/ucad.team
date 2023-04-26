<template>
 <div class="about-project custom-section metal">
   <div class="container">
     <div class="about-project__content">
       <h1 class="custom-section__title">
         {{$t('О проекте.О проекте')}}
       </h1>
       <div class="cms-block-stub">
         {{$t('О проекте.Сообщение')}}
       </div>

       <div class="about-project__text">
         <span>UCAD</span>
         <span class="dot">.</span>
         <span class="blue"> T</span>
       </div>
     </div>
   </div>

   <div class="about-project__image">
     <img src="~/assets/jpg/about-project/banner-full.jpg" alt="UCAD"/>
   </div>
 </div>
</template>

<script>
export default {
  name: "AboutProject"
}
</script>

<style lang="scss" scoped>
.about-project {
  padding-top: 240px;
  padding-bottom: 100px;
  box-sizing: border-box;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0; left: 0; bottom: 0;
    width: 100%;
    max-width: 70%;
    background: linear-gradient(89.13deg, #141617 28.18%, #12242B 53.82%, rgba(21, 34, 39, 0.75429) 71.41%, rgba(22, 22, 22, 0) 99.29%);
  }
}
.about-project__content {
  max-width: 670px;
  position: relative;

  .cms-block-stub {
    font-weight: 500;
  }
}
.about-project__image {
  position: absolute;
  top: 0; right: 0; bottom: 0;
  z-index: -2;
  img {
    width: 100%;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.about-project__text {
  position: absolute;
  left: calc(100% + 90px); bottom: 0;

  font-family: 'Inter';
  font-weight: 700;
  font-size: 100px;
  line-height: 121px;
  text-align: center;
  color: #FFFFFF;
  white-space: nowrap;

  .dot {
    color: rgba(66, 9, 176, 1);
  }
  .blue {
    color: rgba(8, 122, 255, 1);
  }
}

@media (max-width: 1199px) {
  .about-project {
    padding-top: 120px;
    padding-bottom: 80px;
    &:before {
      max-width: initial;
      background: linear-gradient(90.55deg, #161616bd 51.84%, rgb(22 22 22 / 50%) 64.39%, rgba(22, 22, 22, 0) 86.99%);
    }
  }
  .about-project__text {
    display: none;
  }
}
</style>
