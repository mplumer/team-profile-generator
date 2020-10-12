
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Chase', 3, 'chase@company.com', 'Vandy');

    expect(intern.name).toBe('Chase');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));

});

test("gets intern school as an object", () => {
    const intern = new Intern('Max');

    expect(intern.getSchool()).toHaveProperty('school');
});

test("gets intern role as an object", () => {
    const intern = new Intern('Max');

    expect(intern.getRole()).toHaveProperty('role', 'Intern');
});