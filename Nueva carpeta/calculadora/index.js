const numbersButton = document.querySelectorAll(".button-number");
const operationButton = document.querySelectorAll(".button-operator");
const deleteButton = document.querySelector(".button-clear");
const iqualButton = document.querySelector(".button-result");
const result = document.querySelector(".display");
let opActual = "";
let opAnterior = "";
let operacion = undefined;

numbersButton.forEach((button) => {
  button.addEventListener("click", () => {
    agregarNumero(button.innerText);
    alert(button.innerText);
  });
});

operationButton.forEach((button) => {
  button.addEventListener("click", () => {
    agregarNumero(button.innerText);
  });
});

iqualButton.addEventListener("click", () => {
  calcular();
  actualizarDisplay();
});

deleteButton.addEventListener("click", () => {
  clear();
  actualizarDisplay();
});

function agregarNumero(num) {
  opActual = opActual.toString() + num.toString();
  actualizarDisplay();
  console.log(opActual);
}

function actualizarDisplay() {
  result.value = opActual;
  console.log(opActual);
}
