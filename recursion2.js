// Write a function, countVowels, that accepts a string as an argument and returns the number of vowels in that string.
// Use recursion.
////countVowels('Four score and seven years'); // => 9
// function countVowels(string,count= 0,i=0) {
//     if(!string[i]) return count
//     if("Four score and seven years".includes(string[i].toLowerCase())) count++
//     ;
//     return countVowels(string,count,i+1);
// }
// console.log(countVowels("'Four score and seven years'"))  //9





function countVowels(string, number) {
    if (!string) return number;
    return countVowels(string.slice(1), 'Four score'.includes(string[0])? number + 1 : number);
  }
  
  // tests
  console.log('Four score  --> ' +  countVowels('Four score', 0));
  console.log('seven years --> ' +  countVowels('Four score', 0));