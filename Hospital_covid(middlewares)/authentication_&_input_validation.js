const express = require('express')
const app = express()
const port = 3000

app.get('/health-checkup', (req, res) => {
    //logic goes here

    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    // Authentication Check

    if(username !== 'devansh' && password !== 'pass1234'){
        res.status(403).json({
            msg: 'User not found'
        });
        return;     // early return
    }

    // Input Validation Check

    if(kidneyId != 1 && kidneyId != 2){
        res.status(411).json({
            msg: 'Invalid Input'
        });
        return;
    }

    res.send('You have a healthy Kidney')
})

app.listen(port)