<template>
 <section class="home-section">
   <div class="home-section__logo">
     <div class="main">
       <span class="white">UCAD</span>
       <span class="dot">.</span>
       <span class="blue">TEAM</span>
     </div>
     <div class="additional">
       <span class="white" data-text="UCAD">UCAD</span>
       <span class="dot" data-text=".">.</span>
       <span class="blue" data-text=" TEAM">TEAM</span>
     </div>
   </div>
   <div class="home-section__background"/>
 </section>
</template>

<script>
export default {
  name: "HomeSection",

  mounted() {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    let list1 = [];
    let list2 = [];
    for (let i = 0; i < 56; i++) {
      const percent = 100 / 56 * i;

      const number = getRandomInt(80);
      list1.push(`${100 / 56 * i}% { clip-path: polygon(0 ${number}%, 0 ${number + 20}%, 100% ${number + 20}%, 100% ${number}%); }`)
      list2.push(`${100 / 56 * i}% { clip-path: polygon(0% 0%, 0% 100%, 0 100%, 0 ${number}%, 100% ${number}%, 100% ${number + 20}%, 0 ${number + 20}%, 0 100%, 100% 100%, 100% 0%);}`)
    }

    console.log('item 1: ', `@keyframes animation-text-freeze-1 {${list1.join("")}} @keyframes animation-text-freeze-2 {${list2.join("")}}`);
    // console.log('list: ', list.join(""));
  }
}
</script>

<style lang="scss" scoped>
.home-section {
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;
  background: radial-gradient(50% 50% at 50% 50%, #12032E 47.19%, #000000 100%);
  display: flex;
  //align-items: flex-end;
  align-items: center;
  justify-content: center;
  //padding-bottom: 15%;
  box-sizing: border-box;
  overflow: hidden;
}
.home-section__logo {
  display: flex;
  font-family: 'Inter';
  font-weight: 700;
  font-size: 145px;
  line-height: 175px;
  text-align: center;
  color: #FFFFFF;

  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .additional {
    position: absolute;
    top: 50%; left: 50%;
    width: 100%;
    transform: translate(calc(-50% + 2px), -50%);
    display: none;

    .white {
      text-shadow: 2px 2px rgba(66, 9, 176, 1);
    }
    .blue {
      text-shadow: 2px 2px #A80CEE;
    }
  }
  .dot {
    color: rgba(66, 9, 176, 1);
  }
  .blue {
    color: rgba(8, 122, 255, 1);
  }

  &:hover {
    .main {
      animation: animation-text-freeze-2 3s infinite linear alternate-reverse;
    }
    .additional {
      display: flex;
      animation: animation-text-freeze-1 3s infinite linear alternate-reverse;
    }
  }
}
.home-section__background {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: -1;
  opacity: 0.9;
  background-image: url("~/assets/jpg/common/background.jpg");
  mix-blend-mode: multiply;
}
</style>
