<template>
  <div class="NumberConverter">
    <div class="NumberConverter__overlay"></div>

    <Card class="NumberConverter__card" title="Convert integer to text">
      <form class="NumberConverter__card__form">
        <FormField
          title="Enter your favorite number"
          placeholder="Enter a number here"
          required
          type="number"
          @input="formattedNumber = ''"
          v-model="currentNumber"
        />

        <FormField
          title="Your number in text"
          placeholder="Your number will show here"
          :isReadOnly="true"
          :readOnlyValue="formattedNumber"
        />
      </form>

      <template v-slot:actions>
        <div class="NumberConverter__card__actions">
          <Button @clicked="convertNumber()" :isDisable="!currentNumber">
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

@Options({
  components: {
    Card,
    FormField,
    Button,
  },
})
export default class NumberConverter extends Vue {
  currentNumber: number | null = null;
  formattedNumber = '';

  convertNumber(): void {
    console.log(this.currentNumber);
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

    &__form {
      width: 100%;
    }
  }
}
</style>
