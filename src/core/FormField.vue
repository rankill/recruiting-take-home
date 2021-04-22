<template>
  <div class="FormField">
    <label class="FormField__label"> {{ title }} </label>

    <p
      class="FormField__readonly"
      :class="{ 'FormField__readonly--silent': !readOnlyValue }"
      v-if="isReadOnly"
    >
      {{ readOnlyValue ? readOnlyValue : placeholder }}
    </p>

    <input
      v-else
      v-bind="$attrs"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      class="FormField__input"
      @input="handleUpdate($event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  emits: ['update:modelValue'],
  props: {
    title: {
      type: String,
      required: true,
    },
    isReadOnly: {
      type: Boolean,
      default: () => false,
    },
    readOnlyValue: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      default: () => 'Enter a value here',
    },
    type: {
      type: String,
      default: () => 'text',
    },
    modelValue: {
      type: [String, Number],
      default: null,
    },
  },
})
export default class FormField extends Vue {
  readOnlyValue!: string;
  placeholder!: string;
  type!: string;

  isReadOnly!: boolean;
  modelValue!: string | number;

  handleUpdate(value: number | string): void {
    this.$emit(
      'update:modelValue',
      this.type === 'number' && value !== '' ? +value : value
    );
  }
}
</script>

<style lang="scss" scoped>
.FormField {
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  width: 100%;

  margin-bottom: 30px;

  &__label {
    font-weight: 700;
    font-size: 1rem;

    margin-bottom: 10px;
  }

  &__input {
    background: hsl(0, 0%, 100%);
    border: 0.8px solid hsl(218, 48%, 91%);
    border-radius: 2px;

    padding: 11px 10px;

    width: 100%;
    min-height: 40px;
  }

  &__readonly {
    margin: 0;
    text-align: left;

    &--silent {
      color: var(--text-silent);
    }
  }
}
</style>
