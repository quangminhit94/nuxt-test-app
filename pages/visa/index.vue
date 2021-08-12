<template>

    <!-- Draggable Scroll toolbar content -->
  <section class="toolbar-content">

    <!-- Functional buttons -->
    <div class="functional-btn">
      <ul class="btn-group">
        <li>
          <button class="icon-button freeze-card"><svg-icon name="freeze-card" class="icon"/> Freeze Card</button>
        </li>
        <li>
          <button class="icon-button set-spend-limit"><svg-icon name="set-spend-limit" class="icon"/> Set spend limit</button>
        </li>
        <li>
          <button class="icon-button gpay"><svg-icon name="gpay" class="icon"/> Add to GPay</button>
        </li>
        <li>
          <button class="icon-button replace-card"><svg-icon name="replace-card" class="icon"/> Replace card</button>
        </li>
        <li>
          <button class="icon-button deactivate-card"><svg-icon name="deactivate-card" class="icon"/> Cancel card</button>
        </li>
      </ul>
    </div>
    <div class="bottom-sheet">
      
      <!-- Transaction list -->
      <visa-transaction-card-list/>
        
    </div>
  </section>
</template>

<script lang="ts">
import VisaCard from '@/components/visas/VisaCard.vue';
import VisaTransactionCardList from '@/components/visas/VisaTransactionCardList.vue';
export default {
  components: {
    VisaCard,
    VisaTransactionCardList
  }
  // @Prop({ required: true }) readonly item!: object
}
</script>

<style lang='scss' scoped>
  .bottom-sheet {
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
  }
  .functional-btn {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

    font-size: 0.6rem;

    background-color: $colorSecondary;
    border: 0;
    border-top-left-radius: $radius*6;
    border-top-right-radius: $radius*6;

    .btn-group {
      display: flex;
      justify-content: center;
    }
    .icon-button {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      line-height: 1.5;

      flex-direction: column;
      color: $colorPrimaryDark;
      .icon {
        margin-bottom: 0.3rem;
      }
    }
  }
</style>