const express = require('express');
const router = express.Router();
const controller = require('../controllers/restaurant_controllers');





router.get("/", function(req, res) {
  res.send('Welcome to Restaurant Lapicheto');

})

router.get('/guestbook', function(req, res){
res.send('<h1>Have a look at our menu!</h1>')
})

router.get('/about', function(req, res) {
    res.redirect('/about.html');
})

router.use(function(req, res){
    res.status(404);
    res.type('text/plain');
    res.send('404 Not Found');
})

router.use(function(req, res){
    res.status(500);
    res.type('text/plain');
    res.send('Internal Server Error');
})



module.exports = router;