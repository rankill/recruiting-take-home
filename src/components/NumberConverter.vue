<template>
  <div class="NumberConverter">
    <div class="NumberConverter__overlay"></div>

    <Card class="NumberConverter__card" title="Convert integer to text">
      <FormField
        title="Enter your favorite number"
        placeholder="Enter a number here"
        required
        type="number"
        @input="convertedNumber = ''"
        v-model="currentNumber"
        @keypress.enter="convertNumber"
      />

      <FormField
        :title="`Your number in text`"
        placeholder="Your number will show here"
        :isReadOnly="true"
        :readOnlyValue="convertedNumber"
      />

      <template v-slot:actions>
        <div class="NumberConverter__card__actions">
          <!-- 
              If we want to grow our app and have more than one language 
              just add them into the constant enum type
              
              The select is only for growing purpose so remove the v-if 
              statement to see it working 
          -->
          <Select
            v-if="false"
            :options="languagesOptions"
            :default="languagesOptions[0]"
            @change="updateLanguage($event)"
          />

          <Button
            class="NumberConverter__card__actions__button"
            @clicked="convertNumber()"
            :isDisable="!isValid"
          >
            Convert
          </Button>
        </div>
      </template>
    </Card>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Card from '@/core/Card.vue';
import FormField from '@/core/FormField.vue';
import Button from '@/core/Button.vue';
import Select from '@/core/Select.vue';

import { Languages, LanguagesList } from '@/constants';
import { ConverterService } from '@/services/converter/converterService';

@Options({
  components: {
    Card,
    FormField,
    Button,
    Select,
  },
})
export default class NumberConverter extends Vue {
  currentNumber: number | null = null;
  convertedNumber = '';
  converter: ConverterService = new ConverterService();
  languagesOptions = LanguagesList;

  get isValid(): boolean {
    return (
      this.currentNumber === 0 ||
      (!!this.currentNumber &&
        !isNaN(this.currentNumber) &&
        this.currentNumber >= 0)
    );
  }

  convertNumber(): void {
    this.convertedNumber = this.converter.convertNumber(this.currentNumber);
  }

  updateLanguage(lan: Languages): void {
    this.converter.selectedLanguage = lan;
  }
}
</script>

<style scoped lang="scss">
.NumberConverter {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  &__overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    max-width: 948.65px;
    max-height: 936.58px;

    margin: auto;

    background: radial-gradient(
      48.17% 48.79% at 50.73% 49.99%,
      #c6d5f0 0%,
      rgba(214, 226, 247, 0) 100%
    );
  }

  &__card {
    z-index: 1;

    max-width: 506px;

    margin: auto;

    width: 100%;

    &__actions {
      display: flex;
      justify-content: space-between;

      width: 100%;

      &__button {
        // To keep it at the end even if there is not a sibling component
        margin-left: auto;
      }
    }
  }
}
</style>
