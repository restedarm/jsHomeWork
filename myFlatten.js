function flatArray(arr) {
	let flattenedArray = [];
	for(let i = 0; i < arr.length; i++) {
  	if(Array.isArray(arr[i])) {
    	flattenedArray = flattenedArray.concat(flatArray(arr[i]));
    }
    else {
    	flattenedArray.push(arr[i]);
    }   
  }
  
  return flattenedArray;
}


const array = [[[1], [2, 3, [4]], [[5, [8 , 9, [[[10]]]], 6], 7]]];
console.log(flatArray(array));