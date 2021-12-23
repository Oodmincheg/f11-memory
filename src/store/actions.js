export const OPEN_CARD = 'OPEN_CARD';
export const COMPARE_CARDS = 'COMPARE_CARDS';
export const RESTART = 'RESTART';

export const openCard = (id) => {
  return { type: OPEN_CARD, payload: id };
};

export const compareCards = () => {
  return { type: COMPARE_CARDS };
};

export const restart = () => {
  return { type: RESTART };
};
