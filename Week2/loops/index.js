// for (let counter = 1; counter <= 100; counter++) {
//   console.log(counter);
// }

const august2021Weeks = [
  [1],
  [2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15],
  [16, 17, 18, 18, 19, 20, 21, 22],
  [23, 24, 25, 26, 27, 28, 29],
  [30, 31],
];

// pintar todos los dias de todas las semanas
for (let initialWeek = 0; initialWeek < august2021Weeks.length; initialWeek++) {
  console.log("semana ", initialWeek + 1, august2021Weeks[initialWeek]);
  let currentWeek = august2021Weeks[initialWeek];
  for (let initialDay = 0; initialDay < currentWeek.length; initialDay++) {
    console.log("dia ", initialDay + 1, "valor", currentWeek[initialDay]);
  }
}
