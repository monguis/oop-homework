class Employee {

    // constructor(name,strength,hp){
    //     this.name = name;
    //     this.strength = strength;
    //     this.hp = hp;
    //   }
    constructor(name, id, email) {
        this.name = name ? name:"no_name";
        this.id = id ? id:1;
        this.email = email ? email:"no_email_added";
        this.role = "Employee";
    }

    getName() {
        return this.name;
    }

    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }

    getRole(){
        return this.role;
    }
    
}
module.exports = Employee;