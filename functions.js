//Write a JavaScript function that reverse a number
// function reverseANumber(number) {
//     number = number + ""
//     return number.split("").reverse().join("")
// }
// console.log(reverseANumber(123345));

//Write a JavaScript function that checks whether a passed string is palindrome or not?

// function reverse(value) {
//     value = value.toLowerCase()
//     const rev = value.split("").reverse("").join("")
//     if (value === rev) {
//         return "palindrome"
//     }
//     else {
//         return "is not palindrome"
//     }
// }
// console.log(reverse("hat"));

// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 

// function upperCase(str){
//     const array1 = str.split (' ')
//     let newArray1 = [];
    
//     for (let i = 0; i < array1.length; i++){
//         newArray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
//     }
//     return newArray1.join(' ')
// }
// console.log(upperCase('whole lotta gang'));

// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

// function vowelCount(str) {

//     vowelsList= 'AEIOUaeiou'
//     vowelCount = 0;

//     for(i = 0; i <str.length; i ++)

//     if(vowelsList.indexOf(str[i]) !== -1)
//     {
//         vowelCount +=1;
//     }
//     {
//         return vowelCount;
//     }
// }
// console.log(vowelCount("The quick brown fox"));

// function findLongestWord(str){


// const array1 = str.match(/\w[a-z]{0,}/gi)
// let result = array1[0];

// for( let i = 1; i <array1.length; i++) {

//     if(result.length < array1[i].length) {
//         result = array1[i];
//     }
// }
// return result;

// }
// console.log(findLongestWord('Web Development Tutorial'));

// function timeConversion(s) {
//     const time12 = Number(s.substring(0, 2))
//     if (s.substring(8, 10) === 'PM') {
//         let time24 = time12 + 12
//         if (time12 === 12) {
//             time24 = time12
//         }
//         return time24 + s.substring(2, 8)
        
//     } else {
//         if (time12 === 12) {
//             return '00' +  s.substring(2, 8)
//         }
//         if (time12 < 10) {
//             return '0' + time12 + s.substring(2,8)
//         }
//         return time12 + s.substring(2, 8) 
//     }

// }
// function fizzBuzz(num) {
// if(num % 3 === 0 ) {
//     return 'Buzz';
// }
// if (num % 15 === 0 ) {
//     return 'FizzBuzz';
// }
// if (num % 5 === 0 ) {
//     return 'Fizz';
// }

// return num.toString()

// }
// for (i = 0; i <= 100; i++) {
//     console.log(fizzBuzz(i));
    
// }

// Recursion 
// const factorial =  function fac (num) {
// if (num === 1 ) {
//     return 1;
// }

//     return num * fac(num -1)
// };

// const result = factorial(10)
// console.log(result);

