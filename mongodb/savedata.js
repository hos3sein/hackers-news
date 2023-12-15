const mongodb = require('./database.js')


const getdate = ()=>{
    const datetime = new Date()
    console.log(datetime.getMonth())
    return datetime.toDateString()
}

const savenews = (req , res)=>{
    // req.body
    // console.log(req.body)
    const date = getdate()
    console.log(date)
    req.body['date'] =  date;

    const news = new mongodb  (
        req.body
    )
    news.save()
    .then((resault)=>{
        console.log('news updated')
        res.status(200).render('cpanel.ejs')
    })
    .catch((err)=>console.log(err))
}




module.exports = {savenews}
