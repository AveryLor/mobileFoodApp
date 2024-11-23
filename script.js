// Sample products (you can replace this with an API or database)
const products = [
    { id: 1, name: "Pasta", description: "Classic pasta with marinara sauce and cheese.", price: 10.99 },
    { id: 2, name: "Pasta", description: "Classic pasta with marinara sauce and cheese.", price: 10.99 },
    { id: 3, name: "Pasta", description: "Classic pasta with marinara sauce and cheese.", price: 10.99 },
    { id: 4, name: "Pasta", description: "Classic pasta with marinara sauce and cheese.", price: 10.99 },
    { id: 5, name: "Pasta", description: "Classic pasta with marinara sauce and cheese.", price: 10.99 },
    { id: 6, name: "Pasta", description: "Classic pasta with marinara sauce and cheese.", price: 10.99 },
    { id: 7, name: "Pasta", description: "Classic pasta with marinara sauce and cheese.", price: 10.99 }
  ];
  
  // Function to render products
  function renderProducts() {
    const menuItemsContainer = document.getElementById("menu-items");
    menuItemsContainer.innerHTML = ''; // Clear any existing products
  
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('menu-item');
      
      productElement.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <span>$${product.price.toFixed(2)}</span>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      
      menuItemsContainer.appendChild(productElement);
    });
  }
  
  // Cart functionality
  let cart = [];
  
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
      cart.push(product);
      updateCart();
    }
  }
  
  function updateCart() {
    const cartList = document.getElementById('cart-list');
    const cartCount = document.getElementById('cart-count');
    
    cartList.innerHTML = ''; // Clear the cart list
  
    cart.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartList.appendChild(listItem);
    });
  
    cartCount.textContent = cart.length;
  }
  
  // Initial render
  renderProducts();
  