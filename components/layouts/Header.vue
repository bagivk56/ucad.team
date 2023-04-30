<template>
 <header class="header">
   <nuxt-link :to="logoPath" class="header__logo">
     <img src="~/assets/svg/logo-small.svg" alt="UCAD.TEAM"/>
     <span data-text="AB">AB</span>
     <span data-text="UT">UT</span>
   </nuxt-link>
 </header>
</template>

<script>
export default {
  name: "Header",

  computed: {
    logoPath: function () {
      return this.localePath(Boolean(this.getRouteBaseName() === 'about') ? '/' : '/about')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 998;
  top: 30px; left: 0; right: 0;
  position: sticky;
  margin-top: -40px;
  height: 40px;
}
.header__logo {
  position: relative;

  span {
    display: none;
    position: absolute;
    z-index: -1;
    top: 50%;
    transform: translate(0, -50%);

    font-family: 'Unbounded';
    font-weight: 600;
    font-size: 30px;
    line-height: 37px;
    color: #FFFFFF;

    &:nth-child(2) {
      left: -52px;
    }
    &:last-child {
      right: -52px;
    }
  }
}

@media (min-width: 1024px) {
  .header__logo {
    &:hover {
      span {
        display: block;
        &:before, &:after {
          content: attr(data-text);
          position: absolute;
          white-space: nowrap;
          top: 0;
          left: 0;
          width: 100%;
          background: #000;
          clip: rect(0, 0, 0, 0);
        }
        &:before {
          left: -2px;
          text-shadow: 2px 0 rgba(8, 122, 255, 1);
          animation: logotext-anim-2 3s infinite linear alternate-reverse;
        }
        &:after {
          left: 2px;
          text-shadow: -1px 0 rgba(66, 9, 176, 1);
          animation: logotext-anim-1 2s infinite linear alternate-reverse;
        }
      }
    }
  }
}
@media (max-width: 1023px) {
  .header__logo {
    &:active {
      span {
        display: block;
        &:before, &:after {
          content: attr(data-text);
          position: absolute;
          white-space: nowrap;
          top: 0;
          left: 0;
          width: 100%;
          background: #000;
          clip: rect(0, 0, 0, 0);
        }
        &:before {
          left: -2px;
          text-shadow: 2px 0 rgba(8, 122, 255, 1);
          animation: logotext-anim-2 3s infinite linear alternate-reverse;
        }
        &:after {
          left: 2px;
          text-shadow: -1px 0 rgba(66, 9, 176, 1);
          animation: logotext-anim-1 2s infinite linear alternate-reverse;
        }
      }
    }
  }
}
</style>
