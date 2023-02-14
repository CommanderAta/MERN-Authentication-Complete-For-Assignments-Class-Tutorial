const express = require("express");
const router = express.Router();
const userModel = require("../model/model");
const { AuthCompare } = require("../helper/Authenticate");
const { getAccessToken, authenticateToken, authenticateRefreshToken } = require("../helper/JWT");

//POSTMAN TESTING

router.put("/edit/:id",authenticateToken, async (req, res) => {
  let userID = req.params.id;
  let userData = req.body;
  try {
    const editUser = await userModel.User.updateOne({ _id: userID }, userData);
    res.send(editUser);
    console.log("user Edited", editUser);
  } catch (error) {
    console.log("Problem in Editing User", userID);
    console.log("error", error);
  }
});

router.delete("/delete/:id",authenticateToken, async (req, res) => {
  let userID = req.params.id;
  try {
    const delUser = await userModel.User.findByIdAndDelete(userID);
    res.send(delUser);
    console.log("user Deleted", delUser);
  } catch (error) {
    console.log("Problem in Creating User", userID);
    console.log("error", error);
  }
});
router.post("/signUp", async (req, res) => {
  let newUser = {
    name: req?.body?.name,
    email: req?.body?.email,
    pass: req?.body?.pass,
  };
  try {
    const addUser = await userModel.User.create(newUser);
    res.send(addUser);
    console.log("user Created", addUser);
  } catch (error) {
    console.log("Problem in Creating User", newUser);
    console.log("error", error);
  }
});
router.post("/login", async (req, res, next) => {
  userModel.User.findOne({ email: req.body.email }, function (err, userInfo) {
    if (err) {
      next(err);
    } else {
      if (AuthCompare(req, res, userInfo)) {
        getAccessToken(userInfo, res);
      } else {
        res.json({
          status: "error",
          message: "Invalid email/password!!!",
          data: null,
        });
      }
    }
  });
});

router.get("/",authenticateToken, async (req, res) => {
  var allUsers = await userModel.User.find({});
  console.log(req.user.user) 
  res.send(allUsers.filter((user)=>{
    
    return JSON.stringify(user) == JSON.stringify(req.user.user);
  }));
});
router.post("/token",authenticateRefreshToken, (req, res) => {
  
  getAccessToken(req.user.user, res);
});

module.exports = router;
