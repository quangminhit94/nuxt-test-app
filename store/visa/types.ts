import { ActionTree, ActionContext, MutationTree, GetterTree } from 'vuex';
import { RootState } from '../types';
import { Card } from '@/models/card';

export interface CardsState {
  cards: Card[];
}

/**
 * Create a type to save some characters:
 * SO link for type alias: https://stackoverflow.com/a/28343437/4906586
 */
export type CardActionContext = ActionContext<CardsState, RootState>;

/**
 * Cards actions
 */
export interface CardsActions extends ActionTree<CardsState, RootState> {
  load: (ctx: CardActionContext) => void;
}

/**
 * Cards mutations
 */
export interface CardsMutations extends MutationTree<CardsState> {
  setCards: (state: CardsState, Cards: Card[]) => void;
}

/**
 * Cards getters is type instead of interface because it is
 * empty
 */
export type CardsGetters = GetterTree<CardsState, RootState>;
