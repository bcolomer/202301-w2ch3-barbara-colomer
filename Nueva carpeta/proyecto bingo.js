const welcome = () => {
  let userName = prompt("Ingrese su nombre de usuario");
  if (userName === null || userName === "" || userName === " ") {
    alert("Por favor, ingrese un nombre de usuario valido");
    return welcome();
  } else {
    userName = userName.toUpperCase();
    console.log(
      `${userName}, bienvenido al Bingo Online, para jugadores empedernidos anonimos!`
    );
  }
};

const lineOne = [];
const lineTwo = [];
const lineThree = [];
const numbersOut = [0];

const fillLineOne = () => {
  do {
    let addnumber = Math.ceil(Math.random() * 15);
    if (!numbersOut.includes(addnumber)) {
      alert(
        "los numeros de tu tarjeta de bingo para la 1era fila son: " + addnumber
      );
      lineOne.push({ code: addnumber, match: false });
      numbersOut.push(addnumber);
    }
  } while (lineOne.length < 5);
  console.table(lineOne);
};

const fillLineTwo = () => {
  do {
    let addnumber = Math.ceil(Math.random() * 15);
    if (!numbersOut.includes(addnumber)) {
      alert(
        "los numeros de tu tarjeta de bingo para la 2da fila son: " + addnumber
      );
      lineTwo.push({ code: addnumber, match: false });
      numbersOut.push(addnumber);
    }
  } while (lineTwo.length < 5);
  console.table(lineTwo);
};

const fillLineThree = () => {
  do {
    let addnumber = Math.ceil(Math.random() * 15);
    if (!numbersOut.includes(addnumber)) {
      alert(
        "los numeros de tu tarjeta de bingo para la 3era fila son: " + addnumber
      );
      lineThree.push({ code: addnumber, match: false });
      numbersOut.push(addnumber);
    }
  } while (lineThree.length < 5);
  console.table(lineThree);
};

const usedNumbers = [];

const getRandomNumber = () => {
  let addnumber = Math.ceil(Math.random() * 20);
  if (usedNumbers.includes(addnumber)) {
    getRandomNumber();
  } else if (lineOne.some((codes) => codes.code === addnumber)) {
    alert(
      "ha salido el numero: " +
        addnumber +
        " y esta en tu carton en la linea uno!"
    );
    let index = lineOne.findIndex((x) => x.code === addnumber);
    lineOne[index].match = true;
    usedNumbers.push(addnumber);
    console.table(lineOne);
  } else if (lineTwo.some((codes) => codes.code === addnumber)) {
    alert(
      "ha salido el numero: " +
        addnumber +
        " y esta en tu carton en la linea dos!"
    );
    //console.table(lineTwo)
    let index = lineTwo.findIndex((x) => x.code === addnumber);
    lineTwo[index].match = true;
    usedNumbers.push(addnumber);
    console.table(lineTwo);
  } else if (lineThree.some((codes) => codes.code === addnumber)) {
    alert(
      "ha salido el numero: " +
        addnumber +
        " y esta en tu carton en la linea tres!"
    );
    //console.table(lineThree)
    let index = lineThree.findIndex((x) => x.code === addnumber);
    lineThree[index].match = true;
    usedNumbers.push(addnumber);
    console.table(lineThree);
  } else {
    alert("ha salido el numero " + addnumber + " pero no esta en tu cartón");
    usedNumbers.push(addnumber);
  }
};

const bingoPlay = () => {
  let allMatchedOne;
  let allMatchedTwo;
  let allMatchedThree;
  while (!allMatchedOne || !allMatchedTwo || !allMatchedThree) {
    do {
      getRandomNumber();
      allMatchedOne = lineOne.every((lineOne) => lineOne.match);
      console.table(lineOne);
      allMatchedTwo = lineTwo.every((lineTwo) => lineTwo.match);
      console.table(lineTwo);
      allMatchedThree = lineThree.every((lineThree) => lineThree.match);
      console.table(lineThree);
    } while (!allMatchedOne && !allMatchedTwo && !allMatchedThree);
    alert(`ENHORABUENA! Has cantado Linea en  ${usedNumbers.length} tiradas`);
  }
  alert(`ENHORABUENA! Has cantado Bingo en  ${usedNumbers.length} tiradas`);
};
const playBingoApp = () => {
  welcome();
  const playBingo = () => {
    fillLineOne();
    fillLineTwo();
    fillLineThree();
    getRandomNumber();
    bingoPlay();
  };
  playBingo();
};
playBingoApp();
