const Employee = require('./employee');

class Manager extends Employee {
    // manager constructor that extends from the employee class to finalize the manager specific questions
constructor(name, id, email, officeNum) {

    super(name, id, email)
    this.officeNum = officeNum;
    this.role = this.getRole()
}
    getRole() {
        return 'Manager';
    }

    getOfficeNum() {
        return this.officeNum;
    }
}

module.exports = Manager;