import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { database } from '../firebase';
import { ref, push, onValue } from 'firebase/database';
import { Button } from 'react-bootstrap';
import UserDataLister from './UserDataLister';
import DummyDataPusher from './DummyDataPusher';



const Session = ({ user }) => {


    return (
        <div>
            <div>
                {user ? (
                    <>
                        <p>Welcome, {user.email}!</p>
                        <DummyDataPusher user={user}/>
                        <UserDataLister user={user} />
                    </>
                ) : (
                    <p>Please log in.</p>
                )}
            </div>

        </div>
    )
}

export default Session