const { toBindingIdentifierName } = require('@babel/types');
const { test, expect, jest } = require('@jest/globals');
const Intern = require('../lib/Intern.js');



test('creates a new intern object', () => {
    const intern = new Intern('Max');

    expect(intern.name).toBe('Max');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('gets intern name', () => {
    const intern = new Intern('Max');

    expect(intern.getName()).toHaveProperty('Name');
});

test('gets intern ID', () => {
    const intern = new Intern('Max');

    expect(intern.getID()).toHaveProperty('ID');
});

test('gets intern email', () => {
    const intern = new Intern('Max');

    expect(intern.getName()).toHaveProperty('Email');
});

test('gets intern school', () => {
    const intern = new Intern('Max');

    expect(intern.getSchool()).toHaveProperty('School');
});

test('gets intern role', () => {
    const intern = new Intern('Max');
});