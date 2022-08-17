// let arr1 = [-9, 2, 3, -5, 20]; //=> 11
// let arr2 = [1,2,[3,4,[5]],6]  //=>21
// function multiArraySum(arr){
//     let total = 0;
//     for(i=0; i<arr.length; i++){
//         total += arr[i];
//     }
//     return total
// }
// let test1 = multiArraySum(arr2)
// console.log(test2)


// let arr0 =[];
// let arr1 = [-9, 2, 3, -5, 20]; //=> 11
// let arr2 = [1,2,[3,4,[5]],6]  //=>21
//  function multiArraySum(arr, total=0){
//      //let total = 0;
//      if(arr.length<=0){
//        return total
//      }
//      //let last = arr.pop()

//      if(typeof last == "number"){
//         console.log(last)
//         return  multiArraySum(arr,total)
//      }
//      else{
//         console.log('Recursive accessing the array ${last}')
//      }
//     }
//     let test0 = multiArraySum(arr0);
//     console.log(test0);



//countdown to 1 using a for loop
function countdownFor(num){
    for(let i=num; i>0 ;i--){
      console.log(i)
    }
  }
  
  //refactored countdown to be a recursive function
  function countdown(num){
      //console log - because that's what this function does
      console.log(num)
      //base case - does not call itself
      if(num<=1){
          return 0
      } else {
          //recursive case - calls itself 
          return countdown(num-1)
      }
  }
  
  countdown(6)