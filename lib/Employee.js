class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName() {
        return `Employees name is ${this.name}`;
    }

    getId() {
        return `Employees Id is ${this.id}`;
    }

    getEmail() {
        return `Employees email is ${this.email}`;
    }

    getRole() {
        return `${this.role}`;
    }
}

module.exports = Employee; 