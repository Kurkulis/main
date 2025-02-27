
const BASE_URL = 'http://localhost:7789';

const getData = (url) => {
    return fetch(BASE_URL + url).then(response => response.json())
}

const generatePetsHTML = (pets) => {
    return pets.map(pet => `
            <div class="col-md-6 col-lg-4">
                    <div class="card shadow-sm h-100">
                        <div class="card-body">
                            <h5 class="card-title">${pet.name}</h5>
                            <p class="card-text">Metai: ${pet.age}</p>
                            <p class="card-text">Veislė: ${pet.breed}</p>
                            <p class="card-text text-muted">${pet.type}, ${pet.vaccinated ? 'Skiepytas' : 'Neskiepytas'}, ${pet.state}</p>
                            <div class="mb-3">
                            ${pet.features.map(feat => `<span class="badge bg-info text-dark">${feat}</span>`).join('')}
                            </div>
                            <p class="card-text">${pet.description}</p>
                        </div>
                    </div>
                </div>
        `).join('');
};


const generateFilterHTML = (filters) => {

    let filtersHTML = '';
    for (let typeFilters in filters) {

        const labelText = labelTranslations[typeFilters];

        filtersHTML += `
        <div class="col-md-2">
            <label for="${typeFilters}" class="form-label">${labelText}:</label>
            <select class="form-select" id="${typeFilters}">
                <option value="visi" selected>visi</option>
                ${filters[typeFilters].map(option => `<option value="${option}">${valueTranslations[option] || option}</option>`).join('')}
            </select>
        </div>
        `
    }
    return filtersHTML;
};



window.addEventListener('DOMContentLoaded', async () => {
    let pets = await getData('/pets');
    let filter = await getData('/pets/filters-list');
    document.getElementById('animal-main').innerHTML = generatePetsHTML(pets);
    document.getElementById('filterForm').innerHTML = generateFilterHTML(filter);
});


const labelTranslations = {
    age: 'Amžius',
    type: 'Gyvūnas',
    breed: 'Veislė',
    vaccinated: 'Skiepytas',
    state: 'Būsena',
    features: 'Charakteriai'
};

const valueTranslations = {
    true: 'taip',
    false: 'ne'
};

document.getElementById('mygtuks').addEventListener('click', async () => {
    let filterParams = [];

    for (let filterKey in labelTranslations) {
        let filterValue = document.getElementById(filterKey).value;

        if (filterValue !== 'visi') {
            filterParams.push(
                `${filterKey}=${filterValue.split(' ').join('_')}`
            );
        }
    }
    let readyFilter = filterParams.length ? `?${filterParams.join('&')}` : null;

    let url = '/pets';
    let pets = null;

    if (readyFilter) {
        pets = await getData(`${url}/filtered${readyFilter}`);
    } else {
        pets = await getData(url)
    }

    document.getElementById('animal-main').innerHTML = generatePetsHTML(pets);
})