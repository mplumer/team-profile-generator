
const Intern = require('../lib/Intern.js');



test('creates a new intern object', () => {
    const intern = new Intern('Chase');

    expect(intern.name).toBe('Chase');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.role).toEqual(expect.any(String));
});

test('gets intern name', () => {
    const intern = new Intern('Chase');

    expect(intern.getName()).toHaveProperty('name');
});

test('gets intern ID', () => {
    const intern = new Intern('Chase');

    expect(intern.getID()).toHaveProperty('ID');
});

test('gets intern email', () => {
    const intern = new Intern('Chase');

    expect(intern.getName()).toHaveProperty('Email');
});

test('gets intern school', () => {
    const intern = new Intern('Chase');

    expect(intern.getSchool()).toHaveProperty('School');
});

test('gets intern role', () => {
    const intern = new Intern('Chase');

    expect(intern.getRole()).toHaveProperty('Role');
});