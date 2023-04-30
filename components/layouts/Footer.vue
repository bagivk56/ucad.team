<template>
 <footer class="footer">
   <div class="container">
     <div class="footer__logo">
       <img src="~/assets/svg/logo-full.svg" width="291" height="58"/>
     </div>
     <div class="footer__qr">
       <img src="~/assets/svg/qr-code.svg"  width="102" height="102"/>
     </div>
   </div>
 </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 60px 0;
  box-sizing: border-box;
  background-color: black;
  background: linear-gradient(90.66deg, #161616 0.57%, #160C1B 25.09%, #081422 62.84%, #000000 99.49%);
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

@media (max-width: 1199px) {
  .footer__qr {
    margin-top: 20px;
  }
}
@media (max-width: 859px) {
  .footer {
    padding: 40px 0;
  }
}
</style>
