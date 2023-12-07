import React from 'react';

const InputUI = ({
                     currentPosition,
                     currentBet,
                     currentPot,
                     handleFold,
                     handleCheck,
                     handleCall,
                     handleRaise,
                     onInputChange,
                     currentBetSetter,
                 }) => {

    const handleChange = (event) => {
        const value = event.target.value;

        // Call the callback function from the parent
        onInputChange(value);
    };
    return (
        <div>
            <p>Position: {currentPosition}, Pot: {currentPot}</p>
            {/* ... (other UI elements) */}

            <button onClick={handleFold}>Fold</button>
            <button onClick={handleCheck}>Check</button>
            <button onClick={handleCall}>Call</button>
            <button onClick={handleRaise}>Raise</button><input defaultValue={currentBet*2} onChange={handleChange} />
        </div>
    );
};

export default InputUI;
