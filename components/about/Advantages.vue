<template>
 <div class="advantages-section custom-section metal">
   <div class="container">
     <h2 class="custom-section__title">
       {{$t('Преимущества.Преимущества')}}
     </h2>
     <div class="advantages__list">
       <AdvantageCard/>
       <AdvantageCard/>
       <AdvantageCard/>
       <AdvantageCard/>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: "Advantages",

  components: {
    AdvantageCard: () => import("@/components/advantages/Card")
  }
}
</script>

<style lang="scss" scoped>
.advantages-section {
  padding: 180px 0;
  box-sizing: border-box;
  background: linear-gradient(90.66deg, #161616 0.57%, #160C1B 25.09%, #160313 62.84%, #000000 99.49%);
}
.advantages__list {
  display: flex;
  flex-wrap: wrap;
  margin-top: -50px;
  margin-left: -30px;

  & > * {
    width: calc(100% / 4 - 30px);
    margin-top: 50px;
    margin-left: 30px;
  }
}
</style>
