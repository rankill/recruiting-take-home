<template>
  <Header />
  <NumberConverter />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/core/Header.vue';
import NumberConverter from '@/components/NumberConverter.vue';

@Options({
  components: {
    Header,
    NumberConverter,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
:root {
  --primary: hsl(219, 81%, 8%);
  --text-silent: hsl(218, 25%, 74%);
}

* {
  box-sizing: border-box;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 16px;

  color: var(--primary);

  min-height: 100vh;

  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
