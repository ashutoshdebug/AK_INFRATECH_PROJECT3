// Cart Logic
const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
const mainPanel = document.getElementById("main-panel");
const subtotalDiv = document.getElementById("subtotal");

function calculateSubtotal() {
  let subtotal = 0;
  const priceElements = document.querySelectorAll(".price");
  const quantitySelects = document.querySelectorAll(".select-quantity");

  priceElements.forEach((priceEl, index) => {
    // Remove commas before parsing
    const priceString = priceEl.getAttribute("data-price").replace(/,/g, "");
    const price = parseFloat(priceString);
    const quantity = parseInt(quantitySelects[index].value);

    if (quantity === 1) {
      subtotal += price;
    } else {
      subtotal += price * quantity;
    }
  });

  subtotalDiv.innerText = `Subtotal: ₹${subtotal.toLocaleString()}`;
}

function renderCart() {
  mainPanel.innerHTML = "";

  if (cart.length === 0) {
    mainPanel.innerHTML = "<h2>Your cart is empty.</h2>";
    subtotalDiv.innerText = "";
    return;
  }

  cart.forEach((product, index) => {
    const productInfo = document.createElement("div");
    productInfo.id = "product-info";
    productInfo.innerHTML = `
      <div id="product-image">
        <img src="./statics/${product.image}" alt="${product.name}" />
      </div>
      <div id="product-desc">
        <div id="combined-info">
          <div id="item-name">${product.name}</div>
          <div id="in-stock">In Stock</div>
          <div id="delivery-date">Get it by 29/06/2025</div>
          <div id="quantity">
            <select name="quantity" class="select-quantity">
              <option value="1" ${
                product.quantity == 1 ? "selected" : ""
              }>Quantity:1</option>
              <option value="2" ${
                product.quantity == 2 ? "selected" : ""
              }>Quantity:2</option>
              <option value="3" ${
                product.quantity == 3 ? "selected" : ""
              }>Quantity:3</option>
              <option value="4" ${
                product.quantity == 4 ? "selected" : ""
              }>Quantity:4</option>
              <option value="5" ${
                product.quantity == 5 ? "selected" : ""
              }>Quantity:5</option>
            </select>
          </div>
          <div class="remove-from-cart" style="margin-top:10px; color:red; cursor:pointer;">Remove from Cart!</div>
        </div>
      </div>
      <div id="product-price" class="price" data-price="${product.price}">₹${
      product.price
    }</div>
    `;

    mainPanel.appendChild(productInfo);

    // Add event listener to remove button
    productInfo
      .querySelector(".remove-from-cart")
      .addEventListener("click", () => {
        removeFromCart(index);
      });
  });

  const quantitySelects = document.querySelectorAll(".select-quantity");
  quantitySelects.forEach((select) => {
    select.addEventListener("change", calculateSubtotal);
  });

  calculateSubtotal();
}
function removeFromCart(index) {
  cart.splice(index, 1); // Remove item from cart array
  sessionStorage.setItem("cart", JSON.stringify(cart)); // Update sessionStorage
  renderCart(); // Re-render cart
}

renderCart();

// Proceed Logic

document.getElementById("proceed").addEventListener("click", () => {
  const subtotalText = document
    .getElementById("subtotal")
    .innerText.replace("Subtotal: ₹", "")
    .replace(/,/g, "");

  if (!subtotalText || subtotalText === "0") {
    alert("Your cart is empty. Cannot generate QR.");
    return;
  }

  const qrData = `https://youtube.com/shorts/1VPJMIHQ5WU?si=0nN_sZ8WJKKknrb7`;

  const qrDiv = document.getElementById("qrcode");
  qrDiv.innerHTML = "";

  new QRCode(qrDiv, {
    text: qrData,
    width: 150,
    height: 150,
  });

  document.getElementById("custom-alert").style.display = "flex";
});

document.getElementById("close-alert").addEventListener("click", () => {
  document.getElementById("custom-alert").style.display = "none";
});
