//Dependencies
const express = require('express');
const path = require('path');

//Set up Express App
const app = express();
const PORT = 3000;

//Set up Express App to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// DATA

//ISSUE: __dirname not working? index.html needs to be in js  file to work.. should work wherever it is in the file structure right? 
//Routes
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/notes',(req, res) => res.sendFile(path.join(__dirname, 'notes.html')));


//Create new ****** - takes in JSON input 
// app.post("", (req, res) => {
//     // requestAnimationFrame.body hosts is equal to the json post sent from the user 
//     // this works because of our body parsing middleware...
//     const newObj = req.body;
// })

//Start server listening 
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));