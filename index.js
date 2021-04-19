const express = require('express');
const cors = require('cors')
const app = express();
const port = 4000;
let user;

app.use(express.json());
app.use(cors());

function handleRegister (req, res) {
    user = req.body;
    res.status(200).send("success!");
    console.log(user);
}

function handleLogin (req, res) {
    let userPassword = req.body.password;
    if (user != null && user.password == userPassword){
        res.status(200).send("success!");
    } 
    else {
        res.status(400).send("User not found");
    }
}

app.post('/register' , handleRegister);
app.put('/login' , handleLogin);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})