const express =require('express');
const { generateImage } = require('../controllers/openaiController');
const route = express.Router();

route.post('/generateImage',generateImage);

module.exports = route;