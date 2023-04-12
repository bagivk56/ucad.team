<template>
 <div class="advantages-section custom-section metal">
   <div class="container">
     <h2 class="custom-section__title">
       {{$t('Преимущества.Преимущества')}}
     </h2>
     <div class="advantages__list">
       <AdvantageCard
         v-for="(item) in list"
         :item="item"
       />
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: "Advantages",

  data: function () {
    return {
      list: [
        {
          title: this.$t("Преимущества.Список.Умеем слышать Вас.Заголовок"),
          message: this.$t("Преимущества.Список.Умеем слышать Вас.Сообщение"),
        },
        {
          title: this.$t("Преимущества.Список.Гарантии сроков.Заголовок"),
          message: this.$t("Преимущества.Список.Гарантии сроков.Сообщение"),
        },
        {
          title: this.$t("Преимущества.Список.Гибкая разработка.Заголовок"),
          message: this.$t("Преимущества.Список.Гибкая разработка.Сообщение"),
        },
        {
          title: this.$t("Преимущества.Список.Собственный дизайн.Заголовок"),
          message: this.$t("Преимущества.Список.Собственный дизайн.Сообщение"),
        },
      ]
    }
  },

  components: {
    AdvantageCard: () => import("@/components/advantages/Card")
  },

  mounted: function () {
    window.addEventListener("mousemove", this.changeMousePosition, true);
  },
  destroyed: function () {
    window.removeEventListener("mousemove", this.changeMousePosition, true);
  },

  methods: {
    changeMousePosition: function (event) {
      return

      const to = {
        x: event.pageX,
        y: event.pageY
      };

      const eyes = document.querySelectorAll('.advantage-card__icon span');
      for (const eye in Array.from(eyes)) {
        eyes[eye].parentNode.style.display = 'block';
        lookTo(eyes[eye], to);
      }

      function lookTo(eye, to){
        const offset = eye.offsetWidth;
        const white = eye.parentNode;
        white.style.transform = 'rotate(0deg)';
        const whiteRadius = white.offsetWidth/2;
        const whiteTop = white.offsetTop;
        const whiteLeft = white.offsetLeft;
        const mouseX = to.x;
        const mouseY = to.y;
        const x0New = mouseX - whiteRadius - whiteLeft;
        const y0New = mouseY - whiteRadius - whiteTop;
        const mouseR = Math.sqrt(x0New*x0New + y0New*y0New) + offset/2;
        if (mouseR <= whiteRadius){
          eye.style.top = (mouseY - offset/2 - whiteTop) + 'px';
          eye.style.left = (mouseX - offset/2 - whiteLeft) + 'px';
        } else {
          const rotationAngle = (x,y) => {
            if (x>=0) {
              return Math.atan(y/x)*180/Math.PI;
            }
            return Math.atan(y/x)*180/Math.PI - 180;
          };
          eye.style.top = (whiteRadius - offset/2) + 'px';
          eye.style.left = (whiteRadius*2 - offset) + 'px';
          white.style.transform = 'rotate('+ rotationAngle(x0New,y0New) + 'deg)';
        };
      };
    }
  }
}
</script>

<style lang="scss" scoped>
.advantages-section {
  padding: 180px 0;
  box-sizing: border-box;
  background: linear-gradient(90.66deg, #161616 0.57%, #160C1B 25.09%, #160313 62.84%, #000000 99.49%);
}
.advantages__list {
  display: flex;
  flex-wrap: wrap;
  margin-top: -50px;
  margin-left: -30px;

  & > * {
    width: calc(100% / 4 - 30px);
    margin-top: 50px;
    margin-left: 30px;
  }
}
</style>
