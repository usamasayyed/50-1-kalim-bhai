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


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

