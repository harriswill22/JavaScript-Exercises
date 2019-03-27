//Challenge 1: Reverse a String
//Return a string in reverse 

function reverseString(str){
// return str.split('')
// .reverse()
// .join('');

///////////////////////////
// let revString = '';
// for (let char of str){
//     revString = char +revString;
// }
// return revString;
// ///////////////////////////////////////
// let revString = " ";
// str.split('').forEach(char => revString = char + revString);
// return revString;
// ///////////////////////////////////////

}


//Challenge 2 Palindrome 

function isPalindrome(str) { 
    const revString = str.split('').reverse().join('')

    return revString === str;

}







const output = isPalindrome('hello')
console.log(output);
