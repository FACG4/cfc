const bcrypt = require('bcrypt');
const signupInsert = require('./../database/queries/insert_signup.js')
exports.post = (req, res) => {
  const {
    fullName, userName, email, password
  } = req.body;

  bcrypt.hash(password, 10, (err, hash) => {
  

    if (err) {
      res.send({err})
     
      
  }

    
    
    else {
      signupInsert(fullName, userName, email,hash,(error, result) => {
        if(error){
          res.send({error})
          
        }
        else{
     res.send({ok:'Success'})
        }
     
      });
    }
  });
};