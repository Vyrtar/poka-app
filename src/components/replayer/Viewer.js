import React from 'react';

const Viewer = ({ pokerHand }) => {
    
    return (
        <div>
            <h4>Actions:</h4>
            {pokerHand.actions.preflop.map((action) => (
                <div style={{ border: 1 }} key={action.id}>
                    <p>{action.player} {action.type} {action.amount}</p>
                </div>
            ))}
        </div>
    );
};

export default Viewer; 
