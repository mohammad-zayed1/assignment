// login page
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const loginBtn = document.getElementById("loginBtn");


function handleLogin() {
  console.log(emailInput.value, passwordInput.value);

  if (emailInput.value != "" && passwordInput.value != "") {
    window.localStorage.setItem("token", true);
    loginForm.setAttribute("action", "./home.html");
    window.alert("welcome");
  } else {
    window.alert("email and password must not be empty");
  }
}

loginBtn.addEventListener("click", handleLogin);
