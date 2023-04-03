<template>
 <div
   v-if="isOpen"
   class="modal center"
 >
   <div class="modal_body">
    <div class="pop-up">
      <div class="pop-up__image">
        <img
          :src="teamInfo.image"
        />
      </div>
      <div class="pop-up__content">
        <div class="pop-up__name">{{teamInfo.name}}</div>
        <div class="pop-up__age">{{teamInfo.age}} {{$t('Команда.Лет')}}</div>
        <div class="pop-up__role">{{teamInfo.job}}</div>
        <div v-html="teamInfo.message" class="pop-up__message cms-block-stub"/>
        <div v-if="Boolean(teamInfo.tags && teamInfo.tags.length)" class="cms-block-stub pop-up__tags">
          <ul>
            <li v-for="(tag, index) in teamInfo.tags">{{tag}}</li>
          </ul>
        </div>
      </div>
      <div class="pop-up__close" @click="closePopUp">
        <img src="~/assets/svg/common/close.svg"/>
      </div>
    </div>
   </div>
   <div class="modal__overlay" @click="closePopUp"></div>
 </div>
</template>

<script>
export default {
  name: "PopUp",

  computed: {
    isOpen: function () {
      return Object.keys(this.$store.state.teams?.openPopUpTeam || {}).length > 0
    },
    teamInfo: function () {
      return this.$store.state.teams?.openPopUpTeam || {}
    }
  },

  methods: {
    closePopUp: function () {
      this.$store.commit("teams/closePopUp")
    }
  }
}
</script>

<style lang="scss" scoped>
.pop-up {
  display: flex;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  border-radius: 25px;
  overflow: hidden;
  padding: 30px;
  box-sizing: border-box;
  position: relative;
  background: rgba(0, 0, 0, 0.8);
  transition: all 0.4s;

  animation: pop-up-team-animation 1.5s;
}
.pop-up__image {
  width: 100vw;
  max-width: 420px;
  position: relative;
  border-radius: 25px;
  overflow: hidden;

  img {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:after {
    content: "";
    float: left;
    padding-top: 95%;
  }
}
.pop-up__content {
  flex: 1;
  margin-left: 30px;
}
.pop-up__name {
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #087AFF;
}
.pop-up__age {
  margin-top: 10px;

  font-size: 18px;
  line-height: 22px;
  color: #087AFF;
}
.pop-up__role {
  margin-top: 10px;

  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
  text-transform: lowercase;
}
.pop-up__message {
  margin-top: 20px;
}
.pop-up__tags {
  margin-top: 15px;
}
.pop-up__close {
  position: absolute;
  top: 30px; right: 30px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.2);
  }
}

@keyframes pop-up-team-animation {
  0% {
    transform: scale(0.1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
