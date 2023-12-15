const mongodb = require('../mongodb/database.js')



const getcont = (req , res)=>{
    const ID = req.cookies.id
    // console.log(ID)
    mongodb.findById(ID)
    .then((resault)=>res.json(resault))
    .catch((err)=>console.log(err))

}




module.exports = getcont