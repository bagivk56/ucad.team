<template>
 <div class="iaop-message-content">
   <div
     ref="refMessageContent"
     v-html="message"
     class="cms-block-stub hidden-scroll-bar"
   />

   <div ref="refScroll" class="iaop-message-content__scroll">
     <svg width="54" viewBox="0 0 54 427" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M26.4656 28.7976C26.5796 28.0032 27.6498 27.8551 27.9582 28.5961C36.0314 47.9935 42.6657 75.6338 47.1668 108.691C51.87 143.232 54.0573 182.314 53.4824 221.537C52.9075 260.76 49.5932 298.565 43.9128 330.693C38.5369 361.1 31.244 385.279 22.7805 400.829C22.3314 401.654 21.1179 401.393 21.018 400.458C29.9615 385.302 37.6643 360.505 43.259 328.861C48.8537 297.217 52.1179 259.983 52.6842 221.352C53.2504 182.721 51.0961 144.228 46.4639 110.208C41.8317 76.1878 34.9056 47.9926 26.4656 28.7976Z" fill="url(#paint0_linear_341_249)"/>
       <path d="M23.4656 28.7976C23.5796 28.0032 24.6498 27.8551 24.9582 28.5961C33.0314 47.9935 39.6657 75.6338 44.1668 108.691C48.87 143.232 51.0573 182.314 50.4824 221.537C49.9075 260.76 46.5932 298.565 40.9128 330.693C35.5369 361.1 28.244 385.279 19.7805 400.829C19.3314 401.654 18.1179 401.393 18.018 400.458C26.9615 385.302 34.6643 360.505 40.259 328.861C45.8537 297.217 49.1179 259.983 49.6842 221.352C50.2504 182.721 48.0961 144.228 43.4639 110.208C38.8317 76.1878 31.9056 47.9926 23.4656 28.7976Z" fill="url(#paint1_linear_341_249)"/>
       <path class="button-scroll" d="M16.2572 7.21013C14.9667 6.37048 13.2512 7.24271 13.1693 8.78013L12.456 22.1677C12.3741 23.7051 13.9872 24.7547 15.3596 24.0569L27.3103 17.9808C28.6827 17.283 28.785 15.3613 27.4946 14.5216L16.2572 7.21013Z" fill="url(#paint2_linear_341_249)"/>
       <path class="button-scroll" d="M13.3689 419.608C12.0784 420.447 10.3629 419.575 10.281 418.038L9.56773 404.65C9.48582 403.113 11.0989 402.063 12.4713 402.761L24.422 408.837C25.7944 409.535 25.8967 411.457 24.6062 412.296L13.3689 419.608Z" fill="url(#paint3_linear_341_249)"/>
       <defs>
         <linearGradient id="paint0_linear_341_249" x1="53.569" y1="209.255" x2="-52.4278" y2="209.255" gradientUnits="userSpaceOnUse">
           <stop stop-color="#087AFF"/>
           <stop offset="0.523958" stop-color="#3FC3D5"/>
         </linearGradient>
         <linearGradient id="paint1_linear_341_249" x1="50.569" y1="209.255" x2="-55.4278" y2="209.255" gradientUnits="userSpaceOnUse">
           <stop stop-color="#103765"/>
           <stop offset="0.523958" stop-color="#DAFBFF"/>
         </linearGradient>
         <linearGradient id="paint2_linear_341_249" x1="29.1393" y1="10.4661" x2="8.2094" y2="21.1076" gradientUnits="userSpaceOnUse">
           <stop stop-color="#087AFF"/>
           <stop offset="0.523958" stop-color="#3FC3D5"/>
         </linearGradient>
         <linearGradient id="paint3_linear_341_249" x1="26.251" y1="416.352" x2="5.32109" y2="405.71" gradientUnits="userSpaceOnUse">
           <stop stop-color="#087AFF"/>
           <stop offset="0.523958" stop-color="#3FC3D5"/>
         </linearGradient>
       </defs>
     </svg>
     <span ref="refScrollDot"></span>
   </div>
 </div>
</template>

<script>
export default {
  name: "MessageContent",

  data: function () {
    return {

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
      if (!!this.$refs.refMessageContent) {
        setTimeout(() => {
          this.$refs.refMessageContent.scrollTo({
            top: 0,
            left: 0
          });
          this.initScroll();
        }, 100);
      }
    }
  },

  mounted: function () {
    this.initScroll();
  },

  methods: {
    initScroll: function () {
      const scrollHeight = this.$refs.refMessageContent.scrollHeight;
      console.log('scrollHeight: ', scrollHeight)
      if (scrollHeight > 350) {
        this.$refs.refScroll.style = ''
        this.$refs.refMessageContent.addEventListener("scroll", this.callEventScrollMessage);
      } else {
        this.$refs.refScroll.style.display = 'none'
      }
    },

    callEventScrollMessage: function (event) {
      const currentScrollPosition = event.currentTarget.scrollTop || 0;
      const clientHeight = event.currentTarget.clientHeight || 0;
      const scrollHeight = event.currentTarget.scrollHeight || 0;

      const percentPositionScroll = (currentScrollPosition / (scrollHeight - clientHeight)) * 100;
      let leftPosition = (32 / 100) * ((100 - percentPositionScroll) / 100) * (percentPositionScroll * 3.3);

      this.$refs.refScrollDot.style.top = `${percentPositionScroll}%`;
      this.$refs.refScrollDot.style.left = `${leftPosition}px`;
    }
  }
}
</script>

<style lang="scss">
.iaop-message-content {
  position: relative;

  .cms-block-stub {
    height: 350px;
    overflow: auto;
    padding-right: 30px;
    box-sizing: border-box;
  }
}
.iaop-message-content__scroll {
  position: absolute;
  top: 0; bottom: 0; right: -20px;
  height: 100%;

  svg {
    height: calc(100% + 54px);
    margin-top: -20px;
  }
  span {
    position: absolute;
    top: 0; left: 0;
    transform: translate(20px, 4px);
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 100%;
  }
}
</style>
