type student={
    name:string,
    age:number,
    grade:string,
 
}
type player={
    name:string,
    sport:string,
}
type studentandplayer=student & player;
 
let foo:studentandplayer={
    name :"harry",
    age:20,
    grade:"a",
    sport:"cricket"
}
 
let koo:studentandplayer={
    name: "goo",
    age: 21,
    grade: "b",
    sport: "volleyball"
}
 
let loo:studentandplayer={
    name: "poo",
    age: 22,
    grade: "c",
    sport: "chess"
}



 
type studentorplayer=student| player;
 
let abc:studentorplayer={
    name: "goo",
    age: 21,
    grade: "b",
    sport: "volleyball"
}
 
let def:studentorplayer={
    name: "goo",
    grade: "b",
    sport: "Hockey"
}
 
let xyz:studentandplayer={
    name: "goo",
    age: 21,
    grade: "b",
    sport: "Badminton"
}
 
var SP : Array<studentandplayer>=[koo,foo,loo];
var SALL : Array<studentorplayer>=[abc,def,xyz];
 
// function StudentANDPlayer(name :studentandplayer ){
//     console.log();
// }
// console.log("StudentAndPlayer")
// SP.forEach(function(s){
//     console.log(s)
// })
// console.log("StudentOrPlayer")
// SALL.forEach(function(s){
//     console.log(s)
// })

 
function Print55(data : studentorplayer[] | studentandplayer[]){
    data.forEach(d=>{
        console.log(d);
    })
}

Print55(SP);