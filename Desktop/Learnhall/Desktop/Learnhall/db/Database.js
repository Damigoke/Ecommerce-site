/*const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "",
  host: "localhost",
  port: 5432,
  database: "",
});

module.exports = pool; */

const { Client } = require('pg')
const { express } = require('express');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'UserDatabase',
  password: '202020',
  port : 5000
});


// const {
//   firstname,
//   lastname,
//   email,
//   country,
//   yearOfExp,
//   course,
//   password } = req.body;
  client.connect()
  // console.log('Database Connected')


  client.query('INSERT INTO UserModel(firstname, lastname, email, country, yearOfExp, course, password) VALUES(James,Omotoye,omot@example.com,nigeria,3,english,12345)', 
  // [    firstname,    lastname,    email,    country,    yearOfExp,    course,    password  ],
  (err) => {
    if(err){
      console.log(err)
    }
    client.end();
    console.log('Database Connected')
  })


module.exports =  client