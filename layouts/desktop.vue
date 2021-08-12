<template>
  <div>
    <!-- header -->
    <main>
      <h2>Hello desktop</h2>
      <nuxt />
    </main>
    <!-- footer -->
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
