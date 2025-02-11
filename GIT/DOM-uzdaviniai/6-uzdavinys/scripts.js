let calculateButton = document.getElementById('calculate');

    calculateButton.addEventListener('click', function() {
let employeesCount = document.getElementById('employees-count').valueAsNumber;
let employeeMakesPerDay = document.getElementById('employee-makes-per-day').valueAsNumber;
let dayReservations = document.getElementById('day-reservations').valueAsNumber;

let bakeryTotal = employeesCount * employeeMakesPerDay;
let isBakeryGonnaMakeIt = bakeryTotal >= dayReservations;

let resultDiv = document.getElementById('results');

resultDiv.innerHTML = `<p><strong>Kepikla per diena iskepa: </strong>${bakeryTotal} kepalu</p>`;
resultDiv.innerHTML += `<p><strong>Jeifu reikia speti pagaminti: </strong>${dayReservations} kepalu</p>`;
resultDiv.innerHTML += `<p><strong>Ar spes: </strong>${isBakeryGonnaMakeIt ? 'taip' : 'ne' }</p>`;

});

document.getElementById('employees-count').addEventListener('keyup', function(event) {
    let imputValue = event.target.valueAsNumber;
    if (imputValue < 0 ) {
        event.target.classList.add('error');
        event.target.nextElementSibling.classList.add('show');
    } else {
        event.target.classList.remove('error');
        event.target.nextElementSibling.classList.remove('show');
    }
})

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('employees-count').value = 0;
    document.getElementById('employee-makes-per-day').value = 0;
    document.getElementById('day-reservations').value = 0;
    document.getElementById('results').innerHTML = '<p>Kol kas nieko nera.</p>';
})