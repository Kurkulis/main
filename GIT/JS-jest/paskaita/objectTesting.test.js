const [getName, getNameAndAge] = require('./objectTesting.js');

test('funkcija ', () => {
    expect(getName()).toEqual(
        {
            name: 'Jonas'
        }
    );
})

test('funkcija 2', () => {
    expect(getNameAndAge('Mantas', 20)).toEqual(
        {
        name: 'Mantas',
        age: 20
        }
        )
    ;
})