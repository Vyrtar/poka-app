import React, { useState } from 'react';

const PokerReplayer = () => {
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState('');
  const [currentAction, setCurrentAction] = useState('');
  const [pokerHand, setPokerHand] = useState([]);

  const handlePlayerChange = (e) => {
    setCurrentPlayer(e.target.value);
  };

  const handleActionChange = (e) => {
    setCurrentAction(e.target.value);
  };

  const addAction = () => {
    if (currentPlayer && currentAction) {
      const action = {
        player: currentPlayer,
        action: currentAction,
      };
      setPokerHand([...pokerHand, action]);
      setCurrentPlayer('');
      setCurrentAction('');
    }
  };

  const handleSubmit = () => {
    // Here, you can send the pokerHand object to the backend for storage
    console.log('PokerHand:', pokerHand);
    setPokerHand([]);
  };

  return (
    <div>
      <h2>Poker Replayer</h2>
      <div>
        <label>Player:</label>
        <input
          type="text"
          value={currentPlayer}
          onChange={handlePlayerChange}
        />
      </div>
      <div>
        <label>Action:</label>
        <select value={currentAction} onChange={handleActionChange}>
          <option value="">Select action</option>
          <option value="check">Check</option>
          <option value="call">Call</option>
          <option value="fold">Fold</option>
          <option value="raise">Raise</option>
        </select>
      </div>
      <button onClick={addAction}>Add Action</button>
      <hr />
      <h3>Poker Hand:</h3>
      <ul>
        {pokerHand.map((action, index) => (
          <li key={index}>
            {action.player}: {action.action}
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Submit Hand</button>
    </div>
  );
};

export default PokerReplayer;