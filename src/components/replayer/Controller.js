import { update } from 'firebase/database';
import React, { useEffect, useState } from 'react';

import { Button, Form, Col } from 'react-bootstrap';

const Controller = ({ pokerHand, setPokerHand }) => {
    const [raiseAmount, setRaiseAmount] = useState(0);
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(2);
    const [currentStreet, setCurrentStreet] = useState('preflop');

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
        actions: {preflop: [...pokerHand.actions.preflop, post1, post2]}
    }

    useEffect(() => {
        setPokerHand(initialHand);
    }, []);


    const iterateNext = (type) => {
        let updatedPlayers = pokerHand.players.slice();
        let newIndex = currentPlayerIndex;

        if (type === 'folds') {
            updatedPlayers.splice(currentPlayerIndex, 1);

            // Adjust the index if necessary
            if (newIndex >= updatedPlayers.length) {
                newIndex = 0;
            }
        } else {
            // Move to the next player if no fold action
            newIndex = (currentPlayerIndex + 1) % updatedPlayers.length;
        }

        setPokerHand(prevHand => ({
            ...prevHand,
            players: updatedPlayers
        }));

        setCurrentPlayerIndex(newIndex);
    };

    const handleAction = (type) => {
        const newAction = {
            id: pokerHand.actions.preflop.length + 1,
            player: pokerHand.players[currentPlayerIndex],
            type: type,
            amount: raiseAmount
        };

        let updatedActions = {
            ...pokerHand.actions,
        };
        switch(currentStreet) {
            case 'preflop':
                updatedActions = {
                    ...pokerHand.actions,
                    preflop: [...pokerHand.actions.preflop, newAction]
                }
            break;
            case 'flop':
                updatedActions = {
                    ...pokerHand.actions,
                    flop: [...pokerHand.actions.flop, newAction]
                }
            break;
            case 'turn':
                updatedActions = {
                    ...pokerHand.actions,
                    turn: [...pokerHand.actions.turn, newAction]
                }
            break;
            case 'river':
                updatedActions = {
                    ...pokerHand.actions,
                    river: [...pokerHand.actions.river, newAction]
                }
            break;
            default:
              // code block
          }
        
       
        const updatedPokerHand = {
            ...pokerHand,
            actions: updatedActions,
            last: pokerHand.current,
            current: newAction,
        };
        setPokerHand(updatedPokerHand)
        iterateNext(type);
        console.log(pokerHand.players)
        console.log(currentPlayerIndex)
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





