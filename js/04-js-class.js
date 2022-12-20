
// class in JS 

class Employee {
    eid;
    firstName;
    salary;

    work = () => {
        console.log(this.firstName + ' works...');
    };
}

// Employee obj = new Employee();
const obj = new Employee();
obj.work();
obj.firstName = 'Sonu';
obj.work();

