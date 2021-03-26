

var Team = {
    TeamNo : 121,
    Name :  'REX',
    TotalMembers : 5,
    Type : 'Technical',

    [Symbol.iterator] : function* (){
        for ( i in this) {

            yield[i,this[i]];
            
        }
    }
}

for (var i of Team ) {

   
    console.log(i);
    
}
