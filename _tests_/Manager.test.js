
const Manager = require('../lib/Manager');

// jest.mock('../lib/Manager');

console.log(new Manager());


test('creates a manager object', () => {
    const manager = new Manager('Max', 1, 'max@company.com', '100A');

    expect(manager.name).toBe('Max');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));

});

test("get office number as an object", () => {
    const manager = new Manager('Max');

    expect(manager.getOfficeNumber()).toHaveProperty('officeNumber');
});

test("gets manager role as an object", () => {
    const manager = new Manager('Max');

    expect(manager.getRole()).toHaveProperty('role', 'Manager');
});
