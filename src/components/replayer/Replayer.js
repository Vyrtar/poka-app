import React from "react";
import Controller from "./Controller";
import Viewer from "./Viewer";

const Replayer = ({pokerHand}) => {
    console.log(pokerHand)
    return(
        <>
            <div>
                <Controller pokerHand={pokerHand}/>
                <Viewer pokerHand={pokerHand} />
            </div>
        </>
    )
}

export default Replayer;