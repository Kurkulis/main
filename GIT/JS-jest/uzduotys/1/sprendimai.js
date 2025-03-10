function apskritimoPlotas(r) {
    return  Math.PI * r * r;
}

function palindrome(str) {
    const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
    const reverseStr = cleanStr.split('').reverse().join('');
    
    return cleanStr === reverseStr;
}

function bigNumber(masyvas) {
    
    if (!Array.isArray(masyvas) || masyvas.length === 0) {
        throw new Error("Masyvas klaidinas");
    }
    
    let biggest = -Infinity;
    masyvas.forEach(e => {
        if (e >= biggest) {
            biggest = e;
        }
    });
    return biggest;
}

function kainosFunk(objektas) {
    if (objektas.hasOwnProperty("kaina")) {
        throw new Error('Objektas jau turi kainą!')
    } 
    objektas.kaina = 50;
    return objektas
}

module.exports ={apskritimoPlotas, palindrome, bigNumber, kainosFunk};