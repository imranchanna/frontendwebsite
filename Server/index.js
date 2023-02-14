//Import All Dependencies
const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken');
const cookieparser= require('cookie-parser');

const app = express();
app.get('./',(req,resp)=>{
    resp.send("Hello world");
})

app.listen(3001,()=>{
    console.log('Server is listening');
})