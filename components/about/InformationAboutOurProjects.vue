<template>
 <div class="information-about-our-projects">
   <div class="container">
     <div class="cms-block-stub information-about-our-projects__message">
       {{$t('Информация об проектах.Приветвенное сообщение')}}
     </div>
     <div class="information-about-our-projects__content">
       <div class="left">
         <ProjectContent
           :list="informations"
           :active="activeInfo"
           @changeActive="changeActive"
         />
         <div v-if="false" class="information-projects__works light-scroll-bar">
           <div
             v-for="(information, index) in informations"
             :key="`information-${index}`"
             class="information-projects__work"
             :class="{'active': Boolean(information.index === activeInfo)}"
             @click="() => changeActive(information.index)"
           >
             {{information.title}}
           </div>
         </div>
       </div>
       <div class="center">
         <img class="information-projects__center-svg" src="~/assets/svg/information-about-our-projects/center-image.svg"/>
       </div>
       <div class="right">
         <MessageContent
           :message="activeMessage"
         />
       </div>
     </div>
   </div>
 </div>
</template>

<script>
import MessageContent from "~/components/information-about-our-projects/MessageContent.vue";
import ProjectContent from "~/components/information-about-our-projects/ProjectContent.vue";

export default {
  name: "InformationAboutOurProjects",

  data: function () {
    return {
      informations: [
        {
          index: "0",
          title: this.$t('Информация об проектах.Строительные компании.Заголовок'),
          message: this.$t('Информация об проектах.Строительные компании.Сообщение'),
        },
        {
          index: "1",
          title: this.$t('Информация об проектах.Крипто-кошельки.Заголовок'),
          message: this.$t('Информация об проектах.Крипто-кошельки.Сообщение'),
        },
        {
          index: "2",
          title: this.$t('Информация об проектах.Онлайн-магазины.Заголовок'),
          message: this.$t('Информация об проектах.Онлайн-магазины.Сообщение'),
        },
        {
          index: "3",
          title: this.$t('Информация об проектах.Маркетплейсы.Заголовок'),
          message: this.$t('Информация об проектах.Маркетплейсы.Сообщение'),
        },
        {
          index: "4",
          title: this.$t('Информация об проектах.Государственные заказы.Заголовок'),
          message: this.$t('Информация об проектах.Государственные заказы.Сообщение'),
        },
        {
          index: "5",
          title: this.$t('Информация об проектах.CRM систем для HoReCa.Заголовок'),
          message: this.$t('Информация об проектах.CRM систем для HoReCa.Сообщение'),
        },
        {
          index: "6",
          title: this.$t('Информация об проектах.ПО для высокоточного оборудования.Заголовок'),
          message: this.$t('Информация об проектах.ПО для высокоточного оборудования.Сообщение'),
        }
      ],

      activeInfo: "0"
    }
  },

  computed: {
    activeMessage: function () {
      return (this.informations || []).find((t) => t.index === this.activeInfo)?.message
    }
  },

  components: {
    ProjectContent,
    MessageContent
  },

  methods: {
    changeActive: function (activeInfo) {
      this.activeInfo = activeInfo;
    }
  }
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
  overflow: auto;
  max-height: 350px;
  padding: 20px;
  padding-left: 0;
  box-sizing: border-box;

  & > * {
    margin-top: 20px;
  }
}
.information-projects__work {
  padding: 15px 20px;
  box-sizing: border-box;
  border-radius: 0px 25px 25px 0px;
  position: relative;
  z-index: 1;
  cursor: pointer;

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
    transition: all 1s;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: -1;
    border-radius: 0 25px 25px 0;
    background: linear-gradient(90.66deg, #16161600 0.57%, #160C1B 25.09%, #160313 62.84%, #000000 99.49%);
  }
  &.active {
    color: white;
    &:after {
      background: linear-gradient(259.54deg, #5900EA 39.91%, rgba(0, 0, 0, 0) 57.89%);
    }
  }
  &:hover {
    color: white;
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
