
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

// console.log('Start');

// const getFunValue = (arg) => {
//     setTimeout(() => {
//         arg({ fun: 'Be positive!' });
//     }, 2000);
// };

// getFunValue(
//     (param) => { console.log(param.fun); }
// );

// solution 2 - using promise 


console.log('Start');

const getFunValue = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve({ fun: 'Be positive!' });
            reject({ message: 'Something is wrong!' });
        }, 2000);
    });
};

getFunValue()
    .then((response) => { console.log(response.fun); })
    .catch((error) => { console.log(error.message); });






const digitize = n => [...`${n}`].map(i => parseInt(i));

console.log(digitize(123));
console.log(digitize(1230));





