import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase'; 
import { Card, CardBody, CardHeader } from 'react-bootstrap';


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
                setUserDataList(dataList);
            } else {
                setUserDataList([]);
            }
        });
    }, [user.uid]); 
    console.log(userDataList)
    return (
       <>
            <p>user data: </p>
            {userDataList.map((item) => (
                
                <Card style={styles.sessionItem} key={item.id}>
                    <Card.Header>
                        {item.date}
                    </Card.Header>   
                    <Card.Body>
                        Hours: {item.sessionHours} P/L: {item.profitLoss}
                    </Card.Body> 
                </Card>
                
            ))}
        </>
    );
};

const styles = {
    sessionItem: {
        margin: 6,
        width: '20em',
        backgroundColor: '#b9c1c9'
    }
}

export default UserDataLister;
