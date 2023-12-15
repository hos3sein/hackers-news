const express = require('express');
const datasaver = require('./mongodb/savedata.js')
const cookieparser = require('cookie-parser')
const validat = require('./validate/validation')
const validate2 = require('./validate/gettoken')
const getnew = require('./getdata/getnews.js')
const getcontents = require('./getdata/getcontent.js')


const app = express();



app.listen(3000 , (err)=>{
    if(err) throw (err)
    console.log('app is listening')
})


app.use(cookieparser());
app.set('view engine' , 'ejs')
app.set( 'views' , __dirname + '/views')
app.use(express.static('public'))
app.use(express.urlencoded({extended : true}))



app.get('/' , (req , res)=>{
    res.status(200).render('index.ejs')
})


app.get('/content/:id' , (req , res)=>{
    res.cookie('id' , req.params.id)
    res.status(200).render('content.ejs')
})


app.get('/getcontent' , getcontents)


app.get('/user' , (req ,res)=>{
    res.status(200).render('saveusers.ejs')
} )

app.post('/saveuser' , validat.saveusers)


app.get('/admin' , (req , res)=>{
    const auth = req.cookies.authorization
    try {
        validate2.validate(auth)
        res.status.render('cpanel.ejs')
    } catch (error) {
        res.status(200).render('signin.ejs')
    }
})




app.get('/getnews' , getnew.getnews)


app.get('/past' , (req , res)=>{
    res.status(200).render('pastnews.ejs')
})


app.post('/validate' , validat.validate)



app.post('/newnews' , datasaver.savenews)