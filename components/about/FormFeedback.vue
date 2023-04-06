<template>
 <section class="form-feedback">
   <div class="container">
     <div class="form-feedback__content">
       <h2 class="custom-section__title">Обратная связь</h2>
       <div class="form-feedback__form">
         <div class="left">
           <div class="form-item">
             <input
               type="text"
               class="form-item-input"
               placeholder="Название компании"
             />
           </div>
           <div class="form-item">
             <input
               type="text"
               class="form-item-input"
               placeholder="E-mail"
             />
           </div>
           <div class="form-item">
             <input
               type="text"
               class="form-item-input"
               placeholder="Telegram username"
             />
           </div>
         </div>
         <div class="right">
           <div class="form-item">
             <textarea
               placeholder="Расскажите о своем проекте"
               class="form-item-input --textarea"
             />
           </div>
         </div>
       </div>
       <div class="form-feedback__action">
         <button class="btn btn-primary">
           Отправить
         </button>
       </div>
     </div>
   </div>
 </section>
</template>

<script>
export default {
  name: "FormFeedback",

  mounted: async function () {
    await this.sendMessage();
  },

  methods: {
    sendMessage: async function () {
      // await this.$sendTelegramMessage({
      //   message: "Hello"
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
.form-feedback {
  height: 100vh;
  padding-top: 200px;
  padding-bottom: 60px;
  background: linear-gradient(90.66deg, #161616 0.57%, #160C1B 25.09%, #081422 62.84%, #000000 99.49%);
}
.form-feedback__content {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 25px;
  padding: 30px;
  box-sizing: border-box;
}
.form-feedback__form {
  display: flex;
  flex-wrap: wrap;
  .left {
    display: flex;
    flex-direction: column;
    flex: 1;
    & > * {
      margin-top: 30px;
      &:first-child {
        margin-top: 0;
      }
    }
  }
  .right {
    display: flex;
    width: calc(50% - 30px);
    margin-left: 30px;
  }
  .--textarea {
    height: 100%!important;
    width: 100%!important;
  }
}
.form-feedback__action {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}
</style>
