<template>
 <div>
   <section class="fullpage">
     <AboutProject/>
   </section>
   <section class="fullpage">
     <Team/>
   </section>
   <section class="fullpage">
     <Advantages/>
   </section>
   <section class="fullpage">
     <FormFeedback/>
   </section>
 </div>
</template>

<script>
import AboutProject from "~/components/about/AboutProject";
import Team from "~/components/about/Team";
import FormFeedback from "~/components/about/FormFeedback";

export default {
  name: "index",

  data: function () {
    return {
      inMove: false,
      inMoveDelay: 400,
      activeSection: 0,
      offsets: [],
      touchStartY: 0
    }
  },

  components: {
    AboutProject,
    Team,

    Advantages: () => import("~/components/about/Advantages"),
    FormFeedback
  },

  mounted: function () {
    // this.calculateSectionOffsets();
    //
    // window.addEventListener('DOMMouseScroll', this.handleMouseWheelDOM);  // Mozilla Firefox
    // window.addEventListener('mousewheel', this.handleMouseWheel, { passive: false }); // Other browsers
    // window.addEventListener('touchstart', this.touchStart, { passive: false }); // mobile devices
    // window.addEventListener('touchmove', this.touchMove, { passive: false }); // mobile devices
  },
  destroyed: function () {
    window.removeEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // Mozilla Firefox
    window.removeEventListener('mousewheel', this.handleMouseWheel, { passive: false });  // Other browsers

    window.removeEventListener('touchstart', this.touchStart); // mobile devices
    window.removeEventListener('touchmove', this.touchMove); // mobile devices
  },

  methods: {
    calculateSectionOffsets() {
      let sections = document.getElementsByTagName('section');
      let length = sections.length;

      for(let i = 0; i < length; i++) {
        let sectionOffset = sections[i].offsetTop;
        this.offsets.push(sectionOffset);
      }
    },
    handleMouseWheel: function(e) {

      if (e.wheelDelta < 30 && !this.inMove) {
        this.moveUp();
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.moveDown();
      }

      e.preventDefault();
      return false;
    },
    handleMouseWheelDOM: function(e) {

      if (e.detail > 0 && !this.inMove) {
        this.moveUp();
      } else if (e.detail < 0 && !this.inMove) {
        this.moveDown();
      }

      return false;
    },

    moveUp() {
      this.inMove = true;
      this.activeSection++;
      if(this.activeSection > this.offsets.length - 1) this.activeSection = 0;
      this.scrollToSection(this.activeSection, true);
    },
    moveDown() {
      this.inMove = true;
      this.activeSection--;

      if(this.activeSection < 0) {
        return
      };
      this.activeSection = this.offsets.length - 1

      console.log('this.activeSection: ', this.activeSection);
      this.scrollToSection(this.activeSection, true);
    },

    scrollToSection(id, force = false) {
      if(this.inMove && !force) return false;

      this.activeSection = id;
      this.inMove = true;

      // get section and scroll into view if it exists
      let section = document.getElementsByTagName('section')[id];
      if(section) {
        document.getElementsByTagName('section')[id].scrollIntoView({behavior: 'smooth'});
      }

      setTimeout(() => {
        this.inMove = false;
      }, this.inMoveDelay);
    },
    touchStart(e) {
      e.preventDefault();

      this.touchStartY = e.touches[0].clientY;
    },
    touchMove(e) {
      if(this.inMove) return false;
      e.preventDefault();

      const currentY = e.touches[0].clientY;

      if(this.touchStartY < currentY) {
        this.moveDown();
      } else {
        this.moveUp();
      }

      this.touchStartY = 0;
      return false;
    }
  }
}
</script>

<style lang="scss" scoped>
.fullpage {

}
</style>
