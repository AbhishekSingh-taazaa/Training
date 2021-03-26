

function Animal(name, age, owner) {
    this.name = name;
    this.age = age;
    this.owner = owner;
}
 
function Horse(name, age, owner, speed) {

    Animal.call(this, name, age, owner);
    this.__proto__ = Animal.prototype;
    this.speed = speed;
}
 
function Cat(name, age, owner, isCute) {
    Animal.call(this, name, age, owner)
    this.__proto__ = Animal.prototype;
    this.isCute = isCute;
}





let h1 = new Horse("foo", 12, "foo owner", 40);
console.log(h1);
let c1 = new Cat("catfoo", 7, "cat owner", true);
console.log(c1);
 
// h1.__proto__.country = "India";
// console.log(h1.country);
// console.log(c1.country);
// c1.__proto__.country = "USA";
// console.log(h1.country);
// console.log(c1.country);
// c1.country = "UK";
// console.log(h1.country);
// console.log(c1.country);