Employee = require("./lib/employee");
Manager = require("./lib/Manager");
Intern = require("./lib/Intern");
Engineer = require("./lib/engineer");
const fs = require("fs");



generateFile = (team) => {
    let finalText = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/22ff5ec687.js" crossorigin="anonymous"></script>
        <title>My Team</title>
</head>

<body>
    <header class="bg-danger">
        <h1 class="text-white p-5 text-center">
            My Team
        </h1>
    </header>
    <div class="container">
        <div class="row justify-content-center">`;

    let lastLiStr = "";
    let cardCount = 0
    for (const member of team) {
        let icon = "";

        if (cardCount === 3) {
            finalText += `</div>
            <div class="row justify-content-center">`
            cardCount = 0;
        }

        if (member.constructor.name === "Manager") {
            icon = `<i class="fas fa-mug-hot"></i>`;
            lastLiStr = "Office Number: " + member.getOfficeNumber();
        } else if (member.constructor.name === "Engineer") {
            icon = `<i class="fas fa-glasses"></i>`;
            lastLiStr = "GitHub Profile: " + member.getGithub();
        } else {
            icon = `<i class="fas fa-user-graduate"></i>`;
            lastLiStr = "School: " + member.getSchool();
        }



        finalText += `<div class="col-lg-4">
    <div class="card text-white shadow rounded" style="max-width: 18rem;">
        <div class="card-header  bg-primary ">
            <h2>${member.getName()}</h2>
            <h2>${icon}${member.constructor.name}</h2>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group ">
                <li class="list-group-item text-dark">
               ID: ${member.getId()}
                    </li>
                <li class="list-group-item text-dark">Email: ${member.getEmail()}</li>
                <li class="list-group-item text-dark">${lastLiStr}</li>
            </ul>

        </div>
    </div>
</div>
`;
        cardCount++;
    }
    if (cardCount !== 3) finalText += `</div>`

    finalText += `    </div>
</body>

</html>`;

    fs.writeFileSync("test.html", finalText, (err) => {
        if (err) throw err;

        console.log("success!!")
    })

}
module.exports = {
    generateHTML: generateFile,
};