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
// Challenge 6 Fizz

function fizzBuzz() {

//     for (let i = 1; i <= 100; i++) {
// if(i % 15 === 0 ) {
//     console.log('FizzBuzz');
// } else if (i % 3 === 0) {
//     console.log('Fizz');
    
// }else if (i % 5 === 0) {
//     console.log('FizzBuzz');
    
// } else {
//     console.log(i);
// }

// }

}

// Challenge 7 LongestWord

function  longestWord(sen) {  

//     const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
// //Sort by length
//     const sorted = wordArr.sort((a,b) => b.length - a.length
//     );
// // if multiple words, put into array
//     const longestWordArr = sorted.filter(word =>
//         word.length === sorted[0].length
//     );

// // check of more than one array val
// if(longestWord.length === 1) {
//     return longestWordArr[0]

// }return longestWord;

}

// Challenge 8 Array Chunking 

function chunkArray(arr, len) {

// Init chunked arr
// const chunkedArr = [];
// // Set index
// let i = 0;
// //Loop while index is less than the array length 
// while(i < arr.length){
//     //Slice out from the index to the index + the chunk length and push to the chinked array
//     chunkedArr.push(arr.slice(i, i + len))
//     // Increment by chink length 
//     i += len;
// }
// return chunkedArr;

// Solution 2 

const chunkedArr = []

// arr.forEach(val => {
//     const last = chunkedArr[chunkedArr.length -1];
    
//     //Checked if last and if last length is equal tot he chunk len
//     if(!last || last.length === len){
//         chunkedArr.push([val])
//     }else {
//         last.push(val);
//     }
// });
// return chunkedArr;

}

function flattenArray(arrays) {  
    //Solution 1 
// return arrays.reduce(function (a,b) { 
//     return a.concat(b)

// })

//Solution 2
// return [].concat.apply([], arrays)

// Solution 3
// return [].concat(...arrays)

}

function isAnagram(str1, str2) { 
// return formatStr(str1) === formatStr((str2))


// }
// function formatStr(str) { 
//     return str 
//     .replace(/[^\w]/g, '')
//     .toLowerCase()
//     .split('')
//     .sort()
//     .join('');
}
function letterChanges(str) { 
// let newStr = str.replace(/[a-z]/gi, function(char){
//     if(char == 'z'|| char === 'Z') {
//         return 'a';
//     }else {
//         return String.fromCharCode(char.CharCodeAt() + 1);
//     }
// });
// return newStr;
}


function addAll(...numbers) {  
// let total = 0;
// numbers.forEach(num=> (total += num)
// )
// return total;
// return numbers.reduce((acc, cur) => + cur)
}
// console.log(addAll(2,5,6,7));

function sumAllPrimes(num) {
// let total = 0;

// function checkForPrime(i) { 
//     for(let j = 2; j < i; j++){
//         if(i % j === 0) {
//         return false
//     }

//     }
//     return true
//  }

// for(let i = 2; i <=num; i++ ){
// if(checkForPrime(i)){
//     total += i;
//     }
// }
// return total

}
// console.log(sumAllPrimes(10));

function seekAndDestroy(arr, ...rest) { 
// return arr.filter(val => !rest.includes(val))

}

// console.log( seekAndDestroy([2,3,4,6,6,'hello'], 2,6, 'hello')); 

function sortByHeight() { 
// const arr1 = [];
// const arr2 = [];

// a.forEach((val, i) =>{
//     if(val === -1){
//         arr1.push(i)
//     }else {
//         arr2.push(val);
//     }

// });

// const sortArr = arr2.sort((a,b) => a-b);

// arr1.forEach((val, i) => sortArr.splice(arr[i], 0, -1))

// return sortArr;

}

// const a = [-1, 150, 190, 170, -1,-1,160,180];
// console.log(sortByHeight(a));

function missingLetters(str) {
    // let compare = str.charCodeAt(0);
    // let missing; 

    // str.split('').map((char, i) =>{
    //     if(str.charCodeAt(i) === compare) {
    //         ++compare;
    //     }else{
    //         missing = String.fromCharCode(compare)
    //     }
    // });
    // return missing;
}

// console.log(missingLetters('abceelmapwalf'));






const output = addAll((2,5,6,7))
console.log(output);