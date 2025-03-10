// function suma(a,b) {
//     return a + b ;
// }

// function atimti(a,b) {
//     return a - b;
// }

// function daugyba(a,b) {
//     return a * b;
// }

// module.exports = [suma, atimti, daugyba];

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(()=> resolve('Data loaded'), 1000)
    });
}

module.exports = fetchData;