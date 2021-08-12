import { CardsState } from './types';
import { Card } from '@/models/card';

/**
 * Poll state initialiser
 */
export const initState = (): CardsState => ({
  cards: [] as Card[]
});

export default initState;
