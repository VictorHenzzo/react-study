import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";
import { WINNING_COMBINATIONS } from "./winning_combinations.js";

function getActivePlayer(gameTurns) {
  if (gameTurns.length === 0) {
    return "X";
  }

  return gameTurns[0].player === "X" ? "O" : "X";
}

function getInitialGameBoard() {
  return [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
}

function getResult(gameBoard, gameTurns) {
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].column];
    const secondSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSquare = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquare &&
      firstSquare === secondSquare &&
      secondSquare === thirdSquare
    ) {
      return firstSquare;
    }
  }

  if (gameTurns.length === 9) {
    return "Tie";
  }

  return null;
}

function App() {
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const [gameTurns, setGameTurns] = useState([]);

  const handlePlayerClick = (rowIndex, colIndex) => {
    setGameTurns((prevGameTurns) => {
      const currentPlayer = getActivePlayer(prevGameTurns);
      return [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevGameTurns,
      ];
    });
  };

  function handleReset() {
    setGameTurns((prevGameTurns) => {
      return [];
    });
  }

  const activePlayer = getActivePlayer(gameTurns);
  const gameBoard = getInitialGameBoard();

  for (const turn of gameTurns) {
    const { square, player } = turn;
    gameBoard[square.row][square.col] = player;
  }

  const handlePlayerNameChange = (symbol, name) => {
    setPlayers((prevPlayers) => {
      return { ...prevPlayers, [symbol]: name };
    });
  };

  const result = getResult(gameBoard, gameTurns);

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={players["X"]}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            name={players["O"]}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        <GameBoard onPlayerClick={handlePlayerClick} gameBoard={gameBoard} />
        {result && (
          <GameOver result={result} onReset={handleReset} players={players} />
        )}
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
