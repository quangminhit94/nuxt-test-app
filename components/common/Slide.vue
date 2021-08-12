<template>
  <section class='slide'>
    <transition name="fade">
      <slot name='content'></slot>
    </transition>
  </section>
</template>

<script>
export default {

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