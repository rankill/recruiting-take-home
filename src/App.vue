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

.box {
  color: hsl(0, 0%, 100%);

  box-shadow: 0 8px 20px rgba(4, 16, 39, 0.08);
  border-radius: 3px;
  border: 1px solid var(--primary);

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
}
</style>
