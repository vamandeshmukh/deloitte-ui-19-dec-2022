
const loginFun = () => {
    const userName = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log(userName, password);
    if (userName === 'user' && password === 'pass') {
        document.getElementById('afterLogin').innerHTML = `Hi ${userName}!`;
        document.getElementById('afterInvalid').innerHTML = '';
        document.getElementById('loginform').reset();
    }
    else {
        document.getElementById('afterInvalid').innerHTML = 'Invalid credentials!';
        document.getElementById('afterLogin').innerHTML = '';
        document.getElementById('loginform').reset();
    }
};



// const modeSelector = () => {
// document.getElementById('darkMode').style.display = 'block';
// document.getElementById('lightMode').style.display = 'none';

// const darkMode = document.getElementById('light-mode');
// const lightMode = document.getElementById('dark-mode');

// darkMode.style.display = 'block';
// lightMode.style.display = 'none';
//     if (darkMode.style.display === 'none') {
//         darkMode = 'block';
//         lightMode = 'none';
//     }
//     else {
//         darkMode = 'none';
//         lightMode = 'block';
//     }
// };

