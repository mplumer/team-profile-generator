class Intern {
    constructor(name, id, email, role, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.role = role;
    }

    getName() {
        return `Interns name is ${this.name}`;
    }

    getId() {
        return `Interns Id is ${this.id}`;
    }

    getEmail() {
        return `Interns email is ${this.email}`;
    }

    getRole() {
        return `${this.role}`;
    }

    getSchool() {
        return `Interns attended school is ${this.school}`;
    }
}

module.exports = Intern; 