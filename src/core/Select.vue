<template>
  <select
    :tabindex="tabindex"
    class="Select box"
    v-model="selected"
    @change="$emit('change', selected)"
    v-bind="$attrs"
  >
    <option v-for="(option, i) of options" :key="i">{{ option }}</option>
  </select>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  emits: ['change'],
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: () => null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: () => 0,
    },
  },
  mounted() {
    this.$emit('change', this.selected);
  },
})
export default class Select extends Vue {
  tabindex!: number;
  options!: string[];
  default!: string;

  selected = this.default
    ? this.default
    : this.options.length > 0
    ? this.options[0]
    : null;
}
</script>

<style lang="scss" scoped>
.Select {
  border: 1px solid var(--primary);
  background-color: transparent;
  color: var(--primary);

  &:hover,
  &:active,
  &:focus {
    opacity: 0.5;
  }

  &:disabled {
    pointer-events: none;
    background-color: var(--text-silent);
  }
}
</style>
