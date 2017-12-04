/**
 *     Write a JavaScript function to check whether an input is a date object or not
 */

//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.log("[0] `isDate` should be a function");
console.assert(typeof isDate === "function");
console.log("[0] ==================================================");
console.log();

console.log("[1] Should return false sending a string object as input ");
console.assert(isDate("2017/11/05") === false);
console.log("[1] ==================================================");
console.log();

console.log("[2] Should return false sending a string object as input ");
console.assert(isDate("2010/07/25") === false);
console.log("[2] ==================================================");
console.log();

console.log("[3] Should return true sending a valid date object ");
console.assert(isDate(new Date("2017/11/05")) === true);
console.log("[3] ==================================================");
console.log();

console.log("[3] Should return true sending a valid date object ");
console.assert(isDate(new Date("2010/07/25")) === true);
console.log("[3] ==================================================");
console.log();
