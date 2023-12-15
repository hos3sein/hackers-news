const mongoos = require('mongoose')


const url = 'mongodb+srv://kianlucifer0098:25255225@cluster0.n1icceg.mongodb.net/?retryWrites=true&w=majority'


mongoos.connect(url)
.then((res)=>console.log('database connected'))
.catch((err)=>console.log(err))



const schema = mongoos.Schema;

const model = new schema({
      title :{
        type : String,
        require : true
      },
      content :{
        type : String,
        require : true
      },
      date : {
        type : String,
        require : true
      }
})



const M = mongoos.model('news' , model)

module.exports = M