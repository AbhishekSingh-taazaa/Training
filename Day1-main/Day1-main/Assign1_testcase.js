function Add(num1,num2,...ep){
    res =num1+num2;
   let sum2=0;
    let sum1=0;
    let extra_size=ep.length;
   
    if(Number.isNaN(res)){
       return 0;
    }    
    
    else if(extra_size>0){
 
        let i=2;
 
        sum2=num1+num2;
       
        while(i<arguments.length){
            sum1=sum1+arguments[i];
            i++;
        }  
        if (sum2>sum1) {
 
            return sum2-sum1;
            
        } else {
            return sum1-sum2;
            
        }
    } 
    else{
 
            return res;
    }
 
}
 
let a=Add(5,-4,-56,76);
console.log(a);