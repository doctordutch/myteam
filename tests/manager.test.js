// TODO: Invoke the manager class
const Manager = require('../lib/manager');

// TODO: Instantiate manager by creating new manager object
test("Can instantiate a new manager object", () => {
    // Define the variable I want to check for
    const manager = new Manager('Amber', 66, 'amber@test.com', 1234567);

    // expecting a newly introduced property of officePhone
    // note: no need to re-emphasize the parent elements, becasue my engineer class has the super
    expect(manager.officeNumber).toEqual(expect.any(Number));

})
// getRole() retrieval
test('Can instantiate a value for employee role', () => {
    const manager = new Manager('Amber', 66, 'amber@test.com', 1234567);

    expect(manager.getRole()).toEqual("Manager");
});