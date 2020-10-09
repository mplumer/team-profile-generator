const { toBindingIdentifierName } = require('@babel/types');
const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employees.js');

test('creates an emplyee object', () => {
    const employee = new Employee('Max');

    expect(employee.name).toBe('Max');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});