const mongoos = require('mongoose')


const url = 'mongodb+srv://kianlucifer0098:25255225@cluster0.n1icceg.mongodb.net/?retryWrites=true&w=majority'


const schema = mongoos.Schema;


const users = new schema ({
    username : {type : String , require : true},
    password : {type : String , require : true}
})


const Model = mongoos.model('users' , users)

module.exports = Model