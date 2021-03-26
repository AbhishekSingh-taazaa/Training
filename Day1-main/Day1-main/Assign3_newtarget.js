function car(name,color)
{
    if(!new.target){
        throw "Use new to call car() constructor";
    }
    this.name =name;
    this.color=color;

}
try{
    let c1= new car('XUV300','Blue');
    console.log(c1);
    let c2 =car('TUV100','Orange');
    console.log(c2);

}
catch(err){
console.log(err);

}