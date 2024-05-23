export default class Action {
    constructor(player, action, amount = null) {
        this.player = player; 
        this.action = action; 
        this.amount = amount; 
    }

    toString() {
        return `${this.player} ${this.action}${this.amount !== null ? ' to ' + this.amount : ''}`;
    }
}
