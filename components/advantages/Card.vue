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
  },

  mounted: function () {
    window.addEventListener("mousemove", this.changeMousePosition, true);
  },
  destroyed: function () {
    window.removeEventListener("mousemove", this.changeMousePosition, true);
  },

  methods: {
    changeMousePosition: function (event) {
      const eyes = this.$refs.refIcon;
      const rect = eyes.getBoundingClientRect();
      const eyeX = (rect.left + rect.right) / 2;
      const eyeY = (rect.top + rect.bottom) / 2;

      let radianDegrees = - Math.atan2(eyeX - event.pageX, eyeY - event.pageY);
      eyes.style.transform = `rotate(${radianDegrees}rad)`;
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
    top: 0; left: 50%;
    transform: translate(-50%, 0);

    display: flex;
    width: 14px;
    height: 14px;
    border-radius: 100%;
    background-color: #FFFFFF;
  }
}
.advantage-card__message {}
</style>
