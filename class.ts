class Person {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.ssn} ${this.firstName} ${this.lastName}`;
    }
}

let person = new Person('171-28-0926','John','Doe');
console.log(person.getFullName());

