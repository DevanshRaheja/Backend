const express = require('express');

function sum(a, b) {
    let res = Number(a) + Number(b)
    return res
}
function diff(a, b) {
    let res = (a >= b ? (a - b) : Math.abs(a - b))
    return res
}
function mul(a, b) {
    let res = a * b
    return res
}
function div(a, b) {
    let res = (b !== 0  ? (a / b) : `Divide by Zero not possible`)
    return res
}

// function calculator(a, b, fn){
//     let res = fn(a, b)
//     return res
// }

const app = express();

app.get('/sum', (req, res) => {
    const a = req.query.a
    const b = req.query.b
    const ans = sum(a, b)
    res.send(`Sum is ${ans}`)
})
app.get('/difference', (req, res) => {
    const a = req.query.a
    const b = req.query.b
    const ans = diff(a, b)
    res.send(`Difference is ${ans}`)
})
app.get('/product', (req, res) => {
    const a = req.query.a
    const b = req.query.b
    const ans = mul(a, b)
    res.send(`Product is ${ans}`)
})
app.get('/division', (req, res) => {
    const a = req.query.a
    const b = req.query.b
    const ans = div(a, b)
    res.send(`Division is ${ans}`)
})

app.listen(3000)