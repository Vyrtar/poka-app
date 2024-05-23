import React, { useState } from 'react';

const Controller = ({pokerHand}) => {
    const [value, setValue] = useState('');  

    const handleChange = (event) => {
        setValue(event.target.value);  
    };

    return (
        <div>
            <label htmlFor="sampleInput">Enter Value: </label>
            <input
                id="sampleInput"
                type="text"
                value={value}
                onChange={handleChange}
            />
            <p>You entered: {value}</p>  
        </div>
    );
}

export default Controller;
