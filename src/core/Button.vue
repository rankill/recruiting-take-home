<template>
  <button
    v-bind="$attrs"
    class="Button box"
    @click="$emit('clicked', $event)"
    :class="{ 'Button--primary': isPrimary }"
    :disabled="isDisable"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  emits: ['clicked'],
  props: {
    isDisable: {
      type: Boolean,
      default: () => false,
    },
    isPrimary: {
      type: Boolean,
      default: () => true,
    },
  },
})
export default class Button extends Vue {
  isDisable!: boolean;
  isPrimary!: boolean;
}
</script>

<style lang="scss" scoped>
.Button {
  &--primary {
    background-color: var(--primary);

    &:hover,
    &:active,
    &:focus {
      border: 1px solid var(--primary);
      background-color: transparent;
      color: var(--primary);
    }

    &:disabled {
      pointer-events: none;
      background-color: var(--text-silent);
      border-color: var(--text-silent);
    }
  }
}
</style>
