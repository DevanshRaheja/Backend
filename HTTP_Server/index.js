const express = require('express');
const bodyParser = require('body-parser');
// Importing express library

const app = express();
const port = 3000;

app.use(bodyParser.json()) // Body-parser middleware function
// app.use(express.json()) // Express middleware function

app.post("/conversations", (req, res) => {

  const message = req.body.message
  // console.log(req.headers["authorization"])
  // 
  res.send(`<b>2 + 2 = 4</b>`);

  console.log(req.body);   // now works
});

app.get("/conversations", (req, res) => {
  res.send(`<b>2 + 2 = 4</b>`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
