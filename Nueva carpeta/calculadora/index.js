/*let display = document.querySelector(".display");
const buttonsNumber = document.querySelectorAll(".button-number");
let firstNumber = 0;

buttonsNumber.forEach((button) => {
    button.addEventListener("click",(e)=>{
        agregarNumero(button.innerText)
        console.log("agregar numero"+ agregarNumero)
        console.log(button.value, "es el valor del boton clickeado");
        display.textContent += button.value;
        //firstNumber=display.innerText
        //console.log("el primer numero es "+firstNumber)
        //firstNumber = display.textContent //+= button.value;
        //console.log ("el numero en display es: "+firstNumber)
        console.log ("etarget"+e.target.innerText)
        console.log(e.target.innerText)
    }) 
})
//console.log(firstNumber *2)*/

const numbersButton = document.querySelectorAll(".button-number")
const operationButton = document.querySelectorAll(".button-operator")
const deleteButton = document.querySelector(".button-clear")
const iqualButton = document.querySelector(".button-result")
const result = document.querySelector(".display")
let opActual = "";
let opAnterior= "";
let operacion = undefined;

numbersButton.forEach((button) => {
    button.addEventListener("click",()=>{
        agregarNumero(button.innerText)
        alert(button.innerText)
    })
})

operationButton.forEach((button) => {
    button.addEventListener("click",()=>{
        agregarNumero(button.innerText)
    })
})

iqualButton.addEventListener("click",()=>{
        calcular()
        actualizarDisplay()
})

deleteButton.addEventListener("click",()=>{
    clear()
    actualizarDisplay()
})

function agregarNumero(num){
    opActual = opActual.toString() + num.toString()
    actualizarDisplay()
    console.log(opActual)
}

function actualizarDisplay(){
    result.value = opActual;
    console.log(opActual)
}