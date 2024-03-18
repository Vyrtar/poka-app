import React, { useState, useEffect} from 'react';
import { Button, Form, Col } from 'react-bootstrap';

const Replayer = () => {
    const [pokerHand, setPokerHand] = useState({
        actions: [],
    });

    const [positions, setPositions] = useState(['SB', 'BB', 'UTG', 'UTG+1', 'MP','HJ','LJ', 'CO', 'BTN']);
    const [currentStreet, setCurrentStreet] = useState();
    const [currentPosIndex, setCurrentPosIndex] = useState(0);
    const [currentPosition, setCurrentPosition] = useState('SB');
    const [currentPotSize, setCurrentPotSize] = useState(0);
    const [currentAction, setCurrentAction] = useState('posts');
    const [currentBet, setCurrentBet] = useState(0);
    const [raiseAmount, setRaiseAmount] = useState(2);
    const [isSetupDone, setIsSetupDone] = useState();
    const [SB, setSB] = useState();
    const [BB, setBB] = useState();
    
    

    const handleAction = (type) => {
        
        setCurrentAction(type)

        switch (type) {
            case 'folds':
                
                break;
            case 'checks':
                
                break;
            case 'calls':
                
                break;
            case 'raises':
                
            break;
            default:
                console.log('idk man');
                break;
        }

        addActionToData(type);
        setCurrentPosition(setNextPosition);
    }

    const handleRaiseInput = (event) => {
        setRaiseAmount(event.target.value)
        setCurrentBet(raiseAmount);
        console.log(event.target.value);
    };

    const handleSmallBlind = (event) => {
        setSB(event.target.value)
        console.log(event.target.value);
    };

    const handleBigBlind = (event) => {
        setBB(event.target.value)
        console.log(event.target.value);
    };

    const addActionToData = (type) => {
        const newAction = {
            actionID: pokerHand.actions.length + 1,
            position: currentPosition,
            actionType: type,
            actionSize: currentBet,
        };

        setPokerHand((prevPokerHand) => ({
            ...prevPokerHand,
            actions: [...prevPokerHand.actions, newAction],
        }));

        
        console.log(pokerHand)
    };

    const setNextPosition = () => {
        const nextElement = positions[currentPosIndex];
        setCurrentPosIndex((currentPosIndex + 1) % positions.length);
        return nextElement;
    };

    useEffect(() => {
        console.log('Good morning, replayer');
        setCurrentBet(SB)
        handleAction('posts')
        setCurrentBet(BB)
        handleAction('posts')
    }, []);

    const setup = () => {
        return (
            <div style={styles.container}>
            <div className='Info'>
            </div>
            <div>Please setup some Game Info.</div>
            <div style={styles.inputContainer} >
                    <div>Blinds: </div>
                    <Form.Control style={styles.input} placeholder='Small Blind' onChange={handleSmallBlind} />
                    <Form.Control style={styles.input} placeholder='Big Blind' onChange={handleBigBlind} />
                
            </div>
            <Button variant='secondary' className='m-1' onClick={() => setIsSetupDone(true)}>Done</Button>

        </div>
        );
    }

    const HandReplayer = () => {
        return(
            <div style={styles.container}>
                <div className='Info'>
                </div>
                <div>Current Player: {currentPosition}, Current Bet: {currentBet}, Current Pot: {currentPotSize}</div>
                <div style={styles.inputContainer} >
                    <Button variant='secondary' className='m-1' onClick={() => handleAction("folds")}>Fold</Button>
                    <Button variant='secondary' className='m-1' onClick={() => handleAction("checks")}>Check</Button>
                    <Button variant='secondary' className='m-1' onClick={() => handleAction("calls")}>Call</Button>
                    <Button variant='secondary' className='m-1' onClick={() => handleAction("raises")}>Raise</Button>
                    <Col xs="auto">
                        <Form.Control style={styles.input} value="Raise amount" onChange={handleRaiseInput} />
                    </Col>
                </div>
                <div style={styles.output}>
                    <div>
                        <p>Actions:</p>
                       
                        {pokerHand.actions.map((action) => (
                            <div style={{ border: 1 }} key={action.actionID}>
                                {`${action.position} ${action.actionType} ${action.actionSize}`}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            {
            isSetupDone ? 
            HandReplayer()
            : setup()
            }
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
        width: '8em',
        //flexGrow: 1,
    },
    output: {
        
    }
};

export default Replayer;
