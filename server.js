const express = require('express');
require('dotenv').config()
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path')

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))

app.use(express.json());

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// email route
app.use('/sendtome', require('./routes/sendToMe'))

// accept CORS requests by allowing certain headers
app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));