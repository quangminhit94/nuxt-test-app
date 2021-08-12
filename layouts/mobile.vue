<template>
  <div>
    <!-- header mobile -->
    <app-bar class="fixed bg-dark"></app-bar>

    <main class="absoluted bg-light">
      <nuxt />
    </main>

    <!-- footer mobile -->
    <bottom-bar class="bottom-fixed"></bottom-bar>
  </div>
</template>

<style lang="scss" scoped>
.fixed {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.absoluted {
  position: absolute;
  top: 70vh;
  left: 0;
  right: 0;
  height: 100%;
  z-index: 3;
}
.bottom-fixed {
  position: fixed;
  z-index: 4;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
.bg-dark {
  background-color: $colorBgBodyDark;
  color: white;
}
.bg-light {
  background-color: white;
}
main {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;

  border-top-left-radius: $radius*6;
  border-top-right-radius: $radius*6;
}
</style>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import AppBar from '@/components/AppBar.vue';
import BottomBar from '@/components/BottomBar.vue';

@Component({
  components: {
    AppBar,
    BottomBar
  }
})
export default Vue.extend({
  scrollToTop: true,
})
</script>
<script>

</script>
