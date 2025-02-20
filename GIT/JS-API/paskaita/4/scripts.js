function addProductsIntoDiv(products) {
    let productDiv = document.getElementById('products');
    productDiv.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <img src="${product.image}">
            <h3>${product.title}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <p>${product.description}</p>
        `;        
        productDiv.appendChild(productCard);
        
    });
}


window.addEventListener('load', () => {

    fetch ('https://fakestoreapi.com/products/')
    .then(response => response.json())
    .then(data => addProductsIntoDiv(data))
    .catch(error => console.error("Error fetching products:", error));
    
})
