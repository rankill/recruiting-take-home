<template>
  <div class="Card">
    <header class="Card__header">
      <h1 class="Card__header__title">
        {{ title }}
      </h1>
    </header>

    <slot></slot>

    <footer class="Card__footer">
      <slot name="actions"></slot>
    </footer>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    title: String,
  },
})
export default class Card extends Vue {
  msg!: string;
}
</script>

<style scoped lang="scss">
.Card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 60px 50px;
  width: 100%;

  background: hsl(0, 0%, 100%);

  box-shadow: 0 8px 20px rgba(4, 16, 39, 0.08);
  border-radius: 5px;

  overflow: auto;

  &__header {
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;

    letter-spacing: -0.013rem;

    color: hsl(219, 81%, 8%);

    &__title {
      font-weight: 700;
      font-size: 32px;
      line-height: 37px;
      /* identical to box height */

      letter-spacing: -0.2px;

      margin: 0 0 50px 0;
    }
  }

  &__footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    width: 100%;
  }
}
</style>
