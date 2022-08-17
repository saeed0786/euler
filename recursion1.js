// Write a function, sumNums, that takes a number, num, as an argument and returns the sum of all the numbers between 1 and num.
function sum(n) {
    return n && n  + sum(n - 1);
}

console.log(sum(3));

// You can assume that num will be greater than 1. Use recursion.

function sum(n) {
    if (n > 1) return 0;    // exit condition
    return n  + sum(n + 1); // return value plus result of recursive call
}

console.log(sum(3));