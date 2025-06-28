const accountBtn = document.querySelector(".navbar-items-4");

accountBtn.addEventListener("click", () => {
  accountBtn.innerText = "Welcome! AK Infratech";
});

const products = [
  {
    name: "Useless Speaker-I",
    price: "1,999",
    desc: "Lorem ipsum dolor sit amet consectetur...",
    image: "speaker1.jpg",
  },
  {
    name: "Useless Speaker-II",
    price: "2,999",
    desc: "Lorem ipsum dolor sit amet consectetur...",
    image: "speaker2.jpg",
  },
  {
    name: "Useless Speaker-III",
    price: "1,499",
    desc: "Lorem ipsum dolor sit amet consectetur...",
    image: "speaker1.jpg",
  },
  {
    name: "Useless Speaker-IV",
    price: "2,999",
    desc: "Lorem ipsum dolor sit amet consectetur...",
    image: "speaker2.jpg",
  },
  {
    name: "Useless Keyboard-I",
    price: "999",
    desc: "Lorem ipsum dolor sit amet consectetur...",
    image: "keyboard.jpg",
  },
  {
    name: "Useless Keyboard-II",
    price: "799",
    desc: "Lorem ipsum dolor sit amet consectetur...",
    image: "keyboard1.jpg",
  },
  {
    name: "Useless Keyboard-III",
    price: "1,199",
    desc: "Lorem ipsum dolor sit amet consectetur...",
    image: "keyboard.jpg",
  },
  {
    name: "Useless Keyboard-IV",
    price: "1,499",
    desc: "Lorem ipsum dolor sit amet consectetur...",
    image: "keyboard1.jpg",
  },
  {
    name: "Useless Monitor-I",
    price: "11,999",
    desc: "Lorem ipsum dolor sit amet consectetur...",
    image: "monitor.jpg",
    deal: "Limited Offer!",
    strikethrough: "15,999",
  },
  {
    name: "Useless Monitor-II",
    price: "10,999",
    desc: "Lorem ipsum dolor sit amet consectetur...",
    image: "monitor1.jpg",
    deal: "Limited Offer!",
    strikethrough: "16,999",
  },
  {
    name: "Useless Monitor-III",
    price: "9,999",
    desc: "Lorem ipsum dolor sit amet consectetur...",
    image: "monitor2.jpg",
    deal: "Limited Offer!",
    strikethrough: "13,999",
  },
  {
    name: "Useless Monitor-IV",
    price: "8,999",
    desc: "Lorem ipsum dolor sit amet consectetur...",
    image: "monitor3.jpg",
    deal: "Limited Offer!",
    strikethrough: "10,999",
  },
  {
    name: "Useless Mouse-I",
    price: "599",
    desc: "Lorem ipsum dolor sit amet consectetur...",
    image: "mouse1.jpg",
  },
  {
    name: "Useless Mouse-II",
    price: "899",
    desc: "Lorem ipsum dolor sit amet consectetur...",
    image: "mouse3.jpg",
  },
  {
    name: "Useless Mouse-III",
    price: "699",
    desc: "Lorem ipsum dolor sit amet consectetur...",
    image: "monitor1.jpg",
  },
  {
    name: "Useless Mouse-IV",
    price: "499",
    desc: "Lorem ipsum dolor sit amet consectetur...",
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
      addToRecentlyViewed(foundProduct);

      let url = `product.html?name=${encodeURIComponent(
        foundProduct.name
      )}&price=${foundProduct.price}&desc=${encodeURIComponent(
        foundProduct.desc
      )}&image=${encodeURIComponent(foundProduct.image)}`;
      if (foundProduct.deal)
        url += `&deal=${encodeURIComponent(foundProduct.deal)}`;
      if (foundProduct.strikethrough)
        url += `&strikethrough=${encodeURIComponent(
          foundProduct.strikethrough
        )}`;

      window.location.href = url;
    } else {
      alert("Product not found.");
    }
  }
});

// Pincode Logic (Shared across pages)

function setupPincode(displayId, inputId) {
  const display = document.getElementById(displayId);
  const input = document.getElementById(inputId);

  const saved = localStorage.getItem("pincode");
  if (saved) display.innerText = `Pincode: ${saved}`;

  display.addEventListener("click", () => {
    input.style.display = "block";
    input.focus();
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const value = input.value.trim();
      if (value.length === 6 && /^\d+$/.test(value)) {
        localStorage.setItem("pincode", value);
        display.innerText = `Pincode: ${value}`;
        input.style.display = "none";
      } else {
        alert("Please enter a valid 6-digit Pincode.");
      }
    }
  });
}

setupPincode("pincode-display", "pincode-input");
setupPincode("pincode-display-2", "pincode-input-2");

// Recently Viewed Panel with sessionStorage

const imagePanel = document.getElementById("image-panel");

function showRecentlyViewed() {
  const recent = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
  imagePanel.innerHTML = "";

  recent.forEach((product) => {
    const img = document.createElement("img");
    img.src = `./statics/${product.image}`;
    img.alt = product.name;
    img.style.width = "20%";
    img.style.margin = "10px";
    img.style.cursor = "pointer";
    img.classList.add("recently-viewed-img");

    img.addEventListener("click", () => {
      addToRecentlyViewed(product);

      let url = `product.html?name=${encodeURIComponent(product.name)}&price=${
        product.price
      }&desc=${encodeURIComponent(product.desc)}&image=${encodeURIComponent(
        product.image
      )}`;
      if (product.deal) url += `&deal=${encodeURIComponent(product.deal)}`;
      if (product.strikethrough)
        url += `&strikethrough=${encodeURIComponent(product.strikethrough)}`;

      window.location.href = url;
    });

    imagePanel.appendChild(img);
  });
}

function addToRecentlyViewed(product) {
  const recent = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
  recent.unshift(product);
  const uniqueRecent = Array.from(
    new Map(recent.map((p) => [p.name, p])).values()
  );
  localStorage.setItem(
    "recentlyViewed",
    JSON.stringify(uniqueRecent.slice(0, 5))
  );
}

showRecentlyViewed();

// Catch when page becomes visible again or restored from cache
window.addEventListener("pageshow", (e) => {
  if (e.persisted) {
    showRecentlyViewed();
  }
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    showRecentlyViewed();
  }
});

// Optional: Clear recently viewed items on page reload
// Uncomment this block if you want them cleared on reload, not just tab close

// window.addEventListener("beforeunload", () => {
//   sessionStorage.removeItem("recentlyViewed");
// });
