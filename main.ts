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