<template>
 <div class="team-section custom-section metal">
   <div class="container">
     <h2 class="custom-section__title">
       {{$t('Команда.Команда')}}
     </h2>
     <div class="team-section__cards">
       <template v-for="(team, index) in teams">
         <TeamCard
           :key="`team-card-${index}`"
           :team="team"
         />
       </template>
     </div>
   </div>
 </div>
</template>

<script>
import TeamCard from "@/components/team/Card";

export default {
  name: "Team",

  data: function () {
    return {
      teams: [
        {
          image: require("~/assets/jpg/team/alexander-ux-ui-designer.png"),
          name: this.$t('Команда.АлександрДизайнер.Имя'),
          age: "32",
          job: this.$t('Команда.АлександрДизайнер.Должность'),
          message: this.$t('Команда.АлександрДизайнер.Описание'),
          tags: [],
          gradientColor: "#5900EA",
          gradientX1: "7.05555",
          gradientX2: "235",
          gradientY1: "417",
          gradientY2: "241.79",
        },
        {
          image: require("~/assets/jpg/team/alexander-ux-ui-designer.png"),
          name: this.$t('Команда.ЕвгенийМенеджер.Имя'),
          age: "30",
          job: this.$t('Команда.ЕвгенийМенеджер.Должность'),
          message: this.$t('Команда.ЕвгенийМенеджер.Описание'),
          tags: [
            "SCRUM\\KANBAN",
            "Jira\\Trello\\Pyrus\\1C\\MacroCRM\\ProfitBase",
            "Диаграмма ганта",
            "Очень сильные «софт» скилы",
          ],
          gradientColor: "#9A55A7",
          gradientX1: "252.5",
          gradientX2: "128.504",
          gradientY1: "265.833",
          gradientY2: "66.8941",
        },
        {
          image: require("~/assets/jpg/team/alexander-ux-ui-designer.png"),
          name: this.$t('Команда.АнтонФронтенд.Имя'),
          age: "25",
          job: this.$t('Команда.АнтонФронтенд.Должность'),
          message: this.$t('Команда.АнтонФронтенд.Описание'),
          tags: [
            "JavaScript",
            "React",
            "React Native",
            "VueJS (nuxt)",
            "Figma",
            "Jira\\Trello\\Pyrus\\1C\\MacroCRM\\ProfitBase"
          ],
          gradientColor: "#D0792F",
          gradientX1: "272",
          gradientX2: "239.262",
          gradientY1: "318.392",
          gradientY2: "146.14",
        },
      ]
    }
  },

  components: {
    TeamCard
  }
}
</script>

<style lang="scss" scoped>
.team-section {
  height: 100vh;
  padding-top: 120px;
  padding-bottom: 60px;
  background: linear-gradient(90.66deg, #161616 0.57%, #160C1B 25.09%, #1D1209 62.84%, #000000 99.49%);
}
.team-section__cards {
  display: flex;
  flex-wrap: wrap;
  margin-top: -30px;
  margin-left: -30px;
  align-items: flex-start;

  & > * {
    width: calc(100% / 4 - 30px);
    margin-top: 30px;
    margin-left: 30px;
    &:nth-child(2n) {
      margin-top: 75px;
    }
  }
}
</style>
