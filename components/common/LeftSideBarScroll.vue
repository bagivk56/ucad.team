<template>
  <div class="left-side-bar-scroll">
    <div class="scroll">
      <span />
    </div>
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

.scroll {
  width: 1px;
  height: 100%;
  background-color: #585858;

  span {
    display: flex;
    width: 6px;
    height: 46px;
    border: 1px solid #FFFFFF;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      width: 16px;
      background: linear-gradient(180deg, #003471 0%, #5644F7 48.75%, #A80CEE 100%);
      position: relative;
      border: none;
      &:after {
        content: "";
        position: absolute;
        top: 3px; left: 3px; right: 3px; bottom: 3px;
        border-radius: 10px;
        background-color: black;
      }
    }
  }
}
</style>
