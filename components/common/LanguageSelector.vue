<template>
  <div v-if="isVisible" class="left-side-bar-scroll">
    <div class="language" @click="changeLanguage">
      {{currentLanguage}}
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftSideBarScroll",

  computed: {
    currentLanguage: function () {
      const localeCodes = this.$i18n?.localeCodes || [];

      let currentIndex = localeCodes.findIndex((t) => t === this.$i18n?.localeProperties?.code) + 1;
      if (currentIndex > (localeCodes.length - 1)) {
        currentIndex = 0;
      }

      return (this.$i18n?.locales || []).find((t) => t.code === localeCodes[currentIndex])?.name
    },

    isVisible: function () {
      return Boolean(this.getRouteBaseName() === 'about')
    }
  },

  methods: {
    changeLanguage: function () {
      const localeCodes = this.$i18n.localeCodes;

      let currentIndex = localeCodes.findIndex((t) => t === this.$i18n?.localeProperties?.code) + 1;
      if (currentIndex > (localeCodes.length - 1)) {
        currentIndex = 0;
      }

      this.$i18n.setLocale(localeCodes[currentIndex]);
    }
  }
}
</script>

<style lang="scss" scoped>
.left-side-bar-scroll {
  position: fixed;
  padding: 24px;
  left: 0; top: 0px;
  cursor: pointer;
  z-index: 999;

  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;

  &:hover {
    font-weight: 500;
    background: transparent;
    background: linear-gradient(180deg, #003471 0%, #5644F7 48.75%, #A80CEE 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
