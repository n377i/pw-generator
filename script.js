"use strict";

let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", ":", ";", "<", ">", ".", "?", "/"];

const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const output = document.getElementById("output");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

lengthEl.oninput = () => { 
  output.textContent = lengthEl.value;
}
  
const generatePassword = () => {
  passwordEl.textContent = "";
  let length = lengthEl.value;
  characters.length = 52;
  if (numbersEl.checked) {
    characters = characters.concat(numbers);
  }
  if (symbolsEl.checked) {
    characters = characters.concat(symbols);
  }
  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length);
    let randomCharacter = characters[randomNumber];
    passwordEl.textContent += randomCharacter;
  }
}
generateBtn.addEventListener("click", generatePassword);

const copyPassword = () => {
  navigator.clipboard.writeText(passwordEl.textContent);
}
copyBtn.addEventListener("click", copyPassword);