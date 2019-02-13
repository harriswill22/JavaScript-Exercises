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

//Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

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

