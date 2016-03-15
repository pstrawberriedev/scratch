var express = require('express');
var router = express.Router();

var master = {
  title:"Scratch"
};

/* GET home page. */
router.get('/', function(req, res) {
	
  //Just passing data through to views
  res.render('home', { 
    page: 'Home',
    master: master
  });
});

module.exports = router;