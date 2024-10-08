"use strict";
class NewPerson {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
}
let add = { street: "Baner High Street", city: "Pune", state: "Maharashtra", pin: "411045" };
let newP1 = new NewPerson(1, "Prajwal", add);
console.log(newP1);
//object destructuring
let { street: streetName, state } = {
    street: "Baner High Street",
    city: "Pune",
    state: "Maharashtra",
    pin: "411045",
};
console.log(streetName); // if we want new name except older one
console.log(state);
//Array Destructuring
