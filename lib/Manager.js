const Employee = require("./employee");

class Manager extends Employee {
constructor(name,id,email,officeNumber){
    super(name,id,email);
    this.officeNumber = officeNumber ? officeNumber:"No office Number Defined"; 
    this.role = "Manager";

}

getOfficeNumber(){
    return this.officeNumber;
}

}

module.exports = Manager;