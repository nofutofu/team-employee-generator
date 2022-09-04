const Employee = require('../lib/employee');

describe('Employee', () => {

it("should take the given parameters and construct an employee with an email of 'johnsmith@gmail.com'", () => {
        const obj = new Employee("John", "30", "johnsmith@gmail.com");

        let emailTest = obj.email;
        expect("johnsmith@gmail.com").toEqual(emailTest);
    })
})