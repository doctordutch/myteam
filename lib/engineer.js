// invoke employee (parent class)
const Employee = require('./employee');

// create engineer class by extending employee class
class Engineer extends Employee {

    constructor (name, id, email, github) {

        // reference key elements from the parent class as a way to cross-reference the constructor parameters
        super (name, id, email);

        // introduce a new property for retrieving engineer's github username
        this.github = github; 
    } // end constructor

    // returns github username from command line prompt 
    getGithub () {
        return this.github;
    } 

    // overridden to return 'Engineer'
    getRole () {
        return "Engineer";
    }

};


module.exports = Engineer;
