
// Callbacks in JS 

// console.log('One');

// setTimeout(() => {
//     console.log('Two');
// },
//     2000);

// console.log('Three');


console.log('Start');

const getFunValue = () => {
    setTimeout(() => {
        return { fun: 'Be positive!' };
    }, 2000);
};

funValue = getFunValue();
console.log(funValue.fun);



