// Suppose we want to write a function that calculates the sum of all numbers from 1 up to some number n
// function addUpTo(n) {
//     let total = 0;
//     for( let i = 1; i <= n; i++) {
//         total += i;
//     }
//     return total;
// }
// // console.log(addUpTo(5));

// function addUpTo(n) {
//     return n *(n+1)/2;
// }

function bubbleSort(arr){
    var noSwaps;
    for(var i = arr.length; i > 0; i--){
      noSwaps = true;
      for(var j = 0; j < i - 1; j++){
        if(arr[j] > arr[j+1]){
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          noSwaps = false;         
        }
      }
      if(noSwaps) break;
    }
    return arr;
  }
  
  bubbleSort([8,1,2,3,4,5,6,7]);