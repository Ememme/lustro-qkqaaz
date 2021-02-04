import "./style.css";

const input = document.querySelector(".text-input");
const mirror = document.querySelector(".mirror");


input.addEventListener("input", updateValue);

function reverseInput(input) {
  let value = input.value
  let reversed = value.split("").reverse().join("")
  return reversed
}


function updateValue() {
  mirror.textContent = reverseInput(input);
}
