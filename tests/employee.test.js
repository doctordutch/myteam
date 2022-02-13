// TODO: Invoke the employee class
const Employee = require('../lib/employee');

// TODO: Build the first test by describing employee (tutor advice: investigate test)
test("Can instantiate employee instance", () => {
    // Define the variable I want to check for
    const employee = new Employee();

    // build the test
    expect(typeof (employee)).toBe("object");

})
test("Make sure the name is the same name that's being tested", () => {
    // build another variable, any sort of fake name that is a string AND is a name
    const name = "Samantha";
    // testing our new variable to ensure that we connect is back to the Employee class
    const employee = new Employee(name);

    expect(employee.name).toBe(name);
})
test("Make sure there IS an ID that exists", () => {
    // build a variable I want to check for
    const id = 123;

    // testing our new variable to ensure that we connect is back to the Employee class
    // I'm putting Samantha because this is reading from the parent class and the placement of the keys are important. I can't instantiate an ID without first having a name
    const employee = new Employee("Samantha", id);

    expect(employee.id).toBe(id);
})
test("Make sure an email exists", () => {
    // build a variable I want to check for
    const email = "test@test.com";

    // testing our new variable to ensure that we connect is back to the Employee class
    const employee = new Employee("Samantha", 123, email);

    expect(employee.email).toBe(email);
})