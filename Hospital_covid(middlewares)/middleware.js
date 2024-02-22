/*
Two pre-checks that happen in an actual website are:

1-> Authentication
2-> Input Validation

**slightly better approach to prevent code repetition:= create a wrapper function.

function auth(username, password){......}

function input_val(kidneyId){......}

and use them in any route where validation is required

** these two checks can also be done by middlewares.

in get, post, delete, update we can give a range of callback function with routes

=> a middleware has three arguments (req, res, next) where next is used to move the flow from one callback function to other

app.get('/', function 1(req, res, next){....next()}, function 2(req, res){})

** app.use() : makes a middleware global and can be used by every route throughout the file

*/


const express = require('express')

const app = express();

function userMiddleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;
    
    if(username !== 'devansh' || password !== 'pass1234'){
        res.status(403).json({
          msg: "User not found",
        });
    }
    else {
        next();
    }
}

function inputMiddleware(req, res, next){
    const kidneyId = req.query.kidneyId;

    if(kidneyId != 1 && kidneyId != 2){
        res.status(411).json({
          msg: "Invalid inputs...Please enter valid inputs",
        });
    }
    else {
        next()
    }
}

app.use(userMiddleware)  // no need to define middleware everytime as callbacks just use app.use()

app.get('/health-checkup', inputMiddleware, (req, res) => {
    res.json({
        msg: "Your Kidney is healthy",
      });
})

app.get('/heart-checkup', (req, res) => {
    res.json({
        msg: "Your heart is healthy",
      });
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
