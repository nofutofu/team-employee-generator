const Intern = require('../lib/intern');

describe("Intern", () => {

it("should take the classes' getSchool() method and return 'UT Austin'", () => {
    const obj = new Intern("Greg", 4, "greggy@gmail.com", "UT Austin").getSchool();
    
    expect("UT Austin").toEqual(obj);
})
})