function Animal(owner){

    this.owner = owner;   
}



function Dog (owner,name,color){
    Animal.call(this,owner);
    this.__proto__ = Animal.prototype;
    this.Dog_name = name;
    this.color = color;
    
   
}

var D1 = new Dog("Arpit","Rodwiller","Black");
console.log(D1);