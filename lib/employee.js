// create a parent constructor, but place it in a class instead
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }
    // methods for returning properties from command line prompt
    getName () {
        return this.name;
    }
    getId () {
        return this.id;
    }   
    getEmail () {
        return this.email;
    }
    getRole () {
        return 'Employee'; 
    }
}; 

module.exports = Employee;
