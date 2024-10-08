interface User{
    name:string;
    age: number;
    id: number;
    email: string;
}

interface Address{
    street: string;
    city: string;
    state: string;
    pin: string;
}

class NewPerson{
    private id: number;
    private name:string;
    private address: Address;

    constructor(id:number, name:string, address: Address){
        this.id = id;
        this.name = name;
        this.address = address;
    }
}

let add:Address = {street: "Baner High Street",city: "Pune", state: "Maharashtra", pin: "411045"};

let newP1 = new NewPerson(1, "Prajwal", add);

console.log(newP1);

//object destructuring
let {street: streetName, state}: Address = {
    street: "Baner High Street",
    city: "Pune",
    state: "Maharashtra",
    pin: "411045",
};


console.log(streetName);// if we want new name except older one
console.log(state);

//Array Destructuring
