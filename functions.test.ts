const {shuffleArray} = require('./utils')
let testArr = ["a","b","c","d"]

describe('shuffleArray should', () => {
    test('should return length of argument',() => {
        let restults = shuffleArray(testArr)
        expect(testArr.length).toEqual(restults.length )
    }); 

    test ('should return same as passed arrate', () => {
        expect(shuffleArray(testArr)).toEqual(expect.arrayContaining(testArr))
    }); 

})