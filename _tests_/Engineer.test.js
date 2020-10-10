const { toBindingIdentifierName } = require('@babel/types');
const { test, expect, jest } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');



test('creates a new engineer object', () => {
    const engineer = new Engineer('Max');

    expect(engineer.name).toBe('Max');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.gitHub).toEqual(expect.any(String));
});

test('gets engineer name', () => {
    const engineer = new Engineer('Max');

    expect(engineer.getName()).toHaveProperty('Name');
});

test('gets engineer ID', () => {
    const engineer = new Engineer('Max');

    expect(engineer.getID()).toHaveProperty('ID');
});

test('gets engineer email', () => {
    const engineer = new Engineer('Max');

    expect(engineer.getName()).toHaveProperty('Email');
});

test('gets engineer gitHub', () => {
    const engineer = new Engineer('Max');

    expect(engineer.getName()).toHaveProperty('Email');
});

test('gets engineer role', () => {
    const engineer = new Engineer('Max');
});