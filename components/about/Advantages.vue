<template>
 <div class="advantages-section custom-section metal">
   <div class="container">
     <div class="advantages-section__content">
       <div class="left">
         <Card
           v-for="(item, index) in list_1"
           :key="`card-1-${index}`"
           :item="item"
           left
         />
       </div>
       <div class="center">
         <div class="advantages-section__icons">
           <div>
             <img src="~/assets/svg/advantages/check.svg"/>
           </div>
           <div>
             <img src="~/assets/svg/advantages/calendar.svg"/>
           </div>
           <div>
             <img src="~/assets/svg/advantages/console.svg"/>
           </div>
           <div>
             <img src="~/assets/svg/advantages/design.svg"/>
           </div>
         </div>
         <img src="~/assets/svg/advantages/center-icon.svg" class="advantages-section__icon-center"/>
         <img src="~/assets/svg/advantages/logo-center.svg" class="advantages-section__logo-center"/>
       </div>
       <div class="right">
         <Card
           v-for="(item, index) in list_2"
           :key="`card-2-${index}`"
           :item="item"
           right
         />
       </div>
     </div>
     <div class="advantages-section__content-mobile">
       <template
         v-for="(data, index) in [...list_1, ...list_2]"
       >
         <CardMobile
           :key="`CardMobile-${index}`"
           :item="data"
         />
       </template>
     </div>
   </div>
 </div>
</template>

<script>
import Card from "~/components/advantages/Card.vue";
import CardMobile from "~/components/advantages/CardMobile.vue";

export default {
  name: "Advantages",

  data: function () {
    return {
      list_1: [
        {
          title: this.$t("Преимущества.Список.Умеем слышать Вас.Заголовок"),
          message: this.$t("Преимущества.Список.Умеем слышать Вас.Сообщение"),
          icon: require("~/assets/svg/advantages/check.svg")
        },
        {
          title: this.$t("Преимущества.Список.Гибкая разработка.Заголовок"),
          message: this.$t("Преимущества.Список.Гибкая разработка.Сообщение"),
          icon: require("~/assets/svg/advantages/calendar.svg")
        },
      ],
      list_2: [
        {
          title: this.$t("Преимущества.Список.Гарантии сроков.Заголовок"),
          message: this.$t("Преимущества.Список.Гарантии сроков.Сообщение"),
          icon: require("~/assets/svg/advantages/console.svg")
        },
        {
          title: this.$t("Преимущества.Список.Собственный дизайн.Заголовок"),
          message: this.$t("Преимущества.Список.Собственный дизайн.Сообщение"),
          icon: require("~/assets/svg/advantages/design.svg")
        },
      ],
    }
  },

  components: {
    Card,
    CardMobile
  }
}
</script>

<style lang="scss" scoped>
.advantages-section {
  padding: 140px 0;
  box-sizing: border-box;
  background: linear-gradient(90.66deg, #161616 0.57%, #160C1B 25.09%, #160313 62.84%, #000000 99.49%);
}
.advantages-section__content {
  display: flex;
  align-items: flex-start;

  .left, .right {
    display: flex;
    flex-direction: column;
    flex: 1;
    & > * {
      margin-top: 90px;
       &:first-child {
         margin-top: 0;
       }
    }
  }
  .center {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 320px;
    position: relative;
    overflow: hidden;
    margin: auto 25px;

    &:after {
      content: "";
      float: left;
      padding-top: 100%;
    }
    &:before {
      content: "";
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      border-radius: 100%;
      border: 5px solid #46407B;
    }
  }
}
.advantages-section__content-mobile {
  display: none;
}
.advantages-section__icons {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;

  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 54px;
    height: 54px;
    border-radius: 100%;
    z-index: 1;
    padding: 15px;
    box-sizing: border-box;

    img {
      width: 100%;
      height: 100%;
    }
    &:after {
      content: "";
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      width: 100%;
      height: 100%;
      background-image: url("~/assets/svg/advantages/icon-border.svg");
      background-size: contain;
      z-index: -2;
    }
    &:before {
      content: "";
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      width: calc(100% - 6px);
      height: calc(100% - 6px);
      background: radial-gradient(50% 50% at 50% 50.01%, #000000 85.73%, #4209B0 100%);
      border-radius: 100%;
      z-index: -1;
    }
    &:nth-child(1) {
      top: 32px;
      left: 9px;
    }
    &:nth-child(2) {
      top: 32px;
      right: 9px;
    }
    &:nth-child(3) {
      bottom: 37px;
      left: 9px;
    }
    &:nth-child(4) {
      bottom: 37px;
      right: 9px;
    }
  }
}
.advantages-section__icon-center {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  width: 210px;
  height: 210px;
}
.advantages-section__logo-center {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(calc(-50% + 2px), calc(-50% + 4px));
}

@media (max-width: 1199px) {
  .advantages-section {
    padding: 60px 0;
  }
  .advantages-section__content {
    .center {
      width: 240px;
    }
  }

  .advantages-section__icons {
    & > * {
      &:nth-child(1) {
        top: 12px;
      }
      &:nth-child(2) {
        top: 12px;
      }
      &:nth-child(3) {
        bottom: 17px;
      }
      &:nth-child(4) {
        bottom: 17px;
      }
    }
  }
  .advantages-section__icon-center {
    width: 180px;
    height: 180px;
  }
}
@media (max-width: 1023px) {
  .advantages-section {
    padding: 50px 0;
  }
  .advantages-section__content {
    display: none;
  }
  .advantages-section__content-mobile {
    display: flex;
    flex-wrap: wrap;
    margin-top: -20px;
    margin-left: -20px;
    & > * {
      width: calc(100% / 2 - 20px);
      margin-top: 20px;
      margin-left: 20px;
    }
  }
}
@media (max-width: 859px) {
  .advantages-section {
    padding: 40px 0;
  }
  .advantages-section__content-mobile {
    & > * {
      width: calc(100% - 20px);
    }
  }
}
</style>
