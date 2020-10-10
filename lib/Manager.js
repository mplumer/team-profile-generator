class Manager {
    constructor(name, id, email, role, office) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Manager';
        this.office = office;
    }

    getName() {
        return `Managers name is ${this.name}`;
    }

    getId() {
        return `Managers Id is ${this.id}`;
    }

    getEmail() {
        return `Managers email is ${this.email}`;
    }

    getRole() {
        return '${this.role}';
    }
}

module.exports = Manager; 