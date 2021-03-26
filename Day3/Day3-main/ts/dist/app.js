let foo = {
    name: "harry",
    age: 20,
    grade: "a",
    sport: "cricket"
};
let koo = {
    name: "goo",
    age: 21,
    grade: "b",
    sport: "volleyball"
};
let loo = {
    name: "poo",
    age: 22,
    grade: "c",
    sport: "chess"
};
let abc = {
    name: "goo",
    age: 21,
    grade: "b",
    sport: "volleyball"
};
let def = {
    name: "goo",
    grade: "b",
    sport: "Hockey"
};
let xyz = {
    name: "goo",
    age: 21,
    grade: "b",
    sport: "Badminton"
};
var SP = [koo, foo, loo];
var SALL = [abc, def, xyz];
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
function Print55(data) {
    data.forEach(d => {
        console.log(d);
    });
}
Print55(SP);
//# sourceMappingURL=app.js.map