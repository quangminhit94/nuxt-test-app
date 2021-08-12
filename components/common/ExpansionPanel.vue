<template>
  <section class="expansion-panel">

    <div class="header">
      <slot name="header"></slot>
    </div>

    <div class="body">
      <slot name="body"></slot>
    </div>
    
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
@Component
export default class ExpansionPanel extends Vue {
}
</script>

<style lang="scss" scoped>
  .expansion-panel {
    border: 1px solid $colorBodyPanelBorder;
    border-radius: $radius*2;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.2rem;

    border-bottom: 1px solid $colorHeaderPanelBorder;
    border-top-left-radius: $radius*2;
    border-top-right-radius: $radius*2;
    filter: drop-shadow(0 0 8px $colorHeaderPanelShadow);
    background-color: $colorHeaderPanel;
  }
  .body {
    padding: 1.2rem;
    font-size: 0.7rem;
    
  }

</style>