
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

const obj = new Employee();
obj.work();
obj.firstName = 'Sonu';
obj.work();
const obj2 = new Employee(102, 'Monu', 10.5);
obj2.work();

