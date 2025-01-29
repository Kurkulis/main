
console.log('================ objekt fabrik ==================');
console.log('=============== 1.1 uzduotis=============');

function darbuotojasMain(vardas, pavarde, dabartinisAtlyginimas, etatas) {
    return {
    vardas: vardas,
    pavarde: pavarde,
    dabartinisAtlyginimas: dabartinisAtlyginimas,
    etatas: etatas,

    pakeltAtlyg(procentai) {
        const padidejimas = this.dabartinisAtlyginimas * procentai / 100;
        return this.dabartinisAtlyginimas + padidejimas;
    },

    pakeistEtat(naujasEtat) {
        return this.dabartinisAtlyginimas * naujasEtat;
    }
};
}

const darbuotojai = [
    darbuotojasMain("Jonas", "Jonaitis", 1500, 1),
    darbuotojasMain("Austėja", "Petraitytė", 1200, 0.75),
    darbuotojasMain("Mantas", "Jankauskas", 2000, 1)
];

darbuotojai.forEach(darbuotojas => {
    console.log(`darbuotojas - ${darbuotojas.vardas}, ${darbuotojas.pavarde}`);
    console.log(`dabartinis atlyginimas - ${darbuotojas.dabartinisAtlyginimas}`);
    console.log(`etatas - ${darbuotojas.etatas}`);

    const naujAtlygi = darbuotojas.pakeltAtlyg(10);
    console.log(`Jei atlyginimas pakiltų 10%, būtų: ${naujAtlygi} EUR`);

    const pakeiAtlygi = darbuotojas.pakeistEtat(0.5);
    console.log(`Jei etatas būtų sumažintas iki 0.5, atlyginimas būtų: ${pakeiAtlygi} EUR`);
    console.log('     ')
})
