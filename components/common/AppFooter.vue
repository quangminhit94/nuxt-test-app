<template>
  <section class="app-footer">
    <slot name="app-footer"></slot>
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