import React from 'react';
import UserDataLister from './UserDataLister';
import SessionDataPusher from './SessionDataPusher';

const Session = ({ user }) => {
    return (
        <div>
            <div>
                {user ? (
                    <>
                        <SessionDataPusher user={user}/>
                        <UserDataLister user={user} />
                    </>
                ) : (
                    <p>Authenticating...</p>
                )}
            </div>
        </div>
    )
}

export default Session