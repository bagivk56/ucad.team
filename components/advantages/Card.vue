<template>
 <div
   class="advantage-card"
   :class="{
    '--left': left,
    '--right': right,
   }"
 >
   <div v-html="item.title" class="advantage-card__title"/>
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
    },
    right: {
      type: Boolean,
      default: false
    },
    left: {
      type: Boolean,
      default: false
    },
  },
}
</script>

<style lang="scss" scoped>
.advantage-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &.--left {
    align-items: flex-end;
    .advantage-card__title, .advantage-card__message {
      text-align: right;
    }
  }
  &.--right {
    .advantage-card__title {
      background: linear-gradient(90.12deg, #A80CEE 1.53%, #087AFF 99.92%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
}
.advantage-card__title {
  font-family: 'Steppe';
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  background: linear-gradient(270deg, #A80CEE 0%, #087AFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.advantage-card__message {
  margin-top: 10px;
}
</style>
