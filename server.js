const {connectdb} = require('./connect');
const {Signup} = require('./schema');
const Signup_controller = require('./controller');
const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());


connectdb()
    .then(()=>{
        console.log("database connected successfullyy..!!!!!")
    })
    .catch((err)=>{
        console.log(err)
    });


app.post('/api/Signup',Signup_controller.insertform);
app.post('/api/login',Signup_controller.logins);
const port = 9000;
app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})
