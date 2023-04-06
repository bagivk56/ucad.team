<template>
  <div class="left-side-bar-scroll">

  </div>
</template>

<script>
export default {
  name: "LeftSideBarScroll"
}
</script>

<style lang="scss" scoped>
.left-side-bar-scroll {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  box-sizing: border-box;
  position: fixed;
  height: 100vh;
  width: 70px;
  top: 0; left: 0;
  z-index: 30;
}
</style>
