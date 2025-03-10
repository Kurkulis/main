const { apskritimoPlotas, palindrome, bigNumber, kainosFunk } = require('./sprendimai.js');

describe('1 uzd', () => {
    test('apskritimoPlotas funkcija', async () => {

        expect(apskritimoPlotas(2)).toBeCloseTo(12.57, 2);
    
    })

})
describe('2 uzd', () => {
    test('palindrome funkcija', async () => {
        expect(palindrome("A man, a plan, a canal. Panama")).toBe(true);
    })
})
describe('3 uzd', () => {
    test('bigNumber funkcija', async () => {
        expect(bigNumber([-1,-2,-3,-4,-5,-6,-7,-8,-9])).toBe(-1);
    })
    test('bigNumber funkcija', async () => {
        expect(bigNumber([1,2,3,4,5,6,7,8,9])).toBe(9);
    })
    // test('bigNumber funkcija', async () => {
    //     expect(bigNumber([])).toBe(1);
    // })
    // test('bigNumber funkcija', async () => {
    //     expect(bigNumber(['bazaras'])).toBe(1);
    // })
})
describe('4 uzd', () => {
    
    test('ar turi kaina', async () => {
        let daiktas = {pavadinimas: 'dviratis'}
        expect(kainosFunk(daiktas)).toEqual({pavadinimas: 'dviratis', kaina: 50})
    })


})
describe('5 uzd', () => {

})
describe('6 uzd', () => {

})
