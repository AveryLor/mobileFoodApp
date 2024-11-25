// Sample restaurant menus
const restaurantMenus = {
  "Restaurant A": [
    {
      id: 1,
      name: "Pasta",
      description: "Classic pasta with marinara sauce.",
      price: 10.99,
    },
    { id: 2, name: "Burger", description: "Juicy beef burger.", price: 12.49 },
  ],
  "Restaurant B": [
    {
      id: 3,
      name: "Sushi Platter",
      description: "Fresh sushi rolls.",
      price: 16.99,
    },
    {
      id: 4,
      name: "Veggie Wrap",
      description: "Healthy veggie wrap.",
      price: 7.99,
    },
  ],
  "Restaurant C": [
    { id: 5, name: "Pizza", description: "Wood-fired pizza.", price: 11.99 },
    {
      id: 6,
      name: "Tacos",
      description: "Soft tacos with chicken or beef.",
      price: 9.49,
    },
  ],
};

// Function to load menu for the selected restaurant
function loadMenu(restaurantName) {
  const menuItemsContainer = document.getElementById("menu-items");
  const menuHeading = document.querySelector("#menu h2");

  // Clear existing menu
  menuItemsContainer.innerHTML = "";
  menuHeading.textContent = `${restaurantName} Menu`;

  // Load and display the menu
  const menu = restaurantMenus[restaurantName];
  if (menu) {
    menu.forEach((item) => {
      const productElement = document.createElement("div");
      productElement.classList.add("menu-item");

      productElement.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <span>$${item.price.toFixed(2)}</span>
        <button onclick="addToCart(${
          item.id
        }, '${restaurantName}')">Add to Cart</button>
      `;

      menuItemsContainer.appendChild(productElement);
    });
  } else {
    menuItemsContainer.innerHTML = `<p>No menu available for ${restaurantName}</p>`;
  }
}

// Updated addToCart function to handle menus from multiple restaurants
function addToCart(productId, restaurantName) {
  const product = restaurantMenus[restaurantName].find(
    (item) => item.id === productId
  );
  if (product) {
    cart.push(product);
    updateCart();
  }
}

// Render initial state (optional)
loadMenu("Restaurant A");
