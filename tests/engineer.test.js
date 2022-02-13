// TODO: Invoke the engineer class
const Engineer = require('../lib/engineer');

// TODO: Instantiate engineer by creating new engineer object
test("Can instantiate a new engineer object", () => {
    // Define the variable I want to check for
    const engineer = new Engineer('Candra', 77, 'candra@candra.com', 'candracodes');

    // expecting a newly introduced property of github
    // note: no need to re-emphasize the parent elements, becasue my engineer class has the super
    expect(engineer.github) .toEqual(expect.any(String));

})
// getGithub() retrieval
test('Can instantiate a value for github', () => {
    const engineer = new Engineer('Candra', 77, 'candra@candra.com', 'candracodes');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
// getRole() retrieval
test('Can instantiate a value for employee role', () => {
    const engineer = new Engineer('Candra', 77, 'candra@candra.com', 'candracodes');

    expect(engineer.getRole()).toEqual("Engineer");
});