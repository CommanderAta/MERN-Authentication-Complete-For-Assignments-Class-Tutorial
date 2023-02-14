
const bcrypt = require ('bcrypt');

function AuthCompare( req, res, userInfo, next){
    if (bcrypt.compareSync(req.body.pass, userInfo.pass)) {
        return true;
      } else { 
        return false;
      }
}

module.exports = {AuthCompare};