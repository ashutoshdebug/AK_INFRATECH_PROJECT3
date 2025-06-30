const username = localStorage.getItem("username");
const accountInfo = document.getElementById("account-info");
const logoutBtn = document.getElementById("logout-btn");

if (!username) {
  window.location.href = "login.html";
} else {
  accountInfo.innerText = `Welcome, ${username}!`;
}

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("username");
  window.location.href = "index.html";
});

// Pincode setup (reuse your existing logic)
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
