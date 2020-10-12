const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Al', 2, 'al@company.com', 'gitAl');

    expect(engineer.name).toBe('Al');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));

});

test("gets engineer GitHub username as an object", () => {
    const engineer = new Engineer('Max');

    expect(engineer.getGithub()).toHaveProperty('github');
});

test("gets engineer role as an object", () => {
    const engineer = new Engineer('Max');

    expect(engineer.getRole()).toHaveProperty('role', 'Engineer');
});