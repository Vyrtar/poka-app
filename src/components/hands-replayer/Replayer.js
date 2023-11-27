import React, { useState } from 'react';
import InputUI from './Input-ui';
import Viewer from './Viewer';

const Replayer = () => {
    const [pokerHand, setPokerHand] = useState({
        positions: {
            1: { Name: 'SB', stackSize: 100 },
            // ... (remaining positions)
        },
        actions: [],
    });

    const [currentPosition, setCurrentPosition] = useState('SB');
    const [currentPotSize, setCurrentPotSize] = useState(0);
    const [currentAction, setCurrentAction] = useState('posts');
    const [currentBet, setCurrentBet] = useState(1)
    const [inputData, setInputData] = useState(2);
    const handleFold = () => {
        addAction('folds', currentBet);
        console.log(pokerHand)
    };

    const handleCheck = () => {
        addAction('checks', currentBet);
    };

    const handleCall = () => {
        addAction('calls', currentBet);
    };


    const handleRaise = () => {
        addAction('raises', inputData);
        setCurrentBet(inputData);
        setCurrentAction('raises');
    };

    const handleInputChange = (value) => {
        setInputData(value);
        console.log('Input data in parent:', value);
    };

    const addAction = (type, bet, pot) => {
        const newAction = {
            actionID: pokerHand.actions.length + 1,
            position: currentPosition,
            actionType: type,
            actionSize: bet,
        };

        setPokerHand((prevPokerHand) => ({
            ...prevPokerHand,
            actions: [...prevPokerHand.actions, newAction],
        }));
    };

    return (
        <div>
            <InputUI
                currentPosition={currentPosition}
                currentPot={currentPotSize}
                currentBet={currentBet}
                handleFold={handleFold}
                handleCheck={handleCheck}
                handleCall={handleCall}
                handleRaise={handleRaise}
                onInputChange={handleInputChange}
            />
            <Viewer pokerHand={pokerHand} currentPotSize={currentPotSize} />
        </div>
    );
};

export default Replayer;
