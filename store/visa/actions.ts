import { CardsActions } from './types';
import cardApi from '@/client/visaCardApi';
import { select, delay, all, call, put, putResolve, takeLatest } from 'redux-saga/effects';

export const ActionType = {
  LOAD_CARDS: 'LOAD_CARDS'
}

export const actions: CardsActions = {
  async load ({ commit }){
    const cards = await cardApi.getAll();
    // yield all([
    //   delay(3000)
    // ]);
    console.log('test')
    // let cards = yield call(cardApi.getAll)
    commit(ActionType.LOAD_CARDS, cards.data);
  },
};

export default actions;
