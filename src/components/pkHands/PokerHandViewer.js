import React from 'react';

const PokerHandViewer = () => {

//  const renderActions = () => {
 
// 	return (
// 	 <ul>
//         {pokerHand.actions.map((action, index) => (
//           <li key={index}>
//             {action.player} {action.action} ${action.amount}
//           </li>
//         ))}
//       </ul>
// 	  )
//  }

  return (
    <div>
      <h2>Poker Hand Viewer</h2>
      
      <h3>Players and Stacks:</h3>
      {/* <ul>
        {pokerHand.players.map((player, index) => (
          <li key={index}>
            {player.position}: ${player.stack}
          </li>
        ))}
      </ul> */}

      <h3>Blinds:</h3>
      {/* <p>Small Blind: ${pokerHand.blinds.smallBlind}</p>
      <p>Big Blind: ${pokerHand.blinds.bigBlind}</p> */}

      <h3>Actions:</h3>
		{/* {renderActions()} */}
    </div>
  );
};

export default PokerHandViewer;
