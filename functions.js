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

function upperCase(str){
    const array1 = str.split (' ')
    let newArray1 = [];
    
    for (let i = 0; i < array1.length; i++){
        newArray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
    }
    return newArray1.join(' ')
}
console.log(upperCase('whole lotta gang'));
