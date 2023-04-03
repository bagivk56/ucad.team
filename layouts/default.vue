<template >
  <div class="layouts">
    <Header/>
    <nuxt/>

    <PopUpTeam/>
  </div>
</template>

<script>
import Header from "~/components/layouts/Header";

export default {
  components: {
    Header,

    PopUpTeam: () => import("~/components/team/PopUp")
  }
}
</script>
