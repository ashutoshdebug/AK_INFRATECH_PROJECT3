// Show More / Show Less
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

document.title = `${name} | Shoppy`;

const dealDiv = document.getElementById("deal");
dealDiv.style.display = deal ? "flex" : "none";
if (deal) dealDiv.innerText = deal;

const strikeDiv = document.getElementById("strikethroughprice");
strikeDiv.style.display = strikethrough ? "block" : "none";
if (strikethrough) strikeDiv.innerHTML = `<del>₹${strikethrough}</del>`;

// Add to Cart Logic for check out
const addToCartBtn = document.getElementById("cart");

addToCartBtn.addEventListener("click", () => {
  const quantity = parseInt(document.getElementById("select-quantity").value);

  const product = {
    name,
    price,
    image,
    quantity,
    deal: deal || "",
    strikethrough: strikethrough || "",
  };

  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  cart.push(product);
  sessionStorage.setItem("cart", JSON.stringify(cart));

  alert("Item added to cart!");
});

// Recently Viewed Logic using localStorage (Let's see which will work!)
if (name && price && desc && image) {
  const product = { name, price, desc, image, deal, strikethrough };

  let recent = JSON.parse(localStorage.getItem("recentlyViewed")) || [];

  recent = recent.filter((item) => item.name !== product.name);
  recent.unshift(product);
  if (recent.length > 4) recent.pop();

  localStorage.setItem("recentlyViewed", JSON.stringify(recent));
}
