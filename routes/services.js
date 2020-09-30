var express = require('express');
var router = express.Router();
var USER = require("../database/user");
/* GET home page. */
router.get('/usuario', (req, res, next) => {
  USER.find({}, (err, docs) => {
    res.status(200).json(docs);
  });
});
router.post("/usuario", (req, res) => {
  var datos = req.body;
  var typemusic = datos.music.split(",");
  var user = {};
  user["name"] = datos.name;
  user["lastname"] = datos.lastname;
  user["date"] = new Date();
  user["typemusic"] = typemusic;
  var newuser = new USER(user);
  newuser.save().then(() => {
    res.status(200).json({"msn" : "Usuario Registrado"});
  });
});
router.put("/usuario", (req, res) => {
  var datos = req.body;
  var id = req.query.id
  datos["otraclave"] = id;
  datos["timeserver"] = new Date();
  datos["method"] = "PUT"; 
  console.log(datos);
  res.status(200).json(datos);
});
router.delete("/usuario", (req, res) => {
  var datos = req.query;
  var name = datos.id;
  console.log(datos);
  console.log(name);
  res.status(200).json({
    msn: "DELETE"
  })
});

module.exports = router;
