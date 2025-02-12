let valiutos = {
    "EUR":
    {
        "USD": 1.08,"GBP": 0.85,"PLN": 4.40,"NOK": 11.50
    },
    "USD":
    {
        "EUR": 0.93,"GBP": 0.79,"PLN": 4.08,"NOK": 10.65
    },
    "GBP":
    {
        "EUR": 1.18,"USD": 1.26,"PLN": 5.20,"NOK": 12.50
    },
    "PLN":
    {
        "EUR": 0.23,"USD": 0.25,"GBP": 0.19,"NOK": 2.40
    },
    "NOK":
    {
        "EUR": 0.09,"USD": 0.094,"GBP": 0.08,"PLN": 0.42
    }
};

document.addEventListener('DOMContentLoaded', () => {

let pirmosValiutos = document.getElementById('select-currency-from');
let antrosValiutos = document.getElementById('select-currency-to');

for (let valiuta in valiutos) {
    pirmosValiutos.innerHTML += `<option value="${valiuta}">${valiuta}</option>`
    antrosValiutos.innerHTML += `<option value="${valiuta}">${valiuta}</option>`
}

})