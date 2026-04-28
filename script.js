// Oppgave 2
// Her lager jeg en let variabel, som blir en string. siden jeg bruker "". exampleString bruker jeg i console.log for vis den i f12 etterpå
let exampleString = "Hallo. Hvordan går det med deg?";
console.log(exampleString);
// Her endrer jeg verdien i variabelen som er en string. og legger til en ny console.log for å vise den nye verdien i f12
exampleString = "Nå er dette den nye stringen";
console.log(exampleString);

// let eksempelNummer = 32; gjør så at når putter eksempelnummer i console.log. vil den da vise 32 i f12 console.
let eksempelNummer = 32;
console.log(eksempelNummer);
// Bolean brukes til brukes til å finne ut om ting er true/false
let exampleTrue = true;
let exampleFalse = false;
console.log(exampleTrue);
console.log(exampleFalse);

// oppgave 3
// matematiske operatører
let number = 10;
console.log(number + 5);
console.log(number - 3);
console.log(number * 2);
console.log(number / 2);
// forkortede operatører
let number2 = 10;
console.log(++number2);
number2 = 10;
console.log(--number2);
number2 = 10;
console.log((number2 += 6));
number2 = 10;
console.log((number2 -= 4));

// oppgave 4

let userName = "Kent";
let userAge = 30;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "/home";

if (userName !== "" && userAge >= 18 && userIsBlocked === false) {
  userIsLoggedIn = true;
  goToPage = "/home";
  console.log("Velkommen " + userName + "!");
}else {
    console.log("Du kan ikke logge inn" + "!");
}