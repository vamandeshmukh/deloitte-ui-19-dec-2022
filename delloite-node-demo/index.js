// npm install
// npm start

const express = require('express');
const app = express();
const portNumber = 9090;

app.listen(portNumber, () => {
    console.log(`Open http://localhost:${portNumber}/ to view output.`);
});

app.get('/', (request, response) => {
    response.send('Welcome to Deloitte Node App');
    console.log('Welcome');
});

app.get('/home', (request, response) => {
    response.send('Welcome to Deloitte Home');
    console.log('Home');
});

app.get('/contact', (request, response) => {
    response.send('Welcome to Deloitte Contact');
    console.log('Contact');
});

// app.listen(portNumber, () => { });
// app.get('/', () => { });

// HTTP Requests -
// GET, POST
