
// undefined and NaN in JS 

// let num;
// console.log(num);
// console.log(typeof (num));

// num = 10;
// console.log(num);
// console.log(typeof (num));

// console.log('abc' + 10);

// truthy / falsy values in JS 

// let myName = 'Vaman';
// let salary = 100;

// falsy values - false, 0, '', undefined, null
// truthy values - remaining all values 

// let userInput; // o, '', null, and other values - 10, 'abc'
// console.log(typeof (userInput));

// if (userInput)
//     console.log('truthy');
// else
//     console.log('falsy');


// old JS function 
function fun1() {
    console.log('fun1 function called');
}
// fun1();

//new JS function 
const fun2 = () => {
    console.log('fun2 function called');
};
// fun2();

const addNums = (i, j) => {
    console.log(i + j);
    return i + j;
};

addNums();
addNums(10);
addNums(10, 20);
addNums(10, 20, 30);

// 







