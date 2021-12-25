Array.prototype.myMap = function(func){
    let newArr = [];
    for (let i = 0; i < this.length; i++){
        newArr.push(func(this[i],i,this));
    }
    return newArr;
}


let arr = [1,2,3,4,5]
let newArr = arr.myMap(function(val,ind,arr){
    return val*2 
})
console.log(newArr)