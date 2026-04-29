// Oppgave 2 A
const navn = "Kent";
console.log(navn);
// Oppgave 2 B
let exampleNumber = 67;
console.log(exampleNumber);
// Oppgave 2 C
let itsWarmOutside = true;
console.log(itsWarmOutside);
//  Oppgave 2 D 
let Cars = ["Volvo", "Ford", "Volkswagen", "Tesla", "Toyota" ];
console.log(Cars);
// matematiske operatører
let exampleString2 = "Dette er matematiske operatører";
console.log(exampleString2);
let number = 10;
console.log(number + 5);
console.log(number - 3);
console.log(number * 2);
console.log(number / 2);
// forkortede operatører
let exampleString3 = "Dette er forkortede operatører";
console.log(exampleString3);
let number2 = 10;
console.log(number2 + 1);
console.log(number2 - 1);
console.log(number2 + 6);
console.log(number2 - 4);

// oppgave 4
let exampleString4 = "Dette er et eksempel på en innloggings tjeneste";
console.log(exampleString4);

let userName = "Kent";
let userAge = 30;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "/home";

if (userName !== "" && userAge >= 18 && userIsBlocked === false) {
  userIsLoggedIn = true;
  goToPage = "/home";
  console.log("Velkommen " + userName + "!");
} else {
  console.log("Du kan ikke logge inn" + "!");
}

let exampleString5 = "Dette er et eksempel på en ternary";
console.log(exampleString5);

const userMale = true;
const userTitle = userMale ? "mr." : "ms.";
console.log(userTitle);
