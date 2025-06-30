// Cart Logic
const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
const mainPanel = document.getElementById("main-panel");
const subtotalDiv = document.getElementById("subtotal");

function calculateSubtotal() {
  let subtotal = 0;
  const priceElements = document.querySelectorAll(".price");
  const quantitySelects = document.querySelectorAll(".select-quantity");

  priceElements.forEach((priceEl, index) => {
    const priceString = priceEl.getAttribute("data-price").replace(/,/g, "");
    const price = parseFloat(priceString);
    const quantity = parseInt(quantitySelects[index].value);

    subtotal += price * quantity;
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
              ${[1, 2, 3, 4, 5]
                .map(
                  (q) =>
                    `<option value="${q}" ${
                      product.quantity == q ? "selected" : ""
                    }>Quantity:${q}</option>`
                )
                .join("")}
            </select>
          </div>
          <div class="remove-from-cart" style="margin-top:10px; color:red; cursor:pointer;">Remove from Cart!</div>
        </div>
      </div>
      <div id="product-price" class="price" data-price="${product.price}">₹${product.price}</div>
    `;

    mainPanel.appendChild(productInfo);

    productInfo
      .querySelector(".remove-from-cart")
      .addEventListener("click", () => {
        removeFromCart(index);
      });
  });

  document.querySelectorAll(".select-quantity").forEach((select) => {
    select.addEventListener("change", calculateSubtotal);
  });

  calculateSubtotal();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  sessionStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
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


// Account/Login Logic
const username = localStorage.getItem("username");

// Navbar Account Link
const navbarAccount = document.querySelector(".navbar-items-4 a");
if (username) {
  navbarAccount.innerText = `Welcome, ${username}`;
  navbarAccount.href = "account.html";
} else {
  navbarAccount.innerText = "Account";
  navbarAccount.href = "login.html";
}

// Side-nav Account Link (if exists)
const sideNavAccount = document.querySelector("#Account a");
if (sideNavAccount) {
  if (username) {
    sideNavAccount.innerText = `Welcome, ${username}`;
    sideNavAccount.href = "account.html";
  } else {
    sideNavAccount.innerText = "Account";
    sideNavAccount.href = "login.html";
  }
}
