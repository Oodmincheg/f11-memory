import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BASE_CARDS, STATUSES } from './consts';
import { shuffle } from './helpers';
import { OPEN_CARD, COMPARE_CARDS, RESTART } from './actions';

const initialState = {
  cards: shuffle(BASE_CARDS),
  firstOpenedCard: null,
  secondOpeneCard: null,
  finish: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_CARD:
      console.log('base cards when open card ===> ', BASE_CARDS);
      if (state.secondOpenedCard) {
        return state;
      }
      const openedCard = state.cards.find(({ id }) => id === action.payload);
      //click on opened card
      if (openedCard.status === STATUSES.OPENED) {
        return state;
      }
      openedCard.status = STATUSES.OPENED;
      //first card is opened
      if (!state.firstOpenedCard) {
        return {
          ...state,
          cards: [...state.cards],
          firstOpenedCard: { ...openedCard },
        };
      }
      //if first card value equal second we left both opened
      return {
        ...state,
        cards: [...state.cards],
        secondOpenedCard: { ...openedCard },
      };

    case COMPARE_CARDS: {
      if (state.cards.every((card) => card.status === STATUSES.OPENED)) {
        return { ...state, finish: true };
      }
      if (state.firstOpenedCard.value === state.secondOpenedCard.value) {
        return { ...state, firstOpenedCard: null, secondOpenedCard: null };
      }
      //else we should close them
      return {
        ...state,
        cards: state.cards.map((card) => ({
          ...card,
          status: STATUSES.CLOSED,
        })),
        firstOpenedCard: null,
        secondOpenedCard: null,
      };
    }
    case RESTART: {
      console.log('base cards when restart ===> ', BASE_CARDS);
      return { ...initialState, cards: shuffle(BASE_CARDS) };
    }
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
