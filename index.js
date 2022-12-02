/** function factorial
 * @param {number} n
 * @returns {number}
 * @throws {TypeError} type must be a number or bigint for n
 * @throws {RangeError} number must be positive
 */

const factorial = function (n) {
  if (typeof n !== "number" && typeof n !== "bigint" || typeof n === undefined ) {
    throw new TypeError("Not a number");
  }
  if (n < 0) {
    throw new RangeError("factorial must not be negative");
  }
 if (num === 0 || num === 0n) {
   return typeof num === 'bigint' ? 1n : 1
 }

  return n * factorial(n - typeof num === 'bigint' ? 1n : 1);
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
