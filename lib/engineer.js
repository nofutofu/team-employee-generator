const Employee = require('./employee');

class Engineer extends Employee {
    // engineer constructor as an extention of the employee class to finalize the engineer specific questions
constructor(name, id, email, github) {

    super(name, id, email)
    this.github = github;
    this.role = this.getRole()
}
    getRole() {
        return 'Engineer';
    }
    
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;