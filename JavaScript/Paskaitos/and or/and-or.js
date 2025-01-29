console.log('================ and or ==================');

console.log('===============pirma uzduotis=============');

let a = 5, b = 4, c = 3;
if (a > b && a > c) {
    console.log('1 didziausias')
} else if (b > a && b > c) {
    console.log('2 didziausias')
} else if (c > a && c > b) {
    console.log('3 didziausias')
}
console.log('===============antras uzduotis============');

let d = 5, e = 4, f = 3;
if (d < e && d < f) {
    console.log('1 maziausias')
} else if (e < d && e < f) {
    console.log('2 maziausias')
} else if (f < d && f < e) {
    console.log('3 maziausias')
}

console.log('===============trecia uzduotis============');

let e1 = 1, e2 = 1, e3 = 10;
if (((e1 + e2 + e3) / 3) >= 8) {
    console.log('vidurkis 8-10')
} else if (((e1 + e2 + e3) / 3) >= 5 && ((e1 + e2 + e3) / 3) <= 8) {
    console.log('vidurkis 5-8')
} else if (((e1 + e2 + e3) / 3) < 5) {
    console.log('vidurkis <5')
}

console.log('===============ketvirta uzduotis============');

let s1 = 1, s2 = 2;

if (s1 > s2 || s1 === 0) {
    console.log('didesnis uz 2 skaiciu arba daugiau uz nuli');
} else {
    console.log('mazesnis uz 2 skaiciu arba maziau uz nuli');
}

if (s2 > s1 || s2 === 5) {
    console.log('didesnis uz 1 skaiciu arba daugiau uz 5');
} else {
    console.log('mazesnis uz 1 skaiciu arba maziau uz 5');
}

if (s1 > s2 && s1 === 20) {
    console.log('didesnis uz 2 skaiciu ir yra 20');
} else {
    console.log('mazesnis uz 2 skaiciu ir nera 20');
}

if (s2 > s1 && s2 < 100) {
    console.log('didesnis uz 1 skaiciu ir yra 100');
} else {
    console.log('mazesnis uz 1 skaiciu ir nera 100');
}

console.log('==========================================');

