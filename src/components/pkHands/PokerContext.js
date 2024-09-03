import React, { createContext, useState, useContext } from 'react';

const PokerContext = createContext();

export const PokerProvider = ({ children }) => {
  const [pokerHand, setPokerHand] = useState();

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
    <PokerContext.Provider value={{ pokerHand, setPokerHand, addAction,}}>
      {children}
    </PokerContext.Provider>
  );
};

export const usePokerHand = () => {
  return useContext(PokerContext);
};
