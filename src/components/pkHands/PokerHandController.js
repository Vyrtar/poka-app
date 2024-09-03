// src/components/pkHands/PokerHandController.js
import React, { useState } from 'react';
import { usePokerHand } from './PokerContext';

const PokerHandController = () => {
  const { setPlayerStack, setBlinds, addAction } = usePokerHand();
  const [position, setPosition] = useState('');
  const [stack, setStack] = useState('');
  const [smallBlind, setSmallBlind] = useState('');
  const [bigBlind, setBigBlind] = useState('');
  const [actionType, setActionType] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddStack = () => {
    setPlayerStack(position, parseFloat(stack));
    setPosition('');
    setStack('');
  };

  const handleSetBlinds = () => {
    setBlinds(parseFloat(smallBlind), parseFloat(bigBlind));
    setSmallBlind('');
    setBigBlind('');
  };

  const handleAddAction = () => {
    addAction(position, actionType, parseFloat(amount));
    setPosition('');
    setActionType('');
    setAmount('');
  };

  return (
    <div>
      <h2>Poker Hand Controller</h2>
      <div>
        <input 
          placeholder="Position (e.g., SB)" 
          value={position} 
          onChange={e => setPosition(e.target.value)} 
        />
        <input 
          placeholder="Stack Amount" 
          value={stack} 
          onChange={e => setStack(e.target.value)} 
        />
        <button onClick={handleAddStack}>Set Stack</button>
      </div>

      <div>
        <input 
          placeholder="Small Blind" 
          value={smallBlind} 
          onChange={e => setSmallBlind(e.target.value)} 
        />
        <input 
          placeholder="Big Blind" 
          value={bigBlind} 
          onChange={e => setBigBlind(e.target.value)} 
        />
        <button onClick={handleSetBlinds}>Set Blinds</button>
      </div>

      <div>
        <input 
          placeholder="Action Type (e.g., Raise)" 
          value={actionType} 
          onChange={e => setActionType(e.target.value)} 
        />
        <input 
          placeholder="Amount" 
          value={amount} 
          onChange={e => setAmount(e.target.value)} 
        />
        <button onClick={handleAddAction}>Add Action</button>
      </div>
    </div>
  );
};

export default PokerHandController;
