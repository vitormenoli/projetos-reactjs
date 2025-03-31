import { useEffect, useState } from "react";
import Square from "./Square";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);
  const winner = calculateWinner(squares);

  const [aiIsThinking, setAiIsThinking] = useState(false);

  const handleClick = (i) => {
    if (squares[i] || winner || aiIsThinking) return;

    const newSquares = squares.slice();
    newSquares[i] = isNext ? "X" : "O";

    setSquares(newSquares);
    setIsNext(!isNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsNext(true);
  };

  useEffect(() => {
    if (!isNext && !winner) {
      setAiIsThinking(true);

      setTimeout(() => {
        aiMove(squares, setSquares, setIsNext);
        setAiIsThinking(false);
      }, 1000);
    }
  }, [isNext, squares, winner]);

  return (
    <div>
      <div
        className={`status ${
          winner === "X"
            ? "status-x"
            : winner === "O"
            ? "status-o"
            : winner === "Empate"
            ? "status-empate"
            : ""
        }`}
      >
        {winner === "Empate" ? (
          <p className="empate">🤦‍♂️ Empate!</p>
        ) : winner ? (
          <p className={`winner ${winner === "X" ? "winner-x" : "winner-o"}`}>
            🎊 O vencedor é {winner}!
          </p>
        ) : (
          <p>⏰ {`Próximo a jogar: ${isNext ? "X" : "O"}`}</p>
        )}
      </div>

      <div className="board-row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>

      {winner ? (
        <button className="reset-button" onClick={resetGame}>
          Reiniciar Jogo
        </button>
      ) : (
        <button className="reset-button disabled" onClick={resetGame} disabled>
          Reiniciar Jogo
        </button>
      )}
    </div>
  );
}

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  if (!squares.includes(null)) {
    return "Empate";
  }

  return null;
};

const aiMove = (squares, setSquares, setXIsNext) => {
  const emptySquares = squares
    .map((value, index) => (value === null ? index : null))
    .filter((index) => index !== null);

  const randomIndex =
    emptySquares[Math.floor(Math.random() * emptySquares.length)];

  if (randomIndex !== undefined) {
    const newSquares = squares.slice();
    newSquares[randomIndex] = "O";
    setSquares(newSquares);
    setXIsNext(true);
  }
};

export default Board;
