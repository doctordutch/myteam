// invoke employee (parent class)
const Employee = require('./employee');

// create manager class
class Manager extends Employee  {
    
    constructor (name, id, email, officeNumber) {
        // reference key elements from the parent class as a way to cross-reference the constructor parameters
        super (name, id, email); 

        // introduce a new property for retrieving intern's github school info
        this.officeNumber = officeNumber; 
    }

    // overridden to return 'Manager'
    getRole () {
        return "Manager";
    }
} 

module.exports = Manager;
