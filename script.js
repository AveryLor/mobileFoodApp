// Sample product data for different restaurants
const restaurantMenus = {
  A: [
    {
      id: 1,
      name: "Pasta",
      description: "Classic pasta with marinara sauce and cheese.",
      price: 10.99,
    },
    {
      id: 2,
      name: "Burger",
      description: "Juicy beef burger with lettuce, tomato, and cheese.",
      price: 12.49,
    },
    {
      id: 3,
      name: "Caesar Salad",
      description: "Crisp romaine lettuce with creamy Caesar dressing.",
      price: 8.99,
    },
    {
      id: 4,
      name: "Pasta",
      description: "Classic pasta with marinara sauce and cheese.",
      price: 10.99,
    },
    {
      id: 5,
      name: "Burger",
      description: "Juicy beef burger with lettuce, tomato, and cheese.",
      price: 12.49,
    },
    {
      id: 6,
      name: "Caesar Salad",
      description: "Crisp romaine lettuce with creamy Caesar dressing.",
      price: 8.99,
    },
    {
      id: 7,
      name: "Pasta",
      description: "Classic pasta with marinara sauce and cheese.",
      price: 10.99,
    },
    {
      id: 8,
      name: "Burger",
      description: "Juicy beef burger with lettuce, tomato, and cheese.",
      price: 12.49,
    },
    {
      id: 9,
      name: "Caesar Salad",
      description: "Crisp romaine lettuce with creamy Caesar dressing.",
      price: 8.99,
    },
  ],
  B: [
    {
      id: 11,
      name: "Spaghetti Carbonara",
      description:
        "Classic Italian pasta with eggs, cheese, pancetta, and pepper.",
      price: 13.99,
    },
    {
      id: 12,
      name: "Cheeseburger Deluxe",
      description:
        "Grilled beef patty topped with cheddar, lettuce, tomato, and pickles.",
      price: 14.49,
    },
    {
      id: 13,
      name: "Greek Salad",
      description:
        "Crisp romaine lettuce, feta cheese, olives, and cucumbers with Greek dressing.",
      price: 9.99,
    },
    {
      id: 14,
      name: "Vegetable Lasagna",
      description:
        "Layers of pasta, ricotta cheese, marinara sauce, and roasted vegetables.",
      price: 12.99,
    },
    {
      id: 15,
      name: "BBQ Bacon Burger",
      description:
        "Beef patty with crispy bacon, barbecue sauce, and melted cheese.",
      price: 15.99,
    },
    {
      id: 16,
      name: "Caesar Salad Wrap",
      description:
        "A wrap filled with romaine lettuce, grilled chicken, and Caesar dressing.",
      price: 11.49,
    },
  ],
  C: [
    {
      id: 17,
      name: "Lamb Shawarma",
      description:
        "Tender lamb slices wrapped in flatbread with garlic sauce and vegetables.",
      price: 16.99,
    },
    {
      id: 18,
      name: "Buffalo Wings",
      description:
        "Crispy chicken wings tossed in spicy buffalo sauce, served with ranch dipping sauce.",
      price: 12.49,
    },
    {
      id: 19,
      name: "Eggplant Parmesan",
      description:
        "Breaded eggplant topped with marinara sauce and melted mozzarella cheese.",
      price: 14.99,
    },
    {
      id: 20,
      name: "Beef Burritos",
      description:
        "Flour tortillas filled with seasoned beef, cheese, and fresh salsa.",
      price: 11.99,
    },
    {
      id: 21,
      name: "Chicken Tikka Masala",
      description:
        "Chicken cooked in a rich and creamy tomato-based sauce with spices.",
      price: 15.49,
    },
    {
      id: 22,
      name: "Mushroom Risotto",
      description:
        "Creamy risotto with sautéed mushrooms, Parmesan cheese, and white wine.",
      price: 13.99,
    },
    {
      id: 23,
      name: "Falafel Wrap",
      description:
        "Crispy falafel balls with tahini sauce, lettuce, and tomatoes wrapped in pita bread.",
      price: 10.99,
    },
    {
      id: 24,
      name: "Shrimp Scampi",
      description:
        "Shrimp sautéed in garlic butter and lemon sauce, served over linguine.",
      price: 18.49,
    },
    {
      id: 25,
      name: "BBQ Ribs",
      description:
        "Tender, slow-cooked ribs smothered in barbecue sauce and served with coleslaw.",
      price: 21.99,
    },
    {
      id: 26,
      name: "Veggie Sushi Rolls",
      description:
        "Rice and nori wrapped with fresh vegetables, served with soy sauce and wasabi.",
      price: 9.49,
    },
  ],
};

let cart = [];

function addToCart(productId) {
  // Get the currently selected restaurant
  const restaurant = document
    .querySelector(".category.selected")
    ?.id.split("-")[1];

  // Find the product in the selected restaurant's menu
  const product = restaurantMenus[restaurant]?.find((p) => p.id === productId);

  if (product) {
    cart.push(product); // Add the product to the cart
    updateCart(); // Update the cart display
  }
}

function updateCart() {
  const cartList = document.getElementById("cart-list");
  const cartCount = document.getElementById("cart-count");

  // Clear the cart list and update it with the current items
  cartList.innerHTML = "";

  cart.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(listItem);
  });

  // Update the cart count
  cartCount.textContent = cart.length;
}

// Function to render products on the menu
function renderProducts(restaurant) {
  const menuItemsContainer = document.getElementById("menu-items");
  menuItemsContainer.innerHTML = ""; // Clear any existing products

  const menu = restaurantMenus[restaurant] || [];

  menu.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("menu-item");

    productElement.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <span>$${product.price.toFixed(2)}</span>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    menuItemsContainer.appendChild(productElement);
  });
}

// Checkout functionality
function checkout() {
  if (cart.length > 0) {
    const randomNumber = Math.floor(Math.random() * 1000000);
    alert(
      `Your order has been placed. Check your email for confirmation number: ${randomNumber}`
    );

    cart = []; // Clear the cart
    updateCart(); // Update the cart display
  } else {
    alert(
      "Your cart is empty. Please add some items to the cart before checkout."
    );
  }
}

// Default restaurant to display menu for (Restaurant A)
function selectRestaurant(restaurant) {
  document
    .querySelectorAll(".category")
    .forEach((cart) => cart.classList.remove("selected"));
  document
    .getElementById(`restaurant-${restaurant.toLowerCase()}-btn`)
    .parentElement.classList.add("selected");
  renderProducts(restaurant);
}

// Event listeners for switching menus
document
  .getElementById("restaurant-a-btn")
  .addEventListener("click", () => selectRestaurant("A"));
document
  .getElementById("restaurant-b-btn")
  .addEventListener("click", () => selectRestaurant("B"));
document
  .getElementById("restaurant-c-btn")
  .addEventListener("click", () => selectRestaurant("C"));

// Checkout button
document.getElementById("checkout-button").addEventListener("click", checkout);

// Initial render with Restaurant A's menu
selectRestaurant("A");
