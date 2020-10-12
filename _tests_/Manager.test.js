
const Manager = require('../lib/Manager.js');



test('creates a new manager object', () => {
    const manager = new Manager('Kyle');

    expect(manager.name).toBe('Kyle');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.role).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(Number));
});

test('gets manager name', () => {
    const manager = new Manager('Kyle');

    expect(manager.getName()).toHaveProperty('name');
});

test('gets manager ID', () => {
    const manager = new Manager('Kyle');

    expect(manager.getID()).toHaveProperty('ID');
});

test('gets manager email', () => {
    const manager = new Manager('Kyle');

    expect(manager.getEmail()).toHaveProperty('Email');
});

test('gets manager role', () => {
    const manager = new Manager('Kyle');

    expect(manager.getRole()).toHaveProperty('Role');
});
