const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const users = [{
    user : "Amanda",
    kidneys : [{
        healthy : false
    },{
        healthy : true
    }]  
}]

app.use(bodyParser.json())  //middlewares

app.get('/', (req, res) => {

    const amandaKidneys = users[0].kidneys;
    const numberOfKidneys = amandaKidneys.length;
    let numberOfHealthyKidneys = 0
    
    amandaKidneys.forEach(element => {
        if(element.healthy == true){
            numberOfHealthyKidneys += 1
        }
    });

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy;

    users[0].kidneys.push({
        healthy : isHealthy, 
    })

    res.json({
        msg: 'Done!'
    })
})

app.put('/', (req, res) => {
    if (!isThereAtleastOne()) {
      res.status(411).json({
        msg: "You have no bad Kidneys",
      });
    }
    else{
        users[0].kidneys.forEach(element => {
            element.healthy = true
        })
        res.json({
            msg : "Updated"
        })
    }
})

app.delete('/', (req, res) => {
    if (!isThereAtleastOne()) {
      res.status(411).json({
        msg: "You have no bad Kidneys",
      });
    } else {
      const newKidneys = [];
      users[0].kidneys.forEach((element) => {
        if (element.healthy == true) {
          newKidneys.push({
            healthy: true,
          });
        }
      });

      users[0].kidneys = newKidneys;
      res.json({
        msg: "Deleted!",
      });
    }
})

function isThereAtleastOne()
{
let atleastOne = false
    users[0].kidneys.forEach(element => {
        if (!element.healthy) {
            atleastOne = true
        }
    })
    return atleastOne
}

app.listen(3000)