import Card from "./Card";

const Board = ({ cards, onCardClick }) => {
  if (!cards) {
    return;
  }

  console.log(cards);

  return (
    <div className="board">
      {cards.map((card) => (
        <Card
          key={[card?.index, card?.value].join("-")}
          card={card}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
};

export default Board;
