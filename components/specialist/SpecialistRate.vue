<template>
<div class="specialist-rate">
  <div class="specialist-rate__title">
    Ставка специалиста
  </div>
  <div class="specialist-rate__form">
    <div class="form-item">
      <div class="form-item-label">В час</div>
      <input
        :value="value"
        v-mask="currencyMask"
        class="form-item-input"
        @change="onInput"
      >
    </div>
    <div class="form-item">
      <div class="form-item-label">В месяц</div>
      <input
        :value="covertValue"
        v-mask="currencyMask"
        class="form-item-input"
        @change="convertToValue"
      >
    </div>
  </div>
</div>
</template>

<script>
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

export default {
  data: function () {
    const currencyMask = function (rawValue) {
      const numberMask = createNumberMask({
        prefix: '',
        allowDecimal: true,
        allowNegative: true,
        decimalSymbol: '.',
        thousandsSeparatorSymbol: ' ',
        decimalLimit: 2,
      });
      rawValue = rawValue.replace(',', '.');
      const mask = numberMask(rawValue);
      return mask;
    };


    return {
      covertValue: "",

      currencyMask
    }
  },

  props: {
    value: {}
  },

  mounted: function () {
    this.convertFromValue();
  },

  watch: {
    value: function () {
      this.convertFromValue();
    },
  },

  methods: {
    onInput: function (event) {
      this.$emit('input', event.target.value)
    },


    convertToValue: function (event) {
      const covertValue = event.target.value
      this.convertToValue = covertValue;
      const value = covertValue / 160;
      this.$emit('input', value)
    },
    convertFromValue: function () {
      this.covertValue = Number.parseFloat(this.value || 0) * 160
    },
  }
}
</script>

<style scoped lang="scss">
.specialist-rate {}
.specialist-rate__title {
  margin-bottom: 15px;

  font-weight: 500;
  font-size: 16px;
  line-height: 27px;
  color: #FFFFFF;
}
.specialist-rate__form {
  display: flex;
  align-items: flex-start;
  margin-left: -30px;
  & > * {
    width: calc(100% / 2 - 30px);
    margin-left: 30px;
  }
}
</style>
