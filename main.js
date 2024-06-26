// Type Intersection 
var age = 25;
var school = {
    age: 25,
    name: "Usama",
    id: 1
};
var coffeeOrder1 = 'Latte';
var TCoffeeType2;
(function (TCoffeeType2) {
    TCoffeeType2["latte"] = "latte";
    TCoffeeType2["mocha"] = "mocha";
    TCoffeeType2["americano"] = "americano";
})(TCoffeeType2 || (TCoffeeType2 = {}));
var coffeeOrder2 = TCoffeeType2.americano;
console.log(coffeeOrder1);
console.log(coffeeOrder2);
