(function(){
    console.log("two way data binding implementation");
    var elements=document.querySelectorAll('[hapro]');
    var dbrepo={};
    elements.forEach((element)=>{
        if(element.type==='text'){
            var bindingProperty=element.getAttribute('hapro');
            addToScope();
            element.onkeyup=()=>{
                dbrepo[bindingProperty]=element.value;
            }
        }
 
        function addToScope(){
 
            if(!dbrepo.hasOwnProperty(bindingProperty)){
                let value;
                Object.defineProperty(dbrepo,bindingProperty,{
                    configurable:true,
                    enumerable : true,
                    set : function(newValue){
                        value=newValue;
 
                        elements.forEach(e=>{
                            if(e.getAttribute('hapro')===bindingProperty){
                                if(e.type==='text'){
                                    e.value=newValue
                                }
                                else if(!e.type){
                                    e.innerHTML=newValue
                                }
                                
                            }
                        })
 
                        
 
                    },
                    get:function(){
                        return value;
                    }
            
                })
 
            }
        }
        
    });
})();