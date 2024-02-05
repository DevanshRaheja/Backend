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
    let res = (b !== 0  ? (a / b) : `INFINITY`)
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
    res.send(`<h1>Sum is ${ans}</h1>`);
})
app.get('/difference', (req, res) => {
    const a = req.query.a
    const b = req.query.b
    const ans = diff(a, b)
    res.send(`<h1>Difference is ${ans}</h1>`);
})
app.get('/product', (req, res) => {
    const a = req.query.a
    const b = req.query.b
    const ans = mul(a, b)
    res.send(`<h1>Product is ${ans}</h1>`);
})
app.get('/division', (req, res) => {
    const a = req.query.a
    const b = req.query.b
    const ans = div(a, b)
    res.send(`<h1>Division is ${ans}</h1>`);
})
app.get('/', (req, res) => {
    const a = req.query.a
    const b = req.query.b
    const ans1 = sum(a, b)
    const ans2 = diff(a, b)
    const ans3 = mul(a, b)
    const ans4 = div(a, b)
    res.send(`<h1>Sum is ${ans1}</h1>
    <h1>Difference is ${ans2}</h1>
    <h1>Product is ${ans3}</h1>
    <h1>Division is ${ans4}</h1>`);
})

app.listen(3000)