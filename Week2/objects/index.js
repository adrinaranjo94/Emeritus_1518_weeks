let person = {
  name: "Adrian",
  surname: "Naranjo",
  age: 27,
};

let person2 = {
  name: "Sergio",
  surname: "Naranjo",
  age: 27,
};

console.log(person.name);

console.log(person.age);

function getName(tempPerson) {
  console.log(tempPerson.name);
}

function getSurname(tempPerson) {
  console.log(tempPerson.surname);
}

function getAge(tempPerson) {
  console.log(tempPerson.age);
}

function getPropertyByKey(tempPerson, key) {
  console.log(tempPerson[key]);
}

getPropertyByKey(person, "surname");
