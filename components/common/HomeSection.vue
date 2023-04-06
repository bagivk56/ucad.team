<template>
 <section class="home-section">
   <div id="home-section-logo" class="home-section__logo">
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
   <canvas id="home-section-canvas" class="home-section__canvas"/>
 </section>
</template>

<script>

const colors = [
  '#4209B0',
  '#087AFF',
  '#FFFFFF',
]

export default {
  name: "HomeSection",

  mounted: function () {
    this.initCanvas();
  },

  methods: {
    getRandomArbitrary: function (min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },

    initCanvas: function () {
      var triangle = {
        x1: 60,
        y1: 0,
        x2: 0,
        y2: 60,
        x3: 60,
        y3: 60
      }

      const self = this;
      const canvas = document.getElementById('home-section-canvas');
      const c = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      window.addEventListener('wheel', (event) => {
        c.strokeStyle = colors[this.getRandomArbitrary(0, 3)];
        if (event.deltaY > 0) speed *= 1.4;
        else speed *= 0.92;
        if (speed < 0.01) speed = 0.01; else if (speed > 0.1) speed = 0.1;
      });
      document.getElementById('home-section-logo').onclick = () => {
        speed = (speed === 0.001) ? 0.1 : 0.001;
      }

      class Star {
        constructor() {
          this.x = Math.random()*canvas.width-canvas.width/2;
          this.y = Math.random()*canvas.height-canvas.height/2;
          this.px, this.py;
          this.z = Math.random()*4; //random z
        }

        update() {
          //stores previous x, y and z and generates new coordinates
          this.px = this.x;
          this.py = this.y;
          this.z += speed;
          this.x += this.x*(speed*0.2)*this.z;
          this.y += this.y*(speed*0.2)*this.z;
          if (this.x > canvas.width/2+50 || this.x < -canvas.width/2-50 || this.y > canvas.height/2+50 || this.y < -canvas.height/2-50) {
            this.x = Math.random()*canvas.width-canvas.width/2;
            this.y = Math.random()*canvas.height-canvas.height/2;
            this.px = this.x;
            this.py = this.y;
            this.z = 0;
          }
        }

        //draws line from x,y to px,py
        show() {
          c.lineWidth = this.z;
          c.beginPath();
          c.moveTo(this.x, this.y);
          c.lineTo(this.px, this.py);
          c.closePath();
          c.strokeStyle = colors[self.getRandomArbitrary(0, 2)];
          c.stroke();
        }
      }
      let speed = 0.02;
      let stars = [];
      for (let i = 0; i < 320; i++) stars.push(new Star());
      c.fillStyle = 'rgba(0, 0, 0, 0.2)';
      c.strokeStyle = colors[self.getRandomArbitrary(0, 2)];
      c.translate(canvas.width/2, canvas.height/2);
      c.beginPath();
      function draw() {
        c.fillRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
        for (let s of stars) {
          s.update();
          s.show();
        }
        requestAnimationFrame(draw);
      }
      draw();
    }
  }
}
</script>

<style lang="scss" scoped>
.home-section {
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    top: 0; left: 0;
    right: 0; bottom: 0;
    z-index: -1;
    background: radial-gradient(50% 50% at 50% 50%, rgba(18, 3, 46, 0.82) 47.19%, rgba(0,0,0,0) 100%);
  }
}
.home-section__logo {
  display: flex;
  font-family: 'Inter';
  font-weight: 700;
  font-size: 145px;
  line-height: 175px;
  text-align: center;
  color: #FFFFFF;
  cursor: pointer;
  user-select: none;

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
  z-index: -2;
  opacity: 0.9;
  background-image: url("~/assets/jpg/common/background.jpg");
  mix-blend-mode: multiply;
}
.home-section__canvas {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: black;
  mix-blend-mode: multiply;
}
</style>
