<template>
  <section class="bottom-bar">
    <ul class="btn-group">
      <li>
        <button class="icon-button freeze-card"><svg-icon name="home" class="icon"/> Home</button>
      </li>
      <li>
        <button class="icon-button set-spend-limit"><svg-icon name="card" class="icon"/> Cards</button>
      </li>
      <li>
        <button class="icon-button gpay"><svg-icon name="payments" class="icon"/> Payments</button>
      </li>
      <li>
        <button class="icon-button replace-card"><svg-icon name="credit" class="icon"/> Credit</button>
      </li>
      <li>
        <button class="icon-button deactivate-card"><svg-icon name="profile" class="icon"/> Profile</button>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
@Component
export default class BottomBar extends Vue {
}
</script>

<style lang="scss" scoped>
  .bottom-bar {
    background-color: white;
    filter: drop-shadow(0 0 8px $colorBottomBarShadow);
    .btn-group {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem;
    }
    .icon-button {
      padding-left: 0.5rem;
      padding-right: 0.5rem;

      font-size: 0.5rem;
      line-height: 1.5;

      flex-direction: column;
      color: $colorPrimaryDark;
      .icon {
        margin-bottom: 0.3rem;
      }
    }
  }
</style>