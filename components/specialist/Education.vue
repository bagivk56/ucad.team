<template>
  <div class="education">
    <div class="education__list">
      <div v-for="(education) in educations">
        <div class="education-card">
          <div class="--1-1">
            <div class="form-item">
              <div class="form-item-label">Уровень</div>
              <SelectTemplate
                v-model="education.level"
                :options="['Высшее','Среднее','Дополнительное']"
              />
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
            </div>
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
