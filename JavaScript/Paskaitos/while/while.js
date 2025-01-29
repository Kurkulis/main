console.log('================ while ==================');
console.log('===============pirma uzduotis=============');

let sk = 1;

while (sk <= 20) {
    console.log(sk);
    sk++;
}

console.log('===============antras uzduotis============');

let skaic = 1;

while (skaic <= 50) {
    if (skaic % 2 === 0) {
    console.log('lyginius' , skaic)
    } else {
    console.log('nelyginius' , skaic)
    }
    skaic++;
}

console.log('===============trecia uzduotis============');

let skk = 25;

while (skk <= 50) {
    if (skk % 3 === 0) {
        console.log('dalinasi is 3 -' , skk)
        } else {
        console.log(skk)
        }
        skk++;
}

console.log('===============ketvirta uzduotis============');

let skkk = 1;

while (true) {
    console.log(skkk);
    if (skkk % 3 === 0 && skkk % 5 === 0) {
        break;
    }
    skkk++;
}

console.log('===============penkta uzduotis============');

let number = 1;
let LygSum = 0;

while (number <= 100) {
if (number % 2 === 0) {
    LygSum = LygSum + number;
}
number++;
}
console.log(LygSum);

console.log('===============sesta uzduotis============');

let skaicius = 1;

while (skaicius < 5) {
	console.log(`skaicius - ${skaicius}, kvadratas - ${skaicius ** 2}`);
	skaicius++;
}

console.log('===============septinta uzduotis============');

let kiekis = Math.floor(Math.random()*10) + 1;
let h = 0;

console.log(`kiekis - ${kiekis}`);

while (h < kiekis) {
    let randomSK = Math.floor(Math.random() * 100);
    console.log(randomSK);
    h++;
}


console.log('===============astunta uzduotis============');

let kiekiss = Math.floor(Math.random()*10) + 1;
let hh = 0;
let suma = 0;

console.log(`kiekis - ${kiekiss}`);

while (hh < kiekiss) {
    let randomSkk = Math.floor(Math.random() * 100);
    console.log(randomSkk);
    suma += randomSkk;
    hh++;
}
console.log(`skaiciu suma - ${suma}`)

console.log('===============devinta uzduotis============');

let preke1 = Math.floor(Math.random() * 10); 
let preke2 = Math.floor(Math.random() * 10); 
let preke3 = Math.floor(Math.random() * 10);


while (preke1 > 0 || preke2 > 0 || preke3 > 0) {

    let NupPreke1 = Math.floor(Math.random() * 10);
    let NupPreke2 = Math.floor(Math.random() * 10);
    let NupPreke3 = Math.floor(Math.random() * 10) ;



    if (NupPreke1 > preke1) {
        console.log(`Nepakanka pirmos. Liko: ${preke1}`);
        NupPreke1 = preke1;
    } 
    preke1 -= NupPreke1;
    console.log(`Pirkta pirmos: ${NupPreke1}. Liko: ${preke1}`);



    if (NupPreke2 > preke2) {
        console.log(`Nepakanka antros . Liko : ${preke2}`);
        NupPreke2 = preke2; 
    }
    preke2 -= NupPreke2;
    console.log(`Pirkta antros : ${NupPreke2}. Liko: ${preke2}`);



    if (NupPreke3 > preke3) {
        console.log(`Nepakanka trecios . Liko : ${preke3}`);
        NupPreke3 = preke3; 
    }
    preke3 -= NupPreke3;
    console.log(`Pirkta trecios : ${NupPreke3}. Liko: ${preke3}`);


    if (preke1 === 0 && preke2 === 0 && preke3 === 0) {
        console.log("Viskas isparduotos!");
        break;
    }
}

console.log('===============desimta uzduotis============');

skaicius = 6;
daliklis = skaicius;
let dalikliuSkaicius = 1;

while (daliklis > 1) {
    if (skaicius % daliklis === 0 ) {
        dalikliuSkaicius++;
    }
    daliklis--;
}

if (dalikliuSkaicius === 2) {
    console.log('pirminis')
} else {
    console.log('ne pirminis');
}

console.log('=============== vienuolikta uzduotis============');

let kartai = 4;
let pirmas = 1;
let l = 1;

while (l <= kartai) {
    pirmas *= l;
    l++;
}
console.log(`Skaičiaus ${kartai} faktorialas yra: ${pirmas}`);

console.log('=============== dvylikta uzduotis============');

let numberis = 4321; 
let reversedNumber = 0; 

while (numberis > 0) {
    let lastDigit = numberis % 10; 
    reversedNumber = reversedNumber * 10 + lastDigit; 
    numberis = Math.floor(numberis / 10); 
}

console.log(reversedNumber); 
console.log('=============== dvylikta uzduotis============');

let klientopinigai = 2.45;
let kavoskaina = 0.6;

let graza = 0;

if (klientopinigai > kavoskaina) {
    graza = klientopinigai - kavoskaina
}

console.log('grazos skaicius:', graza)

// dar reikia padaryt toliau

console.log('==========================================');

