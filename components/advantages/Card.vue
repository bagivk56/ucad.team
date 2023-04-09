<template>
 <div class="advantage-card">
   <div class="advantage-card__head">
     <div ref="refIcon" class="advantage-card__icon">
       <span ref="refDot"/>
     </div>
     <div v-html="item.title" class="title"/>
   </div>
   <div v-html="item.message" class="advantage-card__message cms-block-stub"/>
 </div>
</template>

<script>
export default {
  name: "AdvantageCard",

  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
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
  min-width: 44px;
  height: 44px;
  border-radius: 100%;
  background-color: #4209B0;
  margin-right: 18px;

  span {
    position: absolute;
    top: 0; left: 0;

    display: flex;
    width: 14px;
    height: 14px;
    border-radius: 100%;
    background-color: #FFFFFF;
  }
}
.advantage-card__message {}
</style>
