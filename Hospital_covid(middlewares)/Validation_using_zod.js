const express = require("express");
const zod = require('zod')      // zod is a pre-defined library used for input validation

const app = express();
// const schema = zod.array(zod.number())      // performs multiple checks on kidney array

// schema will be array of numbers

/*
{
  email : string
  password : atleast 8 character
  country : IN, USA
}
*/

const schema = zod.array(zod.string())    

const schema1 = zod.object({
  email : zod.string().email(),
  password : zod.string().min(8),
  country : zod.literal("IN").or(zod.literal("US"))  // Nested zod literal 
})

app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidney = req.body.kidney;               // kidney is array of numbers
  const response = schema.parse(kidney)         // using zod for input validation

  // if(!response.success){
  //   res.status(403).json({
  //     msg : "Failed to parse"
  //   })
  // }

  res.send({
    response
  });
  // console.log(response);

});

app.use(function(err, req, res, next){
  res.status(403).json({
    msg: "Failed to parse",
  });
})

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
