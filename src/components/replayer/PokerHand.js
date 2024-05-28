import Action from './Action.js';

export default class PokerHand {
    constructor() {
        this.players = {
            UTG: null,
            UTG1: null,
            MP: null,
            LJ: null,
            HJ: null,
            CO: null,
            BTN: null,
            SB: null,
            BB: null
        };
        this.actions = [];
    }

    setStack(player, playersize) {
        if (this.players.hasOwnProperty(player)) {
            this.players[player] = playersize;
        } else {
            console.error(`Invalid player position: ${player}`);
        }
    }

    addAction(id, player, action, amount = null) {
        if (this.players.hasOwnProperty(player)) {
            const pokerAction = new Action(id, player, action, amount);
            this.actions.push(pokerAction);
        } else {
            console.error(`Invalid player position: ${player}`);
        }
    }

    getActions() {
        return this.actions.map(action => action.toString());
    }

    getCurrentAction() {
    if (this.actions.length === 0) {
        return 1; 
    }
    const lastAction = this.actions[this.actions.length - 1];
    return lastAction.id + 1; 
    }

    getNextPlayerToAct() {
        const playerOrder = Object.keys(this.players);
        const lastPlayerIndex = this.actions.length === 0 ? -1 : playerOrder.indexOf(this.actions[this.actions.length - 1].player);

        for (let i = 1; i <= playerOrder.length; i++) {
            const nextPlayerIndex = (lastPlayerIndex + i) % playerOrder.length;
            const nextPlayer = playerOrder[nextPlayerIndex];
            if (this.players[nextPlayer] !== null) {
                return nextPlayer;
            }
        }

        return null; 
    }
}
