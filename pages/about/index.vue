<template>
  <div class="page-about">
    <div class="page-about__scroll">
      <AboutProject/>
      <Team/>
      <Advantages/>
      <InformationAboutOurProjects/>
      <FormFeedback/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import AboutProject from "~/components/about/AboutProject";
import Team from "~/components/about/Team";
import FormFeedback from "~/components/about/FormFeedback";
import Advantages from "~/components/about/Advantages";
import InformationAboutOurProjects from "~/components/about/InformationAboutOurProjects";
import Footer from "~/components/layouts/Footer.vue";
import GeminiScrollbar from "gemini-scrollbar";

export default {
  name: "index",

  data: function () {
    return {
      myScrollbar: null
    }
  },

  components: {
    Team,
    Advantages,
    AboutProject,
    FormFeedback,
    InformationAboutOurProjects,
    Footer
  },

  mounted: function () {
    // setTimeout(() => {
    //   var myScrollbar = new GeminiScrollbar({
    //     element: document.querySelector('.page-about__scroll'),
    //     autoshow: false,
    //     forceGemini: false,
    //   });
    //   this.myScrollbar = myScrollbar;
    //   myScrollbar.create();
    // }, 100);
  },
  destroyed: function () {
    // this.myScrollbar.destroy();
  }
}
</script>

<style lang="scss" scoped>
.page-about {
  //width: 100%;
  //height: 100vh;
  //overflow: hidden;
}
.page-about__scroll {

}
</style>
