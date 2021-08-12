<template>
  <section class="app-header">
    <div class="header-bar">
      <slot name="header-bar"></slot>
    </div>

    <div class="header-content">
      <slot name="header-content"></slot>
    </div>

  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
@Component
export default class AppHeader extends Vue {
}
</script>
<style lang="scss" scoped>

</style>