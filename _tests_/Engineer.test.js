const { toBindingIdentifierName } = require('@babel/types');
const { test, expect, jest } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');



test('creates a new engineer object', () => {
    const engineer = new Engineer('Al', 112, 'al@mail.com', 'Github', 'Engineer');

    expect(engineer.name).toBe('Al');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.gitHub).toEqual(expect.any(String));
    expect(engineer.role).toEqual(expect.any(String));
});

test('gets engineer name', () => {
    const engineer = new Engineer('Al');

    expect(engineer.getName()).toHaveProperty('name');
});

test('gets engineer ID', () => {
    const engineer = new Engineer('Al');

    expect(engineer.getID()).toHaveProperty('ID');
});

test('gets engineer email', () => {
    const engineer = new Engineer('Al');

    expect(engineer.getEmail()).toHaveProperty('Email');
});

test('gets engineer gitHub', () => {
    const engineer = new Engineer('Al');

    expect(engineer.getGitHub()).toHaveProperty('Github');
});

test('gets engineer role', () => {
    const engineer = new Engineer('Al');

    expect(engineer.getRole()).toHaveProperty('Role');
});