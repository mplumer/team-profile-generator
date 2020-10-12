//const { writeFile } = require('fs');
const fs = require('fs');

const inquirer = require('inquirer');

const { writeFile } = require('./src/generate-site.js');

const generatePage = require('./src/page-template.js');

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'mName',
            message: 'Please enter team manager name:'
        },
        {
            type: 'input',
            name: 'mId',
            message: 'Please enter team manager Employee ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter team manager Email address:'
        },
        {
            type: 'input',
            name: 'office',
            message: 'Please enter team manager Office Number:'
        },
        {
            type: 'confirm',
            name: 'confirmAddFirstEmp',
            message: 'Would you like to add an employee to this team?',
            default: false
        }	        
    ]);
};

const promptEmployee = teamData => {
    if (!teamData.employee) {
        teamData.employee = [];
    };

    if (!teamData.confirmAddFirstEmp) {
        return teamData;
    }

    console.log(`
    =================
    Add a New Employee
    =================
    `);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Which type of Employee would you like to add?',
            choices: [
                'Engineer',
                'Intern'
            ]
        },
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the Employees name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the Employees id:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the Employees email:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter the Employees github user name (github.com/username):'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the Employees attended school:'
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee:',
            default: false
        }
    ])
        .then(employeeData => {
            teamData.employee.push(employeeData);
            if (employeeData.confirmAddEmployee) {
                return promptEmployee(teamData);
            } else {
                return teamData;
            }
        });
}

promptManager()
    .then(promptEmployee)
    .then(teamData => {
        return generatePage(teamData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })
    .catch(err => {
        console.log(err);
    });