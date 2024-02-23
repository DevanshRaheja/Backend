const express = require('express')
const zod = require('zod')

const app = express()

app.use(express.json())

/*
{
  email : string
  password : atleast 8 character
  country : IN, USA
}
*/

function validateInput(obj){
    const schema = zod.object({
      email: zod.string().email(),
      password: zod.string().min(8, { msg: "Must be minimum 8 characters" }),
    //   country: zod.literal("IN").or(zod.literal("US")), // Nested zod literal
    });

    const response = schema.safeParse(obj)
    return response
    // console.log(response);
}

// validateInput({
//     email: "satish@gmail.com",
//     password : "12345sat",
//     country : "IN" 
// })

app.post('/login', (req, res) => {
    const response = validateInput(req.body)
    if(!response.success){
        res.json({
            msg : "Inputs are Invalid"
        })
        return
    }
    res.json({
        response
    })
})

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
})