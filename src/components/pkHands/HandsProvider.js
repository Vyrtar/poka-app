// src/components/pkHands/PokerContext.js
import React, { createContext, useState, useContext } from 'react';

const initialPokerHand = {
  players: [
    { position: 'SB', stack: 0 },
    { position: 'BB', stack: 0 },
    { position: 'UTG', stack: 0 },
    { position: 'UTG+1', stack: 0 },
    { position: 'MP', stack: 0 },
    { position: 'MP+1', stack: 0 },
    { position: 'CO', stack: 0 },
    { position: 'BTN', stack: 0 }
  ],
  blinds: {
    smallBlind: 0,
    bigBlind: 0,
  },
  actions: []
};

const PokerContext = createContext();

export const PokerProvider = ({ children }) => {
  const [pokerHand, setPokerHand] = useState(initialPokerHand);

  const setPlayerStack = (position, stack) => {
    setPokerHand(prevState => ({
      ...prevState,
      players: prevState.players.map(player =>
        player.position === position ? { ...player, stack } : player
      )
    }));
  };

  const setBlinds = (smallBlind, bigBlind) => {
    setPokerHand(prevState => ({
      ...prevState,
      blinds: { smallBlind, bigBlind }
    }));
  };

  const addAction = (playerPosition, actionType, amount) => {
    setPokerHand(prevState => ({
      ...prevState,
      actions: [
        ...prevState.actions,
        { player: playerPosition, action: actionType, amount }
      ]
    }));
  };

  return (
    <PokerContext.Provider value={{ pokerHand, setPlayerStack, setBlinds, addAction }}>
      {children}
    </PokerContext.Provider>
  );
};

export const usePokerHand = () => {
  return useContext(PokerContext);
};
