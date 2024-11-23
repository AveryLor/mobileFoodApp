// Sample products (you can replace this with an API or database)
const products = [
  {
    id: 1,
    name: "Pasta",
    description: "Classic pasta with marinara sauce and cheese.",
    price: 10.99
  },
  {
    id: 2,
    name: "Burger",
    description: "Juicy beef burger with lettuce, tomato, and cheese.",
    price: 12.49
  },
  {
    id: 3,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce with creamy Caesar dressing.",
    price: 8.99
  },
  {
    id: 4,
    name: "Grilled Chicken",
    description: "Perfectly seasoned grilled chicken breast with a side of veggies.",
    price: 14.99
  },
  {
    id: 5,
    name: "Pizza",
    description: "Wood-fired pizza topped with mozzarella, basil, and tomato sauce.",
    price: 11.99
  },
  {
    id: 6,
    name: "Sushi Platter",
    description: "Fresh sushi rolls served with wasabi and soy sauce.",
    price: 16.99
  },
  {
    id: 7,
    name: "Tacos",
    description: "Three soft tacos with your choice of chicken, beef, or veggies.",
    price: 9.49
  },
  {
    id: 8,
    name: "Fries",
    description: "Golden, oily, salty fries.",
    price: 6.99
  },
  {
    id: 9,
    name: "Veggie Wrap",
    description: "A healthy wrap filled with fresh vegetables and hummus.",
    price: 7.99
  },
  {
    id: 10,
    name: "Fish and Chips",
    description: "Crispy fried fish served with golden fries and tartar sauce.",
    price: 13.49
  }
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
  