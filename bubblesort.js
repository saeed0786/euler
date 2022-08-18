//loop  all over elements in array
const recursiveBubbleSort = require('./recursiveBubbleSort.js')
function bubbleSort(arr){
    //return the orignal array, sorted
    for(let i=0; i<arr.length; i++){
        let done = true
        for(let j=0; j<arr.length; j++){
        if(arr[j]>arr[j+1]){
            done = false
            let temp = arr[j]

            //set current element to value of next element
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
        console.log('i: ${i}, j:${j}')
    }
}
    return arr
    
}


modeule.exports = bubbleSort