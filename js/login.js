const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username && password === "admin") {
    localStorage.setItem("username", username);
    window.location.href = "./index.html";
  } else {
    document.getElementById("error-msg").innerText =
      "Invalid credentials! Hint: Password is 'admin'";
  }
});
