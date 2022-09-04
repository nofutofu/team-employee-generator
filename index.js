const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const fs = require('fs');
let fixYet = false;

console.log('Welcome to the team builder app. Please enter the following information.');

startBuild();

let employees = []

// starts the application and begins prompting for the manager questions
function startBuild() {
    inquirer
    .prompt([ 
    {
        type: 'input',
        name: 'name',
        message: "Enter manager name."
    },
    {
        type: 'input',  
        name: 'id',
        message: "Enter manager's company ID."
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the manager's email."
    },
    {
        type: 'input',
        name: 'officeNum',
        message: "Enter manager's office number"
    },
    {
        type: 'input',
        name: 'choice',
        message: 'Would you like to enter an \n\t[Engineer] \n\t[Intern] \n\tOr [Finish] building your team?'
    }
  ])
  // constructs a new manager and pushes it to employees as the initial employee/team leader
    .then((response) => {
    const manager = new Manager(response.name, response.id, response.email, response.officeNum)
    employees.push(manager);
    console.log(employees);
    continueOption(response);
    })
  }

// continues asking and gives you the option to finish creating team
function continueOption(response) {
    // switch case to check if the employee is an engineer
    switch(response.choice) {
        case 'Engineer':
            inquirer
        .prompt([ 
        {
            type: 'input',
            name: 'name',
            message: "Enter engineer's name."
        },
        {
            type: 'input',  
            name: 'id',
            message: "Enter engineer's company ID."
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the engineer's email."
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter engineer's github username"
        },
        {
            type: 'input',
            name: 'choice',
            message: 'Would you like to enter an \n\t[Engineer] \n\t[Intern] \n\tOr [Finish] building your team?'
        }
    ])
    // constructs new engineer and adds it to employees
    .then((response) => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github)
        employees.push(engineer);
        console.log(employees);
        continueOption(response);
        })
            break;

            // switch case to check if the employee is an intern
        case 'Intern':
            inquirer
        .prompt([ 
        {
            type: 'input',
            name: 'name',
            message: "Enter intern's name."
        },
        {
            type: 'input',  
            name: 'id',
            message: "Enter intern's company ID."
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the intern's email."
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter intern's school"
        },
        {
            type: 'input',
            name: 'choice',
            message: 'Would you like to enter an \n\t[Engineer] \n\t[Intern] \n\tOr [Finish] building your team?'
        }
    ])
    // constructs a new intern and pushes it to employees
    .then((response) => {
        const intern = new Intern(response.name, response.id, response.email, response.school)
        employees.push(intern);
        console.log(employees);
        continueOption(response);
        })
            break;

            // if you type finish; move to begins to the html setup
        case 'Finish':
            finishTeam();
            break;

            // protection if the user does not type a valid response
        default: 
            console.log(`Sorry, ${response.choice} was not a valid command please select again.`)
            inquirer
                .prompt([
            {
                type: 'input',
                name: 'choice',
                message: 'Would you like to enter an \n\t[Engineer] \n\t[Intern] \n\tOr [Finish] building your team?'
            }
        ])
        .then((response) => {
            continueOption(response);
        })
    }
}

// sets up the html to add further to
function finishTeam() {
console.log('\n\tFINISH');
let htmlContent = `<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Company Team</title>
</head>
<body>
        <header class="header"> <h1 class="title">My Team</h1> </header>
        <main class="content">
`;

fs.writeFile('./dist/team-build.html', htmlContent, function (err) {
    if (err) throw err;
        constructTeam();
})
}

// loops through each employee and adds their respective html
function constructTeam() {
    for (let i = 0; i < employees.length; i++) {

        let miscAdd = '';

        if (employees[i].github != null) {
            miscAdd =`
                <p class="misc">Github: <a href = "https://github.com/${employees[i].github}" target = "_blank">${employees[i].github}</a></p>
                `
            } 
            else if (employees[i].school != null) {
            miscAdd =`
                <p class="misc">School: ${employees[i].school}</p>
                `
            }
            else {
            miscAdd =`
                <p class="misc">Office Number: ${employees[i].officeNum}</p>
                `
            }

    let htmlAdd = `
        <div class="team-card">
        <h2 class="name">${employees[i].name}</h2>
        <h2 class="role">${employees[i].role}</h2>
        <div class="sub-items">
        <p class="id">ID: ${employees[i].id}</p>
        <p class="email">Email: <a href = "mailto: ${employees[i].email}">${employees[i].email}</a></p>
        ${miscAdd}
        </div>
        </div>
        `;

        fs.appendFile('./dist/team-build.html', htmlAdd, function (err) {
            if (err) throw err; 
            if (!fixYet) {
            fixYet = true;
            fixHtml();
            }
    })
  }
}

// adds the closing divs to the html
function fixHtml() {
   
let fixAdd =`
    </main>
    </body>
    </html>
    `;

    fs.appendFile('./dist/team-build.html', fixAdd, function (err) {
        if (err) throw err;
})
}

