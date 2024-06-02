import React from "react";
import Controller from "./Controller";
import Viewer from "./Viewer";

const Replayer = ({pokerHand, setPokerHand}) => {
    return(
        <>
            <div>
                <Controller pokerHand={pokerHand} setPokerHand={setPokerHand}/>
                <Viewer pokerHand={pokerHand} />
            </div>
        </>
    )
}

export default Replayer;