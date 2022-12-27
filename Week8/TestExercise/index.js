/*
The so called FizzBuzz program is a basic programming exercise commonly used as a job interview question. The program usually comprises of printing a certain set of numbers from 1 to 100, but with a certain twist:

- When the number is a multiples of three, you print Fizz instead of the number
- When the number is a multiples of five, you print Buzz instead of the number
- When the number are the multiples of both three and five, you print FizzBuzz instead of the number

For example, the result of printing 10 to 15 should look like this:

Buzz # 10
11
Fizz # 12
13
14
FizzBuzz # 15

# Represents value of this line, so #10 is mupltiples of five, so is "Buzz".

We will create a method called fizzBuzz which have 2 params, first is begin number and second is last number

For example:
- From 1 to 15

-> fizzBuzz(1,15)

This will return all the numbers separated by line (remember array function .join("/n") to separate all items by line break )

Extra: 
- add 1 test case more to test if second parameter is greater than first parameter.


Final case

fizzbuzz(1,15)
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz

*/

const fizzBuzz = (initialNumber = 1, finalNumber = 5) => {
  const arr = [];
  if (initialNumber < finalNumber) {
    for (let number = initialNumber; finalNumber >= number; number++) {
      switch (number) {
        case number % 3 === 0 && number % 5 === 0:
          arr.push("FizzBuzz");
          break;
        case number % 3 === 0:
          arr.push("Fizz");
          break;
        case number % 5 === 0:
          arr.push("Buzz");
          break;

        default:
          arr.push(number);
          break;
      }
    }

    return arr;
  } else {
    return Error("error numbers");
  }
};

console.log(fizzBuzz("as", 343));

module.exports = { fizzBuzz };
