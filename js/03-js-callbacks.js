
// Callbacks in JS 

// console.log('One');

// setTimeout(() => {
//     console.log('Two');
// },
//     2000);

// console.log('Three');

// problem of Aync JS 

// console.log('Start');

// const getFunValue = () => {
//     setTimeout(() => {
//         return { fun: 'Be positive!' };
//     }, 2000);
// };

// const funValue = getFunValue();
// console.log(funValue.fun);

// solution 1 - use callback 

console.log('Start');

const getFunValue = (arg) => {
    setTimeout(() => {
        arg({ fun: 'Be positive!' });
    }, 2000);
};

getFunValue((param) => { console.log(param.fun); });

