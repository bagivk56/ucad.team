<template>
 <div class="advantage-card-mobile">
   <div class="advantage-card-mobile__title">
     <img :src="item.icon">
     <span>{{item.title}}</span>
   </div>
   <div v-html="item.message" class="advantage-card-mobile__message cms-block-stub"/>
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

<style lang="scss">
.advantage-card-mobile {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 1024px) {
    &.--left {
      align-items: flex-end;
      .advantage-card-mobile__title, .advantage-card-mobile__message {
        text-align: right;
      }
    }
    &.--right {
      .advantage-card-mobile__title {
        background: linear-gradient(to left, rgba(8,122,255,1) 0%, rgba(168,12,238,1) 50%, rgba(168,12,238,1) 75%, rgba(8,122,255,1) 100%);
        animation: shine-left 2.5s linear infinite;
        background-size: 200% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    }
  }
}
.advantage-card-mobile__title {
  display: inline-flex;
  align-items: center;

  font-family: 'Steppe';
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: white;
  background: linear-gradient(to right, rgba(8,122,255,1) 0%, rgba(168,12,238,1) 50%, rgba(168,12,238,1) 75%, rgba(8,122,255,1) 100%);
  background-size: 200% auto;
  -webkit-background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  animation: shine-left 2.5s linear infinite;
  text-shadow: 0px 0px #00000000;

  img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
  span {
    margin-bottom: -5px;
    display: block;
  }
}
.advantage-card-mobile__message {
  margin-top: 10px;
}

@keyframes shine-left {
  to {
    background-position: -200% center;
  }
}
@supports ((background-clip: text) or (-webkit-background-clip: text)) and ((text-fill-color: transparent) or (-webkit-text-fill-color: transparent)) {
  .advantage-card-mobile__title {
    background-image: linear-gradient(to right, rgba(8,122,255,1) 0%, rgba(168,12,238,1) 50%, rgba(168,12,238,1) 75%, rgba(8,122,255,1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
  }
}
</style>
