<template>
 <div id="section-scrooll" class="relative">
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
import GeminiScrollbar from "gemini-scrollbar";

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

  mounted() {
    var myScrollbar = new GeminiScrollbar({
      element: document.querySelector('body')
    }).create();
  }
}
</script>

<style lang="scss" scoped>
.fullpage {

}
</style>
