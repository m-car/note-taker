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



//ISSUE: __dirname not working? index.html needs to be in js  folder to work.. should work wherever it is in the file structure right? 
//Routes
//HTML routes

// app.get('/', (req,res) => res.sendFile(path.join(__dirname, './public/index.html')));
// app.get('/notes',(req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

// app.get('/assets/css/styles.css', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/assets/css/styles.css'));
//   });

// app.get('/assets/js/index.js', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/assets/js/index.js'));
// });
  
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'));
// });
//API routes


// const notes  = require('./db/store');
// app.get('/api/notes',(req,res) => {
//     notes
//     .getAll()
//     .then((data)=>{
//         res.json(data);
    
//     })
//     .catch((err) =>{
//         console.log(err);
//         return res.status(500).end();
//     });
// });

// app.post("/api/notes", (req,res) => {

//     const newNote = req.body;
//     // console.log(newNote)
//     // res.json(newNote)
//     const randomNum = Math.floor((Math.random()*1000000) + 1);
//     newNote.id = randomNum;
//     notes
//       .push(newNote)
//       .then(() => {
//         res.json(newNote);
//       })
//       .catch(err => {
//         console.log(err);
//         return res.status(500).end();
//       }); 
   
// })



//Start server listening 
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));