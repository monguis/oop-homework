inquirer = require("inquirer");
Employee = require("./lib/employee");
Manager = require("./lib/Manager");
Intern = require("./lib/Intern");
Engineer = require("./lib/engineer");

const team = [];

var fs = require('fs');
let going = true;



async function createTeam() {
    do {
        console.log("Ok then Lets add someone new to the crew")
        data = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is his/her name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is his/her id?"
            }, {
                type: "input",
                name: "email",
                message: "What is his/her email address?"
            },
            {
                type: "list",
                message: "What is his/her role",
                name: "role",
                choices: [
                    "Manager",
                    "Intern",
                    "Engineer"
                ]
            }
        ])


        switch (data.role) {
            case "Manager":
                const OfficeNumber = await inquirer.prompt({
                    type: "input",
                    name: "OfficeNumber",
                    message: "What is the Office Number he/she is in charge of?"
                }).then(({ OfficeNumber }) => OfficeNumber);
                await team.push(new Manager(data.name,data.id,data.email,OfficeNumber));
                break;
            case "Intern":
                const school = await inquirer.prompt({
                    type: "input",
                    name: "school",
                    message: "What is the school of this intern?"
                }).then(({ school }) => school)
                await team.push(new Intern(data.name,data.id,data.email,school));
                break;
            case "Engineer":
                const github = await inquirer.prompt({
                    type: "input",
                    name: "github",
                    message: "What is this engineer's github username?"
                }).then(({ github }) => github);
                await team.push(new Manager(data.name,data.id,data.email,github));
                break;
        }

    } while (await lastQuestion());
    console.log(team[0].constructor.name);
}



createTeam()

async function lastQuestion() {
    return await inquirer.prompt({
        type: "list",
        name: "bool",
        message: "Would you like to add someone else?",
        choices: [
            "yes",
            "no"
        ]
    }).then(({ bool }) => bool === "yes");
}


