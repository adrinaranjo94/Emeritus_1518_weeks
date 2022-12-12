// EXERCISE 1

// Filter odd numbers, and multiply each item by 2, and filter again numbers greater than 50
let arr1 = [41, 40, 23, 25, 10, 80];

let finalArr1 = arr1
  .filter((number) => number % 2 !== 0) // [41,23,25]
  .map((number) => number * 2) // [82,46,50]
  .filter((number) => number > 50); // [82]

console.log(finalArr1);

// EXERCISE 2

// Filter numbers between 30 and 50, with these numbers you must add all the numbers that are even in single result
let arr2 = [41, 40, 23, 25, 10, 80];

let finalNumbers2 = arr2
  .filter((number) => number > 30 && number < 50) // [41,40]
  .filter((number) => number % 2 === 0) // [40]
  .join(" "); // 40

console.log(finalNumbers2);

// EXERCISE 3

// Get Top 1 each country
let arrComplex3 = [
  {
    name: "John",
    salary: 4500,
    country: "Spain",
  },
  {
    name: "George",
    salary: 3500,
    country: "Spain",
  },
  {
    name: "Donald",
    salary: 7500,
    country: "USA",
  },
  {
    name: "Michelle",
    salary: 5500,
    country: "USA",
  },
  {
    name: "Melanie",
    salary: 6500,
    country: "UK",
  },
];

let arrFinal3 = arrComplex3
  .reduce((countries, employee) => {
    const countryPosition = countries.findIndex(
      (country) => country.name === employee.country
    );
    // country = -1 not exists in array
    if (countryPosition !== -1) {
      countries[countryPosition].employees.push({
        name: employee.name,
        salary: employee.salary,
      });
    } else {
      countries.push({
        name: employee.country,
        employees: [
          {
            name: employee.name,
            salary: employee.salary,
          },
        ],
      });
    }
    return countries;
  }, [])
  .map((country) => ({
    ...country,
    topEmployee: country.employees.sort((a, b) => (a > b ? -1 : 1))[0],
  }))
  .map((country) => ({ name: country.name, topEmployee: country.topEmployee }));

console.log(arrFinal3);

// EXERCISE 4

// Get total salary each country

let arrComplex4 = [
  {
    name: "John",
    salary: 4500,
    country: "Spain",
  },
  {
    name: "George",
    salary: 3500,
    country: "Spain",
  },
  {
    name: "Donald",
    salary: 7500,
    country: "USA",
  },
  {
    name: "Michelle",
    salary: 5500,
    country: "USA",
  },
  {
    name: "Melanie",
    salary: 6500,
    country: "UK",
  },
];

let finalArr4 = arrComplex4.reduce((countries, employee) => {
  const countryPosition = countries.findIndex(
    (country) => country.name === employee.country
  );
  // country = -1 not exists in array
  if (countryPosition !== -1) {
    countries[countryPosition].salary += employee.salary;
  } else {
    countries.push({
      name: employee.country,
      salary: employee.salary,
    });
  }
  return countries;
}, []);

console.log(finalArr4);

// EXERCISE 5

// Get lowest salary each country and show each item with name like this: "Jhon - XXXXX$ | Country", as a string array, not object array

let arrComplex5 = [
  {
    name: "John",
    salary: 4500,
    country: "Spain",
  },
  {
    name: "George",
    salary: 3500,
    country: "Spain",
  },
  {
    name: "Donald",
    salary: 7500,
    country: "USA",
  },
  {
    name: "Michelle",
    salary: 5500,
    country: "USA",
  },
  {
    name: "Melanie",
    salary: 6500,
    country: "UK",
  },
];

let finalArr5 = arrComplex5
  .reduce((countries, employee) => {
    const countryPosition = countries.findIndex(
      (country) => country.name === employee.country
    );
    // country = -1 not exists in array
    if (countryPosition !== -1) {
      countries[countryPosition].employees.push({
        name: employee.name,
        salary: employee.salary,
      });
    } else {
      countries.push({
        name: employee.country,
        employees: [
          {
            name: employee.name,
            salary: employee.salary,
          },
        ],
      });
    }
    return countries;
  }, [])
  .map((country) => ({
    ...country,
    lowestEmployee: country.employees.sort((a, b) => (a > b ? 1 : -1))[0],
  }))
  .map(
    (country) =>
      `${country.lowestEmployee.name} - ${country.lowestEmployee.salary}$ | ${country.name}`
  );

console.log(finalArr5);

// EXERCISE 6

// Create and object array from this array

let arrComplex6 = [
  {
    name: "John",
    salary: 4500,
    country: "Spain",
  },
  {
    name: "George",
    salary: 3500,
    country: "Spain",
  },
  {
    name: "Donald",
    salary: 7500,
    country: "USA",
  },
  {
    name: "Michelle",
    salary: 5500,
    country: "USA",
  },
  {
    name: "Melanie",
    salary: 6500,
    country: "UK",
  },
];

let finalArr6 = arrComplex6.reduce((countries, employee) => {
  const countryPosition = countries.findIndex(
    (country) => country.name === employee.country
  );
  // country = -1 not exists in array
  if (countryPosition !== -1) {
    countries[countryPosition].employees.push(employee.name);
    countries[countryPosition].totalSalary += employee.salary;
  } else {
    countries.push({
      name: employee.country,
      employees: [employee.name],
      totalSalary: employee.salary,
    });
  }
  return countries;
}, []);

console.log(finalArr6);
