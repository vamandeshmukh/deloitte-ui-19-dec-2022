
// console.log('Hello world!');

// Java 
// int num = 10;
// JS 
// let num = 10;
// TS 
// let num: number = 10;
// console.log(num);
// num = 'abc';
// console.log(num);

// const addNums = (i: number, j: number): number => {
//     return i + j;
// };

// console.log(addNums(10, 20));
// console.log(addNums('abc', 'def'));

interface Emp {
    eid: number,
    firstName: string
}

const empData: Emp = {
    eid: 101,
    firstName: 'Sonu'
};

const empData2: Emp = {
    eid: 'abc',
    firstName: false
};

// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html 


