import Card from './Card';
import { useSelector } from 'react-redux';

const Board = () => {
  const cards = useSelector((state) => state.cards);

  return (
    <div className="board">
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Board;
