import React from 'react';
import { usePokerHand } from './PokerContext';
import PokerHandController from './PokerHandController';
import PokerHandViewer from './PokerHandViewer';
import Sendit from './Sendit';
import Setup from './Setup';

const PkHandsEntry = () => {
	const {pokerHand} = usePokerHand();
	return (
		<div>
			{
				!pokerHand ? <Setup/> :
					<>
						<PokerHandController/>
						<PokerHandViewer/>
						<Sendit/>
					</>
			}
		</div>

	);
};

export default PkHandsEntry;
