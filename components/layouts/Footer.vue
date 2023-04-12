<template>
 <footer class="footer">
   <div class="container">
     <div class="footer__logo">
       <img src="~/assets/svg/logo-full.svg"/>
     </div>
     <div class="footer__qr">
       <img src="~/assets/svg/qr-code.svg"/>
     </div>
   </div>
 </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="css" scoped>
.footer {
  padding: 60px 0;
  box-sizing: border-box;
  background-color: black;
}
.footer__logo {
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer__qr {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
}
</style>
