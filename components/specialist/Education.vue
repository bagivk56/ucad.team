<template>
  <div class="education">
    <div class="education__list">
      <template
        v-for="(education) in educations"
      >
        <div class="education-card">
          <div class="--1-1">
            <div class="form-item">
              <div class="form-item-label">Уровень</div>
              <SelectTemplate
                :value="education.level"
                :options="['Высшее','Среднее','Дополнительное']"
              />
            </div>
          </div>
          <div class="--1-1">
            <div class="form-item">
              <div class="form-item-label">Учебное заведение</div>
              <input
                :value="education.educationOrganization"
                class="form-item-input"
                placeholder=""
              />
            </div>
          </div>
          <div class="--1-1">
            <div class="form-item">
              <div class="form-item-label">Специальность</div>
              <input
                :value="education.qualification"
                class="form-item-input"
                placeholder=""
              />
            </div>
          </div>
          <div class="--1-1">
            <div class="form-item">
              <div class="form-item-label">Завершение учебы</div>
              <input
                :value="education.finishDate"
                class="form-item-input"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="education__new">
      <button
        class="btn btn-primary"
        @click="addEducation"
      >
        Добавить
      </button>
    </div>
  </div>
</template>

<script>
import Select from "~/components/form/Select.vue";

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
    }
  },

  components: {
    SelectTemplate: () => import("~/components/form/Select.vue")
  },

  methods: {
    addEducation: function () {

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

  & > * {
    width: calc(100% - 10px);
    margin-top: 10px;
    margin-left: 10px;

    &.--1-2 {
      width: calc(100% / 2 - 10px);
    }
  }
}
</style>
