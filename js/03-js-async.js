// node 03-js-async.js


// function as art to another funciton 

// const fun = (arg) => {
//     console.log('fun function called');
//     // code to use arg
//     console.log(arg * 2); // use 1
//     // console.log('Hi ' + arg); // use 2
//     // console.log(arg.firstName); // use 3
// };

// fun(10);

// let num = 11;
// fun(num);

// fun(10); // call 1
// fun('Sonu'); // call 2
// fun({ firstName: 'asdf' }); // call 3






// setTimeout(arg1, ar2);
// setTimeout(() => { }, ms);









// const fun = (arg) => {
//     console.log('fun function called');
//     arg();
// };

// fun(() => { console.log('anonymous function called'); });

// // const funToPass = () => {
// //     console.log('argument passed 2');
// // };

// // fun(funToPass);




const fun = (arg) => {
    console.log('fun function called');
    arg({ firstName: 'Sonu' });
};

// fun(??);

fun((a) => { 
    console.log('Anon function called');
    console.log(a.firstName); 
});

