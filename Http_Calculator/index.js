const express = require('express');

function sum(a, b) {
    let res = Number(a) + Number(b)
    return res
}
function diff(a, b) {
    let res = (a >= b ? Math.abs(a - b) : Math.abs(b - a))
    return res
}
function mul(a, b) {
    let res = a * b
    return res
}
function div(a, b) {
    let res = (b==0 ? a / b : `Divide by Zero not possible`)
    return res
}

function calculator(a, b){
    let res = sum(a, b)
    return res
}

const app = express();

app.get('/', (req, res) => {
    const a = req.query.a
    const b = req.query.b
    // const c = req.query.c
    const ans = calculator(a, b)
    res.send(`Answer is ${ans}`)
})

app.listen(3000)