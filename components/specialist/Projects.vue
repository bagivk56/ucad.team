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
              </div>
            </div>
            <div class="--1-1">
              <div class="form-item">
                <div class="form-item-label">Роль в проекте</div>
                <input
                  v-model="project.role"
                  class="form-item-input"
                  placeholder="Введите роль в проекте"
                  @inpu="(event) => changeProject(index, 'role', event)"
                />
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
