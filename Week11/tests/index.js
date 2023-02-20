// /**
//  *
//  *
//  * Return {users: []}
//  */
// const callToApi = () => {
//     return fetch("https://google.es")
// }

// const clickButtonDownloadUsers = () => {
//     callToApi().then(data => {

//         console.log(data.users)
//     });

//     // users is not defined in undefined
// }

let varBoolean = true;

let newBoolean = varBoolean;

varBoolean = false;

console.log("varBoolean", varBoolean);
console.log("newBoolean", newBoolean);

const arr1 = ["a", "b", "c"];

// SPREAD
const arr2 = [...arr1];

arr1.push("d");
// REST
const [a, ...arrRest] = arr1;

console.log(a, arrRest);
const user1 = {
  name: "Adrian",
  surname: "Naranjo",
  age: 28,
};

const user2 = {
  name: "Adrian",
  surname: "Naranjo",
  age: 28,
};

const { age: age1, name: name1, surname: surname1, ...rest1 } = user1;
const { age: age2, name: name2, surname: surname2, ...rest2 } = user2;
console.log(age1, age2);
if (age1 > age2) if (user1.age > user2.age) console.log("arr1", arr1);
console.log("arr2", arr2);

//  FUNCTIONS

// old

function checkBoolean(auxBoolean) {
  return auxBoolean;
}

function suma(num1, num2) {
  return num1 + num2;
}
// new arrowFunction
const checkBoolean1 = (auxBoolean) => auxBoolean;

const suma = (num1, num2) => num1 + num2;

let name = "Adrian";

console.log("Hola soy " + name + " y tengo 28 años");

console.log(`Hola soy ${name} y tengo 28 años`);
