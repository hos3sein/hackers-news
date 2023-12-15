const jwt = require('jsonwebtoken')



const token =(username) => {
    return jwt.sign({ username: username }, "secret-key", {expiresIn : '1h'});
  }



const validate = (auth)=>{
    return jwt.verify(auth , 'secret-key');
}



module.exports = {token , validate}