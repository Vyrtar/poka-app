import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ref, push, set } from 'firebase/database';
import { database } from '../firebase';

const Sendit = ({ pokerHand, user }) => {
    const [errors, setErrors] = useState({});
    const [sent, setSent] = useState(false);
    const [shareableLink, setShareableLink] = useState('');

    const handlePushData = () => {
        setErrors({});
        const newErrors = {};
        if (!pokerHand) newErrors.hand = 'pokerHand not found';
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const handData = { pokerHand };
        const path = `users/${user.uid}/hands`;
        const newPokerHandRef = push(ref(database, path));
        const pokerHandId = newPokerHandRef.key;
        set(newPokerHandRef, pokerHand)
            .then(() => {
                console.log("Data pushed successfully");
                const link = `${window.location.origin}/view/${user.uid}/${pokerHandId}`;
                setShareableLink(link);
                setSent(true);
            })
            .catch((error) => console.error("Error pushing data:", error));
    };

    const clickHandler = () => {
        console.log('Sending it')
        handlePushData();
        setSent(true);
    }

    return (
        <>
            {
                !sent ?
                <Button variant='outline-secondary' title='send it' onClick={clickHandler}>save Hand</Button>
                : <p>Hand stored under this link: <a href={shareableLink}>{shareableLink}</a></p>
            }    
            {errors.hand && <p>{errors.hand}</p>}
        </>
    )
}
export default Sendit