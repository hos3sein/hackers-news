const mongodb = require('../mongodb/database.js')


const getnews = (req , res)=>{
    // console.log('check')
    mongodb.find()
    .then((resault)=>{
        res.json(resault)
    })
    .catch((err)=>console.log(err))
}




module.exports = {getnews}