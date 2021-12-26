
Array.prototype.mySlice = function(start,end){
   
    let newArr = [];
    start = start || 0;
    if (end !== 0){
        end = end || this.length;
    }
    if (end < 0) {
        end = this.length + end;
    }
    else if (end > this.length) {
        end = this.length
    }
    if (start < 0){
        start = this.length + start;
    }

    if ( start >= end ) {
        console.log("empty slice ");
        return;
    }
    for (let i = start; i < end; i ++){
            newArr.push(this[i]);   
    }
    return newArr;
}

let arr = [1,2,3,4,5,6,7];
console.log(arr.mySlice(0,-5));


