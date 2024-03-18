import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase'; // Adjust path as needed

const UserDataLister = ({ user }) => {
    const [userDataList, setUserDataList] = useState([]);

    useEffect(() => {
        // Define the path based on the user's UID
        const path = `users/${user.uid}/data`;
        const userRef = ref(database, path);

        // Fetch the data
        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                // Convert the data from an object of objects into an array
                const dataList = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key]
                }));
                setUserDataList(dataList);
            } else {
                setUserDataList([]);
            }
        });

        // Cleanup function to detach the listener
        return () => {
            // Firebase SDK >= 9.0.0: Unsubscribe from the listener
            // For SDK < 9.0.0, you might not need to explicitly unsubscribe
        };
    }, [user.uid]); // Dependency array ensures this effect runs when user.uid changes

    return (
        <ul>
            <p>user data: </p>
            {userDataList.map((item) => (
                <li key={item.id}>{JSON.stringify(item)}</li>
            ))}
        </ul>
    );
};

export default UserDataLister;
