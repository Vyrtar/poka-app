import React, { useState } from "react";
import Replayer from './Replayer';
import Setup from './Setup';

const Parent = () => {
    const [isSetup, setIsSetup] = useState(false);

    return (
        <>
            {
                isSetup ? <Replayer /> : <Setup setSetup={setIsSetup}/>
            }
        </>
    )
}

export default Parent;