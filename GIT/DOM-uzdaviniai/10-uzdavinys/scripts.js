const quantityButtonsMinus = document.querySelectorAll(".minus");
const quantityButtonsPlus = document.querySelectorAll(".plus");
const deleteButtons = document.querySelectorAll(".delete-btn");
const finalPricePlace = document.querySelector(".final-price strong");
// const cartRows = document.querySelectorAll('.product-row');
const resetBtn = document.querySelector('.update-btn')

function updateCart() {
    let totalPrice = 0;
    const cartRows = document.querySelectorAll('.product-row');
    cartRows.forEach(row => {
        let unitPrice = Number(row.querySelector('.unit-price').textContent);
        let quantityElement = row.querySelector('.quantity');
        let quantity = Number(quantityElement.textContent);
        let total = unitPrice * quantity;

        row.querySelector('.total-price').textContent = total.toFixed(2);
        totalPrice += total;
    });
    finalPricePlace.textContent = totalPrice.toFixed(2);
};

function changeQuantity(button, increase) {
    let row = button.parentElement.parentElement;
    let quantintyElement = row.querySelector('.quantity');
    let quantity = Number(quantintyElement.textContent);

    if (increase) {
        quantity++;
    } else if (quantity > 1) {
        quantity--;
    }
    quantintyElement.textContent = quantity;

    updateCart()
}

function removeItem(button) {
    let row = button.parentElement.parentElement;
    row.remove();
    updateCart();
}

deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
        removeItem(this);
    })
})

quantityButtonsMinus.forEach(button => {
    button.addEventListener('click', function() {
        changeQuantity(this, false);
    })
})

quantityButtonsPlus.forEach(button => {
    button.addEventListener('click', function() {
        changeQuantity(this, true);
    })
})

function resetAll() {
    document.querySelectorAll('.quantity').forEach(quantintyElement => {
        quantintyElement.textContent = "1";
    });
    updateCart();
}

resetBtn.addEventListener('click', resetAll);


document.addEventListener("DOMContentLoaded", updateCart);
