// console.log(1)
// console.log(1)

// setTimeout (() => {
//     console.log(2)
// }, 5000)

// console.log(1)


//                    1 uzduotis

// function delay(callback) {
//     setTimeout(callback, 5000);
// }

// function hello() {
//     console.log('hello')
// }

// delay(hello);

//                    2 uzduotis

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => {
//     console.log('resolved', response)
//     return response.json()
// })
// .then(data => {
//     console.log(data)
// })
// .catch(err => {
//     console.log('rejected', err)
// })

//                    3 uzduotis

// function pirmaFunkcija(masyvas, callback) {
//     masyvas.forEach(callback);
// }

// function callbackFunkcija(skaicius) {
//     if (skaicius % 2 === 0) {
//         console.log(`Skaičius ${skaicius} yra lyginis.`);
//     } else {
//         console.log(`Skaičius ${skaicius} yra nelyginis.`);
//     }
// }

// const skaiciai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// pirmaFunkcija(skaiciai, callbackFunkcija);

//                    4 uzduotis

// function pirmaFunkcija(masyvas, callback) {
//     masyvas.forEach(callback);
// }

// function callbackFunkcija(zodis) {
//     console.log(`zodzio ${zodis} ilgis yra ${zodis.length}.`);
// }
// const zodziai = ['labas', 'labas rytas', 'labas vakaras', 'laba diena'];

// pirmaFunkcija(zodziai, callbackFunkcija);


//                    5 uzduotis

// function pvz(masyvas, callbackFunkcija) {
//     masyvas.forEach(item => callbackFunkcija(item));
// };

// function naujasObjektas(item) {
//     console.log(
//         {
//             marke: item.marke,
//             modelis: item.modelis
//         }
//     );
// };

// let auto = [
//     {marke: 'audi', modelis: 'a7', kaina: 123, rida: 156},
//     {marke: 'audi', modelis: 'a6', kaina: 1023, rida: 478555},
//     {marke: 'audi', modelis: 'a5', kaina: 12003, rida: 15006}
// ];

// pvz(auto, naujasObjektas);

//                    6 uzduotis

// function checkUserLogin(isUserLogedIn) {
//     return new Promise((resolve, reject) => {
//         if (isUserLogedIn) {
//             resolve('user loged in');
//         } else {
//             reject('user loged out')
//         }
//     })
// }

// checkUserLogin(true)
// .then(message => console.log(message))
// .catch(error => console.log(error));

// checkUserLogin(false)
// .then(message => console.log(message))
// .catch(error => console.log(error));


//                    7 uzduotis

async function ageTest(age) {
    return new Promise((resolve,reject) => { 
        if (age === undefined || typeof age !== 'number') {
            reject(new Error('neteisingas suvedimas'));
        } else if (age >= 18) {
            resolve('pilnametis');
        } else {
            resolve('nepilnametis');
        }
    })

}

ageTest(12)
.then(message => console.log(message))
.catch(error => console.error(error.message));
ageTest()
.then(message => console.log(message))
.catch(error => console.error(error.message));
ageTest(19)
.then(message => console.log(message))
.catch(error => console.error(error.message));
ageTest('abc')
.then(message => console.log(message))
.catch(error => console.error(error.message));