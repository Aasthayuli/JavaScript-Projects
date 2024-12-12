const passwordBox = document.getElementById("Password");
const btn = document.getElementById("btn");
const img = document.getElementById("cpy");

const len = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]<>/-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (len > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
}

btn.addEventListener("click", createPassword);

function copyPassword() {
  // Check if the Clipboard API is supported
  if (navigator.clipboard && passwordBox.value) {
    navigator.clipboard
      .writeText(passwordBox.value)
      .then(() => {
        alert("Password copied to clipboard!");
      })
      .catch((err) => {
        console.error("Could not copy password: ", err);
      });
  } else {
    // Fallback for older browsers
    passwordBox.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
  }
}

img.addEventListener("click", copyPassword);
