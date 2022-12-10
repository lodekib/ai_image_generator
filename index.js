const { urlencoded } = require('express');
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const generateImage =  require('./routes/openaiRoutes');
const app =  express();

//use body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/openai',generateImage);

app.listen(port,()=>console.log(`Server running on port ${port}`));