// TODO: Invoke the intern class
const Intern = require('../lib/intern');

// TODO: Instantiate intern by creating new intern object
test("Can instantiate a new intern object", () => {
    // Define the variable I want to check for
    const intern = new Intern('Adam', 99, 'adam@test', 'SMU');

    // expecting a newly introduced property of school
    // note: no need to re-emphasize the parent elements, becasue my engineer class has the super
    expect(intern.school) .toEqual(expect.any(String));

})
// getRole() retrieval
test('Can instantiate a value for employee role', () => {
    const intern = new Intern('Adam', 99, 'adam@test', 'SMU');

    expect(intern.getRole()).toEqual("Intern");
});