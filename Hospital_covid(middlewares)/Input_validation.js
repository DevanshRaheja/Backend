const express = require("express");

const app = express();

// express.json() or any other middleware that is used in the route comes at the beginning of the route
app.use(express.json())

app.post('/health-checkup', (req, res) => {
    const kidney = req.body.kidney
    const kidneyLength = kidney.length

    if(!kidneys){
        res.status(403).json({
            msg : "Wrong Inputs"
        })
    }

    res.send(`Your Kidney Length is ${kidneyLength}`)
})


// Global catches :

// Error-Handling Middleware 

// another middleware that comes at the end of the route to prevent leakage of data
// it takes 4 inputs (err, req, res, next)
// Anytime there is an exception it gets called
// It prevents error from getting disclosed to the end user

app.use(function(err, req, res, next){
    res.status(503).json({
        msg : "Sorry something is up with our server"
    })
})


app.listen(3000, () => {
    console.log(`Listening on port 3000`);
} )