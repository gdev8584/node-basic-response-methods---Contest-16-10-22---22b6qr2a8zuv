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

  app.get("/tasks/:id", (req,res,next) =>{
        res.send(tasks[req.params.id-1])
    next()
  })
//code here 




module.exports = app;
