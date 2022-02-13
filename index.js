//invoke logic to generate team profile HTML
const generateHTML = require('./src/generateHTML');

// invoke installed packages
const fs = require('fs');
const inquirer = require('inquirer');

// invoke parent class & all child classes
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// TODO: Create an empty array to access later
const teamArray = [];

// TODO: Create prompts for adding a manager
const addManager = () => {
    return inquirer
        .prompt([{
                type: "input",
                message: "Who is the manager on this team?",
                name: "name",
            },
            {
                type: "input",
                message: "What is this manager's ID number?",
                name: "id",
            },
            {
                type: "input",
                message: "What is the manager's email address?",
                name: "email",
            },
            {
                type: "input",
                message: "What is the office number for this manager?",
                name: "officeNumber",
            }

        ])
        .then(response => {
            console.log('response', response);
            const {
                name,
                id,
                officeNumber,
                email
            } = response;
            const manager = new Manager(name, id, email, officeNumber);

            teamArray.push(manager);
            console.log(manager);
        });

} // end addManager

// create prompts for adding additional employees
const addEmployee = () => {
    return inquirer
        .prompt([{
                type: 'list',
                name: 'role',
                message: "Please select this employee's role",
                choices: ['Engineer', 'Intern']
            },
            {
                type: "input",
                message: "What is this employee's name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is this employee's ID number?",
                name: "id",
            },
            {
                type: "input",
                message: "What is the employee's email address?",
                name: "email",
            },
            {
                type: 'input',
                name: 'github',
                message: "Please enter this employee's github username.",
                when: (input) => input.role === "Engineer",

            },
            {
                type: 'input',
                name: 'school',
                message: "Please enter the name of this intern's school.",
                when: (input) => input.role === "Intern",

            },
            {
                type: 'confirm',
                name: 'addNewEmployee',
                message: 'Would you like to add another employee?',
                default: false
            }

        ])
        .then(response => {
            console.log('response', response);
            let {
                name,
                id,
                email,
                role,
                github,
                school,
                addNewEmployee
            } = response;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);

                console.log(employee);

            } else if (role === "Intern") {
                employee = new Intern(name, id, email, school);

                console.log(employee);
            }
            teamArray.push(employee);

            if (addNewEmployee) {
                return addEmployee(teamArray);
            } else {
                return teamArray;
            }
        })

}; // end addEmployee

// TODO: Create function to generate HTML page through filesystem
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // check for errors
        if (err) {
            console.log(err);
            return;
            // if there are no errors, indicate in the terminal that a page has been created
        } else {
            console.log("Successful generation of HTML file!")
        }
    })
}; // end writeFile

// TODO: Call the function to initialize all the moving parts
addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });

// TODO: BRAIN DUMP:
/*
    1. Don't forget to include a video walk through of the tests passing, as well as the creation of the generatedHTML
    2. Don't forget to include the generated HTML page that will live in the dist folder
*/