// //Dependencies
// const fs = require("fs");
const express = require('express');
// const path = require('path');

//Set up Express App
const app = express();
const PORT = process.env.PORT || 3000;

//Set up Express App to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/apiRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);




//Start server listening 
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));