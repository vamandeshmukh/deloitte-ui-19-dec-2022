
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