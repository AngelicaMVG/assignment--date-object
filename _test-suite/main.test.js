var expect = chai.expect;
describe("isDate()", function() {
  it("should be a function", function() {
    return expect(isDate).to.be.a("function");
  });

  it("Should return false sending a string object as input ", function() {
    return expect(isDate("2017/11/05")).to.equal(false);
  });

  it("Should return false sending a string object as input ", function() {
    return expect(isDate("2010/07/25")).to.equal(false);
  });

  it("Should return true sending a valid date object ", function() {
    return expect(isDate(new Date("2017/11/05"))).to.equal(true);
  });

  it("Should return true sending a valid date object", function() {
    return expect(isDate(new Date("2010/07/25"))).to.equal(true);
  });
});

describe("daysInMonth()", function() {
  it("should be a function", function() {
    return expect(daysInMonth).to.be.a("function");
  });

  it("Should return 29 when asking for February, 2008", function() {
    return expect(daysInMonth(2008, "February")).to.equal(29);
  });

  it("Should return 31 when asking for January, 2016", function() {
    return expect(daysInMonth(2016, "January")).to.equal(31);
  });

  it("Should return 30 when asking for November, 1991", function() {
    return expect(daysInMonth(1991, "November")).to.equal(30);
  });

  it("Should return 29 when asking for February, 1996", function() {
    return expect(daysInMonth(1996, "February")).to.equal(29);
  });
});

describe("getMonthName()", function() {
  it("Should be a function", function() {
    return expect(getMonthName).to.be.a("function");
  });

  it("Should return 'October' for '10/11/2009'", function() {
    return expect(getMonthName(new Date("10/11/2009")).to.equal("October"));
  });

  it("Should return 'December' for '12/11/2012'", function() {
    return expect(getMonthName(new Date("12/11/2012")).to.equal("December"));
  });

  it("Should return 'January' for '01/15/2017'", function() {
    return expect(getMonthName(new Date("01/15/2017")).to.equal("January"));
  });

  it("Should return 'September' for '09/10/1992'", function() {
    return expect(getMonthName(new Date("09/10/1992")).to.equal("September"));
  });
});
