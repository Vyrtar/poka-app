import React, { useState } from 'react';

import { Button, Form, Col } from 'react-bootstrap';

const Controller = ({ pokerHand }) => {
    const [value, setValue] = useState(0);

    const handleAction = (type) => {
        // pokerHand.addAction(pokerHand.actions.length + 1, pokerHand.getNextPlayerToAct(), type, value)
        console.log(pokerHand)
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
                    <Form.Control style={styles.input} onChange={(e) => setValue(e.target.value)} />
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





