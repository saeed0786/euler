 //If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//Find the sum of all the multiples of 3 or 5 below 1000.

// function sum_multiples_3_5(range){
//     let sum = 0
//     for(i=1; i <= range; i++){
//         if(i%3 ==0 || i%5 ==0){
//             sum += i;
//         }
//     }
//     return sum;
// }

// console.log(sum_multiples_3_5(1000))






// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

// function fib(n) {
//     if (n < 3) return 1;
//     let prev =1;  //3
//     let curr =1;  //5
//     // i = 3
//     for (let i =2; i < n; i++) {
//         const next = prev + curr;   //2+3 =5
//         prev = curr;  //3
//         curr = next;  //5
//     }
//     return curr;
// }
// console.log(fiboEvenSum(60));

// function countdown(num){
//     console.log(num)
//     if(num<=0){
//     return 0

// }
//  else {
//     return countdown(num-1)
//  }
// }
// countdown(1000)


// countdown(-2)


// var a = [1,2];
// var i = 0;
// var sum = 0;
// while (a[0] + a[1] < 4000000){
//     i = a[0] + a[1];
//     console.log(i); //just to show myself the number came out correctly.
//     a[0] = a[1];
//     a[1] = i;

//     if (i % 2 === 0){
//         sum += i;
//     }
// }
// console.log(sum + 2);




// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

let largestPrimeFactor =(number) => {
    let latestDiviser =2
    let quotient = number
    while(quotient % 2 ===0 ){
        
    }
    return latestDiviser

}
console.log('result is ' + largestPrimeFactor(13195))