import { bill } from "./interface1"
export class invoice implements bill{
    constructor(private type:string,private name:string,private details:string,private amount:number){}
    format(){
        return `${this.type}, ${this.name}, ${this.details}, ${this.amount}`;
    }
}

export class payment implements bill{
    constructor(private type:string,private name:string,private details:string,private amount:number){}
    format(){
        return `${this.type}, ${this.name}, ${this.details}, ${this.amount}`;
    }
}