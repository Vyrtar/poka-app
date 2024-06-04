import React, { useState, useEffect } from 'react';

const Viewer = ({ pokerHand }) => {
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const getNextPlayer = () => {
        setCurrentPlayerIndex((currentPlayerIndex + 1) % pokerHand.players.length);
    }
    useEffect(() => {
        getNextPlayer()
    }, [pokerHand]);
    return (
        <div>
            <p>
                Player to Act: {pokerHand.players[currentPlayerIndex]}
            </p>
            {/* <p>
                Current Bet: {pokerHand.last.amount}
            </p> */}
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
