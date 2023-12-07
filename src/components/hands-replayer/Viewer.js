import React from 'react';

const ActionBox = (pokerHand) => {


}
const Viewer = ({ pokerHand, currentPotSize }) => {





    return (
        <div>
            <div>
                <h2>Actions:</h2>
                {pokerHand.actions.map((action) => (
                    <div style={{border: 1}} key={action.actionID}>
                        {`${action.position} ${action.actionType} ${action.actionSize}`}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Viewer;
