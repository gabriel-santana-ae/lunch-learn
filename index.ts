/**
 * @FirstExample
 * A basic function to test all the branches
 */
export const sumEvenNumberByTwo = (number: number) => {
  if (number % 2 !== 0) throw new Error(`Number ${number} is not even`);

  return number + 2;
}

/**
 * @SecondExample
 * A refactor of the first function, so it can accept an array of numbers
 */
export const sumEvenNumByTwoB = (n: number | number[]) => {
  const arr = typeof n === 'number' ? [ n ] : n;
  return arr.map((number) => {
    if (number % 2 !== 0) throw new Error(`Invalid even number: ${number}.`);

    return number + 2;
  });
};

/**
 * @ThirdExample
 * What happens when we deal with classes
 */
export class MathOperations {
  sumEvenNumByTwo(n: number | number[]) {
    const arr = typeof n === 'number' ? [ n ] : n;
    return arr.map((number) => {
      if (number % 2 !== 0) throw new Error(`Invalid even number: ${number}.`);
  
      return number + 2;
    })
  }

  subtractByTwo(n: number) {
    return n - 2;
  }
}