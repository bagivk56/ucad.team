<template >
  <div class="layouts">
    <Header/>
    <nuxt/>
  </div>
</template>

<script>
import Header from "~/components/layouts/Header";

export default {
  components: {
    Header
  }
}
</script>
