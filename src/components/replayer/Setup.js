import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Setup = ({ setPokerHand, setSetup }) => {
    const [sB, setSb] = useState(1);
    const [bB, setBb] = useState(3);
    const [utgStack, setUtgStack] = useState(200);
    const [utg1Stack, setUtg1Stack] = useState(200);
    const [mpStack, setMpStack] = useState(200);
    const [ljStack, setLjStack] = useState(200);
    const [hjStack, setHjStack] = useState(200);
    const [coStack, setCoStack] = useState(200);
    const [btnStack, setBtnStack] = useState(200);
    const [sbStack, setSbStack] = useState(200);
    const [bbStack, setBbStack] = useState(200);

    const handleChange = (setter) => (event) => {
        setter(Number(event.target.value));
    };

    const [checkboxState, setCheckboxState] = useState({
        SBCheck: true,
        BBCheck: true,
        UTGCheck: true,
        UTG1Check: true,
        MPCheck: true,
        LJCheck: true,
        HJCheck: true,
        COCheck: true,
        BTNCheck: true,
    });

    const handleCheckboxChange = (name) => (event) => {
        setCheckboxState({
            ...checkboxState,
            [name]: event.target.checked
        });
    };

    const finishSetup = () => {
        const stackValues = {
            SB: sbStack,
            BB: bbStack,
            UTG: utgStack,
            UTG1: utg1Stack,
            MP: mpStack,
            LJ: ljStack,
            HJ: hjStack,
            CO: coStack,
            BTN: btnStack,
        };

        const playerResult = [];
        for (const [key, value] of Object.entries(checkboxState)) {
            if (value) {
                const playerPosition = key.replace('Check', '');
                playerResult.push(playerPosition);
            }
        }
        
        const hand = {
            data: {
                sb: sB,
                bb: bB,
            },
            stacks: stackValues,
            players: playerResult,
            preflop: [],
            actions: {
                preflop: [],
                flop: [],
                turn: [],
                river: [],
                showdown: [],
            },
            last: {},
            current: {},
        };

        setPokerHand(hand);
        console.log(hand)
        setSetup(true);
    };

    return (
        <>
            <div>Please set up some Game Info</div>

            <Form style={styles.formGroupStyle}>
                <Form.Group style={styles.formRowStyle}>
                    <Form.Label>SB:</Form.Label>
                    <Form.Control type="number" value={sB} onChange={handleChange(setSb)} />
                    <Form.Label>BB:</Form.Label>
                    <Form.Control type="number" value={bB} onChange={handleChange(setBb)} />
                </Form.Group>
            </Form>


            <Form style={styles.formGroupStyle}>
                <br />
                <h5>Stack Sizes:</h5>
                
                <Form.Group style={styles.formRowStyle}>
                    <Form.Label>BB:</Form.Label>
                    <Form.Control
                        type="number"
                        value={bbStack}
                        onChange={handleChange(setBbStack)}
                    />
                </Form.Group>

                <Form.Group style={styles.formRowStyle}>
                    <Form.Label>SB:</Form.Label>
                    <Form.Control
                        type="number"
                        value={sbStack}
                        onChange={handleChange(setSbStack)}
                    />
                </Form.Group>

                <Form.Group style={styles.formRowStyle}>
                    <Form.Check
                        type="checkbox"
                        checked={checkboxState.UTGCheck}
                        onChange={handleCheckboxChange('UTGCheck')}
                    />
                    <Form.Label>UTG:</Form.Label>
                    <Form.Control
                        type="number"
                        value={utgStack}
                        onChange={handleChange(setUtgStack)}
                        disabled={!checkboxState.UTGCheck}
                        style={!checkboxState.UTGCheck ? styles.disabledInputStyle : {}}
                    />
                </Form.Group>

                <Form.Group style={styles.formRowStyle}>
                    <Form.Check
                        type="checkbox"
                        checked={checkboxState.UTG1Check}
                        onChange={handleCheckboxChange('UTG1Check')}
                    />
                    <Form.Label>UTG1:</Form.Label>
                    <Form.Control
                        type="number"
                        value={utg1Stack}
                        onChange={handleChange(setUtg1Stack)}
                        disabled={!checkboxState.UTG1Check}
                        style={!checkboxState.UTG1Check ? styles.disabledInputStyle : {}}
                    />
                </Form.Group>

                <Form.Group style={styles.formRowStyle}>
                    <Form.Check
                        type="checkbox"
                        checked={checkboxState.MPCheck}
                        onChange={handleCheckboxChange('MPCheck')}
                    />
                    <Form.Label>MP:</Form.Label>
                    <Form.Control
                        type="number"
                        value={mpStack}
                        onChange={handleChange(setMpStack)}
                        disabled={!checkboxState.MPCheck}
                        style={!checkboxState.MPCheck ? styles.disabledInputStyle : {}}
                    />
                </Form.Group>

                <Form.Group style={styles.formRowStyle}>
                    <Form.Check
                        type="checkbox"
                        checked={checkboxState.LJCheck}
                        onChange={handleCheckboxChange('LJCheck')}
                    />
                    <Form.Label>LJ:</Form.Label>
                    <Form.Control
                        type="number"
                        value={ljStack}
                        onChange={handleChange(setLjStack)}
                        disabled={!checkboxState.LJCheck}
                        style={!checkboxState.LJCheck ? styles.disabledInputStyle : {}}
                    />
                </Form.Group>

                <Form.Group style={styles.formRowStyle}>
                    <Form.Check
                        type="checkbox"
                        checked={checkboxState.HJCheck}
                        onChange={handleCheckboxChange('HJCheck')}
                    />
                    <Form.Label>HJ:</Form.Label>
                    <Form.Control
                        type="number"
                        value={hjStack}
                        onChange={handleChange(setHjStack)}
                        disabled={!checkboxState.HJCheck}
                        style={!checkboxState.HJCheck ? styles.disabledInputStyle : {}}
                    />
                </Form.Group>

                <Form.Group style={styles.formRowStyle}>
                    <Form.Check
                        type="checkbox"
                        checked={checkboxState.COCheck}
                        onChange={handleCheckboxChange('COCheck')}
                    />
                    <Form.Label>CO:</Form.Label>
                    <Form.Control
                        type="number"
                        value={coStack}
                        onChange={handleChange(setCoStack)}
                        disabled={!checkboxState.COCheck}
                        style={!checkboxState.COCheck ? styles.disabledInputStyle : {}}
                    />
                </Form.Group>

                <Form.Group style={styles.formRowStyle}>
                    <Form.Check
                        type="checkbox"
                        checked={checkboxState.BTNCheck}
                        onChange={handleCheckboxChange('BTNCheck')}
                    />
                    <Form.Label>BTN:</Form.Label>
                    <Form.Control
                        type="number"
                        value={btnStack}
                        onChange={handleChange(setBtnStack)}
                        disabled={!checkboxState.BTNCheck}
                        style={!checkboxState.BTNCheck ? styles.disabledInputStyle : {}}
                    />
                </Form.Group>
            </Form>
            <Button variant="primary" onClick={finishSetup}>Setup</Button>
        </>
    );
};

const styles = {
    formGroupStyle: {
        width: '20em'
    },
    formRowStyle: {
        marginTop: '1em',
        display: 'flex',
        flexDirection: 'row',
    },
    disabledInputStyle: {
        backgroundColor: '#e9ecef',  
        color: '#6c757d',  
        borderColor: '#ced4da'  
    },
};

export default Setup;
