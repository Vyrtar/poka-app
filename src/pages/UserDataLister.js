import React, { useState, useEffect } from 'react';
import { ref, onValue, remove } from 'firebase/database';
import { database } from '../firebase';
import { Card, CloseButton } from 'react-bootstrap';

const UserDataLister = ({ user }) => {
    const [userDataList, setUserDataList] = useState([]);


    useEffect(() => {
        const path = `users/${user.uid}/sessions`;
        const userRef = ref(database, path);

        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const dataList = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key]
                }));
                setUserDataList(dataList.reverse());
            }

        });
    }, [user.uid]);

    const deleteSession = (sessionId) => {
        const path = `users/${user.uid}/sessions/${sessionId}`;
        const sessionRef = ref(database, path);

        remove(sessionRef)
            .then(() => {
                console.log("Session deleted successfully");
            })
            .catch((error) => {
                console.error("Error deleting session:", error);
            });
    };

    return (
        <>
            {
                userDataList.map((item) => (
                    <Card style={styles.sessionItem} key={item.id}>
                        <Card.Header style={styles.cardHeader}>
                            <div style={styles.date}>{item.date}</div>
                            <CloseButton style={styles.closeButton} onClick={() => deleteSession(item.id)} />
                        </Card.Header>
                        <Card.Body>
                            <div>Hours: {item.sessionHours} P/L: {item.profitLoss}</div>
                            <div>Game: {item.SB} / {item.BB}</div>
                        </Card.Body>
                    </Card>
                ))
            }
        </>
    );
};

const styles = {
    sessionItem: {
        margin: 12,
        width: '20em',
        backgroundColor: '#b9c1c9',
    },
    cardHeader: {
        display: 'flex',
        justifyContent: 'space-between', // This ensures the date and button are spaced out
        alignItems: 'center', // This aligns items vertically center
    },
    date: {
        flex: 1, // This makes the date container take up the available space, pushing the button to the right
    },
    closeButton: {
        marginLeft: 'auto', // This ensures the button is aligned to the right
    },
    spinnerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Adjust the height as needed
    },
};

export default UserDataLister;
