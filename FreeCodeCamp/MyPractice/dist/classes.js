"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _id, _name, _gender;
// Class without constructor
class Employees {
}
let Aditya = new Employees();
Aditya.id = 1;
Aditya.name = "Aditya Kalambe";
Aditya.address = "Baner, pune";
console.log(Aditya);
// Class With Constructor
class Students {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let stud1 = new Students(1, "Sanket Parsewar");
console.log(stud1);
// class with constructor and method
class University {
    constructor(id, college) {
        this.id = id;
        this.college = college;
    }
    getId() {
        return this.id;
    }
    getCollege() {
        return this.college;
    }
    setId(id) {
        this.id = id;
    }
    setCollege(college) {
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
    constructor(id, name, gender) {
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
    constructor(id, name, gender) {
        _id.set(this, void 0);
        _name.set(this, void 0);
        _gender.set(this, void 0);
        __classPrivateFieldSet(this, _id, id);
        __classPrivateFieldSet(this, _name, name);
        __classPrivateFieldSet(this, _gender, gender);
    }
}
_id = new WeakMap(), _name = new WeakMap(), _gender = new WeakMap();
// console.log("\n\n\n");
let p2 = new Person1(10, "Aditya Kalambe", "Male");
// console.log(p2);
// p2.id = 20;
// console.log(p2.id);
console.log(p2);
