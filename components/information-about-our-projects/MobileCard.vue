<template>
 <div
   class="mobile-card"
   :class="{'open': isOpen}"
 >
   <div class="mobile-card__head" @click="changeOpen">
     {{data.title}}

     <img src="~/assets/svg/common/arrow-bottom-gradient.svg"/>
   </div>
   <div v-if="isOpen" class="mobile-card__body">
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

  methods: {
    changeOpen: function () {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style lang="css" scoped>
.mobile-card {
  position: relative;
  z-index: 0;
  border-radius: 25px;

  &.open {
    .mobile-card__head img {
      transform: rotate(180deg);
    }
  }
  &:after {
    content: "";
    position: absolute;
    top: -1px; left: -1px; right: -1px; bottom: -1px;
    background: linear-gradient(259.54deg, #5900EA 39.91%, #003370 57.89%);
    z-index: -2;
    border-radius: 25px;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(270.28deg, #212524 0.24%, #160b1a 85.18%);
    z-index: -1;
    border-radius: 25px;
  }
}
.mobile-card__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  box-sizing: border-box;

  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
    object-fit: contain;
  }
}
.mobile-card__body {
  padding: 15px;
  padding-top: 0;
  box-sizing: border-box;

  font-size: 15px;
  line-height: 23px;
  color: #FFFFFF;
}
</style>
