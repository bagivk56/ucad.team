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
                  :value="project.title"
                  class="form-item-input"
                  placeholder="Введите название проекта"
                />
              </div>
            </div>
            <div class="--1-1">
              <div class="form-item">
                <div class="form-item-label">Роль в проекте</div>
                <input
                  :value="project.role"
                  class="form-item-input"
                  placeholder="Введите роль в проекте"
                />
              </div>
            </div>
            <div class="--1-1">
              <div class="form-item">
                <div class="form-item-label">Обязанности в проекте</div>
                <textarea
                  :value="project.role"
                  class="form-item-input --textarea"
                  placeholder="Опишите, что специалист делал на проекте"
                />
              </div>
            </div>
            <div class="--1-2">
              <div class="form-item">
                <div class="form-item-label">Начало работы</div>
                <input
                  :value="project.title"
                  class="form-item-input"
                  placeholder="Введите название проекта"
                />
              </div>
            </div>
            <div class="--1-2">
              <div class="form-item">
                <div class="form-item-label">Окончание</div>
                <input
                  :value="project.title"
                  class="form-item-input"
                  placeholder="Введите название проекта"
                />
              </div>
            </div>
            <div class="--1-1"></div>
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
const newProkect = {
  title: "",
  role: "",
  description: "",
  start: "",
  finish: "",
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

  methods: {
    addProject: function () {
      let projects = [...this.projects];
      projects.push({...newProkect});
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
