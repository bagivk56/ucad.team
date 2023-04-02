<template>
 <div>
   <AboutProject/>
   <Team/>
   <Advantages/>
   <FormFeedback/>
 </div>
</template>

<script>
import AboutProject from "~/components/about/AboutProject";
import Team from "~/components/about/Team";
import FormFeedback from "~/components/about/FormFeedback";

export default {
  name: "index",

  components: {
    AboutProject,
    Team,

    Advantages: () => import("~/components/about/Advantages"),
    FormFeedback
  }
}
</script>

<style scoped>

</style>
