//Challenge 1: Reverse a String
//Return a string in reverse 

function reverseString(str){
return str.split('')
.reverse()
.join('');

}
console.log(reverseString('hello'));
