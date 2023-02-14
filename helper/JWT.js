const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config({ path: "./config.env" });

function getAccessToken(user, res) {
    console.log(user)
  let accessToken = jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "1m"});
  let refreshToken = jwt.sign({user}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "1d"});
  res.json({
    status: "success",
    message: "user found!!!",
    data: {
      user: {
        _id: user.id,
        name: user.name,
        email: user.email,
      },
      accessToken,
      refreshToken
    }, 
  });
}
function authenticateAccessToken(req,res, next) {
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        if(err) return res.sendStatus(403)
        req.user = user;
        next();
    })
  }
function authenticateRefreshToken(req,res, next) {
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user)=>{
        if(err) return res.sendStatus(403)
        req.user = user;
        next();
    })
  }

module.exports = { getAccessToken, authenticateToken: authenticateAccessToken, authenticateRefreshToken };
