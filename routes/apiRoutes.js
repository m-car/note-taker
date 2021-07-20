const notes  = require('../db/store');

module.exports = function(app) {
    app.get('/api/notes',(req,res) => {
        notes
        .getAll()
        .then((data)=>{
            res.json(data);
        
        })
        .catch((err) =>{
            console.log(err);
            return res.status(500).end();
        });
    });
    
    app.post("/api/notes", (req,res) => {
    
        const newNote = req.body;
        // console.log(newNote)
        // res.json(newNote)
        const randomNum = Math.floor((Math.random()*1000000) + 1);
        newNote.id = randomNum;
        notes
          .push(newNote)
          .then(() => {
            res.json(newNote);
          })
          .catch(err => {
            console.log(err);
            return res.status(500).end();
          }); 
       
    })
    app.delete("/api/notes/:id", (req, res) => {
        // console.log(req)
        const chosen = req.params.id;
        console.log(chosen)
        console.log("delete button pressed");
        actions.remove(req.params.id, chosen, handleResult(res))
      })
}
