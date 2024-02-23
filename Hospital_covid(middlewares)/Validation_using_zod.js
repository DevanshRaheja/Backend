const express = require("express");
const zod = require('zod')      // zod is a pre-defined library used for input validation

const app = express();
// const schema = zod.array(zod.number())      // performs multiple checks on kidney array
const schema = zod.array(zod.string())      // performs multiple checks on kidney array

// schema will be array of numbers

app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidney = req.body.kidney;               // kidney is array of numbers
  const response = schema.parse(kidney)         // using zod for input validation

  res.send({
    response
  });
  console.log(response);

});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
