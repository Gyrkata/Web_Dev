const express = require('express');
const router = express.Router();

router.get("/", function(req, res) {
  res.send('Welcome to Restaurant Lapicheto');

})

router.get('/guestbook', function(req, res){
res.send('<h1>Have a look at our menu!</h1>')
})



module.exports = router;