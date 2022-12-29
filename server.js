const express = require('express');
const morgan = require('morgan');
const path = require('path');

const DEFAULT_PORT = process.env.PORT || 3000;

// initialize express.
const app = express();

// Initialize variables.
let port = DEFAULT_PORT;

// Configure morgan module to log all requests.
app.use(morgan('dev'));

// Setup app folders.
app.use(express.static('app'));

app.get('/auth/redirect', (req, res) => {
    redirPagePath = "/workspaces/ms-identity-javascript-v2/app/redirected.html"; //__dirname + '/app/redirected.html';
    console.log(redirPagePath)
//    res.sendFile(path.join(redirPagePath));
    res.sendFile(redirPagePath);
});

// Set up a route for index.html
app.get('/*', (req, res) => {
    console.log("__dirname=${__dirname}")
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Start the server.
app.listen(port);
console.log(`Listening on port ${port}...${__dirname}`);
