function Node(value,next = null,prev = null){
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
  
  function List(head = null,tail = null){
    this.head = head;
    this.tail = tail;
    this.length = 0;
  }
  
  List.prototype.push = function(value){
    let newNode = new Node(value);
    if(!this.head) { //this head ==== null
      this.head = newNode;
      this.tail = this.head;
      
    }
    else{
      
      this.tail.next = newNode;
      newNode.prev = this.tail
      this.tail = newNode;
      
    }
    this.length++;
    return this;
  };

  List.prototype.pop = function(value){
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length--;
  }

  List.prototype.shift = function(){
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
  }

  List.prototype.unShift = function(value){
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
  }

  List.prototype.delete = function(value){
      let current = this.head
      if (this.head.value === value){
        this.shift();
        return;
      }
      if (this.tail.value === value){
        this.pop();
        return;
      }
      while(current){
          if (current.next.value === value){
              
              current.next = current.next.next;
              current.next.prev = current;
              this.length--;
              return;

          }
          current = current.next;

      }
  }

  List.prototype.toString = function(){
    let current = this.head,
    string = '';
  
    while(current){
      string += current.value + (current.next ? ', ' : '');
      current = current.next;
    }
  
    return string;
  };

  List.prototype.count = function(value){
    let count = 0;
    let current = this.head;
    while(current){
      if (current.value === value){
        count++;
      }
      current = current.next;
    }
    return count;
  }
  

  let ls = new List();
  ls.push(1);
  ls.push(2);
  ls.push(3);
  ls.pop();
  ls.delete(2);
  ls.push(5);
  ls.push(5);
  ls.push(6);
  ls.shift();
  ls.unShift(13);
  
  console.log("Count of the value is " + ls.count(5));
  console.log(ls.toString());

// Output 
// Count of the value is 2
// 13, 5, 5, 6

