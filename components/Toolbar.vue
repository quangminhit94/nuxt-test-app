<template>
  <section>
    <!-- Toolbar navigation -->
    <div class="toolbar bg-dark">
      <ul class="navigation mb-24">
        <li><nuxt-link activeClass='active' exactActiveClass='exact-active' to='/visa'>My debit cards</nuxt-link></li>
        <li class="ml-24"><nuxt-link activeClass='active' exactActiveClass='exact-active' to='/visa/1'>All company cards</nuxt-link></li>
      </ul>
    </div>

    <!-- visa card slider -->

    <visa-card-list/>
  
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { cardsModule } from '@/store/visa/const';
import { Card } from '@/models';
import VisaCardList from '@/components/visas/VisaCardList.vue';
@Component({
  components: {
    VisaCardList
  }
})
export default class ToolbarNavigation extends Vue {
  @cardsModule.State('cards')
  public polls!: Card[];
  @cardsModule.Action('load')
  private loadPolls!: () => void;
  mounted() {
    console.log('a')
    this.loadPolls();
  }
}
</script>

<style lang="scss" scoped>
  .navigation {
    display: flex;
    align-items: center;
    a {
      color: white;
      font-size: 0.6rem;
    }
    .exact-active {
      border-bottom: 2px solid $colorHighLight;
      font-weight: $fontWeightMedium;
    }
  }
</style>
