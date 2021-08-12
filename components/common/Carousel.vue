<template>
  <section class='carousel'>
    <slot name='slides'></slot>
  </section>
</template>

<script lang='ts'>

import { Vue, Component, Ref } from 'nuxt-property-decorator'

@Component
export default class Carousel extends Vue {
  @Ref() readonly currentSlide!: number
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>