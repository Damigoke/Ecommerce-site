const express = require("express");
const app = express();
const cors = require("cors");
const client = require("./db/Database");

client

// client.sync().then(()=>{
//   console.log("Database connected sucessfully")
// }).catch(err=>{
//   console.log(err)
// })

// middleware

app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("THIS IS A TEST MESSAGE TO THE FRONTEND");
});

app.listen(3001, () => {
  console.log("server is running on port 3001");
});