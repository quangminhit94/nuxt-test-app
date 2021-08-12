import { CardsMutations } from './types';

export const MutationType = {
  SET_CARDS: 'SET_CARDS'
}

export const mutations: CardsMutations = {
  setCards: (state, cards) => {
    state.cards = cards;
  }
};

export default mutations;
