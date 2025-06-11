// console.log('liko 5 sek');

// setTimeout(() => {
//     console.log('liko 1 sek');
//     setTimeout(() => {
//         console.log('laikas baigesi');
//     }, 1000);
// }, 4000);

// let sekundes = 5;

// function skaiciuotiLaika() {
//     if (sekundes === 5) {
//         console.log('liko 5 sek');
//     } else if (sekundes === 1) {
//         console.log('liko 1 sek');
//     } else if (sekundes === 0) {
//         console.log('laikas baigesi');
//         return; 
//     }

//     sekundes--;
//     setTimeout(skaiciuotiLaika, 1000);
// }

// skaiciuotiLaika();

// let laikas = 5;

// const timer = global.setInterval(() => {
//     if (laikas > 0) {
//         console.log(`liko ${laikas} sekundziu`)
//         --laikas
//     } else if (laikas === 0) {
//         console.log(`laikas baigesi`)
//         clearInterval(timer)
//     }

// }, 1000);

// const data = require('./isorinis');
// console.log(data)

// console.log(data.API_URL)

// const { duomenys, API_URL } = require('./isorinis');
// console.log(duomenys)
// console.log(API_URL)

// const fs = require('fs');

// fs.writeFile('./pvz.txt', 'pvz', () => {
//     console.log('failo turinys pakeistas');
// });

// fs.readFile('./pvz.txt', (error, data) => {
//     console.log(data);
//     console.log(data.toString());
// });

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/plain');
    res.write('mano pirmasis requestas');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('waiting for requests');
});
