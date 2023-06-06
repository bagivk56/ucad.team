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
           </div>
           <div class="--1-1">
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
           <div class="--1-1">
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
           </div>
         </div>
       </div>

       <div class="specialist-section">
         <div class="specialist-section__title">Проект</div>
       </div>
       <div class="specialist-section">
         <div class="specialist-section__title">Образование</div>
       </div>
       <div class="specialist-section">
         <div class="specialist-section__title">Условия работы</div>
       </div>
       <div class="specialist-section">
         <div class="specialist-section__title">Паспортные данные</div>
       </div>
       <div class="specialist-section">
         <div class="specialist-section__title">Гражданство</div>
       </div>

       <div class="specialist-section">
         <div class="specialist-section__title">Проф. сообщества</div>
       </div>
       <div class="specialist-section">
         <div class="specialist-section__title">Языки</div>
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
import categories from "@/constacts/specialist/categories";
import specialization from "@/constacts/specialist/specialization";
import key_skill from "@/constacts/specialist/key_skill";
import cities from "@/constacts/specialist/cities";
import grayds from "@/constacts/specialist/grayds";
import work_industry from "@/constacts/specialist/work_industry";

export default {
  data: function () {
    return {
      categories,
      specialization,
      key_skill,
      cities,
      grayds,
      work_industry,

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

        //
        category: undefined,
        specialization: undefined,
        key_skill: undefined,
        grade: undefined,
        work_industry: undefined,
        description: "",

        country: "Россия",
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
    SelectTemplate: Select
  },

  mounted() {
    const getTreeCategogories = function (children) {
      return {
        id: children.id,
        title: children.title
      }
    }
    const newList = cities.map((child) => getTreeCategogories(child));
    console.log('newList: ', JSON.stringify(newList));
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
</style>
