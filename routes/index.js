var express = require('express');
var router = express.Router();

// Set up global object
var global = {
  
  title:"Scratch",
  desc: "A node express quickstart"
  
};

/* GET home page. */
router.get('/', function(req, res) {
	
  
  res.render('home', { 
    page: 'Home',
    global: global
  });
  
  
});

module.exports = router;