import React, { useState } from "react";

const Setup = ({ setSetup }) => {
    const [sB, setSb] = useState(1);
    const [bB, setBb] = useState(3);
    const [playerCount, setPlayerCount] = useState(9);
    const [utgStack, setUtgStack] = useState(200);
    const [utgP1Stack, setUtgP1Stack] = useState(200);
    const [mpStack, setMpStack] = useState(200);
    const [ljStack, setLjStack] = useState(200);
    const [hjStack, setHjStack] = useState(200);
    const [coStack, setCoStack] = useState(200);
    const [BtnStack, setBtnStack] = useState(200);
    const [sbStack, setSbStack] = useState(200);
    const [bbStack, setBbStack] = useState(200);

    const handleChangeSb = (event) => {
        setSb(event.target.value);
    };
    const handleChangeBb = (event) => {
        setBb(event.target.value);
    };
    const handleChangeUtgStack = (event) => {
        setUtgStack(event.target.value);
    };
    const handleChangeUtgP1Stack = (event) => {
        setUtgP1Stack(event.target.value);
    };
    const handleChangeMpStack = (event) => {
        setMpStack(event.target.value);
    };
    const handleChangeLjStack = (event) => {
        setLjStack(event.target.value);
    };
    const handleChangeHjStack = (event) => {
        setHjStack(event.target.value);
    };
    const handleChangeCoStack = (event) => {
        setCoStack(event.target.value);
    };
    const handleChangeBtnStack = (event) => {
        setBtnStack(event.target.value);
    };
    const handleChangeSbStack = (event) => {
        setSbStack(event.target.value);
    };
    const handleChangeBbStack = (event) => {
        setBbStack(event.target.value);
    };
    return (
        <>
            <div>Please set up some Game Info</div>

            Small Blind:
            <input
                style={{ margin: '1em', width: '3em' }}
                id="SB"
                type="number"
                value={sB}
                onChange={handleChangeSb}
            />

            Big Blind:
            <input
                style={{ margin: '1em', width: '3em' }}
                id="BB"
                type="number"
                value={bB}
                onChange={handleChangeBb}
            />
            <br />
            
            Stack Sizes
            <br/>
            UTG
            <input
                style={{ margin: '1em', width: '5em' }}
                id="UtgStack"
                type="number"
                value={utgStack}
                onChange={handleChangeUtgStack}
            />
            <br />
            UTG+1
            <input
                style={{ margin: '1em', width: '5em' }}
                id="UtgP1Stack"
                type="number"
                value={utgP1Stack}
                onChange={handleChangeUtgP1Stack}
            />
            <br />
            LJ
            <input
                style={{ margin: '1em', width: '5em' }}
                id="LjStack"
                type="number"
                value={mpStack}
                onChange={handleChangeMpStack}
            />
            <br />
            LJ
            <input
                style={{ margin: '1em', width: '5em' }}
                id="LjStack"
                type="number"
                value={ljStack}
                onChange={handleChangeLjStack}
            />
            <br />
            HJ
            <input
                style={{ margin: '1em', width: '5em' }}
                id="HjStack"
                type="number"
                value={hjStack}
                onChange={handleChangeHjStack}
            />
            <br />
            CO
            <input
                style={{ margin: '1em', width: '5em' }}
                id="Players"
                type="number"
                value={coStack}
                onChange={handleChangeCoStack}
            />
            <br />
            BTN
            <input
                style={{ margin: '1em', width: '5em' }}
                id="Players"
                type="number"
                value={BtnStack}
                onChange={handleChangeBtnStack}
            />
            <br />
            SB
            <input
                style={{ margin: '1em', width: '5em' }}
                id="Players"
                type="number"
                value={sbStack}
                onChange={handleChangeSbStack}
            />
            <br />
            BB
            <input
                style={{ margin: '1em', width: '5em' }}
                id="Players"
                type="number"
                value={bbStack}
                onChange={handleChangeBbStack}
            />
            <br />
            <button onClick={() => setSetup(true)}>Setup</button>
        </>
    )
}

export default Setup;