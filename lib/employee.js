class Employee {

    // employee constructor to run the responses through as a parent class
constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = this.getRole();
}

getName() {   
    return this.name;
}

getId() {
    return this.id;
}

getEmail() {
    return this.email;
}

getRole() {
    return 'Employee';
}

}

module.exports = Employee;