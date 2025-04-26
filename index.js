///////////////////////////////////////////////////////////// day 1 /////////////////////////////////////////////////////////////////////////////////////////////////////
// const ary = [1,2,3,4]
// ary.reverse()
// console.log(ary)

// function isEvenOrOdd(num) {
//     return num % 2 === 0 ? "Even":"Odd";
// }
// console.log(isEvenOrOdd(8));

// function call(str) {
//     return str.length;

// }

// console.log(call("osama"))

// //////////////////////////////////////////////////////////////// day 2 //////////////////////////////////////////////////////////////////////////////////////////////////////

// function remove(arr) {
//     let mt = [];

//     for (let i = 0; i < arr.length; i++) {
//         let Duplicate = false;

//         for (let j = 0; j < mt.length; j++) {
//             if (arr[i] === mt[j]) {
//                 Duplicate = true;
//                 break;
//             }
//         }

//         if (!Duplicate) {
//             mt.push(arr[i]);
//         }
//     }

//     return mt;
// }
// console.log(remove([1, 2, 2, 3, 4, 4, 5]));

// function findSecondLargest(arr) {
//     if (arr.length < 2) {
//         return "Array must have at least two numbers.";
//     }

//     let largest = -Infinity;
//     let secondLargest = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             secondLargest = largest;
//             largest = arr[i];
//         } else if (arr[i] > secondLargest && arr[i] !== largest) {
//             secondLargest = arr[i];
//         }
//     }

//     return secondLargest === -Infinity ? "No second largest number found." : secondLargest;
// }

// // Example usage:
// console.log(findSecondLargest([10, 20, 5, 8, 30]));

// //////////////////////////////////////////////////////////////// day 3 //////////////////////////////////////////////////////////////////////////////////////////////////////

// function isPrime(n) {
//     if(n < 2) return false;
//     if(n === 2) return true;
//     if(n % 2 === 0) return false;

//     for (let i = 3; i <=Math.sqrt(n); i += 2){
//         if(n % i === 0) return false
//     }

//     return true;

// };

// console.log(isPrime(1))

// function secondLargest(arr) {
//     if(arr.length < 2) return null ;

//     let sort = [...new Set(arr)].sort((a,b) => b - a);
//     return sort.length > 1 ? sort[1] : null;

// }

// console.log(secondLargest([1,2,3,4,5,6,7]))

// ///////////////////////////////////////////////////////////////////////////day 4///////////////////////////////////////////////////////////////////////////////////////////

// function findSmallest(arr) {
//     let smallest = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < smallest) {
//             smallest = arr[i];
//         }
//     }

//     return smallest;
// }

// let numbers = [5, 2, 8, 0, 9, 3];
// console.log(findSmallest(numbers));

// function count(para) {
//     let words = para.trim().split("");

//     return words.length;

// };
// console.log(count("osama sayyed ismail"))

// function unique(arr) {

//     return new Set(arr).size === arr.length;

// }

// console.log(unique([1,2,3,4,5,6,7,2]))

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////////////////day 5////////////////////////////////////////////////////////////////////////////////////////////

// function longestWord(para) {
//   let words = para.split(" ");
//   let fullWords = "";

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > fullWords.length) {
//       fullWords = words[i];
//     }
//   }

//   return fullWords;
// }
// console.log(longestWord("osama sayyed ismailijndnij"));





// function uniqueCharecter(para) {

//     let obj = {}

//     for (let char of para){
//         obj[char] = (obj [char] || 0) + 1;

//     }
// let uniqueChars = "";

// for(let char of para){
//     if(obj[char] === 1) {
//         uniqueChars +=char;
//     }
// }
// return uniqueChars;
// }

// console.log(uniqueCharecter("laaaaalkjwen"))



// function onlyDigit(str) {
//     for(let char of str){

//         if(char < '0' || char > '9'){
//             return false;
//         }
//     }
//     return true;

// }

// console.log(onlyDigit("abc123"))



// ////////////////////////////////////////////////////////////////////////////day 6////////////////////////////////////////////////////////////////////////////////////////////

// function sortKey(obj){

//     return Object.keys(obj)

//     .sort()
//     .reduce ((acc,key)=>{
//         acc[key] = obj[key]
//         return acc;
//     }, {});

// }

// const unsortedObj = {c:3, a:1, d:4, b:2}

// const sorted = sortKey(unsortedObj);
// console.log(sorted)




// function maxValue(arr,property) {
//     if(!Array.isArray(arr) || arr.length == 0) return null;

// const value = arr

// .map(obj => obj[property])
// .filter(val => typeof val === "number")

// return value.length ? Math.max(...value) : null;

// }

// const data = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 28 }
// ];

// console.log(maxValue(data,"age"))

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// /////////////////////////////////////////////////////////////////////Day 7///////////////////////////////////////////////////////////////////////////////////////////////////

// function checkAnagram(str1,str2) {
    
//     str1=str1.toLowerCase()
//     str2=str2.toLowerCase()

//     let sorted1 = str1.split("").sort().join("")
//     let sorted2 = str2.split("").sort().join("")

// return sorted1 === sorted2
// }
// console.log(checkAnagram("osama","amaso"))



// function missingNumber(arr) {
//     let n = arr.length +1   

//     let total = (n *(n + 1)) / 2;


//     let arrsum = 0;

//     for(let i = 0; i < arr.length; i++){
//         arrsum += arr[i]

//     }

//     return total - arrsum

// }
// console.log(missingNumber ([1,2,4,5,6,7,8,9]))

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// /////////////////////////////////////////////////////////////////////Day 8///////////////////////////////////////////////////////////////////////////////////////////////////


// function rotateRight(arr,k) {
//     let n = arr.length;

//     k = k % n;
//     for(let i = 0 ; i < k ; i++){
//         let last  = arr.pop();
//         arr.unshift(last);

//     }

//     return arr;
    
// }

// console.log(rotateRight([1,2,3,4,5],2))



// function soted(arr1,arr2) {
 
//     return [...arr1,...arr2].sort((a,b) => a-b)
// }
// console.log(soted([1,3,5,7,9], [2,4,6,8,15]))

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// /////////////////////////////////////////////////////////////////////Day 9///////////////////////////////////////////////////////////////////////////////////////////////////



// function arr1(arr) {
//     const zero =arr.filter(num => num !== 0)
//  let zeroCount = arr.length - zero.length;
// return [...zero, ...Array(zeroCount).fill(0)]
// }
// let arr = [1,2,5,7,0,5,43,5,0,5,3,0,4]

// console.log(arr1(arr))



// function interSection (arr1,arr2){
// return arr1.filter(num => arr2.includes(num))

// }

// let arr1 = [1,2,3,4,5]
// let arr2 = [8,6,5,3,2]

// console.log(interSection(arr1,arr2))

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// /////////////////////////////////////////////////////////////////////Day 10///////////////////////////////////////////////////////////////////////////////////////////////////

// function binary(n) {
//     return n.toString(2)
    
// }
// console.log(binary(4))
// console.log(binary(7))


// function falsy(arr) {
    
//     return arr.filter(Boolean)
// }
// console.log(falsy([0,false,2,"",true,NaN,undefined,null]))

// /////////////////////////////////////////////////////////////////////Day 11///////////////////////////////////////////////////////////////////////////////////////////////////

// let a = [1,2,3]
// let b = a;
// b.push(4)

// console.log(b)



// function outer (){
//     let count = 0;

//     return function inner(){
//         count ++;
//         console.log(count)
//     }
// }

// const counter1 = outer();
// counter1()
// counter1()

// const counter2 = outer()

// counter2();
// counter1();


// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
