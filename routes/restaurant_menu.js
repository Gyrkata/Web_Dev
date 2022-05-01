const express = require('express');
const router = express.Router();
const controller = require('../controllers/restaurant_controllers');




router.get("/", controller.homepage);

router.get("/menu", controller.menu_list);

router.get("/add_dish", controller.new_dish);


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