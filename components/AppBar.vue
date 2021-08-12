<template>
  <section class="app-bar">
    <div class="app-bar-header mb-24">
      <h6>Account balance</h6>
      <div><svg-icon name="logo" class="logo"/></div>
    </div>

    <div class="app-bar-detail mb-24">
      <div class="icon-button amount">
        <span class="green-bg icon">$$</span> 3000
      </div>
      <button class="icon-button add-card"><svg-icon name="box" class="icon"/> New Card</button>
    </div>

    <toolbar></toolbar>

  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import Toolbar from './Toolbar.vue';
@Component({
  components: {
    Toolbar
  }
})
export default class AppBar extends Vue {
}
</script>
<style lang="scss" scoped>
.app-bar {
  padding: 1.2rem;
  
  h1,h2,h3,h4,h5 {
    color: white;
  }

  .app-bar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h6 {
      font-size: 0.8rem;
    }
    .logo {
      width: 1.3rem;
      height: 1.25rem;
    }
  }

  .app-bar-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .amount {
    
    font-size: 1.2rem;
    .icon {
      /* size & space */
      width: 2rem;
      height: 0.8rem;
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;
      margin-right: 0.5rem;
      
      /* flex box */
      display: flex;
      justify-content: center;
      align-items: center;
      
      /* font */
      font-size: 0.6rem;
      text-align: center;

      background-color: $colorPrimary;
      border-radius: $radius;
    }
  }
  
  .add-card {
    color: $colorHighLight; 
    
    font-size: 0.7rem;
    font-weight: $fontWeightBold;
  }
}
</style>