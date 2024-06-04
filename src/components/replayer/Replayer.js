import React from "react";
import Controller from "./Controller";
import Viewer from "./Viewer";
import Sendit from "../Sendit"

const Replayer = ({pokerHand, setPokerHand, user}) => {
    
    return(
        <>
        {/* <div>
            {user.email}
        </div> */}
            <div>
                <Controller pokerHand={pokerHand} setPokerHand={setPokerHand}/>
                {
                    user ?
                    <Sendit pokerHand={pokerHand} user={user} />
                    : 'no user'
                }
                <p>{user.email}</p>
                <Viewer pokerHand={pokerHand} />
            </div>
        </>
    )
}

export default Replayer;