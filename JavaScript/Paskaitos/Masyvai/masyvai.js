console.log('================ masyvai ==================');
console.log('=============== 1.1 uzduotis=============');

let masyvas = [1, 2, 3, 4, 5, 6, 7, 8, 9];


console.log(masyvas[0])
console.log(masyvas[8])
console.log(masyvas[4])
console.log(masyvas[5])
console.log(masyvas.length)

console.log('=============== 1.2 uzduotis============');

let masyvas2 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(masyvas2);
masyvas2[2] = 'pakeitimas';
masyvas2[4] = 'pakeitimas';
masyvas2[6] = 'pakeitimas';
console.log(masyvas2);

console.log('=============== 1.3 uzduotis============');

let masyvas3 = [];
masyvas3.push('pridejau viena');
masyvas3.push('pridejau kita');
masyvas3.push('pridejau dar kita');
console.log(masyvas3);

console.log('=============== 1.4 uzduotis============');
let masyvas4 = [];
masyvas4.push(Math.floor(Math.random() * 10));
masyvas4.push(Math.floor(Math.random() * 10));
masyvas4.push(Math.floor(Math.random() * 10));
masyvas4.push(Math.floor(Math.random() * 10));
masyvas4.push(Math.floor(Math.random() * 10));
console.log(masyvas4);
console.log('=============== 1.5 uzduotis============');

let studentas1 = [5, 6, 7, 8, 9];
let studentas2 = [10, 4, 8, 5, 10];
let suma1 = 0;

for (let i = 0; i < studentas1.length; i++) {
    suma1 += studentas1[i];
}
let vidurkis1 = suma1 / studentas1.length;
console.log("Studentas1 vidurkis:", vidurkis1);


let suma2 = 0;
for (let i = 0; i < studentas2.length; i++) {
    suma2 += studentas2[i];
}
let vidurkis2 = suma2 / studentas2.length;
console.log("Studentas2 vidurkis:", vidurkis2);

if (vidurkis1 > vidurkis2) {
    console.log('studneto 1 vidurkis didesnis')
} else if (vidurkis1 === vidurkis2) {
    console.log('vidurkiai lygus')
} else {
    console.log('studneto 2 vidurkis didesnis')
}

console.log('=====================================================================================================');
console.log('=============== 2.1 uzduotis============');

let programos = ["programavimas", "istorija", "kalbos", "verslas", "fizika"];
let p = 0;

console.log("----------WHILE------------");
while (p < programos.length) {
    console.log(programos[p]);
    p++;
}

console.log("------------FOR----------");

for (let p = 0; p < programos.length; p++) {
    console.log(programos[p]);
}
console.log('=============== 2.2 uzduotis============');

let salys = ["Lietuva", "Latvija", "Estija", "Lenkija"];
let o = 0;

console.log("----------WHILE------------");
while (o < salys.length) {
    console.log(`Šalis - ${salys[o]}`);
    o++;
}
console.log("------------FOR----------");
for (let o = 0; o < salys.length; o++) {
    console.log(`Šalis - ${salys[o]}`);
}

console.log('=============== 2.3 uzduotis============');

let projektai = ["E-parduotuvės kūrimas", "Mobilios programėlės kūrimas", "CRM sistemos diegimas", "Tinklaraščio svetainės kūrimas"]
let u = 0;

console.log("----------WHILE------------");
while (u < projektai.length) {
    console.log(`${u + 1} projektas - ${projektai[u]}`);
    u++;
}
console.log("------------FOR----------");

for (let u = 0; u < projektai.length; u++) {
    console.log(`${u + 1} projektas - ${projektai[u]}`);
}


console.log('=============== 2.4 uzduotis============');

let skaiciai24 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let y = 0;

console.log("----------WHILE------------");
while (y < skaiciai24.length) {
    if (skaiciai24[y] > 5) {
        console.log(skaiciai24[y]);
    }
    y++;
}
console.log("------------FOR----------");
for (let y = 0; y < skaiciai24.length; y++) {
    if (skaiciai24[y] > 5) {
        console.log(skaiciai24[y]);
    }
}

console.log('=============== 2.5 uzduotis============');

let skaiciai25 = [];
let t = 0;
let r = 0
let virs4suma = 0;
console.log("----------WHILE------------");

while (t < 10) {
    let randomsk = Math.floor(Math.random() * 10);
    skaiciai25.push(randomsk);
    t++
}
while (r < skaiciai25.length) {
    if (skaiciai25[r] > 4) {
        virs4suma += skaiciai25[r];
    }
    r++
}


console.log("------------FOR----------");
// for (let t = 0; t < 10; t++){
//     let randomsk = Math.floor(Math.random()*10);
//     skaiciai25.push(randomsk);
// }

// for (let r = 0;r < skaiciai25.length; r++) {
//     if (skaiciai25[r] > 4) {
//         virs4suma += skaiciai25[r];
//     }
// }

console.log('visi skaiciai -', skaiciai25)
console.log('suma -', virs4suma)

console.log('=============== 2.6 uzduotis - be for ============');

let pazymai26 = [];

t = 0;
while (t < 10) {
    let randompazymiai = Math.floor(Math.random() * 10);
    pazymai26.push(randompazymiai);
    t++
}
console.log('pazymiai -', pazymai26)
r = 0;
pazymiusuma = 0;
while (r < pazymai26.length) {
    pazymiusuma += pazymai26[r];
    r++
}
vidurkis = pazymiusuma / pazymai26.length
console.log('vidurkis -', vidurkis)


console.log('=============== 2.7 uzduotis - be for ============');

let pazymai27 = [];

t = 0;
while (t < 10) {
    let randompazymiai = Math.floor(Math.random() * 10);
    pazymai27.push(randompazymiai);
    t++
}
console.log('pazymiai -', pazymai27)
r = 0;
pazymiusuma = 0;
while (r < pazymai27.length) {
    pazymiusuma += pazymai27[r];
    r++
}
vidurkis = pazymiusuma / pazymai27.length
console.log('vidurkis -', vidurkis)


v = 0;
while (v < pazymai27.length) {
    if (pazymai27[v] > vidurkis) {
        console.log('didesni nei vidurkis pazymys -', pazymai27[v]);
    }
    v++
}

console.log('=============== 2.8 uzduotis============');

let skaiciai28 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

i = 0;
while (i < skaiciai28.length) {
    if (skaiciai28[i] % 2 === 0) {
        console.log(`skaicius - ${skaiciai28[i]}, jo kvadratas - ${skaiciai28[i] ** 2}`);
    } else {
        console.log(`skaicius - ${skaiciai28[i]}`);
    }
    i++;
}

// for (i=0; i < skaiciai28.length; i++) {
//     if (skaiciai28[i] % 2 === 0) {
//         console.log(`skaicius - ${skaiciai28[i]}, jo kvadratas - ${skaiciai28[i] ** 2}`);
//     } else {
//         console.log(`skaicius - ${skaiciai28[i]}`);
//     }
// }

console.log('=============== 2.9 uzduotis============');

let pazymai29 = [1, 2, 5, 8, 9, 10];

i = 0;
while (i < pazymai29.length) {
    if (pazymai29[i] >= 5) {
        console.log(`Teigiamas pazymys - ${pazymai29[i]}`);
    } else {
        console.log(`Neigiamas pazymys - ${pazymai29[i]}, truko ${5 - pazymai29[i]} balo iki teigiamo`);
    }
    i++;
}

// for (i=0;i < pazymai29.length;i++) {
//     if (pazymai29[i] >= 5) {
//         console.log(`Teigiamas pazymys - ${pazymai29[i]}`);
//     } else {
//         console.log(`Neigiamas pazymys - ${pazymai29[i]}, truko ${5 - pazymai29[i]} balo iki teigiamo`);
//     }
// }


console.log('=============== 2.10 uzduotis============');

let zodziai = ["katė", "šuo", "namas", "miškas", "upė", "kalnas", "gėlė", "dangus"];
let zenklu_skaicius = 0;
console.log(zodziai);

// z = 0;
// while ( z < zodziai.length) {
//     console.log(`zodis - ${zodziai[z]}, turi ${zodziai[z].length} raides`)
//     zenklu_skaicius += zodziai[z].length;    
//     z++;
// }

for (z = 0; z < zodziai.length; z++) {
    console.log(`zodis - ${zodziai[z]}, turi ${zodziai[z].length} raides`);
    zenklu_skaicius += zodziai[z].length;
}
console.log('visu zenklu skaicius', zenklu_skaicius)
console.log('=============== 2.11 uzduotis============');

let skaiciai211 = [12, 5, 9, 18, 22, 30, 7, 3, 15, 6];
suma = 0;
console.log(skaiciai211);

// for (i = 0;i < skaiciai211.length;i++ ) {
//     if (skaiciai211[i] % 3 === 0) {
//         suma += skaiciai211[i];
//         console.log(`skaicius - ${skaiciai211[i]} dalinasi is 3`)
//     }
// }

i = 0;
while (i < skaiciai211.length) {
    if (skaiciai211[i] % 3 === 0) {
        suma += skaiciai211[i];
        console.log(`skaicius - ${skaiciai211[i]} dalinasi is 3`)
    }
    i++
}

vidurkis = suma / skaiciai211.length;
console.log(`skaiciu kurie dalinasi is 3 vidurkis - ${vidurkis}`)
console.log(`skaiciu kurie dalinasi is 3 suma - ${suma}`);






console.log('=====================================================================================================');
console.log('=============== 3.1 uzduotis============');

let zodziai31 = ["katė", "šuo", "namas", "miškas", "upė", "kalnas", "gėlė", "dangus"];

for (const zodz in zodziai31) {
    console.log(zodz, '-', zodziai31[zodz]);
}

console.log('=============== 3.2 uzduotis============');

let pirkiniai = ["Duona", "Pienas", "Kiaušiniai", "Sviestas", "Miltai", "Cukrus", "Druska", "Obuoliai", "Bananai", "Makaronai"]

console.log('pirkiniu kiekis -', pirkiniai.length);

for (const pirk in pirkiniai) {
    console.log('-', pirkiniai[pirk]);
}
console.log('=============== 3.3 uzduotis============');

pazymiai = [8, 9, 7, 10, 6, 9, 8, 10, 7, 6];
suma = 0;

for (const pazimiai of pazymiai) {
    suma += pazimiai
}
vidurkis = suma / pazymiai.length;
console.log('pazymiai -', pazymiai);
console.log('vidurkis -', vidurkis);
console.log('=============== 3.4 uzduotis============');

let kelionesKilometrai = [120, 145, 90, 110, 135, 100, 95, 160, 155];

for (const virs150 of kelionesKilometrai) {
    if (virs150 >= 150) {
        console.log(virs150, 'daugiau uz 150')
    }
}

console.log('=============== 3.5 uzduotis============');
console.log('=============== 3.6 uzduotis============');

let autoMarkes = ["Toyota", "BMW", "Audi", "Mercedes", "Volkswagen"];

for (const markes of autoMarkes) {
    console.log(`${markes} - sudaro ${markes.length} zenklai`)
}

console.log('=============== 3.7 uzduotis============');

let klaiduKodai = ["ui87", "sys12", "db34", "net56", "auth90"];
let klaiduAprasymai = ["klaida1", "klaida2", "klaida3", "klaida4", "klaida5"]

index = 0;
for (const kodai of klaiduKodai) {
    console.log(`${kodai} : ${klaiduAprasymai[index]}`);
    index++;
}

console.log('=============== 3.8 uzduotis============');

let likutisProduktu = [74, 54, 35, 82];
let dienosPardavimai = 5;


for (const likutis of likutisProduktu) {
    console.log(`dabartinis likutis - ${likutis} bus isparduotas per ${likutis / dienosPardavimai} dienas/ų`)
}

console.log('=============== 3.9 uzduotis============');

let pazymai39 = [];

t = 0;
while (t < 10) {
    let randompazymiai = Math.floor(Math.random() * 10);
    pazymai39.push(randompazymiai);
    t++
}

console.log(`visi pazymiai - ${pazymai39}`)

suma = 0;
neigiamKiek = 0;

for (const pazym of pazymai39) {
    suma += pazym;
    if (pazym < 5) {
        neigiamKiek++;
    } else {
        console.log(`teigiamas pazymys - ${pazym}`)
    }

}
console.log(`vidurkis - ${suma / pazymai39.length}`)
console.log(`neigiamu pazymiu kiekis - ${neigiamKiek}`)

console.log('=============== 3.10 uzduotis============');

studentas1 = [];
studentas2 = [];

s1 = 0;
while (s1 < 10) {
    let randompazymiai1 = Math.floor(Math.random() * 10);
    studentas1.push(randompazymiai1);
    s1++
}
s2 = 0;
while (s2 < 10) {
    let randompazymiai2 = Math.floor(Math.random() * 10);
    studentas2.push(randompazymiai2);
    s2++
}
console.log(`visi pazymiai studentas1 - ${studentas1}`);
console.log(`visi pazymiai studentas2 - ${studentas2}`);

suma1 = 0;
for (const pazym1 of studentas1) {
    suma1 += pazym1;
}
suma2 = 0;
for (const pazym2 of studentas2) {
    suma2 += pazym2;
}

vidurkis1 = suma1 / studentas1.length;
vidurkis2 = suma2 / studentas2.length;

console.log(`studentas1 vidurkis- ${vidurkis1}`);
console.log(`studentas2 vidurkis- ${vidurkis2}`);

if (vidurkis1 > vidurkis2) {
    console.log(`studentas1 vidurkis didesnis`);
} else if (vidurkis1 === vidurkis2) {
    console.log(`abieju studentu vidurkiai vienodi`);
} else {
    console.log(`studentas2 vidurkis didesnis`);
}
console.log('=====================================================================================================');
console.log('=============== 4.1 uzduotis============');

let megstamiausiValgiai = ["Cepelinai", "Šaltibarščiai", "Pica", "Sushi", "Kepta vištiena"];
console.log(megstamiausiValgiai);
megstamiausiValgiai.splice(0, 0, 'PRIDEDU')
console.log(megstamiausiValgiai);
megstamiausiValgiai.splice(6, 0, 'PRIDEDU')
console.log(megstamiausiValgiai);
megstamiausiValgiai.splice(2, 0, 'PRIDEDU')
console.log(megstamiausiValgiai);

megstamiausiValgiai.splice(0, 1)
console.log(megstamiausiValgiai);
megstamiausiValgiai.splice(1, 1)
console.log(megstamiausiValgiai);
megstamiausiValgiai.splice(5, 1)
console.log(megstamiausiValgiai);

console.log('=============== 4.2 uzduotis============');

skaiciai = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

console.log(skaiciai);
let yra15 = skaiciai.includes(15);
console.log('yra 15 - ', yra15)


console.log('=============== 4.3 uzduotis============');

zodziai = ["Saulė", "Vanduo", "Gamta", "Žvaigždės", "Kalnai", "Upė", "Miestas", "Kelionė", "Draugai", "Šeima"];
let jungtukas = zodziai.join(', ');
console.log('sujungtas tekstas - ', jungtukas);
let jungtukas2 = zodziai.join(' - ');
console.log('sujungtas tekstas - ', jungtukas2);

console.log('=============== 4.4 uzduotis============');

pazymiai = [8, 9, 7, 10, 6, 9, 8, 10, 7, 6];
console.log(pazymiai);
pazymiai.sort((a, b) => b - a);
console.log(pazymiai);
console.log(pazymiai.slice(0, 3));

console.log('=============== 4.5 uzduotis============');

let biologijosStudentai = ["Jonas", "Austėja", "Matas", "Ieva", "Lukas", "Gabija"];
let matematikosStudentai = ["Dovydas", "Ieva", "Matas", "Eglė", "Jonas", "Toma"];

let sujungtas = biologijosStudentai.concat(matematikosStudentai);
console.log(sujungtas);

let unikalus = [new Set(sujungtas)];
console.log("unikalus vardai:", unikalus);

console.log('=============== 4.6 uzduotis============');

let pirmoSemestroTemos = ["Įvadas į programavimą", "Duomenų struktūros", "Algoritmai", "Diskrečioji matematika", "Kompiuterių architektūra"];
let antroSemestroTemos = ["Objektinis programavimas", "Duomenų bazių pagrindai", "Operacinės sistemos", "Tinklų pagrindai", "Programinės įrangos inžinerija"];

let bendrosTemos = [...pirmoSemestroTemos, ...antroSemestroTemos]
console.log(bendrosTemos);


console.log('=============== 4.7 uzduotis============');

spalvos = ["Raudona", "Mėlyna", "Žalia", "Geltona", "Juoda", "Balta", "Violetinė", "Oranžinė"];

let spalvosKopija = { ...spalvos };
spalvos = [];
console.log(spalvos);
console.log(spalvosKopija);

console.log('=============== 4.8 uzduotis============');

let miestai = ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys", "Alytus", "Marijampolė", "Telšiai", "Tauragė", "Utena"];

let rastasIndeksas = miestai.indexOf("Utena");

console.log(miestai);
console.log('utenos indeksas -', rastasIndeksas);

console.log('=============== 4.9 uzduotis============');

ranodmSkaiciai = [1, 2, 3, 4, 10, 6, 7, 8, 9];

let duplikatuPatikra = new Set(ranodmSkaiciai);

if (duplikatuPatikra.size !== ranodmSkaiciai.length) {
    console.log('yra');
} else {
    console.log('nera');
}

console.log('=============== 4.10 uzduotis============');

let masyvioks = [1, 2, 3, 4, 5, 6, 7, 8];

const chunkSize = 2;

let resultas = [];

for (let i = 0; i < masyvioks.length; i += chunkSize) {
    resultas.push(masyvioks.slice(i, i + chunkSize));
}
console.log(resultas);

// no clue kaip cia veikia, trys skirtingi intiko sprendimai i viena sudeti

console.log('=============== 4.11 uzduotis============');

masyvas1 = [1, 2, 3, 4, 5, 6];
masyvas2 = [4, 5, 6, 7, 8, 9];
masyvas3 = [];

bendrasMasyvas = [...masyvas1, ...masyvas2];
beDuplikatu = new Set(bendrasMasyvas);

console.log(beDuplikatu);


console.log('=============== 4.12 uzduotis============');

masyvas1 = [1, 2, 3, 4, 5, 6];
masyvas2 = [4, 5, 6, 7, 8, 9];
masyvas3 = [];

for (let i = 0; i < masyvas1.length; i++) {
    for (let j = 0; j < masyvas2.length; j++) {
        if (masyvas1[i] === masyvas2[j]) {
            masyvas3.push(masyvas1[i]);
            break;
        }
    }
}

console.log("Pirmas", masyvas1);
console.log("Antras", masyvas2);
console.log("Bendri", masyvas3);

console.log('=============== 4.13 uzduotis============');

masyvas1 = [7, 5, 1, 9, 3, 4];



console.log('=============== 4.14 uzduotis============');

masyvas1 = [1, 2, 3, 4, 5, 6];

let apverstas = [...masyvas1].reverse()

console.log(masyvas1);
console.log(apverstas);

console.log('=====================================================================================================');
console.log('=============== 5.1 uzduotis============');

masyvas = [3, 7, 2, 9, 6, 4];

let rastas2 = masyvas.find(skaicius => skaicius % 2 === 0);

console.log('pirmas lyginis skaicius -', rastas2);

console.log('=============== 5.2 uzduotis============');

skaiciai = [-3, 0, 5, -8, 2, 7];

let rastasPliusas = skaiciai.find(skaicius => skaicius > 0);

console.log('pirmas teigiamas skaicius -', rastasPliusas);

console.log('=============== 5.3 uzduotis============');

skaiciai = [8, 3, -2, 4];


let NeigIndex = skaiciai.findIndex(skaicius => skaicius < 0);

if (NeigIndex !== -1) {
    console.log(NeigIndex);
} else {
    console.log(-1);
}

console.log('=============== 5.4 uzduotis============');

skaiciai = [8, 12, 5, 3, 15, 9];

let daugiauDesim = skaiciai.findIndex(skaicius => skaicius >= 10);

if (daugiauDesim !== -1) {
    console.log(daugiauDesim);
} else {
    console.log(-1);
}

console.log('=============== 5.5 uzduotis============');

skaiciai = [5, 9, 12, 7, 18, 4];

let geras = skaiciai.find(skaicius => skaicius > 10 && skaicius % 3 === 0);

console.log(geras);

console.log('=============== 5.6 uzduotis============');

skaiciai = [5, 8, -3, -6, 4, 7];

geras = skaiciai.find(skaicius => skaicius < 0 && skaicius % 2 === 0);

console.log(geras);

console.log('=============== 5.7 uzduotis============');

skaiciai = [5, 8, -3, -6, 4, 7];

let arTeig = skaiciai.every(function (skaicius) {
    return skaicius > 0;
});

console.log('ar visi skaiciai yra teigiami?', arTeig);

console.log('=============== 5.8 uzduotis============');

skaiciai = [2, 4, 8, 6, 9];

let arLyg = skaiciai.every(function (skaicius) {
    return skaicius % 2 === 0;
});

console.log('ar visi skaiciai yra lyginiai?', arLyg);

console.log('=============== 5.9 uzduotis============');

skaiciai = [8, 20, 5, 97, 4];

let arMazPenk = skaiciai.some(function (skaicius) {
    return skaicius < 5;
});

console.log('ar yra skaicius mazesnis negu 5?', arMazPenk);

console.log('=============== 5.10 uzduotis============');

skaiciai = [-7, -2, -3, 6];

let arYrVirsNul = skaiciai.some(function (skaicius) {
    return skaicius > 0;
});

console.log('ar yra skaicius daugiau 0?', arYrVirsNul);

console.log('=============== 5.11 uzduotis============');

skaiciai = [-3, 7, 2, 9, 6, 4];

let teigSkaiciai = skaiciai.every(skaicius => skaicius > 0);

let lyginiaiSkaiciai = skaiciai.some(skaicius => skaicius % 2 === 0);

let atsakymas = lyginiaiSkaiciai && teigSkaiciai;

console.log('ar visi teigiami?', teigSkaiciai);
console.log('ar bent vienas lyginis?', lyginiaiSkaiciai);
console.log('galutinis atsakymas', atsakymas);

console.log('=============== 5.12 uzduotis============');

skaiciai = [4, -3, -2, 8, 9, 5];

let virsNulio = skaiciai.filter(skaicius => skaicius > 0);

console.log('teigiami sk -', virsNulio);

console.log('=============== 5.13 uzduotis============');

skaiciai = [5, 1, 4, 5, 1, 3, 4, 5, 2];

let vienasIRdu = skaiciai.filter(skaicius => skaicius <= 2);

console.log('zemi balai -', vienasIRdu);

console.log('=============== 5.14 uzduotis============');

skaiciai = [5, -3, 2, 7, 8, -4, 1];

let teigIRlyg = skaiciai.filter(skaicius => skaicius > 0 && skaicius % 2 === 0);

console.log('teig ir lygianiai skaiciai -', teigIRlyg);

console.log('=============== 5.15 uzduotis============');

skaiciai = [3, 7, 2, 9, 6, 4];

let lygin = skaiciai.filter(skaicius => skaicius % 2 === 0);

let padvigubinti = lygin.map(x => x * 2);

console.log('gauti -', lygin);
console.log('padvigubinti -', padvigubinti);

console.log('=============== 5.16 uzduotis============');

skaiciai = [7, 8, 10, 6, 5, 9];

let geriPazym = skaiciai.filter(skaicius => skaicius >= 8);

console.log('pazymiai -', geriPazym);
console.log('kiekis -', geriPazym.length);

console.log('=============== 5.17 uzduotis============');
//įdėti į masyvą n skaičių fibanačio sekos - pvz jei n yra lygus 5, tuomet reikia įdėti į masyvą penkis skaičius fibanačio sekos.
//ne mano galvai tokie
