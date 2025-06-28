const showMoreBtn = document.getElementById("showmore");
  const showLessBtn = document.getElementById("show-less");
  const para = document.getElementById("para");

  showMoreBtn.onclick = function () {
    para.style.maxHeight = para.scrollHeight + "px";
    showMoreBtn.style.display = "none";
    showLessBtn.style.display = "inline";
  };

  showLessBtn.onclick = function () {
    para.style.maxHeight = "0";
    showMoreBtn.style.display = "inline";
    showLessBtn.style.display = "none";
  };

  // Handling dynamic product data
  const params = new URLSearchParams(window.location.search);

  const name = params.get("name") || "Product Name";
  const price = params.get("price") || "0";
  const desc = params.get("desc") || "Product description here...";
  const image = params.get("image") || "monitor.jpg";
  const deal = params.get("deal"); 
  const strikethrough = params.get("strikethrough"); 

  document.getElementById("item-name").innerText = name;
  document.getElementById("product-price").innerText = `₹${price}`;
  document.getElementById("product-price-2").innerText = `₹${price}`;
  document.querySelector("#product-division-1 img").src = `statics/${image}`;
  document.getElementById("about-product").childNodes[2].textContent = desc;

  const dealDiv = document.getElementById("deal");
  if (deal) {
    dealDiv.style.display = "block";
    dealDiv.innerText = deal;
  } else {
    dealDiv.style.display = "none";
  }

  const strikeDiv = document.getElementById("strikethroughprice");
  if (strikethrough) {
    strikeDiv.style.display = "block";
    strikeDiv.innerHTML = `<del>₹${strikethrough}</del>`;
  } else {
    strikeDiv.style.display = "none";
  }

  // ✅ Add to Cart Logic
  const addToCartBtn = document.getElementById("cart");

  addToCartBtn.addEventListener("click", () => {
    const quantity = document.getElementById("select-quantity").value;

    // Prepare product object
    const product = {
      name: name,
      price: price,
      image: image,
      quantity: parseInt(quantity),
      deal: deal || "",
      strikethrough: strikethrough || ""
    };

    // Get existing cart from sessionStorage or initialize empty
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    cart.push(product);

    // Save updated cart back to sessionStorage
    sessionStorage.setItem("cart", JSON.stringify(cart));

    alert("Item added to cart!");
  });

  // 

  // Run this when the product page loads


if (name && price && desc && image) {
  const product = { name, price, desc, image };

  let recent = JSON.parse(sessionStorage.getItem("recentlyViewed")) || [];

  // Avoid duplicates (based on name)
  recent = recent.filter((item) => item.name !== product.name);

  recent.unshift(product); // Add to start

  // Keep only latest 4 items
  if (recent.length > 4) recent.pop();

  sessionStorage.setItem("recentlyViewed", JSON.stringify(recent));
}
