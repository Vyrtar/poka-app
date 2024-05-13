import React, { useState } from "react";
import Replayer from './Replayer';
import Setup from './Setup';

const Parent = () => {
    const [isSetup, setIsSetup] = useState(false);
    const [pokerHand, setPokerHand] = useState({});

    

    return (
        <>
            {
                isSetup ? <Replayer /> : <Setup setPokerHand={setPokerHand} setSetup={setIsSetup}/>
            }
        </>
    )
}

export default Parent;