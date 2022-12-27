const { fizzBuzz } = require("./index");

describe("validation fizzbuzz", () => {
  test("Fizzbuzz method will return array", () => {
    const response = fizzBuzz();
    expect(Array.isArray(response)).toBe(true);
  });

  test("Fizzbuzz first parameter will be less than second parameter", () => {
    const response = fizzBuzz(1, 5);

    expect(Array.isArray(response)).toBe(true);

    //erroneo
    const secondResponse = fizzBuzz(4, 1);

    expect(Array.isArray(secondResponse)).toBe(false);
  });

  test("Fizzbuzz method will create arr with difference between initialnumber and finalnumber", () => {
    const response = fizzBuzz(1, 15);

    expect(response.length).toBe(15);

    const secondResponse = fizzBuzz(5, 10);

    expect(secondResponse.length).toBe(6);
  });

  test("Fizzbuzz method when position is 3 mult will be Fizz", () => {
    const response = fizzBuzz(1, 7);

    console.log(response);

    expect(response[2]).toBe("Fizz");

    expect(response[5]).toBe("Fizz");
  });

  test("Fizzbuzz method when position is 5 mult will be Buzz", () => {
    const response = fizzBuzz(1, 11);

    expect(response[4]).toBe("Buzz");

    expect(response[9]).toBe("Buzz");
  });

  test("Fizzbuzz method when position is 3mult and 5 mult will be FizzBuzz", () => {
    const response = fizzBuzz(1, 15);

    expect(response[14]).toBe("FizzBuzz");
  });
});
