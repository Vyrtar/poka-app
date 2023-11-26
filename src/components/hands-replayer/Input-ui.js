import React from 'react';

const InputUI = ({
                     currentPosition,
                     handleFold,
                     handleCheck,
                     handleCall,
                     handleRaise,
                 }) => {
    return (
        <div>
            <p>Current Position: {currentPosition}</p>
            {/* ... (other UI elements) */}
            <button onClick={handleFold}>Fold</button>
            <button onClick={handleCheck}>Check</button>
            <button onClick={handleCall}>Call</button>
            <button onClick={handleRaise}>Raise</button>
        </div>
    );
};

export default InputUI;
