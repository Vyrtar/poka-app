import React, { useState } from 'react';

import { Button, Form, Col } from 'react-bootstrap';

const Controller = ({ pokerHand }) => {
    const [value, setValue] = useState(0);
    pokerHand.addAction(1, "BTN", 'raise', 15);
    const handleChangeRaiseAmount = (event) => {
        setValue(event.target.value);
    };

    const handleAction = (type) => {
        switch (type) {
            case 'folds':
                pokerHand.addAction(1, "BTN", 'folds', value)
                for (var action in pokerHand.actions)
                {
                    console.log(action.toString());
                }
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
                    <Form.Control style={styles.input} onChange={(e) => handleChangeRaiseAmount(e)} />
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





