let c=0;
function counter()
{
    
    function newCounter(){
        c=c+1;
        return c;
        
    }
 
    return newCounter();
}
 
console.log(counter());
console.log(counter());