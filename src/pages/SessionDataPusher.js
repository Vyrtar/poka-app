import React, { useState } from 'react';
import { ref, push } from 'firebase/database';
import { database } from '../firebase';
import { Button, Form } from 'react-bootstrap';



const SessionDataPusher = ({ user }) => {
    const [date, setDate] = useState('');
    const [sessionHours, setSessionHours] = useState('');
    const [profitLoss, setProfitLoss] = useState(0);
    const [errors, setErrors] = useState({});


    const handlePushData = () => {


        // Reset errors
        setErrors({});

        // Validate inputs
        const newErrors = {};
        if (!date) newErrors.date = 'Date is required';
        if (!sessionHours) newErrors.sessionHours = 'Start time is required';


        if (Object.keys(newErrors).length > 0) {

            setErrors(newErrors);
            return;
        }

        // Proceed with data push if no errors
        const sessionData = { date, sessionHours, profitLoss };
        const path = `users/${user.uid}/sessions`;
        push(ref(database, path), sessionData)
            .then(() => console.log("Data pushed successfully"))
            .catch((error) => console.error("Error pushing data:", error));
    };

    const handleChange = (inputName, value) => {
        setErrors(prevErrors => {
            const updatedErrors = { ...prevErrors };
            delete updatedErrors[inputName]; // Remove error for this input if it exists
            return updatedErrors;
        });

        // Update state based on which input was changed
        if (inputName === 'date') setDate(value);
        else if (inputName === 'sessionHours') setSessionHours(value);
        else if (inputName === 'profitLoss') setProfitLoss(value);
    };




    return (
        <>
            <div style={styles.inputContainer}>
                Day: <input style={styles.input} type='date' value={date} onChange={(e) => handleChange('date', e.target.value)} />
                Hours: <input type='time' value={sessionHours} onChange={(e) => handleChange('sessionHours', e.target.value)} />
                P/L: <input style={{width:'4em'}} type='int' value={profitLoss} onChange={(e) => handleChange('profitLoss', e.target.value)} />
                <Button variant={Object.keys(errors).length > 0 ? 'danger' : 'secondary'} className='m-1' onClick={handlePushData}>save Session</Button>

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
        //flexGrow: 1,
    },
    output: {

    }
};

export default SessionDataPusher;
