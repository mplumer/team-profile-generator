const Employee = require('../lib/Employee');

// jest.mock('../lib/Employee');
// console.log(new Employee());

test('creates an employee object', () => {
    const employee = new Employee('Max', 1, 'max@company.com');

    expect(employee.name).toBe('Max');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

test("gets employee name as an object", () => {
    const employee = new Employee('Max');

    expect(employee.getName()).toHaveProperty('name');
});

test("gets employee id as an object", () => {
    const employee = new Employee('Max');

    expect(employee.getId()).toHaveProperty('id');
});

test("gets employee email as an object", () => {
    const employee = new Employee('Max');

    expect(employee.getEmail()).toHaveProperty('email');
});

test("gets employee role as an object", () => {
    const employee = new Employee('Max');

    expect(employee.getRole()).toHaveProperty('role', 'Employee');
});

