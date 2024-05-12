import React, { useState } from 'react';
import { ref, push } from 'firebase/database';
import { database } from '../firebase';
import { Button } from 'react-bootstrap';

const SessionDataPusher = ({ user }) => {
    const [date, setDate] = useState('');
    const [sessionHours, setSessionHours] = useState('');
    const [profitLoss, setProfitLoss] = useState(0);
    const [BB, setBB] = useState();
    const [SB, setSB] = useState();
    const [errors, setErrors] = useState({});

    const handlePushData = () => {
        setErrors({});
        const newErrors = {};
        if (!date) newErrors.date = 'Date is required';
        if (!sessionHours) newErrors.sessionHours = 'Session hours are required';
        if (!BB) newErrors.sessionHours = 'BB is required';
        if (!SB) newErrors.sessionHours = 'SB is required';
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const sessionData = { date, sessionHours, profitLoss, BB, SB };
        const path = `users/${user.uid}/sessions`;
        push(ref(database, path), sessionData)
            .then(() => console.log("Data pushed successfully"))
            .catch((error) => console.error("Error pushing data:", error));
    };

    const handleChange = (inputName, value) => {
        setErrors(prevErrors => {
            const updatedErrors = { ...prevErrors };
            delete updatedErrors[inputName];
            return updatedErrors;
        });

        if (inputName === 'date') setDate(value);
        else if (inputName === 'sessionHours') setSessionHours(value);
        else if (inputName === 'profitLoss') setProfitLoss(value);
        else if (inputName === 'BB') setBB(value);
        else if (inputName === 'SB') setSB(value);
    };

    return (
        <>
            <div style={styles.inputContainer}>
                Day: <input style={styles.input} type='date' value={date} onChange={(e) => handleChange('date', e.target.value)} />
                Hours: <input style={styles.input} type='time' value={sessionHours} onChange={(e) => handleChange('sessionHours', e.target.value)} />
                P/L: <input style={{ width: '4em' }} type='number' value={profitLoss} onChange={(e) => handleChange('profitLoss', e.target.value)} />
                <Button variant={Object.keys(errors).length > 0 ? 'danger' : 'secondary'} className='m-1' onClick={handlePushData}>Save</Button>
            </div>
            <div>
                SB: <input style={{ width: '4em' }} type='number' value={SB} onChange={(e) => handleChange('SB', e.target.value)} />
                BB: <input style={{ width: '4em' }} type='number' value={BB} onChange={(e) => handleChange('BB', e.target.value)} />
            </div>
        </>
    )
};

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
};

export default SessionDataPusher;
