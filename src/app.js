const express = require('express');
const app = express();
app.use(express.json());

   const tasks =[
      {
          id: 1,
          name:"Jacob"
      },
      {
          id: 2,
          name:"Mermaid"
      },
      {
          id: 3,
          name:"Pasto"
      }
  ];

app.get("/tasks", (req,res) =>{
    res.send(tasks)
  })

  app.get("/tasks/:id", (req,res) =>{
    if(req.params.id < 4){
        res.status(200).send(tasks[req.params.id-1])
    }
    res.status(404).send('The task with the provided ID does not exist.')
  })
//code here 




module.exports = app;
