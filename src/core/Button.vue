<template>
  <button
    class="Button"
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
  color: hsl(0, 0%, 100%);

  box-shadow: 0 8px 20px rgba(4, 16, 39, 0.08);
  border-radius: 3px;
  border: 1px solid transparent;

  font-size: 14px;
  font-weight: 700;
  text-align: center;
  line-height: 16px;
  letter-spacing: 0.0166154px;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 10px 5px;

  transition: all 0.3s linear;
  position: relative;
  overflow: hidden;

  min-width: 153px;

  cursor: pointer;

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
    }
  }
}
</style>
