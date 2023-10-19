export class invoice {
    constructor(type, name, details, amount) {
        this.type = type;
        this.name = name;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.type}, ${this.name}, ${this.details}, ${this.amount}`;
    }
}
export class payment {
    constructor(type, name, details, amount) {
        this.type = type;
        this.name = name;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.type}, ${this.name}, ${this.details}, ${this.amount}`;
    }
}
