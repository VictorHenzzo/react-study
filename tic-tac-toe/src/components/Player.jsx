import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };

  const handleNameChange = (event) => {
    setPlayerName(event.target.value);
    if (isEditing) {
      onChangeName(symbol, event.target.value);
    }
  };

  const getUserField = ({ isEditing, playerName }) => {
    if (isEditing) {
      return (
        <input
          type="text"
          required
          value={playerName}
          onChange={handleNameChange}
        />
      );
    }

    return <span className="player-name">{playerName}</span>;
  };

  const buttonLabel = isEditing ? "Save" : "Edit";

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {getUserField({ isEditing, playerName })}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonLabel}</button>
    </li>
  );
}
