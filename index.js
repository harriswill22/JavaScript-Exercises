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

// function isPalindrome(str) { 
//     const revString = str.split('').reverse().join('')

//     return revString === str;

// }




// Challenge 3: Reverse an Integer 
// function reverseInt(int) {  
//     const revString = int.toString().split('').reverse().join('');

//     return parseInt(revString) * Math.sign(int);
// }


// Challenge 4: Capitalize Letters
function capitalizeLetters(str) {
    
// const strArr = str.toLowerCase().split(' ');

// for (let i = 0; i <strArr.length; i++ ){
//     strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
// }
// return strArr.join(' ')


}






const output = capitalizeLetters('i love javascript')
console.log(output);
