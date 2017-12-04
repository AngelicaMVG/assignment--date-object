/**
 * Write a JavaScript function to get the number of days in a month.
 */
function daysInMonth(year, month) {}

console.log("[1] Check that `daysInMonth` is a function ");
console.assert(typeof daysInMonth === "function");
console.log("[1] ==================================================");
console.log();

console.log("[2] Should return 29 when asking for February, 2008");
console.assert(daysInMonth(2008, "February") === 29);
console.log("[2] ==================================================");
console.log();

console.log("[3] Should return 31 when asking for January, 2016");
console.assert(daysInMonth(2016, "January") === 31);
console.log("[3] ==================================================");
console.log();

console.log("[4] Should return 30 when asking for November, 1991");
console.assert(daysInMonth(1991, "November") === 30);
console.log("[4] ==================================================");
console.log();

console.log("[5] Should return 29 when asking for February, 1996");
console.assert(daysInMonth(1996, "February") === 29);
console.log("[5] ==================================================");
console.log();
