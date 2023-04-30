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
           :index-card="`card-${index}`"
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
          tags: [
            'Figma',
            'Adobe XD',
            'Adobe Photoshop',
            'Adobe Illustrator',
            'Jira\\Trello\\Pyrus'
          ],
          gradientX1: "294.778",
          gradientX2: "84.049",
          gradientY1: "417",
          gradientY2: "-36.1549",
        },
        {
          image: require("~/assets/jpg/team/image 3.jpg"),
          name: this.$t('Команда.ЕвгенийМенеджер.Имя'),
          age: "30",
          job: this.$t('Команда.ЕвгенийМенеджер.Должность'),
          message: this.$t('Команда.ЕвгенийМенеджер.Описание'),
          tags: [
            "SCRUM\\KANBAN",
            "Jira\\Trello\\Pyrus\\1C\\MacroCRM\\ProfitBase",
            "Git\\Figma",
            "Очень сильные «софт» скилы",
          ],
          gradientX1: "2",
          gradientX2: "268.348",
          gradientY1: "2",
          gradientY2: "450.969",
        },
        {
          image: require("~/assets/jpg/team/5.jpg"),
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
          gradientX1: "9.46295",
          gradientX2: "216.08",
          gradientY1: "417",
          gradientY2: "-31.9065",
        },
        {
          image: require("~/assets/jpg/team/8.jpg"),
          name: this.$t('Команда.ДинарБэкенд.Имя'),
          age: "25",
          job: this.$t('Команда.ДинарБэкенд.Должность'),
          message: this.$t('Команда.ДинарБэкенд.Описание'),
          tags: [
            "Java 11",
            "ArangoDb/mysql",
            "Opencv",
            "Spring boot",
            "Docker",
          ],
          gradientX1: "9.46295",
          gradientX2: "216.08",
          gradientY1: "417",
          gradientY2: "-31.9065",
        },
        {
          image: require("~/assets/jpg/team/image 6.jpg"),
          name: this.$t('Команда.ДимаБэкенд.Имя'),
          age: "24",
          job: this.$t('Команда.ДимаБэкенд.Должность'),
          message: this.$t('Команда.ДимаБэкенд.Описание'),
          tags: [
            "Python",
            "Django",
            "PostgreSQL/MariaDB/MySQL",
            "Asyncio/Aiohttp",
            "Redis/RabbitMQ/CELERY",
            "Docker",
          ],
          gradientX1: "294.778",
          gradientX2: "84.049",
          gradientY1: "417",
          gradientY2: "-36.1549",
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
  padding: 140px 0;
  background: linear-gradient(90.66deg, #161616 0.57%, #160C1B 25.09%, #1D1209 62.84%, #000000 99.49%);
}
.team-section__cards {
  display: flex;
  flex-wrap: wrap;
  margin-top: -30px;
  margin-left: -30px;
  align-items: flex-start;

  & > * {
    width: calc(100% / 3 - 30px);
    margin-top: 30px;
    margin-left: 30px;
  }
}

@media (max-width: 1199px) {
  .team-section {
    padding: 60px 0;
  }
  .team-section__cards {
    margin-top: -10px;
    margin-left: -10px;
    & > * {
      width: calc(100% / 3 - 10px);
      margin-top: 10px;
      margin-left: 10px;
    }
  }
}
@media (max-width: 1023px) {
  .team-section {
    padding: 50px 0;
  }
}
@media (max-width: 859px) {
  .team-section {
    padding: 40px 0;
  }
  .team-section__cards {
    & > * {
      width: calc(100% / 2 - 10px);
    }
  }
}
@media (max-width: 639px) {
  .team-section__cards {
    flex-direction: column;
    margin-left: 0;
    & > * {
      width: 100%;
      margin-left: 0;
    }
  }
}
</style>
