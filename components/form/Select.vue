<template>
  <div class="form-item-select">
    <multiselect
      :value="value"
      :options="options"
      :multiple="multiple"
      :track-by="trackBy"
      :label="label"
      :group-values="groupValues"
      :group-label="groupLabel"
      :placeholder="placeholder"

      @input="onInput"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [Object, Array],
      default: undefined
    },
    options: {
      type: Array,
      default: () => {
        return []
      }
    },
    multiple: {
      type: Boolean,
      default: false
    },
    taggable: {
      type: Boolean,
      default: false
    },

    trackBy: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    groupValues: {
      type: String,
      default: ""
    },
    groupLabel: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "Выберите"
    },
  },

  methods: {
    onInput: function (event) {
      this.$emit("input", event);
    }
  }
}
</script>

<style lang="scss">
.form-item-select {

}
</style>
