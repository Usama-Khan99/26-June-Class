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

// ENUMS 

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

// Assignment (Difference between Enums and Type Literals)