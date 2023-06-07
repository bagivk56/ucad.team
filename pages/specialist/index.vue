<template>
  <section class="specialist custom-section">
    <div class="container">
      <h1 class="specialist__title custom-section__title">Профиль специалиста</h1>
      <div class="specialist__sections">
        <div class="specialist-section">
          <div class="specialist-section__title">Контактные данные</div>
          <div class="form-contacts">
            <div class="--1-2">
              <div class="form-item">
                <div class="form-item-label">Фамилия</div>
                <input
                  v-model="form.surname"
                  type="text"
                  placeholder="Введите фамилию"
                  class="form-item-input"
                />
                <div v-if="_errorField('surname')" class="form-item-error">{{ _errorField('surname') }}</div>
              </div>
            </div>
            <div class="--1-4">
              <div class="form-item">
                <div class="form-item-label">Имя</div>
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Введите имя"
                  class="form-item-input"
                />
                <div v-if="_errorField('name')" class="form-item-error">{{ _errorField('name') }}</div>
              </div>
            </div>
            <div class="--1-4">
              <div class="form-item">
                <div class="form-item-label">Отчество</div>
                <input
                  v-model="form.middlename"
                  type="text"
                  placeholder="Введите отчество"
                  class="form-item-input"
                />
                <div v-if="_errorField('middlename')" class="form-item-error">{{ _errorField('middlename') }}</div>
              </div>
            </div>
            <div class="--1-2">
              <div class="form-item">
                <div class="form-item-label">Номер телефона</div>
                <input
                  v-model="form.phone"
                  v-mask="['+7 (', /[1-6, 9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/]"
                  type="text"
                  placeholder="+7 (___) ___ __ __"
                  class="form-item-input"
                />
                <div v-if="_errorField('phone')" class="form-item-error">{{ _errorField('phone') }}</div>
              </div>
            </div>
            <div class="--1-2">
              <div class="form-item">
                <div class="form-item-label">Email</div>
                <input
                  v-model="form.email"
                  type="text"
                  placeholder="Email"
                  class="form-item-input"
                />
                <div v-if="_errorField('email')" class="form-item-error">{{ _errorField('email') }}</div>
              </div>
            </div>
            <div class="--1-2">
              <div class="form-item">
                <div class="form-item-label">Страна</div>
                <SelectTemplate
                  v-model="form.country"
                  :options="countries"

                  track-by="title"
                  label="title"
                />
                <div v-if="_errorField('country')" class="form-item-error">{{ _errorField('country') }}</div>
              </div>
            </div>
            <div class="--1-2">
              <div class="form-item">
                <div class="form-item-label">Город</div>
                <SelectTemplate
                  v-model="form.city"
                  :options="cities"

                  track-by="title"
                  label="title"
                />
                <div v-if="_errorField('city')" class="form-item-error">{{ _errorField('city') }}</div>
              </div>
            </div>
            <div class="--1-1">
              <div class="form-item">
                <div class="form-item-label">Пол</div>
                <div class="form-tags">
                  <div :class="{'active': Boolean(form.gender === 'Мужской')}" @click="() => {form.gender = 'Мужской'}">
                    Мужской
                  </div>
                  <div :class="{'active': Boolean(form.gender === 'Женский')}" @click="() => {form.gender = 'Женский'}">
                    Женский
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="specialist-section">
          <div class="specialist-section__title">Навыки</div>
          <div class="form-contacts">
            <div class="--1-1">
              <div class="form-item">
                <div class="form-item-label">Раздел каталога</div>
                <SelectTemplate
                  v-model="form.categories"
                  :options="categories"
                  :multiple="true"
                  :taggable="true"

                  track-by="name"
                  label="name"
                  group-values="children"
                  group-label="name"
                />
                <div v-if="_errorField('categories')" class="form-item-error">{{ _errorField('categories') }}</div>
              </div>
            </div>
            <div class="--1-1">
              <div class="form-item">
                <div class="form-item-label">Специализация</div>
                <SelectTemplate
                  v-model="form.specialization"
                  :options="specialization"

                  track-by="title"
                  label="title"
                />
                <div v-if="_errorField('specialization')" class="form-item-error">{{ _errorField('specialization') }}
                </div>
              </div>
            </div>
            <div class="--1-1">
              <div class="form-item">
                <div class="form-item-label">Ключевые навыки</div>
                <SelectTemplate
                  v-model="form.key_skill"
                  :options="key_skill"
                  :multiple="true"
                  :taggable="true"

                  track-by="title"
                  label="title"
                />
                <div v-if="_errorField('key_skill')" class="form-item-error">{{ _errorField('key_skill') }}</div>
              </div>
              <div class="section-help-message">
                Это ключевая информация, на которую обращают внимание клиенты при выборе специалиста
              </div>
            </div>
            <div class="--1-2">
              <div class="form-item">
                <div class="form-item-label">Грейд</div>
                <SelectTemplate
                  v-model="form.grade"
                  :options="grayds"

                  track-by="title"
                  label="title"
                />
                <div v-if="_errorField('grade')" class="form-item-error">{{ _errorField('grade') }}</div>
              </div>
            </div>
            <div class="--1-2">
              <div class="form-item">
                <div class="form-item-label">Отрасли работы</div>
                <SelectTemplate
                  v-model="form.work_industries"
                  :options="work_industry"
                  :multiple="true"
                  :taggable="true"

                  track-by="title"
                  label="title"
                />
                <div v-if="_errorField('work_industries')" class="form-item-error">
                  {{ _errorField('work_industries') }}
                </div>
              </div>
            </div>
            <div class="--1-1">
              <div class="form-item">
                <div class="form-item-label">Главное о специалисте</div>
                <textarea
                  v-model="form.description"
                  class="form-item-input --textarea"
                  placeholder="Кратко опишите основные навыки специалиста"
                />
                <div v-if="_errorField('description')" class="form-item-error">{{ _errorField('description') }}</div>
              </div>
              <div class="section-help-message">
                Краткое резюме опыта специалиста, которое должно раскрывать его основные hard и soft-skills. Играет роль
                сопроводительного письма к резюме, т.е. текст должен быть максимально вкусным.
              </div>
            </div>
          </div>
        </div>
        <div class="specialist-section">
          <div class="specialist-section__title">Языки</div>
          <Languages
            :languages="form.languages"
            :errors="_errorArray('languages')"
            @change="(languages) => {form.languages = languages}"
          />
        </div>
        <div class="specialist-section">
          <div class="specialist-section__title">Проект</div>
          <Projects
            :projects="form.projects"
            :errors="_errorArray('projects')"
            @change="(projects) => {form.projects = projects}"
          />
        </div>
        <div class="specialist-section">
          <div class="specialist-section__title">Образование</div>
          <Education
            :educations="form.educations"
            :errors="_errorArray('educations')"
            @change="(educations) => {form.educations = educations}"
          />
        </div>
        <div class="specialist-section">
          <div class="specialist-section__title">Условия работы</div>
          <div class="form-contacts">
            <div class="--1-1">
              <SpecialistRate
                v-model="form.hour_price"
              />
              <div v-if="_errorField('hour_price')" class="form-item-error">{{ _errorField('hour_price') }}</div>
            </div>
            <div v-if="false" class="--1-2">
              <div class="switch-label"
                   @click="() => changeForm2('work_formats', 'office', !Boolean(form.work_formats.office))">
                <div class="switch" :class="{'active': Boolean(form.work_formats.office)}">
                  <input type="checkbox" :checked="Boolean(form.work_formats.office)" hidden/>
                  <span/>
                </div>
                Формат работы: Офис
              </div>
            </div>
            <div v-if="false" class="--1-2">
              <div class="switch-label"
                   @click="() => changeForm2('work_formats', 'remote', !Boolean(form.work_formats.remote))">
                <div class="switch" :class="{'active': Boolean(form.work_formats.remote)}">
                  <input type="checkbox" :checked="Boolean(form.work_formats.remote)" hidden/>
                  <span/>
                </div>
                Формат работы: Удаленно
              </div>
            </div>
            <div class="--1-2">
              <div class="switch-label"
                   @click="() => changeForm1('international_projects', !Boolean(form.international_projects))">
                <div class="switch" :class="{'active': Boolean(form.international_projects)}">
                  <input type="checkbox" :checked="Boolean(form.international_projects)" hidden
                         style="user-select: none"/>
                  <span/>
                </div>
                Готов работать на зарубежных проектах
              </div>
            </div>
            <div class="--1-2">
              <div class="switch-label" @click="() => changeForm1('business_trips', !Boolean(form.business_trips))">
                <div class="switch" :class="{'active': Boolean(form.business_trips)}">
                  <input type="checkbox" :checked="Boolean(form.business_trips)" hidden style="user-select: none"/>
                  <span/>
                </div>
                Командировки
              </div>
            </div>
            <div class="--1-2">
              <div class="switch-label"
                   @click="() => changeForm2('relocation_place', 'inCountry', !Boolean(form.relocation_place.inCountry))">
                <div class="switch" :class="{'active': Boolean(form.relocation_place.inCountry)}">
                  <input type="checkbox" :checked="Boolean(form.relocation_place.inCountry)" hidden
                         style="user-select: none"/>
                  <span/>
                </div>
                Релокации внутри страны
              </div>
            </div>
            <div class="--1-2">
              <div class="switch-label"
                   @click="() => changeForm2('relocation_place', 'outCountry', !Boolean(form.relocation_place.outCountry))">
                <div class="switch" :class="{'active': Boolean(form.relocation_place.outCountry)}">
                  <input type="checkbox" :checked="Boolean(form.relocation_place.outCountry)" hidden/>
                  <span/>
                </div>
                Релокация за границу
              </div>
            </div>
          </div>
        </div>

        <div>
          <button class="btn btn-primary" @click="submitForm">
            Отправить
          </button>
        </div>
      </div>
    </div>

    <div v-if="isLoading" class="specialist__loading"></div>
  </section>
</template>

<script>
import {
  email,
  sameAs,
  required,
  maxLength,
  minLength,
  requiredIf
} from "vuelidate/lib/validators";
import Select from "~/components/form/Select.vue";
import Projects from "~/components/specialist/Projects.vue";
import Education from "~/components/specialist/Education.vue";
import Languages from "~/components/specialist/Languages.vue";
import SpecialistRate from "~/components/specialist/SpecialistRate.vue";

import categories from "@/constacts/specialist/categories";
import specialization from "@/constacts/specialist/specialization";
import key_skill from "@/constacts/specialist/key_skill";
import cities from "@/constacts/specialist/cities";
import grayds from "@/constacts/specialist/grayds";
import work_industry from "@/constacts/specialist/work_industry";
import countries from "@/constacts/specialist/countries";
import generateXMLS from "@/helper/generateXMLS";

const initForm = {

  //
  id: "",
  name: "",
  surname: "",
  middlename: "",
  phone: "",
  email: "",
  gender: "Мужской",
  city: "",
  country: "",

  //
  categories: undefined,
  specialization: undefined,
  key_skill: undefined,
  grade: undefined,
  work_industries: undefined,
  description: "",

  //
  projects: [
    {}
  ],
  educations: [
    {}
  ],
  languages: [],

  hour_price: "",
  work_formats: {
    office: false,
    remote: true,
  },
  international_projects: false,
  business_trips: false,
  relocation_place: {
    inCountry: false,
    outCountry: false,
  },
}

export default {
  data: function () {
    return {
      categories,
      specialization,
      key_skill,
      cities,
      grayds,
      work_industry,
      countries,

      form: {...initForm},

      isLoading: false
    }
  },

  validations: {
    form: {
      name: {
        required,
        maxLength: maxLength(50)
      },
      surname: {
        required,
        maxLength: maxLength(50)
      },
      hour_price: {
        required
      },
      middlename: {
        maxLength: maxLength(50)
      },
      phone: {
        notValid: minLength(18)
      },
      email: {
        notValid: email
      },
      city: {
        required
      },
      country: {
        required
      },

      specialization: {
        required
      },
      categories: {
        required
      },
      grade: {
        required
      },
      key_skill: {
        required
      },
      description: {
        maxLength: maxLength(500)
      },

      languages: {
        $each: {
          title: {
            required
          },
          level: {
            required
          }
        }
      },
      projects: {
        $each: {
          title: {
            required,
            maxLength: maxLength(200),
          },
          role: {
            required,
            maxLength: maxLength(100),
          },
          description: {
            required,
            maxLength: maxLength(2000),
          },
          start: {
            required
          },
          finish: {
            required: requiredIf(function (self) {
              return !self.finishCurrent;
            })
          },
        }
      },
      educations: {
        $each: {
          level: {
            required
          },
          educationOrganization: {
            required,
            maxLength: maxLength(500),
          },
          qualification: {
            required,
            maxLength: maxLength(500),
          },
          finishDate: {
            required
          },
        }
      },
    }
  },

  components: {
    SelectTemplate:
    Select,
    Projects,
    Education,
    Languages,
    SpecialistRate
  },

  methods: {
    submitForm: function () {
      this.$v.$touch();
      console.log('this.$v: ', this.$v);
      if (this.$v.$invalid) {
        return null;
      }
      this.isLoading = true;
      const file = generateXMLS(this.form);
      const isSuccessSend = this.$axios.post('/send-message', {
        message: file
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
    },

    changeForm1: function (key1, value) {
      let form = {...this.form};
      form[key1] = value;
      this.form = form;
    },
    changeForm2: function (key1, key2, value) {
      let form = {...this.form};
      form[key1][key2] = value;
      this.form = form;
    },


    _errorField: function (fieldName) {
      const error = {...this.$v?.form?.[fieldName]};
      if (!error?.$invalid || !error?.$dirty) {
        return null
      }

      if (typeof error.required === "boolean" && !error.required) {
        return "Обязательно к заполнению"
      }
      if (typeof error.maxLength === "boolean" && !error.maxLength) {
        return `Макс. симов. ${error.$params?.maxLength?.max}`
      }
      if (typeof error.notValid === "boolean" && !error.notValid) {
        return 'Невалидные данные'
      }

      return null
    },
    _errorArray: function (fieldName) {
      const error = {...this.$v?.form?.[fieldName]};
      if (!error?.$invalid || !error?.$dirty) {
        return null
      }

      return error?.$each || {}
    }
  }
}
</script>

<style scoped lang="scss">
.specialist {
  padding: 100px 0;
  box-sizing: border-box;
  background: linear-gradient(90.66deg, #161616 0.57%, #160C1B 25.09%, #081422 62.84%, #000000 99.49%);
}

.specialist__title {
  margin-bottom: 32px;
}

.specialist__sections {
  display: flex;
  flex-direction: column;

  & > * {
    margin-top: 30px;

    &:first-child {
      margin-top: 0;
    }
  }
}

.specialist-section {
  padding: 30px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 25px;
}

.specialist-section__title {
  margin-bottom: 20px;

  font-size: 24px;
  line-height: 30px;
  color: white;
  font-family: "Unbounded";
}

.form-contacts {
  display: flex;
  flex-wrap: wrap;
  margin-top: -20px;
  margin-left: -20px;

  & > * {
    margin-top: 20px;
    margin-left: 20px;

    &.--1-1 {
      width: calc(100% - 20px);
    }

    &.--1-2 {
      width: calc(50% - 20px);
    }

    &.--1-3 {
      width: calc(100% / 3 - 20px);
    }

    &.--1-4 {
      width: calc(100% / 4 - 20px);
    }

    &.--1-5 {
      width: calc(100% / 5 - 20px);
    }
  }
}

.section-help-message {
  padding: 15px 20px;
  background: linear-gradient(270.28deg, rgba(203, 67, 181, 0.09) 0.24%, rgba(255, 255, 255, 0) 85.18%);
  border-radius: 15px;
  margin-top: 10px;

  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  border: 1.5px solid #087AFF;
}

.specialist__loading {
  position: fixed;
  top: 0; left: 0;
  right: 0; bottom: 0;
  z-index: 999;
  background-color: rgb(255 255 255 / 20%);
  backdrop-filter: blur(5px);
}
</style>
