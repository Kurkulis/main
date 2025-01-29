
console.log('================ objektai ==================');
console.log('=============== 1.1 uzduotis=============');

let studentas = {
    vardas: 'Jonas',
    pavardė: 'Jonauskas', 
    amžius: 12, 
    studijų_programa: 'medicina', 
    atsiskaitytų_kreditų_skaičius: '3000', 
    pažymiai: [1,2,3,4,5,6,7,8,9,10], 
    ūgis: 1.83, 
    kelintame_kurse_mokosi: 2, 
    kurioje_mokykloje_mokosi: 'kazkokioj'
};

console.log(studentas);
console.log(studentas.vardas);
console.log(studentas.amžius);
console.log(studentas.ūgis);

console.log('=============== 1.2 uzduotis=============');

let filmas = {
    pavadinimas: "Inception",
    rezisierius: "Christopher Nolan",
    biudzetas: 160000000,
    uzdarbis: 829895144,  
    zanras: "Mokslinė fantastika, Trileris",
    trukme: 148,          
    isleidimoMetai: 2010,
    aktoriai: [           
        "Leonardo DiCaprio",
        "Joseph Gordon-Levitt",
        "Elliot Page",
        "Tom Hardy",
        "Ken Watanabe",
        "Marion Cotillard",
        "Cillian Murphy",
        "Michael Caine"
    ]
};

console.log(filmas);
console.log('Filmo pelnas -' , filmas.uzdarbis - filmas.biudzetas);
console.log('aktoriu kiekis' , filmas.aktoriai.length);
console.log('filmo amzius -' , 2025 - filmas.isleidimoMetai);

console.log('=============== 1.3 uzduotis=============');

let knyga1 = {
    pavadinimas: "Haris Poteris ir išminties akmuo",
    autorius: "J.K. Rowling",
    zanras: "Fantastika",
    kaina: 15.99, 
    puslapiuKiekis: 309,
    skyriai: [
        "Berniukas, kuris išgyveno",
        "Veidrodis, atskleidžiantis tiesą",
        "Išminties akmuo"
    ],
    isleidimoMetai: 1997,
    arPrieinamaKnygynuose: true
};

let knyga2 = {
    pavadinimas: "Žiedų valdovas: Žiedo brolija",
    autorius: "J.R.R. Tolkien",
    zanras: "Fantastika",
    kaina: 19.99,
    puslapiuKiekis: 423,
    skyriai: [
        "Šeimininkas žiedo",
        "Pradžia kelionės",
        "Rivendelio taryba"
    ],
    isleidimoMetai: 1954,
    arPrieinamaKnygynuose: true
};

console.log(knyga1);
console.log(knyga2);

if (knyga1.puslapiuKiekis > knyga2.puslapiuKiekis) {
    console.log('knyga 1 didesne puslapiais');
} else if (knyga1.puslapiuKiekis > knyga2.puslapiuKiekis){
    console.log('knyga 1 ir 2 turi vienodai puslapiu');
} else {
    console.log('knyga 2 didesne puslapiais');
}

if (knyga1.skyriai.length > knyga2.skyriai.length) {
    console.log('knyga 1 didesne skyriais');
} else if (knyga1.skyriai.length === knyga2.skyriai.length) {
    console.log('knyga 1 ir 2 turi vienodai skyriu');
} else {
    console.log('knyga 2 didesne skyriais');
}

if (knyga1.kaina * 2 > knyga2.kaina) {
    console.log('padvigubinos pirmos knygos kaina ji yra didesne uz antros');
} else {
    console.log('padvigubinos pirmos knygos kaina ji yra mazesne uz antros');
}

console.log('=============== 1.4 uzduotis=============');

const preke1 = {
    pavadinimas: "Nešiojamas kompiuteris",
    kaina: 899.99,        
    savikaina: 750.00,    
    kodas: "LT123456",
    sandelioKiekis: 25,   
    dezesMatmenys: {     
        x: 40,           
        y: 30,            
        z: 5              
    }
};

const preke2 = {
    pavadinimas: "Išmanusis telefonas",
    kaina: 499.99,   
    savikaina: 350.00, 
    kodas: "PH654321",
    sandelioKiekis: 50,  
    dezesMatmenys: {    
        x: 20,         
        y: 10,          
        z: 3             
    }
};

const preke3 = {
    pavadinimas: "Bevielė pelė",
    kaina: 29.99,       
    savikaina: 15.00,    
    kodas: "MS987654",
    sandelioKiekis: 100, 
    dezesMatmenys: {     
        x: 15,         
        y: 8,           
        z: 5           
    }
};

console.log(preke1);
console.log(preke2);
console.log(preke3);

console.log(`pirma preke kainuoja ${preke1.kaina}, antra preke kainuoja ${preke2.kaina}, trecia preke kainuoja ${preke3.kaina}`);

if (preke1.kaina > preke2.kaina && preke1.kaina > preke3.kaina) {
    console.log(`${preke1.pavadinimas} yra brangiausia preke - ${preke1.kaina}`);
} else if (preke2.kaina > preke1.kaina && preke2.kaina > preke3.kaina) {
    console.log(`${preke2.pavadinimas} yra brangiausia preke - ${preke2.kaina}`);
} else {
    console.log(`${preke3.pavadinimas} yra brangiausia preke - ${preke3.kaina}`);
}

console.log(`1 prekes dezes turis - ${preke1.dezesMatmenys.x * preke1.dezesMatmenys.z * preke1.dezesMatmenys.y}`)
console.log(`2 prekes dezes turis - ${preke2.dezesMatmenys.x * preke2.dezesMatmenys.z * preke2.dezesMatmenys.y}`)
console.log(`3 prekes dezes turis - ${preke3.dezesMatmenys.x * preke3.dezesMatmenys.z * preke3.dezesMatmenys.y}`)

console.log(`1 prekes pelningumas - ${(preke1.kaina - preke1.savikaina) * preke1.sandelioKiekis}`);
console.log(`2 prekes pelningumas - ${(preke2.kaina - preke2.savikaina) * preke2.sandelioKiekis}`);
console.log(`3 prekes pelningumas - ${(preke3.kaina - preke3.savikaina) * preke3.sandelioKiekis}`);

console.log('=============== 1.5 uzduotis=============');

let automobilis = {};

automobilis.marke = "Toyota";
automobilis.modelis = "Corolla";
automobilis.rida = 120000;         
automobilis.gamybosMetai = 2015;
automobilis.spalva = "Pilka";
automobilis.darbinisTuris = 1.8;  
automobilis.arDauzta = false;     
automobilis.arParduodama = true;    

console.log(automobilis);

console.log('automobilio amzius - ' , 2025 - automobilis.gamybosMetai);
console.log(`vidutinis nuvaziavimas per metus - ${automobilis.rida / (2025 - automobilis.gamybosMetai)}`);

console.log('=====================================================================================================');
console.log('=============== 2.1 uzduotis=============');

const knygynas = {
    pavadinimas: "Knygų Oazė",
    adresas: "Gedimino pr. 12, Vilnius",
    plotas: 250,               
    knyguKiekis: 5000,      
    darboValandos: "9:00 - 18:00",
    arAtidarytas: true      
};

for (let raktas in knygynas) {
    console.log(`${raktas}: ${knygynas[raktas]}`);
}

console.log("\nSavybės, kurių reikšmės nėra string tipo:");
for (let raktas in knygynas) {
    if (typeof knygynas[raktas] !== "string") {
        console.log(`${raktas}: ${knygynas[raktas]}`);
    }
}

console.log('=============== 2.2 uzduotis=============');

const studentas1 = {
    vardas: "Jonas",
    pavarde: "Jonaitis",
    studijuPrograma: "Informatika",
    pazymiai: [8, 9, 7, 10, 9]
};

const studentas2 = {
    vardas: "Austėja",
    pavarde: "Petraitytė",
    studijuPrograma: "Matematika",
    pazymiai: [9, 10, 9, 8, 10]
};

// Funkcija vidurkiui apskaičiuoti
let suma1 = 0;
for (let belekas1 of studentas1.pazymiai) {
    suma1 += belekas1;
}
let suma2 = 0;
for (let belekas2 of studentas2.pazymiai) {
    suma2 += belekas2;
}


// Apskaičiuojami abiejų studentų pažymių vidurkiai
const vidurkis1 = suma1 / studentas1.pazymiai.length;
const vidurkis2 = suma2 / studentas2.pazymiai.length;

// Išvedama abiejų studentų informacija ir jų vidurkiai
console.log("Studento 1 informacija:", studentas1);
console.log("Studento 1 pažymių vidurkis:", vidurkis1);

console.log("Studento 2 informacija:", studentas2);
console.log("Studento 2 pažymių vidurkis:", vidurkis2);

// Randama, kurio studento pažymių vidurkis didesnis
if (vidurkis1 > vidurkis2) {
    console.log(`Didžiausią vidurkį turi: ${studentas1.vardas} ${studentas1.pavarde}`);
} else if (vidurkis2 > vidurkis1) {
    console.log(`Didžiausią vidurkį turi: ${studentas2.vardas} ${studentas2.pavarde}`);
} else {
    console.log("Abiejų studentų pažymių vidurkiai yra vienodi.");
}
console.log('=====================================================================================================');
console.log('=============== 3.1 uzduotis=============');

const knygos = [
    {
        pavadinimas: "Haris Poteris ir išminties akmuo",
        autorius: "J.K. Rowling",
        puslapiuSkaicius: 309
    },
    {
        pavadinimas: "Žiedų valdovas: Žiedo brolija",
        autorius: "J.R.R. Tolkien",
        puslapiuSkaicius: 423
    },
    {
        pavadinimas: "Mažasis princas",
        autorius: "Antoine de Saint-Exupéry",
        puslapiuSkaicius: 96
    }
];

console.log("Visos knygos:");
console.log(knygos);

console.log("\nPirma knyga:");
console.log(knygos[0]);


console.log("\nAntros knygos autorius:");
console.log(knygos[1].autorius);


console.log('=============== 3.2 uzduotis=============');

const prekes = [
    {
        pavadinimas: "Nešiojamas kompiuteris",
        kaina: 899.99,
        gamintojas: "Dell"
    },
    {
        pavadinimas: "Išmanusis telefonas",
        kaina: 499.99,
        gamintojas: "Samsung"
    },
    {
        pavadinimas: "Bevielė pelė",
        kaina: 29.99,
        gamintojas: "Logitech"
    }
];

console.log("Prekiu sarasas:");
prekes.forEach(preke => {
    console.log(`Pavadinimas: ${preke.pavadinimas}`);
    console.log(`Kaina: ${preke.kaina} EUR`);
    console.log(`Gamintojas: ${preke.gamintojas}`);
    console.log("--------------------");
});

console.log('=============== 3.3 uzduotis=============');

const automobiliai = [
    {
        pavadinimas: "Toyota Corolla",
        gamybosMetai: 2015
    },
    {
        pavadinimas: "Volkswagen Golf",
        gamybosMetai: 2012
    },
    {
        pavadinimas: "AUDI A5",
        gamybosMetai: 2018
    }
];

const Metai = new Date().getFullYear();

console.log("Automobiliu sarasas:");
automobiliai.forEach(automobilis => {
    const amzius = Metai - automobilis.gamybosMetai;
    console.log(`Pavadinimas: ${automobilis.pavadinimas}`);
    console.log(`Gamybos metai: ${automobilis.gamybosMetai}`);
    console.log(`Amzius: ${amzius} metai`);
    console.log(" ");
});

console.log('=====================================================================================================');
console.log('=============== 4.1 uzduotis=============');

const imones = [
    {
        pavadinimas: "TechSolutions",
        ikurimoMetai: 2010,
        darbuotojuKiekis: 50,
        metinisPelnas: 1200000
    },
    {
        pavadinimas: "EcoFarms",
        ikurimoMetai: 2015,
        darbuotojuKiekis: 20,
        metinisPelnas: 450000
    },
    {
        pavadinimas: "BuildIt",
        ikurimoMetai: 2005,
        darbuotojuKiekis: 80,
        metinisPelnas: 2500000 
    }
];
let amziausVidurkius = 0;
let bendrasPelnasImon = 0;
let darbuotojSkaic = 0;

imones.forEach(imone =>  {
    amziausVidurkius += imone.ikurimoMetai;
    console.log(`Imone "${imone.pavadinimas}" buvo ikurta ${imone.ikurimoMetai} metais. imone turi ${imone.darbuotojuKiekis} darbuotojų ir per metus uzdirba ${imone.metinisPelnas} EUR.`);
    bendrasPelnasImon += imone.metinisPelnas;
    darbuotojSkaic += imone.darbuotojuKiekis;
    console.log(" ");
});

console.log(`vidutinis imones amzius: ${amziausVidurkius / imones.length} metai`);
console.log(" ");
console.log(`darbuotojus skaicius per visas imones: ${darbuotojSkaic} darbuotojai`);
console.log(" ");
console.log(`imoniu bendras pelnas: ${bendrasPelnasImon} eurai`);
console.log(" ");

console.log('=============== 4.2 uzduotis=============');

const ligonines = [
    {
        pavadinimas: "Centrinė miesto ligoninė",
        adresas: "Gedimino pr. 1, Vilnius",
        darbuotojuKiekis: 250,
        lankytojuKiekis: 5000
    },
    {
        pavadinimas: "Rajono poliklinika",
        adresas: "Aušros g. 15, Kaunas",
        darbuotojuKiekis: 100,
        lankytojuKiekis: 3000
    },
    {
        pavadinimas: "Sveikatos centras",
        adresas: "Laisvės al. 25, Klaipėda",
        darbuotojuKiekis: 150,
        lankytojuKiekis: 4000
    }
];

let bendriLankytojai = 0;
let vidutiniaiLankytojai = 0;
let bendriDarbuotojai = 0;
let vidutiniaiDarbuotojai = 0;

ligonines.forEach(liga =>  {
    bendriLankytojai += liga.lankytojuKiekis;
    vidutiniaiLankytojai += liga.lankytojuKiekis;
    bendriDarbuotojai += liga.darbuotojuKiekis;
    vidutiniaiDarbuotojai += liga.darbuotojuKiekis;
    console.log(`Ligonine - "${liga.pavadinimas}". \nAdresas - ${liga.adresas}.`);
    console.log(" ");
});
console.log(`Bendri lankytojai - ${bendriLankytojai}`);
console.log(" ");
console.log(`Bendri darbuotuojai - ${bendriDarbuotojai}`);
console.log(" ");
console.log(`Vidutiniai lankytojai - ${vidutiniaiLankytojai / ligonines.length}`);
console.log(" ");
console.log(`Vidutiniai darbuotuojai - ${Math.round(vidutiniaiDarbuotojai / ligonines.length)}`);
console.log(" ");
console.log('=====================================================================================================');
console.log('=============== 5.1 uzduotis=============');

const studentai = [
    {
        vardas: "Jonas",
        pavarde: "Jonaitis",
        amzius: 21,
        pazymiai: [8, 9, 7, 10],
        studijuPrograma: "Informatika",
        kursas: 3
    },
    {
        vardas: "Austėja",
        pavarde: "Petraitytė",
        amzius: 20,
        pazymiai: [9, 10, 8, 10],
        studijuPrograma: "Matematika",
        kursas: 2
    },
    {
        vardas: "Mantas",
        pavarde: "Jankauskas",
        amzius: 22,
        pazymiai: [6, 7, 8, 9],
        studijuPrograma: "Biologija",
        kursas: 4
    }
];
bendraSuma = 0;
bendrasPazymKiek = 0;
for (studentas of studentai) {
    console.log(`vardas - ${studentas.vardas}, pavarde - ${studentas.pavarde}, amzius - ${studentas.amzius}, programa - ${studentas.studijuPrograma}, kursas - ${studentas.kursas}`)
    console.log(`pazimiai - ${studentas.pazymiai}`);
    suma = 0;
    for (pazym of studentas.pazymiai) {
        suma += pazym;
    }
    console.log(`pazimiu vidurkis - ${(suma / studentas.pazymiai.length).toFixed(2)}`);
    console.log("--------------------");
    bendraSuma += suma;
    bendrasPazymKiek +=studentas.pazymiai.length;
}
console.log(`bendras vidurkis - ${bendraSuma / bendrasPazymKiek}`)


console.log('=============== 5.2 uzduotis=============');

const parduotuve = {
    pavadinimas: "Prekių pasaulis",
    adresas: "Gedimino pr. 10, Vilnius",
    darbuotojuKiekis: 25,
    prekes: [
        {
            pavadinimas: "Nešiojamas kompiuteris",
            kodas: "LT123456",
            kaina: 899.99,
            savikaina: 750.00,
            kiekis: 10
        },
        {
            pavadinimas: "Išmanusis telefonas",
            kodas: "PH654321",
            kaina: 499.99,
            savikaina: 350.00,
            kiekis: 20
        },
        {
            pavadinimas: "Bevielė pelė",
            kodas: "MS987654",
            kaina: 29.99,
            savikaina: 15.00,
            kiekis: 50
        }
    ]
};

console.log(`perduotuve - ${parduotuve.pavadinimas}, adresas - ${parduotuve.adresas}, darbuotoju kiekis - ${parduotuve.darbuotojuKiekis}, skirtingu prekiu - ${parduotuve.prekes.length}`);
console.log("--------------------");
console.log(`prekės:`);

bendrasKiekis = 0;

for (daiktai of parduotuve.prekes) {
    console.log(`prekes pavadinimas - ${daiktai.pavadinimas}, kaina - ${daiktai.kaina}, kiekis - ${daiktai.kiekis}`)
    bendrasKiekis += daiktai.kiekis;
    console.log(" ");
}
console.log(`bendras prekiu kiekis - ${bendrasKiekis}`);
if (parduotuve.prekes[0].kiekis > parduotuve.prekes[1].kiekis && parduotuve.prekes[0].kiekis > parduotuve.prekes[2].kiekis) {
    console.log(`prekes ${parduotuve.prekes[0].pavadinimas} yra daugiausiai`)
} else if (parduotuve.prekes[1].kiekis > parduotuve.prekes[0].kiekis && parduotuve.prekes[1].kiekis > parduotuve.prekes[2].kiekis) {
    console.log(`prekes ${parduotuve.prekes[1].pavadinimas} yra daugiausiai`)
} else {
    console.log(`prekes ${parduotuve.prekes[2].pavadinimas} yra daugiausiai`)
}

if (parduotuve.prekes[0].kiekis < parduotuve.prekes[1].kiekis && parduotuve.prekes[0].kiekis < parduotuve.prekes[2].kiekis) {
    console.log(`prekes ${parduotuve.prekes[0].pavadinimas} yra maziausiai`)
} else if (parduotuve.prekes[1].kiekis < parduotuve.prekes[0].kiekis && parduotuve.prekes[1].kiekis < parduotuve.prekes[2].kiekis) {
    console.log(`prekes ${parduotuve.prekes[1].pavadinimas} yra maziausiai`)
} else {
    console.log(`prekes ${parduotuve.prekes[2].pavadinimas} yra maziausiai`)
}

