let receptai = [
    {
        id: 'salotos',
        pavadinimas: 'Vištiena su salotom',
        aprasas: 'Amet et at aliquam duis ut morbi turpis. Quis cursus tincidunt risus purus faucibus elit ut. Pellentesque montes.',
        imgUrl: 'img/VistienaSuSalotom.svg',
        receptas:  [
            {
                pavadinimas: 'vistiena',
                kiekis: '100',
                matVienet: 'g.'
            },
            {
                pavadinimas: 'salotos',
                kiekis: '80',
                matVienet: 'g.'
            },
            {
                pavadinimas: 'dazoves',
                kiekis: '125',
                matVienet: 'g.'
            },
            {
                pavadinimas: 'padazas',
                kiekis: '40 ',
                matVienet: 'g.'
            }
        ]
    },
    {
        id: 'tortas',
        pavadinimas: 'Tortas su mėlynėm',
        aprasas: 'Amet et at aliquam duis ut morbi turpis. Quis cursus tincidunt risus purus faucibus elit ut. Pellentesque montes.',
        imgUrl: 'img/TortasSuMelynem.svg',
        receptas: [
            {
                pavadinimas: 'miltai',
                kiekis: '100',
                matVienet: 'g.'
            },
            {
                pavadinimas: 'cukrus',
                kiekis: '75',
                matVienet: 'g.'
            },
            {
                pavadinimas: 'melynes',
                kiekis: '60',
                matVienet: 'g.'
            },
            {
                pavadinimas: 'kaisiniai',
                kiekis: '1 ',
                matVienet: 'vnt.'
            }
        ]
    },
    {
        id: 'makaronai',
        pavadinimas: 'Makaronai su mėsa',
        aprasas: 'Amet et at aliquam duis ut morbi turpis. Quis cursus tincidunt risus purus faucibus elit ut. Pellentesque montes.',
        imgUrl: 'img/MakaronaiSuMesa.svg',
        receptas: [
            {
                pavadinimas: 'makaronai',
                kiekis: '100',
                matVienet: 'g.'
            },
            {
                pavadinimas: 'mesa',
                kiekis: '65',
                matVienet: 'g.'
            },
            {
                pavadinimas: 'pomidorai',
                kiekis: '1',
                matVienet: 'vnt.'
            },
            {
                pavadinimas: 'prieskoniai',
                kiekis: '5 ',
                matVienet: 'g'
            }
        ]


    }
]
let inputReiksme = document.querySelector('.porcijos p');
let porcijuSkaicius = 1;
let pasirinktasReceptas = null;


window.addEventListener('load', () => {
    let korteliuHTML = '';

    for (let receptas of receptai) {
        korteliuHTML += `
            <div class="receptas" id="${receptas.id}" onclick="onKortelesPaspaudimas('${receptas.id}')">
                <img src="${receptas.imgUrl}" class="cover-img">
                <div class="content">
                    <h3>${receptas.pavadinimas}</h3>
                    <p class="highlight">${receptas.aprasas}</p>
                </div>
                <img src="img/check.svg" class="active hide">
            </div>`;
    };
    document.querySelector('.receptai').innerHTML = korteliuHTML;
});

function onKortelesPaspaudimas(id) {
    pasirinktasReceptas = id;
    document.getElementById('results').innerHTML = receptoHTMLGeneravimas(id);
    
    document.querySelectorAll('.receptas img.active').forEach(img => img.classList.add('hide'));
    
    let activeElement = document.getElementById(id).querySelector('.active');
    activeElement.classList.remove('hide');
}

function receptoHTMLGeneravimas(id) {
    let receptas = receptai.find(el => el.id === id).receptas;
    let receptoHTML = '';

    receptas.forEach(ingredientas => {
        receptoHTML += `
            <p>${ingredientas.pavadinimas}:
            <strong>${ingredientas.kiekis * porcijuSkaicius} ${ingredientas.matVienet}</strong>
            </p>
        `;
    });

    return receptoHTML;
}

document.getElementById('parcijos').addEventListener('input', (event) => {
    inputReiksme.textContent = event.target.value;
    porcijuSkaicius = parseInt(event.target.value);
    if (pasirinktasReceptas !== null) {
        document.getElementById('results').innerHTML = receptoHTMLGeneravimas(pasirinktasReceptas);
    }
});
