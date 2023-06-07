<template>
  <div class="projects">
    <div class="projects__list">
      <template
        v-for="(project, index) in projects"
      >
        <div>
          <div class="project-card">
            <div class="--1-1">
              <div class="form-item">
                <div class="form-item-label">Название</div>
                <input
                  v-model="project.title"
                  class="form-item-input"
                  placeholder="Введите название проекта"
                  @inpu="(event) => changeProject(index, 'title', event)"
                />
                <div v-if="_errorFiled(index, 'title')" class="form-item-error">{{_errorFiled(index, 'title')}}</div>
              </div>
            </div>
            <div class="--1-1">
              <div class="form-item">
                <div class="form-item-label">Роль в проекте</div>
                <input
                  v-model="project.role"
                  class="form-item-input"
                  placeholder="Введите роль в проекте"
                />
                <div v-if="_errorFiled(index, 'role')" class="form-item-error">{{_errorFiled(index, 'role')}}</div>
              </div>
            </div>
            <div class="--1-1">
              <div class="form-item">
                <div class="form-item-label">Обязанности в проекте</div>
                <textarea
                  v-model="project.description"
                  class="form-item-input --textarea"
                  placeholder="Опишите, что специалист делал на проекте"
                  @inpu="(event) => changeProject(index, 'description', event)"
                />
                <div v-if="_errorFiled(index, 'description')" class="form-item-error">{{_errorFiled(index, 'description')}}</div>
              </div>
            </div>
            <div class="--1-2">
              <div class="form-item">
                <div class="form-item-label">Начало работы</div>
                <DateTimePicker
                  v-model="project.start"
                  :disabled-date="(date) => date > new Date()"
                  format="MM.YYYY"
                  value-type="YYYY-MM"
                />
                <div v-if="_errorFiled(index, 'start')" class="form-item-error">{{_errorFiled(index, 'start')}}</div>
              </div>
            </div>
            <div class="--1-2">
              <div class="form-item">
                <div class="form-item-label">Окончание</div>
                <DateTimePicker
                  v-model="project.finish"
                  :disabled-date="(date) => date > new Date()"
                  format="MM.YYYY"
                  value-type="YYYY-MM"
                  :disabled-inp="project.finishCurrent"
                />
                <div v-if="_errorFiled(index, 'finish')" class="form-item-error">{{_errorFiled(index, 'finish')}}</div>
              </div>
            </div>
            <div class="--1-1">
              <label class="switch-label">
                <div class="switch" :class="{'active': Boolean(project.finishCurrent)}">
                  <input v-model="project.finishCurrent" type="checkbox" :checked="Boolean(project.finishCurrent)" hidden style="user-select: none"/>
                  <span/>
                </div>
                По настоящее время
              </label>
            </div>

            <div class="project-card__remove" @click="() => removeProject(index)">
              <img src="@/assets/svg/common/close.svg"/>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="projects__new">
      <button
        class="btn btn-primary"
        @click="addProject"
      >
        Добавить проект
      </button>
    </div>
  </div>
</template>

<script>
import DateTimePicker from "~/components/form/DateTimePicker.vue";

const newProkect = {
  title: "",
  role: "",
  description: "",
  start: "",
  finish: "",
  finishCurrent: false,
}

export default {
  props: {
    projects: {
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
    DateTimePicker
  },

  methods: {
    addProject: function () {
      let projects = [...this.projects];
      projects.push({...newProkect});
      this.$emit("change", projects)
    },
    removeProject: function (index) {
      let projects = [...this.projects];
      projects.splice(index, 1);
      if (projects.length <= 0) {
        projects.push({...newProkect});
      }
      this.$emit("change", projects)
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
.projects {
  display: flex;
  flex-direction: column;
}
.projects__list {
  display: flex;
  flex-direction: column;
  & > * {
    margin-top: 20px;
    &:first-child {
      margin-top: 0;
    }
  }
}
.projects__new {
  margin-top: 20px;
  button {
    width: 100%;
  }
}

.project-card {
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
.project-card__remove {
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
