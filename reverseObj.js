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
      let type = Object.prototype.toString.call(obj[key]);
      if ( type.includes("Object")){    
            newObj = reverseObj(obj[key]);
            ret[key] = newObj;     
        }
        else{
          ret[obj[key]] = key;
        }
    }
    return ret;
       
}

