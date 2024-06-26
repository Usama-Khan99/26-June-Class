// Type Intersection 

type stringOrNumber = string | number;

let age: stringOrNumber = 25;

type Tstudent = {

    name:string;
    age : number;

}

type TTeacher = {
    id :number;
}
// This is intersected type 
type TSchool = Tstudent & TTeacher;

let school : TSchool = {

    age:25,
    name: "Usama",
    id : 1
}

// ENUM

type TCoffeeType1 = 'Latte' | 'Mocha' | 'Americano'
const coffeeOrder1 : TCoffeeType1 = 'Latte';

enum TCoffeeType2 {
    latte = 'latte',
    mocha = 'mocha',
    americano = 'americano',
}
const coffeeOrder2 : TCoffeeType2 = TCoffeeType2.americano;
console.log(coffeeOrder1);
console.log(coffeeOrder2);

// Assignment 1 (Difference between Enums and Type Literals)
// Assignment 2 (What is the difference between Enums and const Enums) 

// Inetrface 

// type Manager = {
//     name : string;
//     subordinates? : number;
// }

// let manager: Manager = {
//     name: 'Bilal',
//     subordinates: 10,
// }

interface Manager {
    name : string;
    subordinates?: number;
}

let manager : Manager {
    name:'Usama';
}

// Types of typing
// Nominal, Structural, Duck 


interface Ball{
    diameter: number;
}

interface Sphere {
    diameter: number;
}

let ball: Ball = {diameter: 10};
let sphere: Sphere = {diameter:20};

sphere = ball;
ball = sphere;

// Above is structural typing 