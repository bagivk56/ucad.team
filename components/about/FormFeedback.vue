<template>
  <section class="form-feedback">
    <div class="container">
      <div class="form-feedback__content">
        <h2 class="form-feedback__title">
          {{ $t('Форма обратной связи.Обратная связь') }}
        </h2>
        <div class="form-feedback__body">
          <div class="--left">
            <div class="form-feedback__switch">
              <div>
                <span>{{$t('Форма обратной связи.Вам нужен UCAD_T для работы над Вашим проектом?')}}</span>
                <label class="switch" :class="{'active': form.isWorkProject}">
                  <input
                    v-model="form.isWorkProject"
                    type="checkbox"
                    hidden
                  />
                  <span/>
                </label>
              </div>
              <div>
                <span>{{$t('Форма обратной связи.Хотите чтобы мы связались с Вами?')}}</span>
                <label class="switch" :class="{'active': form.isWouldContactYou}">
                  <input
                    v-model="form.isWouldContactYou"
                    type="checkbox"
                    hidden
                  />
                  <span/>
                </label>
              </div>
              <div>
                <span>{{$t('Форма обратной связи.Хотите работать в нашей команде?')}}</span>
                <label class="switch" :class="{'active': form.isYouWantWorkTeam}">
                  <input
                    v-model="form.isYouWantWorkTeam"
                    type="checkbox"
                    hidden
                  />
                  <span/>
                </label>
              </div>
              <div>
                <span>{{$t('Форма обратной связи.Хотите следить за новостями UCAD_T?')}}</span>
                <label class="switch" :class="{'active': form.isGetNewNews}">
                  <input
                    v-model="form.isGetNewNews"
                    type="checkbox"
                    hidden
                  />
                  <span/>
                </label>
              </div>
            </div>
            <div class="form-feedback__contacts">
              <div class="form-item">
                <input
                  v-model="form.username"
                  type="text"
                  class="form-item-input"
                  :placeholder="$t('Форма обратной связи.telegram')"
                />
                <div v-if="errorUsername" class="form-item-error">{{errorUsername}}</div>
              </div>
              <button
                class="btn btn-primary"
                :class="{'visible': (form.isWorkProject || form.isGetNewNews || form.isWouldContactYou || form.isYouWantWorkTeam)}"
                @click="sendMessage"
              >
                {{$t('Форма обратной связи.Отправить')}}
                <img src="@/assets/svg/common/arrow-right.svg"/>
              </button>
            </div>
          </div>
          <div class="--right">
            <div class="form-feedback__logo">
              <span>UCAD</span><span>.</span><span> T</span>
            </div>
            <div class="form-feedback__qrcode">
              <AnimationSvg/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {required} from "vuelidate/lib/validators";

const initForm = {
  username: "",
  isWorkProject: false,
  isWouldContactYou: false,
  isYouWantWorkTeam: false,
  isGetNewNews: false,
}

export default {
  name: "FormFeedback",

  data: function () {
    return {
      form: {...initForm},
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
      username: {
        required
      },
    }
  },

  components: {
    AnimationSvg: () => import("~/components/common/AnimationSvg.vue")
  },

  methods: {
    sendMessage: async function () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }

      this.isLoading = true;

      const formMessage = [
        `Вам нужен UCAD.T для работы над Вашим проектом? - ${Boolean(this.form?.isWorkProject) ? 'Да' : 'Нет'}`,
        `Хотите чтобы мы связались с Вами? - ${Boolean(this.form?.isWouldContactYou) ? 'Да' : 'Нет'}`,
        `Хотите работать в нашей команде? - ${Boolean(this.form?.isYouWantWorkTeam) ? 'Да' : 'Нет'}`,
        `Хотите следить за новостями UCAD.T? - ${Boolean(this.form?.isGetNewNews) ? 'Да' : 'Нет'}`,
        `Telegram username - ${this.form?.username}`,
      ].join(";\n");
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
      this.form = {...initForm};
      this.$v.$reset()
      this.$toast.success(this.$t('Форма обратной связи.Успешно отправлено'));
    }
  }
}
</script>

<style lang="scss" scoped>
.form-feedback {
  padding: 140px 0;
  background: linear-gradient(90.66deg, #161616 0.57%, #160C1B 25.09%, #081422 62.84%, #000000 99.49%);
  position: relative;
  overflow: hidden;
}
.form-feedback__content {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 25px;
  padding: 30px;
  box-sizing: border-box;
}
.form-feedback__title {
  margin-bottom: 28px;

  font-weight: 600;
  font-size: 25px;
  line-height: 31px;
  color: #FFFFFF;
}
.form-feedback__body {
  display: flex;

  .--left {
    width: 100%;
    max-width: 640px;
  }
  .--right {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }
}
.form-feedback__switch {
  display: flex;
  flex-direction: column;

  & > * {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;

    font-size: 16px;
    line-height: 29px;
    color: #CDCDCD;

    .switch {}
    &:first-child {
      margin-top: 0;
    }
  }
}
.form-feedback__contacts {
  display: flex;
  width: 100%;
  margin-top: 42px;

  .form-item {
    flex: 1;
    position: relative;
  }

  input {
    height: 55px;
  }
  .btn {
    display: flex;
    align-items: center;
    height: 55px;

    img {
      filter: invert(1);
      margin-left: 10px;
    }

    @media (min-width: 640px) {
      width: 0;
      overflow: hidden;
      padding: 15px 0;
      border: none;
      margin-left: 0;
      transition: all 0.2s;
      &.visible {
        width: auto;
        padding: 15px 24px;
        margin-left: 20px;
      }
    }
  }

  @media (min-width: 640px) {
    .form-item-error {
      position: absolute;
      left: 0; top: 100%;
    }
  }
}
.form-feedback__logo {
  margin-bottom: 16px;

  font-family: 'Inter';
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: #FFFFFF;

  span:nth-child(1) {}
  span:nth-child(2) {
    color: #4209B0;
  }
  span:nth-child(3) {
    color: #087AFF;
  }
}
.form-feedback__qrcode {
  width: 180px;
  height: 180px;
}

@media (max-width: 1199px) {
  .form-feedback {
    padding: 80px 0;
  }
  .form-feedback__title {
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 20px;
  }
  .form-feedback__body {
    .--left {
      max-width: 540px;
    }
  }
}
@media (max-width: 1023px) {
  .form-feedback {
    padding: 0;
  }
  .form-feedback__content {
    margin: 0 -20px;
    padding: 20px;
    border-radius: 0;
  }
  .form-feedback__title {
    font-size: 24px;
    line-height: 30px;
  }
  .form-feedback__body {
    flex-direction: column;
    .--left {
      max-width: initial;
    }
    .--right {
      margin-top: 20px;
    }
  }
}
@media (max-width: 639px) {
  .form-feedback__contacts {
    flex-direction: column;
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      height: 50px;
      padding: 0;
    }
  }
}
</style>
