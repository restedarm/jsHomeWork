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


console.log(reverseObj(obj));
//console.log(obj1);
function Node(value = "",next =null,prev = null){
  this.value = value;
  this.next = next;
  this.prev = prev;
}

function List(){
  this.head = null;
  this.tail = null;
}

List.prototype.push = function(value){
  let newNode = new Node(value);
  if(!head) {
    this.head = newNode;
    this.tail = this.head;
  }
  else{
    this.tail.next = newNode;
    this.tail = newNode;
  }
  return this;
}