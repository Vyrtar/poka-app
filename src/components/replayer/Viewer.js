import React from 'react';

const Viewer = ({ pokerHand }) => {

    return (
        <div>
            <p>
                Player to Act: {pokerHand.last.player}
            </p>
            <p>
                Current Bet: {pokerHand.last.amount}
            </p>
            <h4>Actions:</h4>
            {pokerHand.actions.map((action) => (
                <div style={{ border: 1 }} key={action.id}>
                    <p>{action.player} {action.type} {action.amount}</p>
                </div>
            ))}
        </div>
    );
};

export default Viewer; 
