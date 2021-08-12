<template>
  <section>
    <h1>Visa child - id - {{routeParams}}</h1>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    routeParams(): string {
      if (this.$route.params.id) {
        return this.$route.params.id
      } else {
        return 'Coming Soon!'
      }
    }
  }
})
</script>

<style>

</style>