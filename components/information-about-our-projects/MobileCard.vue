<template>
 <div
   class="mobile-card"
   :class="{'open': isOpen}"
 >
   <div
     class="mobile-card__title"
     @click="changeOpen"
   >
     <span>{{ data.title }}</span>
     <img src="@/assets/svg/common/arrow-bottom-gradient.svg"/>
   </div>
   <div
     v-if="isOpen"
     class="mobile-card__message cms-block-stub"
   >
     <span v-html="data.message"/>
   </div>
 </div>
</template>

<script>
export default {
  name: "MobileCard",

  data: function () {
    return {
      isOpen: false
    }
  },

  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },

  mounted() {
    console.log('data: ', this.data)
  },

  methods: {
    changeOpen: function () {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-card {
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.05);
  position: relative;
  z-index: 0;

  &.open {
    .mobile-card__title img {
      transform: rotate(180deg);
    }
  }
  &:after {
    content: "";
    position: absolute;
    top: -1px; left: -1px; right: -1px; bottom: -1px;
    z-index: -2;
    background: linear-gradient(259.54deg, #5900EA 39.91%, #003370 57.89%);
    background-size: 200% auto;
    animation: shine-left 4s linear infinite;
    border-radius: 25px;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0px; left: 0px; right: 0px; bottom: 0px;
    z-index: -1;
    background: #161616;
    border-radius: 25px;
  }
}
.mobile-card__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  box-sizing: border-box;

  font-family: 'Steppe';
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
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
    width: 15px;
    height: 15px;
    margin-left: 10px;
  }
  span {
    display: block;
    margin-bottom: -5px;
  }
}
.mobile-card__message {
  padding: 15px;
  padding-top: 0;
}

@keyframes shine-left {
  to {
    background-position: -200% center;
  }
}
@supports ((background-clip: text) or (-webkit-background-clip: text)) and ((text-fill-color: transparent) or (-webkit-text-fill-color: transparent)) {
  .mobile-card__title {
    background-image: linear-gradient(to right, rgba(8,122,255,1) 0%, rgba(168,12,238,1) 50%, rgba(168,12,238,1) 75%, rgba(8,122,255,1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
  }
}
</style>
