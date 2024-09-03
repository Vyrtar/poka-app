import React, { useState } from 'react';
import { usePokerHand } from './PokerContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const positions = ['SB', 'BB', 'UTG', 'UTG+1', 'MP', 'MP+1', 'CO', 'BTN'];

const Setup = () => {
  const { setPokerHand } = usePokerHand();
  const [numPlayers, setNumPlayers] = useState(8);
  const [players, setPlayersState] = useState(
    Array(8).fill({
      stack: 0,
      inHand: true,
      hand: {
        card1: { value: null, suit: null },
        card2: { value: null, suit: null }
      }
    })
  );
  const [smallBlind, setSmallBlind] = useState(0.5);
  const [bigBlind, setBigBlind] = useState(1);

  const handleNumPlayersChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNumPlayers(value);
    setPlayersState(players.slice(0, value));
  };

  const handleStackChange = (index, stack) => {
    const newPlayers = [...players];
    newPlayers[index].stack = parseFloat(stack) || 0;
    setPlayersState(newPlayers);
  };

  const handleInHandChange = (index, inHand) => {
    const newPlayers = [...players];
    newPlayers[index].inHand = inHand;
    setPlayersState(newPlayers);
  };

  const handleCardChange = (index, cardIndex, value, type) => {
    const newPlayers = [...players];
    newPlayers[index].hand[`card${cardIndex + 1}`][type] = value || null;
    setPlayersState(newPlayers);
  };

  const handleSetup = () => {
    const pokerHand = {
      players: players.map((player, index) => ({
        position: positions[index],
        stack: player.stack,
        inHand: player.inHand,
        hand: {
          card1: {
            value: player.hand.card1.value,
            suit: player.hand.card1.suit
          },
          card2: {
            value: player.hand.card2.value,
            suit: player.hand.card2.suit
          }
        }
      })),
      blinds: { smallBlind, bigBlind },
      actions: [
        { player: 'SB', action: 'posts', amount: smallBlind },
        { player: 'BB', action: 'posts', amount: bigBlind }
      ]
    };
    setPokerHand(pokerHand);
  };

  return (
    <div>
      <h2>Setup Poker Hand</h2>

      <Form.Group controlId="formNumPlayers">
        <Form.Label>Number of Players</Form.Label>
        <Form.Control as="select" value={numPlayers} onChange={handleNumPlayersChange}>
          {[...Array(9).keys()].map(num => (
            <option key={num} value={num + 2}>{num + 2}</option>
          ))}
        </Form.Control>
      </Form.Group>

      {players.map((player, index) => (
        <div key={index} style={{ marginTop: '10px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
          <h5>{positions[index]}</h5>
          <Form.Check 
            type="checkbox" 
            label="In Hand" 
            checked={player.inHand} 
            onChange={e => handleInHandChange(index, e.target.checked)} 
          />
          <Form.Control 
            placeholder="Stack Size" 
            type="number"
            value={player.stack} 
            disabled={!player.inHand}
            onChange={e => handleStackChange(index, e.target.value)} 
          />
          <div>
            <Form.Label>Cards:</Form.Label>
            <div style={{ display: 'flex', gap: '5px' }}>
              <Form.Control 
                placeholder="Value" 
                style={{ width: '50px' }}
                value={player.hand.card1.value || ''}
                onChange={e => handleCardChange(index, 0, e.target.value, 'value')}
              />
              <Form.Control 
                placeholder="Suit" 
                style={{ width: '50px' }}
                value={player.hand.card1.suit || ''}
                onChange={e => handleCardChange(index, 0, e.target.value, 'suit')}
              />
              <Form.Control 
                placeholder="Value" 
                style={{ width: '50px' }}
                value={player.hand.card2.value || ''}
                onChange={e => handleCardChange(index, 1, e.target.value, 'value')}
              />
              <Form.Control 
                placeholder="Suit" 
                style={{ width: '50px' }}
                value={player.hand.card2.suit || ''}
                onChange={e => handleCardChange(index, 1, e.target.value, 'suit')}
              />
            </div>
          </div>
        </div>
      ))}

      <div style={{ marginTop: '20px' }}>
        <Form.Label>Small Blind</Form.Label>
        <Form.Control 
          placeholder="Small Blind" 
          type="number"
          value={smallBlind} 
          onChange={e => setSmallBlind(parseFloat(e.target.value) || 0)} 
        />
        <Form.Label>Big Blind</Form.Label>
        <Form.Control 
          placeholder="Big Blind" 
          type="number"
          value={bigBlind} 
          onChange={e => setBigBlind(parseFloat(e.target.value) || 0)} 
        />
      </div>

      <Button variant="primary" onClick={handleSetup} style={{ marginTop: '20px' }}>
        Setup Poker Hand
      </Button>
    </div>
  );
};

export default Setup;
