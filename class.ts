class Employee { 
    employeeName: string;
    constructor(name: string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Good Morning ${this.employeeName}`);
    }
}
let emp = new  Employee('Prem');
console.log(emp.employeeName);
emp.greet();

class Manager extends Employee {
    constructor(managerName: string){
        super(managerName);
    }
    delegateWork(){
        console.log(`Manager delegating work`);
    }
}
let m = new  Manager('Prem');
console.log(m.employeeName);
m.delegateWork();
m.greet();