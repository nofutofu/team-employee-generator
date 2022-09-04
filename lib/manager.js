const Employee = require('./employee');

class Manager extends Employee {
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