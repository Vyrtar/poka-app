import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase'; 
import { Card } from 'react-bootstrap';

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
        <ul>
            <p>user data: </p>
            {userDataList.map((item) => (
                
                <div key={item.id}>{item.date} {item.sessionHours} {item.profitLoss}</div>
                
            ))}
        </ul>
    );
};

export default UserDataLister;
