<template>
  <div class="languages">
    <div class="languages__list">
      <template
        v-for="(project, index) in languages"
      >
        <div>
          <div class="project-card">
            <div class="--1-2">
              <SelectTemplate
                v-model="project.title"
                :options="list_language"

                track-by="title"
                label="title"
              />
            </div>
            <div class="--1-2">
              <SelectTemplate
                v-model="project.level"
                :options="list_language_level"

                track-by="title"
                label="title"
              />
            </div>
            <div class="project-card__remove" @click="() => removeProject(index)">
              <img src="@/assets/svg/common/close.svg"/>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="languages__new">
      <button
        class="btn btn-primary"
        @click="addProject"
      >
        Добавить язык
      </button>
    </div>
  </div>
</template>

<script>
import list_language from "@/constacts/specialist/list_language";
import list_language_level from "@/constacts/specialist/list_language_level";
import SelectTemplate from "@/components/form/Select.vue";

const newProkect = {
  title: "",
  level: ""
}

export default {
  components: {SelectTemplate},
  data: function () {
    return {
      list_language,
      list_language_level
    }
  },

  props: {
    languages: {
      type: Array,
      default: () => {
        return []
      }
    }
  },

  methods: {
    addProject: function () {
      let languages = [...this.languages];
      languages.push({...newProkect});
      this.$emit("change", languages)
    },
    removeProject: function (index) {
      let languages = [...this.languages];
      languages.splice(index, 1);
      this.$emit("change", languages)
    }
  }
}
</script>

<style scoped lang="scss">
.languages {
  display: flex;
  flex-direction: column;
}
.languages__list {
  display: flex;
  flex-direction: column;
  & > * {
    margin-top: 20px;
    &:first-child {
      margin-top: 0;
    }
  }
}
.languages__new {
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
