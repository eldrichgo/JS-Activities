let products = [
    {id: 1, name: "Product 1", price: 100}, 
    {id: 2, name: "Product 2", price: 200},
    {id: 3, name: "Product 3", price: 31.50},
];
let cartItems = []
// Add to cart function
function addToCart(product){
    let existingProduct = cartItems.find(item => item.id === product.id);

    if (existingProduct){
        console.log('existing product', existingProduct);
        existingProduct.quantity++;
    } else {
        cartItems.push({...product, quantity: 1});
    }

    updateCart();
}

// Update cart function
function updateCart(){
    let cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';

    cartItems.forEach(function(item){
        let li = document.createElement('li');
        let text = document.createElement('span');
        text.innerText = `${item.name} ${parseFloat(item.price).toFixed(2)} Quantity: ${item.quantity}`;
        li.appendChild(text);

        let button = document.createElement('button');
        button.innerText = "Remove";
        button.onclick = function(){
            cartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
            updateCart();
        };
        li.appendChild(button);
        
        cartList.appendChild(li);
    });

    let total = cartItems.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);
    document.getElementById('total').innerText = total;
}

// Populate product list
let productList = document.getElementById('product-list');
products.forEach(function(product) {
    // each item has the product details and an 'add to cart' button
    let li = document.createElement('li');

    let text = document.createElement('span');
    text.innerText = `${product.name} Price: $${parseFloat(product.price).toFixed(2)}`;
    li.appendChild(text);

    let button = document.createElement('button');
    button.innerText = "Add to Cart";
    button.onclick = function() {
       addToCart(product);
    };
    li.appendChild(button);

    productList.appendChild(li);
});

