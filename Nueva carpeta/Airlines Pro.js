let flights = [
    { 
      id: 00, 
      to: "New York", 
      from: "Barcelona", 
      cost: 700, 
      scale: false 
    },
    { id: 01, 
      to: "Los Angeles", 
      from: "Madrid", 
      cost: 1100, 
      scale: true 
    },
    { id: 02, 
      to: "Paris", 
      from: "Barcelona", 
      cost: 210,  
      scale: false 
    },
    { id: 03, 
      to: "Roma", 
      from: "Barcelona", 
      cost: 150, 
      scale: false 
    },
    { id: 04, 
      to: "London", 
      from: "Madrid", 
      cost: 200, 
      scale: false 
    },
    { id: 05, 
      to: "Madrid", 
      from: "Barcelona", 
      cost: 90, 
      scale: false 
    },
    { id: 06, 
      to: "Tokyo", 
      from: "Madrid", 
      cost: 1500, 
      scale: true 
    },
    { id: 07, 
      to: "Shangai", 
      from: "Barcelona", 
      cost: 800, 
      scale: true 
    },
    { id: 08, 
      to: "Sydney", 
      from: "Barcelona", 
      cost: 150, 
      scale: true 
    },
    { id: 09, 
      to: "Tel-Aviv", 
      from: "Madrid", 
      cost: 150, 
      scale: false 
    },
  ];
  
const welcome = ()=>{
let user = prompt("Buenos dias, ¿Cual es su nombre?");
user = user.toUpperCase()
console.log(` ${user}, bienvenido a la pagina web de la aerolinea Programadores del Aire, le informamos que los vuelos del dia de hoy son los siguientes:  `)
}
const welcomeTwo = ()=>{
let user = prompt("Buenos dias, ¿Cual es su nombre?");
user = user.toUpperCase()
console.log(` ${user}, bienvenido a la pagina web de la aerolinea Programadores del Aire, este es el listado de vuelos luego de las modificaciones realizadas:   `)
}

const showFlights = () => {
flights.forEach((flight)=>{
if (flight.scale === false){
  console.log (`---> El vuelo Numero ${flight.id} con origen: ${flight.from}, y destino: ${flight.to} tiene un coste de ${flight.cost}€ y no realiza ninguna escala.\n`)
}else { 
  console.log (`---> El vuelo Numero ${flight.id} con origen: ${flight.from}, y destino: ${flight.to} tiene un coste de ${flight.cost}€ y es un vuelo con escalas programadas.\n`)
}
})
};

const averageFlights = () => {
sum = 0;
flights.forEach((flight)=>{
sum = sum + flight.cost
return sum
})
console.log(`\nProgramadores del Aire le informa que el precio medio de los vuelos del dia de hoy es de ${sum/flights.length}€.`)
}

const hasScales = () => {
sum = 0;
flights.forEach((flight)=>{
if (flight.scale === true){
sum = sum+1;
} 
}) 
console.log( `En el dia de hoy hay ${sum} vuelos que tienen escalas.`)
}

const lastDestinations = () => {
let destino = []
flights.forEach((flight)=>{
if (flight.id >= flights.length-5){
destino.push(flight.to)  } 
}) 
console.log(`\nLos ultimos 5 vuelos de hoy salen con los siguientes destinos: ${destino.join("; ")}.`);
}

const askPrice = ()=>{ // devuelve undefine si la llamo asi: console.log(askPrice())
const price = +prompt(`Por favor ingrese el presupuesto para su vuelo en euros`)
if( price === null ||
    Number.isNaN(+price) ||
    price ===""||
    price === 0 
) {
  return askPrice()
} else {
  return price
}
}

const lookPrice = (price)=> {
  console.log(`\n Para un presupuesto de ${price}€, los vuelos del dia son: `);
  flights.forEach((flight)=>{
    if (flight.cost <= price){
        console.log(`El vuelo con codigo ${flight.id} con salida de ${flight.from} y llegada a ${flight.to} tiene un coste de ${flight.cost}` )
}      
}) 
}  

const whatRole = ()=>{
const role = prompt ("¿Eres Usuario o Administrador?")
if(role === null){
  return whatRole()
} else if 
  (role.toUpperCase() !== "USUARIO" && role.toUpperCase() !== "ADMINISTRADOR") {
    alert("Entre un rol válido.")
    whatRole()
  } else{
     return role.toUpperCase()
  } 
}  

const whatToDo = () =>{
const toDo = prompt ("Deseas eliminar un vuelo o crear uno nuevo?")
if (toDo === null){
  return whatToDo()
} else if (
  toDo.toUpperCase() !== "CREAR" && toDo.toUpperCase() !== "ELIMINAR"){
    alert ("Por favor, ingrese solo crear o eliminar")
    whatToDo()
} else{
  return toDo.toUpperCase()
}
}

const adminToDo = ()=>{
const toDoResult = whatToDo()
if(toDoResult === "CREAR"){
  const newFlight ={}
  newFlight.id = +prompt("Intruduzca un nuevo id para el vuelo a crear, verifique que el id no este en uso.")
  newFlight.to = prompt("Intruduzca el destino del vuelo.")
  newFlight.from =prompt("Intruduzca el origen del vuelo.")
  newFlight.cost = +prompt("Intruduzca el precio del vuelo en euros.")
  newFlight.scale = prompt("¿El vuelo tiene escalas? responda si o no")
  if (newFlight.scale === "si"){
    newFlight.scale = true
  } else {
    newFlight.scale = false}
  flights.push(newFlight)
  console.log(flights)
  }
else if (toDoResult === "ELIMINAR") {
  //const deleteId = () => {
  const idtoDelete = +prompt ("indique el numero de Id a eliminar")
  flights = flights.filter(flight=> flight.id !== idtoDelete )
  console.log(flights)
}
}
const AirlinesApp = () =>{
let role = whatRole()
if (role === "USUARIO"){
welcome()
showFlights()
averageFlights()
hasScales() 
lastDestinations()
let price = askPrice()
lookPrice(price)
} else {
welcomeTwo()
adminToDo()
}
}
AirlinesApp