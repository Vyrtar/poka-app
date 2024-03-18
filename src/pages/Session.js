import React from "react";

const sessionBtnHandler = () => {
    console.log('click');
}



const Session = ({ user }) => {


    return (
        <div>
            <div>
                {user ? (
                    <p>Welcome, {user.email}!</p>
                ) : (
                    <p>Please log in.</p>
                )}
            </div>
            <button onClick={() => sessionBtnHandler()}></button>
        </div>
    )
}

export default Session