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
               <div v-if="_err_surname" class="form-item-error">{{_err_surname}}</div>
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
               <div v-if="_err_surname" class="form-item-error">{{_err_name}}</div>
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
               <div v-if="_err_middlename" class="form-item-error">{{_err_middlename}}</div>
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
               <div v-if="_err_phone" class="form-item-error">{{_err_phone}}</div>
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
               <div v-if="_err_email" class="form-item-error">{{_err_email}}</div>
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
               <div v-if="_err_city" class="form-item-error">{{_err_city}}</div>
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
               <div v-if="_err_country" class="form-item-error">{{_err_country}}</div>
             </div>
           </div>
           <div class="--1-2">
             <div class="form-item">
               <div class="form-item-label">Пол</div>
               <div class="form-tags">
                 <div :class="{'active': Boolean(form.gender === 'Мужской')}" @click="() => {form.gender = 'Мужской'}">Мужской</div>
                 <div :class="{'active': Boolean(form.gender === 'Женский')}" @click="() => {form.gender = 'Женский'}">Женский</div>
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
                 v-model="form.category"
                 :options="categories"
                 :multiple="true"
                 :taggable="true"

                 track-by="name"
                 label="name"
                 group-values="children"
                 group-label="name"
               />
               <div v-if="_err_category" class="form-item-error">{{_err_category}}</div>
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
               <div v-if="_err_specialization" class="form-item-error">{{_err_specialization}}</div>
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
               <div v-if="_err_key_skill" class="form-item-error">{{_err_key_skill}}</div>
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
               <div v-if="_err_grade" class="form-item-error">{{_err_grade}}</div>
             </div>
           </div>
           <div class="--1-2">
             <div class="form-item">
               <div class="form-item-label">Отрасли работы</div>
               <SelectTemplate
                 v-model="form.work_industry"
                 :options="work_industry"

                 track-by="title"
                 label="title"
               />
               <div v-if="_err_work_industry" class="form-item-error">{{_err_work_industry}}</div>
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
               <div v-if="_err_description" class="form-item-error">{{_err_description}}</div>
             </div>
             <div class="section-help-message">
               Краткое резюме опыта специалиста, которое должно раскрывать его основные hard и soft-skills. Играет роль сопроводительного письма к резюме, т.е. текст должен быть максимально вкусным.
             </div>
           </div>
         </div>
       </div>
       <div class="specialist-section">
         <div class="specialist-section__title">Языки</div>
         <Languages
           :languages="form.languages"
           @change="(languages) => {form.languages = languages}"
         />
       </div>
       <div class="specialist-section">
         <div class="specialist-section__title">Проект</div>
         <Projects
           :projects="form.projects"
           @change="(projects) => {form.projects = projects}"
         />
       </div>
       <div class="specialist-section">
         <div class="specialist-section__title">Образование</div>
         <Education
           :educations="form.educations"
           @change="(educations) => {form.educations = educations}"
         />
       </div>
       <div class="specialist-section">
         <div class="specialist-section__title">Условия работы</div>
         <div class="form-contacts">
           <div class="--1-1 form-item-label">Ставка специалиста</div>
           <div class="--1-2">
             <div class="form-item">
               <div class="form-item-label">В час</div>
               <input
                 v-model="form.hour_price"
                 type="text"
                 placeholder=""
                 class="form-item-input"
               />
               <div v-if="_err_hour_price" class="form-item-error">{{_err_hour_price}}</div>
             </div>
           </div>
           <div class="--1-2">
             <div class="form-item">
               <div class="form-item-label">В месяц</div>
               <input
                 v-model="form.surname"
                 type="text"
                 placeholder=""
                 class="form-item-input"
               />
               <div v-if="_err_surname" class="form-item-error">{{_err_surname}}</div>
             </div>
           </div>
           <div class="--1-2">
             <div class="switch-label" @click="() => changeForm1('international_projects', !Boolean(form.international_projects))">
               <div class="switch" :class="{'active': Boolean(form.international_projects)}">
                 <input type="checkbox" :checked="Boolean(form.international_projects)" hidden style="user-select: none"/>
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
             <div class="switch-label" @click="() => changeForm2('work_formats', 'office', !Boolean(form.work_formats.office))">
               <div class="switch" :class="{'active': Boolean(form.work_formats.office)}">
                 <input type="checkbox" :checked="Boolean(form.work_formats.office)" hidden/>
                 <span/>
               </div>
               Формат работы: Офис
             </div>
           </div>
           <div class="--1-2">
             <div class="switch-label" @click="() => changeForm2('work_formats', 'remote', !Boolean(form.work_formats.remote))">
               <div class="switch" :class="{'active': Boolean(form.work_formats.remote)}">
                 <input type="checkbox" :checked="Boolean(form.work_formats.remote)" hidden/>
                 <span/>
               </div>
               Формат работы: Удаленно
             </div>
           </div>
           <div class="--1-2">
             <div class="switch-label" @click="() => changeForm2('relocation_place', 'inCountry', !Boolean(form.relocation_place.inCountry))">
               <div class="switch" :class="{'active': Boolean(form.relocation_place.inCountry)}">
                 <input type="checkbox" :checked="Boolean(form.relocation_place.inCountry)" hidden style="user-select: none"/>
                 <span/>
               </div>
               Релокации внутри страны
             </div>
           </div>
           <div class="--1-2">
             <div class="switch-label" @click="() => changeForm2('relocation_place', 'outCountry', !Boolean(form.relocation_place.outCountry))">
               <div class="switch" :class="{'active': Boolean(form.relocation_place.outCountry)}">
                 <input type="checkbox" :checked="Boolean(form.relocation_place.outCountry)" hidden/>
                 <span/>
               </div>
               Релокация за границу
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>
</template>

<script>
import {
  required,
  maxLength
} from "vuelidate/lib/validators";
import Select from "~/components/form/Select.vue";
import Projects from "~/components/specialist/Projects.vue";
import Education from "~/components/specialist/Education.vue";
import Languages from "~/components/specialist/Languages.vue";

import categories from "@/constacts/specialist/categories";
import specialization from "@/constacts/specialist/specialization";
import key_skill from "@/constacts/specialist/key_skill";
import cities from "@/constacts/specialist/cities";
import grayds from "@/constacts/specialist/grayds";
import work_industry from "@/constacts/specialist/work_industry";
import countries from "@/constacts/specialist/countries";
import list_language from "@/constacts/specialist/list_language";
import list_language_level from "@/constacts/specialist/list_language_level";

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

      form: {

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
        category: undefined,
        specialization: undefined,
        key_skill: undefined,
        grade: undefined,
        work_industry: undefined,
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
          remote: false,
        },
        international_projects: false,
        business_trips: false,
        relocation_place: {
          inCountry: false,
          outCountry: false,
        },
      },
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
      middlename: {
        maxLength: maxLength(50)
      },
    }
  },

  computed: {
    _err_surname: function () {},
    _err_name: function () {},
    _err_middlename: function () {},
  },

  components: {
    SelectTemplate:
    Select,
    Projects,
    Education,
    Languages
  },

  mounted() {
    // const getTreeCategogories = function (children) {
    //   return {
    //     id: children.id,
    //     title: children.title
    //   }
    // }
    // const newList = cities.map((child) => getTreeCategogories(child));
    // console.log('newList: ', JSON.stringify(newList));


    const list = [];
    Object.keys(list_language_level).map((t) => {
      list.push(list_language_level[t]);
    })
    console.log('JS', JSON.stringify(list))
  },

  methods: {
    changeForm1: function (key1, value) {
      let form = {...this.form};
      form[key1] = value;
      this.form = form;
    },
    changeForm2: function (key1, key2, value) {
      let form = {...this.form};
      form[key1][key2] = value;
      this.form = form;
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
</style>
