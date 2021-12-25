Array.prototype.mySlice = function(start,end){
    if (end < 0) {
        end = this.length + end;
    }
    end = end || this.length;
    let newArr = [];
    
    for (let i = start; i < end; i ++){
            newArr.push(this[i]);   
    }
    return newArr;
}

let arr = [1,2,3,4,5,6,7];
console.log(arr.mySlice(3));


