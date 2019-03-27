//Challenge 1: Reverse a String
//Return a string in reverse 

function reverseString(str) {
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
    //     const revString = str.split('').reverse().join('')

    //     return revString === str;

}




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

    ///////////////////////////
    // return str 
    // .toLowerCase()
    // .split(' ')
    // .map(word => word[0].toUpperCase() + word.substr(1)
    // )
    // .join(' ');

}

// Challenge 5 MAX Character 

function maxCharacter(str) {

    // const charMap = {};
    // let maxNum = 0;
    // let maxChar = '';

    // str.split('').forEach(function (char) {  

    // if(charMap[char]) {
    //     charMap[char]++;
    // }else {
    //     charMap[char] = 1;
    // }
    // });


    // for (let char in charMap ) {
    //     if(charMap[char] > maxNum) {
    //     maxNum = charMap[char];
    //     maxChar = char;
    //     }
    // }
    // return maxChar;


}

function fizzBuzz() {

    for (let i = 1; i <= 100; i++) {
if(i % 15 === 0 ) {
    console.log('FizzBuzz');
} else if (i % 3 === 0) {
    console.log('Fizz');
    
}else if (i % 5 === 0) {
    console.log('FizzBuzz');
    
} else {
    console.log(i);
}

}
}




const output = fizzBuzz()
console.log(output);