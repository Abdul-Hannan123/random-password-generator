const passwordBox = document.querySelector("#Password");
const length = 12;
let img = document.querySelector(".display img");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "#$%^&*()_+|}{[]></?-=";
const allChars = upperCase + lowerCase + number + symbol;
let button = document.querySelector("button");

button.addEventListener("click", () => {
    createPassword();
})
function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}
img.addEventListener("click", () => {
    copyPassword();
});
function copyPassword() {
    navigator.clipboard.writeText(passwordBox.value);
}
