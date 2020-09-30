var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
res.status(200).json({msn: "Hola mundo"});
});

router.post('/test', function(req, res, next) {
    req.body["msn"] = "Por el servidor";
    var data = req.body
    res.status(200).json(data);
    });

module.exports = router;