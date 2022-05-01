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
           res.render("entries", {
               'title': 'Welcome to Restaurant Lapicheto',
               'entries': list
     

        })
    })
}

exports.new_dish = function(req, res) {
    res.send('<h1> Not yet added </h1>');
}

