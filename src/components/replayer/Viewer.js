import React from 'react';

const Viewer = ({ pokerHand }) => {

    return (
        <div>
            <div>Player to act: {pokerHand.getNextPlayerToAct()}</div>
            <h4>Actions:</h4>
            {pokerHand.actions.map((action) => (
                <div style={{ border: 1 }} key={action.id}>
                    <p>{action.id}</p>
                </div>
            ))}
        </div>
    );
};

export default Viewer;
