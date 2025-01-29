console.log('================ SWITCH ==================');

let role = "guest";

switch (role) {
    case 'guest':
        console.log('Guest user');
        break;
    case 'moderator':
        console.log('Moderator user');
        break;
    default:
        console.log('Unknown user')
}

console.log('===============pirma uzduotis=============');

let pasirinkimas = "pirmas";

switch (pasirinkimas) {
    case 'pirmas':
        console.log('vartotojas laimėjo vandens');
        break;
    case 'antras':
        console.log('vartotojas laimėjo limonadą');
        break;
    case 'trecias':
        console.log('vartotojas laimėjo arbatą');
        break;
    case 'ketvirtas':
        console.log('vartotojas laimėjo kavą');
        break;
    default:
        console.log('Klaida')
}

console.log('===============antras uzduotis============');

let sk1 = 1, sk2 = 2, sk3 = 3;
switch (sk1) {
    case 1:
        console.log(`${sk1 + sk2 + sk3}`);
        break;
    case 2:
        console.log(`${sk2 * sk3}`);
        break;
    case 3:
        console.log(`${sk1 ** 2}`);
        break;
    default:
        console.log('Klaida')
}

console.log('===============trecia uzduotis============');

let klaida = 11;
switch (klaida) {
    case 11:
        console.log('1 Įvyko tinklo klaida');
        break;
    case 111:
        console.log('2 Nepavyko pasiekti duomenų bazės.');
        break;
    case 1111:
        console.log('3 Nepavyko įkelti failo.');
        break;
    default:
        console.log('Neatpažintas klaidos kodas')
}




console.log('==========================================');
