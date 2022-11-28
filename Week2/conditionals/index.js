let bIsConnected = false;

// if (bIsConnected == true)
if (bIsConnected) {
  console.log("Is connected");
} else {
  console.log("Check your connection");
}

// if ( bIsConnected == false)
if (!bIsConnected) {
  console.log("Check your connection");
}

let sNumber = "5";

let iNumber = 5;

if (sNumber == iNumber) {
  console.log("igual");
}

if (sNumber === iNumber) {
  // no entra
} else {
}

let sNumber2 = "7";

let iNumber2 = 9;

if (sNumber != iNumber) {
  console.log("distinto");
}

if (sNumber !== iNumber) {
  console.log("distinto tipo y valor");
}

console.log("tipo de variable", typeof iNumber2);

if (iNumber <= iNumber2) {
}

//ternary

let number = 2;
if (number % 2 === 0) {
  return "par";
} else {
  return "impar";
}

number % 2 === 0 ? "par" : "impar";
