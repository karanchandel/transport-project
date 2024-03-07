const express = require('express');
const app = express();
const cors =  require('cors');
const bodyParser =  require('body-parser');
const dotenv = require('dotenv');
const bcrypt = require("bcrypt");

const https = require("https");
dotenv.config("./.env");

app.use(bodyParser.urlencoded({
    extended: true
  }));
  
  // Set up Global configuration access
dotenv.config();

// setup the server port
const port = process.env.PORT || 5000;
console.log("process.env.PORT",process.env.PORT)
  app.use(bodyParser.json());
app.use(express.json());
app.set('env', 'production');
app.use(express.urlencoded({
    extended: true
  }));
  

app.use(cors({
    origin: ["http://localhost:4200", "http://localhost:5000", "http://localhost:60948"]
  }));


  const userRouter = require('./src/routes/users.route.js');
 console.log('NEHS');
  app.use('/users', userRouter);
  console.log('NEHS');



  
  app.get("/",(req,res)=> {
    
    res.status(200).send("ok from server");
  })
  app.get("*",function(req,res) {
    res.status(404).send("ok from server");
  })

const PORT=process.env.PORT;



app.listen(PORT,()=>{
    console.log(`listening on port: ${PORT}`);
})


