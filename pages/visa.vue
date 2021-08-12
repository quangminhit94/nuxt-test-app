<template>
  <section>
    <!-- Visa Card Detail -->
    <nuxt-child></nuxt-child>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default {
  layout(context: any): string {
    // console.log(Object.keys(context))
    console.log(/mobile/i.test(context.userAgent) ? 'mobile' : 'desktop')
    return /mobile/i.test(context.userAgent) ? 'mobile' : 'desktop'
  }
}
</script>


<style lang="scss" scoped>
  
</style>