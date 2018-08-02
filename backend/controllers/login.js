const { passwordCheck } = require('../database/queries/select');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.post = (req, res, next)=>{
  const {username, password} = req.body;
  console.log(req.body);
  passwordCheck(username, (err, results)=>{
    console.log("results", results);
    if (err)  return next(err);
    if (!results.length) return res.send({msg: 'Sorry .. Username/Password invalid', status: false});
    bcrypt.compare(password, results[0].password, (errorComparing, result) => {
      if (errorComparing) return next(errorComparing);
      if (!result)
        return res.send({msg: 'Sorry .. Username/Password invalid', status: false});
      const payload = {
        id: results[0].id,
        username: results[0].user_name,
        role: results[0].user_role
      };

      jwt.sign(payload, process.env.SECRET, (errToken, token) => {
        if (errToken) return next(errToken);
        return res.send({msg: 'Login Success', status: true, token});

      });

  })
})
}
