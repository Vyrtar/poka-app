import React from "react";
import Controller from "./Controller";
import Viewer from "./Viewer";
import Sendit from "../Sendit"

const Replayer = ({pokerHand, setPokerHand, user}) => {
    return(
        <>
            <div>
               
                <Controller pokerHand={pokerHand} setPokerHand={setPokerHand}/>
                <Sendit pokerHand={pokerHand} user={user} />
                <Viewer pokerHand={pokerHand} />
            </div>
        </>
    )
}

export default Replayer;