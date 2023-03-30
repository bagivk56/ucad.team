<template>
 <div>
   <AboutProject/>
   <Team/>
   <Advantages/>
 </div>
</template>

<script>
import AboutProject from "~/components/about/AboutProject";
import Team from "~/components/about/Team";

export default {
  name: "index",

  components: {
    AboutProject,
    Team,

    Advantages: () => import("~/components/about/Advantages")
  }
}
</script>

<style scoped>

</style>
