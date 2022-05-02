const { response } = require('express');
const { redirect } = require('express/lib/response');
const MenuDB = require('../models/menu_model')
const db = new MenuDB();


db.init();

exports.menu_list = function(req, res) {
    res.send('<h1>Restaurant menu <p> Not yet added </p></h1>');
    db.getAllEntries();
}

exports.homepage = function(req, res)  {
    db.getAllEntries()
       .then((list) => {
           res.render('entries', {
               'title': 'Welcome to Restaurant',
               'entries': list
           });
           console.log('promise resolved');
        })
        .catch((err) => {
            console.log('promise rejected', err);


        })
    }


exports.new_dish = function(req, res) {
    res.render('newDish', {
        'title': 'Restaurant Menu'
    })
}

 exports.post_new_dish = function(req, res) {
     console.log('processing post-new_dish controller');
     if (!req.body.author) {
         response.status(400).send("New dishes must have a name.");
         return;
     }
     db.addDish(req.body.author, req.body.subject, req.body.contents);
     res,redirect('/');
 }
 
