const express = require('express');
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const database = require('./database/config');
const xoauth2 = require("xoauth2");
const nodemailer =require('nodemailer')
var employee = require('./controllers');
var password = employee.password;
console.log("==================================>>>>>>>>>>>>>>>>>>>>>...", password);

app.use(bodyParser.json());

app.use(cors({origin: '*'}));

require('./routes/route.js')(app);

// require('./routes/route.js')(app); 
// const employeeRoutes = require('./routes/employee');

  

app.listen(3001, () =>{
    console.log("Listening port 3001");
});

