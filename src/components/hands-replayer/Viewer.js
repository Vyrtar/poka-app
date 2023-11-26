import React from 'react';

const ActionBox = (pokerHand) => {


}
const Viewer = ({ pokerHand, currentPotSize }) => {





    return (
        <div>
            <p>Current Pot Size: {currentPotSize}</p>
            <div>
                <h2>Actions:</h2>
                {pokerHand.actions.map((action) => (
                    <p key={action.actionID}>
                        {`${action.position} ${action.actionType} ${action.actionSize}`}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Viewer;
