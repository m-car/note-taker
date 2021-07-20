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
// const notes = [
//     {
//     //   routeName: 'yoda',
//       name: 'Yoda',
//       role: 'Jedi Master',
//       age: 900,
//       forcePoints: 2000,
//     },
//     {
//       routeName: 'darthmaul',
//       name: 'Darth Maul',
//       role: 'Sith Lord',
//       age: 200,
//       forcePoints: 1200,
//     },
//     {
//       routeName: 'obiwankenobi',
//       name: 'Obi Wan Kenobi',
//       role: 'Jedi Master',
//       age: 55,
//       forcePoints: 1350,
//     },
//   ];

//ISSUE: __dirname not working? index.html needs to be in js  file to work.. should work wherever it is in the file structure right? 
//Routes
//HTML routes
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/notes',(req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

//API routes
app.get('/api/notes', (req, res) => {
    console.log(req);
    res.json('db.json');
    console.log("get passed");
});
app.get('/api/notes',(req,res) => res.sendFile(path.join(__dirname, 'db.json')));


// Create new ****** - takes in JSON input 
app.post("/api/notes", (req, res) => {
    console.log(req);
    // requestAnimationFrame.body hosts is equal to the json post sent from the user 
    // this works because of our body parsing middleware...
    const newNote = req.body;

    newNote.routeName = newNote.name.replace(/\s+/g, '').toLowerCase();
    console.log(newNote);
    res.json(newNote);
})

//Start server listening 
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));