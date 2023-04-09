<template >
  <div class="layouts">
    <Header/>
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
  components: {
    Header,

    PopUpTeam: () => import("~/components/team/PopUp"),
    LanguageSelector: () => import("~/components/common/LanguageSelector")
  }
}
</script>
