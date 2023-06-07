<template>
  <div class="date-time-picker">
    <date-picker
      v-model="value"
      :lang="localDate"
      :format="format"
      :value-type="valueType"
      :disabled="disabledInp"
      :disabled-date="disabledDate"
      type="date"
      input-class="form-item-input"
      placeholder="Выберите дату"

      @input="onInput"
    />
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

const localDate = {
  formatLocale: {
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthsShort: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июнь', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    weekdays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    weekdaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Птн', 'Сб'],
    weekdaysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Птн', 'Сб'],
    firstDayOfWeek: 1,
    firstWeekContainsDate: 1
  }
};


export default {
  data: function () {
    return {
      localDate
    }
  },

  props: {
    value: {
      default: null
    },
    format: {
      type: String,
      default: "DD.MM.YYYY"
    },
    valueType: {
      type: String,
      default: "YYYY-MM-DD"
    },
    disabledInp: {
      type: Boolean,
      default: false
    },
    disabledDate: {
      default: null
    }
  },

  components: {
    DatePicker
  },

  methods: {
    onInput: function (event) {
      this.$emit("input", event)
    }
  }
}
</script>

<style scoped lang="scss">
.date-time-picker {
  .mx-datepicker {
    width: 100%!important;
  }

}
</style>
