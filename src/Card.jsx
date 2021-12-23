import { useDispatch, useSelector } from 'react-redux';
import { compareCards, openCard } from './store/actions';
import { STATUSES } from './store/consts';

const Card = ({ value, status, id }) => {
  const shouldCompareRun = useSelector((state) =>
    Boolean(state.firstOpenedCard),
  );

  const openCardAndRunCompare = () => {
    dispatch(openCard(id));
    if (shouldCompareRun) {
      //TODO: we should stop clicking on cards in that 2sec
      setTimeout(() => dispatch(compareCards()), 2000);
    }
  };
  const dispatch = useDispatch();
  return status === STATUSES.OPENED ? (
    <div className="card">{value}</div>
  ) : (
    <div className="card" onClick={openCardAndRunCompare}></div>
  );
};

export default Card;
