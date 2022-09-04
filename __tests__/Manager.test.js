const Manager = require('../lib/Manager');

describe("Manager", () => {

it('should construct a new Manager and return an id of "43"', () => {
    const obj = new Manager("Lois", "43", "loisgg@gmail.com");
    
    let idTest = obj.id;
    expect("43").toEqual(idTest);
})
})