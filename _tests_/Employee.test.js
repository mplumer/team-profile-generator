const { toBindingIdentifierName } = require('@babel/types');
const { test, expect, jest } = require('@jest/globals');
const Employee = require('../lib/Employee.js');



test('creates an emplyee object', () => {
    const employee = new Employee('Max');

    expect(employee.name).toBe('Max');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Max');

    expect(employee.getName()).toHaveProperty('Name');
});

test('gets employee ID', () => {
    const employee = new Employee('Max');

    expect(employee.getID()).toHaveProperty('ID');
});

test('gets employee email', () => {
    const employee = new Employee('Max');

    expect(employee.getName()).toHaveProperty('Email');
});

test('gets employee role', () => {
    const employee = new Employee('Max');
});

