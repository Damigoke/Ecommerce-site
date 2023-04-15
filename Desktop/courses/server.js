const express = require('express');
const app = express();
const port = 3000;
const studentRoutes = require('./src/routes')


 app.get( "/", studentRoutes
    // if (req.method === 'POST' & req.url === '/post') {
    //     const {fName, lName, email, password} = req.body;
    //     const user = await req.body;
    //     res.statusCode(200).send({message:'You have successfully created a User', user})
    //     res.end()
    // } else {
    //     res.statusCode(400).send({message: 'Kindly Create a User.'})
    // }

    // if(req.method === 'PUT'){

    // }
)

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
});