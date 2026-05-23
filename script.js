// ----------------------
// Cart Functionality
// ----------------------
let total = 0;
let cartItems = [];

function addToCart(itemName, price) {
  let existingItem = cartItems.find(item => item.name === itemName);

  if (existingItem) {
    existingItem.qty++;
  } else {
    cartItems.push({ name: itemName, price: price, qty: 1 });
  }

  renderCart();
}

function renderCart() {
  let cartContainer = document.getElementById("cart-items");
  cartContainer.innerHTML = "";

  if (cartItems.length === 0) {
    cartContainer.innerHTML = "<p>No items added.</p>";
    document.getElementById("total-price").innerText = "Total: ₹0";
    return;
  }
 let total = 0; // reset total each time
  cartItems.forEach(function(item) {
    total += item.price * item.qty;
    cartContainer.innerHTML += `
      <div class="cart-item">
        <span>✅ ${item.name} (x${item.qty})</span>
        <span>₹${item.price * item.qty}</span>
        <button onclick="increaseQty('${item.name}')">+</button>
        <button onclick="decreaseQty('${item.name}')">-</button>
        <button onclick="removeFromCart('${item.name}')">Remove</button>
      </div>
    `;
  });

  document.getElementById("total-price").innerText = "Total: ₹" + total;
}

function placeOrder() {
  if (cartItems.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let orderText = "Hello The Fusion Fork!%0A%0AI want to order:%0A";

  cartItems.forEach(function(item) {
    orderText += "• " + item.name + " (x" + item.qty + ")%0A";
  });

  orderText += "%0A Total Amount: ₹" + total;

  // WhatsApp order link
  window.open("https://wa.me/919876543210?text=" + orderText, "_blank");

  // Reset cart after placing order
  cartItems = [];
  total = 0;
  renderCart();
}

function increaseQty(itemName) {
  let item = cartItems.find(i => i.name === itemName);
  if (item) {
    item.qty++;
    renderCart();
  }
}

function decreaseQty(itemName) {
  let item = cartItems.find(i => i.name === itemName);
  if (item && item.qty > 1) {
    item.qty--;
  } else if (item && item.qty === 1) {
    removeFromCart(itemName);
  }
  renderCart();
}

function removeFromCart(itemName) {
    cartItems = cartItems.filter(i => i.name !== itemName);
    renderCart();
  }


// ----------------------
// Menu Items (Indian Foods)
// ----------------------
const indianFoods = [
  {
    name: "Butter Chicken",
    price: 250,
    img: "https://images.unsplash.com/photo-1604908177522-402baf8f7c1d?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Paneer Tikka",
    price: 200,
    img: "https://images.unsplash.com/photo-1626082927389-6c6b7a8b9b4a?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Masala Dosa",
    price: 150,
    img: "https://images.unsplash.com/photo-1626082927389-6c6b7a8b9b4a?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Hyderabadi Biryani",
    price: 300,
    img: "https://images.unsplash.com/photo-1604908177522-402baf8f7c1d?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Chole Bhature",
    price: 180,
    img: "https://images.unsplash.com/photo-1604908177522-402baf8f7c1d?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Idli Sambar",
    price: 120,
    img: "https://images.unsplash.com/photo-1604908177522-402baf8f7c1d?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Rogan Josh",
    price: 280,
    img: "https://images.unsplash.com/photo-1604908177522-402baf8f7c1d?q=80&w=800&auto=format&fit=crop"
  }
];

function renderMenu() {
  let menuContainer = document.getElementById("menu");
  if (!menuContainer) return; // safety check
  menuContainer.innerHTML = "";

  indianFoods.forEach(food => {
    menuContainer.innerHTML += `
      <div class="menu-card">
        <img src="${food.img}" alt="${food.name}">
        <div class="menu-info">
          <h3>${food.name}</h3>
          <p>Authentic Indian flavor, freshly prepared.</p>
          <span>₹${food.price}</span>
          <button class="cart-btn" onclick="addToCart('${food.name}', ${food.price})">
            Add To Cart
          </button>
        </div>
      </div>
    `;
  });
}

// Call this once when the page loads
window.onload = renderMenu;

// ----------------------
// Dark Mode Integration
// ----------------------
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
