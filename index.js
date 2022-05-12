//1
// let check = function(num){
//     return num%2 === 0 ? "Even" : "Odd"
// }

//2
// let angle = function(angle1,angle2){
//     return 180 - angle1 - angle2;
// }

//3
// let func = function(num){
//     if ( num < 10 ) return num;
//     let end = num % 10 
//     if ( end === 0) return num;
//     num = Math.floor(num/10);
//     return num + end * Math.pow(10,(num+"").length)
// }

//4
// let func = function(num){
//     let arr = [];
//     if ( num % 3 === 0 ) arr.push(3);
//     if ( num % 7 === 0 ) arr.push(7);
//     if ( num % 5 === 0 ) arr.push(5);

//     switch(arr.length){
//         case 0:
//             console.log(`${num} is not multiple of 3,5 or 7`)
//         case 1:
//             console.log(`${num} is multiple of ${arr[0]}`)
//         case 2:
//             console.log(`${num} is multiple of ${arr[0]} and ${arr[1]}`)
//         case 3:
//             console.log(`${num} is multiple of ${arr[0]},${arr[1]} and ${arr[2]}`)
//     }
// }


//5

// let func = function(num1,num2,num3){
//     let arr = [num1,num2,num3];
//     if (arr[0] > arr[1]) swap(arr,0,1);
//     if (arr[1] > arr[2]) swap(arr,1,2);
//     if (arr[0] > arr[1]) swap(arr,0,1);
//     return arr;
// }

// function swap(arr,i,j){
//     [arr[i],arr[j]] = [arr[j],arr[i]];
// }

// //6
//  let check = function(count,num){
//      switch(num < 0){
//             case true:
//                 count++;
//                 return count
//             case false:
//                 return count
//             default:
//                 return "unsingend"
//      }
// }
// let func = function(num1,num2,num3){
//     let count = 0;
//     let arr = [num1,num2,num3];
//     for (let i = 0; i < arr.length; i++){
//         count = check(count,arr[i]);
//     }
//     return count % 2 === 1 ? "negative" : "positive";
// }

// console.log(func(-1,-2,-3));

//7
// let includesDigit = function(num,digit){
//     let str = num.toString();
//     return str.includes(digit.toString());
// }

//8
// let reverse = function(num){
//     let str = num.toString().split("");
//     [str[0],str[str.length-1]] = [str[str.length-1],str[0]];
//     return +str.join("");
// }

//9
// let isPrime = function(num){
//     if (num < 2) return false;
//     for (let i = 2; i < num; i++){
//         if (num % i === 0) return false;
//     }
//     return true;
// }

//10
//  let fib = function(num){
//      if(n === 0) return 0;
//      if(n === 1) return 1;
//      return fib(num-1) + fib(num-2);
//     }

//11
//  let func = function(num){
//      if (num === 0) return "Cant calculate";
//      let arr = [];
//      while(num > 0){
//             arr.push(num % 10);
//             num = Math.floor(num/10);
//      }
//     let product = arr.reduce((acc,curr) => acc * curr,1);
//     let sum = arr.reduce((acc,curr) => acc + curr,0);
//     if (product % sum === 0) return `${product/sum} is quotient`;
//     else return `${product%sum} is remainder`;
//     }
// console.log(func(0));

//12
//  let func = function(str,words){
//      let j = 0
//      for (let i = 0; i < str.length; i++){
//             if (str[i] === "_"){
//                 str = str.replace(str[i],words[j]);
//                 j++;
//             }
//         }
//         return str;
//     }
 
// console.log(func('_ world _',['hello','jan']));

//13
// let func = function(arr){
//     arr = arr.filter(el => typeof el === "number");

//     let arr1 = arr.filter(el => el%2 === 1);
//     let arr2 = arr.filter(el => el%2 === 0);
    
//     return arr1.concat(arr2);
// }
// console.log(func([1,2,3,4,null,5,6,"a",7,8,false,9,10]));
         
//14
//  let func = function(arr){
//      let nums = arr.filter(el => typeof el === "number");
//      return `Numbers: ${nums.length} Strgins: ${arr.length - nums.length}`;
//  }

// console.log(func([1,3,'2','1']))

//15
//  let func = function(arr){
//      arr = arr.map(el => el.length);
//      return Math.max(...arr) + Math.min(...arr)
//  }
//   console.log(func(['333','22','666666','1']));

//16
//   let func = function(arr,num){
//       return arr.indexOf(num);
//   }

    
//17
//   let func = function(str){
//       return str.split(" ")
//   }
//     console.log(func("Hello World"));

//18
// let func = function(arr){
//     let ret = [];
//     for(let i = 0; i < Math.max(...arr); i++){
//         if (arr.includes(i)) ret.push(i);
//         else ret.push(undefined)
//     }
//     return ret;
// }

//     console.log(func([1,2,3,9,10]));
    
//19
//  let func = function(arr){
//      return arr.map(el => el.reduce((acc,curr) => acc + curr,0));
//  }

//  console.log(func([[1,2,3],[4,5,6],[7,8,9]]));


//20?

//Optional
// let func = function(num){
//     let arr = [];
//     while(num > 0){
//         arr.push(num % 10);
//         num = Math.floor(num/10);
//     }
//     return Math.max(...arr) -  Math.min(...arr);
// }
// console.log(func(41));



//Optional 2
//10010 18
// let func = function(str){
//     let res = 0;
//     for (let i = 0; i < str.length; i++){
//         res += +str[i] * Math.pow(2,str.length-i-1);
//     }
//     return res
// }

// console.log(func('0101011'));

//Optional 3
// let func = function(arr1,arr2){
//     return [arr1[0],...arr2,arr1[1]];
// }
// console.log(func([1,2],[4,5,6]));