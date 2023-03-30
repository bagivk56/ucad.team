<template>
 <div class="advantage-card">
   <div class="advantage-card__head">
     <div class="advantage-card__icon">
       <span/>
     </div>
     <div class="title">
       Умеем<br/>слышать Вас
     </div>
   </div>
   <div class="advantage-card__message cms-block-stub">
     В каждой сфере бизнеса есть проблемы, которые необходимо преодолеть, умение совмещать пожелания заказчика и улучшать показатели метрик – самый главный критерий выполненной работы.
   </div>
 </div>
</template>

<script>
export default {
  name: "AdvantageCard"
}
</script>

<style lang="scss" scoped>
.advantage-card {}
.advantage-card__head {
  display: flex;
  margin-bottom: 20px;
  .title {
    font-family: 'Steppe';
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #087AFF;
  }
}
.advantage-card__icon {
  width: 44px;
  height: 44px;
  border-radius: 100%;
  background-color: #4209B0;
  margin-right: 18px;

  span {
    display: flex;
    width: 14px;
    height: 14px;
    border-radius: 100%;
    background-color: #FFFFFF;
  }
}
.advantage-card__message {}
</style>
