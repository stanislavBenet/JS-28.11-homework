/** function factorial
 * @param {number} n
 * @returns {number}
 * @throws {TypeError} type must be a number or bigint for num, type must be a number for exp
 * @throws {RangeError} number must be positive
 */

const factorial = function (n) {
  if (typeof n !== "number" && typeof n !== "bigint" || typeof n === undefined ) {
    throw new TypeError("Not a number");
  }
  if (n < 0) {
    throw new RangeError("factorial must not be negative");
  }

  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};
try {
  factorial(5);
  factorial("qwe");
} catch (error) {
  console.log("Not a number");
}
try {
  factorial(-5);
} catch (error) {
  console.log("factorial must not be negative");
}

console.log("code working");
