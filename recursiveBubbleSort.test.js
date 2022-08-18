// import bubble sort
const recursiveBubbleSort = require('./recursiveBubbleSort.js')

describe('Bubble sort', () => {
    // sorts an empty array
    it('sort empty array', ()=> {
        expect(recursiveBubbleSort([])).toEqual([]);
    })

    // sorts an array of one element
    it('sort one element array', ()=> {
        expect(recursiveBubbleSort([55])).toEqual([55]);
    })

    // sorts an array of many elements
    it('sort many element array', ()=> {
        expect(recursiveBubbleSort([89,12,98,-11,40,5,26])).toEqual([-11,5,12,26,40,89,98]);
    })
})