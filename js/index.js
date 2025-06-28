const accountBtn = document.querySelector(".navbar-items-4");

accountBtn.addEventListener("click", () => {
  accountBtn.innerText = "Welcome! AK Infratech";
});

//
const products = [
  {
    name: "Useless Speaker-I",
    price: "1,999",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eveniet aspernatur aliquam fugit porro adipisci, sapiente maiores quo possimus minus, voluptates, voluptas ullam dolor commodi nulla nesciunt eius eum nostrum.This is a useless but stylish speaker.",
    image: "speaker1.jpg",
  },
  {
    name: "Useless Speaker-II",
    price: "2,999",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eveniet aspernatur aliquam fugit porro adipisci, sapiente maiores quo possimus minus, voluptates, voluptas ullam dolor commodi nulla nesciunt eius eum nostrum.This is a useless but stylish speaker.",
    image: "speaker2.jpg",
  },
  {
    name: "Useless Speaker-III",
    price: "1,499",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eveniet aspernatur aliquam fugit porro adipisci, sapiente maiores quo possimus minus, voluptates, voluptas ullam dolor commodi nulla nesciunt eius eum nostrum.This is a useless but stylish speaker.",
    image: "speaker1.jpg",
  },
  {
    name: "Useless Speaker-IV",
    price: "2,999",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eveniet aspernatur aliquam fugit porro adipisci, sapiente maiores quo possimus minus, voluptates, voluptas ullam dolor commodi nulla nesciunt eius eum nostrum.This is a useless but stylish speaker.",
    image: "speaker2.jpg",
  },
  {
    name: "Useless Keyboard-I",
    price: "999",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eveniet aspernatur aliquam fugit porro adipisci, sapiente maiores quo possimus minus, voluptates, voluptas ullam dolor commodi nulla nesciunt eius eum nostrum.",
    image: "keyboard.jpg",
  },
  {
    name: "Useless Keyboard-II",
    price: "799",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eveniet aspernatur aliquam fugit porro adipisci, sapiente maiores quo possimus minus, voluptates, voluptas ullam dolor commodi nulla nesciunt eius eum nostrum.",
    image: "keyboard1.jpg",
  },
  {
    name: "Useless Keyboard-III",
    price: "1,199",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eveniet aspernatur aliquam fugit porro adipisci, sapiente maiores quo possimus minus, voluptates, voluptas ullam dolor commodi nulla nesciunt eius eum nostrum.",
    image: "keyboard.jpg",
  },
  {
    name: "Useless Keyboard-IV",
    price: "1,499",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eveniet aspernatur aliquam fugit porro adipisci, sapiente maiores quo possimus minus, voluptates, voluptas ullam dolor commodi nulla nesciunt eius eum nostrum.",
    image: "keyboard1.jpg",
  },
  {
    name: "Useless Monitor-I",
    price: "11,999",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eveniet aspernatur aliquam fugit porro adipisci, sapiente maiores quo possimus minus, voluptates, voluptas ullam dolor commodi nulla nesciunt eius eum nostrum.A very expensive, useless monitor.",
    image: "monitor.jpg",
    deal: "Limited Offer!",
    strikethrough: "15,999",
  },
  {
    name: "Useless Monitor-II",
    price: "10,999",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eveniet aspernatur aliquam fugit porro adipisci, sapiente maiores quo possimus minus, voluptates, voluptas ullam dolor commodi nulla nesciunt eius eum nostrum.A very expensive, useless monitor.",
    image: "monitor1.jpg",
    deal: "Limited Offer!",
    strikethrough: "16,999",
  },
  {
    name: "Useless Monitor-III",
    price: "9,999",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eveniet aspernatur aliquam fugit porro adipisci, sapiente maiores quo possimus minus, voluptates, voluptas ullam dolor commodi nulla nesciunt eius eum nostrum.A very expensive, useless monitor.",
    image: "monitor2.jpg",
    deal: "Limited Offer!",
    strikethrough: "13999",
  },
  {
    name: "Useless Monitor-IV",
    price: "8,999",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eveniet aspernatur aliquam fugit porro adipisci, sapiente maiores quo possimus minus, voluptates, voluptas ullam dolor commodi nulla nesciunt eius eum nostrum.A very expensive, useless monitor.",
    image: "monitor3.jpg",
    deal: "Limited Offer!",
    strikethrough: "10,999",
  },
  {
    name: "Useless Mouse-I",
    price: "599",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eveniet aspernatur aliquam fugit porro adipisci, sapiente maiores quo possimus minus, voluptates, voluptas ullam dolor commodi nulla nesciunt eius eum nostrum.A very expensive, useless monitor.",
    image: "mouse1.jpg",
  },
  {
    name: "Useless Mouse-II",
    price: "899",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eveniet aspernatur aliquam fugit porro adipisci, sapiente maiores quo possimus minus, voluptates, voluptas ullam dolor commodi nulla nesciunt eius eum nostrum.A very expensive, useless monitor.",
    image: "mouse3.jpg",
  },
  {
    name: "Useless Mouse-III",
    price: "699",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eveniet aspernatur aliquam fugit porro adipisci, sapiente maiores quo possimus minus, voluptates, voluptas ullam dolor commodi nulla nesciunt eius eum nostrum.A very expensive, useless monitor.",
    image: "monitor1.jpg",
  },
  {
    name: "Useless Mouse-IV",
    price: "499",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eveniet aspernatur aliquam fugit porro adipisci, sapiente maiores quo possimus minus, voluptates, voluptas ullam dolor commodi nulla nesciunt eius eum nostrum.A very expensive, useless monitor.",
    image: "mouse3.jpg",
  },
];
const searchInput = document.getElementById("shoppy-search");

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const query = searchInput.value.trim().toLowerCase();
    const foundProduct = products.find((product) =>
      product.name.toLowerCase().includes(query)
    );

    if (foundProduct) {
      // Build URL with all available details
      let url = `product.html?name=${encodeURIComponent(
        foundProduct.name
      )}&price=${foundProduct.price}&desc=${encodeURIComponent(
        foundProduct.desc
      )}&image=${encodeURIComponent(foundProduct.image)}`;

      if (foundProduct.deal) {
        url += `&deal=${encodeURIComponent(foundProduct.deal)}`;
      }
      if (foundProduct.strikethrough) {
        url += `&strikethrough=${encodeURIComponent(
          foundProduct.strikethrough
        )}`;
      }

      window.location.href = url;
    } else {
      alert("Product not found.");
    }
  }
});
//

const pincodeDisplay = document.getElementById("pincode-display");
const pincodeInput = document.getElementById("pincode-input");

// Show stored Pincode if it exists
const savedPincode = localStorage.getItem("pincode");
if (savedPincode) {
  pincodeDisplay.innerText = `Pincode: ${savedPincode}`;
}

pincodeDisplay.addEventListener("click", () => {
  pincodeInput.style.display = "block";
  pincodeInput.focus();
});

pincodeInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const value = pincodeInput.value.trim();
    if (value.length === 6 && /^\d+$/.test(value)) {
      localStorage.setItem("pincode", value); // Save to localStorage
      pincodeDisplay.innerText = `Pincode: ${value}`;
      pincodeInput.style.display = "none";
    } else {
      alert("Please enter a valid 6-digit Pincode.");
    }
  }
});

// 

const imagePanel = document.getElementById("image-panel");

function showRecentlyViewed() {
  const recent = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
  imagePanel.innerHTML = ""; // Clear existing

  recent.forEach((product) => {
    const img = document.createElement("img");
    img.src = `./statics/${product.image}`;
    img.alt = product.name;
    img.style.width = "20%";
    img.style.margin = "10px";
    img.style.cursor = "pointer";
    img.classList.add("recently-viewed-img");


    // Optional: Clicking image goes to product
    img.addEventListener("click", () => {
      let url = `product.html?name=${encodeURIComponent(
        product.name
      )}&price=${product.price}&desc=${encodeURIComponent(
        product.desc
      )}&image=${encodeURIComponent(product.image)}`;

      window.location.href = url;
    });

    imagePanel.appendChild(img);
  });
}

showRecentlyViewed();

// 

const pincodeDisplay2 = document.getElementById("pincode-display-2");
const pincodeInput2 = document.getElementById("pincode-input-2");

// Show stored Pincode if it exists
const savedPincode2 = localStorage.getItem("pincode");
if (savedPincode2) {
  pincodeDisplay2.innerText = `Pincode: ${savedPincode2}`;
}

pincodeDisplay2.addEventListener("click", () => {
  pincodeInput2.style.display = "block";
  pincodeInput2.focus();
});

pincodeInput2.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const value = pincodeInput2.value.trim();
    if (value.length === 6 && /^\d+$/.test(value)) {
      localStorage.setItem("pincode", value); // Save to localStorage
      pincodeDisplay2.innerText = `Pincode: ${value}`;
      pincodeInput2.style.display = "none";
    } else {
      alert("Please enter a valid 6-digit Pincode.");
    }
  }
});

