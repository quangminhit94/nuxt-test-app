<template>
  <section>
    <h1>list transaction</h1>
    <visa-transaction-card
      
    />
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import VisaTransactionCard from '@/components/visas/VisaTransactionCard.vue';
import { Transaction } from '@/models/card';
@Component({
  components: {
    VisaTransactionCard
  }
})
export default class VisaTransactionCardList extends Vue {
  @Prop({ type: Array })
  visaTransactions!: Transaction[];
}
</script>

<style lang="scss" scoped>
  
</style>