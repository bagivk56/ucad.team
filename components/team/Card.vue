<template>
  <div
    class="team-card"
    @click="openPopUp"
  >
    <div class="team-card__image">
      <img :src="team.image" :alt="team.name"/>
    </div>
    <div class="team-card__body">
      <div class="team-card__name">
        {{team.name}}
      </div>
      <div class="team-card__age">
        {{team.age}} {{$t('Команда.Лет')}}
      </div>
      <div class="team-card__role">
        <span>{{team.job}}</span>
        <img src="~/assets/svg/common/arrow-right.svg"/>
      </div>
    </div>

    <svg class="team-card__border" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100%" height="100%" rx="25" :stroke="`url(#paint0_linear_${indexCard})`" stroke-width="1.5"/>
      <defs>
        <linearGradient :id="`paint0_linear_${indexCard}`" :x1="team.gradientX1" :y1="team.gradientY1" :x2="team.gradientX2" :y2="team.gradientY2" gradientUnits="userSpaceOnUse">
          <stop :stop-color="colorGradient1"/>
          <stop offset="0.424146" :stop-color="colorGradient2"/>
          <stop offset="0.791461" :stop-color="colorGradient3"/>
          <stop offset="1" :stop-color="colorGradient4"/>
        </linearGradient>
      </defs>
    </svg>


  </div>
</template>

<script>
const colors = [
  "#4209B0",
  "#FFFFFF",
  "#FF90ED",
  "#087AFF",
  "#b900f6",
  "#2259C9",
];

export default {
  name: "TeamCard",

  data: function () {
    const min = 0;
    const max = 5;

    return {
      colorGradient1: colors[Math.floor(Math.random() * (max - min + 1) + min)],
      colorGradient2: colors[Math.floor(Math.random() * (max - min + 1) + min)],
      colorGradient3: colors[Math.floor(Math.random() * (max - min + 1) + min)],
      colorGradient4: colors[Math.floor(Math.random() * (max - min + 1) + min)],
    }
  },

  props: {
    team: {
      type: Object,
      default: () => {
        return {}
      }
    },
    indexCard: {
      type: String,
      default: ""
    }
  },

  methods: {
    openPopUp: function () {
      this.$store.commit("teams/openPopUp", this.team)
    }
  }
}
</script>

<style lang="scss" scoped>
.team-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 25px;
  position: relative;
  cursor: pointer;

  &:hover {
    .team-card__image img {
      transform: scale(1.2);
    }
  }
}
.team-card__image {
  position: relative;
  border-radius: 25px 25px 0 0;
  overflow: hidden;

  img {
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.4s;
  }
  &:after {
    content: "";
    float: left;
    padding-top: 95%;
  }
}
.team-card__border {
  position: absolute;
  z-index: 1;
  top: -1px; left: -1px;
  right: -1px; bottom: -1px;
  user-select: none;
}
.team-card__body {
  padding: 20px 30px;
  box-sizing: border-box;

  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
}
.team-card__name {
  margin-bottom: 15px;
  color: #087AFF;
}
.team-card__age {
  color: #A80CEE;
  text-transform: lowercase;
}
.team-card__role {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  color: white;

  img {
    filter: invert(1);
  }
}

@media (max-width: 1199px) {
  .team-card__body {
    padding: 20px;
  }
  .team-card__name {
    margin-bottom: 10px;
  }
  .team-card__role {
    margin-top: 14px;
  }
}
@media (max-width: 639px) {
  .team-card__body {
    padding: 15px;
  }
}
</style>
