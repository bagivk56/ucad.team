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
          name: "Александр",
          age: "32",
          job: "UX/UI designer",
          message: "Рисует так круто и быстро, что создается статическая энергия, которая преобразуется в эстетический оргазм пользователей. Опыт в графическом дизайне более 7 лет, в UX UI дизайн - 5 лет. Работал дизайнером в финтех проектах, онлайн-курсах, крипто-проектах.",
          tags: [],
          gradientColor: "#5900EA",
          gradientX1: "7.05555",
          gradientX2: "235",
          gradientY1: "417",
          gradientY2: "241.79",
        },
        {
          image: require("~/assets/jpg/team/alexander-ux-ui-designer.png"),
          name: "Евгений",
          age: "30",
          job: "PM \\ Product Owner",
          message: "Ехать в другой город на переговоры с заказчиком, успокоить Backend’а который обжегся горячим кофе, раскидать таски, провести meetup с team’ой и все это еще до обеда. Всем привет! Меня зовут Евгений и Вам достался лучший PM! Опыт управления коммерческими проектами 8 лет, в IT проектах 1.5 года.",
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
          name: "Антон",
          age: "25",
          job: "Frontend Developer",
          message: "Все что происходит на Front’е остается на Front’e! Опыт работы 5.5 лет во Frontend разработке",
          tags: [
            "JavaScript",
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
