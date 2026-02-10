function Card({ card, onClick, disabled }) {
  const handleClick = () => {
    if (disabled) return;
    if (onClick) onClick();
  };

  return (
    <div
      className={`card ${card.isFlipped ? "flipped" : ""} ${card.isMatched ? "matched" : ""}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-disabled={disabled}
    >
      <div className="card-face card-front" aria-hidden={!card.isFlipped && !card.isMatched}>
        {card.icon}
      </div>
      <div className="card-face card-back" aria-hidden={card.isFlipped || card.isMatched}>
        <span className="back-mark">?</span>
      </div>
    </div>
  );
}

export default Card;