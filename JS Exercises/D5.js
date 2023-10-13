/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < 4; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

const orderedPets = pets.sort();
console.log(orderedPets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

for (let i = pets.length - 1; i >= 0; i--) {
  console.log(pets[i]);
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const firstElement = pets.shift();
pets.push(firstElement);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

//*const licensePlateNames = ["GH124CD", "DE008KL", "FE743BT"];cars.licensePlate.push = licensePlateNames;console.log(cars);//

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

let lastCar = {
  brand: "Fiat",
  model: "Panda",
  color: "gray",
  trims: ["GT", "style"],
};
cars.push(lastCar);
cars.forEach((car) => {
  car.trims.pop();
});
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i].trims[0]);
  justTrims.push(cars[i].trims[0]);
}
console.log(justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
cars.forEach((car) => {
  if (car.color.charAt(0) === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
});
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
let i = 0;
while (i < numericArray.length && numericArray[i] !== 32) {
  console.log(numericArray[i]);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const positionsArray = charactersArray.map((char) => {
  switch (char) {
    case "a":
      return alphabet.indexOf(char) + 1;
    case "b":
      return alphabet.indexOf(char) + 1;
    case "c":
      return alphabet.indexOf(char) + 1;
    case "d":
      return alphabet.indexOf(char) + 1;
    case "e":
      return alphabet.indexOf(char) + 1;
    case "f":
      return alphabet.indexOf(char) + 1;
    case "g":
      return alphabet.indexOf(char) + 1;
    case "h":
      return alphabet.indexOf(char) + 1;
    case "i":
      return alphabet.indexOf(char) + 1;
    case "j":
      return alphabet.indexOf(char) + 1;
    case "k":
      return alphabet.indexOf(char) + 1;
    case "l":
      return alphabet.indexOf(char) + 1;
    case "m":
      return alphabet.indexOf(char) + 1;
    case "n":
      return alphabet.indexOf(char) + 1;
    case "o":
      return alphabet.indexOf(char) + 1;
    case "p":
      return alphabet.indexOf(char) + 1;
    case "q":
      return alphabet.indexOf(char) + 1;
    case "r":
      return alphabet.indexOf(char) + 1;
    case "s":
      return alphabet.indexOf(char) + 1;
    case "t":
      return alphabet.indexOf(char) + 1;
    case "u":
      return alphabet.indexOf(char) + 1;
    case "v":
      return alphabet.indexOf(char) + 1;
    case "w":
      return alphabet.indexOf(char) + 1;
    case "x":
      return alphabet.indexOf(char) + 1;
    case "y":
      return alphabet.indexOf(char) + 1;
    case "z":
      return alphabet.indexOf(char) + 1;

    default:
      return -1;
  }
});
console.log(positionsArray);
