// src/components/pkHands/pkHandsEntry.js
import React from 'react';
import { PokerProvider } from './HandsProvider';
import PokerHandController from './PokerHandController';
import PokerHandViewer from './PokerHandViewer';

const PkHandsEntry = () => {
  return (
    <PokerProvider>
      <div>
        <PokerHandController />
        <PokerHandViewer />
      </div>
    </PokerProvider>
  );
};

export default PkHandsEntry;
