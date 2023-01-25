/* VERSION BASICA CON 5 NUMEROS Y SOLO 10 EN EL BOMBO
const welcome = ()=>{
  let userName = prompt("Ingrese su nombre de usuario")
  if( userName === null || userName === "" || userName === " "){
   alert ("Por favor, ingrese un nombre de usuario valido")
    return welcome()
   } else { 
     userName = userName.toUpperCase()
     console.log(`${userName}, bienvenido al Bingo Online, para jugadores empedernidos anonimos!`)
   }
 }

//rellena una linea de 5 numeros de la tarjeta de bingo
const card= []
const fillCard = ()=>{
do{
let addnumber = (Math.ceil(Math.random()*90))//ceil redondea hacia arriba, floor hacia abajo y round al mas cerca, como no me interesa el cero pero si el 90, la opcion ceil es la mas acertada
if(!card.some(tarjeta => tarjeta.code === addnumber))//si el numero no esta aun en la linea, lo añade, si esta llama a la funcion otra vez
{
alert ("los numeros de tu tarjeta de bingo son: " + addnumber)
card.push({code: addnumber, match: false})
console.table(card)
}
 }
while(card.length <5) //hasta que tenga 5 numeros
//console.log(card)
}

//const lotteryDrum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//const lotteryDrum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90] 
const usedNumbers = []
//let round = 0

const getRandomNumber =()=>{
let addnumber = (Math.ceil(Math.random()*90))
//console.log("el numero que salio es : "+addnumber)
if (usedNumbers.includes(addnumber)) { 
  getRandomNumber()
}else if (card.some(codes => codes.code === addnumber)){
  alert("ha salido el numero: " + addnumber + " y esta en tu carton!")
  console.table(card)
  let index = card.findIndex(x => x.code === addnumber)
  card[index].match= true
  usedNumbers.push(addnumber)
  console.log(card)
   } else {
   alert("ha salido el numero " + addnumber + " pero no esta en tu cartón")
   usedNumbers.push(addnumber)
   }  // round++
}

const bingoplay =()=>{
let allMatched
do  {
  getRandomNumber()
 allMatched = card.every((cards) => cards.match)
 console.table(card)
 } 
 while (!allMatched)
alert(`ENHORABUENA! Has cantado linea en  ${usedNumbers.length} tiradas`)
}

const bingoApp = ()=>{    
  welcome()     
  fillCard()
  bingoplay()
  console.log("los numeros que han salido son : "+ usedNumbers+ ". Los turnos jugados son " + usedNumbers.length)
  }
bingoApp()*/































const welcome = ()=>{
  let userName = prompt("Ingrese su nombre de usuario")
  if( userName === null || userName === "" || userName === " "){
   alert ("Por favor, ingrese un nombre de usuario valido")
    return welcome()
   } else { 
     userName = userName.toUpperCase()
     console.log(`${userName}, bienvenido al Bingo Online, para jugadores empedernidos anonimos!`)
   }
 }

///rellena tres lineas de 5 numeros de la tarjeta de bingo
const cards= [
  cardOne = [],
  cardTwo = [],
  cardThree = []
]

const numbersOut =[0]

const fillCard = ()=>{
  cards.forEach((card)=>{
do{
let addnumber = (Math.ceil(Math.random()*15))/*ceil redondea hacia arriba, floor hacia abajo y round al mas cerca, como no me interesa el cero pero si el 90, la opcion ceil es la mas acertada*/
if((!numbersOut.includes(addnumber)) && (!card.some(tarjeta => tarjeta.code === addnumber)))//si el numero no esta aun en la linea, lo añade, si esta llama a la funcion otra vez
{
alert ("los numeros de tu tarjeta de bingo son: " + addnumber)
card.push({code: addnumber, match: false})
numbersOut.push(addnumber)
//console.log(card)//console.table
}
 }
while(card.length <5) //hasta que tenga 5 numeros
console.table(card)
})
}


const usedNumbers = []

const getRandomNumber =()=>{
let addnumber = (Math.ceil(Math.random()*15))
//console.log("el numero que salio es : "+addnumber)
if (usedNumbers.includes(addnumber)) { 
  getRandomNumber()
}else if (card.some(codes => codes.code === addnumber)){
  alert("ha salido el numero: " + addnumber + " y esta en tu carton!")
  console.table(card)
  let index = card.findIndex(x => x.code === addnumber)
  card[index].match= true
  usedNumbers.push(addnumber)
  console.log(card)
   } else {
   alert("ha salido el numero " + addnumber + " pero no esta en tu cartón")
   usedNumbers.push(addnumber)
   }  
}

const bingoplay =()=>{
let allMatched
do  {
  getRandomNumber()
 allMatched = card.every((cards) => cards.match)
 console.table(card) //console.table
 } 
 while (!allMatched)
alert(`ENHORABUENA! Has cantado linea en  ${usedNumbers.length} tiradas`);
}

const bingoApp = ()=>{    
  welcome()     
  fillCard()
  bingoplay()
  console.log("los numeros que han salido son : "+ usedNumbers+ ". Los turnos jugados son " + usedNumbers.length)
  }
bingoApp()
