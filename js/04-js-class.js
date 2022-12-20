
// class in JS 

class Employee {
    eid;
    firstName;
    salary;
    constructor(eid, firstName, salary) {
        this.eid = eid;
        this.firstName = firstName;
        this.salary = salary;
    };
    work = () => {
        console.log(this.firstName + ' works...');
    };
}
// Employee obj = new Employee();
const obj = new Employee();
obj.work();
obj.firstName = 'Sonu';
obj.work();

