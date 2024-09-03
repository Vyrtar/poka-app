import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, get, child } from "firebase/database";
import PokerHandViewer from './PokerHandViewer';

const ShareableView = () => {
    const { userId, pokerHandId } = useParams();
    const [pokerHand, setPokerHand] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const database = getDatabase();
        const pokerHandRef = ref(database, `hands/${pokerHandId}`);
        
        get(pokerHandRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setPokerHand(snapshot.val());
                } else {
                    console.log("No data available");
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching poker hand:", error);
                setLoading(false);
            });
    }, [pokerHandId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!pokerHand) {
        return <div>No data available</div>;
    }

    return (
       <PokerHandViewer pokerHand={pokerHand}/>
    );
};

export default ShareableView;
