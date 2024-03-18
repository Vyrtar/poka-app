import React from 'react';
import { ref, push } from 'firebase/database';
import { database } from '../firebase'; // Adjust path as needed

const DummyDataPusher = ({ user }) => {
    console.log(user.uid)
    const handlePushData = () => {
        console.log('Attempting to push data...'); // This should appear in the console when the button is clicked
        const dummyData = { data: "This is some dummy data" }; // Your dummy data
        const path = `users/${user.uid}/data`; // Path in the database
        push(ref(database, path), dummyData)
            .then(() => console.log("Data pushed successfully"))
            .catch((error) => console.error("Error pushing data:", error));
    };

    return <button onClick={handlePushData}>Push Dummy Data</button>;
};

export default DummyDataPusher;
