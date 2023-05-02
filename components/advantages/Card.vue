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

<style lang="scss">
.advantage-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 1024px) {
    &.--left {
      align-items: flex-end;
      .advantage-card__title, .advantage-card__message {
        text-align: right;
      }
    }
  }
}
.advantage-card__title {
  display: block;
  font-family: 'Steppe';
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: white;
  background: linear-gradient(to right, rgba(8,122,255,1) 0%, rgba(168,12,238,1) 50%, rgba(168,12,238,1) 75%, rgba(8,122,255,1) 100%);
  background-size: 200% auto;
  -webkit-background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-shadow: 0px 0px #00000000;

  animation: shine 2.5s linear infinite;
}
.advantage-card__message {
  margin-top: 10px;
}

@media (max-width: 1023px) {
  .advantage-card__title {
    br {
      display: none;
    }
  }
}

@keyframes shine {
  to {
    background-position: 200% center;
  }
}
@keyframes shine-left {
  to {
    background-position: -200% center;
  }
}

@supports ((background-clip: text) or (-webkit-background-clip: text)) and ((text-fill-color: transparent) or (-webkit-text-fill-color: transparent)) {
  .advantage-card__title {
    background-image: linear-gradient(to right, rgba(8,122,255,1) 0%, rgba(168,12,238,1) 50%, rgba(168,12,238,1) 75%, rgba(8,122,255,1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
  }
}
</style>
