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

    const [currentPosition, setCurrentPosition] = useState(1);
    const [currentPotSize, setCurrentPotSize] = useState(0);
    const [currentAction, setCurrentAction] = useState('posts');
    const [currentBet, setCurrentBet] = useState(0)
    const handleFold = () => {
        setCurrentAction('folds')
        addAction();
        console.log(pokerHand)
    };

    const handleCheck = () => {
        addAction('checks');
    };

    const handleCall = () => {
        addAction('calls');
    };

    const handleRaise = () => {
        addAction('raises', 2);
        setCurrentPotSize(currentPotSize*2);
    };

    const addAction = () => {
        const newAction = {
            actionID: pokerHand.actions.length + 1,
            position: pokerHand.positions[currentPosition].Name,
            actionType: currentAction,
            actionSize: currentBet,
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
                setCurrentPosition={setCurrentPosition}
                handleFold={handleFold}
                handleCheck={handleCheck}
                handleCall={handleCall}
                handleRaise={handleRaise}
            />
            <Viewer pokerHand={pokerHand} currentPotSize={currentPotSize} />
        </div>
    );
};

export default Replayer;
