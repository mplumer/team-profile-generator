class Engineer {
    constructor(name, id, email, role, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.role = role;
    }

    getName() {
        return `Engineers name is ${this.name}`;
    }

    getId() {
        return `Engineers Id is ${this.id}`;
    }

    getEmail() {
        return `Engineers email is ${this.email}`;
    }

    getRole() {
        return `${this.role}`;
    }

    getGithub() {
        return `Engineers Github Profile is ${this.github}`;
    }
}

module.exports = Engineer; 