<template>
 <section class="form-feedback">
   <div class="container">
     <div class="form-feedback__content">
       <h2 class="custom-section__title">
         {{$t('Форма обратной связи.Обратная связь')}}
       </h2>
       <div class="form-feedback__form">
         <div class="left">
           <div class="form-item">
             <input
               v-model="form.companyName"
               type="text"
               class="form-item-input"
               :placeholder="$t('Форма обратной связи.Название компании')"
             />
             <div v-if="errorCompanyName" class="form-item-error">{{errorCompanyName}}</div>
           </div>
           <div class="form-item">
             <input
               v-model="form.email"
               type="text"
               class="form-item-input"
               placeholder="E-mail"
             />
             <div v-if="errorEmail" class="form-item-error">{{errorEmail}}</div>
           </div>
           <div class="form-item">
             <input
               v-model="form.username"
               type="text"
               class="form-item-input"
               placeholder="Telegram username"
             />
             <div v-if="errorUsername" class="form-item-error">{{errorUsername}}</div>
           </div>
         </div>
         <div class="right">
           <div class="form-item">
             <textarea
               v-model="form.message"
               :placeholder="$t('Форма обратной связи.Расскажите о своем проекте')"
               class="form-item-input --textarea"
             />
           </div>
         </div>
       </div>
       <div class="form-feedback__action">
         <button
           class="btn btn-primary"
           :disabled="isLoading"
           @click="sendMessage"
         >
           {{$t('Форма обратной связи.Отправить')}}
           <img src="~/assets/svg/common/arrow-right.svg"/>
         </button>
       </div>
     </div>
   </div>
 </section>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "FormFeedback",

  data: function () {
    return {
      form: {
        companyName: "",
        email: "",
        username: "",
        message: ""
      },
      isLoading: false
    }
  },

  computed: {
    errorCompanyName: function () {
      const error = this.$v?.form?.companyName;
      if (!error?.$invalid || !error?.$dirty) {
        return null;
      }

      if (!error.required) {
        return this.$t('Валидация форм.Обязательно к заполнению');
      }

      return null;

    },
    errorEmail: function () {
      const error = this.$v?.form?.email;
      if (!error?.$invalid || !error?.$dirty) {
        return null;
      }

      if (!error.required) {
        return this.$t('Валидация форм.Обязательно к заполнению');
      }
      if (!error.email) {
        return this.$t('Валидация форм.Неправильный формат ввода');
      }

      return null;

    },
    errorUsername: function () {
      const error = this.$v?.form?.username;
      if (!error?.$invalid || !error?.$dirty) {
        return null;
      }

      if (!error.required) {
        return this.$t('Валидация форм.Обязательно к заполнению');
      }

      return null;

    },
  },

  validations: {
    form: {
      companyName: {},
      email: {
        email
      },
      username: {
        required
      },
    }
  },

  methods: {
    sendMessage: async function () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }

      this.isLoading = true;

      const formMessage = [
        `Наименование компании - ${this.form?.companyName}`,
        `Email пользователь - ${this.form?.email}`,
        `Telegram username - ${this.form?.username}`,
        `Раскажите о своем проекте - ${this.form?.message}`,
      ].join(";%0A");
      const isSuccessSend = this.$axios.post('/send-message', {
        message: formMessage
      }).then((res) => {
        return true
      }).catch(() => {
        return false
      });
      this.isLoading = false;
      if (!isSuccessSend) {
        this.$toast.error(this.$t('Форма обратной связи.Ошибка отправления'));
        return
      }
      this.$toast.success(this.$t('Форма обратной связи.Успешно отправлено'));
    }
  }
}
</script>

<style lang="scss" scoped>
.form-feedback {
  padding: 140px 0;
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

  .btn {
    display: flex;
    align-items: center;

    img {
      filter: invert(1);
      margin-left: 30px;
    }
  }
}

@media (max-width: 1199px) {
  .form-feedback {
    padding: 100px 0;
  }
}
@media (max-width: 1023px) {
  .form-feedback {
    padding: 40px 0;
  }
  .form-feedback__form {
    flex-direction: column;
    .right {
      margin-left: 0;
      margin-top: 30px;
      width: 100%;
    }
  }
  .form-feedback__action {
    justify-content: initial;
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 100%;
    }
  }
}
</style>
