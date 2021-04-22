<template>
  <header class="Header">
    <Logo />
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Logo from './Logo.vue';

@Options({
  components: {
    Logo,
  },
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.Header {
  display: flex;
  width: 100%;
  height: auto;

  padding: 37px 59px;
}
</style>
