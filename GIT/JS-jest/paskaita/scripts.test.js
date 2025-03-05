const [suma, atimti, daugyba] = require('./scripts.js');



test('funkcija grazina 5', () => {
    expect(suma(2,3)).toBe(5);
})

test('funkcija negrazina 5', () => {
    expect(suma(3,3)).not.toBe(5);
})

test('funkcija grazina 5', () => {
    expect(atimti(10,5)).toBe(5);
})

test('funkcija grazina 6', () => {
    expect(daugyba(2,3)).toBe(6);
})