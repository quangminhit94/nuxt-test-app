<template>
  <section>
    <h1>list cards</h1>
    <visa-card
      v-for="card in visaCards"
      :key="'card-' + card.id"
      :card="card"
    />
    <Carousel>
      <template v-slot:slides>
        <Slide v-for="(slide, index) in carouselSlides" :key="index">
          <template v-slot:content>
            <h1>{{slide}}</h1>
          </template>
        </Slide>
      </template> 
    </Carousel>

  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import VisaCard from './VisaCard.vue';
import Carousel from '@/components/common/Carousel.vue';
import Slide from '@/components/common/Slide.vue';
import { Card } from '@/models/card';

@Component({
  components: {
    VisaCard,
    Carousel,
    Slide
  },
  
  filters: {
    /**
     * Fetch the name of a voted choice.
     *
     * Choices list is passed as argument because `this` is not
     * accessible here so the computed properties `this.choices`
     * does not resolve
     */
    // choiceName: (value: number, choices: Choice[]): string => {
    //   const choice = choices.find(choice => choice.id === value);
    //   return choice !== undefined ? choice.text : 'Error no choice found';
    // }
  }
})
export default class VisaCardList extends Vue {
  @Prop({ type: Array })
  visaCards!: Card[];

  @Prop({ type: Array, default: () => ['slide 1', 'slide 2', 'slide 3'] }) 
  carouselSlides!: Array<any>

  @Prop({ default: 'Apple' }) brand!: string
  
  /**
   * Computed properties for flatteting the list of choices
   * @return list of displayed choices
   */
  // public get choices(): Choice[] {
  //   return this.visaCards
  //     .map(card => card.choices)
  //     .reduce((p1, p2) => p1.concat(p2), []);
  // }
  mounted() {
    console.log(this.brand);
  }
}
</script>

<style lang="scss" scoped>
.poll__vote {
  span:first-child {
    display: inline-block;
    width: 40px;
    text-align: right;
    margin-right: 8px;
  }
}
</style>