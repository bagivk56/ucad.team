<template>
 <div class="team-section custom-section metal">
   <div class="container">
     <h2 class="custom-section__title">
       {{$t('Команда.Команда')}}
     </h2>
     <div class="team-section__cards">
       <TeamCard/>
       <TeamCard/>
       <TeamCard/>
       <TeamCard/>
     </div>
   </div>
 </div>
</template>

<script>
import TeamCard from "~/components/about/_TeamCard";

export default {
  name: "Team",

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
