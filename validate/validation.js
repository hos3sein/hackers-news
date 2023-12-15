const userdatas = require('../mongodb/usersave.js')
const taketoken = require('./gettoken.js')
const cookieparser = require('cookie-parser')



const validate = (req , res)=>{
    // console.log(req.body.username)
    userdatas.find({username : req.body.username})
    .then((resault)=>{
        console.log(resault)
        if (resault[0].password === req.body.password){
            //take jwt token
            const TOKEN = taketoken.token
            res.cookie('authorization' , TOKEN)
            res.cookie('username' , req.body.username)
            res.status(200).render('cpanel.ejs')
        }else{
            res.send({message : 'you cann not use cpannel'})
        }
    })
    .catch((err)=>console.log((err)))
}


const saveusers = (req , res)=>{
    const newuser = new userdatas(
        req.body
    )
    newuser.save()
    .then((resault)=>console.log('user save'))
    .catch((err)=>console.log(err))
}



module.exports = {validate , saveusers}
