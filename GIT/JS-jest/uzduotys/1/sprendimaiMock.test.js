const {antrojiFunkcija, pirmojiFunkcija, pirmojiFunkcija2,antrojiFunkcija2  } = require('./sprendimaiMock.js');

describe('1 uzd', () => {
    test('Patikrina, ar antroji funkcija buvo iškviesta', () => {
        const mockFunction = jest.fn(); // Sukuriame Jest mock funkciją

        pirmojiFunkcija(mockFunction); // Paduodame mock funkciją į pirmąją funkciją

        expect(mockFunction).toHaveBeenCalled(); // Tikriname, ar mock buvo iškviestas
    });

})
describe('2 uzd', () => {
    test('Patikrina, ar antroji funkcija buvo iškviesta su tam tikrais argumentais', () => {
        const mockFunction = jest.fn(); // Sukuriame Jest mock funkciją

        pirmojiFunkcija2(mockFunction); // Paduodame mock funkciją į pirmąją funkciją

        expect(mockFunction).toHaveBeenCalledWith("Labas", 42); // Tikriname argumentus
    });
})
describe('3 uzd', () => {

})

