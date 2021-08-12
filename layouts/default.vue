<template>
  <div>
    <main>
      <h1>default layout</h1>
      <nuxt />
    </main>
  </div>
</template>

<style lang="scss" scoped>
main {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background: #fafcff;
  padding: 1rem;
  box-sizing: border-box;
}
</style>

<script>
export default {
  scrollToTop: true
}
</script>
