// elements
const passwordEl = document.querySelectorAll(".password");
const generateBtn = document.querySelector(".generate-btn");
// all characters
let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// password generating
let generatePassword = function (l) {
  let passwords = [1, 2, 3, 4];

  let password = "";
  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 6; i++) {
      let randomNum = Math.trunc(Math.random() * 61);
      password += chars[randomNum];
    }
    passwords[j] = password;
    password = "";
  }

  for (let i = 0; i < passwords.length; i++) {
    passwordEl[i].textContent = passwords[i];
  }
};

generateBtn.addEventListener("click", () => {
  generatePassword(6);
});
