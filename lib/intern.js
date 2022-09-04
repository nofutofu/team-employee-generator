const Employee = require('./employee');

class Intern extends Employee {
    // intern constructor that extends the employee parent class to run through the final intern specific questions
constructor(name, id, email, school) {
        
    super(name, id, email)
    this.school = school;
    this.role = this.getRole()
}
    getRole() {
        return 'Intern';
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;