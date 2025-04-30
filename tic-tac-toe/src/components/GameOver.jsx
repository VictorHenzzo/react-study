export default function GameOver({ result, onReset, players }) {
  const hasDraw = result === "Tie";

  return (
    <div id="game-over">
      <h2>Game Over</h2>
      <p>{hasDraw ? "It's a tie!" : `${players[result]} won!`}</p>
      <p>
        <button onClick={onReset}>Reset Match</button>
      </p>
    </div>
  );
}
