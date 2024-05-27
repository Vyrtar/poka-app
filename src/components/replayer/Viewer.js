import React from 'react';

const Viewer = ({ pokerHand }) => {

    return (
        <div>
            <h4>Actions:</h4>
            {pokerHand.actions.map((action) => (
                <div style={{ border: 1 }} key={action.id}>
                    {`${action.position} ${action.actionType} ${action.actionSize}`}
                </div>
            ))}
        </div>
    );
};

export default Viewer;
