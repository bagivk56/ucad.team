<template>
 <div class="relative">
   <AboutProject/>
   <Team/>
   <Advantages/>
   <FormFeedback/>

   <LeftSideBarScroll/>
 </div>
</template>

<script>
import AboutProject from "~/components/about/AboutProject";
import Team from "~/components/about/Team";
import FormFeedback from "~/components/about/FormFeedback";

export default {
  name: "index",

  data: function () {},

  components: {
    AboutProject,
    Team,

    Advantages: () => import("~/components/about/Advantages"),
    FormFeedback,

    LeftSideBarScroll: () => import("~/components/common/LeftSideBarScroll")
  },
}
</script>

<style lang="scss" scoped>
.fullpage {

}
</style>
