import React, { useState, useRef } from 'react';
import { Button, Form, Col } from 'react-bootstrap';

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

    const handleInputChange = (event) => {
        setInputData(event.target.value)
        console.log(event.target.value);
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
            <div style={styles.container}>
                <div className='Info'>


                </div>
                <div style={styles.inputContainer} >
                    <Button variant='secondary' className='m-1' onClick={() => handleAction("fold")}>Fold</Button>
                    <Button variant='secondary' className='m-1' onClick={() => handleAction("check")}>Check</Button>
                    <Button variant='secondary' className='m-1' onClick={() => handleAction("call")}>Call</Button>
                    <Button variant='secondary' className='m-1' onClick={() => handleAction("raise")}>Raise</Button>
                    <Col xs="auto">
                        <Form.Control style={styles.input} placeholder="Raise amount" />
                    </Col>
                </div>
                <div style={styles.output}>
                    <div>
                        <h2>Actions:</h2>
                        {pokerHand.actions.map((action) => (
                            <div style={{ border: 1 }} key={action.actionID}>
                                {`${action.position} ${action.actionType} ${action.actionSize}`}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

const styles = {
    container: {
        margin:10
    },
    inputContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },
    input: {
        flexGrow: 1,
    },
    output: {
        
    }
};

export default Replayer;
