// Class without constructor
class Employees{
    id! :number;
    name! : string;
    address! : string;
}
let Aditya = new Employees();
Aditya.id = 1;
Aditya.name = "Aditya Kalambe";
Aditya.address = "Baner, pune";
console.log(Aditya);


// Class With Constructor
class Students{
    id:number;
    name:string;

    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }
}
let stud1 = new Students(1, "Sanket Parsewar");
console.log(stud1);


// class with constructor and method
class University {
    id: number;
    college: string;

    constructor(id: number, college: string) {
        this.id = id;
        this.college = college;
    }

    getId(): number {
        return this.id;
    }

    getCollege(): string {
        return this.college;
    }

    setId(id: number): void {
        this.id = id;
    }

    setCollege(college: string): void {
        this.college = college;
    }
}
let sipna = new University(1, "Sipna College");
console.log(sipna);

console.log(sipna.getId());
console.log(sipna.getCollege());

sipna.setCollege("Sipna COET");
sipna.setId(10);
console.log(sipna);


//class with constructor, method, private variables

class Person {
    private id: number;

    private name: string;

    private gender: string;

    constructor(id: number, name: string, gender: string) {
        this.id = id;
        this.name = name;
        this.gender = gender;
    }

}

let p1 = new Person(10, "Aditya Kalambe", "Male");
// p1.id = 20;
// console.log(p1.id);
console.log(p1);


//class with constructor, method, private variables using #

class Person1 {
    #id: number;

    #name: string;

    #gender: string;

    constructor(id: number, name: string, gender: string) {
        this.#id = id;
        this.#name = name;
        this.#gender = gender;
    }

}

// console.log("\n\n\n");
let p2 = new Person1(10, "Aditya Kalambe", "Male");
// console.log(p2);
// p2.id = 20;

// console.log(p2.id);
console.log(p2);