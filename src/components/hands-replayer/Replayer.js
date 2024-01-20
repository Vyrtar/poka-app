import React, { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import Viewer from './Viewer';

const Replayer = () => {
    const [pokerHand, setPokerHand] = useState({
        actions: [],
    });

    const [currentPosition, setCurrentPosition] = useState('SB');
    const [currentPotSize, setCurrentPotSize] = useState(0);
    const [currentAction, setCurrentAction] = useState('posts');
    const [currentBet, setCurrentBet] = useState(1);
    const [inputData, setInputData] = useState(2);
    
    const handleAction = (type) => {
        console.log(type);
    }

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
        <>
            <div className='Info'>
                <Button variant='secondary' className='m-1' onClick={() => handleAction("fold")}>Fold</Button>
                <Button variant='secondary' className='m-1' onClick={() => handleAction("check")}>Check</Button>
                <Button variant='secondary' className='m-1' onClick={() => handleAction("call")}>Call</Button>
                <Button variant='secondary' className='m-1' onClick={() => handleAction("raise")}>Raise</Button>
                
               
            </div>
            <div className='Input'>
            
            </div>
            <div className='Output'>

            </div>
        </>
    );
};

export default Replayer;
