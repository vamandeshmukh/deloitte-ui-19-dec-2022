// node 02-js-ref-types.js

// Reference datatypes in JS 

// array, JS object, function, class object 

// const myArray = [10, 20, 30, 40, 50];

// // console.log(myArray);

// // iterate through array elements - 
// console.log('1. with for loop');
// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// console.log('2. with for of loop');
// for (const elem of myArray) {
//     console.log(elem);
// }

// console.log('3. with for in loop');
// for (const elem in myArray) {
//     console.log(elem);
// }

// console.log('4. with forEach method');

// myArray.forEach((e) => { console.log(e); });


// const myDataArray = [10, 12.25, false, 'abc'];

// console.log(myDataArray);


// objects in JS 
// proper JS Objects 

const empData = {
    eid: 101,
    firstName: 'Kasyap',
    salary: 10.25,
    isMarried: false,
    spouseName: null,
    phones: [9876543210, 6789012345],
    address: {
        street: 'bank street',
        city: 'Hyderabad',
        pin: 500001
    },
    fun: () => { },
    jobRole: 'Analyst'
};

// console.log(empData);
console.log(empData.address.city);
console.log(empData.phones[1]);








