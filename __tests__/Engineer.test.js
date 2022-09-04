const Engineer = require('../lib/engineer');

describe("Engineer", () => {

it("should take the classes' getRole() method and return 'Engineer'", () => {
    const obj = new Engineer().getRole();

    expect("Engineer").toEqual(obj);
})
})