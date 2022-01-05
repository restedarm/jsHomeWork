const obj = {
    name: "Jhon",
    country: {
     name: "Armenia",
     code: 374
    }
  };


function reverseObj(obj){
    let ret = {};  
    for(let key in obj){
        if ( typeof(obj[key]) === "object"){    
            newObj = reverseObj(obj[key]);
            ret[key] = newObj;     
        }
        else{
          ret[obj[key]] = key;
        }
    }
    return ret;
       
}

