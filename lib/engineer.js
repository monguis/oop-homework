const Employee = require("./employee");

class Engineer extends Employee {

    constructor(name,id,email,github){
        super(name,id,email);
        this.role = "Engineer";
        this.github = github ? github:"not available GH account";
    }

    getGithub(){
        return this.github;
    }

}
module.exports = Engineer;
