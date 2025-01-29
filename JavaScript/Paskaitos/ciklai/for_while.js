console.log('================ for while ==================');

console.log('===============pirma uzduotis=============');

for (let i = 0; i <=10; ++i) {
    console.log(i)
}

console.log('===============antras uzduotis============');

for (let i = 0; i <=15;i += 2) {
    console.log( + i)
}

console.log('===============trecia uzduotis============');

for (let i = 1; i <=20;i += 3) {
    console.log(`[${i}]`)
}

console.log('===============ketvirta uzduotis============');

for (let i = 1; i <=20; ++i) {
    if ( i % 4 === 0) {
        console.log(`dalinasi is 4 = ${i}` )
    }
}

console.log('===============penkta uzduotis============');

let start = 1, end = 5; 

if (start < end) {
    console.log("teisingai, tad:")
    for (let i=start; i<=end; i++) {
        console.log(`${i} - ${i * i}`);
    }
} else {console.log('neteisingai');}

console.log('===============sesta uzduotis============');

let start6 = 1, end6 = 20; 

if (start6 < end6) {
    console.log("teisingai, tad:")
    for (let i=start6; i<=end6; i++) {
        if (i % 2 !==0 || i % 8 === 0) {
            console.log(i)
        }
    }
} else {console.log('neteisingai');}

console.log('===============septinta uzduotis============');

let pirmasSK = 7;
let antrasSK = 4; 

let rezas = 0;

for (let i = 0; i < antrasSK; i++) {
    rezas += pirmasSK;
}

console.log(rezas);
console.log('===============pirma uzduotis============');
let suma = 0;

for (let k = 0; k <= 100; k++) {
    suma += k
}
console.log(suma)
console.log('===============antra uzduotis============');

let summa = 0;

for (let k = 0; k <= 50; k++) {
    if (k % 2 === 0 && k >= 20){
    summa += k
    }
}
console.log(summa)

console.log('===============trecia uzduotis============');

let summma = 0;

for (let k = 0; k <= 60; k++) {
    if (k % 2 !== 0 && k >= 30){
    summma += k
    }
}
console.log(summma)

console.log('===============ketvirta uzduotis============');

let sumaa = 0;

for (let k = 0; k < 1000; k++) {
    if (k % 5 === 0 || k % 3 === 0){
    sumaa += k
    }
}
console.log(sumaa)

console.log('===============penkta uzduotis============');

for (let k = 1; k < 100; k++) {
    if (k % 5 === 0 && k % 3 === 0){
        console.log('FizzBuzz')
    }
    else if (k % 5 === 0) {
        console.log('Buzz')
    }
    else if (k % 3 === 0) {
        console.log('Fizz')
    }
    else {
        console.log(k)
    }
    
}

console.log('===============sesta uzduotis============');

let n = 10;

let pirmas = 3;
let antras = 5;
let trecias;

for (let i = 1; i <= n; i++) {
    console.log(pirmas);
    trecias = pirmas + antras; 

    pirmas = antras;
    antras = trecias;
    }

console.log('==========================================');

