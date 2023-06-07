<template>
  <div class="education">
    <div class="education__list">
      <div v-for="(education, index) in educations">
        <div class="education-card">
          <div class="--1-1">
            <div class="form-item">
              <div class="form-item-label">Уровень</div>
              <SelectTemplate
                v-model="education.level"
                :options="['Высшее','Среднее','Дополнительное']"
              />
              <div v-if="_errorFiled(index, 'level')" class="form-item-error">{{_errorFiled(index, 'level')}}</div>
            </div>
          </div>
          <div class="--1-1">
            <div class="form-item">
              <div class="form-item-label">Учебное заведение</div>
              <input
                v-model="education.educationOrganization"
                class="form-item-input"
                placeholder=""
              />
              <div v-if="_errorFiled(index, 'educationOrganization')" class="form-item-error">{{_errorFiled(index, 'educationOrganization')}}</div>
            </div>
          </div>
          <div class="--1-1">
            <div class="form-item">
              <div class="form-item-label">Специальность</div>
              <input
                v-model="education.qualification"
                class="form-item-input"
                placeholder=""
              />
              <div v-if="_errorFiled(index, 'qualification')" class="form-item-error">{{_errorFiled(index, 'qualification')}}</div>
            </div>
          </div>
          <div class="--1-1">
            <div class="form-item">
              <div class="form-item-label">Завершение учебы</div>
              <DateTimePicker
                v-model="education.finishDate"
                :disabled-date="(date) => date > new Date()"
                format="YYYY"
                value-type="YYYY"
              />
              <div v-if="_errorFiled(index, 'finishDate')" class="form-item-error">{{_errorFiled(index, 'finishDate')}}</div>
            </div>
          </div>

          <div class="education-card__remove" @click="() => removeProject(index)">
            <img src="@/assets/svg/common/close.svg"/>
          </div>
        </div>
      </div>
    </div>
    <div class="education__new">
      <button
        class="btn btn-primary"
        @click="addProject"
      >
        Добавить
      </button>
    </div>
  </div>
</template>

<script>
import Select from "~/components/form/Select.vue";
import DateTimePicker from "@/components/form/DateTimePicker.vue";

const education = {
  level: "",
  educationOrganization: "",
  qualification: "",
  finishDate: "",
}

export default {
  props: {
    educations: {
      type: Array,
      default: () => {
        return []
      }
    },
    errors: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },

  components: {
    DateTimePicker,
    SelectTemplate: () => import("~/components/form/Select.vue")
  },

  methods: {
    addProject: function () {
      let educations = [...this.educations];
      educations.push({...education});
      this.$emit("change", educations)
    },
    removeProject: function (index) {
      let educations = [...this.educations];
      educations.splice(index, 1);
      if (educations.length <= 0) {
        educations.push({...education});
      }
      this.$emit("change", educations)
    },

    _errorFiled: function (index, name) {
      const error = this.errors?.[index]?.[name] || {};
      if (!error?.$invalid) {
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
    }
  }
}
</script>

<style scoped lang="scss">
.education {}
.education__list {
  display: flex;
  flex-direction: column;
  & > * {
    margin-top: 20px;
    &:first-child {
      margin-top: 0;
    }
  }
}
.education__new {
  margin-top: 20px;
  button {
    width: 100%;
  }
}

.education-card {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 25px;
  margin-top: -10px;
  margin-left: -10px;
  position: relative;

  & > * {
    width: calc(100% - 10px);
    margin-top: 10px;
    margin-left: 10px;

    &.--1-2 {
      width: calc(100% / 2 - 10px);
    }
  }
}
.education-card__remove {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10px; right: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>
