let valiutos = {
    "EUR":
    {
        "USD": 1.08,
        "GBP": 0.85,
        "PLN": 4.40,
        "NOK": 11.50
    },
    "USD":
    {
        "EUR": 0.93,
        "GBP": 0.79,
        "PLN": 4.08,
        "NOK": 10.65
    },
    "GBP":
    {
        "EUR": 1.18,
        "USD": 1.26,
        "PLN": 5.20,
        "NOK": 12.50
    },
    "PLN":
    {
        "EUR": 0.23,
        "USD": 0.25,
        "GBP": 0.19,
        "NOK": 2.40
    },
    "NOK":
    {
        "EUR": 0.09,
        "USD": 0.094,
        "GBP": 0.08,
        "PLN": 0.42
    }
};


let gaunamAtsBtn = document.getElementById('convert-btn');

document.getElementById('convert-btn').addEventListener('click', function(){
    let kiekis = parseFloat(document.getElementById('amount').value)
    let pirmineValiuta = document.getElementById('currency-from').value;
    let antrineValiuta = document.getElementById('currency-to').value;

    if (!kiekis || kiekis <= 0) {
        alert("Neteisinga suma!");
        return;
    }

    if (pirmineValiuta == antrineValiuta) {
        alert("identiskos valiutos!");
        return;
    }

    let rate = valiutos[pirmineValiuta] && valiutos[pirmineValiuta][antrineValiuta];

    let rezultatas = (rate * kiekis).toFixed(2);

    let resultConteiner = document.querySelector('.results');
    resultConteiner.innerHTML = `<h1>${kiekis} ${pirmineValiuta} yra ${rezultatas} ${antrineValiuta}</h1>
    <p><strong>Santykis:</strong> 1 ${pirmineValiuta} = ${valiutos[pirmineValiuta][antrineValiuta]} ${antrineValiuta}</p>`;

    let reset = document.getElementById('reset-btn');
    reset.classList.remove('hide');

    let restartBtn = document.getElementById('reset-btn');
    if (restartBtn) {
        restartBtn.addEventListener("click", reload);
    }
});


function reload() {
    window.location.reload();
}
