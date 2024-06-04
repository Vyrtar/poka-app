import React, { useEffect, useState } from 'react';

import { Button, Form, Col } from 'react-bootstrap';

const Controller = ({ pokerHand, setPokerHand }) => {
    const [raiseAmount, setRaiseAmount] = useState(0);
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(2);

    const post1 = {
        id: 0,
        player: 'SB',
        type: 'posts',
        amount: pokerHand.data.sb,
    }

    const post2 = {
        id: 1,
        player: 'BB',
        type: 'posts',
        amount: pokerHand.data.bb,
    }

    const initialHand = {
        ...pokerHand,
        actions: [...pokerHand.actions, post1, post2],
    }

    useEffect(() => {
        setPokerHand(initialHand);
    }, []);

    const getNextPlayer = () => {
        setCurrentPlayerIndex((currentPlayerIndex + 1) % pokerHand.players.length);
    }
 
    const handleAction = (type) => {
        getNextPlayer()
        const newAction = {
            id: pokerHand.actions.length + 1,
            player: pokerHand.players[currentPlayerIndex],
            type: type,
            amount: raiseAmount
        };

        const updatedPokerHand = {
            ...pokerHand,
            actions: [...pokerHand.actions, newAction],
            last: newAction
        };
        setPokerHand(updatedPokerHand)
        
    }

    return (
        <div style={styles.container}>
            <div className='Info'>
            </div>
            <div style={styles.inputContainer} >
                <Button variant='secondary' className='m-1' onClick={() => handleAction("folds")}>Fold</Button>
                <Button variant='secondary' className='m-1' onClick={() => handleAction("checks")}>Check</Button>
                <Button variant='secondary' className='m-1' onClick={() => handleAction("calls")}>Call</Button>
                <Button variant='secondary' className='m-1' onClick={() => handleAction("raises")}>Raise</Button>
                <Col xs="auto">
                    <Form.Control style={styles.input} onChange={(e) => setRaiseAmount(e.target.value)} />
                </Col>
            </div>
        </div>
    )
}

const styles = {
    container: {
        margin: 10
    },
    inputContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },
    input: {
        width: '8em',
    },
    output: {

    }
};

export default Controller;





