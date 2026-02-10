import { useState, useEffect } from "react";
import Board from "./Board";
import ICONS from "../assets/icons";

const shuffleArray = (array) => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const generateCards = () => {
  // use the ICONS array (8 icons) to build pairs
  const icons = ICONS.slice(0, 8);
  const cards = icons.flatMap((icon) => [
    { id: `${icon.id}-1`, pairId: icon.id, icon: icon.svg, isFlipped: false, isMatched: false },
    { id: `${icon.id}-2`, pairId: icon.id, icon: icon.svg, isFlipped: false, isMatched: false },
  ]);
  return shuffleArray(cards);
};

function Game() {
  const [cards, setCards] = useState(generateCards());
  const [flippedIndices, setFlippedIndices] = useState([]); // indices of currently flipped cards
  const [disabled, setDisabled] = useState(false);
  const [chances, setChances] = useState(10);

  const matchedCount = cards.filter((c) => c.isMatched).length;

  const resetGame = () => {
    setCards(generateCards());
    setFlippedIndices([]);
    setDisabled(false);
    setChances(10);
  };

  const gameOver = chances <= 0 || matchedCount === cards.length;

  // reveal all cards and disable interactions when game ends
  useEffect(() => {
    if (gameOver) {
      setDisabled(true);
      setCards((prev) => prev.map((c) => ({ ...c, isFlipped: true })));
    }
  }, [gameOver]);

  const handleCardClick = (index) => {
    console.log('card click', index, 'disabled:', disabled);
    if (disabled) return;
    const clicked = cards[index];
    if (clicked.isFlipped || clicked.isMatched) return;

    // flip the clicked card
    const newCards = cards.map((c, i) => (i === index ? { ...c, isFlipped: true } : c));
    const newFlipped = [...flippedIndices, index];
    setCards(newCards);
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      const [firstIdx, secondIdx] = newFlipped;
      const first = newCards[firstIdx];
      const second = newCards[secondIdx];

      if (first.pairId === second.pairId) {
        // match
        const matched = newCards.map((c, i) =>
          i === firstIdx || i === secondIdx ? { ...c, isMatched: true } : c
        );
        setCards(matched);
        setFlippedIndices([]);
      } else {
        // not a match: block clicks, flip back after delay, decrement chances
        setDisabled(true);
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c, i) => (i === firstIdx || i === secondIdx ? { ...c, isFlipped: false } : c))
          );
          setFlippedIndices([]);
          setDisabled(false);
          setChances((prev) => prev - 1);
        }, 800);
      }
    }
  };

  return (
    <div className="game">
      <div className="panel">
        <Board cards={cards} onCardClick={handleCardClick} disabled={disabled} />

        <div className="controls">
          {gameOver ? (
            <>
              {chances <= 0 ? <p>Suas tentativas acabaram!</p> : <h2>Parabéns! Você venceu!</h2>}
              <button className="btn highlight" onClick={resetGame}>
                Reiniciar o jogo
              </button>
            </>
          ) : (
            <>
              <p>Você possui {chances} chances restantes</p>
              <button className="btn" onClick={resetGame}>
                Reiniciar o jogo
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Game;
