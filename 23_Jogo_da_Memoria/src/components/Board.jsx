import Card from "./Card";

function Board({ cards, onCardClick, disabled }) {
  return (
    <div className="board">
      {cards.map((card, index) => (
        <Card
          key={card.id}
          card={card}
          onClick={() => { if (!disabled && onCardClick) onCardClick(index); }}
          disabled={disabled}
        />
      ))}
    </div>
  );
}

export default Board;