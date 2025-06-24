

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
   const msg = document.getElementById("message");
  if (u === "admin" && p === "1234") msg.textContent = "Login Successful";
  else msg.textContent = "Invalid Credentials";
 });
