/**
 *     Write a JavaScript function to get the month name from a particular date
 *
 *     Hint: You might want to use `.getMonth()` function from `Date` object
 */






console.log("[1] Check that `getMonthName` is a function ")
console.assert( typeof getMonthName === 'function' )
console.log("[1] ==================================================")
console.log()

console.log("[2] Should return 'October' for '10/11/2009'")
console.assert( getMonthName(new Date("10/11/2009")) === 'October' )
console.log("[2] ==================================================")
console.log()

console.log("[3] Should return 'December' for '12/11/2012'")
console.assert( getMonthName(new Date("12/11/2012")) === 'December' )
console.log("[3] ==================================================")
console.log()

console.log("[4] Should return 'January' for '01/15/2017'")
console.assert( getMonthName(new Date("01/15/2017")) === 'January' )
console.log("[4] ==================================================")
console.log()

console.log("[5] Should return 'September' for '09/10/1992'")
console.assert( getMonthName(new Date("09/10/1992")) === 'September' )
console.log("[5] ==================================================")
console.log()
