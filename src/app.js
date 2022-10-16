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

//code here 




module.exports = app;
