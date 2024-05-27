export default class Action {
    constructor(id, player, action, amount = null) {
        this.id = id;
        this.player = player; 
        this.action = action; 
        this.amount = amount; 
    }

    toString() {
        return `${this.id} ${this.player} ${this.action}${this.amount !== null ? ' to ' + this.amount : ''}`;
    }
}
