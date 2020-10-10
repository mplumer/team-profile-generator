const { toBindingIdentifierName } = require('@babel/types');
const { test, expect, jest } = require('@jest/globals');
const Manager = require('../lib/Manager.js');



test('creates a new manager object', () => {
    const manager = new Manager('Max');

    expect(manager.name).toBe('Max');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets manager name', () => {
    const manager = new Manager('Max');

    expect(manager.getName()).toHaveProperty('Name');
});

test('gets manager ID', () => {
    const manager = new Manager('Max');

    expect(manager.getID()).toHaveProperty('ID');
});

test('gets manager email', () => {
    const manager = new Manager('Max');

    expect(manager.getName()).toHaveProperty('Email');
});

test('gets manager role', () => {
    const manager = new Manager('Max');
});
