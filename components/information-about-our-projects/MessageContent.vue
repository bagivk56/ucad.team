<template>
 <div class="iaop-message-content">
   <div
     ref="refMessageContent"
     v-html="message"
     class="cms-block-stub"
   />
 </div>
</template>

<script>
import GeminiScrollbar from "gemini-scrollbar";

export default {
  name: "MessageContent",

  data: function () {
    return {
      myScrollbar: null
    }
  },

  props: {
    message: {
      type: String,
      default: ""
    }
  },

  watch: {
    message: function () {
      setTimeout(() => {
        this.initScroll();
      }, 100)
    }
  },

  mounted: function () {
    this.initScroll();
  },

  methods: {
    initScroll: function () {
      var myScrollbar = new GeminiScrollbar({
        element: this.$refs.refMessageContent,
        autoshow: false,
        forceGemini: false,
      });
      this.myScrollbar = myScrollbar;
      myScrollbar.create();
    }
  }
}
</script>

<style lang="scss">
.iaop-message-content {
  height: 350px;
  overflow: hidden;

  .gm-scroll-view {
    padding-right: 20px;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: 0;
    }
  }
  .gm-scrollbar.-vertical {
    left: initial;
    top: 0; right: 2px; bottom: 0;
    background-color: transparent;
    width: 5px;

    &:after, &:before {
      content: "";
      position: absolute;
      top: 0; bottom: 0;
      width: 1px;
    }
    &:after {
      left: 0;
      background: linear-gradient(90deg, #103765 0.01%, #DAFBFF 170.61%);
    }
    &:before {
      right: 0;
      background: linear-gradient(90deg, #087AFF 0.01%, #3FC3D5 170.61%);
    }
  }
  .gm-scrollbar.-vertical .thumb {
    background: #FFFFFF;
    border-radius: 4px;
    left: -1px;
    z-index: 2;
    width: 8px!important;
  }
}
</style>
