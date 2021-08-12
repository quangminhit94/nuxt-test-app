<template>
  <section>
    <expansion-panel>

      <template v-slot:header>
        <button class="icon-button"><svg-icon name="recent-transaction" class="icon"/> Recent transactions</button>
        <button class="icon-button"><svg-icon name="down-arrow" class="icon arrow"/></button>
      </template>

      <template v-slot:body>
        <div class="multi-icon-text">
          <div class="container">

            <div class="row">

              <div class="col flex1">
                <div class="row">
                  <div class="img">
                    <svg-icon name="file-storage" class="icon"/>
                  </div>
                  <div class="info">
                    <p class="mb-5">Hamleys</p>
                    <p>20 May 2020</p>
                  </div>
                </div>
              </div>

              <div class="col">
                <p class="amount">
                  + S$ 150
                </p>
              </div>
              
            </div>

            <div class="row">
              <div class="col pl-30 pr-30"></div>
              <div class="col flex1">
                <div class="icon-button sub-function">
                  <div class="blue wrap-icon">
                    <svg-icon name="business-and-finance" />
                  </div>
                  <span class="pl-5 pr-5">Refund on debit card </span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </template>  
    </expansion-panel>    
  
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import ExpansionPanel from '@/components/common/ExpansionPanel.vue';
@Component({
  components: {
    ExpansionPanel
  }
})
export default class VisaTransactionCard extends Vue {
}
</script>

<style lang="scss" scoped>
  /* header */
  .header {
    .icon-button {
      font-size: 0.7rem;
      color: $colorPrimaryDark;
      .arrow {
        width: 1rem;
        height: 1rem;
        padding: 0;
      }
    }
  }

  /* body */
  .multi-icon-text {
    .img {
      padding: .8rem;
      background-color: #009DFF1A;
      border-radius: $radius*6;
      .icon {
        width: 0.8rem;
        height: 0.8rem;
      }
    }
    .info {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      flex: 1;
    }
  }
  .sub-function {
    .wrap-icon {
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;
      padding-left: 0.3rem;
      padding-right: 0.3rem;
      border-radius: $radius*2;
    }
    .icon {
      width: 0.5rem;
      height: 0.5rem;
      padding: 0;
    }
    .blue {
      background-color: $colorBodyPanelBgSubIcon1;
    }
  }
</style>