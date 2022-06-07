// elements
const password = document.querySelectorAll(".password");
const generateBtn = document.querySelector(".generate-btn");
// all characters

let chars = [];
for (let i = 48; i < 125; i++) {
  if (
    String.fromCharCode(i) != "[" &&
    String.fromCharCode(i) != "\\" &&
    String.fromCharCode(i) != "]" &&
    String.fromCharCode(i) != "_" &&
    String.fromCharCode(i) != "`" &&
    String.fromCharCode(i) != ":" &&
    String.fromCharCode(i) != ";" &&
    String.fromCharCode(i) != "," &&
    String.fromCharCode(i) != "=" &&
    String.fromCharCode(i) != ">" &&
    String.fromCharCode(i) != "?" &&
    String.fromCharCode(i) != "@" &&
    String.fromCharCode(i) != "^"
  ) {
    chars.push(String.fromCharCode(i));
  }
}

// random passwords
// password generating
let generatePassword = function (l) {
  let passwords = [];
  let randomPasword1 = "";
  let randomPasword2 = "";
  let randomPasword3 = "";
  let randomPasword4 = "";

  for (let i = 0; i < l; i++) {
    randomChar = Math.trunc(Math.random() * 65);
    randomPasword1 += chars[randomChar];
  }
  passwords.push(randomPasword1);
  for (let i = 0; i < l; i++) {
    randomChar = Math.trunc(Math.random() * 65);
    randomPasword2 += chars[randomChar];
  }
  passwords.push(randomPasword2);
  for (let i = 0; i < l; i++) {
    randomChar = Math.trunc(Math.random() * 65);
    randomPasword3 += chars[randomChar];
  }
  passwords.push(randomPasword3);
  for (let i = 0; i < l; i++) {
    randomChar = Math.trunc(Math.random() * 65);
    randomPasword4 += chars[randomChar];
  }
  passwords.push(randomPasword4);
  for (let i = 0; i < password.length; i++) {
    password[i].textContent = passwords[i];
  }
};

generateBtn.addEventListener("click", () => {
  generatePassword(6);
});
