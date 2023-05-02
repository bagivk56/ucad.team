<template >
  <div class="layouts">
    <Header v-if="isVisible"/>
    <div class="layouts__body">
      <nuxt/>
      <LanguageSelector/>
    </div>
    <PopUpTeam/>
  </div>
</template>

<script>
import Header from "~/components/layouts/Header";

export default {
  computed: {
    isVisible: function () {
      return Boolean(this.getRouteBaseName() === 'about')
    },
  },

  components: {
    Header,

    PopUpTeam: () => import("~/components/team/PopUp"),
    LanguageSelector: () => import("~/components/common/LanguageSelector")
  }
}
</script>
